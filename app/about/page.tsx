'use client'

import PageFooter from '@/components/PageFooter'

import React from 'react'
import localFont from 'next/font/local'
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
        
        <section id='Landing' className='m-0 flex flex-col min-h-screen h-screen bg-no-repeat bg-fill bg-[url(/assets/heroBg.png)] overflow-hidden'>
        <div className=' h-screen w-screen bg-black bg-opacity-30'>

          {/* Text */}
          <div className='flex h-screen items-center justify-center'>
            <div className='text-center text-white w-4/6 space-y-8'>

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

            </div>
          </div>

        </div>
      </section>

        <PageFooter/>
    </main>
  )
}

export default page
