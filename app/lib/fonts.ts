import { Gilda_Display, DM_Mono, Manrope, Outfit } from "next/font/google";

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

export const heading_font = Gilda_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});

export const heading_font_2 = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
