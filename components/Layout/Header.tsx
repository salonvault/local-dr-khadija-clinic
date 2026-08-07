"use client";

import { CalendarCheck, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Craft", href: "#craft" },
  { label: "Barbers", href: "#barbers" },
  { label: "FAQ", href: "#faq" },
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
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-7">
      <div className="mx-auto flex min-h-14 max-w-[1320px] items-center justify-between gap-4 rounded-[8px] border border-[rgba(232,139,26,0.24)] bg-[rgba(17,17,17,0.82)] px-4 shadow-[0_20px_70px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(244,239,231,0.1)] backdrop-blur-2xl backdrop-saturate-150 md:px-5">
        <a href="#" className="flex items-center gap-2" aria-label="Iron & Oak Barber Co. home">
          <span className="font-heading text-[22px] font-bold uppercase leading-none text-[var(--warm-cream)]">
            Iron & Oak
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink-2)] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-[var(--barber-gold)] ${
                activeHref === item.href ? "text-[var(--color-primary-1)]" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="hidden min-h-9 items-center justify-center rounded-[6px] border border-[var(--barber-gold)] bg-[var(--barber-gold)] px-5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--midnight-black)] shadow-[0_14px_28px_rgba(232,139,26,0.2)] transition-colors hover:bg-[#ff9d26] lg:inline-flex"
          >
            Reserve Chair
          </a>

          <Sheet>
            <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-[var(--graphite-gray)] text-[var(--warm-cream)] transition-colors hover:bg-[var(--charcoal-brick)] lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
          <SheetContent className="border-[rgba(232,139,26,0.24)] bg-[rgba(17,17,17,0.94)] p-5 text-[var(--warm-cream)] shadow-[0_20px_70px_rgba(0,0,0,0.44)] backdrop-blur-2xl backdrop-saturate-150">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-[6px] border border-[var(--barber-gold)]/30 text-[13px] text-[var(--barber-gold)]">
                  IO
                </span>
                <span className="font-heading text-[24px] font-bold uppercase">Iron & Oak</span>
              </div>
          
            <nav className="mt-5 grid gap-2 text-[14px] font-normal text-[var(--color-foreground)]">
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <a
                    href={item.href}
                    className={`flex items-center justify-between rounded-[8px] border px-4 py-3 transition-colors hover:border-[var(--barber-gold)]/40 hover:bg-[var(--charcoal-brick)] hover:text-[var(--barber-gold)] ${
                      activeHref === item.href
                        ? "border-[var(--barber-gold)]/40 bg-[var(--charcoal-brick)] text-[var(--barber-gold)]"
                        : "border-transparent bg-[rgba(36,32,30,0.62)]"
                    }`}
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>

            <SheetClose asChild>
              <a href="#book" className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-[6px] bg-[var(--barber-gold)] px-5 text-[12px] font-extrabold uppercase tracking-[0.08em] text-[var(--midnight-black)] shadow-[0_14px_28px_rgba(232,139,26,0.22)]">
                <CalendarCheck className="h-4 w-4" />
                Reserve Your Chair
              </a>
            </SheetClose>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}
