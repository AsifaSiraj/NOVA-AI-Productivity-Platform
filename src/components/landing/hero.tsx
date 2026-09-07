"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  KanbanSquare,
  LayoutDashboard,
  Lock,
  PlayCircle,
  Sparkles,
  Users,
} from "lucide-react";
import { useDemoModal } from "@/components/landing/demo-modal-context";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const SIDEBAR_ITEMS = [
  { label: "Dashboard", Icon: LayoutDashboard, active: false },
  { label: "Projects", Icon: KanbanSquare, active: true },
  { label: "Tasks", Icon: CheckCircle2, active: false },
  { label: "Team", Icon: Users, active: false },
  { label: "Reports", Icon: BarChart3, active: false },
] as const;

const TEAM_AVATARS = [
  { initials: "AK", className: "bg-gradient-to-br from-emerald-500 to-teal-600" },
  { initials: "MJ", className: "bg-gradient-to-br from-teal-500 to-emerald-600" },
  { initials: "SR", className: "bg-gradient-to-br from-emerald-600 to-teal-500" },
] as const;

const KANBAN_COLUMNS = [
  {
    title: "To Do",
    dot: "bg-zinc-400",
    cards: [
      { title: "Redesign onboarding flow", tag: "Design", avatar: "from-emerald-500 to-teal-600" },
      { title: "Refactor webhook pipeline", tag: "API", avatar: "from-teal-500 to-emerald-600" },
    ],
  },
  {
    title: "In Progress",
    dot: "bg-amber-500",
    cards: [
      { title: "AI task prioritization v2", tag: "AI", avatar: "from-emerald-600 to-teal-500" },
      { title: "Realtime collaboration sync", tag: "API", avatar: "from-teal-600 to-emerald-500" },
      { title: "Q3 growth landing tests", tag: "Growth", avatar: "from-emerald-500 to-teal-600" },
    ],
  },
  {
    title: "Done",
    dot: "bg-emerald-500",
    cards: [
      { title: "Migrate auth to passkeys", tag: "API", avatar: "from-teal-500 to-emerald-600" },
      { title: "Customer health dashboard", tag: "Growth", avatar: "from-emerald-600 to-teal-500" },
    ],
  },
] as const;

/**
 * Hero — headline, CTAs and a pure-CSS product mockup over an
 * animated ambient background (blurred orbs + masked grid).
 */
export function Hero() {
  const { setOpen } = useDemoModal();
  const reduceMotion = useReducedMotion();

  const contentContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
    },
  };

  const contentItem: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Background — blurred orbs */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-32 -left-32 z-0"
        animate={reduceMotion ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-[480px] w-[480px] rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/15" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="absolute top-24 -right-40 z-0"
        animate={reduceMotion ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-[520px] w-[520px] rounded-full bg-teal-400/20 blur-3xl dark:bg-teal-500/10" />
      </motion.div>

      {/* Background — subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,oklch(0.556_0.015_170/0.09)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.556_0.015_170/0.09)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,oklch(1_0_0/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_35%,black,transparent)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Copy */}
        <motion.div
          variants={contentContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={contentItem}>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-500/20 dark:text-emerald-400"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              NOVA AI 2.0 is now live
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.div>

          <motion.h1
            variants={contentItem}
            className="mt-6 text-4xl font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Build Better.
            <br />
            <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
              Work Smarter.
            </span>
          </motion.h1>

          <motion.p
            variants={contentItem}
            className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-muted-foreground sm:text-xl"
          >
            NOVA is the AI-powered productivity platform that helps teams
            manage projects, automate repetitive tasks and collaborate
            efficiently — all in one place.
          </motion.p>

          <motion.div
            variants={contentItem}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <a href="#pricing" className="group">
                Start Free Trial
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base"
              onClick={() => setOpen(true)}
            >
              <PlayCircle aria-hidden="true" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.p
            variants={contentItem}
            className="mt-5 text-xs text-muted-foreground sm:text-sm"
          >
            Free 14-day Pro trial
            <span aria-hidden="true" className="mx-2">·</span>
            No credit card required
            <span aria-hidden="true" className="mx-2">·</span>
            Cancel anytime
          </motion.p>
        </motion.div>

        {/* Product mockup (decorative) */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative z-10 mx-auto mt-16 max-w-5xl md:mt-20"
        >
          <div className="overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-emerald-500/10 ring-1 ring-emerald-500/10">
            {/* Browser title bar */}
            <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
              <div className="flex shrink-0 items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="mx-auto flex items-center gap-1.5 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                <Lock className="h-3 w-3" />
                app.nova.io
              </div>
              <div className="w-[52px] shrink-0" />
            </div>

            {/* App body */}
            <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col gap-1 border-r bg-muted/30 p-3">
                {SIDEBAR_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium",
                      item.active
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                        : "text-muted-foreground"
                    )}
                  >
                    <item.Icon className="h-4 w-4" />
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Main panel */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Sprint 24 — Q3 Launch</p>
                  <div className="flex -space-x-2">
                    {TEAM_AVATARS.map((avatar) => (
                      <span
                        key={avatar.initials}
                        className={cn(
                          "flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold text-white ring-2 ring-card",
                          avatar.className
                        )}
                      >
                        {avatar.initials}
                      </span>
                    ))}
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-[10px] font-semibold text-muted-foreground ring-2 ring-card">
                      +3
                    </span>
                  </div>
                </div>

                <Progress value={68} className="mt-3 h-1.5" />
                <p className="mt-1.5 text-[11px] text-muted-foreground">
                  68% complete
                </p>

                {/* Kanban board */}
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {KANBAN_COLUMNS.map((column) => (
                    <div key={column.title}>
                      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        <span className={cn("h-1.5 w-1.5 rounded-full", column.dot)} />
                        {column.title}
                      </div>
                      <div className="mt-2 space-y-2">
                        {column.cards.map((card) => (
                          <div
                            key={card.title}
                            className="rounded-lg border bg-background p-3 text-left shadow-sm"
                          >
                            <p className="text-xs font-medium">{card.title}</p>
                            <div className="mt-2 flex items-center justify-between">
                              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
                                {card.tag}
                              </span>
                              <span
                                className={cn(
                                  "h-5 w-5 rounded-full bg-gradient-to-br",
                                  card.avatar
                                )}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating AI suggestion card */}
          <motion.div
            className="absolute -right-4 -top-6 hidden w-64 rotate-2 lg:block"
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-xl border bg-card/95 p-4 shadow-xl backdrop-blur">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-500" />
                <p className="text-xs font-semibold">AI Suggestion</p>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Reschedule 4 tasks to unblock the design team.
              </p>
              <div className="mt-3 flex gap-2">
                <Button size="sm" className="h-7 px-3 text-xs" tabIndex={-1}>
                  Apply
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-7 px-3 text-xs"
                  tabIndex={-1}
                >
                  Dismiss
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Floating notification card */}
          <motion.div
            className="absolute -left-6 bottom-10 hidden lg:block"
            animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex items-center gap-2 rounded-xl border bg-card/95 px-4 py-3 shadow-lg backdrop-blur">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <p className="text-xs font-medium">
                Deployment task auto-completed
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
