"use client";

import {
  FileText,
  KanbanSquare,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "AI Task Automation",
    description:
      "NOVA auto-prioritizes work, assigns tasks to the right people and schedules everything around your team’s real capacity.",
  },
  {
    icon: KanbanSquare,
    title: "Smart Project Tracking",
    description:
      "Kanban boards, timelines and sprint views that update in real time — no more manual status meetings.",
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description:
      "Shared docs, instant comments and @mentions keep everyone aligned without drowning in notifications.",
  },
  {
    icon: FileText,
    title: "AI Meeting Notes",
    description:
      "NOVA joins your calls, writes clean summaries and turns every action item into an assigned task automatically.",
  },
  {
    icon: Workflow,
    title: "No-Code Workflow Builder",
    description:
      "Automate handoffs, approvals and follow-ups with a visual builder and 100+ native integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 Type II, SSO/SAML and granular permissions keep your data locked down at every layer.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          eyebrowIcon={Sparkles}
          title="Everything your team needs to move fast"
          description="From AI-powered automation to enterprise-grade security — NOVA brings your entire workflow into one intelligent workspace."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10">
                <div
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/15 text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:text-emerald-400"
                >
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
