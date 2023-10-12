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
        
        <section className='flex flex-col h-fit bg-no-repeat bg-cover bg-[url(/assets/bg2.png)]'>
        <div className='p-10 h-fit flex items-center text-center justify-center'>
            <div className='w-full mx-auto space-y-10'>

              {/* Title */}
              <div className={BlairL.className}><h1 className='font-bold text-6xl text-white'>Our Customers</h1></div>
              
              {/* Images Grid*/}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-32">

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

        <PageFooter/>
    </main>
  )
}

export default page