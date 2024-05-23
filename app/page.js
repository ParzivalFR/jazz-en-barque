import Boarding from "./components/Boarding";
import Competition from "./components/Competition";
import Header from "./components/Header";
import Program from "./components/Program";
import imgHome from "./images/page_home.webp";

export default function Home() {
  return (
    <>
      <main className="h-svh">
        <Header src={imgHome} />
        <Program />
        <Boarding />
        <Competition />
      </main>
    </>
  );
}
