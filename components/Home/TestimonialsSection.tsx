import Image from "next/image";
import { Play } from "lucide-react";
import Reveal from "./Reveal";

const textReviews = [
  {
    name: "Julia K.",
    text: "My extensions look soft, full, and completely natural. No one can tell where my own hair ends, which is exactly what I wanted.",
  },
  {
    name: "Amelia R.",
    text: "The color feels expensive but not overdone. It grows out beautifully and my hair still feels healthy.",
  },
  {
    name: "Sofia M.",
    text: "I was nervous about adding length, but the consultation made everything clear. The result feels light, secure, and very me.",
  },
];

const imageCards = [
  { name: "Natalia W.", image: "/assets/girl_2.png" },
  { name: "Maya L.", image: "/assets/girl_3.png" },
  { name: "Clara B.", image: "/assets/step4.png" },
  { name: "Elena P.", image: "/assets/step3.png" },
];

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <article className="rounded-[8px] border border-[rgba(164,87,86,0.16)] bg-[linear-gradient(135deg,#ead7d2_0%,#f7eee9_44%,#d5b8ac_100%)] p-5 shadow-[0_14px_34px_rgba(62,57,53,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(62,57,53,0.12)]">
      <div className="flex items-center gap-3">
        <div className="relative h-9 w-9 overflow-hidden rounded-full bg-[var(--color-primary-3)]">
          <Image src="/assets/hero_1.png" alt={`${name} portrait`} fill sizes="36px" className="object-cover" />
        </div>
        <p className="text-[13px] font-extrabold text-[var(--color-foreground)]">{name}</p>
      </div>
      <p className="mt-6 text-[12px] leading-[1.65] text-[var(--color-ink-2)]">“{text}”</p>
    </article>
  );
}

function ImageReviewCard({ name, image, tall = false }: { name: string; image: string; tall?: boolean }) {
  return (
    <article className={`relative overflow-hidden rounded-[8px] bg-[var(--color-primary-3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(62,57,53,0.16)] ${tall ? "min-h-[410px]" : "min-h-[270px]"}`}>
      <Image src={image} alt={`${name} Atelier Hair result`} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,57,53,0)_42%,rgba(62,57,53,0.58)_100%)]" />
      <button
        type="button"
        aria-label={`Play ${name} testimonial`}
        className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/92 text-[var(--color-foreground)] shadow-[0_12px_30px_rgba(62,57,53,0.18)]"
      >
        <Play className="ml-0.5 h-4 w-4 fill-current" />
      </button>
      <div className="absolute bottom-5 left-5 text-white">
        <p className="text-[14px] font-extrabold">{name}</p>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.08em] text-white/72">
          extensions and color atelier
        </p>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#f7f0ef] py-14 text-[var(--color-foreground)] lg:py-18">
      <div className="container">
        <div className="mx-auto mb-8 max-w-[720px] text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">
            Reviews
          </p>
          <div className="mt-3">
            <Reveal>
              <h2 className="mx-auto max-w-[600px] font-heading text-[clamp(34px,4.4vw,62px)] font-semibold leading-[0.86]">
                Trusted by women who wanted softness first
              </h2>
            </Reveal>
            <span aria-hidden="true" className="mx-auto mt-1 block w-full max-w-[260px]">
              <svg viewBox="0 0 330 22" className="h-6 w-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 5C102 0 176 3 246 5" stroke="var(--color-primary-1)" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M2 16C74 7 166 9 328 14" stroke="var(--color-primary-1)" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </span>
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
