import { londrina } from "../fonts";
import Map from "./Map";
import Spacing from "./Spacing";

const Address = () => {
  return (
    <section className="wave-purple flex flex-col items-center gap-6 w-svw h-auto bg-darkpurple py-10 px-4">
      <div className="w-full md:max-w-[800px] flex flex-col gap-8 px-4 pt-10">
        <h3
          className={`${londrina.className} text-white text-start text-3xl sm:text-4xl `}
        >
          Se rendre à l'évènement
        </h3>
        <div className="flex flex-col justify-start gap-4">
          <p className="text-white text-sm md:text-xl">
            Pour nous rejoindre, rien de plus simple, votre GPS saura nous
            trouver 🙂
          </p>
          <address className="text-white flex flex-col sm:flex-row text-sm md:text-xl">
            Notre adresse : <p>“Etang des landes” 41210 Saint Viâtre</p>
          </address>
        </div>
      </div>
      <Spacing size={40} />
      <Map />
      <Spacing size={50} />
    </section>
  );
};

export default Address;
