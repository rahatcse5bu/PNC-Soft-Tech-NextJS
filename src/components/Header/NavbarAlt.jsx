'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navData = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  {
    title: 'Services',
    subLinks: [
      { title: 'Web Development', path: '/services/web-development' },
      { title: 'App Development', path: '/services/app-development' },
    ],
  },
  { title: 'Contact', path: '/contact' },
];

export default function NavBarAlt() {
  const [openNav, setOpenNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const NavList = () => (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-4">
      {navData.map((item, index) => (
        <li key={index} className="relative">
          {item.subLinks ? (
            <div className="group">
              <span className="cursor-pointer hover:text-blue-500">{item.title}</span>
              <ul className="absolute left-0 mt-2 hidden w-40 bg-white shadow-lg group-hover:block">
                {item.subLinks.map((subLink, subIndex) => (
                  <li key={subIndex} className="p-2 hover:bg-gray-200">
                    <Link href={subLink.path}>{subLink.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Link href={item.path} className="hover:text-blue-500">
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="sticky top-0 z-10 bg-gradient-to-r from-[#071952] to-[#071952] p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My Navbar</h1>

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <button
            onClick={() => setOpenNav(!openNav)}
            className="lg:hidden text-white focus:outline-none"
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        )}

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavList />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && openNav && (
        <div className="mt-4">
          <NavList />
        </div>
      )}
    </nav>
  );
}
