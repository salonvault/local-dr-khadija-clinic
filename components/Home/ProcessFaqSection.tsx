import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    step: "1",
    title: "Should I book a cut or a fade?",
    text: "Book the service closest to your goal. If the haircut needs skin work, tapering, or a full shape reset, we will adjust the plan at the chair.",
  },
  {
    step: "2",
    title: "Do you handle longer men's hair?",
    text: "Yes. We use scissor work for classic length, executive shapes, textured crops, and styles that need movement instead of clipper-heavy structure.",
  },
  {
    step: "3",
    title: "Can you shape my beard with the cut?",
    text: "Absolutely. Beard sculpting can be paired with most haircuts for cheek lines, neckline cleanup, density control, and conditioning.",
  },
  {
    step: "4",
    title: "Will you show me what product to use?",
    text: "Yes. We finish with the right clay, paste, pomade, tonic, or spray and show how much to use so the style works after you leave.",
  },
];

export default function ProcessFaqSection() {
  return (
    <section id="faq" className="bg-[var(--midnight-black)] py-12 text-[var(--warm-cream)] lg:py-20">
      <div className="container">
        <div className="rounded-[8px] border border-[rgba(232,139,26,0.18)] bg-[linear-gradient(135deg,#24201e_0%,#171411_62%,#111111_100%)] px-5 py-8 shadow-[var(--shadow-soft)] md:px-8 lg:px-9 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1fr]">
            <div>
              <p className="eyebrow">Before the chair</p>
              <Reveal>
                <h2 className="mt-3 max-w-[560px] font-heading text-[clamp(42px,5vw,76px)] font-bold uppercase leading-[0.84]">
                  Questions men ask before booking.
                </h2>
              </Reveal>
              <a
                href="#book"
                className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-[6px] bg-[var(--barber-gold)] px-5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--midnight-black)] transition hover:bg-[#ff9d26]"
              >
                Reserve Your Chair
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid">
              {items.map((item) => (
                <div
                  className="grid grid-cols-[52px_1fr] gap-4 border-b border-[rgba(232,139,26,0.16)] py-5 transition duration-300 first:border-t hover:bg-[rgba(232,139,26,0.05)]"
                  key={item.step}
                >
                  <p className="pt-1 font-heading text-[24px] font-bold text-[var(--barber-gold)]">
                    {item.step}
                  </p>
                  <div>
                    <h3 className="font-heading text-[clamp(26px,2.4vw,36px)] font-bold uppercase leading-[0.95]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[560px] text-[12px] leading-[1.6] text-[var(--color-ink-2)]">
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
