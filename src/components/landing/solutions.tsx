"use client";

import type { LucideIcon } from "lucide-react";
import {
  Check,
  Code2,
  Globe,
  Megaphone,
  Palette,
  Settings2,
  Target,
} from "lucide-react";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

const solutions: Solution[] = [
  {
    icon: Code2,
    title: "Engineering",
    description:
      "Sprint planning, bug triage and release tracking — with automated standups built in.",
    points: [
      "Sprint boards & velocity insights",
      "Auto-linked PRs and issues",
      "AI-triaged bug reports",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Plan campaigns, manage creative reviews and report results without spreadsheet chaos.",
    points: [
      "Content calendars & campaign briefs",
      "Approval workflows with deadlines",
      "Real-time performance dashboards",
    ],
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Collect feedback, iterate on mockups and hand off to engineering with full context.",
    points: [
      "Visual feedback on any file",
      "Version history & handoff docs",
      "Auto-sync with Figma",
    ],
  },
  {
    icon: Target,
    title: "Product",
    description:
      "Turn research and ideas into prioritized roadmaps everyone can follow.",
    points: [
      "Idea intake & prioritization",
      "Roadmap timelines",
      "Customer feedback loops",
    ],
  },
  {
    icon: Settings2,
    title: "Operations",
    description:
      "Standardize recurring processes so nothing falls through the cracks.",
    points: [
      "Reusable process templates",
      "SLA tracking & alerts",
      "Vendor and budget trackers",
    ],
  },
  {
    icon: Globe,
    title: "Remote & Hybrid Teams",
    description:
      "Keep distributed teams in sync across time zones without adding more meetings.",
    points: [
      "Async daily updates",
      "Time-zone aware scheduling",
      "Team health analytics",
    ],
  },
];

/**
 * Solutions — six team use cases rendered as hoverable cards
 * with icon tiles and check-listed capabilities.
 */
export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solutions"
          eyebrowIcon={Target}
          title="Built for every team"
          description="Whether you ship code, campaigns or products — NOVA adapts to the way your team works."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <Reveal key={solution.title} delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10">
                <div
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/15 text-emerald-600 dark:text-emerald-400"
                >
                  <solution.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">{solution.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {solution.description}
                </p>

                <ul className="mt-4 space-y-2 border-t pt-4">
                  {solution.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-emerald-500"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
