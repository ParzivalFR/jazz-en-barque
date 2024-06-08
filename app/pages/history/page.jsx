import Footer from "@/app/components/Footer";
import FullHistory from "@/app/components/FullHistory";
import Header from "@/app/components/Header";
import Spacing from "@/app/components/Spacing";

const History = () => {
  return (
    <>
      <Header
        src="https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879550/JEB/bbciqtl8ldgcgnpu327k.webp"
        width={300}
        height={300}
        className={"absolute z-10 left-8 top-2 w-20 md:w-36"}
      />
      <main className="relative xl:-top-52 h-svh">
        <FullHistory />
        <Spacing size={50} />
        <Footer />
      </main>
    </>
  );
};

export default History;
