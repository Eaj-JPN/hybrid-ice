import PageFooter from '@/components/PageFooter'
import PageHeader from '@/components/PageHeader'
import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'


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

        <PageFooter/>
    </main>
  )
}

export default page