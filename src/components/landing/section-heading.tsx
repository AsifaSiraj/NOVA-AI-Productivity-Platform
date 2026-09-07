import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  /** Small pill label shown above the title */
  eyebrow: string;
  /** Icon rendered inside the eyebrow pill */
  eyebrowIcon?: LucideIcon;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

/**
 * Consistent section header: eyebrow pill → title → description.
 * Keeps typography uniform across every landing section.
 */
export function SectionHeading({
  eyebrow,
  eyebrowIcon: Icon,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-4 md:mb-16",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
        {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden="true" /> : null}
        {eyebrow}
      </span>
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
