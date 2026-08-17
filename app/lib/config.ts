import type { Metadata } from "next";

export const BASE_URL ="https://dr-khadija-clinic.vercel.app";

const title = "Doctor Khadija Clinic | Skin, Aesthetics & Dental Care in Gujranwala";
const description =
  "Visit Doctor Khadija Clinic in Gujranwala for consultation-led skin and aesthetic care, laser treatments, acne, pigmentation, hair loss, and dental services.";
const ogImage = "/assets/og-image.png";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: "%s | Doctor Khadija Clinic",
  },
  description,
  applicationName: "Doctor Khadija Clinic",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Skin, Aesthetics and Dental Clinic",
  keywords: [
    "Doctor Khadija Clinic",
    "dermatologist Gujranwala",
    "skin clinic Gujranwala",
    "aesthetic clinic Gujranwala",
    "acne treatment Gujranwala",
    "pigmentation treatment Gujranwala",
    "laser hair removal Gujranwala",
    "hair loss treatment Gujranwala",
    "dental clinic Gujranwala",
    "Dr Khadija Tahir Dar",
  ],
  authors: [{ name: "Doctor Khadija Clinic" }],
  creator: "Doctor Khadija Clinic",
  publisher: "Doctor Khadija Clinic",
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
    locale: "en_PK",
    url: BASE_URL,
    siteName: "Doctor Khadija Clinic",
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1536,
        height: 1024,
        alt: "Doctor Khadija Clinic in Gujranwala",
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
