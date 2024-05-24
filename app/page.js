import Boarding from "./components/Boarding";
import BottomHome from "./components/BottomHome";
import Competition from "./components/Competition";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Program from "./components/Program";
import Spacing from "./components/Spacing";
import WavyBg from "./components/WavyBg";
import imgHome from "./images/page_home.webp";

export default function Home() {
  return (
    <>
      <Header src={imgHome} />
      <main className="h-svh">
        <Program />
        <Boarding />
        <Competition />
        <Spacing size={150} />
        <BottomHome />
        <WavyBg />
        <Spacing size={100} />
        <Footer />
      </main>
    </>
  );
}
