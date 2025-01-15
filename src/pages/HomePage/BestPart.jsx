/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { qualites } from '../../constant/colors'
import { Colors } from '../../constant/colors'
import {MdOutlineNumbers} from 'react-icons/md'


const BestPart = () => {
  return (
    <div className={`h-auto  w-full px-[30px] py-[80px] bg-[${Colors.secondaryBgColor}]  `}>

        <div className={`text-[${Colors.secondaryTextColor}] text-[40px] leading-[60px] text-center font-bold `} >Why we are the best</div>
        <div className={` text-[${Colors.secondaryTextColor}] text-[16px] text-center mt-[20px] font-normal px-[20%] mb-[50px] `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam mollitia quasi ab impedit illo necessitatibus aperiam, officia vero nihil, dolore animi eveniet reiciendis. Similique laudantium, et expedita saepe ipsum quidem.</div>

        <div className='flex flex-wrap h-auto w-full gap-8 justify-center '>
            {
                qualites.map((quality , index) =>(
                    <Cart key={index} quality ={quality}  />
                ))
            }

        </div>
    </div>
  )
}

const Cart = ({quality}) =>{
    return(
        <div className='flex flex-col gap-3 w-[90%] md:w-[80%] lg:w-[40%] '>
           <div className='flex flex-row gap-2  '>
                <p className={` text-[${Colors.excitetedColor}] text-[22px] font-bold leading-[30px] pt-1 `} >
                    <MdOutlineNumbers />
                </p>
                <p className={` text-[${Colors.secondaryTextColor}] text-[22px] font-bold leading-[30px] `}>{quality.title}</p>
           </div>
           <div className={`text-[${Colors.secondaryTextColor} ]  pl-[30px] text-[16px] font-normal `}> 
            {quality.details}
           </div>
        </div>
    )
}

export default BestPart