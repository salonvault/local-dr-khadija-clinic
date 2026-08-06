import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Atelier Hair",
    short_name: "Atelier Hair",
    description: "Premium hair extension and color specialists.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F8F3F0",
    theme_color: "#A45756",
    icons: [
      {
        src: "/assets/hero_girl.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
