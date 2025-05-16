/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import img from '../../../public/img/banner.jpg'
import Image from 'next/image'
import { FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa'

const ReliablePart = () => {
  return (
    <div className='w-full h-auto bg-white py-20'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>
            <div className='text-center mb-16'>
                <h2 className='text-[#00FAA8] text-lg font-semibold uppercase tracking-wider mb-3'>Why Choose Us</h2>
                <h1 className='text-[#041436] text-4xl md:text-5xl font-bold mb-6'>Welcome to PNC Soft Tech</h1>
                <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
                    We deliver innovative digital solutions with expertise in mobile app and web development,
                    utilizing the latest technologies to transform your ideas into reality.
                </p>  
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='bg-[#041436] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2'>
                    <div className='p-8 text-center'>
                        <div className='mx-auto w-16 h-16 flex items-center justify-center bg-[#00FAA8]/20 rounded-full mb-6'>
                            <FaLaptopCode className='text-[#00FAA8] text-3xl' />
                        </div>
                        <h3 className='text-white text-xl font-bold mb-4'>Web Development</h3>
                        <p className='text-gray-300'>
                            Custom web solutions using cutting-edge technologies like React, Next.js, and MERN stack to build fast, responsive, and scalable applications.
                        </p>
                    </div>
                </div>

                <div className='bg-[#00FAA8] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 relative z-10'>
                    <div className='p-8 text-center'>
                        <div className='mx-auto w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-6'>
                            <FaMobileAlt className='text-white text-3xl' />
                        </div>
                        <h3 className='text-white text-xl font-bold mb-4'>Mobile App Development</h3>
                        <p className='text-gray-100'>
                            Cross-platform mobile applications with Flutter and React Native that provide native performance and exceptional user experience on all devices.
                        </p>
                    </div>
                </div>

                <div className='bg-[#041436] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2'>
                    <div className='p-8 text-center'>
                        <div className='mx-auto w-16 h-16 flex items-center justify-center bg-[#00FAA8]/20 rounded-full mb-6'>
                            <FaServer className='text-[#00FAA8] text-3xl' />
                        </div>
                        <h3 className='text-white text-xl font-bold mb-4'>API Integration</h3>
                        <p className='text-gray-300'>
                            Seamless API integration services for web and mobile applications, connecting your software with third-party services and databases.
                        </p>
                    </div>
                </div>            </div>
        </div>
    </div>
  );
}

export default ReliablePart