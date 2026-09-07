"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  CreditCard,
  Headphones,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Billing = "monthly" | "annual";

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  cta: string;
  popular?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For individuals getting started",
    monthly: 0,
    annual: 0,
    cta: "Start for Free",
    features: [
      "Up to 3 projects",
      "Basic task management",
      "1 GB file storage",
      "Mobile & web apps",
      "Community support",
    ],
  },
  {
    name: "Pro",
    tagline: "For growing teams that need AI power",
    monthly: 15,
    annual: 12,
    cta: "Start 14-Day Free Trial",
    popular: true,
    features: [
      "Unlimited projects",
      "AI task automation & summaries",
      "Advanced boards, timelines & sprints",
      "100+ integrations",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For organizations with advanced needs",
    monthly: 29,
    annual: 24,
    cta: "Contact Sales",
    features: [
      "Everything in Pro",
      "SSO / SAML & SCIM provisioning",
      "Dedicated success manager",
      "Audit logs & advanced security",
      "Custom onboarding & training",
      "99.9% uptime SLA",
    ],
  },
];

const reassurances = [
  { icon: ShieldCheck, label: "Bank-level encryption" },
  { icon: RefreshCw, label: "Cancel anytime" },
  { icon: Headphones, label: "24/7 support on Pro & Enterprise" },
];

/**
 * Pricing — three plans with an animated monthly/annual billing toggle
 * (zero layout shift thanks to fixed-height price sub-lines) and a
 * "Most Popular" highlighted Pro plan.
 */
export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const { toast } = useToast();

  return (
    <section id="pricing" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          eyebrowIcon={CreditCard}
          title="Simple pricing that scales with you"
          description="Start free and upgrade when you're ready. Switch to annual billing and save 20%."
        />

        {/* Billing period toggle */}
        <div
          role="group"
          aria-label="Billing period"
          className="mx-auto mb-12 flex w-fit items-center rounded-full border bg-muted p-1"
        >
          <button
            type="button"
            aria-pressed={billing === "monthly"}
            onClick={() => setBilling("monthly")}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              billing === "monthly"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={billing === "annual"}
            onClick={() => setBilling("annual")}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              billing === "annual"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Annual
            <span className="ml-2 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
              Save 20%
            </span>
          </button>
        </div>

        <div className="mx-auto mt-4 grid max-w-5xl items-stretch gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, i) => {
            const price = billing === "monthly" ? plan.monthly : plan.annual;
            const isEnterprise = plan.name === "Enterprise";
            const priceSubline =
              billing === "annual" && price > 0
                ? "Billed annually"
                : plan.monthly === 0
                  ? "Free forever"
                  : "Billed monthly";

            return (
              <Reveal key={plan.name} delay={i * 0.1} className="h-full">
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border bg-card p-8 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10",
                    plan.popular &&
                      "border-emerald-500 bg-gradient-to-b from-emerald-500/[0.06] to-transparent shadow-xl shadow-emerald-500/15 dark:border-emerald-400 lg:scale-[1.03]"
                  )}
                >
                  {plan.popular ? (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-1 text-xs font-semibold text-white shadow-md">
                      Most Popular
                    </span>
                  ) : null}

                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.tagline}
                  </p>

                  <div className="mt-6 flex items-end gap-1.5">
                    <motion.span
                      key={billing}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl font-bold tracking-tight"
                    >
                      ${price}
                    </motion.span>
                    <span className="pb-1.5 text-sm text-muted-foreground">
                      / user / mo
                    </span>
                  </div>

                  {/* Fixed-height sub-line so toggling billing never shifts layout */}
                  <p
                    aria-live="polite"
                    className="mt-1 h-4 text-xs text-muted-foreground"
                  >
                    {priceSubline}
                  </p>

                  <ul className="mt-8 flex-1 space-y-3 border-t pt-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    type="button"
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                    className={cn(
                      "mt-8 w-full",
                      plan.popular &&
                        "border-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700"
                    )}
                    onClick={() =>
                      toast({
                        title: isEnterprise
                          ? "Our sales team will reach out!"
                          : "Your free trial is ready!",
                        description: isEnterprise
                          ? "Thanks for your interest — check your inbox for next steps."
                          : "No credit card required. Full access for 14 days.",
                      })
                    }
                  >
                    {plan.cta}
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          {reassurances.map((item) => (
            <li key={item.label} className="flex items-center gap-1.5">
              <item.icon
                aria-hidden="true"
                className="h-4 w-4 text-emerald-500"
              />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
