"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import PreviousGallery from "@/app/components/PreviousGallery";
import Spacing from "@/app/components/Spacing";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    document.title =
      "Jazz en Barque - Galerie photo des précédentes éditions 🎶";
  }, []);

  return (
    <>
      <Header
        src="https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879547/JEB/uhest0lag91hgmqp9a6z.webp"
        width={300}
        height={300}
        className={"absolute z-10 left-8 top-2 w-20 md:w-36"}
      />
      <main className="relative xl:-top-52 h-svh">
        <PreviousGallery />
        <Spacing size={50} />
        <Footer />
      </main>
    </>
  );
};

export default page;
