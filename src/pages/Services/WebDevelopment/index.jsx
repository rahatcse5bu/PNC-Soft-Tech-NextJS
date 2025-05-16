import React from 'react'
import Banner from '../../Shared/Banner/Banner'
import { ScrollToTop } from '../../constant/ScrollToTop'
import Image from 'next/image'
import { FaCode, FaPalette, FaMobileAlt, FaServer, FaRegCheckCircle, FaLaptopCode, FaDatabase, FaRocket } from 'react-icons/fa'
import Link from 'next/link'

const WebDevelopment = () => {
  const technologies = [
    "React.js & Next.js",
    "MERN Stack (MongoDB, Express, React, Node.js)",
    "PHP & Laravel",
    "JavaScript & TypeScript",
    "HTML5, CSS3, Tailwind CSS, Bootstrap",
    "MySQL, PostgreSQL, MongoDB",
    "REST API Design & Development",
    "AWS, Vercel, Netlify Deployment"
  ]

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description: "We create responsive, interactive, and visually appealing frontend interfaces using modern frameworks like React.js and Next.js."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Our backend solutions are built with Node.js, Express, PHP or Laravel to create secure, scalable server-side applications."
    },
    {
      icon: <FaDatabase />,
      title: "Database Integration",
      description: "We implement and optimize database solutions including MySQL, PostgreSQL, and MongoDB for efficient data management."
    },
    {
      icon: <FaRocket />,
      title: "Web Application Deployment",
      description: "We handle the complete deployment process on platforms like AWS, Vercel, or Netlify with proper configuration and optimization."
    }
  ]

  return (
    <div>
      <ScrollToTop />
      <Banner title="Web Development" linkText="Services / Web Development" />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4">WEB SOLUTIONS</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#041436] mb-6">Web Development Services</h1>
              <p className="text-gray-600 mb-8">
                PNC Soft Tech builds modern, responsive, and high-performance web applications tailored to your business needs. 
                From static marketing websites to complex web applications, we create solutions that engage users and drive conversions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/ContactPage">
                  <span className="inline-block px-6 py-3 bg-[#041436] text-white rounded-lg hover:bg-[#041436]/90 transition-colors duration-300">Request a Quote</span>
                </Link>
                <Link href="/ProjectsPage">
                  <span className="inline-block px-6 py-3 border border-[#041436] text-[#041436] rounded-lg hover:bg-gray-50 transition-colors duration-300">View Portfolio</span>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="/profile/pnc.jpg" 
                    alt="Web Development" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00FAA8]/20 rounded-full z-0"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#041436]/10 rounded-full z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#041436] mb-6">Web Development Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive web development services to help businesses establish a strong online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-[#00FAA8]/20 text-[#041436] rounded-lg text-2xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#041436] mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="/profile/pnc.jpg" 
                      alt="Web Design" 
                      width={300} 
                      height={300} 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg mt-12">
                    <Image 
                      src="/profile/pnc.jpg" 
                      alt="Web Development" 
                      width={300} 
                      height={300} 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="/profile/pnc.jpg" 
                      alt="API Development" 
                      width={300} 
                      height={300} 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg mt-12">
                    <Image 
                      src="/profile/pnc.jpg" 
                      alt="Web Performance" 
                      width={300} 
                      height={300} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4">TECHNOLOGIES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#041436] mb-6">Our Web Development Stack</h2>
              <p className="text-gray-600 mb-8">
                We leverage the latest web technologies and frameworks to build fast, secure, and scalable web applications:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FaRegCheckCircle className="text-[#00FAA8] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4">OUR PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#041436] mb-6">Web Development Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive and collaborative approach to web development to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-[#00FAA8]/30 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-[#041436] text-white rounded-full text-xl mx-auto mb-4 relative">
                  <span>01</span>
                </div>
                <h3 className="text-lg font-bold text-[#041436] mb-3">Discovery & Planning</h3>
                <p className="text-gray-600 text-sm">Understanding your business goals, target audience, and project requirements.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-[#041436] text-white rounded-full text-xl mx-auto mb-4">
                  <span>02</span>
                </div>
                <h3 className="text-lg font-bold text-[#041436] mb-3">Design & Prototyping</h3>
                <p className="text-gray-600 text-sm">Creating wireframes, mockups, and interactive prototypes for your approval.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-[#041436] text-white rounded-full text-xl mx-auto mb-4">
                  <span>03</span>
                </div>
                <h3 className="text-lg font-bold text-[#041436] mb-3">Development & Testing</h3>
                <p className="text-gray-600 text-sm">Building the website/application with clean code and comprehensive testing.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-[#041436] text-white rounded-full text-xl mx-auto mb-4">
                  <span>04</span>
                </div>
                <h3 className="text-lg font-bold text-[#041436] mb-3">Deployment & Support</h3>
                <p className="text-gray-600 text-sm">Launching your project and providing ongoing maintenance and support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#041436] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Web Project?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10">
            Whether you need a new website, a web application, or want to improve your existing digital presence,
            our team is ready to help you achieve your goals with cutting-edge web development solutions.
          </p>
          <Link href="/ContactPage">
            <span className="inline-block px-8 py-4 bg-[#00FAA8] text-[#041436] rounded-lg hover:bg-[#00FAA8]/90 transition-colors duration-300 font-medium">
              Contact Us Today
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default WebDevelopment
