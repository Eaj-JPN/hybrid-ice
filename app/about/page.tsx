import PageFooter from '@/components/PageFooter'
import PageHeader from '@/components/PageHeader'
import React from 'react'
import localFont from 'next/font/local'

const BlairM = localFont({src: '../../fonts/BlairMedium.otf'})
const BlairL = localFont({src: '../../fonts/BlairLight.otf'})

const page = () => {
  return (
    <main>
        <div className='bg-gray-900'>
            <PageHeader/>
        </div>
        
        <section className='flex flex-col min-h-screen bg-no-repeat bg-cover bg-[url(/assets/heroBg.png)]'>

            <div className='flex h-screen items-center justify-center'>
                <div className='text-center text-white w-4/6 space-y-8'>
                <div className={BlairM.className}><h1 className="text-6xl">
                    CUSTOMIZE YOUR OWN ICE 
                    WITH US
                </h1></div>
                <p className="text-l leading-loose tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed sodales mi. Nullam pretium augue mollis ipsum pellentesque suscipit. Mauris sit amet eros quis erat volutpat tempus ut quis neque. Nullam euismod, ante ac sollicitudin lacinia, massa massa euismod felis,</p>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4">
                    Learn more
                </a>            
                </div>
            </div>

        </section>

        <PageFooter/>
    </main>
  )
}

export default page