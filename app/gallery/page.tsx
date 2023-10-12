import PageFooter from '@/components/PageFooter'
import PageHeader from '@/components/PageHeader'
import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'


const BlairM = localFont({src: '../../fonts/BlairMedium.otf'})
const BlairL = localFont({src: '../../fonts/BlairLight.otf'})

const page = () => {
  return (
    <main>
        <div className='bg-gray-900'>
            <PageHeader/>
        </div>
        
        <section className='flex flex-col min-h-screen bg-gray-300'>
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

        <PageFooter/>
    </main>
  )
}

export default page