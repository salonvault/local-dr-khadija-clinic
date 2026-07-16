import { Marcellus, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";

export const body_font = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const dm_mono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const heading_font = Marcellus({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});
