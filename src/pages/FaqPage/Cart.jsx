/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'
import { GrAddCircle } from 'react-icons/gr';
import {  MdOutlineRemoveCircleOutline , MdAddCircleOutline } from 'react-icons/md';

const Cart = ({title, details}) => {
    const [expanded, setExpanded] = useState(true)
  return (
    <div className='h-auto w-full mb-[10px] bg-[#fff] pl-[25px] border-solid border-[1px] border-[#e9e9e9] rounded-[5px] '>
        <div onClick={() => setExpanded(!expanded)} className='flex flex-row justify-between py-[20px] pr-[25px] transition ease-in duration-700'>
            <p className='text-[16px] text-[#041436] font-medium   '>{title}</p>
             { expanded?
                   <MdAddCircleOutline className='text-[22px] text-[#00FAA8] hover:text-black ' />
               :
                <MdOutlineRemoveCircleOutline className='text-[22px] hover:text-[#00FAA8] text-black ' />
             }
            
       </div>
            <p className={`pr-[25px] pb-[25px] text-[] text-[#676e7c]  ${expanded?'hidden':''} `}>{details}</p>
        
    </div>
  )
}

export default Cart