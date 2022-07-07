import Image from "next/image";
import React from "react";
import img2 from "./../imgs/logo-1.png";
import CarouselMarcas from "./CarouselMarcas";

export default function Contrataciones() {
  return (
    <div className="w-full  h-[300px] custom-img bg-no-repeat bg-cover relative ">
      <div className="bg-slate-900/40 absolute w-full h-full"></div>
      <div className="max-w-[1400px] mx-auto h-full grid grid-cols-1 md:grid-cols-3 justify-center items-center w-[90%]">
        <p className="text-4xl font-bold text-white z-10  shadow-text-lg col-span-1 lg:col-span-1 mix-blend-normal">
          Nuestros alumnos son contratados por:
        </p>

        <div className="col-span-2 h-full">
          <CarouselMarcas />
        </div>
      </div>
    </div>
  );
}
