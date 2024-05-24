import Image from "next/image";
import { RxDividerHorizontal } from "react-icons/rx";
import BleLeft from "../icons/ble-left.svg";
import BleRight from "../icons/ble-right.svg";
import Star1 from "../icons/star-1.svg";
import Star2 from "../icons/star-2.svg";
import Star3 from "../icons/star-3.svg";
import Spacing from "./Spacing";

const Competition = () => {
  return (
    <section className="w-full flex flex-col items-center px-4">
      <div className="relative w-full p-4 pt-20 sm:px-20 flex flex-col gap-6 bg-lightblue rounded-2xl lg:w-3/5">
        <div className="absolute -top-12 right-1/2 translate-x-1/2 w-60">
          <div className="relative z-20 clip-path-polygone w-60 h-24 border bg-otherorange">
            <h2 className="text-4xl text-center">CONCOURS</h2>
          </div>
          <div className="absolute z-10 top-2 right-2 clip-path-polygone w-60 h-24 border bg-yellow"></div>
        </div>
        <p className="w-full">
          A bord vous aurez l’occasion de pouvoir participer à une parade et une
          course.. à condition de respecter le theme :
        </p>
        <div className="flex justify-center items-center gap-5">
          <RxDividerHorizontal className="text-5xl text-black" />
          <h3>Artistes et groupes musicaux </h3>
          <RxDividerHorizontal className="text-5xl text-black" />
        </div>
        <div className="w-full flex flex-col justify-start gap-2">
          <p>A vous de jouer pour trouver : </p>
          <ul className="pl-4">
            <li>· Le nom de l'équipage.</li>
            <li>· Le plus beau costume.</li>
            <li>
              · Les attributs de votre choix ( un mat, un drapeau, de la déco
              etc. )
            </li>
          </ul>
        </div>
        <Spacing size={60} />
        <div className="flex items-center justify-center">
          <Image src={BleLeft} alt="Ble gauche" width={50} height={50} />
          <div className="w-1/3">
            <p className="font-bold text-center">
              Récompense à la clé pour les gagnants !
            </p>
          </div>
          <Image src={BleRight} alt="Ble droite" width={50} height={50} />
        </div>
        <div className="absolute top-10 left-12">
          <Image src={Star1} alt="Etoile 1" width={50} height={50} />
        </div>
        <div className="absolute top-32 right-12">
          <Image src={Star2} alt="Etoile 2" width={40} height={40} />
        </div>
        <div className="absolute -top-4 -right-4">
          <Image src={Star3} alt="Etoile 3" width={50} height={50} />
        </div>
      </div>
    </section>
  );
};

export default Competition;
