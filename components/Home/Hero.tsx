"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative max-3xl:min-h-[calc(100vh-82px)] max-h-[800px]  overflow-hidden ">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[92px] z-0 hidden w-[94vw] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(164,87,86,0.06)_0%,rgba(164,87,86,0.42)_32%,rgba(164,87,86,0.76)_58%,rgba(164,87,86,0.1)_100%)]  bg-clip-text text-center font-heading! text-[clamp(96px,12.5vw,170px)] font-light uppercase leading-[0.78] tracking-[-0.06em] text-transparent lg:block"
      >
        Atelier Hair
      </div>

      <div className="container relative z-10">
        <div className="grid max-3xl:min-h-[calc(100vh-148px)] grid-cols-1 items-center gap-4 pt-28 lg:grid-cols-[30%_45%_20%]   lg:gap-6 lg:pt-0">
          <motion.div
            className="relative z-30 mt-20"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.18,
                },
              },
            }}
          >
            <motion.p
              className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-primary-1)]"
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              Premium Hair Extension & color specialists
            </motion.p>
            <motion.h1
              className="mt-4 font-heading text-[clamp(46px,5.2vw,76px)] font-semibold leading-[0.86] text-[var(--color-foreground)]"
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              Premium Hair
              <span className="block">Extension</span>
            </motion.h1>
            <motion.span
              className="mt-2 block h-3 w-full max-w-[300px] rotate-[-2deg] rounded-full border-t-[3px] border-[var(--color-primary-1)]"
              variants={{
                hidden: { opacity: 0, scaleX: 0.2, transformOrigin: "left center" },
                show: { opacity: 1, scaleX: 1, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
              }}
            />
            <motion.p
              className="mt-5 max-w-[300px] text-[12px] leading-[1.55] text-[var(--color-ink-2)]"
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              A warm, minimal salon experience for seamless extensions, dimensional color, balayage, and bridal styling.
            </motion.p>
            <motion.a
              id="book"
              href="mailto:hello@atelier-hair.com"
              className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--color-foreground)] px-6 text-[12px] font-extrabold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-1)]"
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <CalendarCheck className="h-4 w-4" />
              Book consultation
            </motion.a>
          </motion.div>

          <div className="relative z-20 -mx-12 flex h-full max-h-[750px] items-end justify-center self-end sm:-mx-16 md:pb-4 lg:-mx-18 lg:mt-18  lg:pb-0">
            <Image
              src="/assets/hero_new.png"
              alt="Woman with glossy dimensional blonde hair at Atelier Hair"
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 1024px, 1024px"
              quality={100}
              className="h-auto w-[124vw] max-w-none   object-contain drop-shadow-[0_34px_70px_rgba(62,57,53,0.24)] sm:w-[112vw] lg:w-[66vw]"
              priority
            />

            <div className="absolute bottom-2 left-[43%] max-sm:scale-75 w-[min(78vw,270px)] -translate-x-1/2 rounded-[8px] border border-white/55 bg-white/75 p-4 shadow-[0_20px_70px_rgba(62,57,53,0.18)] backdrop-blur-2xl backdrop-saturate-150 md:bottom-[8%] md:left-[58%] md:translate-x-0 lg:bottom-[26%] lg:left-[83%] xl:w-[300px]">
              <div className="mb-4 inline-flex rounded-full border border-white/60 bg-white/40 px-3 py-1 text-[10px] font-bold text-[var(--color-ink-2)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-xl">
                Scope of Work
              </div>
              <p className="font-heading text-[22px] font-semibold leading-none text-[var(--color-foreground)]">
                Atelier Method
              </p>
              <div className="mt-4 grid gap-2">
                {["Color matching", "Extension blending", "Gloss finish"].map((item, index) => (
                  <div
                    className={`rounded-[5px] px-3 py-2 text-[10px] font-bold ${
                      index === 1
                        ? "bg-[var(--color-foreground)] text-white"
                        : "bg-[var(--color-primary-3)] text-[var(--color-foreground)]"
                    }`}
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="relative z-30 self-center lg:self-end lg:pb-20">
            <p className="font-heading text-[42px] font-semibold leading-[0.86] text-[var(--color-foreground)] lg:text-[52px]">
              salon
              <span className="block">atelier</span>
            </p>
            <div className="mt-8 rounded-[8px] border border-[rgba(164,87,86,0.12)] bg-[rgba(255,250,247,0.86)] p-5 shadow-[0_20px_70px_rgba(62,57,53,0.1)] backdrop-blur">
              <div className="flex items-center gap-2 text-[var(--color-primary-1)]">
                <Sparkle className="h-4 w-4" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.08em]">Signature services</span>
              </div>
              <div className="mt-5 grid gap-2">
                {["Luxury extensions", "Balayage & color", "Bridal styling"].map((service) => (
                  <a
                    className="flex items-center justify-between gap-3 rounded-full border border-[rgba(164,87,86,0.12)] bg-[rgba(245,237,236,0.72)] px-4 py-3 text-[12px] font-bold text-[var(--color-foreground)] transition hover:bg-white"
                    href="#book"
                    key={service}
                  >
                    {service}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
