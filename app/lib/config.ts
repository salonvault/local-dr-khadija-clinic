import type { Metadata } from "next";

export const BASE_URL = "https://www.novacoregroup.com";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "NovaCore Engineering Group | Engineering Beyond Standards",
    template: "%s | NovaCore Engineering Group",
  },
  description:
    "NovaCore Engineering Group delivers boiler manufacturing, boiler and turbine inspection, pressure vessel solutions, EPC services, industrial fabrication, and engineering consultancy.",
  keywords: [
    "NovaCore Engineering Group",
    "boiler inspection",
    "boiler manufacturing",
    "turbine inspection",
    "pressure vessel manufacturing",
    "industrial fabrication",
    "EPC solutions",
    "engineering consultancy",
  ],
  authors: [{ name: "NovaCore Engineering Group" }],
  creator: "NovaCore Engineering Group",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "NovaCore Engineering Group",
    title: "NovaCore Engineering Group | Engineering Beyond Standards",
    description:
      "Engineering solutions for boiler manufacturing, inspection, industrial services, EPC projects, and consultancy.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaCore Engineering Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaCore Engineering Group | Engineering Beyond Standards",
    description:
      "Engineering solutions for boiler manufacturing, inspection, industrial services, EPC projects, and consultancy.",
    images: ["/assets/og-image.png"],
  },
};
