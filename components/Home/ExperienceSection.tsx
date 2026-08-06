import Image from "next/image";
import Reveal from "./Reveal";

export default function ExperienceSection() {
  return (
    <section id="color" className="relative overflow-hidden bg-[#ede8e6] py-20 text-[var(--color-foreground)] lg:py-28">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[52%_48%]">
          <div>
            <div className="mb-8 grid grid-cols-[1fr_auto] items-start gap-8 text-[10px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">
              <span>About the atelier</span>
              <span>{new Date().getFullYear()}</span>
            </div>

            <Reveal>
              <h2 className="relative max-w-[670px] font-heading text-[clamp(32px,4.6vw,72px)] font-semibold leading-[0.82] text-[var(--color-foreground)]">
                Before she books, she needs to picture fuller hair that still feels completely{" "}
                <span className="text-[var(--color-primary-1)]">like her</span>
              </h2>
            </Reveal>

            <p className="mt-8 max-w-[520px] font-heading text-[clamp(22px,2.1vw,31px)] font-semibold leading-[0.96]">
              Subtle enough for real life. Polished enough for the moments that matter.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.78fr] md:items-end">
              <div className="rounded-[8px] border border-[rgba(164,87,86,0.12)] bg-[linear-gradient(135deg,#ead7d2_0%,#f7eee9_44%,#d5b8ac_100%)] p-6 shadow-[0_14px_34px_rgba(62,57,53,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(62,57,53,0.12)]">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">
                  The Atelier feeling
                </p>
                <p className="mt-5 text-[13px] leading-[1.7] text-[var(--color-ink-2)]">
                  Every consultation begins with texture, density, lifestyle, and tone. The result is seamless color and extensions that move naturally, photograph softly, and grow out gracefully.
                </p>
              </div>

              <p className="max-w-[260px] text-[12px] leading-[1.6] text-[var(--color-primary-1)]">
                Designed for women who want fuller, healthier-looking hair without an obvious transformation or a loud salon experience.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/assets/mobile_mockups.png"
              alt="Atelier Hair mobile salon experience previews"
              width={980}
              height={900}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="ml-auto h-auto w-full max-w-[620px] object-contain drop-shadow-[0_28px_58px_rgba(62,57,53,0.16)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
