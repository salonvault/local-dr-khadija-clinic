import Image from "next/image";
import { Star } from "lucide-react";
import Reveal from "./Reveal";

const barbers = [
  {
    name: "Marcus Hale",
    role: "Fade specialist",
    note: "Known for clean skin fades, crop texture, and razor-sharp neckline work.",
    image: "/assets/01.png",
  },
  {
    name: "Eli Stone",
    role: "Beard & shave lead",
    note: "Hot towels, straight razor control, beard density shaping, and classic finish.",
    image: "/assets/02.png",
  },
  {
    name: "Roman Cruz",
    role: "Classic cuts",
    note: "Scissor work, longer shape, executive cuts, and product-led styling.",
    image: "/assets/03.png",
  },
];

export default function ResultsSection() {
  return (
    <section id="barbers" className="bg-[var(--midnight-black)] py-16 text-[var(--warm-cream)] lg:py-24">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="relative overflow-hidden rounded-[8px] border border-[rgba(232,139,26,0.22)] bg-[var(--charcoal-brick)] p-7 shadow-[var(--shadow-card)]">
            <Image
              src="/assets/barber-hero.png"
              alt="Iron & Oak barber crafting a precise haircut"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-bottom-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.92)_0%,rgba(17,17,17,0.72)_52%,rgba(17,17,17,0.36)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.08)_0%,rgba(17,17,17,0.88)_100%)]" />
            <div className="relative z-10">
              <p className="eyebrow">The shop standard</p>
              <Reveal>
                <h2 className="mt-4 max-w-[520px] font-heading text-[clamp(42px,5vw,76px)] font-bold uppercase leading-[0.86]">
                  Confidence is built in the chair.
                </h2>
              </Reveal>
              <p className="mt-6 max-w-[500px] text-[14px] leading-[1.8] text-[var(--color-ink-2)]">
                No rushed clipper work. No vague finishing. Every barber follows a service rhythm: consult, shape, detail, style, and check the cut under real light before you walk out.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-3">
                {["Consult", "Craft", "Finish"].map((item, index) => (
                  <div key={item} className="rounded-[8px] border border-[rgba(232,139,26,0.22)] bg-[rgba(17,17,17,0.62)] p-4 backdrop-blur">
                    <p className="font-heading text-[28px] font-bold leading-none text-[var(--barber-gold)]">0{index + 1}</p>
                    <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-ink-2)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            {barbers.map((barber, index) => (
              <article key={barber.name} className="grid gap-5 rounded-[8px] border border-[rgba(232,139,26,0.16)] bg-[rgba(36,32,30,0.78)] p-5 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 md:grid-cols-[120px_1fr_auto] md:items-center">
                <div className="relative aspect-square w-full overflow-hidden rounded-[8px] border border-[rgba(232,139,26,0.18)] bg-[var(--midnight-black)] md:w-[120px]">
                  <Image
                    src={barber.image}
                    alt={`${barber.name} barber portrait`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_46%,rgba(17,17,17,0.38)_100%)]" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[var(--barber-gold)]">{barber.role}</p>
                  <h3 className="mt-2 font-heading text-[34px] font-bold uppercase leading-none">{barber.name}</h3>
                  <p className="mt-3 max-w-[520px] text-[12px] leading-[1.65] text-[var(--color-ink-2)]">{barber.note}</p>
                </div>
                <div className="flex gap-1 text-[var(--barber-gold)] md:justify-self-end" aria-label={`${barber.name} five star rating`}>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={`${barber.name}-${starIndex}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="hidden font-heading text-[42px] font-bold text-[rgba(244,239,231,0.08)] md:block">{String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
