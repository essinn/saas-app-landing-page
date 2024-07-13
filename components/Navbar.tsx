'use client'

import React from 'react'
import { NAVLINK } from '../constants/index'
import Logo from '../public/images/logosaas.png'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false)

  return (
    <div className='container bg-black'>
        <div className='py-4 flex items-center justify-between'>
            <div className='relative'>
                <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md'></div>
                <Image src={Logo} alt='logo' width={48} height={48} className='relative' />
            </div>
            <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center cursor-pointer rounded-lg md:hidden'>
                <Menu
                    className='text-white'
                    onClick={() => setToggleMenu(true)}
                />
            </div>

            <div className='hidden md:flex items-center justify-center text-white gap-6'>
                {NAVLINK.map((item) => (
                    <div key={item.name}>
                        <a href={item.link}>{item.name}</a>
                    </div>
                ))}

                <button className='border py-2 px-4 rounded-md'>Get In Touch</button>
            </div>

            {toggleMenu && (
                <div className='text-white fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-50 transition ease-in-out duration-500'>
                    <div className='flex flex-col gap-12 text-center'>
                        {NAVLINK.map((item) => (
                            <div key={item.name} className=''>
                                <a href={item.link}>{item.name}</a>
                            </div>
                        ))}
                    </div>
                    
                    <div className="border border-white border-opacity-30 flex justify-center items-center rounded-lg md:hidden cursor-pointer absolute top-[68px] right-4 w-10 h-10">
                        <X className="text-white" onClick={() => setToggleMenu(false)} />
                    </div>

                </div>
            )}


        </div>
    </div>
  )
}

export default Navbar