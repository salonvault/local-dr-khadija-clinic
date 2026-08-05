import type { Metadata } from "next";

export const BASE_URL = "https://salonvault.online";

const title = "SalonVault | Growth Systems for Salons & Fashion Brands";
const description =
  "SalonVault builds conversion-focused websites, booking systems, chatbots, and custom salon software that help beauty businesses attract more clients and increase bookings.";
const ogImage = "/assets/og--image.png";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: "%s | SalonVault",
  },
  description,
  applicationName: "SalonVault",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Web Design Agency",
  keywords: [
    "SalonVault",
    "salon growth systems",
    "growth systems for salons",
    "growth systems for saloons",
    "salon web design",
    "salon website design",
    "beauty salon websites",
    "hair salon website design",
    "spa website design",
    "salon chatbot",
    "salon booking system",
    "salon management software",
    "beauty business marketing",
  ],
  authors: [{ name: "SalonVault" }],
  creator: "SalonVault",
  publisher: "SalonVault",
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
    siteName: "SalonVault",
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1813,
        height: 859,
        alt: "SalonVault growth systems for salon and beauty businesses",
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
