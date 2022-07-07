import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full max-h-[800px] bg-red-200">
      <div className="h-full w-full">
        <video autoPlay muted loop className={"w-full h-[800px] object-cover"}>
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="w-full h-[800px] bg-slate-900/40 absolute top-0 left-0"></div>{" "}
      </div>
      <div className="w-full max-w-[1400px]">
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
        <div className="bg-gray-100 w-full h-screen"></div>
      </div>
    </div>
  );
}
