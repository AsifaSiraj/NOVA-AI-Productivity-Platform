"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

type DemoModalContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

/**
 * Global state for the product demo modal so any section
 * (hero, navbar, final CTA) can open it from its own buttons.
 */
export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const setOpenStable = useCallback((value: boolean) => setOpen(value), []);

  return (
    <DemoModalContext.Provider value={{ open, setOpen: setOpenStable }}>
      {children}
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return ctx;
}
