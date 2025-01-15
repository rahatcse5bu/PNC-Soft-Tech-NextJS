/* eslint-disable no-unused-vars */
import React from 'react'
import Cart from './Cart'
import { questions , questionType } from '../../constant/colors'

const GenQesPart = () => {
  return (
    <div className='h-auto w-full bg-[#f4f7fb] ' >
        <div className='px-[50px] py-[100px]  '>
            <h1 className='text-center text-[16px] font-medium text-[#676e7c] pb-[15px] '>GENERAL QUESTIONS</h1>
            <div>
            <h1 className='text-center font-bold text-[36px] pb-[30px] text-[#041436]	'>Frequently Asked Questions</h1>
             <div className='flex flex-wrap justify-center gap-10 mt-[20px] '>
                 <div className='h-[504px] w-[270px] bg-[#fff] border-solid border-[1px] flex flex-col gap-4 py-[50px]  border-[#e9e9e9] rounded-[5px] '>
                        {
                            questionType.map((type, index) =>(
                                <p key={index} className='text-[#0a0b0d] hover:text-[#fd7e14] hover:cursor-pointer leading-[48px] text-[16px] pl-[30px] hover:border-l-[2px] border-[#fd7e14] ' >{type.title}</p>
                            ))
                        }
                 </div>
                 <div className='h-[500px] w-[800px]  '>
                   {
                    questions.map((question , index) =>(
                        <Cart key={index} title ={question.title} details={question.details} />
                    ))
                   }
                 </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default GenQesPart