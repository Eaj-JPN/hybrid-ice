'use client'

import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'
import ScrollToTopButton from '@/components/ScrollToTopButton'

import Image from 'next/image'
import localFont from 'next/font/local'
import Link from 'next/link'

import Lenis from '@studio-freight/lenis'
import { motion,useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from 'react'

const BlairM = localFont({src: '../fonts/BlairMedium.otf'})
const BlairL = localFont({src: '../fonts/BlairLight.otf'})

export default function Home() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const textY = useTransform(scrollYProgress, [0,1], ["0%", "150%"]);

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

      {/* Landing Page */}
      <section ref={ref} id='Landing' className='flex flex-col min-h-screen bg-no-repeat bg-cover bg-[url(/assets/heroBg.png)] overflow-hidden'>
        <div className=' h-screen w-full bg-black bg-opacity-30'>
          <PageHeader/>

          <div className='flex h-screen items-center justify-center'>
            <motion.div style={{ y: textY}} className='text-center text-white w-4/6 space-y-8'>
              <div className={BlairM.className}><h1 className="text-6xl">
                CUSTOMIZE YOUR OWN ICE 
                WITH US
              </h1></div>
              <p className="text-l leading-loose tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed sodales mi. Nullam pretium augue mollis ipsum pellentesque suscipit. Mauris sit amet eros quis erat volutpat tempus ut quis neque. Nullam euismod, ante ac sollicitudin lacinia, massa massa euismod felis,</p>
              <a href="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4">
                  Learn more
              </a>            
            </motion.div>
          </div>

        </div>
      </section>

      {/* About Us */}
      <section id='About' className='flex flex-col inset-0 h-fit min-h-screen bg-no-repeat bg-cover bg-[url(/assets/bg1.png)]'>
      <div className='p-10 h-screen max-lg:w-1/2 lg:w-1/2 md:w-full sm:w-full absolute right-0'>
            <div className='w-full mx-auto py-32 text-white'>

              {/* Title */}
              <div className={BlairL.className}><h1 className='font-bold text-6xl mb-10'>About Us</h1></div>

              {/* Descripton */}
              <p className="text-l leading-loose tracking-wider mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed sodales mi. Nullam pretium augue mollis ipsum pellentesque suscipit. Mauris sit amet eros quis erat volutpat tempus ut quis neque. Nullam euismod, ante ac sollicitudin lacinia, massa massa euismod felis, hendrerit fermentum risus nisl a orci.</p>
              
              <p className="text-l leading-loose tracking-wider mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed sodales mi. Nullam pretium augue mollis ipsum pellentesque suscipit. Mauris sit amet eros quis erat volutpat tempus ut quis neque. Nullam euismod, ante ac sollicitudin lacinia, massa massa euismod felis,</p>

              <div className={BlairM.className}><a href='/about' className='text-yellow-500 text-xl underline'>MORE ABOUT US</a></div>

            </div>
        </div>
      </section>

      {/* Our Products */}
      <section id='Product' className='flex flex-col min-h-screen bg-gray-300 overflow-hidden'>
      <div className='p-10 h-fit flex items-center text-center justify-center'>
            <div className='w-full mx-auto space-y-10'>

              {/* Title */}
              <div className={BlairL.className}><h1 className='font-bold text-6xl text-black'>Our Products</h1></div>

              {/* Descripton */}
              <p className="text-l leading-loose tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed sodales mi. Nullam pretium augue mollis ipsum pellentesque suscipit. Mauris sit amet eros quis erat volutpat tempus ut quis neque. Nullam euismod, ante ac sollicitudin lacinia, massa massa euismod felis,</p>
              
              {/* Images Grid*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-32">

                {/* Image */}
                <Link href={'/'} className="h-auto rounded space-y-5">
                  <Image 
                    className='rounded-lg object-cover hover:shadow-lg '
                    src='/assets/ProductCube.png'
                    width={1000}
                    height={1000}
                    alt=""
                    />
                  <div className={BlairL.className}><h1 className='font-bold text-3xl text-black'>Cube Ice</h1></div>
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
                  <div className={BlairL.className}><h1 className='font-bold text-3xl text-black'>Rectangle Ice</h1></div>
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
                  <div className={BlairL.className}><h1 className='font-bold text-3xl text-black'>Sphere Ice</h1></div>
                </Link>
                  
              </div>

            </div>
        </div>
      </section>

      {/* Customers */}
      <section id='Customer' className='flex flex-col h-fit bg-no-repeat bg-cover bg-[url(/assets/bg2.png)]'>
        <div className='p-10 h-fit flex items-center text-center justify-center'>
            <div className='w-full mx-auto space-y-10'>

              {/* Title */}
              <div className={BlairL.className}><h1 className='font-bold text-6xl text-white'>Our Customers</h1></div>
              
              {/* Images Grid*/}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">

                {/* Image */}
                <div className="h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer02.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer03.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer04.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer05.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer06.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer07.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25">
                    <Image 
                      className='rounded-lg object-scale-down'
                      src='/assets/customer08.png'
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
      <section id='Gallery' className='flex flex-col min-h-screen bg-gray-300 overflow-hidden'>
        <div className='p-10 h-fit flex items-center text-center justify-center'>
            <div className='w-full mx-auto space-y-10'>

              {/* Title */}
              <div className={BlairL.className}><h1 className='font-bold text-6xl text-black'>Gallery</h1></div>
              
              {/* Images Grid*/}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-32">

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

      {/* Footer */}
      <PageFooter/>

      <ScrollToTopButton/>

    </main>
  )
}
