'use client'

import Image from 'next/image'
import React from 'react'
import Acme from '../public/images/acme.png'
import Quantum from '../public/images/quantum.png'
import Echo from '../public/images/echo.png'
import Celestial from '../public/images/celestial.png'
import Pulse from '../public/images/pulse.png'
import Apex from '../public/images/apex.png'
import { motion } from 'framer-motion'

const images = [
  {
    src: Acme,
    alt: 'acme',
  },
  {
    src: Quantum,
    alt: 'quantum',
  },
  {
    src: Echo,
    alt: 'echo',
  },
  {
    src: Celestial,
    alt: 'celestial',
  },
  {
    src: Pulse,
    alt: 'pulse',
  },
  {
    src: Apex,
    alt: 'apex',
  },
]

const Slider = () => {
  return (
    <div className='container bg-black text-white py-[72px] sm:py-24'>
      <h2 className='text-xl font-semibold text-center text-white/70'>Trusted By The World&apos;s Most Inovated Teams</h2>
      <div className='overflow-hidden mt-9 before:content-[""] before:z-10 after:content-[""] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0)] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]'>
        <motion.div
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: '-50%' }}
          className='flex gap-16 flex-none pr-16'
        >
          {images.map(({ src, alt }) => (
            <Image key={alt} src={src} alt={alt} height={32} className='flex-none w-auto'/>
          ))}
          {images.map(({ src, alt }) => (
            <Image key={alt} src={src} alt={alt} height={32} className='flex-none w-auto'/>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Slider
