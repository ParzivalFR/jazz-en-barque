import Image from "next/image";
import { RxDividerHorizontal } from "react-icons/rx";
import BleLeft from "../icons/ble-left.svg";
import BleRight from "../icons/ble-right.svg";
import Spacing from "./Spacing";

const Competition = () => {
  return (
    <section className="relative h-full w-full bg-background flex flex-col items-center">
      <div className="relative flex flex-col items-center">
        <div className="relative z-20 clip-path-polygone w-60 h-24 border bg-otherorange">
          <h2 className="text-4xl text-center">CONCOURS</h2>
        </div>
        <div className="absolute z-10 top-2 right-2 clip-path-polygone w-60 h-24 border bg-yellow"></div>
      </div>
      <div className="absolute top-14 bg-lightblue w-full p-4 pt-20 flex flex-col items-center justify-start">
        <p>
          A bord vous aurez l’occasion de pouvoir participer à une parade et une
          course.. à condition de respecter le theme :
        </p>
        <div className="flex justify-center items-center gap-5">
          <RxDividerHorizontal className="text-5xl text-black" />
          <h3>Artistes et groupes musicaux </h3>
          <RxDividerHorizontal className="text-5xl text-black" />
        </div>
        <div className="flex flex-col gap-2">
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
        <Spacing size={40} />
        <div className="flex items-center justify-center">
          <Image src={BleLeft} alt="Ble gauche" width={50} height={50} />
          <div className="w-1/3">
            <p className="font-bold text-center">
              Récompense à la clé pour les gagnants !
            </p>
          </div>
          <Image src={BleRight} alt="Ble droite" width={50} height={50} />
        </div>
      </div>
    </section>
  );
};

export default Competition;
