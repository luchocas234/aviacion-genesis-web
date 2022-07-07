import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

export default function Contacto() {
  return (
    <div
      id="contacto"
      className="w-full bg-slate-800 text-gray-400  h-full lg:h-[30vh]"
    >
      <div className="max-w-[1400px] w-[90%] h-full mx-auto flex justify-center items-center">
        <div className="grid grid-cols-3 gap-6 justify-center items-center">
          <h3 className="col-span-3 lg:col-span-1 text-2xl text-center sm:text-4xl font-semibold p-4">
            Quedemos en <span className="text-orange-400">contacto</span>
          </h3>
          <a href="" className="col-span-3 lg:col-span-1">
            <div className=" flex p-4 gap-4 group cursor-pointer">
              <FaMobileAlt className="h-20 w-20 group-hover:fill-orange-400 transition-colors duration-300" />
              <div>
                <p className="lg:text-3xl font-semibold text-orange-400">
                  {" "}
                  11.55324019{" "}
                </p>
                <p>
                  Horarios: <br /> Lunes a Sabado 9am - 9pm
                </p>
              </div>
            </div>
          </a>
          <a href="" className="col-span-3 lg:col-span-1">
            <div className=" flex p-4 gap-4 group">
              <ImLocation2 className="h-20 w-20 fill-gray-400 text-gray-400 group-hover:fill-orange-400" />
              <div className="w-full">
                <p className="lg:text-3xl font-semibold text-orange-400">
                  {" "}
                  General Rodrigez
                </p>
                <p> Ruta 234, wdasdi</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
