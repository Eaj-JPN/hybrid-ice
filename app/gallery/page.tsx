"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import localFont from "next/font/local";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageNavAlt from "@/components/PageNavAlt";

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
          id="Gallery"
          className="h-fit py-32  flex flex-col justify-center items-center bg-gray-300 gap-y-8"
        >
          <span className={cn(BlairM.className, "text-6xl font-bold")}>
            Gallery
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center justify-center items-center">
            {/* Image */}
            <div className="bg-gray-500 bg-opacity-25 hover:shadow-xl w-40 h-40 lg:w-72 lg:h-72 flex items-center justify-center">
              <Image
                className="w-full h-auto rounded-md"
                src="/assets/image1.webp"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Image */}
            <div className="bg-gray-500 bg-opacity-25 hover:shadow-xl w-40 h-40 lg:w-72 lg:h-72 flex items-center justify-center">
              <Image
                className="w-full h-auto rounded-md"
                src="/assets/image2.webp"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Image */}
            <div className="bg-gray-500 bg-opacity-25 hover:shadow-xl w-40 h-40 lg:w-72 lg:h-72 flex items-center justify-center">
              <Image
                className="w-full h-auto rounded-md"
                src="/assets/image3.webp"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Image */}
            <div className="bg-gray-500 bg-opacity-25 hover:shadow-xl w-40 h-40 lg:w-72 lg:h-72 flex items-center justify-center">
              <Image
                className="w-full h-auto rounded-md"
                src="/assets/image4.webp"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Image */}
            <div className="bg-gray-500 bg-opacity-25 hover:shadow-xl w-40 h-40 lg:w-72 lg:h-72 flex items-center justify-center">
              <Image
                className="w-full h-auto rounded-md"
                src="/assets/image5.webp"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Image */}
            <div className="bg-gray-500 bg-opacity-25 hover:shadow-xl w-40 h-40 lg:w-72 lg:h-72 flex items-center justify-center">
              <Image
                className="w-full h-auto rounded-md"
                src="/assets/image6.webp"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* Image */}
            <div className="bg-gray-500 bg-opacity-25 hover:shadow-xl w-40 h-40 lg:w-72 lg:h-72 flex items-center justify-center">
              <Image
                className="w-full h-auto rounded-md"
                src="/assets/image1.webp"
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
