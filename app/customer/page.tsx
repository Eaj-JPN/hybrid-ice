"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import PageNavAlt from "@/components/PageNavAlt";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const BlairM = localFont({ src: "../../fonts/BlairMedium.otf" });

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
    <>
      <main>
        <PageNavAlt />
        <MaxWidthWrapper
          id="Customer"
          className="h-fit py-32 flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover bg-[url(/assets/bg2.png)] gap-y-8"
        >
          <span
            className={cn(
              BlairM.className,
              "text-3xl lg:text-6xl font-bold text-white text-center "
            )}
          >
            OUR CUSTOMERS
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center justify-center items-center">
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/AA01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/acta01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/angelanddemon01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/barcelona01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/biko01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/blackpond01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/burabura01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/cafekitsunne01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/cantinero01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/carrots01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/casaalba01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/contra01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/dingdong01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/golddragon01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/hause01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/inferno01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/kempinski01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/leon01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/limelight01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/mensa01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/miglia01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/mrfox01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/nirwana01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/nonnabona01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/oku01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/osteriagia01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/phoenix01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/potboyaru01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/ristorantealba01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/semaja01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/skye01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/socialgarden01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/socialhouse01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/sosogood01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/spillstill01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/stalk01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/sudestada01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/thegoldentooth01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/vol01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Customer */}
            <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
              <Image
                className="w-full h-auto"
                src="/assets/clientLogo/zodiac01.png"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </main>
    </>
  );
};

export default page;
