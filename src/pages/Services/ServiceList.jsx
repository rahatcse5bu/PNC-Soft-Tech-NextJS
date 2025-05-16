/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {React, useState, useEffect} from 'react'
import { RiFileList3Line, RiTeamLine, RiCustomerService2Line, RiTimeLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const ServiceList = () => {
  const stats = [
    {
      icon: <RiFileList3Line />,
      count: 150,
      label: "Completed Projects"
    },
    {
      icon: <RiTeamLine />,
      count: 15,
      label: "Expert Team Members"
    },
    {
      icon: <RiCustomerService2Line />,
      count: 98,
      label: "Satisfied Clients"
    },
    {
      icon: <RiTimeLine />,
      count: 5,
      label: "Years Experience"
    }
  ];

  return (
    <div className='py-16 bg-[#041436] text-white'>
      <div className='max-w-7xl mx-auto px-6 md:px-10'>
        <div className='text-center mb-12'>
          <span className='inline-block px-4 py-2 bg-[#00FAA8]/20 text-[#00FAA8] font-medium rounded-full text-sm mb-4'>OUR ACHIEVEMENTS</span>
          <h2 className='text-white text-3xl md:text-4xl font-bold mb-6'>Why Choose PNC Soft Tech</h2>
          <p className='text-gray-300 max-w-3xl mx-auto'>
            We take pride in our accomplishments and the trust our clients have placed in us over the years.
          </p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <StatCard key={index} icon={stat.icon} count={stat.count} label={stat.label} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

const StatCard = ({icon, count, label, index}) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = Math.ceil(count / (duration / 50)); // Update every 50ms
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= count) {
          setDisplayCount(count);
          clearInterval(timer);
        } else {
          setDisplayCount(start);
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [count, isInView]);

  return (
    <motion.div 
      className='bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/10 transition-all duration-300 border border-white/10'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: index * 0.1, duration: 0.5 } 
      }}
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setIsInView(true)}
    >
      <div className='flex justify-center mb-4'>
        <div className='w-16 h-16 rounded-full bg-[#00FAA8]/20 flex items-center justify-center text-[#00FAA8] text-3xl'>
          {icon}
        </div>
      </div>
      <h3 className='text-4xl font-bold mb-2 text-white'>{displayCount}+</h3>
      <p className='text-gray-300'>{label}</p>
    </motion.div>
  );
};

export default ServiceList

export default ServiceList