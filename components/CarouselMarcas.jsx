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
import img2 from "./../imgs/logo-1.png";
import img3 from "./../imgs/logo-2.png";
import img4 from "./../imgs/logo-3.png";
import img5 from "./../imgs/logo-4.png";
import img6 from "./../imgs/logo-5.png";

// import required modules
import { Autoplay } from "swiper";

export default function CarouselMarcas({}) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={200}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-full cursor-grab "
      >
        <SwiperSlide>
          <div className="h-full w-[200px] relative  flex justify-center items-center">
            <Image
              src={img2}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
              alt="none"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-[200px] relative  flex justify-center items-center">
            <Image
              src={img3}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
              alt="none"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-[200px] relative  flex justify-center items-center">
            <Image
              src={img4}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
              alt="none"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-[150px] relative  flex justify-center items-center">
            <Image
              src={img5}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
              alt="none"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-[200px] relative  flex justify-center items-center">
            <Image
              src={img6}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
              alt="none"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
