/* eslint-disable no-unused-vars */
import React from 'react'
import Form from './Form'
import Link from 'next/link'
import { FaQuestionCircle, FaHeadset, FaEnvelope } from 'react-icons/fa'

const AskQuestion = () => {
  const supportOptions = [
    {
      icon: <FaQuestionCircle className="text-3xl text-[#00FAA8]" />,
      title: "Browse Documentation",
      description: "Find answers in our detailed knowledge base and documentation.",
      link: "#",
      linkText: "View Documentation"
    },
    {
      icon: <FaHeadset className="text-3xl text-[#00FAA8]" />,
      title: "Live Support",
      description: "Talk to our support team directly for urgent issues.",
      link: "/ContactPage",
      linkText: "Contact Support"
    },
    {
      icon: <FaEnvelope className="text-3xl text-[#00FAA8]" />,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours.",
      link: "mailto:pncsoft.tech@gmail.com",
      linkText: "Email Us"
    }
  ]

  return (
    <div className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-6 md:px-10'>
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4'>NEED HELP?</span>
          <h2 className='text-[#041436] text-4xl font-bold mb-6'>Ask Us A Question</h2>
          <p className='text-gray-600 max-w-3xl mx-auto'>
            Can't find the answer you're looking for? Please fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
          {supportOptions.map((option, index) => (
            <div key={index} className='bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300'>
              <div className='flex justify-center mb-4'>
                {option.icon}
              </div>
              <h3 className='text-xl font-bold text-[#041436] mb-2'>{option.title}</h3>
              <p className='text-gray-600 mb-4'>{option.description}</p>
              <Link href={option.link}>
                <span className='text-[#00FAA8] font-medium hover:underline'>{option.linkText}</span>
              </Link>
            </div>
          ))}
        </div>
        
        <div className='bg-gray-50 rounded-xl shadow-lg overflow-hidden'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='p-8 lg:p-12 bg-[#041436] text-white'>
              <h3 className='text-2xl font-bold mb-4'>Get In Touch</h3>
              <p className='mb-6'>
                Have a specific question or need more information? Fill out this form and we'll get back to you promptly with the answers you need.
              </p>
              <div className='space-y-4'>
                <div className='flex items-center'>
                  <div className='w-10 h-10 rounded-full bg-[#00FAA8]/20 flex items-center justify-center mr-4'>
                    <FaEnvelope className='text-[#00FAA8]' />
                  </div>
                  <span>pncsoft.tech@gmail.com</span>
                </div>
                <div className='flex items-center'>
                  <div className='w-10 h-10 rounded-full bg-[#00FAA8]/20 flex items-center justify-center mr-4'>
                    <FaHeadset className='text-[#00FAA8]' />
                  </div>
                  <span>+8801793278360</span>
                </div>
              </div>
            </div>
            <div className='p-8 lg:p-12'>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AskQuestion