/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
// import img from '../../assets/img/banner.jpg'
import img from '../../../public/img/banner.jpg'
import Image from 'next/image'
const ReliablePart = () => {
  
  return (
    <div className='w-full h-auto bg-white flex flex-col  self-center py-10 '>
        <div className='self-center mx-8  flex flex-col mt-20 mb-16 '>
            <h1 className='text-black text-[50px] leading-[70px] font-bold text-center pb-5 ' >Welcom to PNC Soft Tech</h1>
            <p className=' text-[18px]  lg:mx-[20%] text-black font-normal text-center '>
            PNC Soft Tech is a mobile app and web development company that offers a wide range of services and features using various technologies
            </p>  
        </div>

        <div className='mt-10 mx-10 lg:mx-20 text-[#fff] '>
            <div className='  flex flex-col md:flex-row gap-8 lg:gap-0  w-full h-auto lg:h-[370px] '>
                 
                  <div className=' p-8 bg-[#041436] flex flex-col self-center '>
                       <div className='h-20 w-20 mb-2  self-center'>
                        <Image src ={"/img/banner.jpg"}  width={300} priority/>
                       </div>
                            <h1 className='self-center text-[#fff] text-[22px] font-bold '>Reliable Solutions</h1>
                            <p className='text-center text-[16px] mt-2 text-gray-300 font-medium '>Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only five.
                            </p>
                   </div>

                  <div className=' p-8 lg:py-[110px] lg:px-[80px] flex flex-col self-center bg-[#00FAA8] h-auto w-auto lg:w-[900px] lg:h-[420px] z-40 '>
                          <div className='h-20 w-20 mb-2  self-center'>
                          <Image src ={"/img/banner.jpg"}  width={300} priority/>
                          </div>
                            <h1 className='self-center text-[#fff] text-[22px] font-bold '>Reliable Solutions</h1>
                            <p className='text-center text-[16px] mt-2 text-gray-200 font-medium '>Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only five.
                            </p>
                   </div>

                   <div className=' p-8 bg-[#041436] flex flex-col self-center '>
                           <div className='h-24 w-24 mb-2 self-center'>
                           <Image src ={'/img/banner.jpg'} className=' object-cover ' width={300} priority/>
                           </div>
                            <h1 className='self-center text-[#fff] text-[22px] font-bold '>Reliable Solutions</h1>
                            <p className='text-center text-[16px] mt-2 text-gray-300 font-medium '>Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only five.
                            </p>
                   </div>
            </div>


        </div>

              
    </div>
        
  )
}

export default ReliablePart