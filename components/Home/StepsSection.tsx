import Image from "next/image";
import { CircleSmall } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Consult",
    heading: "Read the natural hair before planning the transformation.",
    bullets: [
      "Review density, texture, breakage, and current color history.",
      "Understand the finish she wants to feel day to day.",
      "Choose an approach that protects the natural hair first.",
      "Set the tone for a calm, confident appointment.",
    ],
    background: "bg-[#f5edec]",
    image: "from-[#3e3935] via-[#8d6d61] to-[#f4d8ce]",
    imageSrc: "/assets/step1.png",
  },
  {
    number: "02",
    label: "Tone",
    heading: "Map brightness, depth, and softness around her features.",
    bullets: [
      "Place dimension where it lifts the face naturally.",
      "Balance warmth and coolness for believable color.",
      "Plan a grow-out that feels soft between visits.",
      "Keep the result polished without making it loud.",
    ],
    background: "bg-[#fffaf7]",
    image: "from-[#a45756] via-[#d7aaa1] to-[#fff5ef]",
    imageSrc: "/assets/step2.png",
  },
  {
    number: "03",
    label: "Blend",
    heading: "Add fullness where it moves like it belongs.",
    bullets: [
      "Build length and body with restrained placement.",
      "Blend extension weight into the natural shape.",
      "Protect comfort at the scalp and movement through the ends.",
      "Style the finish for softness, not stiffness.",
    ],
    background: "bg-[#f1dfdc]",
    image: "from-[#6e4c43] via-[#c79684] to-[#f7c9c8]",
    imageSrc: "/assets/step5.png",
  },
  {
    number: "04",
    label: "Maintain",
    heading: "Send her home with a result that keeps behaving beautifully.",
    bullets: [
      "Teach the care rhythm for color and extensions.",
      "Recommend the right maintenance window.",
      "Show simple styling habits that protect the finish.",
      "Keep the next visit easy, predictable, and refined.",
    ],
    background: "bg-[#ede8e6]",
    image: "from-[#2f2b29] via-[#a45756] to-[#f5edec]",
    imageSrc: "/assets/step4.png",
  },
];

export default function StepsSection() {
  return (
    <section id="process" className="relative bg-[#f5edec] text-[var(--color-foreground)]">
      {steps.map((step, index) => (
        <article
          key={step.number}
          className={`sticky top-20 flex min-h-[78vh] items-center overflow-hidden ${step.background}`}
          style={{ zIndex: index + 1 }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(164,87,86,0.32)] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(164,87,86,0.2)] to-transparent" />

          <div className="container relative z-10 py-10">
            <div className="grid min-h-[62vh] items-center gap-8 lg:grid-cols-[0.92fr_0.9fr]">
              <div className="relative">
                <p className="relative text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">
                  {step.number} / {step.label}
                </p>
                <h2 className="relative mt-5 max-w-[560px] font-heading text-[clamp(34px,4.2vw,68px)] font-semibold leading-[0.86]">
                  {step.heading}
                </h2>
                <ul className="relative mt-7 grid max-w-[500px] gap-2.5">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-[12px] leading-[1.55] text-[var(--color-ink-2)]">
                      <CircleSmall
                        aria-hidden="true"
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--color-primary-1)]"
                        strokeWidth={2.5}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex w-full items-center justify-center justify-self-center lg:justify-center">
                <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[22px] bg-gradient-to-br shadow-[0_22px_70px_rgba(62,57,53,0.16)] md:max-w-[330px] lg:max-w-[360px]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.image}`} />
                  <Image
                    src={step.imageSrc}
                    alt={`${step.label} hair consultation visual`}
                    fill
                    sizes="(min-width: 1024px) 360px, 80vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,57,53,0.02)_0%,rgba(62,57,53,0.24)_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
