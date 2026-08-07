import { Cinzel, DM_Mono, Manrope } from "next/font/google";
import localFont from "next/font/local";

export const body_font = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const dm_mono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const heading_font = localFont({
  src: "./CRACKED.ttf",
  variable: "--font-heading",
  weight: "400",
  display: "swap",
});

export const heading_font_2 = localFont({
  src: "./DCC.otf",
  variable: "--font-heading_2",
  weight: "400",
  display: "swap",
});
