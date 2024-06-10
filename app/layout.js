import { jost } from "./fonts";
import "./globals.css";
import { WindowSizeProvider } from "./hooks/WindowSizeContext";

export const metadata = {
  title: "Jazz En Barque - Embarquez pour une expérience musicale unique !",
  description:
    "Jazz En Barque est un festival unique en Sologne, célébrant la musique et l'art en plein air. Après une interruption en 2023, l'édition 2024 revient avec plus de passion et de créativité. Découvrez des artistes locaux, des sessions live et des animations inédites comme le concours de barques décorées et une grande course de barques. Profitez de moments magiques au bord de l'étang, avec des options d'hébergement pour tous les goûts, du camping aux charmantes maisons de campagne. ",
  icons: {
    favicon: "/favicon.ico",
  },

  openGraph: {
    title: "Jazz En Barque - Embarquez pour une expérience musicale unique !",
    description:
      "Jazz En Barque est un festival unique en Sologne, célébrant la musique et l'art en plein air. Après une interruption en 2023, l'édition 2024 revient avec plus de passion et de créativité. Découvrez des artistes locaux, des sessions live et des animations inédites comme le concours de barques décorées et une grande course de barques. Profitez de moments magiques au bord de l'étang, avec des options d'hébergement pour tous les goûts, du camping aux charmantes maisons de campagne. ",
    type: "website",
    url: "https://jazz-en-barque.vercel.app",
    images: [
      {
        type: "image/png",
        width: 1200,
        height: 630,
        url: "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717880016/logo-1_qejo4m.png",
      },
    ],
    site_name: "Jazz En Barque",
    locale: "fr_FR",
  },

  twitter: {
    site: "https://jazz-en-barque.vercel.app",
    cardType: "summary_large_image",
    title: "Jazz En Barque - Embarquez pour une expérience musicale unique !",
    description:
      "Jazz En Barque est un festival unique en Sologne, célébrant la musique et l'art en plein air. Après une interruption en 2023, l'édition 2024 revient avec plus de passion et de créativité. Découvrez des artistes locaux, des sessions live et des animations inédites comme le concours de barques décorées et une grande course de barques. Profitez de moments magiques au bord de l'étang, avec des options d'hébergement pour tous les goûts, du camping aux charmantes maisons de campagne. ",
    type: "website",
    url: "https://jazz-en-barque.vercel.app",
    images: [
      "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717880016/logo-1_qejo4m.png",
    ],
  },

  keywords: [
    "jazz",
    "festival",
    "musique",
    "art",
    "plein air",
    "Sologne",
    "artistes locaux",
    "sessions live",
    "animations",
    "concours de barques décorées",
    "course de barques",
    "hébergement",
    "camping",
    "maisons de campagne",
  ],

  robot: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <WindowSizeProvider>
        <body className={jost.className}>{children}</body>
      </WindowSizeProvider>
    </html>
  );
}
