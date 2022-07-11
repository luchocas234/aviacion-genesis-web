import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { AiOutlineCheck } from "react-icons/ai";

export default function Hero() {
  return (
    <div className="w-full h-full relative ">
      <div className="h-full w-full relative justify-center items-center flex">
        <video autoPlay muted loop className={"w-full h-[800px] object-cover"}>
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className=" absolute  w-[90%] h-full top-0 flex z-10 justify-center items-center   text-center text-white/80">
          <h1 className="text-5xl lg:text-7xl font-bold">
            Se el piloto que soñaste ser
          </h1>
        </div>
        <div className="w-full h-[800px] bg-slate-900/40 absolute top-0 left-0"></div>
      </div>

      <div className="flex items-center  w-full h-full lg:h-[90vh] justify-center flex-col relative p-4">
        <div className="lg:absolute   shadow-xl  md:-top-16  left-0 right-0 mx-auto w-[90%] md:w-[90%]  bg-white max-w-[1400px]  h-[200px]  grid grid-cols-1 md:grid-cols-2 p-8 justify-around items-center">
          <p className="md:text-2xl font-semibold md:text-start p-4">
            ¡Apurate! los proximos cursos empiezan en Agosto
          </p>
          <form
            className="w-full h-full justify-center items-center flex  "
            action=""
          >
            <div className="relative w-full">
              <input
                placeholder={"Correo"}
                type="text"
                className="border-2 h-10 md:h-16 p-4 rounded-full w-[90%] placeholder:text-slate-400 "
              />
              <button className="shadow-xl border-2 h-10 md:h-16 p-2 rounded-full bg-slate-800 text-white text-sm absolute top-0 right-2">
                ¡Quiero más Info!
              </button>
            </div>
          </form>
        </div>

        <div
          id="nosotros"
          className="max-w-[1400px] mx-auto w-[90%] h-full py-10 lg:py-0   items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-4    "
        >
          <div className="w-full  col-span-1 flex justify-center ">
            <ReactPlayer url="https://youtu.be/dOON00AZ0xk" controls={true} />
          </div>
          <div className="col-span-1 text-center    flex flex-col justify-between items-center">
            <h3 className="text-3xl md:text-5xl font-semibold text-center  px-8   ">
              Deja que tus sueños empiecen a volar
            </h3>
            <p className="text-lg my-6 text-justify text-slate-500 px-8 ">
              En esta escuela nuestros instructores están 100% compremetidos en
              brindarte la mejor calidad de entrenamiento de vuelo. Nosotros
              garantizamos un ambiente profesional y amigable con un equipo de
              profesionales motivados.
            </p>
            <div className="grid grid-cols-2 text-xl gap-6 font-semibold text-orange-400">
              <p className="flex gap-4">
                <AiOutlineCheck /> Principiantes
              </p>
              <p className="flex gap-4">
                <AiOutlineCheck /> Avanzados
              </p>
              <p className="flex gap-4">
                <AiOutlineCheck /> Extranjeros
              </p>
              <p className="flex gap-4">
                <AiOutlineCheck /> Hobby
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
