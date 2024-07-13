import React from 'react'

const Banner = () => {
  return (
    <div className='container py-3 text-center bg-[linear-gradient(to_right,rgb(252,_214,_255,_.7),rgb(41,_217,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))]'>
        <div className='font-medium'>
            <span className='hidden sm:inline'>Introducing a completely redesigned interface - </span>
            <a href="#" className='underline underline-offset-4'>
                Explore the demo
            </a>
        </div>
    </div>
  )
}

export default Banner