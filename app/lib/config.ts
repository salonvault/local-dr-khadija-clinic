import type { Metadata } from "next";

export const BASE_URL = "https://atelier-hair.vercel.app";

const title = "Atelier Hair | Premium Hair Extension & Color Specialists";
const description =
  "Atelier Hair is a warm, editorial salon experience specializing in premium extensions, balayage, dimensional color, and bridal styling.";
const ogImage = "/assets/hero_girl.png";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: "%s | Atelier Hair",
  },
  description,
  applicationName: "Atelier Hair",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Hair Salon",
  keywords: [
    "Atelier Hair",
    "premium hair extensions",
    "hair extension salon",
    "balayage salon",
    "luxury hair color",
    "bridal hair styling",
    "dimensional hair color",
    "editorial hair salon",
  ],
  authors: [{ name: "Atelier Hair" }],
  creator: "Atelier Hair",
  publisher: "Atelier Hair",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Atelier Hair",
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1536,
        height: 1024,
        alt: "Atelier Hair premium extensions and dimensional color",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};
