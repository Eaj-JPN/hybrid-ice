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
                <div className="grid grid-cols-1 grid-rows-3 gap-4">
                    {/* Cube */}
                    <div className='lg:flex gap-x-16 p-8'>
                      {/* Image */}
                      <div className='h-fit w-auto flex justify-center text-center items-center'>
                      <Image 
                        className=' rounded-lg object-cover hover:shadow-lg '
                        src='/assets/ProductCube.png'
                        width={1000}
                        height={1000}
                        alt=""
                        />
                      </div>

                      {/* Description */}
                      <div className='pt-4'>
                        <div className='text-black space-y-4'>
                            <div className={BlairL.className}>
                                <h1 className='text-3xl font-bold '>
                                    CUBE
                                </h1>
                            </div>
                            <p className='text-xl font-bold'>
                                RP. 6,500-
                            </p>
                            <p className='text-l'>
                            Maecenas et auctor magna. In porttitor sapien euismod ex lacinia imperdiet. Nullam tincidunt lobortis ante, non vehicula diam molestie a. Quisque semper sit amet quam blandit dignissim. Nam nec porta est. Nulla nunc nulla, ultricies eu urna non, tincidunt facilisis justo. Phasellus ut neque consequat ante faucibus posuere.
                            </p>
                            <p className='text-xl font-bold'>
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

                    {/* Rectangle */}
                    <div className='lg:flex gap-x-16 p-8'>
                      {/* Image */}
                      <div className='h-fit w-auto flex justify-center text-center items-center'>
                      <Image 
                        className=' rounded-lg object-cover hover:shadow-lg '
                        src='/assets/ProductRect.png'
                        width={1000}
                        height={1000}
                        alt=""
                        />
                      </div>

                      {/* Description */}
                      <div className='pt-4'>
                        <div className='text-black space-y-4'>
                            <div className={BlairL.className}>
                                <h1 className='text-3xl font-bold '>
                                    Rectangle
                                </h1>
                            </div>
                            <p className='text-xl font-bold'>
                                RP. 6,500-
                            </p>
                            <p className='text-l'>
                            Maecenas et auctor magna. In porttitor sapien euismod ex lacinia imperdiet. Nullam tincidunt lobortis ante, non vehicula diam molestie a. Quisque semper sit amet quam blandit dignissim. Nam nec porta est. Nulla nunc nulla, ultricies eu urna non, tincidunt facilisis justo. Phasellus ut neque consequat ante faucibus posuere.
                            </p>
                            <p className='text-xl font-bold'>
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

                    {/* Sphere */}
                    <div className='lg:flex gap-x-16 p-8'>
                      {/* Image */}
                      <div className='h-fit w-auto flex justify-center text-center items-center'>
                      <Image 
                        className=' rounded-lg object-cover hover:shadow-lg '
                        src='/assets/ProductSphr.png'
                        width={1000}
                        height={1000}
                        alt=""
                        />
                      </div>

                      {/* Description */}
                      <div className='pt-4'>
                        <div className='text-black space-y-4'>
                            <div className={BlairL.className}>
                                <h1 className='text-3xl font-bold '>
                                    Sphere
                                </h1>
                            </div>
                            <p className='text-xl font-bold'>
                                RP. 6,500-
                            </p>
                            <p className='text-l'>
                            Maecenas et auctor magna. In porttitor sapien euismod ex lacinia imperdiet. Nullam tincidunt lobortis ante, non vehicula diam molestie a. Quisque semper sit amet quam blandit dignissim. Nam nec porta est. Nulla nunc nulla, ultricies eu urna non, tincidunt facilisis justo. Phasellus ut neque consequat ante faucibus posuere.
                            </p>
                            <p className='text-xl font-bold'>
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
          </div>
        </section>

        <PageFooter/>
    </main>
  )
}

export default page