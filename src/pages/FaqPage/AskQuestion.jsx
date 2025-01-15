/* eslint-disable no-unused-vars */
import React from 'react'
import Cart from './Cart'
import { questions , questionType } from '../../constant/colors'
import Form from './Form'

const AskQuestion = () => {
  return (
    <div className=' w-full bg-[#fff] ' >
        <div className='px-[50px] py-[100px]  '>
            <h1 className='text-center text-[16px] font-medium text-[#676e7c] pb-[15px] '>CUSTOM REQUEST</h1>
            <div>
            <h1 className='text-center font-bold text-[36px] pb-[30px] text-[#041436]	'>Ask A Questions</h1>
             <div className='flex flex-row justify-center gap-10 mt-[20px] '>
               <Form />
             </div>
            </div>
        </div>
    </div>
  )
}

export default AskQuestion