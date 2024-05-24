import Logo from "@/public/logo.png";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

export default function Header({ src }) {
  return (
    <header className="w-full bg-white">
      <div className="w-full relative">
        <Image
          src={src}
          alt="Image du festival Jazz en Barque"
          width={1920}
          height={1080}
          className="w-full object-cover"
        />
        <div className="absolute z-10 right-1/2 translate-x-1/2 bottom-1/3 md:bottom-1/2 translate-y-1/2">
          <Image
            src={Logo}
            alt="Logo"
            width={300}
            height={300}
            className="w-40 sm:w-60 lg:w-80"
          />
        </div>
      </div>
      <div className="absolute top-5 right-5">
        <BurgerMenu />
      </div>
    </header>
  );
}
