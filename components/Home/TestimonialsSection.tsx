import Image from "next/image";
import { Play, Star } from "lucide-react";
import Reveal from "./Reveal";

const textReviews = [
  {
    name: "Mina R.",
    service: "Signature Facial",
    image: "/assets/result.jpeg",
    text: "The facial felt calm and personal, and my skin looked rested without looking overdone. It was exactly the hour I needed.",
  },
  {
    name: "Sara K.",
    service: "Brow Sculpting",
    image: "/assets/service8.jpeg",
    text: "My brows finally look soft and balanced. The whole appointment felt thoughtful, gentle, and very premium.",
  },
  {
    name: "Aaliyah W.",
    service: "Glow Therapy",
    image: "/assets/facial2.jpeg",
    text: "I booked glow therapy before a dinner and left looking fresh, not heavy. The aftercare was simple and actually useful.",
  },
];

const imageCards = [
  { name: "Leila T.", service: "Head & Scalp Ritual", image: "/assets/review1.jpeg" },
  { name: "Nora M.", service: "Hydration Treatment", image: "/assets/review3.jpeg" },
  { name: "Maya L.", service: "Hydra Facial", image: "/assets/review4.jpeg" },
  { name: "Elena P.", service: "Body Treatment", image: "/assets/review2.jpeg" },
];

function ReviewCard({ name, service, image, text }: { name: string; service: string; image: string; text: string }) {
  return (
    <article className="rounded-[8px] border border-[rgba(169,104,50,0.18)] bg-[linear-gradient(135deg,#fff8ef_0%,#f4e6d6_48%,#e8d9c8_100%)] p-5 shadow-[0_14px_34px_rgba(107,73,50,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(107,73,50,0.14)]">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[var(--color-primary-3)]">
          <Image src={image} alt={`${name} portrait`} fill sizes="40px" className="object-cover" />
        </div>
        <div>
          <p className="text-[13px] font-extrabold text-[var(--color-foreground)]">{name}</p>
          <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">{service}</p>
        </div>
      </div>
      <div className="mt-5 flex gap-1 text-[var(--color-primary-1)]" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <p className="mt-5 text-[12px] leading-[1.7] text-[var(--color-ink-2)]">&quot;{text}&quot;</p>
    </article>
  );
}

function ImageReviewCard({ name, service, image, tall = false }: { name: string; service: string; image: string; tall?: boolean }) {
  return (
    <article className={`relative overflow-hidden rounded-[8px] bg-[var(--color-primary-3)] shadow-[0_14px_34px_rgba(107,73,50,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(107,73,50,0.18)] ${tall ? "min-h-[410px]" : "min-h-[280px]"}`}>
      <Image src={image} alt={`${name} Aurelia testimonial result`} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(48,37,31,0)_38%,rgba(48,37,31,0.68)_100%)]" />
      <button
        type="button"
        aria-label={`Play ${name} testimonial`}
        className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/92 text-[var(--color-primary-1)] shadow-[0_12px_30px_rgba(48,37,31,0.2)]"
      >
        <Play className="ml-0.5 h-4 w-4 fill-current" />
      </button>
      <div className="absolute bottom-5 left-5 right-5 text-white">
        <p className="text-[14px] font-extrabold">{name}</p>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.08em] text-white/74">
          {service}
        </p>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[var(--warm-cream)] py-14 text-[var(--color-foreground)] lg:py-20">
      <div className="container">
        <div className="mx-auto mb-9 max-w-[760px] text-center">
          <p className="eyebrow">Reviews</p>
          <div className="mt-3">
            <Reveal>
              <h2 className="heading-h2 mx-auto max-w-[660px]">
                Trusted by women who wanted{" "}
                <span className="inline-block rounded-[7px] bg-[var(--color-primary-1)] px-2 text-white">
                  personal care
                </span>
                .
              </h2>
            </Reveal>
            
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="grid gap-3">
            <ReviewCard {...textReviews[0]} />
            <ImageReviewCard {...imageCards[0]} tall />
          </div>
          <div className="grid gap-3">
            <ImageReviewCard {...imageCards[1]} tall />
            <ReviewCard {...textReviews[1]} />
          </div>
          <div className="grid gap-3">
            <ReviewCard {...textReviews[2]} />
            <ImageReviewCard {...imageCards[2]} tall />
          </div>
          <div className="grid gap-3">
            <ImageReviewCard {...imageCards[3]} tall />
            <ReviewCard {...textReviews[0]} />
          </div>
        </div>
      </div>
    </section>
  );
}
