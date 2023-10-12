import React from 'react'
import { Link } from 'react-scroll';
import Image from 'next/image';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';


const PageFooter = () => {
  return (
    <footer className="bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                    <div className='w-32'>
                    <Image 
                        src='/assets/LogoWhite.png'
                        alt=""
                        width={750}
                        height={500}/>
                    </div>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        
                        <li className="mb-4">
                        <Link activeClass="active" spy={true} to="Product" smooth={true} offset={0} duration={1000} className="hover:underline">
                            Products
                        </Link>
                        </li>
                        
                        <li className="mb-4">
                        <Link activeClass="active" spy={true} to="Customer" smooth={true} offset={-150} duration={1000} className="hover:underline">
                            Customer
                        </Link>
                        </li>
                        
                        <li className="mb-4">
                        <Link activeClass="active" spy={true} to="Gallery" smooth={true} offset={0} duration={1000} className="hover:underline">
                            Gallery
                        </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="/" className="hover:underline">Facebook</a>
                        </li>
                        <li className="mb-4">
                            <a href="/" className="hover:underline">Twitter</a>
                        </li>
                        <li className="mb-4">
                            <a href="/" className="hover:underline">Instagram</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Hybrid Ice™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <BsFacebook/>
                    <span className="sr-only">Facebook page</span>
                </a>
                
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <BsInstagram/>
                    <span className="sr-only">Instagram page</span>
                </a>
                
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <BsTwitter/>
                    <span className="sr-only">Twitter page</span>
                </a>
                
            </div>
        </div>
        </div>
    </footer>

  )
}

export default PageFooter