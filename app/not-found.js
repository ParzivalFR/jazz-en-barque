"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <main className="flex flex-col justify-center items-center w-full h-svh overflow-hidden">
        <div className="relative flex flex-col mt-0 sm:mt-6 lg:mt-20 justify-center items-center w-full h-full">
          <h1 className="text-[180px] font-bold text-darkblue">404</h1>
          <p className="text-sm italic text-foreground/60">
            Page introuvable.. Elle a coulé..
          </p>
          <button
            className="relative z-[1] mt-4 bg-lightblue text-middleblue px-6 py-1 rounded-md hover:bg-middleblue hover:text-background hover:scale-[0.98] transition duration-500 ease-in-out"
            onClick={() => router.push("/")}
          >
            Retour à l'accueil
          </button>
          <Image
            src="https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717880016/404-boat_comeah.png"
            alt="Boat Down 404 page error"
            width={1600}
            height={1600}
            className="relative bottom-12 w-96 md:w-full max-w-[500px]"
          />
        </div>
      </main>
    </>
  );
}
