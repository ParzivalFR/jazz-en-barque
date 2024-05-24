import Image from "next/image";
import Bottom1 from "../icons/bottom_1.svg";
import Bottom2 from "../icons/bottom_2.svg";
import Bottom3 from "../icons/bottom_3.svg";
import Bottom4 from "../icons/bottom_4.svg";
import Bottom5 from "../icons/bottom_5.svg";
import Bottom6 from "../icons/bottom_6.svg";
import ImageHome from "../images/page_home.webp";
import RDV from "../icons/rdv.svg";

const BottomHome = () => {
  return (
    <section className="w-full bg-background px-6">
      <div className="relative max-w-[600px] m-auto ">
        <Image
          src={ImageHome}
          alt="Image d'accueil"
          width={1920}
          height={1080}
          className="rounded-full aspect-square object-cover"
        />
        <div className="absolute -top-20 sm:-top-24 flex justify-center items-center w-full">
          <Image src={RDV} alt="Rendez-vous" width={500} height={500} />
        </div>
        <div className="absolute w-7 bottom-24 -right-6 sm:w-10 sm:bottom-28 sm:-right-2 rotate-[30deg]">
          <Image src={Bottom1} alt="Icone 1" width={40} height={40} />
        </div>
        <div className="absolute bottom-28 -left-8 sm:bottom-28 sm:-left-4 ">
          <Image src={Bottom2} alt="Icone 2" width={40} height={40} />
        </div>
        <div className="absolute w-7 bottom-6 left-2 sm:bottom-4 sm:left-20">
          <Image src={Bottom3} alt="Icone 3" width={40} height={40} />
        </div>
        <div className="absolute -bottom-8 left-24 sm:-bottom-8 sm:left-48 rotate-45">
          <Image src={Bottom4} alt="Icone 4" width={40} height={40} />
        </div>
        <div className="absolute w-7 bottom-4 right-2 sm:w-10 sm:bottom-0 sm:right-16">
          <Image src={Bottom5} alt="Icone 5" width={40} height={40} />
        </div>
        <div className="absolute -bottom-10 right-24 sm:-bottom-12 sm:right-52">
          <Image src={Bottom6} alt="Icone 6" width={40} height={40} />
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4"></div>
    </section>
  );
};

export default BottomHome;
