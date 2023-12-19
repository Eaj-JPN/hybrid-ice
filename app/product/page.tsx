"use client";

import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

import PageFooter from "@/components/PageFooter";
import PageHeaderAlt from "@/components/PageHeaderAlt";

const BlairM = localFont({ src: "../../fonts/BlairMedium.otf" });
const BlairL = localFont({ src: "../../fonts/BlairLight.otf" });

const page = () => {
  // Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <div className="bg-gray-900">
        <PageHeaderAlt />
      </div>

      {/* Landing */}
      <section className="m-0 flex flex-col min-h-screen h-screen bg-no-repeat bg-fill bg-[url(/assets/bg4.jpg)] overflow-hidden">
        <div className=" h-screen w-screen bg-black bg-opacity-50">
          {/* Text */}
          <div className="flex h-screen items-center justify-center">
            <div className="text-center text-white w-4/6 space-y-8">
              <div className={BlairM.className}>
                <h1 className="text-5xl lg:text-6xl">OUR PRODUCTS</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="py-16 px-8 lg:px-32 flex flex-col items-center justify-center min-h-screen h-fit bg-gray-300 overflow-hidden">
        <div className="p-10 h-fit flex items-center justify-center">
          <div className="w-full mx-auto space-y-10">
            {/* Title */}
            <div className={BlairL.className}>
              <h1 className="text-4xl lg:text-5xl font-bold text-black pb-10 text-center">
                SIZES AND PRICES
              </h1>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 grid-rows-3 gap-4 ">
              {/* Cube */}
              <div className="w-full h-auto flex flex-col lg:flex-row gap-x-4 p-2">
                <div className="h-full lg:w-1/2 flex lg:justify-center items-center ">
                  <div className="lg:h-96 lg:w-96 w-80 h-80">
                    <Image
                      className=" rounded-lg object-cover hover:shadow-lg "
                      src="/assets/ProductCube.png"
                      width={1000}
                      height={1000}
                      alt=""
                    />
                  </div>
                </div>
                <div className="h-full lg:w-1/2 lg:px-4 pt-4">
                  <div className={BlairL.className}>
                    <h1 className="text-4xl font-bold pb-4 w-96">CUBE</h1>
                  </div>
                  <p className="text-xl font-bold pb-4">RP. 6,500-</p>
                  <p className="text-xl font-bold pb-4">Sizes Available</p>
                  <ul className="list-disc pl-8">
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                  </ul>
                </div>
              </div>

              {/* Rectangle */}
              <div className="w-full h-auto flex flex-col lg:flex-row gap-x-4 p-2">
                <div className="h-full lg:w-1/2 flex lg:justify-center items-center ">
                  <div className="lg:h-96 lg:w-96 w-80 h-80">
                    <Image
                      className=" rounded-lg object-cover hover:shadow-lg "
                      src="/assets/ProductRect.png"
                      width={1000}
                      height={1000}
                      alt=""
                    />
                  </div>
                </div>
                <div className="h-full lg:w-1/2 lg:px-4 pt-4">
                  <div className={BlairL.className}>
                    <h1 className="text-4xl font-bold pb-4 w-96">Rectangle</h1>
                  </div>
                  <p className="text-xl font-bold pb-4">RP. 6,500-</p>
                  <p className="text-xl font-bold pb-4">Sizes Available</p>
                  <ul className="list-disc pl-8">
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                  </ul>
                </div>
              </div>

              {/* Sphere */}
              <div className="w-full h-auto flex flex-col lg:flex-row gap-x-4 p-2">
                <div className="h-full lg:w-1/2 flex lg:justify-center items-center ">
                  <div className="lg:h-96 lg:w-96 w-80 h-80">
                    <Image
                      className=" rounded-lg object-cover hover:shadow-lg "
                      src="/assets/ProductSphr.png"
                      width={1000}
                      height={1000}
                      alt=""
                    />
                  </div>
                </div>
                <div className="h-full lg:w-1/2 lg:px-4 pt-4">
                  <div className={BlairL.className}>
                    <h1 className="text-4xl font-bold pb-4 w-96">Sphere</h1>
                  </div>
                  <p className="text-xl font-bold pb-4">RP. 6,500-</p>
                  <p className="text-xl font-bold pb-4">Sizes Available</p>
                  <ul className="list-disc pl-8">
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                    <li>4x4x4</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default page;
