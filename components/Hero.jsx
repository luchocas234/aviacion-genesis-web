import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function Hero() {
  const [play, setPlay] = useState(false);
  const handleClick = () => {
    setPlay(!play);
  };
  return (
    <div className="relative w-full max-h-[800px]  bg-red-200">
      <div className="h-full w-full">
        <video autoPlay muted loop className={"w-full h-[800px] object-cover"}>
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="w-full h-[800px] bg-slate-900/40 absolute top-0 left-0"></div>{" "}
      </div>

      <div className="absolute shadow-xl -bottom-32 left-0 right-0 mx-auto w-[90%] bg-white max-w-[1400px] max-h-[300px] min-h-[200px]  grid grid-cols-1 md:grid-cols-2 p-10 justify-around items-center">
        <p className="text-2xl font-semibold md:text-start p-4">
          Apurate! los proximos empiezan en Agosto
        </p>
        <form className="relative inline-block " action="">
          <input
            placeholder={"Correo electronico"}
            type="text"
            className="border-2 p-4 rounded-full w-[80%] placeholder:text-slate-400 "
          />
          <button className="shadow-xl border-2 p-4 rounded-full bg-slate-800 text-white absolute right-0 top-0">
            ¡Quiero más Info!
          </button>
        </form>
      </div>
      <div className="bg-gray-100 w-full h-screen">
        <div className="max-w-[1400px] mx-auto w-[90%] h-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center  pt-40 ">
          <div className="w-full  col-span-1 flex justify-center mt-28 lg:mt-4">
            <ReactPlayer url="https://youtu.be/dOON00AZ0xk" />
          </div>
          <div className="col-span-1 text-center p-16">
            <h3 className="text-5xl font-semibold text-justify ">
              Deja que tus sueños empiecen a volar
            </h3>
            <p className="text-lg my-6 text-justify text-slate-500">
              En esta escuela nuestros instructores están 100% compremetidos en
              brindarte la mejor calidad de entrenamiento de vuelo. Nosotros
              garantizamos un ambiente profesional y amigable con un equipo de
              profesionales motivados.
            </p>
            <div className="grid grid-cols-2 text-xl font-semibold text-slate-800">
              <p>-Begginers</p>
              <p>-Degree</p>
              <p>-Overseas</p>
              <p>-Hobby</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
