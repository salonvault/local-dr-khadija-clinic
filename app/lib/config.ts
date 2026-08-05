import type { Metadata } from "next";

export const BASE_URL = "https://www.novacoregroup.com";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SalonVault | Growth Systems for Saloons",
    template: "%s | SalonVault",
  },
  description:
    "SalonVault creates elegant, conversion-focused growth systems for salons and beauty businesses that want more bookings, trust, and sales.",
  keywords: [
    "SalonVault",
    "salon web design",
    "beauty salon websites",
    "hair salon website design",
    "spa website design",
    "beauty business marketing",
    "salon booking website",
  ],
  authors: [{ name: "SalonVault" }],
  creator: "SalonVault",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "SalonVault",
    title: "SalonVault | Growth Systems for Saloons",
    description:
      "Elegant, conversion-focused growth systems for salons and beauty businesses.",
    images: [
      {
        url: "/assets/salon-hero.png",
        width: 1200,
        height: 630,
        alt: "SalonVault growth systems for salons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SalonVault | Growth Systems for Saloons",
    description:
      "Elegant, conversion-focused growth systems for salons and beauty businesses.",
    images: ["/assets/salon-hero.png"],
  },
};
