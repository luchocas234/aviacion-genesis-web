import React from "react";

export default function Cursos() {
  return (
    <div className="bg-slate-900 w-full md:h-screen  ">
      <div className="max-w-[1400px] w-[90%] mx-auto flex justify-center items-center py-10 lg:p-10  flex-col h-full">
        <h2 className="text-white text-center text-6xl font-semibold mb-10  ">
          <span className="text-orange-400">Nuestros cursos</span> y programas
        </h2>
        <div className="w-full grid md:grid-cols-3 gap-12  py-10 px-4">
          {/* tarjeta */}
          <div className="bg-white shadow-xl  h-full p-4 md:py-14 px-8 flex flex-col justify-between">
            <div className="flex justify-between flex-col">
              <h3 className="text-5xl lg:text-7xl font-semibold mb-2 md:mb-6 text-slate-800">
                PPA
              </h3>
              <p className="text-lg font-semibold font-mono mb-2 md:mb-10">
                Empieza Noviembre 14, 2022 - 6 meses
              </p>
              <p className="text-lg text-gray-600">
                ¡La licencia de piloto privado es una gran oportunidad para que
                usted comience su carrera como piloto!
              </p>
            </div>
            <div className=" mt-2 md:mt-12 text-orange-400 font-semibold border-b-2 w-fit border-orange-400 cursor-pointer">
              Más Info...
            </div>
          </div>

          {/* -- */}
          <div className="bg-white shadow-xl  h-full p-4 md:py-14 px-8 flex flex-col justify-between">
            <div className="flex justify-between flex-col">
              <h3 className="text-5xl lg:text-7xl font-semibold  mb-2 md:mb-6 text-slate-800">
                PCA
              </h3>
              <p className="text-lg font-semibold font-mono mb-2 md:mb-10">
                Empieza Noviembre 14, 2022 - 12 meses
              </p>
              <p className="text-lg text-gray-600">
                Al finalizar el curso comercial, los estudiantes pueden trabajar
                y recibir su pago de inmediato.
              </p>
            </div>
            <div className="mt-2 md:mt-12 text-orange-400 font-semibold border-b-2 w-fit border-orange-400 cursor-pointer">
              Más Info...
            </div>
          </div>
          {/* -- */}
          <div className="bg-white shadow-xl  h-full p-4 md:py-14 px-8 flex flex-col justify-between">
            <div className="flex justify-between flex-col">
              <h3 className="text-5xl lg:text-7xl font-semibold  mb-2 md:mb-6 text-slate-800">
                I V
              </h3>
              <p className="text-lg font-semibold font-mono mb-2 md:mb-10">
                Empieza Noviembre 14, 2022 - 12 meses
              </p>
              <p className="text-lg text-gray-600">
                ¡Después de recibir una licencia IV, obtiene luz verde para ser
                empleado como instructor de vuelo!
              </p>
            </div>
            <div className="mt-2 md:mt-12 text-orange-400 font-semibold border-b-2 w-fit border-orange-400 cursor-pointer">
              Más Info...
            </div>
          </div>
          {/* -- */}
        </div>
      </div>
    </div>
  );
}
