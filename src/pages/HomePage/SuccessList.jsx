/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import ServiceList from '../Services/ServiceList'

const SuccessList = () => {
  return (
    <div className='bg-[#fff] flex flex-col justify-center h-auto w-full mt-[90px]'>
        <h1 className=' text-black text-[40px] font-bold leading-[50px] text-center '>Success In A Glance</h1>
        <h4 className=' text-[#041436] mx-20 lg:px-80 text-[18px] mb-16 font-normal mt-2 leading-[20px] text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h4>

        <ServiceList />
    </div>
  )
}

export default SuccessList