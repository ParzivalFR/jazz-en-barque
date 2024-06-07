import { Inter, Jost, Londrina_Solid } from "next/font/google";

export const jost = Jost({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const londrina = Londrina_Solid({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
