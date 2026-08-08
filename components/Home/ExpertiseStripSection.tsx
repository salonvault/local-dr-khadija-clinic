import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&crop=faces&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&crop=faces&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&crop=faces&w=80&h=80&q=80",
];

export default function ExpertiseStripSection() {
  return (
    <section className="bg-[var(--warm-cream)] px-[2px] py-16 text-[var(--color-foreground)] lg:py-22">
      <div className="container">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="heading-h2 mx-auto max-w-[720px]">
            <span className="inline-block rounded-[7px] bg-[var(--color-primary-1)] px-2 text-white">
              Expert Care 
            </span>{" "}
            OfferingAdvanced Skin & Wellness Rituals.
          </h2>
          <p className="para-p3 mx-auto mt-4 max-w-[520px]">
            Indulge in luminous beauty treatments designed to rejuvenate your skin, relax your body, and enhance your natural glow.
          </p>
          <a
            href="#book"
            className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[var(--color-primary-1)] py-1 pl-5 pr-1 text-[12px] font-bold text-white shadow-[0_14px_30px_rgba(169,104,50,0.18)] transition hover:bg-[var(--color-primary-2)]"
          >
            Book Appointment
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[var(--color-primary-1)]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </a>
        </div>

        <div className="relative mx-auto mt-6 max-w-[1040px] overflow-hidden rounded-[18px] border border-[rgba(169,104,50,0.26)] bg-white p-2 shadow-[0_24px_70px_rgba(107,73,50,0.12)]">
          <Image
            src="/assets/bg.png"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1040px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/10" />

          <div className="relative z-10 grid gap-2 lg:grid-cols-4 lg:grid-rows-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-[14px] lg:col-span-1 lg:row-span-2 lg:min-h-[500px]">
            <Image
              src="/assets/treatment4.jpeg"
              alt="Warm skincare texture and treatment detail"
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(48,37,31,0.16)_100%)]" />
          </div>

          <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-[14px] bg-[#201915] p-5 text-white lg:col-span-2 lg:row-span-1">
            <Image
              src="/assets/treatment2.jpeg"
              alt="Aurelia skincare products and treatment setting"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover "
            />
          
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-[14px] bg-white p-6 lg:col-span-1 lg:row-span-1">
            <Image
              src="/assets/treatment.jpeg"
              alt="Aurelia trusted wellness expert treatment"
              fill
              sizes="(max-width: 1024px) 100vw, 260px"
              className="object-cover"
            />
          </div>

          <div className="min-h-[220px] bg-white/50 backdrop-blur-lg  rounded-[14px] p-7 lg:col-span-1 lg:row-span-1">
            <p className="font-heading text-[clamp(46px,5vw,72px)] leading-none text-[var(--color-foreground)]">100%</p>
            <p className="para-p3 mt-2">Clients Satisfaction</p>
            <div className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#111] px-3 py-2 text-white">
              <div className="flex -space-x-2">
                {avatars.map((avatar) => (
                  <span key={avatar} className="relative block h-8 w-8 overflow-hidden rounded-full border-2 border-[#111]">
                    <Image src={avatar} alt="" fill sizes="32px" className="object-cover" />
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-1 text-[12px] font-bold">
                4.9 <Star className="h-3.5 w-3.5 fill-[#d79a55] text-[#d79a55]" />
              </span>
            </div>
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-[14px] lg:col-span-2 lg:row-span-1">
            <Image
              src="/assets/hero.png"
              alt="Relaxing Aurelia facial massage ritual"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
              style={{ objectPosition: "62% 52%" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(48,37,31,0.14)_100%)]" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
