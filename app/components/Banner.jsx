import Image from "next/image";

const Banner = ({ src }) => {
  return (
    <div className="absolute top-0 right-0 w-full">
      <Image src={src} alt="banner" />
    </div>
  );
};

export default Banner;
