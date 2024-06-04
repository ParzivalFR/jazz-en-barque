import Image from "next/image";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[1000] p-2 lg:p-20">
      <div>
        <Image
          src={imageUrl}
          alt="Selected"
          className="relative z-1010 max-w-full max-h-full lg:size-4/5 m-auto rounded-lg"
        />
        <button
          className="absolute top-2 right-2 text-white text-5xl transition-transform hover:rotate-180 duration-500 "
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
