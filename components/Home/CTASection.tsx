import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  Globe2,
  Lock,
  Mail,
  PencilLine,
  Phone,
  Sparkles,
  Store,
  TrendingUp,
  User,
} from "lucide-react";

const benefits = [
  {
    icon: CalendarDays,
    title: "More Bookings",
    text: "Get more appointments and repeat clients.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Brand",
    text: "Stand out with a premium online presence.",
  },
  {
    icon: Clock3,
    title: "Save Time",
    text: "Automate and simplify your business.",
  },
];

const avatarUrls = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
];

function InputShell({
  icon: Icon,
  placeholder,
  as = "input",
}: {
  icon: typeof User;
  placeholder: string;
  as?: "input" | "select" | "textarea";
}) {
  if (as === "textarea") {
    return (
      <div className="relative md:col-span-2">
        <textarea
          rows={2}
          placeholder={placeholder}
          className="para-p3 min-h-[64px] w-full resize-none rounded-[7px] border border-[var(--color-bordercol)] bg-white px-4 py-3 pr-10 text-[var(--color-foreground)] outline-none transition-colors placeholder:text-[var(--color-ink-3)] focus:border-[var(--color-primary-1)]"
        />
        <PencilLine className="absolute bottom-4 right-4 h-4 w-4 text-[var(--color-ink-3)]" />
      </div>
    );
  }

  if (as === "select") {
    return (
      <div className="relative">
        <select
          defaultValue=""
          className="para-p3 h-11 w-full appearance-none rounded-[7px] border border-[var(--color-bordercol)] bg-white pl-11 pr-10 text-[var(--color-ink-2)] outline-none transition-colors focus:border-[var(--color-primary-1)]"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          <option>Beauty Salon</option>
          <option>Hair Salon</option>
          <option>Nail Studio</option>
          <option>Skin Care Clinic</option>
          <option>Barbershop</option>
          <option>Lash & Brow Studio</option>
        </select>
        <Icon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-ink-3)]" />
        <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-ink-3)]" />
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className="para-p3 h-11 w-full rounded-[7px] border border-[var(--color-bordercol)] bg-white pl-11 pr-4 text-[var(--color-foreground)] outline-none transition-colors placeholder:text-[var(--color-ink-3)] focus:border-[var(--color-primary-1)]"
      />
      <Icon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-ink-3)]" />
    </div>
  );
}

export default function CTASection() {
  return (
    <section id="contact" className="bg-white py-6 md:py-8">
      <div className="container">
        <div className="relative isolate overflow-hidden rounded-[16px] border border-[var(--color-bordercol)] bg-[linear-gradient(120deg,#fff_0%,#fff5f7_48%,#fff_100%)] px-5 py-6 shadow-[0_12px_36px_rgba(17,17,17,0.045)] lg:min-h-[calc(100vh-132px)] lg:px-10 lg:py-8">
          <div className="pointer-events-none absolute -bottom-20 left-[-70px] h-64 w-64 rounded-full border border-[var(--color-blush-2)]" />
        
          <div className="pointer-events-none absolute left-[33%] top-[46%] hidden h-48 w-48 rounded-full bg-[var(--color-primary-3)] blur-2xl lg:block" />

          <div className="relative z-10 grid min-h-full gap-4 lg:grid-cols-[31%_48%_21%] lg:items-center">
            <div className="py-2">
              <p className="label-l1 flex items-center gap-2 text-[var(--color-primary-1)]">
                <Sparkles className="h-3.5 w-3.5 fill-[var(--color-primary-1)]" />
                Lets Work Together
              </p>
              <h2 className="heading-h1 mt-5 max-w-[430px] !leading-[1.08]">
                Ready to Fill Your Calendar with <span className="text-[var(--color-primary-1)]">More Bookings?</span>
              </h2>
              <p className="para-p1 mt-5 max-w-[360px]">
                Tell us about your business and goals. We will create a custom plan to help you attract more clients and grow faster.
              </p>

              <div className="mt-7 grid gap-4">
                {benefits.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[var(--color-primary-1)] shadow-[0_10px_24px_rgba(17,17,17,0.06)]">
                      <Icon className="h-5 w-5" strokeWidth={1.9} />
                    </div>
                    <div>
                      <h3 className="heading-h5 font-bold">{title}</h3>
                      <p className="para-p3 mt-1">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex max-w-[330px] items-center gap-4 rounded-[8px] bg-[var(--color-primary-3)] px-4 py-4">
                <div className="flex -space-x-3">
                  {avatarUrls.map((url, index) => (
                    <Image
                      key={url}
                      src={url}
                      alt={`Salon client ${index + 1}`}
                      width={38}
                      height={38}
                      className="h-9 w-9 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <p className="para-p3">
                  Join <span className="font-extrabold text-[var(--color-primary-1)]">500+</span> beauty businesses growing with our solutions.
                </p>
              </div>
            </div>

            <form className="rounded-[14px] border border-white/80 bg-white/88 p-5 shadow-[0_24px_70px_rgba(17,17,17,0.10)] backdrop-blur md:p-7">
              <div className="flex items-center gap-2">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-1)] text-white shadow-[0_12px_28px_rgba(232,93,117,0.25)]">
                  <CalendarDays className="h-6 w-6" strokeWidth={1.9} />
                </div>
                <div>
                  <h3 className="heading-h3">Book Your Free Strategy Call</h3>
                  <p className="para-p3 mt-1">30-min personalized consultation</p>
                  <div className="mt-2 h-1 w-24 rounded-full bg-[var(--color-blush-2)]" />
                </div>
              </div>

              <div className="mt-4 grid gap-2 md:grid-cols-2">
                <label>
                  <span className="mb-2 block text-[12px] font-bold text-[var(--color-foreground)]">Full Name</span>
                  <InputShell icon={User} placeholder="Enter your full name" />
                </label>
                <label>
                  <span className="mb-2 block text-[12px] font-bold text-[var(--color-foreground)]">Email Address</span>
                  <InputShell icon={Mail} placeholder="Enter your email" />
                </label>
                <label>
                  <span className="mb-2 block text-[12px] font-bold text-[var(--color-foreground)]">Business Name</span>
                  <InputShell icon={Store} placeholder="Enter your business name" />
                </label>
                <label>
                  <span className="mb-2 block text-[12px] font-bold text-[var(--color-foreground)]">Phone Number</span>
                  <InputShell icon={Phone} placeholder="Enter your phone number" />
                </label>
                <label>
                  <span className="mb-2 block text-[12px] font-bold text-[var(--color-foreground)]">Industry</span>
                  <InputShell icon={Store} placeholder="Select your industry" as="select" />
                </label>
                <label>
                  <span className="mb-2 block text-[12px] font-bold text-[var(--color-foreground)]">Current Website (if any)</span>
                  <InputShell icon={Globe2} placeholder="yourwebsite.com" />
                </label>
                <label className="md:col-span-2">
                  <span className="mb-2 block text-[12px] font-bold text-[var(--color-foreground)]">What are your main goals?</span>
                  <InputShell icon={PencilLine} placeholder="e.g., More bookings, brand redesign, website, etc." as="textarea" />
                </label>
              </div>

              <label className="mt-2 flex items-center gap-2 text-[12px] font-medium text-[var(--color-ink-2)]">
                <input type="checkbox" className="h-4 w-4 rounded border-[var(--color-bordercol)] accent-[var(--color-primary-1)]" />
                I agree to receive emails and updates.
              </label>

              <button className="mt-3 flex h-12 w-full items-center justify-center gap-3 rounded-[7px] bg-[var(--color-primary-1)] text-[13px] font-extrabold uppercase tracking-[0.02em] text-white shadow-[0_16px_34px_rgba(232,93,117,0.25)] transition-colors hover:bg-[var(--color-primary-2)]">
                Schedule My Free Call
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="para-p3 mt-4 flex items-center justify-center gap-2 text-center">
                <Lock className="h-3.5 w-3.5" />
                Your information is safe with us. No spam, ever.
              </p>
            </form>

            <div className="relative hidden h-full min-h-[320px] overflow-hidden rounded-[12px] lg:block">
              <Image
                src="/assets/cta-1.png"
                alt="Salon owner in a pink blazer"
                fill
                sizes="320px"
                className="object-cover object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
