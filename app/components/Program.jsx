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
import { londrina } from "../fonts";
import ImgWaveRounded from "../icons/wave-rounded.svg";

const Program = () => {
  const programData = [
    {
      icon: LongFlag,
      time: "15:30",
      title: "Accueil",
    },
    {
      icon: Mask,
      time: "17:00",
      title: "Lancement de la parade",
      description: (
        <IoMdMusicalNote className="text-md rotate-12 text-white lg:text-4xl " />
      ),
    },
    {
      icon: FlagGo,
      time: "18:00",
      title: "Départ de la course en barque",
    },
    {
      icon: Cocktail,
      time: "18:30",
      title: "Apéritif",
    },
    {
      icon: Chichi,
      time: "19:00",
      title: "Diner",
    },
    {
      icon: Boat,
      time: "20:15",
      title: "Mise en barque",
    },
    {
      icon: Musician,
      time: "20:30",
      title: "Concert",
      description: (
        <IoMdMusicalNote className="text-md -rotate-45 text-white lg:text-4xl " />
      ),
    },
    {
      icon: Dj,
      time: "22:30",
      title: "Dancefloor avec Dj",
      description: (
        <IoMdMusicalNote className="text-md rotate-45 text-white lg:text-4xl " />
      ),
    },
  ];

  return (
    <section className="relative flex flex-col gap-16 items-center w-full bg-darkblue px-4 pb-52">
      <Image
        src={ImgWaveRounded}
        alt="Vague"
        className="absolute -top-12 sm:-top-24 md:-top-36 lg:-top-48 xl:-top-72 w-full"
      />
      <div className="flex flex-col items-center text-background pt-20 gap-4">
        <h1
          className={`text-4xl sm:text-6xl lg:text-8xl ${londrina.className}`}
        >
          PROGRAMME 2024
        </h1>
      </div>
      <div className="flex flex-col justify-between max-w-[700px] sm:gap-2 md:gap-4">
        {programData.map((item) => (
          <div
            key={item.time}
            className="flex flex-row justify-between gap-16 sm:gap-24 md:gap-32 lg:gap-56"
          >
            <div className="flex justify-between items-center gap-7 lg:gap-20">
              <Image src={item.icon} alt={item.title} className="w-8 lg:w-12" />
              <h4
                className={`text-background text-lg font-bold lg:text-3xl ${londrina.className}`}
              >
                {item.time}
              </h4>
            </div>
            <div className="w-full flex justify-start items-center gap-1 lg:gap-2">
              <p className="text-background text-end text-sm sm:text-base lg:text-2xl">
                {item.title}
              </p>
              {item.description && item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
