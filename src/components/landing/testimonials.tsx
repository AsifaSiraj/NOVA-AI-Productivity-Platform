"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "NOVA cut our weekly planning meeting from an hour to ten minutes. The AI assigns sprint work before I've even finished my coffee.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "Vertex",
    initials: "SC",
  },
  {
    quote:
      "We replaced four tools with NOVA. Campaign briefs, approvals and reporting now live in one place — and nothing slips through.",
    name: "Marcus Alvarez",
    role: "Head of Marketing",
    company: "Nimbus",
    initials: "MA",
  },
  {
    quote:
      "The roadmap view plus AI insights is unreal. I know which features will slip weeks before the deadline — not the day of.",
    name: "Priya Sharma",
    role: "Product Lead",
    company: "Orbitix",
    initials: "PS",
  },
  {
    quote:
      "Onboarding a new developer used to take a week of hand-holding. With NOVA's docs and workflows, they ship on day two.",
    name: "David Okafor",
    role: "Engineering Manager",
    company: "Hexlab",
    initials: "DO",
  },
  {
    quote:
      "Our ops team runs on NOVA templates. What used to be 30 checklists across spreadsheets is now one automated workspace.",
    name: "Emily Rousseau",
    role: "COO",
    company: "Lumina",
    initials: "ER",
  },
];

/**
 * Testimonials — auto-playing embla carousel (pauses on hover/focus and
 * for reduced-motion users) with custom prev/next buttons and dot navigation.
 */
export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  // Track the selected snap so dots stay in sync.
  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());

    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  // Auto-advance every 5s unless hovered/focused or reduced motion.
  useEffect(() => {
    if (paused || reduceMotion || !api) return;

    const id = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [paused, api, reduceMotion]);

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 border-t bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          eyebrowIcon={Quote}
          title="Loved by teams everywhere"
          description="Hear from the people who build, market and ship with NOVA every day."
        />

        <Reveal delay={0.1}>
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="mx-auto w-full max-w-5xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, i) => (
                <CarouselItem
                  key={testimonial.name}
                  className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <figure className="flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10">
                      <div
                        role="img"
                        aria-label="5 out of 5 stars"
                        className="flex gap-1"
                      >
                        {Array.from({ length: 5 }).map((_, star) => (
                          <Star
                            key={star}
                            aria-hidden="true"
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>

                      <figcaption className="mt-6 flex items-center gap-3 border-t pt-4">
                        <div
                          aria-hidden="true"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-semibold text-white"
                        >
                          {testimonial.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation: prev — dots — next */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label="Previous testimonial"
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft aria-hidden="true" className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-2">
                {testimonials.map((testimonial, i) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={current === i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-2 rounded-full transition-all ${
                      current === i
                        ? "w-6 bg-emerald-500"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                type="button"
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label="Next testimonial"
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>

            <p aria-live="polite" className="sr-only">
              Testimonial {current + 1} of {testimonials.length}:{" "}
              {testimonials[current]?.name}, {testimonials[current]?.role} at{" "}
              {testimonials[current]?.company}
            </p>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
