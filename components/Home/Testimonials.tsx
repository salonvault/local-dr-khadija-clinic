import { CheckCircle2, Factory, GraduationCap, Landmark, RadioTower, ShieldAlert, Wrench, Zap } from "lucide-react";

const divisions = [
  { name: "NovaCore Manufacturing", icon: Factory },
  { name: "NovaCore Inspection", icon: CheckCircle2 },
  { name: "NovaCore Industrial Services", icon: Wrench },
  { name: "NovaCore EPC", icon: Landmark },
  { name: "NovaCore Energy", icon: Zap },
  { name: "NovaCore Training Academy", icon: GraduationCap },
  { name: "NovaCore Automation", icon: RadioTower },
  { name: "NovaCore International", icon: ShieldAlert },
];

export default function Testimonials() {
  return (
    <section id="resources" className="section-pad bg-white">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[6px] border border-bordercol bg-white p-8 shadow-card">
            <p className="eyebrow">Quality Policy</p>
            <h2 className="heading-md mt-3 text-navy">Consistency, compliance, and continuous improvement</h2>
            <p className="body-lg mt-5 text-steel">
              NovaCore Engineering Group is committed to providing engineering
              solutions that consistently meet customer requirements, applicable
              regulations, and recognized engineering standards while continuously
              improving quality, safety, and operational excellence.
            </p>
          </article>

          <article className="rounded-[6px] bg-navy p-8 text-white shadow-soft">
            <p className="eyebrow text-accent">Health, Safety & Environment</p>
            <h2 className="heading-md mt-3 text-white">Safety remains our highest priority</h2>
            <p className="body-lg mt-5 text-white/76">
              We are committed to protecting people, equipment, property, and the
              environment by promoting safe engineering practices, continuous
              training, hazard prevention, and compliance with applicable regulations.
            </p>
          </article>
        </div>

        <div className="mt-16">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="eyebrow">Future Business Divisions</p>
            <h2 className="heading-lg mt-2 text-navy">A Group Platform Built for <br className="hidden md:block" /> Global Industry</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {divisions.map((division) => (
              <article key={division.name} className="rounded-[6px] border border-bordercol bg-panel p-4 sm:p-6">
                <division.icon className="h-7 w-7 text-primary-2 sm:h-8 sm:w-8" />
                <h3 className="mt-4 text-[14px] font-extrabold leading-tight text-navy sm:mt-5 sm:text-[17px]">{division.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
