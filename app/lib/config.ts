import type { Metadata } from "next";

export const BASE_URL = "https://aurelia-beauty-wellness.vercel.app";

const title = "AURELIA Beauty & Wellness | Modern Beauty Studio";
const description =
  "AURELIA Beauty & Wellness offers thoughtful skin, beauty, and wellness rituals designed to help you look refreshed and feel cared for.";
const ogImage = "/assets/aurelia-hero.png";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: "%s | AURELIA Beauty & Wellness",
  },
  description,
  applicationName: "AURELIA Beauty & Wellness",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Beauty & Wellness Studio",
  keywords: [
    "AURELIA Beauty & Wellness",
    "modern beauty studio",
    "signature facial",
    "deep cleansing facial",
    "hydration treatment",
    "glow therapy",
    "brow sculpting",
    "lash lift",
    "relaxation ritual",
  ],
  authors: [{ name: "AURELIA Beauty & Wellness" }],
  creator: "AURELIA Beauty & Wellness",
  publisher: "AURELIA Beauty & Wellness",
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
    siteName: "AURELIA Beauty & Wellness",
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1536,
        height: 1024,
        alt: "AURELIA Beauty & Wellness warm facial treatment studio",
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
