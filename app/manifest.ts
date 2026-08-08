import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AURELIA Beauty & Wellness",
    short_name: "AURELIA",
    description: "Thoughtful beauty rituals for your most radiant self.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#A96832",
    icons: [
      {
        src: "/assets/aurelia-hero.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
