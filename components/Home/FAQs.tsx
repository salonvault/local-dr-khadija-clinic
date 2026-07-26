"use client";

import { Mail, MapPin, Minus, Phone, Plus, Send } from "lucide-react";
import React from "react";

const faqs = [
  {
    q: "Which engineering services does NovaCore provide?",
    a: "NovaCore provides boiler manufacturing, boiler inspection and certification, pressure vessel manufacturing, heat exchangers, industrial fabrication, EPC solutions, consultancy, maintenance, shutdown support, and third-party inspection.",
  },
  {
    q: "Do you support boiler and turbine inspection work?",
    a: "Yes. Inspection services are central to NovaCore's offering, including boiler compliance verification, certification support, condition assessment, and inspection planning for critical rotating and pressure equipment.",
  },
  {
    q: "Which industries can work with NovaCore?",
    a: "We serve power plants, textile, sugar, chemical, paper, food processing, pharmaceutical, oil and gas, cement, steel, and broader manufacturing industries.",
  },
  {
    q: "Can NovaCore handle EPC and shutdown projects?",
    a: "Yes. NovaCore supports end-to-end EPC execution and planned industrial shutdown services, including engineering, procurement, fabrication, inspection, maintenance, and commissioning support.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section id="contact" className="section-pad bg-panel">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="heading-lg mt-3 text-navy">Request a Quote for Your Next Industrial Project</h2>
          <p className="body-lg mt-5 text-steel">
            NovaCore Engineering Group serves industries in Pakistan and worldwide
            with dependable manufacturing, inspection, maintenance, and engineering services.
          </p>

          <div className="mt-8 space-y-4 text-[14px] font-semibold text-navy">
            <a href="mailto:info@novacoregroup.com" className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary-2" />
              info@novacoregroup.com
            </a>
            <a href="tel:+923434101295" className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary-2" />
              +92 343 4101295
            </a>
            <span className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary-2" />
              Lahore, Pakistan - Serving Industries Worldwide
            </span>
          </div>

          <div className="mt-10 rounded-[6px] bg-navy p-7 text-white">
            <h3 className="text-[20px] font-extrabold">Engineering Beyond Standards</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/72">
              Reliable, safe, and cost-effective engineering through technical
              expertise, innovation, quality management, and continuous improvement.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <form className="rounded-[6px] bg-white p-6 shadow-card md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="h-12 rounded-[4px] border border-bordercol px-4 text-[14px] outline-none focus:border-primary-2" placeholder="Your Name" />
              <input className="h-12 rounded-[4px] border border-bordercol px-4 text-[14px] outline-none focus:border-primary-2" placeholder="Company" />
              <input className="h-12 rounded-[4px] border border-bordercol px-4 text-[14px] outline-none focus:border-primary-2" placeholder="Email" type="email" />
              <input className="h-12 rounded-[4px] border border-bordercol px-4 text-[14px] outline-none focus:border-primary-2" placeholder="Phone" />
            </div>
            <textarea className="mt-4 min-h-32 w-full rounded-[4px] border border-bordercol p-4 text-[14px] outline-none focus:border-primary-2" placeholder="Tell us about your boiler, turbine, inspection, EPC, or fabrication requirement" />
            <button type="button" className="navy-button mt-4 w-full md:w-auto">
              Send Request
              <Send className="h-4 w-4" />
            </button>
          </form>

          <div className="rounded-[6px] bg-white p-4 shadow-card">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.q} className="border-b border-bordercol last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-[15px] font-extrabold text-navy"
                  >
                    {faq.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-panel text-primary-2">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="pb-5">
                      <p className="text-[14px] leading-relaxed text-steel">{faq.a}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
