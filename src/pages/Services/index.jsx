/* eslint-disable no-unused-vars */
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Banner from '../../Shared/Banner/Banner'
import Services from './Services'
import ServiceList from '../../components/Services/ServiceList'
import { ScrollToTop } from '../../constant/ScrollToTop'
import MainLayout from '../../Layout/MainLayout'
import PageHeader from '../../components/common/PageHeader';


const ServicePage = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web solutions tailored to your business needs with modern frameworks and technologies.",
      icon: "/icons/web-dev.svg", // You'll need to add these icons to your public folder
      link: "/Services/WebDevelopment/page",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: "/icons/mobile-dev.svg",
      link: "/Services/MobileAppDevelopment/page",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality for maximum impact.",
      icon: "/icons/ui-design.svg",
      link: "/Services/UIUXDesign/page",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      title: "Cloud Services",
      description: "Secure, scalable cloud infrastructure and solutions to power your digital transformation.",
      icon: "/icons/cloud.svg",
      link: "/Services/CloudServices/page",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive growth, engagement, and conversions.",
      icon: "/icons/marketing.svg",
      link: "/Services/DigitalMarketing/page",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <ScrollToTop />
      <Banner title="Services" linkText="Service" />
      <Services />
      <div className="container mx-auto px-4 py-16">
        <PageHeader 
          title="Our Services" 
          description="We deliver innovative IT solutions to help businesses thrive in the digital age"
        />
        
        {/* Hero section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white rounded-xl p-8 md:p-12 mb-16 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Transform Your Business with Technology</h2>
            <p className="text-lg mb-6">We combine technical expertise with industry knowledge to deliver solutions that drive growth and efficiency.</p>
            <button className="bg-white text-indigo-800 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300">
              Get a Free Consultation
            </button>
          </div>
        </div>
        
        {/* What We Do For Your Business Section */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-center mb-16 relative">
            What We Do For Your Business
            <div className="absolute w-24 h-1 bg-blue-600 bottom-[-10px] left-1/2 transform -translate-x-1/2"></div>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <div className="relative h-[500px] w-full">
                  <Image 
                    src="/images/business-transformation.jpg" 
                    alt="Digital Business Transformation" 
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-500"
                  />
                </div>
              </div>
              {/* Floating accent element */}
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-indigo-600 rounded-full opacity-80 hidden lg:block"></div>
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-400 rounded-full opacity-70 hidden lg:block"></div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="p-3 bg-white rounded-xl shadow-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="rounded-full w-14 h-14 flex items-center justify-center bg-blue-600 text-white mb-4">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Digital Transformation</h3>
                    <p className="text-gray-600">We help businesses evolve by implementing cutting-edge digital solutions that drive growth and efficiency.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="rounded-full w-14 h-14 flex items-center justify-center bg-blue-600 text-white mb-4">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Custom Software</h3>
                    <p className="text-gray-600">We develop tailored software solutions that address your unique business challenges and requirements.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="rounded-full w-14 h-14 flex items-center justify-center bg-blue-600 text-white mb-4">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Business Growth</h3>
                    <p className="text-gray-600">Our solutions are designed to optimize operations, enhance customer experience, and accelerate your business growth.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="rounded-full w-14 h-14 flex items-center justify-center bg-blue-600 text-white mb-4">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Expert Consulting</h3>
                    <p className="text-gray-600">Our team of industry experts provides strategic technology consulting to help you make informed decisions.</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to transform your business?</h3>
                      <p className="text-gray-600">Let's discuss how our services can address your specific needs</p>
                    </div>
                    <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services grid with enhanced design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <Link key={service.id} href={service.link} className="block">
              <div className={`service-card p-8 ${service.bgColor} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col transform hover:-translate-y-2`}>
                <div className={`${service.iconColor} text-4xl mb-6`}>
                  {/* Replace with actual SVG icons when available */}
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                    <span className="text-2xl">{service.icon.includes('.svg') ? '🔹' : '🔹'}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <div className="w-16 h-1 bg-gray-300 mb-4"></div>
                <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
                <div className={`${service.iconColor} font-medium flex items-center text-sm group`}>
                  EXPLORE SERVICE 
                  <svg className="w-5 h-5 ml-2 group-hover:ml-3 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Call to action section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Let's discuss how our services can help you achieve your business goals.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
              Contact Us
            </button>
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition duration-300 shadow-md">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
      <ServiceList />
    </div>
  )
}

ServicePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ServicePage