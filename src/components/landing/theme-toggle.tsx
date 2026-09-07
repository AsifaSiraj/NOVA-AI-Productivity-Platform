"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/**
 * Dark/light mode toggle. The icon is swapped with CSS (`dark:` variants)
 * instead of mounted-state so there is no hydration mismatch and no
 * state-in-effect — the correct icon renders on the very first paint.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-full text-muted-foreground transition-colors hover:text-foreground"
    >
      <Sun className="hidden h-5 w-5 dark:block" aria-hidden="true" />
      <Moon className="block h-5 w-5 dark:hidden" aria-hidden="true" />
    </Button>
  );
}
