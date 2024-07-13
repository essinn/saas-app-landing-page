import React from 'react'
import EcoSystemsIcon from '../public/icons/ecosystem.svg'

import Feature from './MoreFeatures'

const features = [
    {
        title: 'Integration Ecosystem',
        desc: 'Enhance your productivitiy by connecting with your tools, keeping your essentials inn one place.',
    },
    {
        title: 'Goal Setting and Tracking',
        desc: 'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.',
    },
    {
        title: 'Secure Data Encryption',
        desc: 'With end-to-end encryption, your data is securely stored and protected from unauthoried access.',
    },
]

const Features = () => {
  return (
    <div className='contaienr text-white bg-black py-[72px] md:py-[96px]'>
        <h2 className='text-center text-5xl md:text-6xl font-bold tracking-tighter'>Everything you need</h2>
        <p className='text-center mt-5 text-xl text-white/70 max-w-2xl mx-auto'>Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
        <div className='container mt-16 flex flex-col md:flex-row md:flex-1 gap-4'>
            {features.map(({ title, desc }) => (
                <Feature title={title} desc={desc} key={title} />
            ))}
        </div>
    </div>
  )
}

export default Features