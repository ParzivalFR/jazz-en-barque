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
        <IoMdMusicalNote className="text-md rotate-12 text-background/80" />
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
        <IoMdMusicalNote className="text-md -rotate-45 text-background/80" />
      ),
    },
    {
      icon: Dj,
      time: "22:30",
      title: "Dancefloor avec Dj",
      description: (
        <IoMdMusicalNote className="text-md rotate-45 text-background/80" />
      ),
    },
  ];

  return (
    <section className="wave-blue flex flex-col gap-20 items-center w-full bg-darkblue px-4 pb-24">
      <div className="flex flex-col items-center text-background pt-20 gap-4">
        <h1 className="text-4xl">PROGRAMME 2024</h1>
        <p className="text-justify">
          Il est maintenant temps de vous présenter votre embarcation :
        </p>
      </div>
      <div className="flex flex-col p-2 sm:gap-2 md:gap-4">
        {programData.map((item) => (
          <div
            key={item.time}
            className="flex justify-between items-center gap-7"
          >
            <Image
              src={item.icon}
              alt={item.title} // Add aria-label for accessibility
              className="w-8"
            />
            <h4 className="text-background text-lg font-bold">{item.time}</h4>
            <div className="w-full flex justify-start items-center gap-1">
              <p className="text-background">{item.title}</p>
              {item.description && item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
