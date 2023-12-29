"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import PageHero from "./PageHero";
import PageAbout from "./PageAbout";
import PageProduct from "./PageProduct";
import PageCustomer from "./PageCustomer";
import PageGallery from "./PageGallery";
import PageNav from "@/components/PageNav";

export default function Home() {
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
        <PageNav />
        <PageHero />
        <PageAbout />
        <PageProduct />
        <PageCustomer />
        <PageGallery />
      </main>
    </>
  );
}
