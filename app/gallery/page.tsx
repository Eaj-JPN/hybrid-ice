"use client";

import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

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

      {/* Gallery */}
      <section
        id="Gallery"
        className=" flex flex-col items-center justify-center min-h-screen h-fit bg-gray-300 overflow-hidden"
      >
        <div className="p-10 h-fit flex items-center text-center justify-center">
          <div className="w-full mx-auto space-y-10">
            {/* Title */}
            <div className={BlairL.className}>
              <h1 className="text-4xl lg:text-5xl font-bold text-black">
                Gallery
              </h1>
            </div>

            {/* Images Grid*/}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-10 xl:px-32">
              {/* Image */}
              <div className="h-auto max-w-full  hover:shadow-md">
                <Image
                  className="rounded-lg"
                  src="/assets/image1.webp"
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>

              {/* Image */}
              <div className="h-auto max-w-full  hover:shadow-md">
                <Image
                  className="rounded-lg"
                  src="/assets/image3.webp"
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>

              {/* Image */}
              <div className="h-auto max-w-full  hover:shadow-md">
                <Image
                  className="rounded-lg"
                  src="/assets/image5.webp"
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>

              {/* Image */}
              <div className="h-auto max-w-full  hover:shadow-md">
                <Image
                  className="rounded-lg"
                  src="/assets/image2.webp"
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>

              {/* Image */}
              <div className="h-auto max-w-full  hover:shadow-md">
                <Image
                  className="rounded-lg"
                  src="/assets/image4.webp"
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>

              {/* Image */}
              <div className="h-auto max-w-full  hover:shadow-md">
                <Image
                  className="rounded-lg"
                  src="/assets/image2.webp"
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>

              {/* Image */}
              <div className="h-auto max-w-full  hover:shadow-md">
                <Image
                  className="rounded-lg"
                  src="/assets/image4.webp"
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>

              {/* Image */}
              <div className="h-auto max-w-full  hover:shadow-md">
                <Image
                  className="rounded-lg"
                  src="/assets/image3.webp"
                  width={1000}
                  height={1000}
                  alt=""
                />
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
