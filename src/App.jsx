import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card'
import './App.css'

function App() {

  return (
    <>
    
    <div id='home' className='flex flex-col justify-center items-center md:h-screen md:gap-2 gap-12
    md:px-20 p-6'>
      
      <div className='flex md:flex-row flex-col gap-6 w-full'>
        <div className='glow-background'>   </div>
        <Card title="Business Websites" description="Transform your online presence with our professional business website development services. We craft custom, responsive, and visually appealing websites that captivate users and boost engagement. From design to launch, our team ensures seamless functionality, optimized performance, and a strong foundation for growth. Elevate your brand with a website that stands out!" />
        <Card title="Saas Products" description="Accelerate your success with our SaaS product development services. We specialize in building scalable, secure, and high-performance software tailored to meet your unique business needs. From concept to deployment, our expert team ensures seamless functionality, intuitive design, and optimized user experience, helping your business innovate and grow faster than ever." />
        <Card title="Custom Software Development" description="Unlock your business’s potential with our custom software development services. We design and develop tailored software solutions that address your unique challenges, streamline processes, and drive growth. From ideation to deployment, our team ensures flexibility, scalability, and performance, delivering software that aligns perfectly with your business goals." />
      </div>
    </div>
    </>
  )
}

export default App
