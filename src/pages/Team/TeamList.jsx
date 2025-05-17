/* eslint-disable no-unused-vars */
import React from 'react'
import { teamDetails } from '../../constant/colors'
import TeamCart from '../../components/Team/TeamCart'

const TeamList = () => {
  return (
    <div className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>
            <div className='text-center mb-16'>
                <span className='inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4'>OUR AMAZING TEAM</span>
                <h2 className='text-[#041436] text-4xl md:text-5xl font-bold mb-6'>Meet Our Experts</h2>
                <p className='text-gray-600 max-w-3xl mx-auto'>
                    Our talented team of professionals is dedicated to delivering high-quality solutions and exceptional service to our clients.
                </p>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {teamDetails.map((teamDetail, index) => (
                    <TeamCart key={index} teamDetail={teamDetail} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default TeamList