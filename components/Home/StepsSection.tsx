import Image from "next/image";
import { CircleSmall } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Consult",
    heading: "Read the hair, beard, routine, and the way you actually wear it.",
    bullets: [
      "Discuss face shape, growth patterns, and styling comfort.",
      "Set expectations for maintenance and grow-out.",
    ],
  },
  {
    number: "02",
    label: "Cut",
    heading: "Build the shape with clipper discipline and scissor control.",
    bullets: [
      "Balance weight through the crown and sides.",
      "Blend transitions with clean, deliberate sections.",
    ],
  },
  {
    number: "03",
    label: "Detail",
    heading: "Finish the edge work where premium barbering shows.",
    bullets: [
      "Razor the neckline, cheek line, and perimeter.",
      "Check the cut under warm and neutral light.",
    ],
  },
  {
    number: "04",
    label: "Style",
    heading: "Send you out with a finish that holds up in real life.",
    bullets: [
      "Show the simple styling moves that keep the cut sharp.",
      "Recommend the right return window for your look.",
    ],
  },
];

export default function StepsSection() {
  return (
    <section id="process" className="relative overflow-visible bg-[var(--charcoal-brick)] py-16 text-[var(--warm-cream)] lg:py-24">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(244,239,231,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(244,239,231,0.025)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
           <div className="grid gap-5 lg:min-h-[180vh]">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="sticky rounded-[8px] border border-[rgba(232,139,26,0.2)] bg-[linear-gradient(145deg,rgba(36,32,30,0.98)_0%,rgba(17,17,17,0.96)_100%)] p-6 shadow-[var(--shadow-card)] backdrop-blur lg:min-h-[430px] lg:p-8"
                style={{ top: `calc(6rem + ${index * 18}px)`, zIndex: index + 1 }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--barber-gold)]">
                      {step.number} / {step.label}
                    </p>
                    <h3 className="mt-5 max-w-[640px] font-heading text-[clamp(40px,5vw,78px)] font-bold uppercase leading-[0.86]">
                      {step.heading}
                    </h3>
                  </div>
                  <span className="hidden font-heading text-[68px] font-bold leading-none text-[rgba(232,139,26,0.16)] sm:block">
                    {step.number}
                  </span>
                </div>

                <ul className="mt-8 grid gap-2">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 rounded-[8px] border border-[rgba(232,139,26,0.14)] bg-[rgba(17,17,17,0.36)] p-4 text-[13px] leading-[1.65] text-[var(--color-ink-2)]">
                      <CircleSmall aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--barber-gold)]" strokeWidth={2.5} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="relative min-h-[420px] overflow-hidden rounded-[8px] border border-[rgba(232,139,26,0.22)] bg-[var(--midnight-black)] shadow-[var(--shadow-lift)] lg:h-[min(620px,calc(100vh-7rem))] lg:min-h-0">
              <Image
                src="/assets/vintage.png"
                alt="Iron & Oak barber cutting a precise modern fade"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.04)_0%,rgba(17,17,17,0.76)_100%)]" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[var(--barber-gold)]">Iron & Oak process</p>
                <h2 className="mt-3 max-w-[420px] font-heading text-[clamp(38px,4vw,62px)] font-bold uppercase leading-[0.86]">
                  Four moves. One sharper finish.
                </h2>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}
