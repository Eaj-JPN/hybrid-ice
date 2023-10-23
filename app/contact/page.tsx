'use client'

import PageFooter from '@/components/PageFooter'
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
import PageHeaderAlt from '@/components/PageHeaderAlt'
import { BsWhatsapp,BsInstagram } from 'react-icons/bs';

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
        
        <section className='flex flex-col min-h-screen bg-gray-300 p-16 lg:p-48'>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-col-2 xl:grid-cols-2 grid-rows-1 gap-4">
              <div className=" text-gray-900 space-y-4 pb-12">
                <h3 className='text-4xl md:text-5xl lg:text-6xl'>
                  Contact Us
                </h3>
                <p className='text-xs md:text-base lg:text-lg '>
                  Connect with us! Have questions, feedback, or inquiries? Reach out through our user-friendly contact form. We're here to assist you promptly and ensure your experience with us is seamless and satisfying.
                </p>
                <p className='text-xs md:text-base lg:text-lg inline-flex items-center'>
                  <BsWhatsapp/> &nbsp; +0812-1777-1930
                </p>
                <p className='text-xs md:text-base lg:text-lg flex items-center'>
                  <BsInstagram/> &nbsp; @hybridiceking
                </p>
                
              </div>
              <div className=" ">
                <Card className="w-full bg-gray-900 text-white">
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>
                      Complete form with name, email, message for swift assistance. Thank you!                    </CardDescription>
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
