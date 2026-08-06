import { Gallery, GalleryGrid, GalleryImage } from "@/components/ui/shared-element-gallery";
import Reveal from "./Reveal";

const images = [
  { id: "atelier-1", src: "/assets/hero_3.png", alt: "Glossy dimensional blonde hair" },
  { id: "atelier-10", src: "/assets/girl1.png", alt: "Soft extension finish" },
  { id: "atelier-2", src: "/assets/girl_2.png", alt: "Soft brunette hair result" },
  { id: "atelier-3", src: "/assets/step5.png", alt: "Hair consultation and texture detail" },
  { id: "atelier-4", src: "/assets/step4.png", alt: "Color and extension preparation" },
  { id: "atelier-5", src: "/assets/girl_3.png", alt: "Editorial hair portrait" },
  { id: "atelier-6", src: "/assets/girl3.png", alt: "Seamless extension blend" },
  { id: "atelier-11", src: "/assets/girl2.png", alt: "Dimensional color movement" },
  { id: "atelier-12", src: "/assets/girl5.png", alt: "Atelier color detail" },
  { id: "atelier-7", src: "/assets/hero_1.png", alt: "Natural color result portrait" },
  { id: "atelier-8", src: "/assets/girl4.png", alt: "Finished Atelier Hair styling" },
  { id: "atelier-9", src: "/assets/faq.png", alt: "Smooth hair detail" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 text-[var(--color-foreground)] lg:py-24">
      <div className="container">
        <div className="mb-10 grid gap-6 lg:grid-cols-[38%_62%] lg:items-end">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">
              Gallery
            </p>
            <p className="mt-4 max-w-[300px] text-[12px] leading-[1.65] text-[var(--color-ink-2)]">
              A closer look at the color, extension blends, and soft finishes that shape the Atelier signature.
            </p>
          </div>

          <div>
            <Reveal>
              <h2 className="max-w-[640px] font-heading text-[clamp(40px,5vw,76px)] font-semibold leading-[0.84]">
                Natural movement, polished detail
              </h2>
            </Reveal>
            <span aria-hidden="true" className="mt-2 block w-full max-w-[310px]">
              <svg viewBox="0 0 330 22" className="h-6 w-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 5C102 0 176 3 246 5" stroke="var(--color-primary-1)" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M2 16C74 7 166 9 328 14" stroke="var(--color-primary-1)" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>

        <Gallery>
          <GalleryGrid className="[&>*:nth-child(2n)]:mt-6 [&>*:nth-child(3n)]:mt-2">
            {images.map((image) => (
              <GalleryImage key={image.id} id={image.id} src={image.src} alt={image.alt} />
            ))}
          </GalleryGrid>
        </Gallery>
      </div>
    </section>
  );
}
