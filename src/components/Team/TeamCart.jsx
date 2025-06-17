/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Image from 'next/image';
import React from 'react'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoSkype, BiLogoInstagram } from 'react-icons/bi';

const TeamCart = ({teamDetail}) => {
  // Provide default values to prevent undefined errors during build
  if (!teamDetail) {
    return null;
  }

  const { src, name = 'Team Member', designation = 'Position' } = teamDetail;

  // Skip rendering if no image source is provided
  if (!src) {
    return null;
  }

  return (
    <div className='bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group'>
       <div className='h-[270px] w-full relative overflow-hidden'>
            <Image 
              className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' 
              src={src} 
              alt={name} 
              height={300} 
              width={300} 
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#041436]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
       </div>
       <div className='py-6 px-4 text-center'>
            <h2 className='text-[#041436] text-xl font-bold mb-2 group-hover:text-[#00FAA8] transition-colors duration-300'>{name}</h2>
            <p className='text-gray-600 text-sm mb-4'>{designation}</p>
       </div>
       
       <div className='flex justify-center gap-4 pb-6'>
            <a href="#" className='w-9 h-9 flex items-center justify-center border border-[#00FAA8] rounded-full text-[#00FAA8] hover:bg-[#00FAA8] hover:text-white transition-colors duration-300'>
                <BiLogoFacebook className='text-lg' />
            </a>

            <a href="#" className='w-9 h-9 flex items-center justify-center border border-[#00FAA8] rounded-full text-[#00FAA8] hover:bg-[#00FAA8] hover:text-white transition-colors duration-300'>
                <BiLogoInstagram className='text-lg' />
            </a>

            <a href="#" className='w-9 h-9 flex items-center justify-center border border-[#00FAA8] rounded-full text-[#00FAA8] hover:bg-[#00FAA8] hover:text-white transition-colors duration-300'>
                <BiLogoLinkedin className='text-lg' />
            </a>

            <a href="#" className='w-9 h-9 flex items-center justify-center border border-[#00FAA8] rounded-full text-[#00FAA8] hover:bg-[#00FAA8] hover:text-white transition-colors duration-300'>
                <BiLogoSkype className='text-lg' />
            </a>
       </div>
    </div>
  )
}

export default TeamCart