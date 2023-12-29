"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import PageNavAlt from "@/components/PageNavAlt";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

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
    <>
      <main>
        <PageNavAlt />
        {/* Hero */}
        <MaxWidthWrapper className="bg-no-repeat bg-fill bg-[url(/assets/heroBg.png)] flex flex-col justify-center items-center overflow-hidden gap-y-4">
          <div className="text-white flex flex-col text-center space-y-4 items-center">
            <span
              className={cn(BlairM.className, "text-3xl lg:text-6xl font-bold")}
            >
              CUSTOMIZE YOUR OWN ICE WITH US
            </span>
            <span className="w-3/4">
              Hybrid ICE crafts high-quality, hand-cut, crystal-clear ice cubes.
              Our range includes cubes, rectangles, and bespoke shapes, ensuring
              your drinks stand out. Elevate your customer experience with us.
            </span>
            <Button className="bg-yellow-600 hover:bg-yellow-700">
              <Link href={"/about"}>Learn More</Link>
            </Button>
          </div>
        </MaxWidthWrapper>

        {/* Vission Mission */}
        <MaxWidthWrapper className=" h-fit py-16 bg-gray-300 flex flex-col justify-center items-center space-y-8">
          <span
            className={cn(BlairM.className, "text-3xl lg:text-6xl font-bold")}
          >
            Vision & Mission
          </span>
          <div className="w-full flex flex-col lg:flex-row gap-4 p-4 px-8">
            <div className="w-full  lg:w-1/2 h-full flex flex-col space-y-4">
              <span
                className={cn(
                  BlairM.className,
                  "text-3xl lg:text-6xl font-bold text-center lg:text-left"
                )}
              >
                Vision
              </span>
              <ul className="list-disc pl-10 text-xl pb-8">
                <li> Provide Clear Ice all over Indonesia</li>
              </ul>
              <span
                className={cn(
                  BlairM.className,
                  "text-3xl lg:text-6xl font-bold text-center lg:text-left"
                )}
              >
                Mission
              </span>
              <ul className="list-disc pl-10 text-xl pb-8">
                <li>Open Branches all in Main Cities in Indonesia</li>
                <li>
                  Provide the best of service to all our customers Keep on
                  Learning,
                </li>
                <li>Growing and Expanding</li>
              </ul>
            </div>
            <div className="w-full  lg:w-1/2 h-full flex flex-col items-center">
              <Image
                className="rounded w-4/5 h-auto"
                src="/assets/cocktailTemp.jpg"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="mx-auto w-full max-w-screen-xl h-48 bg-no-repeat bg-cover bg-[url(/assets/bg3.JPG)]">
          <div className=" h-full w-full bg-black bg-opacity-50"></div>
        </div>

        {/* Founders */}
        <MaxWidthWrapper className="h-fit py-16 bg-gray-300 flex flex-col justify-center items-center space-y-8">
          <span
            className={cn(BlairM.className, "text-3xl lg:text-6xl font-bold")}
          >
            Our Founders
          </span>
          <div className="w-full flex  flex-col lg:flex-row justify-center items-center gap-32">
            {/* Image */}
            <div className="flex flex-col justify-center items-center gap-y-4">
              <Image
                className="rounded-full object-cover hover:shadow-lg w-80 h-80"
                src="/assets/cocktailTemp.jpg"
                width={1000}
                height={1000}
                alt=""
              />
              <span className={cn(BlairM.className, "text-3xl lg:text-5xl")}>
                Anand
              </span>
            </div>
            {/* Image */}
            <div className="flex flex-col justify-center items-center gap-y-4">
              <Image
                className="rounded-full object-cover hover:shadow-lg w-80 h-80"
                src="/assets/cocktailTemp.jpg"
                width={1000}
                height={1000}
                alt=""
              />
              <span className={cn(BlairM.className, "text-3xl lg:text-5xl")}>
                Himawan
              </span>
            </div>
          </div>
        </MaxWidthWrapper>
      </main>
    </>
  );
};

export default page;
