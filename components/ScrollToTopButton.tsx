"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import { Link } from 'react-scroll';

import React from 'react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
  }

  return (    
        
    <Link activeClass="active" spy={true} to="Landing" smooth={true} offset={0} duration={1500} 
    className={`fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity bg-white duration-1000 ${
    isVisible ? "opacity-100" : "opacity-0"
    }`}>
      
    <ChevronUp />
    </Link>
  )
}

export default ScrollToTopButton