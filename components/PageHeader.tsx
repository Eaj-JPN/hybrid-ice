"use client";

import React from "react";
import { useState, useEffect, useMemo, useRef } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MenuIcon } from "lucide-react";

const BlairM = localFont({ src: "../fonts/BlairMedium.otf" });

const PageHeader = () => {
  // Responsive
  const [menuIcon, setMenuIcon] = useState(false);

  const smallNavbar = () => setMenuIcon(!menuIcon);

  return (
    <header className=" fixed z-10 top-0 left-0 right-0 bg-black bg-opacity-70">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Image Top Left */}
        <div>
          <a href="/" onClick={smallNavbar} className="flex items-center">
            <div className="w-24 md:w-32">
              <Image
                src="/assets/LogoWhite.png"
                alt=""
                width={750}
                height={500}
              />
            </div>
          </a>
        </div>

        {/* Big Screen Navbar */}
        <ul className="hidden md:flex font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 justify-center items-center">
          <li className={BlairM.className}>
            <Link
              href="/"
              activeClass="active"
              spy={true}
              to="Landing"
              smooth={true}
              offset={0}
              duration={1000}
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0"
              aria-current="page"
            >
              HOME
            </Link>
          </li>

          <li className={BlairM.className}>
            <Link
              href="/"
              activeClass="active"
              spy={true}
              to="About"
              smooth={true}
              offset={0}
              duration={1000}
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0"
            >
              ABOUT US
            </Link>
          </li>

          <li className={BlairM.className}>
            <Link
              href="/"
              activeClass="active"
              spy={true}
              to="Product"
              smooth={true}
              offset={0}
              duration={1000}
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0"
            >
              PRODUCTS
            </Link>
          </li>

          <li className={BlairM.className}>
            <Link
              href="/"
              activeClass="active"
              spy={true}
              to="Customer"
              smooth={true}
              offset={0}
              duration={1000}
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0"
            >
              CUSTOMER
            </Link>
          </li>

          <li className={BlairM.className}>
            <Link
              href="/"
              activeClass="active"
              spy={true}
              to="Gallery"
              smooth={true}
              offset={0}
              duration={1000}
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0"
            >
              GALLERY
            </Link>
          </li>

          <li className={BlairM.className}>
            <a
              href="https://wa.me/+6281217771930"
              className="block py-2 pl-3 pr-4 text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4"
            >
              CONTACT
            </a>
          </li>
        </ul>

        {/* Small screen */}
        <div onClick={smallNavbar} className="flex md:hidden">
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-white" />
          ) : (
            <AiOutlineMenu size={25} className="text-white" />
          )}
        </div>

        <div
          className={
            menuIcon
              ? "md:hidden absolute z-20 top-[500px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-fill text-white ease-in duration-300"
              : "md:hidden absolute z-20 top-[500px] right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-fill  text-white text-center ease-in duration-300"
          }
        >
          {/* Links */}
          <div className="w-full h-[853px] flex justify-center items-center bg-black bg-opacity-70">
            <ul className="text-center py space-y-10">
              <li className={BlairM.className}>
                <Link
                  href="/"
                  onClick={smallNavbar}
                  activeClass="active"
                  spy={true}
                  to="About"
                  smooth={true}
                  offset={0}
                  duration={1000}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0"
                >
                  HOME
                </Link>
              </li>

              <li className={BlairM.className}>
                <Link
                  href="/"
                  onClick={smallNavbar}
                  activeClass="active"
                  spy={true}
                  to="About"
                  smooth={true}
                  offset={0}
                  duration={1000}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0"
                >
                  ABOUT US
                </Link>
              </li>

              <li className={BlairM.className}>
                <Link
                  href="/"
                  onClick={smallNavbar}
                  activeClass="active"
                  spy={true}
                  to="Product"
                  smooth={true}
                  offset={0}
                  duration={1000}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0"
                >
                  PRODUCTS
                </Link>
              </li>

              <li className={BlairM.className}>
                <Link
                  href="/"
                  onClick={smallNavbar}
                  activeClass="active"
                  spy={true}
                  to="Customer"
                  smooth={true}
                  offset={0}
                  duration={1000}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0"
                >
                  CUSTOMER
                </Link>
              </li>

              <li className={BlairM.className}>
                <Link
                  href="/"
                  onClick={smallNavbar}
                  activeClass="active"
                  spy={true}
                  to="Gallery"
                  smooth={true}
                  offset={0}
                  duration={1000}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0"
                >
                  GALLERY
                </Link>
              </li>

              <li className={BlairM.className}>
                <a
                  onClick={smallNavbar}
                  href="https://wa.me/+6281217771930"
                  className="block py-2 pl-3 pr-4 text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PageHeader;
