"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    title: "Hydra Facial",
    text: "Deep cleanse, exfoliation, hydration, and glow support for refreshed skin.",
    image: "/assets/service1.jpeg",
  },
  {
    title: "Signature Facial",
    text: "A calming skin ritual tailored to your texture, tone, and comfort.",
    image: "/assets/service2.jpeg",
  },
  {
    title: "Deep Cleansing",
    text: "Clarifying care for congestion, buildup, and skin that needs balance.",
    image: "/assets/service3.jpeg",
  },
  {
    title: "Glow Therapy",
    text: "Radiance-focused treatment for soft, healthy-looking luminosity.",
    image: "/assets/service4.jpeg",
  },
  {
    title: "Brow Sculpting",
    text: "Soft structure and clean definition shaped around your features.",
    image: "/assets/service5.jpeg",
  },
  {
    title: "Hair Spa",
    text: "Nourishing scalp and hair care for softness, shine, and relaxation.",
    image: "/assets/service6.jpeg",
  },
  {
    title: "Waxing",
    text: "Gentle hair removal for smooth, comfortable, and polished skin.",
    image: "/assets/service7.jpeg",
  },
  {
    title: "Makeup",
    text: "Soft glam, event-ready polish, and natural beauty finishing.",
    image: "/assets/service8.jpeg",
  },
  {
    title: "Manicure",
    text: "Nail shaping, cuticle care, polish, and a clean elegant finish.",
    image: "/assets/service9.jpeg",
  },
  {
    title: "Pedicure",
    text: "Comforting foot care with smooth skin, shaping, and polish.",
    image: "/assets/service10.jpeg",
  },
  {
    title: "Head & Scalp",
    text: "A grounding relaxation ritual for tension, calm, and restoration.",
    image: "/assets/service11.jpeg",
  },
  {
    title: "Body Treatments",
    text: "Softening, smoothing, and restorative care for full-body renewal.",
    image: "/assets/service12.jpeg",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) return;

    const context = gsap.context(() => {
      const setupHorizontalScroll = () => {
        const distance = track.scrollWidth - viewport.clientWidth;
        if (distance <= 0) return undefined;
        const isMobile = window.matchMedia("(max-width: 767px)").matches;

        return gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: viewport,
            start: isMobile ? "top 26%" : "top 16%",
            end: () => `+=${distance}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      };

      setupHorizontalScroll();
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="treatments" className="overflow-hidden py-16 text-white lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="eyebrow text-[var(--color-primary-1)]">Aurelia services</p>
          <h2 className="heading-h2 mx-auto mt-4 max-w-[860px] text-white">
            Our goal is to provide expert{" "}
            <span className="inline-block rounded-[7px] bg-[var(--color-primary-1)] px-2 text-white">
              beauty rituals
            </span>{" "}
            for skin, body, and self-care.
          </h2>
        </div>
      </div>

      <div ref={viewportRef} className="mt-12 overflow-hidden px-4 pb-2 [scrollbar-width:none] md:px-7 [&::-webkit-scrollbar]:hidden">
        <div ref={trackRef} className="flex w-max will-change-transform">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative aspect-[3/4] w-[calc(100vw-2rem)] overflow-hidden border-y border-r border-white/12 first:border-l sm:w-[78vw] md:w-[280px] lg:w-[310px]"
            >
              <Image
                src={service.image}
                alt={`${service.title} at Aurelia Beauty & Wellness`}
                fill
                sizes="(min-width: 1024px) 310px, 260px"
                className="object-cover transition duration-500 group-hover:scale-105"
                style={{ objectPosition: index === 6 ? "50% 10%" : "50% 50%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(48,37,31,0.12)_0%,rgba(48,37,31,0.42)_44%,rgba(48,37,31,0.92)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(169,104,50,0.18),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-heading text-[28px] font-normal uppercase leading-none text-white">
                  {service.title}
                </p>
                <p className="mt-3 max-w-[230px] text-[12px] font-medium leading-[1.55] text-white/76">
                  {service.text}
                </p>
                <a href="#book" className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase text-white backdrop-blur transition hover:bg-[var(--color-primary-1)]">
                  Book Now
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
             
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
