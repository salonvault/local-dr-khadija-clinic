import Image from "next/image";
import { ArrowUpRight, BadgeCheck, FlaskConical, Flower2, Heart, Sparkles } from "lucide-react";
import heroBackground from "../../public/assets/bg.png";



function MiniImage() {
  return (
    <div className="relative h-[104px] w-[104px] shrink-0 overflow-hidden rounded-[14px] bg-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] md:h-[118px] md:w-[118px]">
      <Image
        src="/assets/hero.png"
        alt="Aurelia facial treatment in warm natural light"
        fill
        sizes="168px"
        className="object-cover"
        style={{ objectPosition: "62% 54%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(87,41,8,0.18))]" />
    </div>
  );
}

function ArrowBadge() {
  return (
    <span className="hero-cta-icon bg-white text-[#c77417]">
      <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={2.3} />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white p-[2px] text-white">
      <div className="relative min-h-[calc(100vh-4px)] overflow-hidden bg-[#92510f] shadow-[0_26px_70px_rgba(73,40,11,0.2)]">
        <Image
          src={heroBackground}
          alt=""
          fill
          sizes="100vw"
          className="z-0 object-cover"
          placeholder="blur"
          preload
        />
      
       

        <div className="absolute inset-y-0 right-[17%] z-0 hidden w-[60%] min-w-[560px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_72%,transparent_99%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_72%,transparent_99%)] lg:block">
          <Image
            src="/assets/girl_hero.png"
            alt="Woman applying a facial cotton pad for Aurelia beauty care"
            fill
            sizes="(max-width: 768px) 110vw, 920px"
            className="object-contain object-right-top"
            preload
          />
        </div>


        <div className="relative z-30 flex min-h-[calc(100vh-4px)] flex-col px-5 pb-6 pt-24 sm:px-7 md:px-12 md:pt-28 lg:grid lg:grid-rows-[auto_1fr_auto] lg:px-16 lg:pb-9 lg:pt-36">
          <div className="max-w-[690px]">
            <p className="hero-kicker">
              <BadgeCheck className="h-3.5 w-3.5" />
              Real Beauty, Real Results
            </p>

            <h1 className="heading-h1 hero-title mt-5">
              Natural Beauty
              <span className="hero-title-accent block">& Wellness Care.</span>
            </h1>

            <div className="mt-5 flex max-w-[410px] items-center gap-4 text-[#d7934d]/74">
              <span className="h-px flex-1 bg-current" />
              <Flower2 className="h-4 w-4 shrink-0" strokeWidth={1.7} />
              <span className="h-px flex-1 bg-current" />
            </div>

            <p className="hero-copy mt-6">
              Indulge in expert skincare and beauty treatments designed to enhance your natural glow and well-being.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#book" className="hero-cta bg-[#c77417] text-white shadow-[0_18px_38px_rgba(76,34,6,0.26)] transition hover:bg-[#a85f13]">
                Book Appointment
                <ArrowBadge />
              </a>
              <a href="#services" className="hero-cta border border-white/24 bg-white/8 text-white/88 backdrop-blur-md transition hover:bg-white/14">
                Explore Treatments
                <span className="hero-cta-icon border border-white/24 bg-white/8 text-white">
                  <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={2.3} />
                </span>
              </a>
            </div>
          </div>

          <div className="relative z-0 -mx-5 mt-6 h-[360px] overflow-hidden [mask-image:linear-gradient(to_bottom,#000_0%,#000_78%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_78%,transparent_100%)] sm:-mx-7 sm:h-[430px] md:-mx-12 md:h-[520px] lg:hidden">
            <Image
              src="/assets/girl_hero.png"
              alt="Woman applying a facial cotton pad for Aurelia beauty care"
              fill
              sizes="100vw"
              className="object-contain object-bottom"
              preload
            />
          </div>

          <div className="relative z-10 mt-[-46px] flex items-center gap-3 rounded-[14px] border border-white/16 bg-[#9b5919]/64 p-4 shadow-[0_22px_54px_rgba(49,20,4,0.24)] backdrop-blur-xl md:max-w-[520px] lg:hidden">
            <MiniImage />
            <div>
              <p className="offer-title text-white">40% Off</p>
              <p className="offer-subtitle mt-1 text-white">Your Glow Ritual</p>
              <p className="offer-note mt-2 max-w-[190px] text-white/62">
                Tailored facial care loved by 12K+ happy clients.
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -bottom-4  flex w-[360px] items-center gap-4 rounded-[14px] border border-white/16 bg-[#9b5919]/58 p-5 shadow-[0_24px_70px_rgba(49,20,4,0.28)] backdrop-blur-xl xl:right-8 xl:w-[410px]">
              <MiniImage />
              <div>
                <p className="offer-title text-white">40% Off</p>
                <p className="offer-subtitle mt-2 text-white">Your Glow Ritual</p>
                <p className="offer-subtitle mt-3 text-white/92">Signature Facials & Beauty Care</p>
                <p className="offer-note mt-3 max-w-[210px] text-white/62">
                  Refresh your skin with tailored treatments loved by 12K+ happy clients.
                </p>
              </div>
            </div>
          </div>

         
          <a id="book" href="mailto:hello@aureliabeauty.com" className="sr-only">
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
