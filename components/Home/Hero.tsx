import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import {  FiTrendingUp } from "react-icons/fi";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export default function Hero() {
  return (
    <section className="hero-cylinders bg-[var(--color-background)]">
      <div className="container py-8 lg:py-12">
        <div className="hero-content grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="max-w-[680px]">
            <div className="label-l1 inline-block rounded-full bg-accent/15 px-4 py-1.5 text-[var(--color-primary-1)]">
              For Salons Ready to Grow
            </div>

            <h1 className="heading-h1 mt-4 md:mt-6">
              <span className="block lg:whitespace-nowrap font-normal!">Strategic Salon Websites</span>
              <br className="hidden md:block" />
              <span className="block text-[var(--color-primary-1)] ">That Bring You More Clients.</span>
            </h1>

            <p className="para-p1 mt-4 md:mt-6 max-w-[560px]">
              We build conversion-focused websites for salons that attract the right clients, build instant trust, and turn visitors into booked appointments consistently.
            </p>

            <div className="mt-8 flex flex-row  gap-4">
              <a href="#our-work" className="navy-button min-h-12 min-w-[166px]">
                See Real Results
                <ArrowRight className="h-4 w-4 hidden md:flex" />
              </a>
              <a href="#contact" className="outline-button min-h-12 min-w-[178px]">
                <span className="hidden md:flex">Book</span> Free Strategy Call
                <Phone className="h-4 w-4 hidden md:flex" />
              </a>
            </div>

            <div className="mt-10 flex flex-col md:flex-row  gap-2 md:gap-4">
              {[
                [VscWorkspaceTrusted , "Convert Visitors Into Bookings", "More Bookings. More Revenue"],
                [FiTrendingUp, "Build Instant Trust Online", "Fill Empty Appointment Slots"],
              ].map(([Icon, title, text]) => (
                <div className="flex items-start gap-3" key={title as string}>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-3)]">
                    <Icon className="h-5 w-5 text-[var(--color-primary-1)]" />
                  </div>
                  <div>
                    <div className="text-[13px] font-extrabold">{title as string}</div>
                    <div className="text-[13px] text-[var(--color-steel)]">{text as string}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-browser w-full max-w-[620px] bg-white">
              <div className="flex h-8 items-center gap-1.5 bg-white px-4">
                <span className="h-2 w-2 rounded-full bg-[#ece8e6]" />
                <span className="h-2 w-2 rounded-full bg-[#ece8e6]" />
                <span className="h-2 w-2 rounded-full bg-[#ece8e6]" />
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src="/assets/hero-1.png" alt="Luxury salon website tablet preview" fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover object-top" priority />
              </div>
            </div>

            <div className="hero-mobile hidden bg-white p-[3px] md:block">
              <div className="h-[280px] lg:h-[330px] overflow-hidden rounded-[8px] border border-[#eee8e5] bg-white">
                <div className="flex h-6 items-center justify-center gap-2 bg-white">
                  <span className="h-1.5 w-8 rounded-full bg-[#e5e0df]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e5e0df]" />
                </div>
                <div className="h-[254px] overflow-hidden border-t border-[#eee8e5] lg:h-[304px]">
                  <Image src="/assets/hero-2.png" alt="Luxury salon website mobile preview" width={360} height={520} sizes="180px" className="h-full w-full object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
