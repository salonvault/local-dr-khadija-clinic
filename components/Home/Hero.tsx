"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Scissors } from "lucide-react";

const stats = [
  { value: "14+", label: "Years behind the chair" },
  { value: "4.9", label: "Average guest rating" },
  { value: "30m", label: "Signature fade window" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--midnight-black)] pt-24 text-[var(--warm-cream)]">
      <Image
        src="/assets/barber-hero.png"
        alt="Premium barber shop with leather chair, black brick, and warm amber light"
        fill
        sizes="100vw"
        className="object-cover object-top"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.96)_0%,rgba(17,17,17,0.46)_38%,rgba(17,17,17,0.22)_72%,rgba(17,17,17,0.32)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(232,139,26,0.18),transparent_28%),linear-gradient(180deg,transparent_64%,#111111_100%)]" />

      <div className="container relative z-10 grid min-h-[calc(100vh-96px)] items-center gap-10 py-14 lg:grid-cols-[0.96fr_0.7fr]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
          }}
        >
          <motion.p
            className="inline-flex rounded-[4px] border border-[rgba(232,139,26,0.36)] bg-[rgba(232,139,26,0.1)] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.08em] text-[var(--barber-gold)]"
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            Premium barber experience
          </motion.p>

          <motion.h1
            className="mt-6 max-w-[760px] font-heading text-[clamp(56px,8.4vw,124px)] font-bold uppercase leading-[0.86] text-[var(--warm-cream)]"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            Crafted cuts.
            <span className="block text-[var(--barber-gold)]">Built sharp.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[520px] text-[15px] leading-[1.75] text-[var(--color-ink-2)]"
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            Precision barbering with modern craftsmanship. From skin fades to straight razor shaves, every service is shaped around your style, routine, and confidence.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <a id="book" href="mailto:hello@ironandoakbarber.com" className="navy-button min-h-12 px-6 uppercase tracking-[0.08em]">
              <CalendarCheck className="h-4 w-4" />
              Reserve Your Chair
            </a>
            <a href="#services" className="outline-button min-h-12 px-6 uppercase tracking-[0.08em]">
              View Services
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <div className="relative self-end lg:pb-14">
          <div className="atelier-panel ml-auto max-w-[360px] p-5">
            <div className="flex items-center gap-3 text-[var(--barber-gold)]">
              <span className="grid h-10 w-10 place-items-center rounded-[6px] bg-[rgba(232,139,26,0.14)]">
                <Scissors className="h-5 w-5" />
              </span>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.08em]">Iron & Oak Method</p>
            </div>
            <div className="mt-5 grid gap-2">
              {["Consult the shape", "Cut with intention", "Finish for daily wear"].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[6px] border px-4 py-3 text-[12px] font-bold ${
                    index === 1
                      ? "border-[var(--barber-gold)] bg-[var(--barber-gold)] text-[var(--midnight-black)]"
                      : "border-[rgba(232,139,26,0.18)] bg-[rgba(17,17,17,0.42)] text-[var(--warm-cream)]"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[8px] border border-[rgba(232,139,26,0.18)] bg-[rgba(17,17,17,0.62)] p-4 backdrop-blur">
                <p className="font-heading text-[28px] font-bold leading-none text-[var(--barber-gold)]">{stat.value}</p>
                <p className="mt-2 text-[10px] leading-[1.35] text-[var(--color-ink-2)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
