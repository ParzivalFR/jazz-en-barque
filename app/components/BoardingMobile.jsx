import BoatDescription from "@/public/boatDescription";
import Image from "next/image";
import { londrina } from "../fonts";
import Cushion from "../icons/cushion.png";
import FleureBleu from "../icons/fleure_bleu.svg";
import LittleBoat from "../icons/petit_bateau.svg";
import BoatWithoutLign from "../images/boat_without_lign.png";

const BoardingMobile = () => {
  return (
    <section className="wave-background flex flex-col items-center gap-6 w-full h-auto bg-background py-20 px-4">
      <div className="absolute -top-24 left-0">
        <Image src={FleureBleu} alt="Fleur bleu" width={50} height={50} />
      </div>
      <div className="absolute -top-28 -right-2">
        <Image src={LittleBoat} alt="Petit bateau" width={50} height={50} />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h2
          className={`text-yellow text-6xl sm:text-8xl ${londrina.className}`}
        >
          Embarquez !
        </h2>
        <p className="text-xs sm:text-base md:text-lg">
          Il est maintenant temps de vous présenter votre embarcation :
        </p>
      </div>
      <div>
        <Image
          src={BoatWithoutLign}
          alt="Embarquement"
          width={400}
          height={400}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center px-2 gap-5">
        {BoatDescription.map((description, index) => (
          <div
            key={index}
            className="max-w-[400px] w-4/5 text-start p-4 bg-orange rounded-lg"
          >
            <p className="text-sm">
              <span className="font-bold">{description.title}:</span>{" "}
              {description.content}
            </p>
          </div>
        ))}
      </div>
      <div className="relative flex items-center gap-6 bg-orange bg-opacity-35 rounded-2xl p-4">
        <Image
          src={Cushion}
          alt="Coussin"
          width={80}
          height={80}
          className="size-auto"
        />
        <p>
          Pour votre confort, veillez à apporter une tenue adequat et des
          coussins !
        </p>
      </div>
    </section>
  );
};

export default BoardingMobile;
