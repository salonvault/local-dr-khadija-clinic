import { ArrowUpRight, ChartNoAxesCombined, CheckCircle2, Headphones, LockKeyhole, ShieldCheck } from "lucide-react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa6";

const exploreLinks = ["Home", "About Us", "Services", "Our Work", "Pricing", "Blog", "Contact Us"];

const serviceLinks = [
  "Salon Website Design",
  "Beauty Website Design",
  "E-Commerce for Salons",
  "Booking & Scheduling",
  "SEO for Salons",
  "Website Maintenance",
];

const industryLinks = ["Hair Salons", "Beauty Salons", "Nail Salons", "Barbershops", "Spa & Wellness", "Lash & Brow Studios"];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Industry Focused",
    text: "100% Salon Industry",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Sales Driven Design",
    text: "More Bookings. More Revenue.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    text: "We're Here When You Need Us",
  },
  {
    icon: LockKeyhole,
    title: "Secure & Fast",
    text: "Safe, Secure & Lightning Fast",
  },
];

function getHref(label: string) {
  if (label === "Home") return "#";
  if (label === "About Us") return "#why-us";
  if (label === "Services") return "#our-processes";
  if (label === "Contact Us") return "#contact";

  return `#${label.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`;
}

export default function Footer() {
  return (
    <footer className="bg-white px-3 pb-4 pt-6 text-[var(--color-foreground)] md:px-5">
      <div className="container">
        <div className="relative overflow-hidden rounded-[16px] border border-[var(--color-bordercol)] bg-[linear-gradient(135deg,#ffffff_0%,#fff9fb_52%,#ffffff_100%)] shadow-[0_12px_36px_rgba(17,17,17,0.045)]">
          <div className="pointer-events-none absolute -right-16 top-14 hidden h-[300px] w-[190px] opacity-35 lg:block">
            <span className="absolute right-8 top-0 h-28 w-9 rotate-[-28deg] rounded-[100%_0_100%_0] bg-[var(--color-primary-1)]/25" />
            <span className="absolute right-20 top-28 h-24 w-8 rotate-[-55deg] rounded-[100%_0_100%_0] bg-[var(--color-primary-1)]/20" />
            <span className="absolute right-2 top-44 h-28 w-10 rotate-[-70deg] rounded-[100%_0_100%_0] bg-[var(--color-primary-1)]/20" />
            <span className="absolute right-28 top-60 h-20 w-8 rotate-[-80deg] rounded-[100%_0_100%_0] bg-[var(--color-primary-1)]/18" />
            <span className="absolute right-16 top-4 h-[280px] w-px rotate-[18deg] bg-[var(--color-primary-1)]/20" />
          </div>

          <div className="relative z-10 grid gap-8 px-5 py-8 md:px-8 lg:grid-cols-[1.35fr_0.7fr_1fr_1fr_1.2fr] lg:gap-10 lg:py-10">
            <div>
              <div className="leading-none">
                <div className="brand-logo">
                  Salon<span className="text-[var(--color-primary-1)]">Vault</span>
                </div>
                <div className="brand-tagline mt-1">Growth Systems for Saloons.</div>
              </div>
              <p className="para-p2 mt-5 max-w-[280px]">
                We design high-converting growth systems for salons and beauty businesses that attract clients, build trust, and drive real growth.
              </p>

              <div className="mt-7 flex gap-3 text-[var(--color-primary-1)]">
                {[
                  { icon: FaInstagram, label: "Instagram" },
                  { icon: FaFacebookF, label: "Facebook" },
                  { icon: FaPinterestP, label: "Pinterest" },
                  { icon: FaTiktok, label: "TikTok" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-3)] transition-colors hover:bg-[var(--color-primary-1)] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="label-l1 text-[var(--color-primary-1)]">Explore</h3>
              <nav className="mt-5 grid gap-4 text-[13px] font-normal text-[var(--color-ink-2)]">
                {exploreLinks.map((link) => (
                  <a key={link} href={getHref(link)} className="transition-colors hover:text-[var(--color-primary-1)]">
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="label-l1 text-[var(--color-primary-1)]">Services</h3>
              <nav className="mt-5 grid gap-4 text-[13px] font-normal text-[var(--color-ink-2)]">
                {serviceLinks.map((link) => (
                  <a key={link} href="#pricing" className="transition-colors hover:text-[var(--color-primary-1)]">
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="label-l1 text-[var(--color-primary-1)]">Industries</h3>
              <nav className="mt-5 grid gap-4 text-[13px] font-normal text-[var(--color-ink-2)]">
                {industryLinks.map((link) => (
                  <a key={link} href="#industries" className="transition-colors hover:text-[var(--color-primary-1)]">
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="label-l1 text-[var(--color-primary-1)]">Stay Updated</h3>
              <p className="para-p2 mt-5 max-w-[280px]">
                Get tips, trends, and strategies to grow your salon business.
              </p>

              <form className="mt-6 flex max-w-[280px] overflow-hidden rounded-[7px] border border-[var(--color-bordercol)] bg-white shadow-[0_10px_24px_rgba(17,17,17,0.04)]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="para-p3 min-w-0 flex-1 px-4 outline-none placeholder:text-[var(--color-ink-3)]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-12 w-12 shrink-0 items-center justify-center bg-[var(--color-primary-1)] text-white transition-colors hover:bg-[var(--color-primary-2)]"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </form>

              <p className="mt-4 flex items-center gap-2 text-[11px] font-normal text-[var(--color-ink-3)]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[var(--color-primary-1)]" />
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          <div className="relative z-10 border-y border-[var(--color-bordercol)] bg-white/55 px-5 py-5 md:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-3)] text-[var(--color-primary-1)]">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-semibold text-[var(--color-foreground)]">{title}</h4>
                    <p className="mt-1 text-[11px] font-normal text-[var(--color-ink-2)]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-4 bg-[var(--color-blush-1)] px-5 py-5 text-[12px] font-normal text-[var(--color-ink-2)] md:flex-row md:items-center md:justify-between md:px-8">
            <p>(c) 2026 SalonVault. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              <a href="#" className="hover:text-[var(--color-primary-1)]">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--color-primary-1)]">Terms & Conditions</a>
              <a href="#" className="hover:text-[var(--color-primary-1)]">Refund Policy</a>
            </div>
            <p>
              Proudly designed for salons, by{" "}
              <span className="font-semibold text-[var(--color-primary-1)]">SalonVault.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
