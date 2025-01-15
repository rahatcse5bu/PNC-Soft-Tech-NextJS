/* eslint-disable no-unused-vars */
import React from 'react'
import { teamDetails } from '../../constant/colors'
import TeamCart from './TeamCart'

const TeamList = () => {
  return (
    <div className='h-auto w-full bg-[#fff] ' >
        <div className='px-[50px] py-[100px]  '>
             <div className='flex flex-wrap justify-center gap-7 mt-[20px] '>
                {
                    teamDetails.map((teamDetail , index) =>(
                        <TeamCart key={index} teamDetail ={teamDetail}  />
                    ))
                }
                 
             </div>
        </div>
    </div>
  )
}

export default TeamList