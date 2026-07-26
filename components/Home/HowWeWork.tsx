import {
  BadgeCheck,
  Factory,
  FlaskConical,
  Globe2,
  Hammer,
  Leaf,
  Medal,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Wheat,
  Zap,
} from "lucide-react";
import Image from "next/image";

const whyItems = [
  "Engineering Excellence",
  "Quality Assurance",
  "Industrial Safety",
  "Modern Technology",
  "International Standards",
  "Customer Satisfaction",
];

const industries = [
  { name: "Power Plants", icon: Zap },
  { name: "Oil & Gas", icon: Factory },
  { name: "Chemical", icon: FlaskConical },
  { name: "Textile", icon: Sparkles },
  { name: "Sugar Mills", icon: Wheat },
  { name: "Pharmaceutical", icon: ShieldCheck },
  { name: "Food Processing", icon: BadgeCheck },
  { name: "Paper Industry", icon: Leaf },
  { name: "Cement", icon: Factory },
  { name: "Steel", icon: Medal },
  { name: "Manufacturing", icon: Globe2 },
  { name: "Industrial Fabrication", icon: Hammer },
];

export default function HowWeWork() {
  return (
    <section id="about-us" className="bg-panel py-4 lg:py-28">
      <div className="container">
        <div className="grid gap-10 rounded-[8px] border border-white/10 bg-linear-to-br from-navy via-navy-2 to-[#082c58] p-7 text-white shadow-lift lg:grid-cols-[1fr_1.55fr_0.9fr] lg:p-10">
          <div>
            <p className="eyebrow text-accent">Why Choose NovaCore?</p>
            <h2 className="mt-2 text-[23px] font-extrabold uppercase leading-tight text-white">
              Industrial partner for safe, reliable engineering
            </h2>
            <p className="mt-5 text-[13px] leading-relaxed text-white/72">
              We combine engineering expertise, advanced technology, and a
              customer-focused approach to deliver reliable and efficient solutions.
            </p>
          </div>

          <div className="grid my-auto grid-cols-1 md:gap-x-12  gap-y-3 md:gap-y-16 border-white/18 sm:grid-cols-2 lg:grid-cols-3 lg:border-x lg:px-10">
            {whyItems.map((item, index) => (
              <div key={item} className="flex gap-3 max-md:items-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/9 text-accent">
                  {index % 3 === 0 ? <Medal className="h-4 w-4" /> : index % 3 === 1 ? <ShieldCheck className="h-4 w-4" /> : <UsersRound className="h-4 w-4" />}
                </div>
                <div className="text-[12px] font-bold leading-snug text-white">{item}</div>
              </div>
            ))}
          </div>

          <div className="rounded-[6px] bg-white p-5 text-center text-navy shadow-[0_18px_42px_rgba(0,0,0,0.18)] flex flex-col items-center justify-center gap-1">
            <p className="text-[12px] font-extrabold uppercase text-primary-2 font-heading">Our Certifications</p>
            <div className= "">
            <Image src="/assets/certificates.png" alt="Our Certifications" className="mx-auto my-4 align-middle" width={400} height={200} />
            </div>
            <a href="#contact" className="navy-button  min-h-9 px-4 text-[11px]">
              Request a Quote
            </a>
          </div>
        </div>

        <div className="grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Company Introduction</p>
            <h2 className="heading-lg mt-3 text-navy">Built for Critical Industrial Systems</h2>
          </div>
          <div className="space-y-5 text-[16px] leading-[1.85] text-steel">
            <p>
              NovaCore Engineering Group is committed to delivering high-quality
              engineering solutions through innovation, technical excellence, and
              international engineering standards.
            </p>
            <p>
              Our objective is to become a trusted industrial partner by providing
              reliable engineering services, advanced manufacturing solutions, and
              professional inspection services that enhance industrial safety and
              operational efficiency.
            </p>
          </div>
        </div>

        <div id="industries" className="overflow-hidden rounded-[8px] bg-linear-to-br from-navy via-navy-2 to-primary-1 p-4 text-white shadow-lift md:p-10">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <p className="eyebrow text-accent">Industries We Serve</p>
            <h3 className="heading-md mt-3 text-white">
              A Group Platform Built for  Global Industry
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-white/68">
              Supporting critical operations across power, process, manufacturing,
              and export-driven industrial sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="light-card group flex min-h-32 flex-col items-center justify-center gap-3 rounded-[6px] border border-white/12 bg-white/[0.06] p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-accent/55 hover:bg-white/[0.1] hover:shadow-[0_18px_36px_rgba(0,0,0,0.18)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-1 shadow-[0_10px_24px_rgba(42,167,223,0.2)] transition-transform duration-200 group-hover:scale-105">
                  <industry.icon className="h-6 w-6 stroke-[1.8]" />
                </div>
                <span className="text-[13px] font-extrabold uppercase leading-tight text-white">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 pt-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
          <div className="grid gap-2 md:grid-cols-2">
            {[
              { label: "Vision", icon: Target, text: "To become one of the world's most trusted engineering companies delivering innovative manufacturing, inspection, industrial services, and engineering solutions." },
              { label: "Mission", icon: ShieldCheck, text: "To deliver reliable, safe, and cost-effective engineering solutions through technical expertise, innovation, quality management, and continuous improvement." },
            ].map((item) => (
              <article key={item.label} className="light-card group rounded-[8px] border border-bordercol bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary-2/35 hover:shadow-lift">
                <div className="flex h-13 w-13 items-center justify-center rounded-full bg-linear-to-br from-[#020815] via-navy to-primary-1 text-white shadow-[0_12px_24px_rgba(7,21,44,0.28)]">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-[20px] font-extrabold uppercase text-navy">{item.label}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-steel">{item.text}</p>
              </article>
            ))}

            <article className="light-card group rounded-[8px] border border-bordercol bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary-2/35 hover:shadow-lift md:col-span-2">
              <div className="flex h-13 w-13 items-center justify-center rounded-full bg-linear-to-br from-[#020815] via-navy to-primary-1 text-white shadow-[0_12px_24px_rgba(7,21,44,0.28)]">
                <Leaf className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-[20px] font-extrabold uppercase text-navy">Values</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-steel">
                Integrity, quality, innovation, safety, professionalism, customer
                commitment, engineering excellence, and sustainability guide every
                project.
              </p>
            </article>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[8px] shadow-lift">
            <Image
              src="/assets/mission.png"
              alt="NovaCore industrial engineering team at work"
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy/44 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
