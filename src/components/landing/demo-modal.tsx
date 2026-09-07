"use client";

import { useState } from "react";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { BarChart3, KanbanSquare, Pause, Play, Zap, type LucideIcon } from "lucide-react";

import { useDemoModal } from "@/components/landing/demo-modal-context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

/** Mock "video" length in seconds — matches the 2:00 label on the control bar. */
const DEMO_DURATION_SECONDS = 120;

const floatingCards: {
  id: string;
  Icon: LucideIcon;
  text: string;
  position: string;
  enterDelay: number;
  floatDuration: number;
}[] = [
  {
    id: "board",
    Icon: KanbanSquare,
    text: "Sprint board updated",
    position: "left-3 top-3 sm:left-6 sm:top-6",
    enterDelay: 0.1,
    floatDuration: 3,
  },
  {
    id: "automation",
    Icon: Zap,
    text: "Automation ran · 4 tasks",
    position: "right-3 top-3 sm:right-6 sm:top-6",
    enterDelay: 0.25,
    floatDuration: 3.5,
  },
  {
    id: "velocity",
    Icon: BarChart3,
    text: "Velocity +18% this month",
    position: "bottom-14 left-3 sm:bottom-16 sm:left-6",
    enterDelay: 0.4,
    floatDuration: 4,
  },
];

const demoTiles: { Icon: LucideIcon; title: string; description: string }[] = [
  { Icon: Zap, title: "Automations", description: "Save 6+ hrs/week" },
  { Icon: KanbanSquare, title: "Boards", description: "Always in sync" },
  { Icon: BarChart3, title: "Insights", description: "Zero guesswork" },
];

/**
 * Controlled product-demo dialog driven by DemoModalContext.
 * Rendered once by the page assembler (it never renders its own provider).
 * Simulates a video player: play/pause, linear 0%→100% progress over 120s
 * (true pause/resume via a motion value) and a floating-card "playing" scene.
 */
export function DemoModal() {
  const { open, setOpen } = useDemoModal();
  const reduceMotion = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const progress = useMotionValue(0);
  const progressWidth = useTransform(progress, (value) => `${value}%`);

  // Reset the mock player whenever the dialog closes.
  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      progress.stop();
      progress.set(0);
      setPlaying(false);
    }
    setOpen(nextOpen);
  };

  const togglePlayback = () => {
    if (playing) {
      // Pause: stop mid-animation; progress value freezes for a true resume.
      progress.stop();
      setPlaying(false);
      return;
    }

    const current = progress.get();
    const restart = current >= 99.5;
    if (restart) {
      progress.set(0);
    }
    const remaining = restart
      ? DEMO_DURATION_SECONDS
      : DEMO_DURATION_SECONDS * (1 - current / 100);

    setPlaying(true);
    animate(progress, 100, {
      duration: Math.max(remaining, 0.1),
      ease: "linear",
      onComplete: () => {
        setPlaying(false);
        progress.set(0);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-3xl">
        <DialogHeader className="space-y-1.5 border-b px-6 py-5 pr-12">
          <DialogTitle className="text-lg font-semibold">
            NOVA in action — 2-minute tour
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            See how NOVA plans, automates and tracks your team&apos;s work in real time.
          </DialogDescription>
        </DialogHeader>

        {/* Mock player */}
        <div className="px-6 pt-6">
          <div className="relative aspect-video overflow-hidden rounded-xl border bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10">
            {/* Center play/pause button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                aria-label={playing ? "Pause product demo" : "Play product demo"}
                onClick={togglePlayback}
                className="relative isolate flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105"
              >
                {!playing && !reduceMotion && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/25"
                  />
                )}
                {playing ? (
                  <Pause className="h-6 w-6 fill-current" aria-hidden="true" />
                ) : (
                  <Play className="ml-1 h-6 w-6 fill-current" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* "Playing" scene: floating mini-cards + scanning bar */}
            <AnimatePresence>
              {playing && (
                <motion.div
                  key="demo-scene"
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {floatingCards.map((card) => (
                    <motion.div
                      key={card.id}
                      className={cn("absolute", card.position)}
                      initial={{ opacity: 0, y: 10, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.35, delay: card.enterDelay, ease: "easeOut" }}
                    >
                      <motion.div
                        className="flex items-center gap-1.5 rounded-lg border bg-card/95 px-3 py-2 text-[11px] font-medium shadow-md"
                        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                        transition={{
                          duration: card.floatDuration,
                          delay: card.enterDelay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <card.Icon
                          className="h-3.5 w-3.5 shrink-0 text-emerald-500"
                          aria-hidden="true"
                        />
                        <span>{card.text}</span>
                      </motion.div>
                    </motion.div>
                  ))}
                  {!reduceMotion && (
                    <motion.div
                      className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"
                      initial={{ left: "-15%" }}
                      animate={{ left: "110%" }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Control bar */}
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-background/80 px-4 py-2.5 backdrop-blur">
              <button
                type="button"
                aria-label={playing ? "Pause product demo" : "Play product demo"}
                onClick={togglePlayback}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {playing ? (
                  <Pause className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                ) : (
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-current" aria-hidden="true" />
                )}
              </button>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted-foreground/20">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                  style={{ width: progressWidth }}
                />
              </div>
              <span className="text-[11px] font-medium tabular-nums text-muted-foreground">
                2:00
              </span>
            </div>
          </div>
        </div>

        {/* Feature tiles */}
        <div className="grid grid-cols-3 gap-3 px-6 py-6">
          {demoTiles.map((tile) => (
            <div key={tile.title} className="rounded-xl border bg-muted/40 p-3 text-center">
              <tile.Icon className="mx-auto h-5 w-5 text-emerald-500" aria-hidden="true" />
              <p className="mt-1.5 text-xs font-medium">{tile.title}</p>
              <p className="text-[11px] text-muted-foreground">{tile.description}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2 border-t px-6 py-4 sm:flex-row sm:justify-end">
          <Button asChild onClick={() => setOpen(false)}>
            <a href="#pricing">Start Free Trial</a>
          </Button>
          <Button variant="outline" asChild onClick={() => setOpen(false)}>
            <a href="#final-cta">Explore Pricing</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
