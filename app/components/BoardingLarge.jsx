import BoatDescription from "@/public/boatDescription";
import Image from "next/image";
import Cushion from "../icons/cushion.png";
import FleureBleu from "../icons/fleure_bleu.svg";
import LittleBoat from "../icons/petit_bateau.svg";
import BoatWithLign from "../images/boat.png";

const BoardingLarge = () => {
  return (
    <section className="wave-background flex flex-col items-center gap-6 lg:gap-16 w-full h-auto bg-background py-20 px-4">
      <div className="absolute -top-24 left-0">
        <Image src={FleureBleu} alt="Fleur bleu" width={50} height={50} />
      </div>
      <div className="absolute -top-28 -right-2">
        <Image src={LittleBoat} alt="Petit bateau" width={50} height={50} />
      </div>
      <div className="flex flex-col items-center gap-6 lg:gap-8">
        <h2 className="text-yellow text-4xl lg:text-8xl">Embarquez !</h2>
        <p className="text-xs lg:text-base">
          Il est maintenant temps de vous présenter votre embarcation :
        </p>
      </div>
      <div className="relative ">
        <Image src={BoatWithLign} alt="Embarquement" width={500} height={500} />
        {BoatDescription && (
          <>
            <div className="absolute top-12 -left-48 max-w-[200px] w-4/5 text-start p-4 rounded-lg">
              <p className="text-lg">
                <span className="font-bold">{BoatDescription[0].title} :</span>{" "}
                {BoatDescription[0].content}
              </p>
            </div>
            <div className="absolute -top-6 -right-48 max-w-[200px] w-4/5 text-start p-4 rounded-lg">
              <p className="text-lg">
                <span className="font-bold">{BoatDescription[1].title} :</span>{" "}
                {BoatDescription[1].content}
              </p>
            </div>
            <div className="absolute bottom-4 -right-48 max-w-[200px] w-4/5 text-start p-4 rounded-lg">
              <p className="text-lg">
                <span className="font-bold">{BoatDescription[2].title} :</span>{" "}
                {BoatDescription[2].content}
              </p>
            </div>
          </>
        )}
      </div>
      <hr className="border-yellow w-3/5 my-8" />
      <div className="relative flex items-center gap-6 bg-orange bg-opacity-35 rounded-2xl p-4">
        <Image src={Cushion} alt="Coussin" width={50} height={50} />
        <hr className="absolute top-10 left-14 rotate-90 w-10 bg-yellow" />
        <p className="text-base">
          Pour votre confort, veillez à apporter une tenue adequat et des
          coussins !
        </p>
      </div>
    </section>
  );
};

export default BoardingLarge;
