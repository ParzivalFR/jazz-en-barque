import Logo from "@/public/logo-1.png";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

export default function Header({ src, className, width, height }) {
  return (
    <header className="relative w-full">
      <div className="w-full xl:h-svh relative">
        <Image
          src={src}
          alt="Image du festival Jazz en Barque"
          width={1920}
          height={1080}
          className="w-full object-cover"
        />
        <div className={className}>
          <Image
            src={Logo}
            alt="Logo"
            width={width}
            height={height}
            className="w-40 sm:w-60 lg:w-80"
          />
        </div>
      </div>
      <div className="absolute top-5 right-5 xl:top-10 xl:right-10">
        <BurgerMenu />
      </div>
    </header>
  );
}
