import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LogoImage from "../Header/PNC-Soft-Tech-Rect.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Monitor scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const serviceLinks = [
    { name: 'All Services', path: '/Services/page' },
    { name: 'Web Development', path: '/Services/WebDevelopment/page' },
    { name: 'Mobile App Development', path: '/Services/MobileAppDevelopment/page' },
    { name: 'UI/UX Design', path: '/Services/UIUXDesign/page' },
    { name: 'Cloud Services', path: '/Services/CloudServices/page' },
    { name: 'Digital Marketing', path: '/Services/DigitalMarketing/page' },
  ];

  const isActiveLink = (path) => {
    if (path === '/' && router.pathname === '/') return true;
    if (path !== '/' && router.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Topbar */}
      <div className="bg-slate-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@pncsofttech.com</span>
            </div>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="text-white hover:text-[#00FAA8] transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#00FAA8] transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#00FAA8] transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md'} transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-12 w-auto relative overflow-hidden">
                {/* Adding a background to make the transparent logo visible */}
                <div className="absolute inset-0 bg-slate-900 rounded-md"></div>
                <Image
                  src={LogoImage}
                  className="h-full w-auto relative z-10"
                  alt="PNC Soft Tech Logo"
                  height={48} 
                  width={120}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActiveLink('/') ? 'text-[#00FAA8]' : 'text-gray-700 hover:text-[#00FAA8] hover:bg-gray-50'} transition-colors`}>
                Home
              </Link>
              <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActiveLink('/about') ? 'text-[#00FAA8]' : 'text-gray-700 hover:text-[#00FAA8] hover:bg-gray-50'} transition-colors`}>
                About Us
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <a 
                  href="#" 
                  onClick={toggleServices}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${isActiveLink('/Services') ? 'text-[#00FAA8]' : 'text-gray-700 hover:text-[#00FAA8] hover:bg-gray-50'} transition-colors`}
                >
                  Services
                  <svg 
                    className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                
                {/* Dropdown Menu */}
                <div className={`absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg transition-all duration-200 origin-top-left ${isServicesOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                  <div className="py-1 rounded-md bg-white shadow-xs">
                    {serviceLinks.map((service, index) => (
                      <Link 
                        key={index} 
                        href={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00FAA8]"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <Link href="/Portfolio/page" className={`px-3 py-2 rounded-md text-sm font-medium ${isActiveLink('/Portfolio') ? 'text-[#00FAA8]' : 'text-gray-700 hover:text-[#00FAA8] hover:bg-gray-50'} transition-colors`}>
                Portfolio
              </Link>
              
              <Link href="/Team/page" className={`px-3 py-2 rounded-md text-sm font-medium ${isActiveLink('/Team') ? 'text-[#00FAA8]' : 'text-gray-700 hover:text-[#00FAA8] hover:bg-gray-50'} transition-colors`}>
                Our Team
              </Link>
              
              <Link href="/Careers/page" className={`px-3 py-2 rounded-md text-sm font-medium ${isActiveLink('/Careers') ? 'text-[#00FAA8]' : 'text-gray-700 hover:text-[#00FAA8] hover:bg-gray-50'} transition-colors`}>
                Careers
              </Link>
              
              <Link href="/FAQ/page" className={`px-3 py-2 rounded-md text-sm font-medium ${isActiveLink('/FAQ') ? 'text-[#00FAA8]' : 'text-gray-700 hover:text-[#00FAA8] hover:bg-gray-50'} transition-colors`}>
                FAQ
              </Link>
              
              <Link href="/Contact/page" className={`px-3 py-2 rounded-md text-sm font-medium ${isActiveLink('/Contact') ? 'text-[#00FAA8]' : 'text-gray-700 hover:text-[#00FAA8] hover:bg-gray-50'} transition-colors`}>
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/Contact/page" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#00FAA8] hover:bg-[#00dfa3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00FAA8] shadow-sm transition-colors">
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#00FAA8] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00FAA8]"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isActiveLink('/') ? 'bg-gray-50 text-[#00FAA8]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#00FAA8]'}`}>
              Home
            </Link>
            
            <Link href="/about" className={`block px-3 py-2 rounded-md textBase font-medium ${isActiveLink('/about') ? 'bg-gray-50 text-[#00FAA8]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#00FAA8]'}`}>
              About Us
            </Link>
            
            {/* Services Dropdown - Mobile */}
            <div>
              <button 
                onClick={toggleServices}
                className={`w-full text-left flex justify-between items-center px-3 py-2 rounded-md textBase font-medium ${isActiveLink('/Services') ? 'bg-gray-50 text-[#00FAA8]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#00FAA8]'}`}
              >
                <span>Services</span>
                <svg 
                  className={`ml-1 w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`transition-all duration-200 overflow-hidden ${isServicesOpen ? 'max-h-screen opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 pr-2 py-1 border-l-2 border-[#00FAA8]/20 ml-3">
                  {serviceLinks.map((service, index) => (
                    <Link
                      key={index}
                      href={service.path}
                      className="block px-3 py-2 rounded-md textBase font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00FAA8]"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link href="/Portfolio/page" className={`block px-3 py-2 rounded-md textBase font-medium ${isActiveLink('/Portfolio') ? 'bg-gray-50 text-[#00FAA8]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#00FAA8]'}`}>
              Portfolio
            </Link>
            
            <Link href="/Team/page" className={`block px-3 py-2 rounded-md textBase font-medium ${isActiveLink('/Team') ? 'bg-gray-50 text-[#00FAA8]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#00FAA8]'}`}>
              Our Team
            </Link>
            
            <Link href="/Careers/page" className={`block px-3 py-2 rounded-md textBase font-medium ${isActiveLink('/Careers') ? 'bg-gray-50 text-[#00FAA8]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#00FAA8]'}`}>
              Careers
            </Link>
            
            <Link href="/FAQ/page" className={`block px-3 py-2 rounded-md textBase font-medium ${isActiveLink('/FAQ') ? 'bg-gray-50 text-[#00FAA8]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#00FAA8]'}`}>
              FAQ
            </Link>
            
            <Link href="/Contact/page" className={`block px-3 py-2 rounded-md textBase font-medium ${isActiveLink('/Contact') ? 'bg-gray-50 text-[#00FAA8]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#00FAA8]'}`}>
              Contact
            </Link>

            <div className="pt-2">
              <Link href="/Contact/page" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#00FAA8] hover:bg-[#00dfa3] shadow-sm">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;