import Footer from "@/app/components/Footer";
import FullHistory from "@/app/components/FullHistory";
import Header from "@/app/components/Header";
import ImgHistory from "@/app/images/page_history.webp";

const History = () => {
  return (
    <>
      <Header
        src={ImgHistory}
        width={300}
        height={300}
        className={"absolute z-10 left-8 top-2 w-20 md:w-36"}
      />
      <main className="relative xl:-top-52 h-svh">
        <FullHistory />
      </main>
      <Footer />
    </>
  );
};

export default History;
