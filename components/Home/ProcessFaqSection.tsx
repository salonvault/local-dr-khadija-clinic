import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    step: "1",
    title: "will extensions damage my hair?",
    text: "Not when the method, weight, and maintenance rhythm are chosen correctly. We only recommend options that suit your natural density and lifestyle.",
  },
  {
    step: "2",
    title: "can the result look natural?",
    text: "Yes. The blend is built through tone, placement, length, and density so the finish moves like your own hair, not an obvious add-on.",
  },
  {
    step: "3",
    title: "how long will it last?",
    text: "Longevity depends on the service, home care, and your growth cycle. During consultation, we explain upkeep clearly before you commit.",
  },
  {
    step: "4",
    title: "what if I am unsure what I need?",
    text: "That is exactly what the consultation is for. We translate your goal into a clear service plan, from subtle fullness to a full transformation.",
  },
];

export default function ProcessFaqSection() {
  return (
    <section id="faq" className="bg-[#e7d5d1] py-10 text-[var(--color-foreground)] lg:py-16">
      <div className="container">
        <div className="rounded-[8px] bg-[#f7f0ef] px-5 py-8 shadow-[0_24px_70px_rgba(62,57,53,0.08)] md:px-8 lg:px-9 lg:py-10">
          <div className="mb-3 lg:mb-1">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">
              Process
            </p>
            <Reveal>
              <h2 className="mt-3 max-w-[760px] font-heading text-[clamp(38px,5vw,72px)] font-semibold leading-[0.84] text-[var(--color-foreground)]">
                Questions before the chair
              </h2>
            </Reveal>
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[46%_54%]">
            <div className="relative aspect-[0.9] overflow-hidden rounded-[18px] bg-[var(--color-primary-3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(62,57,53,0.14)] lg:aspect-[0.86]">
              <Image
                src="/assets/faq.png"
                alt="Smooth brunette hair being combed at Atelier Hair"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="pb-1">
              <div className="mb-3 hidden justify-center lg:flex">
                <svg width="118" height="58" viewBox="0 0 118 58" fill="none" aria-hidden="true">
                  <path
                    d="M2 11C31 0 74 1 81 22C88 43 54 50 51 31C48 13 86 22 112 54"
                    stroke="var(--color-primary-1)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M98 53L113 55L109 41"
                    stroke="var(--color-primary-1)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="grid">
                {items.map((item) => (
                  <div
                    className="grid grid-cols-[64px_1fr] gap-4 border-b border-[rgba(62,57,53,0.16)] py-5 transition duration-300 first:border-t hover:bg-white/38"
                    key={item.step}
                  >
                    <p className="pt-1 text-[11px] font-semibold lowercase text-[var(--color-primary-1)]">
                      {item.step}
                    </p>
                    <div>
                      <h3 className="font-heading text-[clamp(24px,2.35vw,34px)] font-semibold leading-[0.95]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[520px] text-[12px] leading-[1.5] text-[var(--color-ink-2)]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#book"
                className="mt-7 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[var(--color-foreground)] px-5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--color-primary-1)]"
              >
                Book consultation
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-[var(--color-foreground)]">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
