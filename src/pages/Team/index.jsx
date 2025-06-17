/* eslint-disable no-unused-vars */
import React from 'react'
import PageHeader from '../../components/common/PageHeader'
import Image from 'next/image'

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Md. Rahat",
      position: "CEO & Founder",
      bio: "With over 5 years of experience in software development and business leadership, John has built PNC Soft Tech from the ground up.",
      image: "/images/team/Rahat-No-BG.png",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      expertise: ["Strategic Planning", "Business Development", "Software Architecture"]
    },
    {
      id: 2,
      name: "Sujan Mridha",
      position: "CTO",
      bio: "Sujan leads our technical teams and ensures we stay at the cutting edge of technology while delivering robust solutions.",
      image: "/images/team/team-member-2.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      expertise: ["System Architecture", "Cloud Infrastructure", "Team Leadership"]
    },
    {
      id: 3,
      name: "Md. Anis Molla",
      position: "MERN Stack Developer",
      bio: "Anis is an expert in full-stack development with a passion for clean code and optimal performance.",
      image: "/images/team/team-member-3.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      expertise: ["React", "Node.js", "Database Design"]
    },
    {
      id: 4,
      name: "Razinul Karim ",
      position: "UI/UX Designer",
      bio: "Razinul creates beautiful and intuitive user interfaces that bridge the gap between human needs and digital solutions.",
      image: "/images/team/team-member-4.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      expertise: ["UI Design", "User Research", "Design Systems"]
    },
    {
      id: 5,
      name: "Md. Rahat",
      position: "Mobile Development Lead",
      bio: "Rahat specializes in creating seamless mobile experiences across iOS and Android platforms.",
      image: "/images/team/team-member-5.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      expertise: ["React Native", "iOS", "Android"]
    },
    {
      id: 6,
      name: "Sujan Mridha",
      position: "MERN Stack Developer",
      bio: "Sujan leverages data-driven strategies to enhance our clients' market presence and drive customer engagement.",
      image: "/images/team/team-member-6.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      expertise: ["SEO", "Content Strategy", "Analytics"]
    },
    {
      id: 7,
      name: "Subal Karmaker",
      position: "Flutter  Developer",
      bio: "Subal leverages data-driven strategies to enhance our clients' market presence and drive customer engagement.",
      image: "/images/team/team-member-6.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      expertise: ["SEO", "Content Strategy", "Analytics"]
    }
  ];
  
  const leadershipTeam = teamMembers.slice(0, 3);
  const coreTeam = teamMembers.slice(2);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <PageHeader 
          title="Our Team" 
          description="Meet the talented professionals behind PNC Soft Tech"
        />
        
        {/* Team intro section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl p-8 md:p-12 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full">
            <svg className="absolute right-0 top-0 h-full w-1/2 text-[#00FAA8]/10" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M39.9,-68.1C51.9,-62.1,62.2,-52.5,68.7,-40.7C75.1,-28.9,77.7,-14.5,76.7,-0.6C75.6,13.2,70.9,26.5,63.6,39C56.2,51.6,46.3,63.5,33.7,70.2C21.1,76.9,5.8,78.5,-8.3,76.9C-22.4,75.3,-35.2,70.4,-45.8,62.5C-56.3,54.6,-64.5,43.5,-71.3,31C-78.1,18.4,-83.4,4.2,-81.8,-9.2C-80.1,-22.5,-71.6,-35,-60.6,-42.5C-49.6,-49.9,-36.2,-52.4,-24.6,-58.5C-13,-64.6,-3.3,-74.4,7.4,-75.5C18.1,-76.5,27.9,-74,39.9,-68.1Z" transform="translate(75 75)" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Building Digital Excellence Together</h2>
            <p className="text-lg mb-6">Our diverse team of experts is passionate about creating innovative solutions that drive your business forward.</p>
            <div className="inline-block border-b-2 border-[#00FAA8] w-24"></div>
          </div>
        </div>
        
        {/* Leadership section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center relative">
            Leadership Team
            <div className="absolute w-20 h-1 bg-[#00FAA8] bottom-[-10px] left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {leadershipTeam.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transform transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative">
                  <div className="relative h-80 w-full">
                    <Image 
                      src={member.image}
                      alt={member.name} 
                      layout="fill" 
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex space-x-3">
                      <a href={member.socialLinks.linkedin} className="bg-white/20 p-2 rounded-full hover:bg-[#00FAA8] hover:text-slate-900 transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href={member.socialLinks.twitter} className="bg-white/20 p-2 rounded-full hover:bg-[#00FAA8] hover:text-slate-900 transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href={member.socialLinks.github} className="bg-white/20 p-2 rounded-full hover:bg-[#00FAA8] hover:text-slate-900 transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-[#00FAA8] font-medium">{member.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Core team section */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center relative">
            Core Team
            <div className="absolute w-20 h-1 bg-[#00FAA8] bottom-[-10px] left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
              >
                <div className="h-64 relative overflow-hidden group">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    layout="fill" 
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-2">
                      <a href={member.socialLinks.linkedin} className="bg-white/20 p-2 rounded-full hover:bg-[#00FAA8] hover:text-slate-900 transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href={member.socialLinks.twitter} className="bg-white/20 p-2 rounded-full hover:bg-[#00FAA8] hover:text-slate-900 transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href={member.socialLinks.github} className="bg-white/20 p-2 rounded-full hover:bg-[#00FAA8] hover:text-slate-900 transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#00FAA8] font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Join our team section */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-12 shadow-xl text-white">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-gray-300">We're always looking for talented individuals who are passionate about technology and innovation.</p>
            </div>
            <div>
              <a href="/Careers/page" className="inline-block bg-[#00FAA8] text-slate-900 font-medium px-6 py-3 rounded-lg hover:bg-[#00dfa3] transition duration-300 shadow-md">
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPage