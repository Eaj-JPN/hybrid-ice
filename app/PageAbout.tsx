import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Link from "next/link";

const BlairM = localFont({ src: "../fonts/BlairMedium.otf" });

const PageAbout = () => {
  return (
    <>
      <MaxWidthWrapper
        id="About"
        className="flex justify-center items-center bg-no-repeat bg-cover bg-[url(/assets/bg1.png)]"
      >
        <div className="w-full min-h-screen flex flex-row gap-x-2 lg:justify-end items-center ">
          <div className="w-full lg:w-1/2 h-full flex flex-col space-y-4 text-white px-4">
            <span
              className={cn(BlairM.className, "text-3xl lg:text-6xl font-bold")}
            >
              ABOUT US
            </span>
            <span className="">
              We focus on the provision of High-quality, Hand-cut, Clear ice,
              from Cube, Rectangular and Bespoken shapes.Our Goal is not only
              enable you to immediately differentiate your drinks, but also
              enhance your carefully curated customer experience.
            </span>
            <span className="">
              At Hybrid ICE, we're dedicated to redefining your beverage
              experience. Our artisanal, crystal-clear ice, available in various
              shapes, sets a new standard. Elevate your drinks and leave a
              lasting impression.
            </span>
            <Link
              href={"/about"}
              className="text-yellow-600 hover:text-yellow-700 underline text-xl font-bold"
            >
              {" "}
              More About Us
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default PageAbout;
