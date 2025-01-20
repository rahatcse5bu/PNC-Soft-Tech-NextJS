/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import img from './sabuj.jpg'
import Image from 'next/image'
import Link from 'next/link'

const ServiceCart = ({serviceDetail}) => {
  return (
    <Link href='/service-details' className='h-auto w-[300px] md:w-[340px] shadow-[0_5px_30px_0px_rgba(0,0,0,0.1)] rounded-[5px] flex flex-col gap-2  '>
       <div className='h-[210px] w-[300px] md:w-[340px] '>
            <Image className='h-full w-full object-cover rounded-t-[5px] ' src ={"/profile/pnc.jpg"} alt ='Service Image' height={300} width={300}/>
       </div>
       <div className='py-[10px] px-[16px]  flex flex-col gap-2'>
            <h1 className='text-black text-[22px] font-bold leading-[40px] '>{serviceDetail.title}</h1>
            <p className=' text-[#676e7c] leading-[26px] font-normal text-[16px] '>{serviceDetail.details}</p>
       </div>
    </Link>
  )
}

export default ServiceCart