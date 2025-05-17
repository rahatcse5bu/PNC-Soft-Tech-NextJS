/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const ServiceCart = ({serviceDetail}) => {
  // Generate link path based on service title
  const getServiceLink = (title) => {
    if (title === "Mobile App Development") {
      return "/Services/MobileAppDevelopment";
    } else if (title === "Web Design" || title === "Web Development") {
      return "/Services/WebDevelopment";
    } else {
      return "/service-details"; // Default fallback
    }
  };

  return (
    <div className='w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group'>
       <div className='h-[210px] w-full relative overflow-hidden'>
            <Image 
              className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' 
              src={"/profile/pnc.jpg"} 
              alt={serviceDetail.title} 
              height={300} 
              width={300}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#041436]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
       </div>
       <div className='p-6'>
            <h2 className='text-[#041436] text-xl font-bold mb-3 group-hover:text-[#00FAA8] transition-colors duration-300'>{serviceDetail.title}</h2>
            <p className='text-gray-600 text-base mb-4'>{serviceDetail.details}</p>
            <Link href={getServiceLink(serviceDetail.title)} className='inline-flex items-center text-[#00FAA8] font-medium hover:text-[#041436] transition-colors duration-300'>
              Learn more 
              <FaArrowRight className='ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1' />
            </Link>
       </div>
    </div>
  )
}

export default ServiceCart
