import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import imglogo from "../public/logo.png";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <nav className="w-full max-w-[1400px] h-[120px] mx-auto bg-white flex justify-between ">
      <div className="bg-slate-800 w-60 px-10 text-white font-semibold uppercase text-center flex items-center justify-center text-2xl">
        Aviacion Genesis
      </div>
      <div className="flex items-center justify-center w-full">
        <ul className="hidden md:flex space-x-4 justify-center text-xl select-none">
          <li className="cursor-pointer hover:text-sky-500 select-none">
            <Link href="/" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-sky-500 select-none">
            <Link href="/#about" smooth={true} offset={-200} duration={500}>
              Nosotros
            </Link>
          </li>
          <li className="cursor-pointer hover:text-sky-500 select-none">
            <Link href={"/#precios"} smooth={true} offset={-50} duration={500}>
              Precios
            </Link>
          </li>
          <li className="cursor-pointer hover:text-sky-500 select-none">
            <Link href={"/#flota"} smooth={true} offset={-100} duration={500}>
              Flota
            </Link>
          </li>
          <li className="cursor-pointer hover:text-sky-500 select-none">
            <Link href={"/#contacto"} smooth={true} offset={-50} duration={500}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-80 hidden md:flex justify-center items-center space-x-2 h-full">
        <a
          href=""
          className="rounded-full bg-slate-700 w-12 h-12 flex justify-center items-center"
        >
          <FaFacebookF className="fill-white text-2xl text-center" />
        </a>
        <a
          href=""
          className="rounded-full bg-slate-700 w-12 h-12 flex justify-center items-center"
        >
          <FaInstagram className="fill-white h-8 w-8 " />
        </a>
        <a
          href=""
          className="rounded-full bg-slate-700 w-12 h-12 flex justify-center items-center"
        >
          <FaWhatsapp className="fill-white  h-8 w-8 " />
        </a>
      </div>
      <div
        className="md:hidden flex items-center justify-center px-10"
        onClick={handleNav}
      >
        {!nav ? (
          <TiThMenu className="text-3xl fill-slate-700" />
        ) : (
          <AiFillCloseCircle className="text-3xl fill-white z-20" />
        )}
      </div>
      <div
        className={
          nav
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-slate-800 text-center text-white ease-in duration-300"
            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-slate-800  text-center ease-in duration-300"
        }
      >
        <p className="mb-14 text-4xl uppercase font-semibold ">
          {" "}
          Aviacion Genesis
        </p>
        <ul className="uppercase">
          <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
            <Link href="/#gallery">Nosotros</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
            <Link href="/work">Precios</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
        <div className="w-80 mt-14 flex justify-center items-center space-x-4 ">
          <a
            href=""
            className="rounded-full bg-slate-700 w-14 h-14 flex justify-center items-center"
          >
            <FaFacebookF className="fill-white text-2xl text-center" />
          </a>
          <a
            href=""
            className="rounded-full bg-slate-700 w-14 h-14 flex justify-center items-center"
          >
            <FaInstagram className="fill-white h-8 w-8 " />
          </a>
          <a
            href=""
            className="rounded-full bg-slate-700 w-14 h-14 flex justify-center items-center"
          >
            <FaWhatsapp className="fill-white  h-8 w-8 " />
          </a>
        </div>
      </div>
    </nav>
  );
}
