'use client'

import PageFooter from '@/components/PageFooter'

import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'

import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from 'react'
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
        
        <section id='Customer' className='pt-16 flex flex-col items-center justify-center min-h-screen h-fit bg-no-repeat bg-cover bg-[url(/assets/bg2.png)]'>
        <div className='p-10 h-fit flex items-center text-center justify-center'>
            <div className='w-full mx-auto space-y-10'>

              {/* Title */}
              <div className={BlairL.className}>
                <h1 className='text-4xl lg:text-5xl font-bold text-white'>
                  Our Customers
                </h1>
              </div>
              
              {/* Images Grid*/}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 ">

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/AA01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/acta01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/angelanddemon01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/barcelona01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/biko01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/blackpond01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/burabura01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/cafekitsunne01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/cantinero01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/carrots01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/casaalba01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>
                
                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/contra01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/dingdong01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/golddragon01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/hause01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/inferno01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/kempinski01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/leon01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/limelight01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/mensa01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/miglia01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/mrfox01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/nirwana01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/nonnabona01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/oku01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/osteriagia01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/oysterdealer01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/phoenix01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/potboyaru01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/ristorantealba01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/semaja01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/skye01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/socialgarden01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/socialhouse01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/sosogood01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/spillstill01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/stalk01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/sudestada01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/thegoldentooth01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/vol01.png'
                      width={1000}
                      height={1000}
                      alt=""
                      />
                </div>

                {/* Image */}
                <div className="h-28 md:h-32 lg:h-40 max-w-full flex items-center justify-center hover:shadow-md rounded bg-gray-500 bg-opacity-25 o">
                    <Image 
                    className='w-auto max-h-full'
                      src='/assets/clientLogo/zodiac01.png'
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
    </main>
  )
}

export default page
