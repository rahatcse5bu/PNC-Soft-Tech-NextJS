/* eslint-disable no-unused-vars */
import React from 'react'
import ServiceCart from './ServiceCart'
import { serviceDetails } from '../../constant/colors'

const Services = () => {
  return (
    <div className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>
            <div className='text-center mb-16'>
                <span className='inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4'>OUR SERVICES</span>
                <h2 className='text-[#041436] text-4xl md:text-5xl font-bold mb-6'>What We Do For Your Business</h2>
                <p className='text-gray-600 max-w-3xl mx-auto'>
                  We provide comprehensive digital solutions to help your business grow and thrive in the modern digital landscape.
                </p>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {serviceDetails.map((serviceDetail, index) => (
                    <ServiceCart key={index} serviceDetail={serviceDetail} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services