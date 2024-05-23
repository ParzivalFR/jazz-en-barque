import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

export default function Header({ src }) {
  return (
    <header className="w-full bg-white">
      <div className="w-full relative">
        <Image
          src={src}
          alt="Logo Jazz en Barque"
          className="w-full lg:h-svh object-cover"
        />
      </div>
      <div className="absolute top-5 right-5">
        <BurgerMenu />
      </div>
    </header>
  );
}
