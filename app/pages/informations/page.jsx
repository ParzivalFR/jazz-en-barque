import Header from "@/app/components/Header";
import UsefulInfos from "@/app/components/UsefulInfos";
import ImgInfos from "@/app/images/page_infos.webp";

const Informations = () => {
  return (
    <>
      <Header
        src={ImgInfos}
        width={200}
        height={200}
        className={"absolute z-10 left-8 top-2 w-20"}
      />
      <main className="h-svh">
        <UsefulInfos />
      </main>
    </>
  );
};

export default Informations;
