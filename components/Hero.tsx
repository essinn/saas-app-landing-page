import React from 'react'
import ArrowIcon from '../public/icons/arrow-w.svg'


const Hero = () => {
  return (
    <div className='container bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-[96px] relative overflow-clip'>
        <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] md:w-[2400px] md:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'></div>
        <div className='flex items-center justify-center relative'>
            <a href="#" className='border py-1 px-2 rounded-lg border-white/30 inline-flex gap-3'>
                <span className='bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F082,#2FD8FE)] text-transparent bg-clip-text'>Version 2.0 is here</span>
                <span className='flex items-center gap-1'>
                    Read More 
                    <span><ArrowIcon /></span>
                </span>
            </a>
        </div>
        <div className='mt-8 flex justify-center flex-col relative'>
            <h1 className='text-7xl md:text-8xl font-bold tracking-tighter text-center'>One Task at a Time</h1>

            <p className='max-w-2xl mx-auto text-center text-xl mt-8'>
                Celebrate the joy of accomplishment with an app designed to track progress, motivate your efforts, and celebrate your successes.
            </p>

            <div className='flex justify-center mt-8'>
                <button className='bg-white text-black py-3 px-5 rounded-lg'>
                    Get For Free
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero