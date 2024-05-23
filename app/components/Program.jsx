import Boat from "@/app/icons/boat.png";
import Chichi from "@/app/icons/chichi.png";
import Cocktail from "@/app/icons/cocktail.png";
import Dj from "@/app/icons/dj_song.png";
import FlagGo from "@/app/icons/flag_go.png";
import LongFlag from "@/app/icons/long_flag.png";
import Mask from "@/app/icons/mask.png";
import Musician from "@/app/icons/musician.png";
import Image from "next/image";
import { IoMdMusicalNote } from "react-icons/io";

const Program = () => {
  return (
    <section className=" flex flex-col gap-20 items-center w-full bg-darkblue px-4 pb-24">
      <div className="flex flex-col items-center text-background pt-20 gap-4">
        <h1 className="text-4xl">PROGRAMME 2024</h1>
        <p className="text-justify">
          Il est maintenant temps de vous présenter votre embarcation :
        </p>
      </div>
      <div className="flex flex-col p-2 sm:gap-2 md:gap-4">
        <div className="flex justify-between items-center gap-7">
          <Image src={LongFlag} alt="" className="w-8" />
          <h4 className="text-background text-lg font-bold">15:30</h4>
          <div className="w-full text-start">
            <p className="text-background">Accueil</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-7">
          <Image src={Mask} alt="" className="w-8" />
          <h4 className="text-background text-lg font-bold">17:00</h4>
          <div className="w-full flex justify-start items-center gap-1">
            <p className="text-background">Lancement de la parade</p>
            <IoMdMusicalNote className="text-md rotate-12 text-background/80" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-7">
          <Image src={FlagGo} alt="" className="w-8" />
          <h4 className="text-background text-lg font-bold">18:00</h4>
          <div className="w-full text-start">
            <p className="text-background">Départ de la course en barque</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-7">
          <Image src={Cocktail} alt="" className="w-8" />
          <h4 className="text-background text-lg font-bold">18:30</h4>
          <div className="w-full text-start">
            <p className="text-background">Apéritif</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-7">
          <Image src={Chichi} alt="" className="w-8" />
          <h4 className="text-background text-lg font-bold">19:00</h4>
          <div className="w-full text-start">
            <p className="text-background">Diner</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-7">
          <Image src={Boat} alt="" className="w-8" />
          <h4 className="text-background text-lg font-bold">20:15</h4>
          <div className="w-full text-start">
            <p className="text-background">Mise en barque</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-7">
          <Image src={Musician} alt="" className="w-8" />
          <h4 className="text-background text-lg font-bold">20:30</h4>
          <div className="w-full flex justify-start items-center gap-1">
            <p className="text-background">Concert</p>
            <IoMdMusicalNote className="text-md -rotate-45 text-background/80" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-7">
          <Image src={Dj} alt="" className="w-8" />
          <h4 className="text-background text-lg font-bold">22:30</h4>
          <div className="w-full flex justify-start items-center gap-1">
            <p className="text-background">Dancefloor avec Dj</p>
            <IoMdMusicalNote className="text-md rotate-45 text-background/80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
