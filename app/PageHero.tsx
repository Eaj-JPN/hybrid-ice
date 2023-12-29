import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import localFont from "next/font/local";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";

const BlairM = localFont({ src: "../fonts/BlairMedium.otf" });

const PageHero = () => {
  // Parralax Effect
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Hero Text Effect
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <MaxWidthWrapper
        id="Landing"
        className="bg-no-repeat bg-fill bg-[url(/assets/heroBg.png)] flex flex-col justify-center items-center overflow-hidden"
      >
        <motion.div
          ref={ref}
          style={{ y: textY }}
          className="text-white flex flex-col text-center space-y-4 items-center"
        >
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
        </motion.div>
      </MaxWidthWrapper>
    </>
  );
};

export default PageHero;
