import type { Metadata } from "next";

export const BASE_URL = "https://iron-oak-barber.vercel.app";

const title = "Iron & Oak Barber Co. | Premium Barber Shop";
const description =
  "Iron & Oak Barber Co. delivers precision cuts, modern fades, beard grooming, and traditional straight razor craftsmanship.";
const ogImage = "/assets/barber-hero.png";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: "%s | Iron & Oak Barber Co.",
  },
  description,
  applicationName: "Iron & Oak Barber Co.",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Barber Shop",
  keywords: [
    "Iron & Oak Barber Co.",
    "premium barber shop",
    "modern fades",
    "beard grooming",
    "straight razor shave",
    "men's haircut",
    "barber craftsmanship",
    "luxury barber experience",
  ],
  authors: [{ name: "Iron & Oak Barber Co." }],
  creator: "Iron & Oak Barber Co.",
  publisher: "Iron & Oak Barber Co.",
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
    siteName: "Iron & Oak Barber Co.",
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1536,
        height: 1024,
        alt: "Iron & Oak Barber Co. premium barber shop interior",
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
