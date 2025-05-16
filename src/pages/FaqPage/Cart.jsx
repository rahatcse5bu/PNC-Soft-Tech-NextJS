/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const Cart = ({ title, details }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300'>
      <button 
        onClick={() => setExpanded(!expanded)} 
        className='w-full flex justify-between items-center p-5 text-left focus:outline-none'
      >
        <h3 className={`text-[16px] font-medium transition-colors duration-300 ${expanded ? 'text-[#00FAA8]' : 'text-[#041436]'}`}>
          {title}
        </h3>
        {expanded ? (
          <HiChevronUp className='text-[#00FAA8] text-xl flex-shrink-0' />
        ) : (
          <HiChevronDown className='text-[#041436] text-xl flex-shrink-0' />
        )}
      </button>
      
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='px-5 pb-5'
        >
          <p className='text-gray-600'>{details}</p>
        </motion.div>
      )}
    </div>
  )
}

export default Cart