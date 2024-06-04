import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import UsefulInfos from "@/app/components/UsefulInfos";
import ImgInfos from "@/app/images/page_infos.webp";

const Informations = () => {
  return (
    <>
      <Header
        src={ImgInfos}
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
