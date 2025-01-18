/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {React,useState,useEffect} from 'react'
import { serviceDetails } from '../../constant/colors'
import { RiFileList3Line } from 'react-icons/ri';

const ServiceList = () => {

  return (
    <div className='w-full h-[80%] bg-[#130842] flex flex-wrap justify-center gap-8  py-[100px] '>
       <Cart />
       <Cart />
       <Cart />
       <Cart />
    </div>
  )
}

const Cart = ({serviceList}) =>{
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    // Generate a random number on the client
    setRandomNumber(Math.floor(Math.random() * 1000));
  }, []);
    return(
        <div className='w-[260px] h-[300px] border-solid border-[0.5px] border-[#6b707a] flex flex-col gap-3 p-[20px] justify-center '>
            <div className=' flex self-center '>
               < RiFileList3Line className="text-[70px] text-[#00FAA8] " />
            </div> 

            <div className='text-[48px] font-bold flex self-center  text-[#fff] '> {randomNumber !== null ? `${randomNumber}+` : "Loading..."}</div>
            <div className='text-[25px] self-center text-[#fff] '>Complete Project</div>
        </div>
    )
}

export default ServiceList