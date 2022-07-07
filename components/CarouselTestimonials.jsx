import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ImQuotesLeft } from "react-icons/Im";
import Image from "next/image";
import ph1 from "./../imgs/genesis.aviacion.jpg";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function CarouselTestimonials({ img1, img2, img3, clase1 }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full cursor-grab "
      >
        <SwiperSlide>
          <div className="h-[90%]   flex flex-col justify-between">
            <ImQuotesLeft className="text-4xl  fill-orange-400" />
            <p className="font-mono text-lg text-slate-800">
              Destaco mucho el acompañamiento que tuve durante mis navegaciones
              a distintas partes del país.
            </p>
            <div className="flex mt-4 py-2 items-center ">
              <div className="w-12 h-12 border border-white rounded-full mr-4 relative">
                <Image
                  src={ph1}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <p className="text-sm font-bold">Franco, Entre Rios - Arg</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[90%] flex flex-col justify-between">
            <ImQuotesLeft className="text-4xl  fill-orange-400" />
            <p className="font-mono text-lg text-slate-800">
              Destaco mucho el acompañamiento que tuve durante mis navegaciones
              a distintas partes del país.
            </p>
            <div className="flex mt-4 py-2 items-center ">
              <div className="w-12 h-12 border border-white rounded-full mr-4 relative">
                <Image
                  src={ph1}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <p className="text-sm font-bold">Lucho, Entre Rios - Arg</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[90%] flex flex-col justify-between">
            <ImQuotesLeft className="text-4xl  fill-orange-400" />
            <p className="font-mono text-lg text-slate-800">
              Destaco mucho el acompañamiento que tuve durante mis navegaciones
              a distintas partes del país.
            </p>
            <div className="flex mt-4 py-2 items-center ">
              <div className="w-12 h-12 border border-white rounded-full mr-4 relative">
                <Image
                  src={ph1}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <p className="text-sm font-bold">Pedro, Entre Rios - Arg</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
