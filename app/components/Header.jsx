"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useWindowSize } from "../hooks/WindowSizeContext";
import BurgerMenu from "./BurgerMenu";

export default function Header({ src, className, width, height }) {
  const windowSizeContext = useWindowSize();
  const router = useRouter();

  return (
    <header className="relative w-full">
      <div className="w-full xl:h-svh relative">
        <Image
          src={src}
          alt="Image du festival Jazz en Barque"
          width={1920}
          height={1080}
          className="w-full object-cover"
          loading="lazy"
        />
        <div className={className}>
          <Image
            src="https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717880016/logo-1_qejo4m.png"
            alt="Logo du festival Jazz En Barque"
            width={width}
            height={height}
            className="w-40 sm:w-60 lg:w-80 cursor-pointer"
            loading="lazy"
            title="Logo du festival JEB et retour à l'accueil"
            onClick={() => router.push("/")}
          />
        </div>
      </div>
      <div className="absolute top-6 right-10 lg:top-16 lg:right-24 flex gap-2 lg:gap-4 items-center">
        <BurgerMenu />
      </div>
    </header>
  );
}
