"use client";

import {
  ArrowRight,
  CalendarCheck,
  Menu,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#our-processes" },
  { label: "Our Work", href: "#our-work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeHref, setActiveHref] = useState("#");

  useEffect(() => {
    const sectionItems = navItems.filter((item) => item.href !== "#");
    const sections = sectionItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const updateActiveLink = () => {
      if (window.scrollY < 120) {
        setActiveHref("#");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }

        updateActiveLink();
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.12, 0.24, 0.4],
      }
    );

    sections.forEach((section) => observer.observe(section));
    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveLink);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-bordercol)]/70 bg-white/95 shadow-[0_5px_22px_rgba(17,17,17,0.05)] backdrop-blur">
      <div className="container flex min-h-18 items-center justify-between gap-4 lg:min-h-20">
        <a href="#" className="flex items-center gap-3" aria-label="SalonVault home">
          <div className="leading-none">
            <div className="brand-logo text-[var(--color-foreground)]">
              Salon<span className="text-[var(--color-primary-1)]">Vault</span>
            </div>
            <div className="brand-tagline mt-1">
              Growth Systems for Saloons.
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-[13px] font-normal text-[var(--color-foreground)] lg:flex xl:gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative flex items-center gap-1 py-7 transition-colors hover:text-[var(--color-primary-1)] ${
                activeHref === item.href ? "text-[var(--color-primary-1)] after:absolute after:bottom-5 after:left-0 after:h-0.5 after:w-full after:bg-[var(--color-primary-1)]" : ""
              }`}
            >
              {item.label}
             
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden min-h-11 items-center justify-center rounded-[7px] border border-[var(--color-primary-1)] bg-[var(--color-primary-1)] px-5 text-[13px] font-bold text-white shadow-[0_14px_28px_rgba(232,93,117,0.18)] transition-colors hover:bg-[var(--color-primary-2)] lg:inline-flex"
          >
            Book a Free Call
          </a>

          <Sheet>
            <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-bordercol text-[var(--color-foreground)] transition-colors hover:bg-panel lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
          <SheetContent className="bg-[linear-gradient(160deg,#ffffff_0%,#fff8fa_62%,#ffffff_100%)] p-5">
            <div className="mt-2 rounded-[12px] border border-[var(--color-bordercol)] bg-white/80 p-4 shadow-[0_10px_24px_rgba(17,17,17,0.04)]">
              <div className="leading-none">
                <div className="brand-logo text-[var(--color-foreground)]">
                  Salon<span className="text-[var(--color-primary-1)]">Vault</span>
                </div>
                <div className="brand-tagline mt-1">
                  Growth Systems for Saloons.
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-full bg-[var(--color-primary-3)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--color-primary-1)]">
              <Sparkles className="h-3.5 w-3.5" />
              Salon Growth Menu
            </div>

            <nav className="mt-5 grid gap-2 text-[14px] font-normal text-[var(--color-foreground)]">
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <a
                    href={item.href}
                    className={`flex items-center justify-between rounded-[8px] border px-4 py-3 transition-colors hover:border-[var(--color-bordercol)] hover:bg-white hover:text-[var(--color-primary-1)] ${
                      activeHref === item.href
                        ? "border-[var(--color-bordercol)] bg-white text-[var(--color-primary-1)]"
                        : "border-transparent bg-white/55"
                    }`}
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 text-[var(--color-primary-1)]" />
                  </a>
                </SheetClose>
              ))}
            </nav>

            <SheetClose asChild>
              <a href="#contact" className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-[var(--color-primary-1)] px-5 text-[13px] font-bold text-white shadow-[0_14px_28px_rgba(232,93,117,0.22)]">
                <CalendarCheck className="h-4 w-4" />
                Book a Free Call
              </a>
            </SheetClose>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}
