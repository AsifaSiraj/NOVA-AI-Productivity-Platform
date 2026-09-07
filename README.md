# NOVA — AI Productivity Platform Landing Page

**Build Better. Work Smarter.**

A fully responsive, modern landing page for NOVA — a fictional AI-powered productivity platform that helps teams manage projects, automate repetitive tasks and collaborate efficiently.

Live sections, smooth animations, dark mode and polished micro-interactions — built to feel like a professional SaaS product rather than a tutorial project.

---

## Project Description

NOVA's landing page presents the product through 13 sections: a sticky navigation bar, an animated hero with a CSS-built product mockup, a trusted-by marquee, six feature cards, a product deep-dive with an AI assistant preview, a 3-step "How It Works", animated statistics, six team use-cases, an auto-playing testimonial carousel, three-tier pricing with a billing toggle, a FAQ accordion, a gradient final CTA and a rich footer with a validated newsletter form.

| Category | Detail |
|---|---|
| Brand | NOVA — AI Productivity Platform |
| Tagline | Build Better. Work Smarter. |
| Accent palette | Emerald → Teal (light & dark) |
| Rendering | Single page, server component shell + client section components |

## Technologies Used

- **Next.js 16** (App Router) + **TypeScript 5**
- **Tailwind CSS 4** — utility styling with CSS custom-property design tokens (oklch)
- **shadcn/ui** — Button, Accordion, Dialog, Carousel (embla), Input, Separator, Progress, Toast
- **Framer Motion** — scroll reveals, marquee, count-up stats, modal player
- **next-themes** — dark / light / system mode
- **lucide-react** — icon system
- No external images: every visual (dashboard mockup, AI chat, avatars, logos) is pure CSS + icons

## Features

### Sections (all requirements covered)
1. Navigation bar — sticky, blur backdrop, animated link underlines, scroll-aware border/shadow
2. Hero — gradient headline, floating AI suggestion cards, CSS product dashboard mockup
3. Trusted By — infinite logo marquee (pauses fallback for reduced-motion users)
4. Features — 6 cards (AI automation, tracking, collaboration, meeting notes, workflows, security)
5. Product / About — split layout with animated NOVA Assistant chat mockup
6. How It Works — 3 steps with gradient number badges + dashed connector
7. Statistics — animated count-up (10,000+ teams, 2.5M tasks, 99.9% uptime, 4.9/5)
8. Solutions — 6 use cases (Engineering, Marketing, Design, Product, Operations, Remote)
9. Testimonials — auto-playing carousel, 5 quotes, dots + arrows, pause on hover
10. Pricing — 3 plans, monthly/annual toggle (save 20%), highlighted "Most Popular"
11. FAQ — 6-question accessible accordion
12. Final CTA — gradient banner with demo + trial actions
13. Footer — newsletter, 4 link columns, socials, "All systems operational" status

### Interactions
**Required:** responsive navigation · mobile hamburger menu · smooth scrolling · FAQ accordion · button & card hover effects · working anchor links

**Bonus (all 8 implemented):**
- 🌓 Dark / light / system mode (next-themes)
- 🔢 Animated statistics (count-up on scroll into view)
- 🎞 Scroll animations (reusable `<Reveal>` wrapper, respects `prefers-reduced-motion`)
- 🎠 Testimonial carousel (embla, autoplay, dots, keyboard/hover pause)
- 💳 Monthly / annual pricing toggle with animated price swap
- ▶️ Demo modal (globally shared state — openable from hero & final CTA, mock video player with play/pause/progress)
- ✉️ Newsletter validation (regex, inline error/success + toast, `aria-live`)
- ⬆️ Back-to-top button (appears after 500px scroll)

## Installation

```bash
# 1. Install dependencies
npm install        # or: pnpm install / bun install

# 2. Run the dev server
npm run dev        # or: pnpm dev / bun run dev
# open http://localhost:3000

# 3. Production build
npm run build && npm start

# 4. Lint
npm run lint
```

## Deployment

The site is a static-exportable single page and deploys with zero configuration:

- **Vercel (recommended):** push to GitHub → [vercel.com/new](https://vercel.com/new) → import the repo → Next.js is auto-detected → Deploy. Or run `npx vercel` from the project root.
- **Netlify:** connect the repo, build command `npm run build`, publish directory `.next` (with the official Next.js plugin).
- **Cloudflare Pages / GitHub Pages:** build with `npm run build` and serve via the respective Next.js adapter.

No environment variables are required — the page is fully self-contained.

## Live Demo


## Component Structure

```
src/
├── app/
│   ├── layout.tsx              # Metadata, fonts, ThemeProvider, Toaster
│   ├── page.tsx                # Section composition (server component)
│   ├── globals.css             # Design tokens, scrollbar, smooth scroll
│   └── icon.svg                # Brand favicon
├── components/
│   ├── theme-provider.tsx      # next-themes wrapper
│   └── landing/
│       ├── navbar.tsx          # Sticky nav + animated mobile menu
│       ├── hero.tsx            # Headline, CTAs, CSS product mockup
│       ├── trusted-by.tsx      # Logo marquee
│       ├── features.tsx        # 6 feature cards
│       ├── about.tsx           # Product split + AI assistant mockup
│       ├── how-it-works.tsx    # 3-step flow
│       ├── stats.tsx           # Count-up statistics
│       ├── solutions.tsx       # 6 use-case cards
│       ├── testimonials.tsx    # Autoplay carousel
│       ├── pricing.tsx         # Billing toggle + 3 plans
│       ├── faq.tsx             # Accordion
│       ├── final-cta.tsx       # Gradient banner
│       ├── footer.tsx          # Newsletter + links
│       ├── back-to-top.tsx     # Scroll-to-top FAB
│       ├── demo-modal.tsx      # Shared demo dialog + mock player
│       ├── demo-modal-context.tsx  # Global modal state (context)
│       ├── reveal.tsx          # Reusable scroll-reveal animation
│       ├── section-heading.tsx # Consistent section headers
│       ├── theme-toggle.tsx    # CSS-swap dark/light button (no hydration flash)
│       └── logo.tsx            # Brand logo
```

**Architecture decisions:**
- Each section is a self-contained client component with its own data arrays — easy to explain, test and reuse.
- Cross-cutting state (demo modal) lives in a tiny context provider so any section can trigger it without prop drilling.
- `Reveal` and `SectionHeading` centralize animation and typography, keeping every section visually consistent with minimal duplication.

## Accessibility

- Semantic landmarks: `header` / `nav` / `main` / `section` / `footer`, one `h1`, ordered headings
- `aria-expanded`/`aria-controls` on hamburger, `aria-pressed` on billing toggle, `aria-live` on newsletter + price sub-line
- Icon-only buttons carry descriptive `aria-label`s; decorative visuals are `aria-hidden`
- Visible focus rings (`focus-visible`), ≥44px touch targets, `prefers-reduced-motion` respected across animations
- Color contrast maintained in both themes

## AI Tools Used

- **Z.ai Code (GLM)** — AI coding agent used to scaffold the design system, generate section components in parallel, and run browser-based self-verification. All output was reviewed, linted and verified end-to-end in a real browser, then refined (e.g., navbar breakpoint fix, React hooks lint fixes).

## Implementation Notes (short explanation)

- **Design decisions** — emerald/teal accent avoids the generic blue SaaS look; a dark, high-contrast theme pairs with subtle emerald glows for a premium "AI" feel. Typography uses Geist with tight tracking and balanced text wrapping.
- **Responsive strategy** — mobile-first grids (`grid-cols-1 → sm:2 → lg:3/4`), the desktop nav appears at `lg` and tablets use the animated hamburger; `scroll-mt` offsets anchor targets below the sticky header; verified at 375 / 768 / 1024 / 1440 px with zero horizontal overflow.
- **Challenges** — hydration-safe theming (solved with a CSS-swap toggle instead of mounted state), a lint rule against `setState` in effects (moved reset logic into the dialog's `onOpenChange`), and keeping the pricing toggle layout-shift-free (fixed-height sub-line).
- **Performance** — single page, no external images or web fonts beyond the bundled Geist, animations run on the GPU via transform/opacity only, and scroll listeners are passive. Next steps for production: RSC-ify static sections, lazy-mount below-fold carousels, add `next/font` subsetting and image/OG assets, and move to a real CMS + analytics.

---

© NOVA Labs, Inc. — fictional company created for a front-end development assignment.
