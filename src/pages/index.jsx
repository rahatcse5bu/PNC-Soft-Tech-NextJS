import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  // Service data with SVG icons
  const services = [
    {
      id: 1,
      title: "Mobile App Development",
      description: "Create stunning cross-platform mobile applications for iOS and Android using Flutter and React Native. Our apps offer native-like performance with beautiful UIs.",
      icon: (
        <svg className="w-12 h-12 text-[#00FAA8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 18H12.01M8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: "/Services/MobileAppDevelopment/page"
    },
    {
      id: 2,
      title: "Web Development",
      description: "Build modern, responsive websites and web applications using React.js, Next.js, and other cutting-edge frameworks. From landing pages to complex web apps.",
      icon: (
        <svg className="w-12 h-12 text-[#00FAA8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8L4.8125 9.0625M4.8125 9.0625L10.5 12.5L15 9.5L21 13.5M4.8125 9.0625V14.9375M21 8V16M3 16L10.5 21L21 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: "/Services/WebDevelopment/page"
    },
    {
      id: 3,
      title: "PHP Development",
      description: "Powerful backend solutions using PHP and Laravel. We create secure, scalable web applications with efficient database management and API integrations.",
      icon: (
        <svg className="w-12 h-12 text-[#00FAA8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M13.5 8L10.5 8C9.67157 8 9 8.67157 9 9.5C9 10.3284 9.67157 11 10.5 11H13.5C14.3284 11 15 11.6716 15 12.5C15 13.3284 14.3284 14 13.5 14H10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 8L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 8L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      link: "/Services/PHPDevelopment/page"
    },
    {
      id: 4,
      title: "API Integration",
      description: "Seamless API integration services connecting your applications with third-party services and platforms. REST API design, implementation, and optimization.",
      icon: (
        <svg className="w-12 h-12 text-[#00FAA8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 10C4 10 4.6 5 9 5C13.4 5 14 10 14 10M14 10H4M14 10C14 10 14.6 15 19 15C23.4 15 24 10 24 10M10 5V3M18 15V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: "/Services/APIIntegration/page"
    },
    {
      id: 5,
      title: "MERN Stack Development",
      description: "Full-stack web development using MongoDB, Express.js, React.js, and Node.js. Create dynamic, data-driven applications with modern JavaScript technologies.",
      icon: (
        <svg className="w-12 h-12 text-[#00FAA8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 16H11C7.5 16 5 13.9 5 11C5 8.1 7.5 6 11 6M11 6H13M11 6C11 6 11 4 11 3M17 12C17 14.8 19.5 16 21 16M21 8C19.5 8 17 9.2 17 12M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      link: "/Services/MERNStackDevelopment/page"
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "User-centered design that delights your customers. We create intuitive, accessible, and visually appealing interfaces that enhance the user experience.",
      icon: (
        <svg className="w-12 h-12 text-[#00FAA8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12H20M4 12C2.89543 12 2 11.1046 2 10V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V10C22 11.1046 21.1046 12 20 12M4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      link: "/Services/UIUXDesign/page"
    }
  ];

  // Featured projects
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured e-commerce platform with secure payment processing, inventory management, and analytics dashboard.",
      image: "/images/portfolio/ecommerce-project.jpg",
      link: "/Portfolio/page"
    },
    {
      id: 2,
      title: "Health & Fitness App",
      category: "Mobile App",
      description: "Cross-platform mobile application for tracking fitness activities, nutrition, and personalized workout plans.",
      image: "/images/portfolio/fitness-app.jpg",
      link: "/Portfolio/page"
    },
    {
      id: 3,
      title: "Corporate Banking Portal",
      category: "Web Application",
      description: "Secure banking portal with multi-factor authentication, real-time transaction processing, and reporting tools.",
      image: "/images/portfolio/banking-portal.jpg",
      link: "/Portfolio/page"
    }
  ];

  // Team members
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO & Founder",
      image: "/images/team/team-member-1.jpg",
      link: "/Team/page"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Lead Designer",
      image: "/images/team/team-member-2.jpg",
      link: "/Team/page"
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Senior Developer",
      image: "/images/team/team-member-3.jpg",
      link: "/Team/page"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      content: "Working with PNC Soft Tech transformed our business processes completely. Their team delivered a solution that exceeded our expectations and directly contributed to our 40% revenue growth.",
      author: "Jennifer Lewis",
      position: "COO, TechGlobal Inc.",
      avatar: "/images/testimonials/testimonial-1.jpg"
    },
    {
      id: 2,
      content: "The mobile app developed by PNC Soft Tech helped us engage with our customers in ways we never thought possible. The intuitive design and flawless functionality set us apart from competitors.",
      author: "Robert Martinez",
      position: "Marketing Director, Novus Solutions",
      avatar: "/images/testimonials/testimonial-2.jpg"
    }
  ];

  // Statistics data
  const stats = [
    { value: '150+', label: 'Projects Completed', delay: 0 },
    { value: '50+', label: 'Happy Clients', delay: 150 },
    { value: '25+', label: 'Team Members', delay: 300 },
    { value: '7+', label: 'Years Experience', delay: 450 }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00FAA8]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
          
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)',
              backgroundSize: '60px 60px' 
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Building <span className="text-[#00FAA8]">Digital Excellence</span> For Your Business
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Custom software solutions designed to transform your business operations and elevate your digital presence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/Contact/page" className="px-8 py-4 bg-[#00FAA8] text-slate-900 font-medium rounded-lg hover:bg-[#00dfa3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-md">
                  Get Started
                </Link>
                <Link href="/Services/page" className="px-8 py-4 bg-transparent text-white border-2 border-[#00FAA8]/30 hover:border-[#00FAA8] font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  Our Services
                </Link>
              </div>
              
              <div className="mt-12 flex items-center">
                <div className="flex -space-x-4">
                  {Array(4).fill().map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-800">
                        C{i+1}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <div className="flex text-[#00FAA8]">
                      {Array(5).fill().map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-white text-sm">Trusted by 50+ clients worldwide</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 p-1 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FAA8]/20 to-blue-500/20 opacity-50"></div>
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/hero/dashboard-mockup.jpg"
                    alt="Software Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do For Your Business</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital solutions to help your business grow and thrive in the modern digital landscape.
            </p>
            <div className="w-24 h-1 bg-[#00FAA8] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="mb-6 bg-gradient-to-br from-[#00FAA8]/10 to-blue-500/10 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FAA8]/0 to-[#00FAA8]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative text-[#00FAA8] group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#00FAA8] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  href={service.link} 
                  className="inline-flex items-center font-medium text-[#00FAA8] group-hover:text-slate-900 group-hover:bg-[#00FAA8] px-4 py-2 rounded-lg transition-all duration-300 group-hover:shadow-md"
                >
                  <span>Learn more</span>
                  <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <div className="w-full h-full" style={{ 
              backgroundImage: 'radial-gradient(circle, #00FAA8 1px, transparent 1px)',
              backgroundSize: '30px 30px',
              opacity: 0.1
            }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="group">
                  <div className="text-4xl md:text-5xl font-bold text-[#00FAA8] mb-2 group-hover:scale-110 transform transition-transform duration-300">
                    {stat.value}
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="portfolio">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Projects</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects delivering innovative solutions across various industries.
            </p>
            <div className="w-24 h-1 bg-[#00FAA8] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    layout="fill" 
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="inline-block px-3 py-1 bg-[#00FAA8] text-slate-900 text-xs font-semibold rounded-full mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                  <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {project.description}
                  </p>
                  <Link 
                    href={project.link} 
                    className="inline-flex items-center text-[#00FAA8] hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/Portfolio/page" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
            >
              <span>View All Projects</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Experts</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our talented team brings together years of industry experience and technical expertise.
            </p>
            <div className="w-24 h-1 bg-[#00FAA8] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    layout="fill" 
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-[#00FAA8] hover:text-slate-900 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-[#00FAA8] hover:text-slate-900 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-[#00FAA8] hover:text-slate-900 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#00FAA8] font-medium mb-4">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/Team/page" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FAA8] text-slate-900 rounded-lg hover:bg-[#00dfa3] transition-colors shadow-lg group"
            >
              Meet Our Team
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our work.
            </p>
            <div className="w-24 h-1 bg-[#00FAA8] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <svg className="absolute -top-6 -left-6 w-12 h-12 text-[#00FAA8]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.086.24-.573.13-.92.198-1.045.207-.16.01-.326.034-.496.07v3.37c.706 0 1.314-.104 1.84-.313.526-.207.886-.4 1.08-.578.193-.178.29-.39.29-.635zM11.192 8.988c0-.857-.23-1.585-.69-2.184-.326-.412-.77-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.086.24-.573.13-.92.198-1.045.207-.16.01-.327.034-.497.07v3.37c.707 0 1.314-.104 1.84-.313.527-.208.886-.4 1.08-.58.194-.176.29-.39.29-.633zM18.86 15.757c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.086.24-.573.13-.92.198-1.046.207-.16.01-.327.034-.497.07v3.37c.707 0 1.314-.104 1.84-.313.527-.207.887-.4 1.08-.578.194-.178.29-.39.29-.635zM18.86 8.988c0-.857-.23-1.585-.69-2.184-.326-.412-.77-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.086.24-.573.13-.92.198-1.046.207-.16.01-.327.034-.497.07v3.37c.707 0 1.314-.104 1.84-.313.527-.208.886-.4 1.08-.58.194-.176.29-.39.29-.633z" />
                </svg>
                
                <p className="text-gray-700 mb-6 relative z-10">{testimonial.content}</p>
                
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-[#00FAA8]">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      layout="fill" 
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute right-0 top-0 h-full w-1/2 text-[#00FAA8]/5" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M39.9,-68.1C51.9,-62.1,62.2,-52.5,68.7,-40.7C75.1,-28.9,77.7,-14.5,76.7,-0.6C75.6,13.2,70.9,26.5,63.6,39C56.2,51.6,46.3,63.5,33.7,70.2C21.1,76.9,5.8,78.5,-8.3,76.9C-22.4,75.3,-35.2,70.4,-45.8,62.5C-56.3,54.6,-64.5,43.5,-71.3,31C-78.1,18.4,-83.4,4.2,-81.8,-9.2C-80.1,-22.5,-71.6,-35,-60.6,-42.5C-49.6,-49.9,-36.2,-52.4,-24.6,-58.5C-13,-64.6,-3.3,-74.4,7.4,-75.5C18.1,-76.5,27.9,-74,39.9,-68.1Z" transform="translate(75 75)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your ideas into reality.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                <Link 
                  href="/Contact/page" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#00FAA8] text-slate-900 font-medium rounded-lg hover:bg-[#00dfa3] transition-colors shadow-lg group"
                >
                  Contact Us
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <div className="flex items-center gap-3">
                  <a href="tel:+1234567890" className="flex items-center gap-2 text-white hover:text-[#00FAA8] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (123) 456-7890
                  </a>
                  <span className="text-gray-500">or</span>
                  <a href="mailto:info@pncsofttech.com" className="flex items-center gap-2 text-white hover:text-[#00FAA8] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@pncsofttech.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
