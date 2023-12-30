import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";
import Image from "next/image";

const BlairM = localFont({ src: "../fonts/BlairMedium.otf" });

const PageNavAlt = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <div className="absolute z-10 top-0 w-full h-24 bg-black bg-opacity-70 flex flex-row justify-between p-4">
        <Link href={"/"}>
          <Image
            src="/assets/LogoWhite.png"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-auto h-16"
          />
        </Link>
        <div
          className={cn(
            BlairM.className,
            "invisible lg:visible flex flex-row justify-center items-center h-full w-fit text-white space-x-8"
          )}
        >
          <Link href="/" className="hover:underline hover:text-yellow-700">
            HOME
          </Link>
          <Link href="/about" className="hover:underline hover:text-yellow-700">
            ABOUT US
          </Link>
          <Link
            href="/product"
            className="hover:underline hover:text-yellow-700"
          >
            PRODUCT
          </Link>
          <Link
            href="/customer"
            className="hover:underline hover:text-yellow-700"
          >
            CUSTOMER
          </Link>
          <Link
            href="/gallery"
            className="hover:underline hover:text-yellow-700"
          >
            GALLERY
          </Link>
          <a
            href="https://wa.me/+6281217771930"
            className="hover:underline hover:text-yellow-700"
          >
            CONTACT US
          </a>
        </div>

        <Sheet>
          <SheetTrigger
            className={`fixed top-4 right-4 z-10 rounded-full p-7 outline-none transition-opacity duration-1000 bg-black bg-opacity-70
            ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <AlignJustify className="text-white" />
          </SheetTrigger>

          <SheetTrigger className="visible lg:invisible fixed top-4 right-4 z-10 rounded-full p-7 outline-nonebg-opacity-70">
            <AlignJustify className="text-white" />
          </SheetTrigger>

          <SheetContent className="gap-y-16">
            <SheetHeader className="items-center">
              <Image
                src="/assets/LogoBlack.png"
                width={1000}
                height={1000}
                alt="Logo"
                className="w-48 h-auto"
              />
            </SheetHeader>
            <div className="flex flex-col gap-y-8 py-4">
              <Link href="/" className="hover:underline hover:text-yellow-700">
                HOME
              </Link>
              <Link
                href="/about"
                className="hover:underline hover:text-yellow-700"
              >
                ABOUT US
              </Link>
              <Link
                href="/product"
                className="hover:underline hover:text-yellow-700"
              >
                PRODUCT
              </Link>
              <Link
                href="/customer"
                className="hover:underline hover:text-yellow-700"
              >
                CUSTOMER
              </Link>
              <Link
                href="/gallery"
                className="hover:underline hover:text-yellow-700"
              >
                GALLERY
              </Link>
              <a
                href="https://wa.me/+6281217771930"
                className="hover:underline hover:text-yellow-700"
              >
                CONTACT US
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default PageNavAlt;
