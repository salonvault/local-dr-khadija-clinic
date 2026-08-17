import Image from "next/image";
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import footerBackground from "../../public/assets/bg.png";
import { FaFacebookF } from "react-icons/fa6";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Results", href: "#services" },
  { label: "Clinic", href: "#studio" },
  { label: "Services", href: "#treatments" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const services = ["Acne & Scars", "Pigmentation", "Hair Loss & PRP", "Laser Treatments", "Aesthetic Procedures", "Dental Care"];

const socialLinks = [
  { label: "Doctor Khadija Clinic on Facebook", href: "https://www.facebook.com/doctorkhadijaclinic/", icon: FaFacebookF },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--warm-cream)] px-4 py-6 text-white md:px-7">
      <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[8px] border border-[rgba(169,104,50,0.26)] bg-[#92510f] shadow-[var(--shadow-soft)]">
        <Image
          src={footerBackground}
          alt=""
          fill
          sizes="(max-width: 1320px) 100vw, 1320px"
          className="object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(48,37,31,0.78),rgba(107,73,50,0.58)),linear-gradient(180deg,rgba(48,37,31,0.22),rgba(48,37,31,0.82))]" />

        <div className="relative z-10 grid gap-10 px-5 py-8 md:px-8 lg:grid-cols-[1.45fr_0.8fr_0.8fr_1fr] lg:py-10">
          <div>
            <a href="#hero" className="font-heading text-[36px] font-normal uppercase leading-none tracking-[0.05em]" aria-label="Doctor Khadija Clinic home">
              Doctor Khadija
            </a>
            <p className="mt-5 max-w-[380px] text-[13px] leading-[1.8] text-white/72">
              Skin, laser, aesthetic, and dental care by Dr. Khadija Tahir Dar in Gujranwala, with individual consultations and practical treatment plans.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/18 bg-white/10 text-white/78 transition hover:border-[#eca15d]/60 hover:bg-[#eca15d] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#eca15d]">Explore</h3>
            <nav className="mt-5 grid gap-3 text-[13px] text-white/72">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-[#eca15d]">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#eca15d]">Services</h3>
            <div className="mt-5 grid gap-3 text-[13px] text-white/72">
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#eca15d]">Book</h3>
            <p className="mt-5 max-w-[280px] text-[13px] leading-[1.75] text-white/72">
              Have a skin, hair, aesthetic, or dental concern? Call or WhatsApp to arrange your visit.
            </p>
            <a
              href="https://wa.me/923124039999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-[7px] bg-[var(--color-primary-1)] px-5 text-[12px] font-bold text-white transition hover:bg-[#a85f13]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp the clinic
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3 border-t border-white/14 bg-black/10 px-5 py-5 text-[12px] text-white/62 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Doctor Khadija Clinic. All rights reserved.</p>
          <a href="tel:+923124039999" className="inline-flex items-center gap-2 transition hover:text-[#eca15d]">
            <MapPin className="h-3.5 w-3.5" /> Citi Housing, Gujranwala · 0312 4039999
          </a>
        </div>
      </div>
    </footer>
  );
}
