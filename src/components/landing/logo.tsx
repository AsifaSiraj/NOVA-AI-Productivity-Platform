import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

/**
 * NOVA brand logo — gradient bolt tile + wordmark.
 * Used in the navbar and footer to keep branding consistent.
 */
export function Logo({ className, size = "md" }: LogoProps) {
  const boxSize =
    size === "sm" ? "h-8 w-8" : size === "lg" ? "h-11 w-11" : "h-9 w-9";
  const iconSize =
    size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";
  const textSize =
    size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25",
          boxSize
        )}
        aria-hidden="true"
      >
        <Zap className={cn(iconSize, "fill-current")} strokeWidth={1.5} />
      </span>
      <span className={cn("font-bold tracking-tight", textSize)}>NOVA</span>
    </span>
  );
}
