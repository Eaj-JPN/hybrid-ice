'use client'

import React from 'react'
import { useState } from "react";

import localFont from 'next/font/local'
import Image from 'next/image';
import { Link } from 'react-scroll';


const BlairM = localFont({src: '../fonts/BlairMedium.otf'})

const PageHeader = () => {
  const [isOpen, setOpen] = useState(true);
  const toggleMenu = () => setOpen(!isOpen);

  return (
    <nav className=" top-0 left-0 right-0">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <Link href="/" className="flex items-center">
            <div className='w-32'>
            <Image 
                src='/assets/LogoWhite.png'
                alt=""
                width={750}
                height={500}/>
            </div>
        </Link>

        {/* Hamburger Button */}
        <button 
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">

            {/* Icon */}
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            
        </button>

        {/* Navbar Buttons */}
        {isOpen && (
        <div className=" w-full md:block md:w-auto" id="navbar-default">

            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li className={BlairM.className}>
                    <Link activeClass="active" spy={true} to="Landing" smooth={true} offset={0} duration={1000} 
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0" aria-current="page">
                        HOME
                    </Link>
                </li>

                <li className={BlairM.className}>
                    <Link activeClass="active" spy={true} to="About" smooth={true} offset={0} duration={1000} 
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">
                        ABOUT US
                    </Link>
                </li>

                <li className={BlairM.className}>
                    <Link activeClass="active" spy={true} to="Product" smooth={true} offset={0} duration={1000} 
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">
                        PRODUCTS
                    </Link>
                </li>

                <li className={BlairM.className}>
                    <Link activeClass="active" spy={true} to="Customer" smooth={true} offset={-150} duration={1000} 
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">
                        Customer
                    </Link>
                </li>

                <li className={BlairM.className}>
                    <Link activeClass="active" spy={true} to="Gallery" smooth={true} offset={0} duration={1000} 
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">
                        GALLERY
                    </Link>
                </li>

                <li className={BlairM.className}>
                    <a href="/contact" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-opacity-30 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">
                        CONTACT
                    </a>
                </li>
            </ul>
        </div>
        )}
    </div>
    </nav>
  )
}

export default PageHeader