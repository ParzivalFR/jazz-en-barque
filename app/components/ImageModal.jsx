import Image from "next/image";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ImageModal = ({ imageUrl, onClose, onPrevious, onNext }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[2000] p-2 lg:p-20 h-svh">
      <div className="relative flex justify-center items-center w-full h-svh">
        <Image
          src={imageUrl}
          width={1280}
          height={720}
          alt="Selected"
          className="object-cover max-w-full max-h-full lg:size-4/5 m-auto rounded-lg"
        />
        <button
          className="absolute top-2 right-2 text-white text-5xl transition-transform hover:rotate-180 duration-500 "
          onClick={onClose}
        >
          <IoClose size={40} />
        </button>
        <button
          className="absolute top-1/2 left-4 text-background text-5xl transition-transform hover:scale-[1.05] duration-500"
          onClick={onPrevious}
        >
          <FaArrowLeft size={20} className="md:size-8 xl:size-10" />
        </button>
        <button
          className="absolute top-1/2 right-4 text-background text-5xl transition-transform hover:scale-[1.05] duration-500"
          onClick={onNext}
        >
          <FaArrowRight size={20} className="md:size-8 xl:size-10" />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
