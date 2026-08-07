import Image from "next/image";
import { Brush, Clock3, Gauge, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const details = [
  { icon: Gauge, title: "Precision fades", text: "Tapered edges, balanced weight, and a clean silhouette from every angle." },
  { icon: Brush, title: "Product knowledge", text: "Matte clay, pomade, tonic, or texture spray matched to your finish." },
  { icon: ShieldCheck, title: "Razor detail", text: "Neck cleanup, cheek lines, and beard edges finished with steady control." },
  { icon: Clock3, title: "No-rush chair time", text: "Appointments paced for consultation, execution, and a sharp final check." },
];

export default function GallerySection() {
  return (
    <section id="craft" className="bg-[var(--charcoal-brick)] py-16 text-[var(--warm-cream)] lg:py-24">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-[8px] border border-[rgba(232,139,26,0.2)] bg-[var(--midnight-black)] shadow-[var(--shadow-lift)]">
            <Image
              src="/assets/craftsman.png"
              alt="Iron & Oak Barber Co. chair, mirror, and industrial barber shop interior"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 grid gap-2 sm:grid-cols-3">
              {["Cut", "Shave", "Groom"].map((label) => (
                <span key={label} className="rounded-[6px] border border-[rgba(232,139,26,0.28)] bg-[rgba(17,17,17,0.74)] px-4 py-3 text-center font-heading text-[22px] font-bold uppercase text-[var(--barber-gold)] backdrop-blur">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Craftsmanship-focused</p>
            <Reveal>
              <h2 className="mt-4 max-w-[600px] font-heading text-[clamp(42px,5vw,78px)] font-bold uppercase leading-[0.86]">
                Built for men who notice the details.
              </h2>
            </Reveal>
            <p className="mt-6 max-w-[560px] text-[14px] leading-[1.8] text-[var(--color-ink-2)]">
              Iron & Oak pairs old-school barber discipline with modern shape, texture, and finish. The result is a cut that looks intentional on day one and still behaves weeks later.
            </p>

            <div className="mt-9 grid gap-3">
              {details.map((detail) => {
                const Icon = detail.icon;
                return (
                  <article key={detail.title} className="grid grid-cols-[44px_1fr] gap-4 rounded-[8px] border border-[rgba(232,139,26,0.16)] bg-[rgba(17,17,17,0.38)] p-4">
                    <span className="grid h-11 w-11 place-items-center rounded-[6px] bg-[rgba(232,139,26,0.12)] text-[var(--barber-gold)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-[23px] font-bold uppercase leading-none">{detail.title}</h3>
                      <p className="mt-2 text-[12px] leading-[1.6] text-[var(--color-ink-2)]">{detail.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
