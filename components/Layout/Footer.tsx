import { ArrowUpRight, Mail } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Craft", href: "#craft" },
  { label: "Barbers", href: "#barbers" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const services = ["Signature cuts", "Modern fades", "Straight razor shaves", "Beard grooming"];

export default function Footer() {
  return (
    <footer className="bg-[var(--midnight-black)] px-4 py-6 text-[var(--warm-cream)] md:px-7">
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[8px] border border-[rgba(232,139,26,0.2)] bg-[rgba(36,32,30,0.82)] shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <div className="grid gap-10 px-5 py-8 md:px-8 lg:grid-cols-[1.45fr_0.8fr_0.8fr_1fr] lg:py-10">
          <div>
            <a href="#" className="font-heading text-[34px] font-bold uppercase leading-none" aria-label="Iron & Oak Barber Co. home">
              Iron & Oak
            </a>
            <p className="mt-5 max-w-[360px] text-[13px] leading-[1.75] text-[var(--color-ink-2)]">
              Modern barber shop for men who value craftsmanship, precision, and a chair experience that feels earned.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--barber-gold)]">Explore</h3>
            <nav className="mt-5 grid gap-3 text-[13px] text-[var(--color-ink-2)]">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-[var(--color-primary-1)]">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--barber-gold)]">Specialties</h3>
            <div className="mt-5 grid gap-3 text-[13px] text-[var(--color-ink-2)]">
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--barber-gold)]">Book</h3>
            <p className="mt-5 max-w-[280px] text-[13px] leading-[1.7] text-[var(--color-ink-2)]">
              Ready for a sharper cut, cleaner beard, or proper straight razor reset?
            </p>
            <a
              href="mailto:hello@ironandoakbarber.com"
              className="mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-[6px] bg-[var(--barber-gold)] px-5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--midnight-black)] transition hover:bg-[#ff9d26]"
            >
              <Mail className="h-4 w-4" />
              Email the shop
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[rgba(232,139,26,0.18)] bg-[rgba(17,17,17,0.32)] px-5 py-5 text-[12px] text-[var(--color-ink-2)] md:flex-row md:items-center md:justify-between md:px-8">
          <p>(c) 2026 Iron & Oak Barber Co. All rights reserved.</p>
          <a href="mailto:hello@ironandoakbarber.com" className="inline-flex items-center gap-2 hover:text-[var(--barber-gold)]">
            hello@ironandoakbarber.com
          </a>
        </div>
      </div>
    </footer>
  );
}
