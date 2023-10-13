'use client'

import PageFooter from '@/components/PageFooter'
import PageHeader from '@/components/PageHeader'
import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from '@/components/ui/textarea'


import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from 'react'

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
            <PageHeader/>
        </div>
        
        <section className='flex flex-col min-h-screen bg-gray-300 p-48'>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-col-2 xl:grid-cols-2 grid-rows-1 gap-4">
              <div className=" text-gray-900 space-y-8 pb-12">
                <h3 className='text-8xl'>Contact Us</h3>
                <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. Provident eum nostrum nulla neque. Incidunt ducimus laboriosam voluptatibus expedita, temporibus earum laudantium quibusdam! </p>
              </div>
              <div className=" ">
                <Card className="w-full bg-gray-900 text-white">
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. 
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Anna Rose" required/>
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Anna Rose" required/>
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" required/>
                    </div>
                    <div className='space-y-1'>
                    <Label htmlFor="topic">What can we help you with?</Label>
                    <Textarea/>
                    </div>
                  </CardContent>

                  <CardFooter>
                      <Button>Submit</Button>
                  </CardFooter>
                </Card>
              </div>
          </div>
            

        </section>

        <PageFooter/>
    </main>

  )
}

export default page
