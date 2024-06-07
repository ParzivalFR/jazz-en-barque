import BoatDescription from "@/public/boatDescription";
import Image from "next/image";
import { londrina } from "../fonts";
import Cushion from "../icons/cushion.png";
import FleureBleu from "../icons/fleure_bleu.svg";
import LittleBoat from "../icons/petit_bateau.svg";
import BoatWithLign from "../images/boat.png";

const DescriptionBlock = ({ description, position }) => (
  <div
    className={`absolute ${position} max-w-[300px] w-full text-start p-4 rounded-lg`}
  >
    <p className="text-lg">
      <span className="font-bold">{description.title} :</span>
      <br />
      {description.content}
    </p>
  </div>
);

const BoardingLarge = () => {
  const descriptions = [
    { ...BoatDescription[0], position: "top-12 -left-48" },
    { ...BoatDescription[1], position: "-top-8 -right-72" },
    { ...BoatDescription[2], position: "bottom-4 -right-72" },
  ];

  return (
    <section className="wave-background flex flex-col items-center gap-6 lg:gap-16 w-full h-auto bg-background py-20 px-4">
      <div className="absolute -top-36 left-0">
        <Image src={FleureBleu} alt="Fleur bleu" width={100} height={100} />
      </div>
      <div className="absolute -top-28 right-0">
        <Image src={LittleBoat} alt="Petit bateau" width={90} height={90} />
      </div>
      <div className="flex flex-col items-center gap-6 lg:gap-8">
        <h2 className={`text-yellow lg:text-8xl ${londrina.className}`}>
          Embarquez !
        </h2>
        <p className="text-xl">
          Il est maintenant temps de vous présenter votre embarcation :
        </p>
      </div>
      <div className="relative">
        <Image src={BoatWithLign} alt="Embarquement" width={500} height={500} />
        {descriptions.map((desc, index) => (
          <DescriptionBlock
            key={index}
            description={desc}
            position={desc.position}
          />
        ))}
      </div>
      <div className="relative flex items-center gap-6 bg-orange bg-opacity-35 rounded-2xl p-4">
        <Image src={Cushion} alt="Coussin" width={80} height={80} />
        <p className="text-base">
          Pour votre confort, veillez à apporter une tenue adéquate et des
          coussins !
        </p>
      </div>
    </section>
  );
};

export default BoardingLarge;
