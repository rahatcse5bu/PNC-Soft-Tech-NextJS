import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioPage = () => {
  // Portfolio project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/images/portfolio/ecommerce-platform.jpg",
      description: "A full-featured e-commerce platform with secure payment processing and inventory management.",
      link: "/portfolio/ecommerce-platform"
    },
    {
      id: 2,
      title: "Financial Dashboard",
      category: "web",
      tags: ["Angular", "Express", "SQL"],
      image: "/images/portfolio/financial-dashboard.jpg",
      description: "Interactive financial dashboard for real-time data visualization and financial analytics.",
      link: "/portfolio/financial-dashboard"
    },
    {
      id: 3,
      title: "Fitness Tracker App",
      category: "app",
      tags: ["React Native", "Firebase"],
      image: "/images/portfolio/fitness-tracker.jpg",
      description: "Mobile application for tracking workouts, nutrition, and health metrics with social features.",
      link: "/portfolio/fitness-tracker"
    },
    {
      id: 4,
      title: "Real Estate Marketplace",
      category: "web",
      tags: ["Next.js", "Tailwind CSS", "GraphQL"],
      image: "/images/portfolio/real-estate.jpg",
      description: "Property listing platform with advanced search, virtual tours, and agent integration.",
      link: "/portfolio/real-estate-marketplace"
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "app",
      tags: ["Flutter", "Firebase", "Google Maps API"],
      image: "/images/portfolio/food-delivery.jpg",
      description: "Mobile application for ordering food with real-time order tracking and payment integration.",
      link: "/portfolio/food-delivery"
    },
    {
      id: 6,
      title: "Learning Management System",
      category: "web",
      tags: ["Vue.js", "Laravel", "MySQL"],
      image: "/images/portfolio/lms-platform.jpg",
      description: "Comprehensive learning platform with course management, assessments, and analytics.",
      link: "/portfolio/learning-management"
    },
    {
      id: 7,
      title: "Travel Companion App",
      category: "app",
      tags: ["React Native", "Node.js", "MongoDB"],
      image: "/images/portfolio/travel-app.jpg",
      description: "Travel planning and itinerary management app with location-based recommendations.",
      link: "/portfolio/travel-companion"
    },
    {
      id: 8,
      title: "Healthcare Portal",
      category: "web",
      tags: ["React", "Express", "PostgreSQL"],
      image: "/images/portfolio/healthcare-portal.jpg",
      description: "Secure healthcare platform for patient records, appointment scheduling, and telemedicine.",
      link: "/portfolio/healthcare-portal"
    },
    {
      id: 9,
      title: "Smart Home Control App",
      category: "app",
      tags: ["Swift", "IoT", "AWS"],
      image: "/images/portfolio/smart-home.jpg",
      description: "iOS application for controlling smart home devices with automation and voice commands.",
      link: "/portfolio/smart-home-control"
    }
  ];

  // State for filtered projects and active filter
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Filter categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "app", name: "App Development" }
  ];

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === activeFilter);
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  // Handle filter change
  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <PageHeader 
          title="Our Portfolio" 
          description="Explore our successful projects and digital solutions"
        />
        
        {/* Filter Navigation */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-[#00FAA8] text-slate-900 shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-[#00FAA8]/80 text-slate-900 text-xs px-2 py-1 rounded font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link 
                  href={project.link} 
                  className="inline-flex items-center font-medium text-[#00FAA8] hover:text-[#00dfa3]"
                >
                  View Project
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state if no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-600">No projects found in this category.</h3>
            <button 
              onClick={() => setActiveFilter("all")}
              className="mt-4 px-6 py-2 bg-[#00FAA8] text-slate-900 rounded-full hover:bg-[#00dfa3] transition-colors"
            >
              View All Projects
            </button>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-12 shadow-xl text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Next Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Partner with us to turn your ideas into reality with cutting-edge technology and expert development.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/Contact/page" className="bg-[#00FAA8] text-slate-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#00dfa3] transition duration-300">
              Start a Project
            </Link>
            <Link href="/Services/page" className="bg-transparent text-white font-semibold px-8 py-3 rounded-full border-2 border-[#00FAA8] hover:bg-[#00FAA8]/10 transition duration-300">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
