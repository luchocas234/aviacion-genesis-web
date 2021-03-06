import Image from "next/image";
import React from "react";
import foto1 from "./../imgs/foto1.jpg";
import foto2 from "./../imgs/foto2.jpg";
import CarouselTestimonials from "./CarouselTestimonials";

export default function Testimonios() {
  return (
    <div id="alumnos" className="bg-whhite w-full lg:h-screen">
      <div className="max-w-[1400px] w-[90%] h-full mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
          {/* Testimonios */}
          <div
            data-aos="fade-right"
            className="col-span-3 md:col-span-1    flex justify-between flex-col px-4"
          >
            <h3 className="text-5xl font-semibold h-[20%] mb-10 ">
              Estudiantes acerca de nuestros entrenamientos
            </h3>
            <div className="w-full h-[60%]">
              <CarouselTestimonials />
            </div>
          </div>
          {/* Imagen */}
          <div
            data-aos="fade-up"
            className="col-span-3 lg:col-span-1  h-[300px] md:h-[560px] bg-green-100 relative "
          >
            <Image src={foto1} objectFit="cover" layout="fill" alt="none" />
          </div>
          {/* Imagen 2 */}
          <div
            data-aos="fade-left"
            className="col-span-3 lg:col-span-1  h-[300px] md:h-[560px] bg-green-100 relative "
          >
            <Image src={foto2} objectFit="cover" layout="fill" alt="none" />
          </div>
        </div>
      </div>
    </div>
  );
}
