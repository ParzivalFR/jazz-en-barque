"use client";

import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { londrina } from "../fonts";

const Form = () => {
  const [confirmeMessage, setConfirmeMessage] = useState(false);
  const [errorMesssage, setErrorMessage] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    setLoadingMessage(true);

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
      setLoadingMessage(false);
      setConfirmeMessage(true);
      form.reset();
      setTimeout(() => {
        setConfirmeMessage(false);
      }, 5000);
    } else {
      setLoadingMessage(false);
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 5000);
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
        <p className="text-sm md:text-xl md:w-4/5">
          Que ce soit à propos de l’évènement ou bien simplement nous saluer,
          n’hésitez pas à nous contacter :
        </p>
      </div>
      <form
        method="post"
        className=" relative w-11/12 md:max-w-[600px] flex flex-col justify-center items-center gap-4"
        onSubmit={handleSubit}
      >
        <label
          htmlFor="name"
          className="text-red-500 absolute top-1 left-4 md:left-4 lg:left-6 lg:top-3"
        >
          *
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="* Entrez votre Nom et Prénom"
          className="px-4 py-1 lg:px-6 lg:py-3 rounded-full w-full"
          required
          aria-required="true"
        />
        <label
          htmlFor="email"
          className="text-red-500 absolute top-[52px] left-4 md:left-4 lg:left-6 lg:top-[76px]"
        >
          *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="* Entrez votre adresse email"
          className="px-4 py-1 lg:px-6 lg:py-3 rounded-full w-full"
          required
          aria-required="true"
        />
        <label
          htmlFor="message"
          aria-label="message"
          className="text-red-500 absolute top-[104px] left-2 lg:left-4 lg:top-[144px]"
        >
          *
        </label>
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
        {!loadingMessage ? (
          <button
            type="submit"
            className={`${londrina.className} tracking-wider bg-darkpurple text-white uppercase py-1 px-8 rounded-full transition hover:bg-darkpurple hover:opacity-75 hover:scale-[0.98] duration-500 ease-in-out`}
          >
            Envoyez
          </button>
        ) : null}
        {confirmeMessage ? (
          <p className="text-green-500 animate-bounce">
            Message envoyé avec succès
          </p>
        ) : errorMesssage ? (
          <p className="text-red-500 animate-bounce">
            Erreur lors de l'envoi du message
          </p>
        ) : (
          loadingMessage && (
            <div className="flex flex-col justify-center items-center">
              <ThreeDots
                color="#3c1123"
                height={50}
                width={50}
                ariaLabel="three-dots-loading"
                visible={loadingMessage}
              />
            </div>
          )
        )}
      </form>
      <div></div>
    </section>
  );
};

export default Form;
