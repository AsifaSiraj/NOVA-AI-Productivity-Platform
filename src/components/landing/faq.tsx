"use client";

import { CircleHelp } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type FaqEntry = {
  question: string;
  answer: string;
};

const faqs: FaqEntry[] = [
  {
    question: "How does the free plan work?",
    answer:
      "Starter is free forever for up to 3 projects and 2 team members — no credit card required. Upgrade to Pro or Enterprise whenever you need AI automation, unlimited projects and advanced analytics.",
  },
  {
    question: "What exactly can NOVA's AI automate?",
    answer:
      "NOVA prioritizes tasks, assigns owners based on workload, writes meeting summaries, drafts project plans, triages incoming requests and flags at-risk deadlines. The AI suggests — you approve. You stay in full control.",
  },
  {
    question: "Is my data secure and compliant?",
    answer:
      "Yes. NOVA is SOC 2 Type II certified and GDPR compliant, with encryption in transit and at rest, SSO/SAML on the Enterprise plan and granular role-based permissions for every workspace.",
  },
  {
    question: "Which tools does NOVA integrate with?",
    answer:
      "100+ native integrations including Slack, GitHub, Figma, Google Workspace, Microsoft 365, Zoom and Jira — plus a REST API and webhooks for anything else your team relies on.",
  },
  {
    question: "Can I cancel or change plans anytime?",
    answer:
      "Absolutely. Upgrade, downgrade or cancel in two clicks from billing settings. If you cancel, you keep access until the end of your billing period and can export your data for 90 days.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most teams are fully set up in under an hour. Import from Jira, Asana or Trello in one click — our AI pre-configures boards, workflows and automations for you. Enterprise plans include guided onboarding with a specialist.",
  },
];

/**
 * FAQ — single-collapsible accordion styled as rounded cards,
 * opening state highlighted with the emerald accent.
 */
export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          eyebrowIcon={CircleHelp}
          title="Frequently asked questions"
          description="Everything you need to know about NOVA. Can't find your answer? Email support@nova.io — we reply within a day."
        />

        <Reveal>
          <Accordion
            type="single"
            collapsible
            className="mx-auto w-full max-w-3xl"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i + 1}`}
                className="mb-3 rounded-xl border bg-card px-5 transition-colors last:border-b data-[state=open]:border-emerald-500/40 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
