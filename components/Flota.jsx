import Image from "next/image";
import React from "react";
import plane1 from "./../imgs/lv-iqf.jpg";
import plane2 from "./../imgs/lv-rym.jpg";
import plane3 from "./../imgs/lv-iqb.jpg";

export default function Flota() {
  return (
    <div
      id="flota"
      className="w-full h-full lg:h-[90vh] bg-gray-100 flex flex-col items-center p-10"
    >
      <div className="max-w-[1400px]  w-[90%] mx-auto h-full flex flex-col justify-around my-20 ">
        <h3 className="text-6xl font-semibold text-slate-800 text-center mb-10">
          Nuestra Flota
        </h3>
        <div className="w-full  grid justify-center items-center lg:grid-cols-3 gap-6 ">
          {/* Plane1 */}
          <div class="max-w-md col-span-3 lg:col-span-1 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <div className="  h-[200px] md:h-[250px]  relative ">
                <Image src={plane1} objectFit="cover" layout="fill" />
              </div>
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  LV-IQF
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-lg hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-orange-300 bg-orange-400"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Plane2 */}
          <div class="max-w-md col-span-3 lg:col-span-1 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <div className="  h-[200px] md:h-[250px]  relative ">
                <Image src={plane2} objectFit="cover" layout="fill" />
              </div>
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  LV-RYM
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-lg hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-orange-300 bg-orange-400 "
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Plane 3 */}
          <div class="max-w-md col-span-3 lg:col-span-1 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <div className="  h-[200px] md:h-[250px]  relative ">
                <Image src={plane3} objectFit="cover" layout="fill" />
              </div>
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  LV-IQB
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-lg hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-orange-300 bg-orange-400"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
