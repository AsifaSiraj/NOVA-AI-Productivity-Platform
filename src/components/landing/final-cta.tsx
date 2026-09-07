"use client";

import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

import { useDemoModal } from "@/components/landing/demo-modal-context";
import { Reveal } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";

/**
 * Final call-to-action banner that closes out the page.
 * "Watch Demo" opens the shared demo modal through DemoModalContext.
 */
export function FinalCta() {
  const { setOpen } = useDemoModal();

  return (
    <section id="final-cta" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-700 px-6 py-16 text-center shadow-2xl shadow-emerald-600/25 md:px-16 md:py-24">
            {/* Decorative orbs + subtle grid */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            </div>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-emerald-50">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Ready to get started?
              </span>
              <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Build better. Work smarter. Starting today.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base text-emerald-50/90 sm:text-lg">
                Join 10,000+ teams already using NOVA to automate the busywork and focus on
                the work that matters.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Button
                  size="lg"
                  asChild
                  className="group h-12 bg-white px-8 text-base font-semibold text-emerald-700 shadow-lg hover:bg-emerald-50"
                >
                  <a href="#pricing">
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
                  className="h-12 border-white/40 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white dark:border-white/40 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
                  onClick={() => setOpen(true)}
                >
                  <PlayCircle aria-hidden="true" />
                  Watch Demo
                </Button>
              </div>

              <p className="mt-6 text-xs text-emerald-100/80 sm:text-sm">
                Free 14-day Pro trial · No credit card required · Cancel anytime
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
