import Image from "next/image";

const services = [
  {
    title: "Fade work",
    text: "Clean transitions tailored to your head shape.",
    image: "/assets/01.png",
  },
  {
    title: "Beard design",
    text: "Defined lines, balanced weight, and sharp profile.",
    image: "/assets/02.png",
  },
  {
    title: "Classic cuts",
    text: "Scissor control for timeless shape and movement.",
    image: "/assets/vintage.png",
  },
  {
    title: "Razor finish",
    text: "Necklines, cheek lines, and edges cut with precision.",
    image: "/assets/03.png",
  },
  {
    title: "Style reset",
    text: "Product and finish built for every day.",
    image: "/assets/04.png",
  },
];

export default function ExpertiseStripSection() {
  return (
    <section className="overflow-hidden bg-[var(--midnight-black)] py-16 text-[var(--warm-cream)] lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-[1080px] text-center">
          <p className="eyebrow">Built around the chair</p>
          <h2 className="mt-4 font-heading text-[clamp(42px,6vw,88px)] font-bold uppercase leading-[0.92]">
            Our goal is to provide expert{" "}
            <span className="inline-flex rounded-full border-2 border-[var(--barber-gold)] px-5 py-1 text-[var(--warm-cream)] md:px-8">
              haircuts
            </span>{" "}
            and grooming with precision.
          </h2>
        </div>
      </div>

      <div className="mt-12 flex gap-0 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:px-7 [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex min-w-max">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative aspect-[3/4] w-[240px] overflow-hidden border-y border-r border-[rgba(232,139,26,0.18)] first:border-l md:w-[300px] lg:w-[330px]"
            >
              <Image
                src={service.image}
                alt={`${service.title} at Iron & Oak Barber Co.`}
                fill
                sizes="(min-width: 1024px) 330px, 260px"
                className="object-cover transition duration-500 group-hover:scale-105"
                style={{ objectPosition: index === 2 ? "center" : "50% 32%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.08)_0%,rgba(17,17,17,0.3)_38%,rgba(17,17,17,0.9)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,139,26,0.12),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-heading text-[28px] font-bold uppercase leading-none text-[var(--warm-cream)]">
                  {service.title}
                </p>
                <p className="mt-3 max-w-[240px] text-[12px] font-semibold uppercase leading-[1.55] tracking-[0.02em] text-[var(--color-ink-2)]">
                  {service.text}
                </p>
              </div>
              <span className="absolute right-4 top-4 font-heading text-[42px] font-bold text-[rgba(232,139,26,0.22)]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
