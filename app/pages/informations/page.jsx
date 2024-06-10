"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import UsefulInfos from "@/app/components/UsefulInfos";
import { useEffect } from "react";

const Informations = () => {
  useEffect(() => {
    document.title =
      "Jazz en Barque - Informations utiles sur notre festival  🎶";
  }, []);

  return (
    <>
      <Header
        src="https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879551/JEB/djaivgmmtjwf44fty3h5.webp"
        width={300}
        height={300}
        className={"absolute z-10 left-8 top-2 w-20 md:w-36"}
      />
      <main className="relative xl:-top-52 h-svh">
        <UsefulInfos />
        <Footer />
      </main>
    </>
  );
};

export default Informations;
