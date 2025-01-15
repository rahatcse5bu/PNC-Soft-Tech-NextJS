/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Image from 'next/image';
import React from 'react'
import { BiLogoFacebook , BiLogoLinkedin, BiLogoSkype, BiLogoInstagram } from 'react-icons/bi';



const TeamCart = ({teamDetail}) => {
  return (
    <div className='h-[400px] w-[280px] hover:shadow-[0_5px_30px_0px_rgba(0,0,0,0.1)] rounded-[10px] flex flex-col gap-2 border-solid border-[1px] border-gray-200 '>
       <div className='h-[240px] w-[278px] '>
            <Image className='h-full w-full object-cover rounded-t-[10px] ' src ={teamDetail.src} alt ='Service Image' height={300} width={300} />
       </div>
       <div className='py-[10px] px-[16px]  flex flex-col gap-2'>
            <h1 className='text-black text-[22px] font-bold leading-[40px] self-center '>{teamDetail.name}</h1>
            <p className=' text-[#676e7c] leading-[26px] font-normal text-[16px] self-center '>{teamDetail.designation}</p>
       </div>
       
       <div className='flex flex-row justify-evenly px-[20px] mt-[-5px] '>

            <div className=' p-1 border-solid border-[1px] border-[#00FAA8] hover:bg-[#00FAA8] rounded-full '>
                <BiLogoFacebook className='text-[22px] text-[#00FAA8] hover:text-[#fff] ' />
            </div>

            <div className=' p-1 border-solid border-[1px] border-[#00FAA8] hover:bg-[#00FAA8] rounded-full '>
                <BiLogoInstagram className='text-[22px] text-[#00FAA8] hover:text-[#fff] ' />
            </div>

            <div className=' p-1 border-solid border-[1px] border-[#00FAA8] hover:bg-[#00FAA8] rounded-full '>
                <BiLogoLinkedin className='text-[22px] text-[#00FAA8] hover:text-[#fff] ' />
            </div>

            <div className=' p-1 border-solid border-[1px] border-[#00FAA8] hover:bg-[#00FAA8] rounded-full '>
                <BiLogoSkype className='text-[22px] text-[#00FAA8] hover:text-[#fff] ' />
            </div>

            
       </div>
    </div>
  )
}

export default TeamCart