import { londrina } from "../fonts";

const Form = () => {
  return (
    <section className="wave-background lg:bottom-48 z-[20] flex flex-col items-center gap-12 w-full h-auto bg-background pt-10 px-4">
      <div className="flex flex-col justify-center items-center gap-20">
        <h1
          className={`${londrina.className} text-darkblue text-center text-4xl sm:text-6xl lg:text-8xl`}
        >
          Contact
        </h1>
        <p className="text-sm md:text-xl lg:text-2xlxl:text-4xl lg:w-4/5">
          Que ce soit à propos de l’évènement ou bien simplement nous saluer,
          n’hésitez pas à nous contacter :
        </p>
      </div>
      <form
        method="post"
        className="w-11/12 md:max-w-[600px] flex flex-col justify-center items-center gap-4"
      >
        <input
          type="text"
          placeholder="* Entrez votre Nom et Prénom"
          className="px-4 py-1 lg:px-6 lg:py-3 rounded-full w-full"
          required
          aria-required="true"
        />
        <input
          type="email"
          placeholder="* Entrez votre adresse email"
          className="px-4 py-1 lg:px-6 lg:py-3 rounded-full w-full"
          required
          aria-required="true"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="8"
          placeholder="* Entrez votre message"
          className="p-2 lg:p-4 rounded-lg w-full"
          required
          aria-required="true"
        ></textarea>
        <button
          type="submit"
          className={`${londrina.className} tracking-wider bg-darkpurple text-white uppercase py-1 px-8 rounded-full transition hover:bg-darkpurple hover:opacity-75 hover:scale-[0.98] duration-500 ease-in-out`}
        >
          Envoyez
        </button>
      </form>
      <div></div>
    </section>
  );
};

export default Form;
