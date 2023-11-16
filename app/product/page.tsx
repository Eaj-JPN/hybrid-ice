'use client'

import React from 'react'
import localFont from 'next/font/local'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Lenis from '@studio-freight/lenis'

import PageFooter from '@/components/PageFooter'
import PageHeaderAlt from '@/components/PageHeaderAlt'

const BlairM = localFont({src: '../../fonts/BlairMedium.otf'})
const BlairL = localFont({src: '../../fonts/BlairLight.otf'})

const page = () => {

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
        <div className='bg-gray-900'>
          <PageHeaderAlt/>
        </div>

        {/* Landing */}
        <section className='m-0 flex flex-col min-h-screen h-screen bg-no-repeat bg-fill bg-[url(/assets/bg4.jpg)] overflow-hidden'>
          <div className=' h-screen w-screen bg-black bg-opacity-50'>

            {/* Text */}
            <div className='flex h-screen items-center justify-center'>
              <div className='text-center text-white w-4/6 space-y-8'>

                <div className={BlairM.className}>
                  <h1 className="text-5xl lg:text-6xl">
                    OUR PRODUCTS
                  </h1>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Founders */}
        <section className='py-16 px-32 flex flex-col items-center justify-center min-h-screen h-fit bg-gray-300 overflow-hidden'>
        <div className='p-10 h-fit flex items-center justify-center'>
              <div className='w-full mx-auto space-y-10'>

                {/* Title */}
                <div className={BlairL.className}>
                  <h1 className='text-4xl lg:text-5xl font-bold text-black pb-10 text-center'>
                    SIZES AND PRICES
                  </h1>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-3 gap-x-16 gap-y-16 lg:gap-y-32">

                    {/* Image 1 */}
                    <div className="flex justify-center">
                        <Image 
                            className='h-fit w-auto rounded-lg object-cover hover:shadow-lg '
                            src='/assets/ProductCube.png'
                            width={1000}
                            height={1000}
                            alt=""
                            />
                    </div>

                    {/* Description 1 */}
                    <div>
                        <div className='text-black space-y-4'>
                            <div className={BlairL.className}>
                                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-4'>
                                    CUBE
                                </h1>
                            </div>
                            <p className='text-2xl font-bold'>
                                RP. 6,500-
                            </p>
                            <p>
                            Maecenas et auctor magna. In porttitor sapien euismod ex lacinia imperdiet. Nullam tincidunt lobortis ante, non vehicula diam molestie a. Quisque semper sit amet quam blandit dignissim. Nam nec porta est. Nulla nunc nulla, ultricies eu urna non, tincidunt facilisis justo. Phasellus ut neque consequat ante faucibus posuere.
                            </p>
                            <p className='text-2xl font-bold'>
                                Sizes Available
                            </p>
                            <ul className='list-disc pl-8'>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Image 2 */}
                    <div className="flex justify-center">
                        <Image 
                            className='h-fit w-auto rounded-lg object-cover hover:shadow-lg '
                            src='/assets/ProductRect.png'
                            width={1000}
                            height={1000}
                            alt=""
                            />
                    </div>

                    {/* Description 2 */}
                    <div>
                        <div className='text-black space-y-4'>
                            <div className={BlairL.className}>
                                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-4'>
                                    Rectangle
                                </h1>
                            </div>
                            <p className='text-2xl font-bold'>
                                RP. 6,500-
                            </p>
                            <p>
                            Maecenas et auctor magna. In porttitor sapien euismod ex lacinia imperdiet. Nullam tincidunt lobortis ante, non vehicula diam molestie a. Quisque semper sit amet quam blandit dignissim. Nam nec porta est. Nulla nunc nulla, ultricies eu urna non, tincidunt facilisis justo. Phasellus ut neque consequat ante faucibus posuere.
                            </p>
                            <p className='text-2xl font-bold'>
                                Sizes Available
                            </p>
                            <ul className='list-disc pl-8'>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                            </ul>
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="flex justify-center">
                        <Image 
                            className='h-fit w-auto rounded-lg object-cover hover:shadow-lg '
                            src='/assets/ProductSphr.png'
                            width={1000}
                            height={1000}
                            alt=""
                            />
                    </div>

                    {/* Description 3 */}
                    <div>
                        <div className='text-black space-y-4'>
                            <div className={BlairL.className}>
                                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-4'>
                                    Sphere
                                </h1>
                            </div>
                            <p className='text-2xl font-bold'>
                                RP. 6,500-
                            </p>
                            <p>
                            Maecenas et auctor magna. In porttitor sapien euismod ex lacinia imperdiet. Nullam tincidunt lobortis ante, non vehicula diam molestie a. Quisque semper sit amet quam blandit dignissim. Nam nec porta est. Nulla nunc nulla, ultricies eu urna non, tincidunt facilisis justo. Phasellus ut neque consequat ante faucibus posuere.
                            </p>
                            <p className='text-2xl font-bold'>
                                Sizes Available
                            </p>
                            <ul className='list-disc pl-8'>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                                <li>4x4x4</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
              </div>
          </div>
        </section>

        <PageFooter/>
    </main>
  )
}

export default page