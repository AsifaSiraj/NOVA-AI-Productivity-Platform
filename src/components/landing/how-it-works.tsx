"use client";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { Rocket } from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Connect your tools",
    description:
      "Import projects from Jira, Asana or Trello and sync Slack, GitHub and your calendar in one click.",
  },
  {
    number: "02",
    title: "Let NOVA organize the work",
    description:
      "The AI sorts tasks, drafts plans and assigns owners based on priority and each teammate’s real workload.",
  },
  {
    number: "03",
    title: "Track progress and ship faster",
    description:
      "Live dashboards show what’s on track — and NOVA flags risks before they become delays.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          eyebrowIcon={Rocket}
          title="Up and running in minutes, not months"
          description="Three simple steps to put your team’s workflow on autopilot."
        />

        <div className="relative">
          {/* Connecting dashed line (desktop only, passes behind the badges) */}
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-9 hidden border-t-2 border-dashed border-emerald-500/30 lg:block"
          />

          <div className="relative grid gap-10 md:grid-cols-3 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.12} className="relative text-center">
                <div
                  aria-hidden="true"
                  className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-xl font-bold text-white shadow-lg shadow-emerald-500/25 ring-4 ring-background"
                >
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
