import Image from "next/image";
import Reveal from "./Reveal";

export default function ResultsSection() {
  return (
    <section id="extensions" className="bg-[#f7f7f7] py-16 text-[var(--color-foreground)] lg:py-24">
      <div className="container">
        <div className="grid gap-2 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-2 lg:grid-cols-[2fr_1fr]">
            <article className="min-h-[230px] rounded-[8px] bg-[var(--color-foreground)] p-6 text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(62,57,53,0.16)] lg:min-h-[250px]">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-heading text-[34px] font-semibold leading-none">Anna, 27</h3>
                  <p className="mt-1 text-[10px] text-white/60">marketing specialist</p>
                </div>
                <span className="font-heading text-[30px] leading-none text-white">01</span>
              </div>
              <p className="mt-20 max-w-[560px] text-[14px] leading-[1.25] text-white/45">
                Curious about extensions, but cautious. She wants softness, length, and reassurance that her own hair will be protected.
              </p>
            </article>

            <div className="relative min-h-[230px] overflow-hidden rounded-[8px] bg-[linear-gradient(135deg,#ead7d2_0%,#f7eee9_44%,#d5b8ac_100%)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(62,57,53,0.14)] lg:min-h-[250px]">
              <Image
                src="/assets/hero_1.png"
                alt="Soft dimensional hair result"
                fill
                sizes="(min-width: 1024px) 16vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <article className="relative min-h-[230px] overflow-hidden rounded-[8px] bg-[var(--color-primary-3)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(62,57,53,0.12)] lg:min-h-[250px]">
            <div className="relative z-10 flex items-start justify-between gap-5">
              <div>
                <h3 className="font-heading text-[34px] font-semibold leading-none text-[var(--color-foreground)]">Marta, 34</h3>
                <p className="mt-1 text-[10px] text-[var(--color-ink-2)]">has had extensions for 2 years</p>
              </div>
              <div className="relative h-12 w-12 overflow-hidden rounded-[6px] bg-[linear-gradient(135deg,#d8b6aa,#fffaf7)] ring-1 ring-[rgba(164,87,86,0.14)]">
                <Image
                  src="/assets/girl_2.png"
                  alt="Atelier Hair transformation result"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="relative z-10 mt-24 max-w-[320px] text-[11px] leading-[1.35] text-[var(--color-ink-2)]">
              Loves the volume, but wants a quieter finish now: blended placement, believable movement, and color that grows out softly.
            </p>
            <span className="absolute -bottom-10 right-4 font-heading text-[190px] font-semibold leading-none text-white">02</span>
          </article>

          <div className="relative min-h-[520px] overflow-hidden rounded-[8px] bg-[linear-gradient(140deg,#cfa99b_0%,#f3ddd5_42%,#8a5e52_100%)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(62,57,53,0.15)] lg:min-h-[610px]">
            <Image
              src="/assets/girl_3.png"
              alt="Atelier Hair transformation result"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <article className="min-h-[520px] rounded-[8px] bg-[#fffaf7] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(62,57,53,0.1)] lg:min-h-[610px]">
            <div className="mb-10 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-ink-2)]">
              <span>User research</span>
              <span></span>
              <span>{new Date().getFullYear()}</span>
            </div>
            <Reveal>
              <h2 className="ml-auto max-w-[560px] text-right font-heading text-[clamp(32px,4.0vw,60px)] font-semibold leading-[0.85]">
                every guest arrives with a different kind of hesitation, so each touchpoint has to answer with{" "}
                <span className="text-[var(--color-primary-1)]">calm, proof, and precision</span>
              </h2>
            </Reveal>
            <div className="mt-28">
              <h3 className="font-heading text-[32px] font-semibold leading-none text-[var(--color-primary-1)]">Julia, 30</h3>
              <p className="mt-1 text-[10px] text-[var(--color-ink-2)]">planning her wedding</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
