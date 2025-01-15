/* eslint-disable no-unused-vars */
import React from 'react'
const Homedetails = () => {
  return (
    <div  className="h-screen w-full  inset-0 bg-black object-cover "
    style={{
      backgroundImage: `url(https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity:1
    }}>
      <div className='py-[150px] px-10  self-center flex flex-col justify-center '>
        <h1 className='text-[#fff] text-[50px] self-center font-bold leading-[60px] tracking-wide '>PNC Soft Tech <span className='text-[#00FAA8]'>Since 2023</span></h1>
        <p className='text-[18px] pt-6 text-[#fff] leading-[32px] self-center tracking-wide font-normal '>
        PNC Soft Tech is a mobile app and web development company that offers a wide range of 
        </p>
        <p className='text-[18px] font-normal text-[#fff] leading-[32px] tracking-wide self-center '>
         services and features using various technologies.
        </p>
      </div>
    </div>
  )
}

export default Homedetails