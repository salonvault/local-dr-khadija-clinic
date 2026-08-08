import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    step: "1",
    title: "Which treatment should I choose first?",
    text: "Start with a signature facial if you are unsure. We can adjust the focus toward hydration, cleansing, glow, brows, lashes, or relaxation during consultation.",
  },
  {
    step: "2",
    title: "Will the result look natural?",
    text: "Yes. Aurelia is built around soft, clean, natural-looking beauty, with treatments designed to refresh your features rather than change them harshly.",
  },
  {
    step: "3",
    title: "Can I combine skin and beauty services?",
    text: "Absolutely. Many clients pair a facial with brow sculpting, lash lift, makeup, or a scalp treatment for a fuller self-care ritual.",
  },
  {
    step: "4",
    title: "How much time should I set aside?",
    text: "Most rituals range from 45 to 90 minutes. We keep appointments intentionally paced so you can settle in, receive care, and leave without feeling rushed.",
  },
];

export default function ProcessFaqSection() {
  return (
    <section id="faq" className="bg-[var(--warm-cream)] py-12 text-[var(--color-foreground)] lg:py-20">
      <div className="container">
        <div className="rounded-[8px] border border-[rgba(107,73,50,0.14)] bg-white px-5 py-8 shadow-[var(--shadow-soft)] md:px-8 lg:px-9 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1fr]">
            <div>
              <p className="eyebrow">Before your ritual</p>
              <Reveal>
                <h2 className="mt-3 max-w-[560px] font-heading text-[clamp(42px,5vw,76px)] font-semibold leading-[0.96]">
                  A few{" "}
                  <span className="inline-block rounded-[7px] bg-[var(--color-primary-1)] px-2 text-white">
                    helpful notes
                  </span>{" "}
                  before you book.
                </h2>
              </Reveal>
              <a
                href="#book"
                className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-[7px] bg-[var(--color-primary-1)] px-5 text-[13px] font-bold text-[var(--warm-cream)] transition hover:bg-[var(--color-primary-2)]"
              >
                Begin Your Beauty Ritual
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid">
              {items.map((item) => (
                <div
                  className="grid grid-cols-[52px_1fr] gap-4 border-b border-[rgba(107,73,50,0.14)] py-5 transition duration-300 first:border-t hover:bg-[var(--warm-cream)]/62"
                  key={item.step}
                >
                  <p className="pt-1 font-heading text-[25px] font-semibold text-[var(--color-primary-1)]">
                    {item.step}
                  </p>
                  <div>
                    <h3 className="font-heading text-[clamp(27px,2.5vw,38px)] font-semibold leading-[1]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[560px] text-[12px] leading-[1.65] text-[var(--color-ink-2)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
