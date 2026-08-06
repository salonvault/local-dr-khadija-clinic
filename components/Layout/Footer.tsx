import { ArrowUpRight, Mail } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
];

const services = ["Extensions", "Balayage", "Color correction", "Bridal styling"];

export default function Footer() {
  return (
    <footer className="bg-[#f1dfdc] px-4 py-6 text-[var(--color-foreground)] md:px-7">
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[8px] border border-[rgba(164,87,86,0.14)] bg-[#fffaf7]/78 shadow-[0_20px_70px_rgba(62,57,53,0.08)] backdrop-blur-xl">
        <div className="grid gap-10 px-5 py-8 md:px-8 lg:grid-cols-[1.45fr_0.8fr_0.8fr_1fr] lg:py-10">
          <div>
            <a href="#" className="font-heading text-[34px] font-semibold leading-none" aria-label="Atelier Hair home">
              Atelier Hair
            </a>
            <p className="mt-5 max-w-[360px] text-[13px] leading-[1.75] text-[var(--color-ink-2)]">
              Premium hair extension and color specialists creating soft, dimensional results with a quiet editorial finish.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">Explore</h3>
            <nav className="mt-5 grid gap-3 text-[13px] text-[var(--color-ink-2)]">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-[var(--color-primary-1)]">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">Specialties</h3>
            <div className="mt-5 grid gap-3 text-[13px] text-[var(--color-ink-2)]">
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">Book</h3>
            <p className="mt-5 max-w-[280px] text-[13px] leading-[1.7] text-[var(--color-ink-2)]">
              Ready to talk through your hair goals? Start with a calm, consultation-led plan.
            </p>
            <a
              href="mailto:hello@atelier-hair.com"
              className="mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[var(--color-foreground)] px-5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--color-primary-1)]"
            >
              <Mail className="h-4 w-4" />
              Email Atelier
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[rgba(164,87,86,0.14)] bg-[#f5edec]/70 px-5 py-5 text-[12px] text-[var(--color-ink-2)] md:flex-row md:items-center md:justify-between md:px-8">
          <p>(c) 2026 Atelier Hair. All rights reserved.</p>
          <a href="mailto:hello@atelier-hair.com" className="inline-flex items-center gap-2 hover:text-[var(--color-primary-1)]">
            hello@atelier-hair.com
          </a>
        </div>
      </div>
    </footer>
  );
}
