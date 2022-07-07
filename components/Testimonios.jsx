import Image from "next/image";
import React from "react";
import ph1 from "./../imgs/genesis.aviacion.jpg";
import CarouselTestimonials from "./CarouselTestimonials";

export default function Testimonios() {
  return (
    <div className="bg-whhite w-full lg:h-screen">
      <div className="max-w-[1400px] w-[90%] h-full mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
          <div className="col-span-3 md:col-span-1    flex justify-between flex-col px-4">
            <h3 className="text-5xl font-semibold h-[20%] mb-10 ">
              Students about the training team
            </h3>
            <div className="w-full h-[60%]">
              <CarouselTestimonials />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1  h-[300px] md:h-[560px] bg-green-100 relative ">
            <Image src={ph1} objectFit="cover" layout="fill" />
          </div>
          <div className="col-span-3 lg:col-span-1  h-[300px] md:h-[560px] bg-green-100 relative ">
            <Image src={ph1} objectFit="cover" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
