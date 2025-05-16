/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

const GenQesPart = () => {
  const [activeCategory, setActiveCategory] = useState('General')
  const [activeIndex, setActiveIndex] = useState(null)

  const categories = [
    { id: 'general', title: 'General' },
    { id: 'services', title: 'Services' },
    { id: 'pricing', title: 'Pricing' },
    { id: 'technical', title: 'Technical' },
    { id: 'support', title: 'Support' }
  ]

  const faqs = {
    'General': [
      {
        title: "What services does PNC Soft Tech offer?",
        details:
          "PNC Soft Tech offers a comprehensive range of digital services including mobile app development (Flutter, React Native), web development (React.js, Next.js, MERN stack), UI/UX design, backend development, API integration, and e-commerce solutions. We work with businesses of all sizes to create custom digital solutions tailored to their specific needs and goals."
      },
      {
        title: "How long does it take to develop a mobile app or website?",
        details:
          "The timeline varies depending on the complexity of your project. A simple website might take 3-4 weeks, while a complex web application could take 2-3 months. For mobile apps, simple applications typically take 6-8 weeks, while more complex apps with extensive features may require 3-6 months of development time. During our initial consultation, we'll provide you with a more accurate timeline based on your specific requirements."
      },
      {
        title: "What is your development process?",
        details:
          "Our development process begins with a thorough discovery phase where we understand your business goals and project requirements. We then move to planning and design, creating wireframes and mockups for your approval. Once designs are approved, we proceed to development, implementing the features and functionality. Next comes testing and quality assurance, followed by deployment. After launch, we provide ongoing support and maintenance to ensure your digital product continues to perform optimally."
      },
      {
        title: "How much does it cost to develop a website or mobile app?",
        details:
          "The cost of development depends on several factors including the complexity of features, design requirements, platform choices, and timeline. Simple websites may start around $3,000-5,000, while feature-rich web applications might range from $10,000-50,000+. Mobile apps typically start at $15,000 for basic functionalities, with complex applications ranging from $50,000-150,000+. We provide detailed quotes after understanding your specific project requirements."
      },
      {
        title: "Do you provide support after the project is completed?",
        details:
          "Yes, we offer ongoing maintenance and support packages for all our development projects. Our support includes regular updates, bug fixes, security patches, performance optimization, and feature enhancements. We believe in building long-term relationships with our clients and ensuring their digital products remain secure, up-to-date, and aligned with evolving business needs and technological advancements."
      }
    ],
    'Services': [
      {
        title: "What technology stacks do you work with?",
        details: "We work with a wide range of modern technologies including React.js, Next.js, Node.js, Flutter, React Native, PHP/Laravel, MongoDB, MySQL, PostgreSQL, and more. We stay updated with the latest trends and best practices in technology to deliver high-quality solutions."
      },
      {
        title: "Can you redesign my existing website or app?",
        details: "Yes, we offer redesign and modernization services for existing websites and applications. We can update the UI/UX, improve performance, add new features, or rebuild from scratch while preserving your brand identity and improving user experience."
      },
      {
        title: "Do you build e-commerce websites?",
        details: "Yes, we specialize in creating custom e-commerce solutions as well as implementing platforms like Shopify, WooCommerce, and Magento. Our e-commerce websites include secure payment gateways, inventory management, order processing, and user-friendly interfaces."
      }
    ],
    'Pricing': [
      {
        title: "Do you offer fixed-price contracts?",
        details: "Yes, we offer both fixed-price and time-and-materials contracts depending on the nature and requirements of your project. Fixed-price is suitable for well-defined projects with clear scope, while time-and-materials works better for projects that may evolve during development."
      },
      {
        title: "What payment methods do you accept?",
        details: "We accept various payment methods including bank transfers, credit cards, and PayPal. For most projects, we typically require a deposit upfront, with the remaining amount paid in installments as the project progresses."
      },
      {
        title: "Are there any hidden costs?",
        details: "No, we believe in transparent pricing. Before starting any project, we provide a detailed quote outlining all costs involved. Any additional features or changes requested after the project has started will be quoted separately and approved by you before implementation."
      }
    ],
    'Technical': [
      {
        title: "Will my app work on both iOS and Android?",
        details: "Yes, we develop cross-platform mobile applications using Flutter and React Native that work seamlessly on both iOS and Android platforms from a single codebase, saving you time and development costs while ensuring consistent user experience."
      },
      {
        title: "How do you ensure the security of web applications?",
        details: "We implement industry best practices for security including secure authentication, data encryption, input validation, protection against common vulnerabilities (XSS, CSRF, SQL injection), regular security updates, and compliance with relevant regulations like GDPR where applicable."
      },
      {
        title: "Can you integrate my application with third-party services?",
        details: "Yes, we specialize in API integrations with various third-party services and platforms including payment gateways, CRM systems, marketing tools, social media platforms, analytics services, and more to extend the functionality of your application."
      }
    ],
    'Support': [
      {
        title: "What kind of support do you offer after launch?",
        details: "We offer comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and user support. We provide various maintenance packages to suit different needs and budgets."
      },
      {
        title: "How quickly do you respond to support requests?",
        details: "For clients on our maintenance plans, we typically respond to critical issues within 4-8 hours during business days. Non-critical issues are usually addressed within 24-48 hours. We also offer premium support options with faster response times for business-critical applications."
      },
      {
        title: "Do you provide training for using the developed software?",
        details: "Yes, we provide comprehensive documentation and training sessions to ensure you and your team are comfortable using and managing your new website or application. Additional training sessions can also be arranged if needed."
      }
    ]
  }

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6 md:px-10'>
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4'>HAVE QUESTIONS?</span>
          <h2 className='text-[#041436] text-4xl md:text-5xl font-bold mb-6'>Frequently Asked Questions</h2>
          <p className='text-gray-600 max-w-3xl mx-auto'>
            Find answers to common questions about our services, processes, and technologies.
            If you can't find what you're looking for, feel free to contact us directly.
          </p>
        </div>
        
        <div className='flex flex-col lg:flex-row gap-10'>
          {/* Categories */}
          <div className='lg:w-1/4'>
            <div className='bg-white rounded-xl shadow-md overflow-hidden sticky top-24'>
              <div className='p-6'>
                <h3 className='text-lg font-bold text-[#041436] mb-4'>Categories</h3>
                <div className='space-y-2'>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.title)}
                      className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                        activeCategory === category.title
                          ? 'bg-[#00FAA8]/10 text-[#041436] font-medium'
                          : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Items */}
          <div className='lg:w-3/4'>
            <div className='bg-white rounded-xl shadow-md overflow-hidden'>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-[#041436] mb-6'>{activeCategory} Questions</h3>
                <div className='space-y-4'>
                  {faqs[activeCategory]?.map((faq, index) => (
                    <div 
                      key={index} 
                      className='border border-gray-200 rounded-lg overflow-hidden'
                    >
                      <button
                        className='w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors duration-300'
                        onClick={() => toggleAccordion(index)}
                      >
                        <h4 className='text-[#041436] font-medium'>{faq.title}</h4>
                        {activeIndex === index ? (
                          <HiChevronUp className='text-[#00FAA8] text-xl' />
                        ) : (
                          <HiChevronDown className='text-[#041436] text-xl' />
                        )}
                      </button>
                      
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className='px-5 pb-5'
                        >
                          <p className='text-gray-600'>{faq.details}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenQesPart