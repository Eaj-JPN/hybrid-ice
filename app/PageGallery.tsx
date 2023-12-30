import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import { MoreVertical } from "lucide-react";

const BlairM = localFont({ src: "../fonts/BlairMedium.otf" });

const PageGallery = () => {
  return (
    <>
      <MaxWidthWrapper
        id="Gallery"
        className="h-fit py-16  flex flex-col justify-center items-center bg-gray-300 gap-y-8"
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
          {/* More */}
          <Link
            href={"/gallery"}
            className="bg-gray-500 bg-opacity-25 hover:shadow-xl w-40 h-40 lg:w-72 lg:h-72 flex items-center justify-center"
          >
            <MoreVertical className="w-24 h-24 text-white" />
          </Link>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default PageGallery;
