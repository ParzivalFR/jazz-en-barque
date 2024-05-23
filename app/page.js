import Boarding from "./components/Boarding";
import BottomHome from "./components/BottomHome";
import Competition from "./components/Competition";
import Header from "./components/Header";
import Program from "./components/Program";
import Spacing from "./components/Spacing";
import imgHome from "./images/page_home.webp";

export default function Home() {
  return (
    <>
      <main className="h-svh">
        <Header src={imgHome} />
        <Program />
        <Boarding />
        <Competition />
        <Spacing size={80} />
        <BottomHome />
      </main>
    </>
  );
}
