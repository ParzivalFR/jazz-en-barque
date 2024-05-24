"use client";

import BoardingLarge from "./components/BoardingLarge";
import BoardingMobile from "./components/BoardingMobile";
import BottomHome from "./components/BottomHome";
import Competition from "./components/Competition";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Program from "./components/Program";
import Spacing from "./components/Spacing";
import { useWindowSize } from "./hooks/WindowSizeContext";
import imgHome from "./images/page_home.webp";

export default function Home() {
  const WindowSizeContext = useWindowSize();

  return (
    <>
      <Header src={imgHome} />
      <main className="h-svh">
        <Program />
        {WindowSizeContext < 1024 ? <BoardingMobile /> : <BoardingLarge />}
        <Spacing size={100} />
        <Competition />
        <Spacing size={200} />
        <BottomHome />
        <Spacing size={100} />
        <Footer />
      </main>
    </>
  );
}
