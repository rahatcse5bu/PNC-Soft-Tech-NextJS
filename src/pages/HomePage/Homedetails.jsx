/* eslint-disable no-unused-vars */
import React from 'react'
const Homedetails = () => {
  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden"
    style={{
      backgroundImage: `linear-gradient(rgba(4, 20, 54, 0.8), rgba(7, 25, 82, 0.85)), url(https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#041436]/90 to-[#071952]/85 z-0"></div>
      
      <div className='relative z-10 max-w-7xl px-10 py-20 sm:py-28 flex flex-col items-center justify-center text-center animate-fadeIn'>
        <h1 className='text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-wide mb-6'>
          Welcome to <span className='text-[#00FAA8]'>PNC Soft Tech</span>
        </h1>
        <p className='text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mb-8'>
          Transforming ideas into innovative digital solutions with cutting-edge mobile and web development services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a href="/services" className="px-8 py-3 bg-[#00FAA8] text-[#041436] rounded-md font-medium hover:bg-[#00FAA8]/90 transition duration-300 shadow-lg">
            Our Services
          </a>
          <a href="/contact" className="px-8 py-3 bg-transparent border-2 border-[#00FAA8] text-[#00FAA8] rounded-md font-medium hover:bg-[#00FAA8]/10 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Homedetails