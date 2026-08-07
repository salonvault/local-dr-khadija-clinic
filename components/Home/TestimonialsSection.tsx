"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Best fade I have had in years. The consultation was quick, the edges were exact, and the cut grew out clean.",
    by: "Daniel R.",
    service: "Skin fade and texture",
  },
  {
    tempId: 1,
    testimonial:
      "Booked a cut and beard sculpt before a wedding. Sharp without looking overdone, which is exactly what I wanted.",
    by: "Omar K.",
    service: "Cut and beard sculpt",
  },
  {
    tempId: 2,
    testimonial:
      "They explained the product and how to style it at home. That detail made the whole experience feel premium.",
    by: "James W.",
    service: "Classic cut and styling",
  },
  {
    tempId: 3,
    testimonial:
      "The straight razor finish was clean, calm, and precise. You can tell the shop takes the craft seriously.",
    by: "Marcus T.",
    service: "Straight razor shave",
  },
  {
    tempId: 4,
    testimonial:
      "No rushed chair time, no guessing. Just a proper cut, strong beard line, and a finish that held all week.",
    by: "Ryan M.",
    service: "Fade and beard line",
  },
];

type Testimonial = (typeof testimonials)[number];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function TestimonialCard({
  position,
  testimonial,
  handleMove,
  cardSize,
}: {
  position: number;
  testimonial: Testimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
}) {
  const isCenter = position === 0;

  return (
    <article
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 flex cursor-pointer flex-col overflow-hidden border p-6 transition-all duration-500 ease-in-out sm:p-8",
        isCenter
          ? "z-20 border-[rgba(232,139,26,0.62)] bg-[var(--charcoal-brick)] text-[var(--warm-cream)] shadow-[0_12px_0_4px_rgba(232,139,26,0.18),0_30px_90px_rgba(0,0,0,0.48)]"
          : "z-10 border-[rgba(232,139,26,0.22)] bg-[rgba(17,17,17,0.92)] text-[var(--warm-cream)] shadow-[0_18px_60px_rgba(0,0,0,0.42)] hover:border-[rgba(232,139,26,0.55)]"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath:
          "polygon(44px 0%, calc(100% - 44px) 0%, 100% 44px, 100% 100%, calc(100% - 44px) 100%, 44px 100%, 0 100%, 0 0)",
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.45) * position}px)
          translateY(${isCenter ? -48 : position % 2 ? 18 : -18}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(244,239,231,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(244,239,231,0.035)_1px,transparent_1px)] [background-size:34px_34px]" />
      {isCenter ? (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(232,139,26,0.28),transparent_34%),radial-gradient(circle_at_88%_78%,rgba(169,90,32,0.24),transparent_36%)]" />
      ) : null}
      <span
        className={cn("absolute block origin-top-right rotate-45", isCenter ? "bg-[rgba(232,139,26,0.42)]" : "bg-[rgba(232,139,26,0.22)]")}
        style={{ right: -2, top: 42, width: SQRT_5000, height: 2 }}
      />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div
          className={cn(
            "grid h-14 w-14 shrink-0 place-items-center border font-accent text-lg font-bold",
            isCenter
              ? "border-[rgba(232,139,26,0.38)] bg-[var(--midnight-black)] text-[var(--barber-gold)]"
              : "border-[rgba(232,139,26,0.24)] bg-black text-[var(--warm-cream)]"
          )}
          style={{
            boxShadow: isCenter ? "4px 4px 0 rgba(232,139,26,0.24)" : "4px 4px 0 rgba(232,139,26,0.14)",
          }}
        >
          {getInitials(testimonial.by)}
        </div>
        <div className="flex gap-1 text-[var(--barber-gold)]" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={`${testimonial.by}-${index}`} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
      </div>

      <Quote className="relative z-10 mt-8 h-6 w-6 shrink-0 text-[var(--barber-gold)]" />

      <h3 className={cn("relative z-10 mt-3 font-heading text-[18px] font-bold uppercase leading-[1.08] sm:text-[22px]", isCenter ? "text-[var(--warm-cream)]" : "text-[rgba(244,239,231,0.78)]")}>
        &quot;{testimonial.testimonial}&quot;
      </h3>

      <p className={cn("relative z-10 mt-auto pt-5 text-[13px] font-semibold leading-tight", isCenter ? "text-[var(--warm-cream)]" : "text-[rgba(244,239,231,0.62)]")}>
        - {testimonial.by}
        <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--barber-gold)]">
          {testimonial.service}
        </span>
      </p>
    </article>
  );
}

export default function TestimonialsSection() {
  const [cardSize, setCardSize] = useState(290);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = useCallback((steps: number) => {
    if (steps === 0) return;

    setTestimonialsList((currentList) => {
      const newList = [...currentList];

      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = newList.shift();
          if (!item) return currentList;
          newList.push({ ...item, tempId: Date.now() + i });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = newList.pop();
          if (!item) return currentList;
          newList.unshift({ ...item, tempId: Date.now() + i });
        }
      }

      return newList;
    });
  }, []);

  useEffect(() => {
    const updateSize = () => {
      setCardSize(
        window.matchMedia("(min-width: 640px)").matches
          ? 365
          : Math.max(290, Math.min(340, window.innerWidth - 48))
      );
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => handleMove(1), 6000);
    return () => window.clearInterval(interval);
  }, [handleMove]);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[var(--charcoal-brick)] py-16 text-[var(--warm-cream)] lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-16 h-[460px] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,139,26,0.16),rgba(169,90,32,0.08),transparent_68%)] blur-[90px]" />

      <div className="container relative z-10">
        <div className="mx-auto mb-4 max-w-3xl text-center">
          <p className="eyebrow">Client words</p>
          <h2 className="mt-3 font-heading text-[clamp(42px,5vw,76px)] font-bold uppercase leading-[0.86]">
            Men leave sharper. They come back steady.
          </h2>
        </div>

        <div className="relative mx-auto w-full max-w-6xl overflow-hidden" style={{ height: 610 }}>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-20 bg-gradient-to-r from-[var(--charcoal-brick)] to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-20 bg-gradient-to-l from-[var(--charcoal-brick)] to-transparent sm:w-32" />

          {testimonialsList.map((testimonial, index) => {
            const position = index - Math.floor(testimonialsList.length / 2);

            return (
              <TestimonialCard
                key={testimonial.tempId}
                testimonial={testimonial}
                handleMove={handleMove}
                position={position}
                cardSize={cardSize}
              />
            );
          })}

          <div className="absolute bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-3">
            <button
              type="button"
              onClick={() => handleMove(-1)}
              className="grid h-12 w-12 place-items-center rounded-[6px] border border-[rgba(232,139,26,0.5)] bg-black/80 text-[var(--barber-gold)] transition hover:bg-[var(--barber-gold)] hover:text-[var(--midnight-black)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--barber-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:h-14 sm:w-14"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleMove(1)}
              className="grid h-12 w-12 place-items-center rounded-[6px] border border-[rgba(232,139,26,0.5)] bg-black/80 text-[var(--barber-gold)] transition hover:bg-[var(--barber-gold)] hover:text-[var(--midnight-black)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--barber-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:h-14 sm:w-14"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
