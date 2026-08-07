import { BadgeCheck, Brush, Scissors, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Scissors,
    title: "Signature Cut",
    text: "A tailored cut built around head shape, hair texture, and daily styling habits.",
    price: "$45",
  },
  {
    icon: Brush,
    title: "Straight Razor Shave",
    text: "Hot towel prep, rich lather, razor finish, and a calm reset at the chair.",
    price: "$35",
  },
  {
    icon: BadgeCheck,
    title: "Beard Sculpt",
    text: "Line work, density shaping, and conditioning for a sharper profile.",
    price: "$25",
  },
  {
    icon: Sparkles,
    title: "Fade & Finish",
    text: "Clean skin fades, taper work, texture control, and product styling.",
    price: "$55",
  },
];

export default function ExperienceSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[var(--midnight-black)] py-20 text-[var(--warm-cream)] lg:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Men's grooming services</p>
            <Reveal>
              <h2 className="mt-4 max-w-[520px] font-heading text-[clamp(42px,5.4vw,82px)] font-bold uppercase leading-[0.86]">
                Traditional barbering. Modern style.
              </h2>
            </Reveal>
          </div>
          <p className="max-w-[620px] text-[14px] leading-[1.8] text-[var(--color-ink-2)] lg:justify-self-end">
            Every appointment begins with a quick consultation, then moves through precise cutting, clean detailing, and a finish you can recreate when you leave.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className={`rounded-[8px] border p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 ${
                  index === 1
                    ? "border-[var(--barber-gold)] bg-[var(--barber-gold)] text-[var(--midnight-black)]"
                    : "border-[rgba(232,139,26,0.2)] bg-[rgba(36,32,30,0.82)] text-[var(--warm-cream)]"
                }`}
              >
                <div className={`grid h-12 w-12 place-items-center rounded-[6px] ${index === 1 ? "bg-[var(--midnight-black)] text-[var(--barber-gold)]" : "bg-[rgba(232,139,26,0.12)] text-[var(--barber-gold)]"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-8 font-heading text-[30px] font-bold uppercase leading-none">
                  {service.title}
                </h3>
                <p className={`mt-4 min-h-20 text-[13px] leading-[1.65] ${index === 1 ? "text-black/70" : "text-[var(--color-ink-2)]"}`}>
                  {service.text}
                </p>
                <div className="mt-7 border-t border-current/20 pt-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] opacity-70">Starting at</p>
                  <p className="mt-1 font-heading text-[34px] font-bold leading-none">{service.price}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
