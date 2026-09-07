"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/landing/logo";
import { ThemeToggle } from "@/components/landing/theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

/**
 * Sticky top navigation — transparent until the page scrolls,
 * then gains a border + subtle shadow. Includes a mobile menu
 * that animates open/closed with height + opacity.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/80 backdrop-blur-md transition-all",
        scrolled && "border-border shadow-sm"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left — brand */}
          <a
            href="#top"
            aria-label="NOVA — back to top"
            className="flex shrink-0 items-center rounded-lg outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <Logo />
          </a>

          {/* Center — desktop navigation */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-transform duration-300 group-hover:scale-x-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ThemeToggle />
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <a href="#pricing">Sign in</a>
            </Button>
            <Button asChild className="px-3 sm:px-4">
              <a href="#pricing">Get Started</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 lg:hidden"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t bg-background/95 backdrop-blur lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Separator className="my-2" />
              <div className="flex gap-3 pt-1">
                <Button variant="outline" className="flex-1" asChild>
                  <a href="#pricing" onClick={() => setMenuOpen(false)}>
                    Sign in
                  </a>
                </Button>
                <Button className="flex-1" asChild>
                  <a href="#pricing" onClick={() => setMenuOpen(false)}>
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
