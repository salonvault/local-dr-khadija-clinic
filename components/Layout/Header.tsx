"use client";

import { CalendarCheck, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
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
      <div className="mx-auto flex min-h-14 max-w-[1320px] items-center justify-between gap-4 rounded-full border border-white/60 bg-[rgba(245,237,236,0.74)] px-4 shadow-[0_20px_70px_rgba(62,57,53,0.16),inset_0_1px_0_rgba(255,255,255,0.78)] backdrop-blur-2xl backdrop-saturate-200 md:px-5">
        <a href="#" className="flex items-center gap-2" aria-label="Atelier Hair home">
          <span className="font-heading text-[22px] font-semibold leading-none text-[var(--color-foreground)]">
            Atelier Hair
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink-2)] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-[var(--color-primary-1)] ${
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
            className="hidden min-h-9 items-center justify-center rounded-full border border-[var(--color-primary-1)]/20 bg-[var(--color-primary-1)] px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_14px_28px_rgba(164,87,86,0.18)] transition-colors hover:bg-[var(--color-primary-2)] lg:inline-flex"
          >
            Book Consultation
          </a>

          <Sheet>
            <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bordercol text-[var(--color-foreground)] transition-colors hover:bg-panel lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
          <SheetContent className="border-white/55 bg-white/45 p-5 shadow-[0_20px_70px_rgba(62,57,53,0.18),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-2xl backdrop-saturate-150">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-[var(--color-primary-1)]/20 text-[13px] text-[var(--color-primary-1)]">
                  AH
                </span>
                <span className="font-heading text-[24px] font-semibold">Atelier Hair</span>
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
                  </a>
                </SheetClose>
              ))}
            </nav>

            <SheetClose asChild>
              <a href="#book" className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary-1)] px-5 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_14px_28px_rgba(164,87,86,0.22)]">
                <CalendarCheck className="h-4 w-4" />
                Reserve Consultation
              </a>
            </SheetClose>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}
