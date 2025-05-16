import React from 'react'
import Banner from '../../Shared/Banner/Banner'
import { ScrollToTop } from '../../constant/ScrollToTop'
import Image from 'next/image'
import { FaCode, FaTabletAlt, FaMobileAlt, FaRocket, FaRegCheckCircle } from 'react-icons/fa'
import Link from 'next/link'

const MobileAppDevelopment = () => {
  const benefits = [
    "Cross-platform compatibility (Android & iOS)",
    "Native-like performance with Flutter",
    "Elegant and responsive UI design",
    "Offline functionality capabilities",
    "Secure data management",
    "Integration with device features (camera, GPS, etc.)",
    "Push notifications support",
    "Seamless backend integration",
  ]

  const developmentProcess = [
    {
      icon: <FaCode />,
      title: "Requirement Analysis",
      description: "We begin by understanding your business needs, target audience, and app requirements to create a comprehensive development plan."
    },
    {
      icon: <FaTabletAlt />,
      title: "UI/UX Design",
      description: "Our designers create intuitive, user-friendly interfaces that enhance user experience while maintaining your brand identity."
    },
    {
      icon: <FaMobileAlt />,
      title: "Development",
      description: "Using Flutter or React Native, we develop high-performance, cross-platform applications that work seamlessly on iOS and Android."
    },
    {
      icon: <FaRocket />,
      title: "Testing & Deployment",
      description: "Rigorous testing ensures your app is bug-free before deploying to app stores or your private distribution channels."
    }
  ]

  return (
    <div>
      <ScrollToTop />
      <Banner title="Mobile App Development" linkText="Services / Mobile App Development" />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4">MOBILE SOLUTIONS</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#041436] mb-6">Mobile App Development Services</h1>
              <p className="text-gray-600 mb-8">
                PNC Soft Tech specializes in creating custom mobile applications that engage users and drive business growth. 
                Using Flutter and React Native, we develop high-performance apps for both Android and iOS platforms from a single codebase.
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
                    src="/profile/mobile-app.jpg" 
                    alt="Mobile App Development" 
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

      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4">OUR PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#041436] mb-6">Our Development Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured and collaborative development process to ensure your mobile app meets your business objectives and user expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-[#00FAA8]/20 text-[#041436] rounded-lg text-2xl mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#041436] mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features and Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4">ADVANTAGES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#041436] mb-6">Benefits of Our Mobile Apps</h2>
              <p className="text-gray-600 mb-8">
                Our mobile applications are designed with your business goals and user needs in mind, providing numerous advantages:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FaRegCheckCircle className="text-[#00FAA8] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/profile/flutter.jpg" 
                    alt="Flutter Development" 
                    width={300} 
                    height={300} 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg mt-12">
                  <Image 
                    src="/profile/react-native.jpg" 
                    alt="React Native Development" 
                    width={300} 
                    height={300} 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/profile/mobile-ux.jpg" 
                    alt="Mobile UX Design" 
                    width={300} 
                    height={300} 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg mt-12">
                  <Image 
                    src="/profile/pnc.jpg" 
                    alt="PNC Soft Tech" 
                    width={300} 
                    height={300} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#041436] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10">
            Whether you're looking to create a new mobile application or enhance an existing one, 
            our team is ready to bring your vision to life with cutting-edge technology and exceptional design.
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

export default MobileAppDevelopment
