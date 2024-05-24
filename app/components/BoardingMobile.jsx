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
        <h2 className={`text-yellow text-4xl ${londrina.className}`}>
          Embarquez !
        </h2>
        <p className="text-xs">
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
            className="max-w-[300px] w-4/5 text-start p-4 bg-orange rounded-lg"
          >
            <p className="text-sm">
              <span className="font-bold">{description.title}:</span>{" "}
              {description.content}
            </p>
          </div>
        ))}
      </div>
      <hr className="border-yellow w-3/5 my-4" />
      <div className="relative flex gap-6 bg-orange bg-opacity-35 rounded-2xl p-4">
        <Image src={Cushion} alt="Coussin" width={50} height={50} />
        <hr className="absolute top-10 left-14 rotate-90 w-10 bg-yellow" />
        <p>
          Pour votre confort, veillez à apporter une tenue adequat et des
          coussins !
        </p>
      </div>
    </section>
  );
};

export default BoardingMobile;
