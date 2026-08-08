import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const products = [
  {
    title: "Glow Cream",
    price: "$24",
    image: "/assets/facial1.jpeg",
    alt: "Aurelia skincare treatment product moment",
  },
  {
    title: "Hydration Ritual",
    price: "$24",
    image: "/assets/facial2.jpeg",
    alt: "Aurelia warm skincare ritual",
  },
];

export default function ExperienceSection() {
  return (
    <section id="services" className="bg-[var(--warm-cream)]  text-[var(--color-foreground)]">
      <div className="relative min-h-[540px] overflow-hidden bg-[#f7f1e9] lg:min-h-[520px]">
        <Image
          src="/assets/bg_2.jpeg"
          alt="Aurelia skincare model with soft natural skin"
          fill
          quality={100}
          unoptimized
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-left-bottom opacity-90"
          priority={false}
        />

        <div className="container relative z-10 flex min-h-[540px] items-center py-10 lg:min-h-[520px] lg:justify-end lg:py-10">
          <div className="w-full rounded-[14px] border border-[rgba(107,73,50,0.12)] bg-white/90 p-5 shadow-[0_26px_80px_rgba(107,73,50,0.14)] backdrop-blur-xl sm:p-6 lg:w-[600px] lg:p-6">
            <p className="eyebrow">Skin rituals, softly refined</p>
            <Reveal>
              <h2 className="heading-h2 mt-3 max-w-[560px]">
                Discover  {" "}
                <span className="inline-block rounded-[7px] bg-[var(--color-primary-1)] px-2 text-white">
                  Nature & Care
                </span>{" "}
                With Aurelia Beauty Skincare.
              </h2>
            </Reveal>
            <p className="para-p3 mt-4 max-w-[520px]">
              Our treatments combine thoughtful skincare, premium products, and calm hands-on care to support healthy, radiant skin.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {products.map((product) => (
                <article key={product.title} className="overflow-hidden rounded-[8px] bg-[var(--color-primary-3)] shadow-[var(--shadow-card)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, 280px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_56%,rgba(48,37,31,0.22)_100%)]" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                      <a href="#book" className="inline-flex h-7 items-center gap-2 rounded-full border border-[rgba(48,37,31,0.22)] bg-white/84 px-3 text-[10px] font-extrabold uppercase text-[var(--color-foreground)] backdrop-blur">
                        Book Now
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <a
              href="#services"
              className="mt-5 flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-[var(--color-foreground)] px-5 text-[12px] font-bold text-[var(--warm-cream)] transition hover:bg-[var(--color-primary-2)]"
            >
              Explore More
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
