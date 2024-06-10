"use client";

import ImgAlgea from "@/app/icons/algae.svg";
import ImgLeafDark from "@/app/icons/leaf-dark.svg";
import Image from "next/image";
import { useState } from "react";
import { londrina } from "../fonts";
import ImageModal from "./ImageModal";
import Spacing from "./Spacing";

const PreviousGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879547/JEB/zufwhatdldgiqojifgoa.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879547/JEB/i9aiwhh7xddsiwel9uc4.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879551/JEB/pbcnc2i541atu32ic6is.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879548/JEB/io1ify9drssei76f8vkh.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879548/JEB/d7xfnmdzqeg7ihjwefxf.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879548/JEB/yjqvz1hruwyyz4ttejot.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879547/JEB/imexiohjsjmz5lv5fwt3.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879547/JEB/rqqkwr7usqa6qtfoz3zq.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879548/JEB/ch2zzyz7zkp02jmb6dcw.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879548/JEB/cux0ehp7fgobswo5fh3e.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879548/JEB/bk9i4usk2vipxgkbefgz.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879548/JEB/daxzb0zzmqerqcbwfzxl.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879548/JEB/hnxjkxbpdsodojxsetlb.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879549/JEB/yks16povpwqsrhs2k8lh.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879551/JEB/etb97cqimernlhs3hxil.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879549/JEB/w66xxnb5aqbxmumzhxq8.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879549/JEB/dqooe7b9xjrwstepm956.webp",
    "https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879549/JEB/itlciyiv0h6ysfgnojjp.webp",
  ];

  const handleShow = (img) => {
    setSelectedImage(img);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    const index = images.indexOf(selectedImage);
    if (index > 0) {
      setSelectedImage(images[index - 1]);
    } else if (index === 0) {
      setSelectedImage(images[images.length - 1]);
    }
  };

  const handleNext = () => {
    const index = images.indexOf(selectedImage);
    if (index < images.length - 1) {
      setSelectedImage(images[index + 1]);
    } else if (index === images.length - 1) {
      setSelectedImage(images[0]);
    }
  };

  return (
    <section className="wave-background z-[20] flex flex-col items-center gap-48 w-full h-auto bg-background pt-10 px-4">
      <h1
        className={`${londrina.className} text-darkblue text-center text-4xl sm:text-6xl`}
      >
        Editions précédentes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg w-full bg-black h-[290px]"
          >
            <Image
              src={img}
              alt={`image du festival numéro-${index}`}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              title={`image du festival numéro-${index}`}
              onClick={() => handleShow(img)}
            />
          </div>
        ))}
      </div>
      <Spacing size={50} />
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={handleClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
      <div className="absolute -bottom-16 right-6 lg:right-24 2xl:right-36 z-[-100] flex gap-6 md:gap-20 lg:gap-32">
        <Image src={ImgAlgea} alt="Algea" width={50} height={50} />
        <Image src={ImgLeafDark} alt="Leaf" width={100} height={100} />
      </div>
    </section>
  );
};

export default PreviousGallery;
