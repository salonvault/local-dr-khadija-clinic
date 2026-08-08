import Image from "next/image";
import { CircleSmall } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Consult",
    heading: "Begin with your skin, your comfort, and the way you want to feel.",
    bullets: [
      "Discuss sensitivities, goals, and the amount of visible polish you prefer.",
      "Choose a ritual that fits your routine instead of overwhelming it.",
    ],
  },
  {
    number: "02",
    label: "Prepare",
    heading: "Create a calm foundation before any treatment begins.",
    bullets: [
      "Cleanse, soften, and prepare the skin with gentle, considered products.",
      "Settle into a quiet pace so the appointment feels restorative.",
    ],
  },
  {
    number: "03",
    label: "Treat",
    heading: "Layer precise care with warm, attentive technique.",
    bullets: [
      "Tailor facial, brow, lash, or wellness steps around your desired result.",
      "Keep the finish natural, balanced, and easy to live with.",
    ],
  },
  {
    number: "04",
    label: "Glow",
    heading: "Leave with simple aftercare and a refreshed sense of confidence.",
    bullets: [
      "Share realistic maintenance notes for skin, brows, lashes, or relaxation.",
      "Recommend the right return window without pressure.",
    ],
  },
];

export default function StepsSection() {
  return (
    <section id="process" className="relative overflow-visible bg-[var(--color-primary-3)] py-16 text-[var(--color-foreground)] lg:py-24">
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(107,73,50,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(107,73,50,0.04)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="grid gap-5 lg:min-h-[180vh]">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="sticky rounded-[8px] border border-[rgba(107,73,50,0.14)] bg-white/88 p-6 shadow-[var(--shadow-card)] backdrop-blur lg:min-h-[430px] lg:p-8"
                style={{ top: `calc(6rem + ${index * 18}px)`, zIndex: index + 1 }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">
                      {step.number} / {step.label}
                    </p>
                    <h3 className="mt-5 max-w-[640px] font-heading text-[clamp(40px,5vw,76px)] font-semibold leading-[0.96]">
                      {step.heading}
                    </h3>
                  </div>
                  <span className="hidden font-heading text-[68px] font-semibold leading-none text-[rgba(169,104,50,0.14)] sm:block">
                    {step.number}
                  </span>
                </div>

                <ul className="mt-8 grid gap-2">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 rounded-[8px] border border-[rgba(107,73,50,0.12)] bg-[var(--warm-cream)]/72 p-4 text-[13px] leading-[1.65] text-[var(--color-ink-2)]">
                      <CircleSmall aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--color-primary-1)]" strokeWidth={2.5} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="relative min-h-[420px] overflow-hidden rounded-[8px] border border-[rgba(107,73,50,0.14)] bg-white shadow-[var(--shadow-lift)] lg:h-[min(620px,calc(100vh-7rem))] lg:min-h-0">
              <Image
                src="/assets/result.jpeg"
                alt="AURELIA client receiving a relaxing facial ritual"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "65% 50%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(48,37,31,0.02)_0%,rgba(48,37,31,0.58)_100%)]" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-white/78">The Aurelia ritual</p>
                <h2 className="mt-3 max-w-[420px] font-heading text-[clamp(38px,4vw,62px)] font-semibold leading-[0.96]">
                  Four calm steps. One radiant finish.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
