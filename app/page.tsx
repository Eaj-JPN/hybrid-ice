'use client'

import ScrollToTopButton from '@/components/ScrollToTopButton'

import Image from 'next/image'
import localFont from 'next/font/local'
import Link from 'next/link'

import Lenis from '@studio-freight/lenis'
import { motion,useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from 'react'
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'

// Local Fonts
const BlairM = localFont({src: '../fonts/BlairMedium.otf'})
const BlairL = localFont({src: '../fonts/BlairLight.otf'})

export default function Home() {

  // Parralax Effect
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Hero Text Effect
  const textY = useTransform(scrollYProgress, [0,1], ["0%", "150%"]);

  // Smooth Scrolling
  useEffect ( () => {
    const lenis = new Lenis()
  
    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);

  return (
    <main>
      <PageHeader/>
      
      {/* Landing Page */}
      <section ref={ref} id='Landing' className='m-0 flex flex-col min-h-screen h-screen bg-no-repeat bg-fill bg-[url(/assets/heroBg.png)] overflow-hidden'>
        <div className=' h-screen w-screen bg-black bg-opacity-30'>

          {/* Text */}
          <div className='flex h-screen items-center justify-center'>
            <motion.div style={{ y: textY}} className='text-center text-white w-4/6 space-y-8'>

              <div className={BlairM.className}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl">
                  CUSTOMIZE YOUR OWN ICE 
                  WITH US
                </h1>
              </div>

              <p className="text-xs md:text-base lg:text-lg leading-loose tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed sodales mi. Nullam pretium augue mollis ipsum pellentesque suscipit. Mauris sit amet eros quis erat volutpat tempus ut quis neque. Nullam euismod, ante ac sollicitudin lacinia, massa massa euismod felis
              </p>

              <Link href="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4">
                  Learn more
              </Link>         

            </motion.div>
          </div>

        </div>
      </section>

      {/* About Us */}
      <section id='About' className='pt-16 flex flex-col min-h-screen h-fit bg-no-repeat bg-cover bg-[url(/assets/bg1.png)]'>
      <div className='p-10 h-full lg:w-1/2 absolute right-0'>
        <div className='w-full mx-auto py-32 text-white'>

          {/* Title */}
          <div className={BlairL.className}>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-10'>
              About Us
            </h1>
          </div>

          {/* Descripton */}
          <p className="text-xs md:text-base lg:text-lg leading-loose tracking-wider mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed sodales mi. Nullam pretium augue mollis ipsum pellentesque suscipit. Mauris sit amet eros quis erat volutpat tempus ut quis neque. Nullam euismod, ante ac sollicitudin lacinia, massa massa euismod felis, hendrerit fermentum risus nisl a orci.
          </p>
              
          <p className="text-xs md:text-base lg:text-lg leading-loose tracking-wider mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed sodales mi. Nullam pretium augue mollis ipsum pellentesque suscipit. Mauris sit amet eros quis erat volutpat tempus ut quis neque. Nullam euismod, ante ac sollicitudin lacinia, massa massa euismod felis,
          </p>

          <div className={BlairM.className}>
            <a href='/about' className='text-yellow-500 text-base lg:text-xl underline'>
              MORE ABOUT US
            </a>
          </div>

        </div>
      </div>
      </section>

      {/* Our Products */}
      <section id='Product' className='pt-16 flex flex-col items-center justify-center min-h-screen h-fit bg-gray-300 overflow-hidden'>
      <div className='p-10 h-fit flex items-center text-center justify-center'>
            <div className='w-full mx-auto space-y-10'>

              {/* Title */}
              <div className={BlairL.className}>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black'>
                  Our Products
                </h1>
              </div>

              {/* Descripton */}
              <p className="text-xs md:text-base lg:text-lg leading-loose tracking-wider px-10 lg:px-32">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed sodales mi. Nullam pretium augue mollis ipsum pellentesque suscipit. Mauris sit amet eros quis erat volutpat tempus ut quis neque. Nullam euismod, ante ac sollicitudin lacinia, massa massa euismod felis
              </p>
              
              {/* Images Grid*/}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-10 lg:px-32">

                {/* Image */}
                <Link href={'/'} className="h-auto rounded space-y-5">
                  <Image 
                    className='rounded-lg object-cover hover:shadow-lg '
                    src='/assets/ProductCube.png'
                    width={1000}
                    height={1000}
                    alt=""
                    />
                  <div className={BlairL.className}>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-black'>
                      Cube Ice
                    </h1>
                  </div>
                </Link>

                {/* Image */}
                <Link href={'/'} className="h-auto rounded space-y-5">
                  <Image 
                    className='rounded-lg object-cover hover:shadow-lg '
                    src='/assets/ProductRect.png'
                    width={1000}
                    height={1000}
                    alt=""
                    />
                  <div className={BlairL.className}>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-black'>
                      Rectangle Ice
                    </h1>
                  </div>
                </Link>

                {/* Image */}
                <Link href={'/'} className="h-auto rounded space-y-5">
                  <Image 
                    className='rounded-lg object-cover hover:shadow-lg '
                    src='/assets/ProductSphr.png'
                    width={1000}
                    height={1000}
                    alt=""
                    />
                  <div className={BlairL.className}>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-black'>
                      Sphere Ice
                    </h1>
                  </div>
                </Link>
                  
              </div>

            </div>
        </div>
      </section>

      {/* Customers */}
      <section id='Customer' className='pt-16 flex flex-col items-center justify-center min-h-screen h-fit bg-no-repeat bg-cover bg-[url(/assets/bg2.png)]'>
        <div className='p-10 h-fit flex items-center text-center justify-center'>
            <div className='w-full mx-auto space-y-10'>

              {/* Title */}
              <div className={BlairL.className}>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>
                  Our Customers
                </h1>
              </div>
              
              {/* Images Grid*/}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 ">

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer02.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer03.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer04.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer05.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer06.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer07.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer08.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer02.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer03.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

              </div>

            </div>
        </div>
      </section>

      {/* Gallery */}
      <section id='Gallery' className='pt-16 flex flex-col items-center justify-center min-h-screen h-fit bg-gray-300 overflow-hidden'>
        <div className='p-10 h-fit flex items-center text-center justify-center'>
            <div className='w-full mx-auto space-y-10'>

              {/* Title */}
              <div className={BlairL.className}>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black'>
                  Gallery
                </h1>
              </div>
              
              {/* Images Grid*/}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-10 xl:px-32">

                {/* Image */}
                <div className="h-auto max-w-full  hover:shadow-md">
                    <Image 
                      className='rounded-lg'
                      src='/assets/image1.webp'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-auto max-w-full  hover:shadow-md">
                    <Image 
                      className='rounded-lg'
                      src='/assets/image3.webp'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-auto max-w-full  hover:shadow-md">
                    <Image 
                      className='rounded-lg'
                      src='/assets/image5.webp'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-auto max-w-full  hover:shadow-md">
                    <Image 
                      className='rounded-lg'
                      src='/assets/image2.webp'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-auto max-w-full  hover:shadow-md">
                    <Image 
                      className='rounded-lg'
                      src='/assets/image4.webp'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-auto max-w-full  hover:shadow-md">
                    <Image 
                      className='rounded-lg'
                      src='/assets/image2.webp'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-auto max-w-full  hover:shadow-md">
                    <Image 
                      className='rounded-lg'
                      src='/assets/image4.webp'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-auto max-w-full  hover:shadow-md">
                    <Image 
                      className='rounded-lg'
                      src='/assets/image3.webp'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

              </div>

            </div>
        </div>
      </section>

      <PageFooter/>
      <ScrollToTopButton/>

    </main>
  )
}
