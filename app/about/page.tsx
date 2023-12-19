"use client";

import PageFooter from "@/components/PageFooter";

import React from "react";

import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef, useState } from "react";
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
      <section className="m-0 flex flex-col min-h-screen h-screen bg-no-repeat bg-fill bg-[url(/assets/heroBg.png)] overflow-hidden">
        <div className=" h-screen w-screen bg-black bg-opacity-30">
          {/* Text */}
          <div className="flex h-screen items-center justify-center">
            <div className="text-center text-white w-4/6 space-y-8">
              <div className={BlairM.className}>
                <h1 className="text-4xl lg:text-5xl">
                  CUSTOMIZE YOUR OWN ICE WITH US
                </h1>
              </div>

              <p className="text-xs lg:text-lg leading-loose tracking-wider">
                Hybrid ICE crafts high-quality, hand-cut, crystal-clear ice
                cubes. Our range includes cubes, rectangles, and bespoke shapes,
                ensuring your drinks stand out. Elevate your customer experience
                with us.
              </p>

              <p className="text-xs lg:text-lg leading-loose tracking-wider">
                Want more information? Click the button below to chat with us on
                WhatsApp!
              </p>

              <Link
                href="https://wa.me/+6281217771930"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="pt-16 px-48 flex flex-col items-center justify-center min-h-screen h-fit bg-gray-300 overflow-hidden">
        <div className="p-10 h-fit flex items-center justify-center">
          <div className="w-full mx-auto space-y-10">
            {/* Title */}
            <div className={BlairL.className}>
              <h1 className="text-4xl lg:text-5xl font-bold text-black pb-10 text-center">
                OUR VISION & MISSION
              </h1>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 gap-4">
              {/* Vision n Description */}
              <div>
                <div className={BlairL.className}>
                  <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left text-black pb-10">
                    VISION
                  </h1>
                </div>

                <ul className="list-disc pl-10 text-xl">
                  <li> Provide Clear Ice all over Indonesia</li>
                </ul>
              </div>

              {/* Mission n Description */}
              <div className="lg:col-start-1 lg:row-start-2">
                <div className={BlairL.className}>
                  <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left text-black pb-10">
                    Mission
                  </h1>
                </div>

                <ul className="list-disc pl-10 text-xl">
                  <li>Open Branches all in Main Cities in Indonesia</li>
                  <li>
                    Provide the best of service to all our customers Keep on
                    Learning,
                  </li>
                  <li>Growing and Expanding</li>
                </ul>
              </div>

              <div className="invisible lg:visible flex items-center justify-center lg:row-span-2 lg:col-start-2 lg:row-start-1">
                <Image
                  className="rounded w-4/5 h-auto"
                  src="/assets/cocktailTemp.jpg"
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BG3 */}
      <section className=" flex flex-col items-center justify-center h-64 bg-no-repeat bg-cover bg-[url(/assets/bg3.JPG)]">
        <div className=" h-full w-full bg-black bg-opacity-50"></div>
      </section>

      {/* Founders */}
      <section className="pt-16 px-48 flex flex-col items-center justify-center min-h-screen h-fit bg-gray-300 overflow-hidden">
        <div className="p-10 h-fit flex items-center justify-center">
          <div className="w-full mx-auto space-y-10">
            {/* Title */}
            <div className={BlairL.className}>
              <h1 className="text-4xl lg:text-5xl font-bold text-black pb-10 text-center">
                OUR FOUNDERS
              </h1>
            </div>

            {/* Images Grid*/}
            <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-x-96 gap-y-16 px-10 lg:px-32">
              {/* Image */}
              <div>
                <Link href={"/"} className="h-auto rounded-full space-y-5">
                  <Image
                    className="rounded-full object-cover hover:shadow-lg "
                    src="/assets/cocktailTemp.jpg"
                    width={1000}
                    height={1000}
                    alt=""
                  />
                  <div className="text-black text-center">
                    <div className={BlairL.className}>
                      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pb-4">
                        Anand
                      </h1>
                    </div>
                    <p className="text-xl">FOUNDER 1</p>
                  </div>
                </Link>
              </div>

              {/* Image */}
              <div>
                <Link href={"/"} className="h-auto rounded-full space-y-5">
                  <Image
                    className="rounded-full object-cover hover:shadow-lg "
                    src="/assets/cocktailTemp.jpg"
                    width={1000}
                    height={1000}
                    alt=""
                  />
                  <div className="text-black text-center">
                    <div className={BlairL.className}>
                      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pb-4">
                        Himawan
                      </h1>
                    </div>
                    <p className="text-xl">FOUNDER 2</p>
                  </div>
                </Link>
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
