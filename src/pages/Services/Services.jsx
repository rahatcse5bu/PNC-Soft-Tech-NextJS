/* eslint-disable no-unused-vars */
import React from 'react'
import ServiceCart from './ServiceCart'
import { serviceDetails } from '../../constant/colors'


const Services = () => {
  return (
    <div  className='h-auto w-full bg-[#fff] ' >
        <div className='px-[50px] py-[100px]  '>
            <h1 className='text-center text-[16px] font-medium text-[#676e7c] pb-[15px] '>OUR SERVICES</h1>
            <div>
            <h1 className='text-center font-bold text-[36px] pb-[30px] text-[#041436]	'>What We Do For Your Business</h1>
             <div className='flex flex-wrap justify-center gap-10 mt-[20px]  '>
                {
                    serviceDetails.map((serviceDetail , index) =>(
                        <ServiceCart key={index} serviceDetail ={serviceDetail}  />
                    ))
                }
                 
             </div>
            </div>
        </div>
    </div>
  )
}

export default Services