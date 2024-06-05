"use client";

import { useState } from "react";
import { londrina } from "../fonts";

const Form = () => {
  const [confirmeMessage, setConfirmeMessage] = useState(false);
  const [errorMesssage, setErrorMessage] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    if (!validateEmail(data.email)) {
      setErrorMessage(true);
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setConfirmeMessage(true);
      form.reset();
    } else {
      setErrorMessage(true);
    }
  };

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
        onSubmit={handleSubit}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="* Entrez votre Nom et Prénom"
          className="px-4 py-1 lg:px-6 lg:py-3 rounded-full w-full"
          required
          aria-required="true"
        />
        <input
          type="email"
          name="email"
          id="email"
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
        {confirmeMessage ? (
          <p className="text-green-500 animate-bounce">
            Message envoyé avec succès
          </p>
        ) : errorMesssage ? (
          <p className="text-red-500 animate-bounce">
            Erreur lors de l'envoi du message
          </p>
        ) : null}
      </form>
      <div></div>
    </section>
  );
};

export default Form;
