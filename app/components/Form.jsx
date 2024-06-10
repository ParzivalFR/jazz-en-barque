"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ThreeDots } from "react-loader-spinner";
import * as yup from "yup";
import { londrina } from "../fonts";

// Schéma de validation Yup
const contactSchema = yup.object().shape({
  name: yup.string().required("Le nom est requis"),
  email: yup.string().email("Email invalide").required("L'email est requis"),
  message: yup.string().required("Le message est requis"),
});

const Form = () => {
  const [confirmeMessage, setConfirmeMessage] = useState(false);
  const [errorMesssage, setErrorMessage] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoadingMessage(true);

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
      reset();
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
          className={`${londrina.className} text-darkblue text-center text-4xl sm:text-6xl lg:text-7xl`}
        >
          Contact
        </h1>
        <p className="text-sm md:text-base xl:text-lg w-11/12 sm:w-full ">
          Que ce soit à propos de l’évènement ou bien simplement nous saluer,
          n’hésitez pas à nous contacter :
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-11/12 md:max-w-[600px] flex flex-col justify-center items-center gap-4"
      >
        <div className="relative w-full">
          <label
            htmlFor="name"
            aria-label="name"
            className="text-red-500 absolute top-1 left-4 md:left-4 lg:left-6 lg:top-3"
          >
            *
          </label>
          <input
            type="text"
            name="name"
            placeholder="Entrez votre Nom et Prénom"
            className="px-8 py-1 lg:px-10 lg:py-3 rounded-full w-full"
            aria-required="true"
            {...register("name")}
          />
          {errors.name && (
            <p className="sm:w-2/5 text-background m-auto text-center mt-2 px-6 py-2 bg-red-500/50 rounded-md">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="relative w-full">
          <label
            htmlFor="email"
            aria-label="email"
            className="text-red-500 absolute top-1 left-4 md:left-4 lg:left-6 lg:top-3"
          >
            *
          </label>
          <input
            type="email"
            name="email"
            placeholder="Entrez votre adresse email"
            className="px-8 py-1 lg:px-10 lg:py-3 rounded-full w-full"
            aria-required="true"
            {...register("email")}
          />
          {errors.email && (
            <p className="sm:w-2/5 text-background m-auto text-center mt-2 px-6 py-2 bg-red-500/50 rounded-md">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="relative w-full">
          <label
            htmlFor="message"
            aria-label="message"
            className="text-red-500 absolute top-1 left-3 lg:left-5 lg:top-3"
          >
            *
          </label>
          <textarea
            name="message"
            cols="30"
            rows="8"
            placeholder="Votre message ici..."
            className="px-6 py-2 lg:px-10 lg:py-4 rounded-lg w-full"
            aria-required="true"
            {...register("message")}
          ></textarea>
          {errors.message && (
            <p className="sm:w-2/5 text-background m-auto text-center px-6 py-2 bg-red-500/50 rounded-md">
              {errors.message.message}
            </p>
          )}
        </div>

        {!loadingMessage ? (
          <button
            type="submit"
            disabled={!isValid}
            className={`${londrina.className} disabled:bg-darkpurple disabled:opacity-60 disabled:cursor-not-allowed tracking-wider bg-darkpurple text-background uppercase py-1 px-8 lg:py-2 lg:px-12 xl:py-4 xl:px-16 rounded-full transition hover:bg-darkpurple hover:opacity-75 hover:scale-[0.98] duration-500 ease-in-out`}
          >
            Envoyez
          </button>
        ) : null}

        {confirmeMessage ? (
          <p className="text-background animate-bounce px-6 py-2 bg-green-500/50 rounded-md">
            Message envoyé avec succès
          </p>
        ) : errorMesssage ? (
          <p className="text-background animate-bounce px-6 py-2 bg-red-500/50 rounded-md">
            Erreur lors de l'envoi du message
          </p>
        ) : (
          loadingMessage && (
            <div className="flex flex-col justify-center items-center">
              <ThreeDots
                color="#bf5108"
                height={70}
                width={70}
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
