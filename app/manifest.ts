import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SalonVault",
    short_name: "SalonVault",
    description: "Growth systems for salons and beauty businesses.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#E85D75",
    icons: [
      {
        src: "/assets/logo_3.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
