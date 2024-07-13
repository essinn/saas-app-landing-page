'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import AppScreen from '../public/images/app-screen.png'
import { motion, useScroll, useTransform } from 'framer-motion'

const Products = () => {

  const imageRef = useRef<HTMLImageElement>(null)

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end end'],
  })

  useEffect(() => {
    scrollYProgress.on('change', (latestValue) => console.log(latestValue))
  }, [scrollYProgress])

  const rotateX = useTransform(scrollYProgress, [0,1], [15,0])
  const opacity = useTransform(scrollYProgress, [0,1], [.5,1])

  return (
    <div className='container text-white bg-black bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] md:py-24'>
        <h2 className='text-center text-5xl md:text-6xl font-bold'>Intuitive Interface</h2>
        <p className='text-xl max-w-2xl mx-auto text-center text-white/70 mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your effors, and celebrate your success, one task at a time.</p>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: '800px',
          }}
        >
          <Image src={AppScreen} alt='product ss' className='mt-14 mx-auto' ref={imageRef} />
        </motion.div>
    </div>
  )
}

export default Products