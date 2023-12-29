"use client";

import React from "react";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { useEffect, useRef } from "react";
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
        <MaxWidthWrapper className="flex flex-col justify-center items-center  bg-no-repeat bg-fill bg-[url(/assets/bg4.jpg)]">
          <span
            className={cn(
              BlairM.className,
              "text-3xl lg:text-6xl font-bold text-white"
            )}
          >
            OUR PRODUCTS
          </span>
        </MaxWidthWrapper>

        <MaxWidthWrapper className="h-fit py-16 flex flex-col justify-center items-center bg-gray-300 gap-y-8">
          <span
            className={cn(BlairM.className, "text-3xl lg:text-6xl font-bold")}
          >
            Sizes and Prices
          </span>
          <div className="flex flex-col justify-start items-center w-3/4 h-fit">
            {/* Item */}
            <div className="flex flex-col lg:flex-row lg:items-start items-center w-full h-fit space-x-0 lg:space-x-8 space-y-4 lg:space-y-0 py-4">
              <Image
                className=" rounded-lg object-cover hover:shadow-lg w-64 h-64"
                src="/assets/ProductCube.png"
                width={1000}
                height={1000}
                alt=""
              />
              <div className={cn(BlairM.className, "flex flex-col space-y-2")}>
                <span className="text-3xl lg:text-6xl">Cube</span>
                <span className="">RP. 6,500-</span>
                <span className="">Sizes Available</span>
                <ul className="list-disc pl-8">
                  <li>4x4x4</li>
                  <li>4x4x5</li>
                  <li>4x4x6</li>
                  <li>5x5x5</li>
                  <li>5x5x6</li>
                  <li>5x5x7</li>
                  <li>6x6x6</li>
                  <li>6x6x7</li>
                  <li>6x6x8</li>
                </ul>
              </div>
            </div>

            {/* Item */}
            <div className="flex flex-col lg:flex-row lg:items-start items-center w-full h-fit space-x-0 lg:space-x-8 space-y-4 lg:space-y-0 py-4">
              <Image
                className=" rounded-lg object-cover hover:shadow-lg w-64 h-64"
                src="/assets/ProductRect.png"
                width={1000}
                height={1000}
                alt=""
              />
              <div className={cn(BlairM.className, "flex flex-col space-y-2")}>
                <span className="text-3xl lg:text-6xl">Rectangle</span>
                <span className="">RP. 6,500-</span>
                <span className="">Sizes Available</span>
                <ul className="list-disc pl-8">
                  <li>4x4x10</li>
                  <li>4x4x11</li>
                  <li>4x4x12</li>
                  <li>5x5x11</li>
                  <li>5x5x12</li>
                </ul>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </main>
    </>
  );
};

export default page;
