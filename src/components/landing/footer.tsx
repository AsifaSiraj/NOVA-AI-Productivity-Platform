"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Linkedin,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";

import { Logo } from "@/components/landing/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type NewsletterStatus = "idle" | "error" | "success";

const socialLinks = [
  { label: "NOVA on X", href: "#", Icon: Twitter },
  { label: "NOVA on GitHub", href: "#", Icon: Github },
  { label: "NOVA on LinkedIn", href: "#", Icon: Linkedin },
  { label: "NOVA on YouTube", href: "#", Icon: Youtube },
];

const linkColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#features" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#faq" },
      { label: "API Reference", href: "#" },
      { label: "Community", href: "#" },
      { label: "System Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

/**
 * Page footer: newsletter band with client-side email validation,
 * sitemap columns, social links and a status bottom bar.
 */
export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<NewsletterStatus>("idle");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    toast({
      title: "Subscribed!",
      description: "Welcome aboard — see you in your inbox.",
    });
  };

  return (
    <footer className="mt-auto border-t bg-muted/30">
      {/* Newsletter band */}
      <div className="mx-auto max-w-7xl border-b px-4 py-10 sm:px-6 md:py-12 lg:px-8">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Stay in the loop</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Product updates, productivity tips and AI insights. Once a month, no spam.
            </p>
          </div>
          <div>
            <form className="flex flex-col gap-2 sm:flex-row" noValidate onSubmit={handleSubscribe}>
              <Label htmlFor="newsletter-email" className="sr-only">
                Email address
              </Label>
              <Input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={handleEmailChange}
                aria-invalid={status === "error"}
                aria-describedby="newsletter-message"
                className="h-11 flex-1"
              />
              <Button type="submit" className="h-11 px-6">
                Subscribe
                <Send className="h-4 w-4" aria-hidden="true" />
              </Button>
            </form>
            <p id="newsletter-message" aria-live="polite" className="mt-2 min-h-5 text-xs">
              {status === "error" ? (
                <span className="flex items-center gap-1.5 text-destructive">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Please enter a valid email address.
                </span>
              ) : status === "success" ? (
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  You&apos;re subscribed! See you in your inbox.
                </span>
              ) : null}
            </p>
          </div>
        </div>
      </div>

      {/* Main links */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The AI-powered productivity platform for modern teams. Build better. Work smarter.
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-11 w-11 rounded-full text-muted-foreground hover:text-foreground"
                >
                  <a href={href} aria-label={label}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {linkColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold">{column.title}</h3>
              <nav aria-label={column.title}>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl border-t px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} NOVA Labs, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500" />
            </span>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
