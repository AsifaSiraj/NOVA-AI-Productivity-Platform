"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";

const SCROLL_THRESHOLD = 500;

/**
 * Fixed floating action button that appears after the user has
 * scrolled down the page and smooth-scrolls back to the top.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-5 right-5 z-50 sm:bottom-8 sm:right-8"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <Button
            size="icon"
            aria-label="Back to top"
            onClick={scrollToTop}
            className="h-11 w-11 rounded-full bg-primary text-primary-foreground shadow-lg shadow-emerald-500/25 hover:bg-primary/90"
          >
            <ArrowUp className="size-5" aria-hidden="true" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
