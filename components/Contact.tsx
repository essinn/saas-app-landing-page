import React from 'react'
import HelixImg from '../public/images/helix2.png'
import EmojiImg from '../public/images/emojistar.png'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='container text-white bg-black py-[72px] md:py-24 text-center'>
        <div className='max-w-xl relative mx-auto'>
          <Image src={HelixImg} alt='helix' className='hidden lg:flex absolute top-[24px] left-[calc(100%+36px)] z-10' />
          <Image src={EmojiImg} alt='emojistar' className='hidden lg:flex absolute -top-[120px] right-[calc(100%+24px)] z-10' />
          <h2 className='font-bold text-5xl tracking-tighter md:text-6xl'>Get Instant Access</h2>
          <p className='text-white/70 text-xl mt-5 max-w-2xl mx-auto'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
          <form className='mt-10 flex flex-col gap-2.5 max-w-md mx-auto md:flex-row'>
            <input type="email" placeholder='your@email.com' className='h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] md:flex-1' />
            <button className='bg-white text-black px-5 py-2 h-12 rounded-lg'>Get Access</button>
          </form>
        </div>
    </div>
  )
}

export default Contact