/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

const Discover = () => {
  return (
    <div className='bg-[#f4f7fb] w-full h-auto flex flex-col lg:flex-row justify-evenly gap-14 px-[30px] lg:px-[80px] py-[130px] '>
            <div className=' h-[300px] md:h-screen  w-[100%] lg:w-[45%] z-2 '
                 style={{
                    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcKdrQCLtPkJMnlPGKRmSeC9FhKdc-6kpaw&usqp=CAU)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity:1
                  }}
            >
            </div>

            <div className='h-auto lg:h-screen w-[100%] lg:w-[55%] flex flex-col gap-4 '>
                <h1 className=' text-[50px] text-[#041436] font-bold leading-[70px] space-x-4 '>Discover <span className='text-[#00FAA8] '>The Best Way</span>  of Grow a Bussiness</h1>

                <p className=' text-[#041436] text-[18px] font-normal leading-[25px]  '>Simple Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                
                <h1 className='text-black text-[22px] font-bold leading-[30px] mt-4 '>Our Mission</h1>
                <p className=' text-[#041436] text-[18px] font-normal leading-[25px]  '>Simple Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                <h1 className='text-black text-[22px] font-bold leading-[30px] mt-4 '>Our Vission</h1>
                <p className=' text-[#041436] text-[18px] mb-8 font-normal leading-[25px] '> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>

                <button className='bg-[#00FAA8] text-[#fff] text-[22px] p-0 lg:p-2 self-center h-[50px] w-[160px] lg:h-[70px] lg:w-[180px] rounded-full hover:bg-[#fff] hover:text-[#00FAA8] hover:border-solid border-[1px] border-[#00FAA8] transition ease-in duration-700' >Learn More</button>
            </div>
    </div>
  )
}

export default Discover