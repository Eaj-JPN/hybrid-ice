import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import { MoreVertical } from "lucide-react";

const BlairM = localFont({ src: "../fonts/BlairMedium.otf" });

const PageCustomer = () => {
  return (
    <>
      <MaxWidthWrapper
        id="Customer"
        className="h-fit py-16 flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover bg-[url(/assets/bg2.png)] gap-y-8"
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
          {/* More */}
          <div className="bg-gray-500 bg-opacity-25 rounded-lg hover:shadow-xl w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
            <Link href={"/customer"}>
              <MoreVertical className="w-24 h-24 text-white" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default PageCustomer;
