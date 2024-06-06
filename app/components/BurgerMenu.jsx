"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { londrina } from "../fonts";
import Spacing from "./Spacing";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="relative z-10  h-auto rounded-full">
        <button
          onClick={toggle}
          className="z-20 border border-black text-black flex justify-center items-center h-auto px-2 rounded-full bg-background hover:bg-orange transition-colors duration-500 ease-in-out"
        >
          <IoIosMenu className="size-8 md:size-10" />
        </button>
        <span className="z-[-10] absolute top-[2px] -right-[2px] bg-yellow border border-black rounded-full h-auto px-2">
          <IoIosMenu className="size-8 md:size-10" />
        </span>
      </div>
      <Menu open={open}>
        <button
          aria-label="Close"
          className="absolute z-[910] top-6 right-6 text-5xl text-black cursor-pointer transition-transform duration-700 ease-in-out hover:rotate-180"
          onClick={toggle}
        >
          <MdOutlineClose className="bg-background border border-black p-1 rounded-full size-10 lg:size-18 text-black" />
        </button>
        <MenuContainer open={open}>
          <div className="flex justify-center items-start">
            <Image
              src="/logo-1.png"
              alt="Logo de Jazz En Barque"
              width={500}
              height={500}
              className="w-40 sm:w-52"
            />
          </div>
          <Spacing size={10} />
          <MenuItem href="/" onClick={toggle}>
            Accueil
          </MenuItem>
          <MenuItem href="/pages/informations" onClick={toggle}>
            Infos Pratiques
          </MenuItem>
          <MenuItem href="/pages/history" onClick={toggle}>
            Notre Histoire
          </MenuItem>
          <MenuItem href="/pages/previous" onClick={toggle}>
            Editions Précédentes
          </MenuItem>
          <MenuItem href="/pages/contact" onClick={toggle}>
            Contact
          </MenuItem>
        </MenuContainer>
      </Menu>
    </>
  );
}

/* Logic */
const style = {
  container: `flex flex-col gap-8 relative top-10 w-full text-start px-4 md:px-8 lg:px-12 xl:px-20 z-[900] transition-opacity duration-500 ease-in-out`,
  item: `px-4 md:p-10 text-3xl text-white cursor-pointer transition-all hover:text-background duration-700 ease-in-out ${londrina.className}`,
  menu: {
    open: `h-svh w-full opacity-100 visible`,
    close: `w-0 h-svh opacity-0 invisible`,
    default: `overflow-x-hidden overflow-y-auto transition-all duration-700 fixed z-50 top-0 right-0 bg-middleblue`,
  },
};

function Menu({ children, open }) {
  return (
    <div
      className={`${style.menu.default} 
      ${open ? style.menu.open : style.menu.close}`}
    >
      {children}
    </div>
  );
}

function MenuContainer({ children, open }) {
  return (
    <div className={`${style.container} ${open ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  );
}

function MenuItem({ children, href, onClick }) {
  return (
    <div>
      <Link href={href} className={style.item} onClick={onClick}>
        {children}
      </Link>
    </div>
  );
}
