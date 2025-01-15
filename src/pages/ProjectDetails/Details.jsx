/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { GoArrowRight } from 'react-icons/go';
const Details = () => {
  return (
    <div className='h-auto w-full bg-[#fff] ' >
        <div className='px-[30px] py-[120px]  '>
            <div>
             <div className='flex flex-wrap justify-center gap-14 mt-[20px] '>
                 <div className='h-[504px] w-[400px] bg-[#fff]  flex flex-col gap-4   border-[#e9e9e9] rounded-[5px] justify-start '>
                       <SideList title='All Services' />
                       <SideList title='Web Application' />
                       <SideList title='Mobile App' />
                       <SideList title='Website Design' />
                 </div>
                 <div className='h-[500px] w-[750px] flex flex-col bg-gray-300 '>
                     
                 </div>
             </div>
            </div>
        </div>
    </div>
  )
}

const SideList = ({title}) =>(
    <div className='w-full h-[60px] border-solid border-[1px] border-gray-200 rounded-[5px] px-6 py-4 flex flex-row justify-between hover:text-[#00FAA8] hover:bg-gray-50  hover:border-l-[3px] hover:border-[#fd7e14] '>
        <p className=' text-[18px] leading-[30px] font-[700px] '>{title}</p>
        <p><GoArrowRight className='text-[22px]  ' /></p>
    </div>
)

export default Details