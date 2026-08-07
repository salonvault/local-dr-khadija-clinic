import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Iron & Oak Barber Co.",
    short_name: "Iron & Oak",
    description: "Premium barbering with modern craftsmanship.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#E88B1A",
    icons: [
      {
        src: "/assets/barber-hero.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
