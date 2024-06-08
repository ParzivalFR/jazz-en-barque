import Image from "next/image";
import { londrina } from "../fonts";
import DuckFoot from "../icons/duck-foot.svg";
import MiddleMoon from "../icons/middle-moon.svg";
import Address from "./Address";
import Housing from "./Housing";
import Spacing from "./Spacing";

const UsefulInfos = () => {
  return (
    <section className="wave-background flex flex-col items-center gap-6 w-full h-auto bg-background pt-10 px-4">
      <div className="flex flex-col gap-16 px-4 pt-10">
        <h1
          className={`${londrina.className} text-darkblue text-center text-4xl sm:text-6xl`}
        >
          Infos pratiques
        </h1>
        <div className="flex flex-col gap-4 md:px-10 lg:px-20">
          <h2 className={`${londrina.className} text-2xl md:text-4xl`}>
            Se loger
          </h2>
          <p className="text-sm md:text-xl">
            Pour pouvoir profiter de la fête en toute sérénité, voici les
            solutions d’hebergement qui s’offrent à vous pour éviter un trajet
            en pleine nuit après la fête.
          </p>
        </div>
      </div>
      <Spacing size={50} />
      <Housing />
      <Spacing size={50} />
      <Address />
      <Image
        src={MiddleMoon}
        width={80}
        height={80}
        alt="Demi lune blue"
        className="absolute right-4 -top-0 sm:right-12 sm:top-6 sm:w-24 lg:w-36 -rotate-45"
      />
      <Image
        src={DuckFoot}
        width={40}
        height={40}
        alt="Empreinte de canard"
        className="absolute left-6 sm:left-12 lg:left-24 -bottom-1 rotate-12"
      />
    </section>
  );
};

export default UsefulInfos;
