import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

const BlairM = localFont({ src: "../fonts/BlairMedium.otf" });

const PageProduct = () => {
  return (
    <>
      <MaxWidthWrapper
        id="Product"
        className="h-fit py-16 flex justify-center items-center bg-gray-300 flex-col space-y-4"
      >
        <span
          className={cn(BlairM.className, "text-3xl lg:text-6xl font-bold")}
        >
          OUR PRODUCTS
        </span>
        <span className="text-center w-full lg:w-3/4">
          We offers meticulously hand-cut, premium clear ice in cube,
          rectangular, and custom shapes. Elevate your beverages with our
          high-quality, distinctive ice for an exceptional customer experience.
        </span>
        <div className="w-3/4 grid grid-row-2 lg:grid-cols-2 place-items-center">
          {/* Image */}
          <Link
            href={"/product"}
            className="w-full-h-full p-4 flex flex-col items-center space-y-8"
          >
            <Image
              src="/assets/ProductCube.png"
              width={1000}
              height={1000}
              alt="Product Cube"
              className="rounded-lg hover:shadow-2xl"
            />
            <span className={cn(BlairM.className, "text-3xl text-center")}>
              Cube Ice
            </span>
          </Link>
          {/* Image */}
          <Link
            href={"/product"}
            className="w-full-h-full p-4 flex flex-col items-center space-y-8"
          >
            <Image
              src="/assets/ProductRect.png"
              width={1000}
              height={1000}
              alt="Product Cube"
              className="rounded-lg hover:shadow-2xl"
            />
            <span className={cn(BlairM.className, "text-3xl text-center")}>
              Rectangle Ice
            </span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default PageProduct;
