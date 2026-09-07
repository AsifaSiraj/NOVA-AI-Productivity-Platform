"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Boxes,
  Cloud,
  Hexagon,
  Orbit,
  Sigma,
  Sun,
  Triangle,
  type LucideIcon,
} from "lucide-react";

const COMPANIES: { name: string; Icon: LucideIcon }[] = [
  { name: "Vertex", Icon: Triangle },
  { name: "Quantify", Icon: Sigma },
  { name: "Nimbus", Icon: Cloud },
  { name: "Orbitix", Icon: Orbit },
  { name: "Hexlab", Icon: Hexagon },
  { name: "Lumina", Icon: Sun },
  { name: "Pulsewave", Icon: Activity },
  { name: "Zentro", Icon: Boxes },
];

function CompanyItem({ name, Icon }: { name: string; Icon: LucideIcon }) {
  return (
    <div className="flex items-center gap-2 text-lg font-semibold text-muted-foreground/70 transition-colors hover:text-foreground">
      <Icon className="h-5 w-5" aria-hidden="true" />
      {name}
    </div>
  );
}

/**
 * Social proof strip — infinite logo marquee that falls back to a
 * static wrapped row when the user prefers reduced motion.
 */
export function TrustedBy() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Trusted by leading companies"
      className="border-y bg-muted/30 py-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by 10,000+ teams worldwide
        </p>

        {reduceMotion ? (
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {COMPANIES.map(({ name, Icon }) => (
              <CompanyItem key={name} name={name} Icon={Icon} />
            ))}
          </div>
        ) : (
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div
              className="flex w-max items-center gap-14 pr-14"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {COMPANIES.map(({ name, Icon }) => (
                <CompanyItem key={name} name={name} Icon={Icon} />
              ))}
              <div
                aria-hidden="true"
                className="flex items-center gap-14"
              >
                {COMPANIES.map(({ name, Icon }) => (
                  <CompanyItem key={name} name={name} Icon={Icon} />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
