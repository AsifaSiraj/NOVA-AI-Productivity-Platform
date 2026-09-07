"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

import { Reveal } from "@/components/landing/reveal";

type Stat = {
  target: number;
  suffix: string;
  label: string;
  decimals: number;
};

const STATS: Stat[] = [
  { target: 10000, suffix: "+", label: "Active teams", decimals: 0 },
  { target: 2.5, suffix: "M", label: "Tasks automated", decimals: 1 },
  { target: 99.9, suffix: "%", label: "Uptime SLA", decimals: 1 },
  { target: 4.9, suffix: "/5", label: "Average rating", decimals: 1 },
];

/** Animated count-up that starts when `start` flips to true. */
function useCountUp(target: number, decimals: number, start: boolean, duration = 1.6) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [start, target, duration, decimals]);

  return value.toFixed(decimals);
}

function formatStat(value: number, decimals: number) {
  return decimals > 0 ? value.toFixed(decimals) : value.toLocaleString("en-US");
}

function StatItem({ stat, start, delay }: { stat: Stat; start: boolean; delay: number }) {
  const animated = useCountUp(stat.target, stat.decimals, start);
  const display = formatStat(Number(animated), stat.decimals);
  const final = formatStat(stat.target, stat.decimals);

  return (
    <Reveal delay={delay} className="text-center">
      <p className="text-4xl font-bold tracking-tight md:text-5xl">
        <span
          aria-hidden="true"
          className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400"
        >
          {display}
          {stat.suffix}
        </span>
        <span className="sr-only">
          {final}
          {stat.suffix}
        </span>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
    </Reveal>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="border-y bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              stat={stat}
              start={inView}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
