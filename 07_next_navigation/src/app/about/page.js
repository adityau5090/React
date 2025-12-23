"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const About = () => {
    const pathname = usePathname();
    console.log(pathname)
  return (
    <div>
      About Page
    </div>
  )
}

export default About
