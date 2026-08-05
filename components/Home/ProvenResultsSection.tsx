import { CalendarCheck, ChartNoAxesCombined, Rocket, Smile, Store } from "lucide-react";

const results = [
  {
    icon: Store,
    value: "50+",
    label: "Salons Designed",
  },
  {
    icon: ChartNoAxesCombined,
    value: "2X",
    label: "Average Increase in Bookings",
  },
  {
    icon: Smile,
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    icon: CalendarCheck,
    value: "24/7",
    label: "Booking System",
  },
  {
    icon: Rocket,
    value: "Ongoing",
    label: "Support & Growth",
  },
];

export default function ProvenResultsSection() {
  return (
    <section id="proven-results" className="bg-white py-3 md:py-4">
      <div className="container">
        <div className="rounded-[12px] border border-[var(--color-bordercol)] bg-white px-5 py-5 shadow-[0_10px_28px_rgba(17,17,17,0.035)]">
          <div className="mx-auto max-w-[520px] text-center">
            <p className="label-l1 text-[var(--color-primary-1)]">Proven Impact</p>
            <h2 className="heading-h3 mt-1">
              Results That <span className="text-[var(--color-primary-1)]">Speak for Themselves</span>
            </h2>
          </div>

          <div className="mt-6 grid gap-2 grid-cols-2 md:grid-cols-5 md:gap-0">
            {results.map(({ icon: Icon, value, label }, index) => (
              <div
                key={value}
                className={`flex items-center md:justify-center gap-4 md:px-5 ${
                  index > 0 ? "md:border-l md:border-[var(--color-blush-2)]" : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-3)]">
                  <Icon className="h-6 w-6 text-[var(--color-primary-1)]" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <div className="text-[clamp(19px,1.8vw,24px)] font-extrabold leading-none text-[var(--color-foreground)]">{value}</div>
                  <p className="mt-1 text-[11px] font-medium leading-snug text-[var(--color-ink-2)]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
