import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Doctor Khadija Clinic",
    short_name: "Dr Khadija",
    description: "Consultation-led skin, aesthetic, laser, hair, and dental care in Gujranwala.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#A96832",
  };
}
