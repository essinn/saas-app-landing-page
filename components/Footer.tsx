import React from 'react'
import Instagram from '../public/icons/insta.svg'
import X from '../public/icons/x-social.svg'
import Tiktok from '../public/icons/tiktok.svg'
import Youtube from '../public/icons/youtube.svg'

const Footer = () => {
  return (
    <footer className='container text-white bg-black py-5'>
        <div className='flex items-center justify-between md:flex-row flex-col'>
            <span className='text-center text-white/70'>&copy; 2024 Ehsan. All rights reserved.</span>
            <ul className='flex justify-center items-center mt-5 gap-2.5'>
                <li className='cursor-pointer'><X /></li>
                <li className='cursor-pointer'><Tiktok /></li>
                <li className='cursor-pointer'><Youtube /></li>
                <li className='cursor-pointer'><Instagram /></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer