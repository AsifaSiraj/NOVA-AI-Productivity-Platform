"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, CheckCircle2, Clock, Star, Zap } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { Badge } from "@/components/ui/badge";

const CHECKLIST = [
  "One workspace for tasks, docs and team chat",
  "AI that drafts, sorts and schedules for you",
  "Insights that show exactly what’s slowing you down",
  "Works with Slack, GitHub, Figma, Gmail and 100+ tools",
];

const AI_TASKS = [
  "Draft announcement post — Maya",
  "Update pricing page — Jon",
  "QA pass on signup flow — Aisha",
];

const AVATARS = [
  { initials: "MK", gradient: "from-emerald-500 to-teal-600" },
  { initials: "JT", gradient: "from-teal-500 to-emerald-600" },
  { initials: "AS", gradient: "from-emerald-600 to-teal-500" },
  { initials: "RL", gradient: "from-teal-600 to-emerald-500" },
  { initials: "DP", gradient: "from-emerald-500 to-teal-500" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Product"
              eyebrowIcon={Bot}
              title="Meet NOVA — your team’s AI copilot"
              description="NOVA doesn’t just store your work — it actively helps you do it. The AI drafts plans, sorts priorities and clears busywork so your team can focus on what matters."
              className="mb-8"
            />

            <ul className="space-y-4">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
                  />
                  <span className="text-sm font-medium sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-xs font-semibold">
                <Clock aria-hidden="true" className="h-3.5 w-3.5 text-emerald-500" />
                40% less time in meetings
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-xs font-semibold">
                <Zap aria-hidden="true" className="h-3.5 w-3.5 text-emerald-500" />
                2.5M tasks automated
              </span>
            </div>

            <a
              href="#pricing"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 underline-offset-4 hover:underline dark:text-emerald-400"
            >
              See NOVA in action
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </Reveal>

          {/* Right — AI assistant visual */}
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-xl shadow-emerald-500/5">
              {/* Header */}
              <div className="flex items-center gap-2.5 border-b bg-muted/40 px-5 py-4">
                <div
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600"
                >
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">NOVA Assistant</p>
                  <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"
                    />
                    Online — watching #launch-prep
                  </p>
                </div>
              </div>

              {/* Chat (decorative demo) */}
              <div aria-hidden="true" className="space-y-4 p-5">
                {/* User message */}
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-muted px-4 py-3 text-sm">
                  Prep the Q3 launch checklist, please.
                </div>

                {/* AI reply */}
                <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm">
                  Done! I created 12 tasks, assigned 4 owners and blocked Friday
                  afternoon for final review.
                  <div className="mt-3 space-y-2">
                    {AI_TASKS.map((task) => (
                      <div key={task} className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex w-16 items-center justify-center gap-1 rounded-2xl rounded-bl-md border bg-muted/50 px-3 py-2.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>

              {/* Footer strip */}
              <div className="flex items-center justify-between border-t bg-muted/40 px-5 py-3 text-xs text-muted-foreground">
                <span>Automated · No manual follow-ups</span>
                <Badge
                  variant="secondary"
                  className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400"
                >
                  AI-powered
                </Badge>
              </div>
            </div>

            {/* Social proof row (decorative) */}
            <div
              aria-hidden="true"
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
            >
              <div className="flex -space-x-2">
                {AVATARS.map((avatar) => (
                  <div
                    key={avatar.initials}
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${avatar.gradient} text-[10px] font-bold text-white ring-2 ring-background`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Loved by 10,000+ teams</p>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
