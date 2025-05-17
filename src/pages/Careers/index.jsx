import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Image from 'next/image';
import Link from 'next/link';

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState('openings');
  
  // Job openings data
  const jobOpenings = [
    {
      id: 'job1',
      title: 'Senior Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      posted: '2 weeks ago',
      description: 'We are looking for an experienced Frontend Developer with expertise in React.js and Next.js to join our growing team. You will be responsible for building responsive web applications and collaborating with cross-functional teams.',
      requirements: [
        'Minimum 4 years of experience with React.js and modern JavaScript',
        'Experience with Next.js and TypeScript',
        'Strong understanding of responsive design and cross-browser compatibility',
        'Familiarity with state management solutions (Redux, Context API)',
        'Excellent problem-solving and communication skills'
      ]
    },
    {
      id: 'job2',
      title: 'UX/UI Designer',
      location: 'On-site / Hybrid',
      type: 'Full-time',
      department: 'Design',
      posted: '1 week ago',
      description: 'We are seeking a talented UX/UI Designer to create intuitive and engaging user experiences for our clients. You will work closely with clients and development teams to transform business requirements into compelling designs.',
      requirements: [
        'Portfolio demonstrating strong UI/UX design skills',
        'Experience with design tools like Figma, Adobe XD, or Sketch',
        'Understanding of user research and usability testing',
        'Knowledge of accessibility standards',
        'Excellent visual design skills and attention to detail'
      ]
    },
    {
      id: 'job3',
      title: 'Backend Developer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      posted: '3 days ago',
      description: 'We are looking for a Backend Developer with Node.js experience to build scalable and secure server-side applications. You will work on API development, database management, and system architecture.',
      requirements: [
        'Strong experience with Node.js and Express.js',
        'Proficiency in working with databases (SQL and NoSQL)',
        'Knowledge of RESTful API design principles',
        'Experience with cloud services (AWS, Azure, or GCP)',
        'Understanding of security best practices'
      ]
    },
    {
      id: 'job4',
      title: 'Digital Marketing Specialist',
      location: 'Hybrid',
      type: 'Full-time',
      department: 'Marketing',
      posted: '5 days ago',
      description: 'We are seeking a Digital Marketing Specialist to develop and implement effective marketing strategies for our clients. You will work with various digital channels to increase brand awareness and drive customer engagement.',
      requirements: [
        'Experience in SEO, SEM, and social media marketing',
        'Understanding of analytics tools and data-driven marketing',
        'Knowledge of content marketing strategies',
        'Experience with email marketing campaigns',
        'Excellent communication and presentation skills'
      ]
    }
  ];

  const [expandedJob, setExpandedJob] = useState(null);
  
  const toggleJobDetails = (jobId) => {
    if (expandedJob === jobId) {
      setExpandedJob(null);
    } else {
      setExpandedJob(jobId);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <PageHeader 
          title="Join Our Team" 
          description="Explore career opportunities at PNC Soft Tech"
        />
        
        {/* Hero Banner */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-16">
          <Image
            src="/images/careers/team-working.jpg"
            alt="PNC Soft Tech Team"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/80 flex items-center">
            <div className="px-8 md:px-16 max-w-2xl text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Career With Us</h2>
              <p className="text-lg mb-6">Join our team of passionate innovators to build cutting-edge solutions that make a difference.</p>
              <a href="#job-openings" className="inline-block px-6 py-3 bg-[#00FAA8] text-slate-900 font-medium rounded-full hover:bg-[#00dfa3] transition-colors shadow-md">
                View Open Positions
              </a>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('openings')}
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === 'openings'
                  ? 'text-[#00FAA8] border-b-2 border-[#00FAA8]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Open Positions
            </button>
            <button
              onClick={() => setActiveTab('culture')}
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === 'culture'
                  ? 'text-[#00FAA8] border-b-2 border-[#00FAA8]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Our Culture
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === 'benefits'
                  ? 'text-[#00FAA8] border-b-2 border-[#00FAA8]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Benefits
            </button>
          </div>
        </div>
        
        {/* Job Openings Tab */}
        {activeTab === 'openings' && (
          <div id="job-openings" className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
            {jobOpenings.length > 0 ? (
              <div className="space-y-6">
                {jobOpenings.map((job) => (
                  <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                    <div className="p-6">
                      <div className="flex flex-wrap justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-3 mb-4">
                            <span className="inline-flex items-center text-sm text-gray-600">
                              <svg className="w-4 h-4 mr-1 text-[#00FAA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                              {job.location}
                            </span>
                            <span className="inline-flex items-center text-sm text-gray-600">
                              <svg className="w-4 h-4 mr-1 text-[#00FAA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              {job.type}
                            </span>
                            <span className="inline-flex items-center text-sm text-gray-600">
                              <svg className="w-4 h-4 mr-1 text-[#00FAA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                              </svg>
                              {job.department}
                            </span>
                            <span className="inline-flex items-center text-sm text-[#00FAA8] font-medium">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                              Posted {job.posted}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleJobDetails(job.id)}
                          className="text-[#00FAA8] font-medium flex items-center"
                        >
                          {expandedJob === job.id ? 'Hide Details' : 'View Details'}
                          <svg
                            className={`w-5 h-5 ml-1 transform transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                      </div>
                      
                      {expandedJob === job.id && (
                        <div className="mt-4 border-t pt-4">
                          <p className="text-gray-700 mb-4">{job.description}</p>
                          <h4 className="font-bold text-gray-800 mb-2">Requirements:</h4>
                          <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-1">
                            {job.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                          <Link 
                            href={`/careers/apply/${job.id}`}
                            className="inline-block px-6 py-3 bg-[#00FAA8] text-slate-900 font-medium rounded-lg hover:bg-[#00dfa3] transition-colors shadow-md"
                          >
                            Apply Now
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No open positions at this time</h3>
                <p className="mt-1 text-gray-500">Please check back later or send your resume to careers@pncsofttech.com</p>
              </div>
            )}
            
            {/* Speculative Application */}
            <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Don't see a position that fits?</h3>
              <p className="text-gray-300 mb-4">We're always looking for talented individuals to join our team. Send us your resume, and we'll keep it on file for future opportunities.</p>
              <Link 
                href="/careers/speculative"
                className="inline-block px-6 py-3 bg-[#00FAA8] text-slate-900 font-medium rounded-lg hover:bg-[#00dfa3] transition-colors shadow-md"
              >
                Submit Your Resume
              </Link>
            </div>
          </div>
        )}
        
        {/* Culture Tab */}
        {activeTab === 'culture' && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Culture</h2>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10 border border-gray-100">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h3 className="text-xl font-bold mb-4">Innovation at Our Core</h3>
                  <p className="text-gray-700 mb-4">
                    At PNC Soft Tech, we foster a culture of innovation and continuous learning. We encourage our team members to experiment with new technologies, share knowledge, and push the boundaries of what's possible.
                  </p>
                  <p className="text-gray-700">
                    We believe that great ideas can come from anywhere, which is why we maintain a flat organizational structure and open communication channels across all levels.
                  </p>
                </div>
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image 
                    src="/images/careers/innovation-culture.jpg" 
                    alt="Innovation Culture" 
                    layout="fill" 
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#00FAA8]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#00FAA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Collaborative Environment</h3>
                <p className="text-gray-700">
                  We believe in the power of teamwork. Our collaborative environment encourages cross-functional cooperation, shared responsibility, and mutual support.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#00FAA8]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#00FAA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Global Perspective</h3>
                <p className="text-gray-700">
                  With team members and clients from diverse backgrounds and regions, we bring a global perspective to every project and foster an inclusive work environment.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#00FAA8]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#00FAA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Continuous Learning</h3>
                <p className="text-gray-700">
                  Technology evolves rapidly, and so do we. We invest in our team's professional development through training programs, conferences, and internal knowledge-sharing sessions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#00FAA8]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#00FAA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Work-Life Balance</h3>
                <p className="text-gray-700">
                  We value the well-being of our team members and promote a healthy work-life balance through flexible working arrangements and respect for personal time.
                </p>
              </div>
            </div>
            
            {/* Team Testimonials */}
            <h3 className="text-xl font-bold mb-4">What Our Team Says</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/images/careers/employee-1.jpg" alt="Employee" layout="fill" objectFit="cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-[#00FAA8]">Senior Developer, 3 years at PNC</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The culture at PNC Soft Tech has been amazing for my career growth. I've had the opportunity to work on challenging projects while being supported by teammates who are always willing to help."
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/images/careers/employee-2.jpg" alt="Employee" layout="fill" objectFit="cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">David Chen</h4>
                    <p className="text-sm text-[#00FAA8]">UX Designer, 2 years at PNC</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "What I appreciate most is how my ideas are valued regardless of my title or tenure. The collaborative environment has allowed me to grow as a designer and contribute meaningfully to every project."
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Employee Benefits</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-gray-100">
                <div className="w-16 h-16 bg-[#00FAA8]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#00FAA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Comprehensive Healthcare</h3>
                <p className="text-gray-700">
                  Medical, dental, and vision coverage for you and your dependents.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-gray-100">
                <div className="w-16 h-16 bg-[#00FAA8]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#00FAA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Flexible Working Hours</h3>
                <p className="text-gray-700">
                  Flexible schedules and remote work options to help you maintain work-life balance.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-gray-100">
                <div className="w-16 h-16 bg-[#00FAA8]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#00FAA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Continued Learning</h3>
                <p className="text-gray-700">
                  Professional development budget for courses, certifications, and conferences.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-gray-100">
                <div className="w-16 h-16 bg-[#00FAA8]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#00FAA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Competitive Compensation</h3>
                <p className="text-gray-700">
                  Competitive salary packages with performance-based bonuses and equity options.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-gray-100">
                <div className="w-16 h-16 bg-[#00FAA8]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#00FAA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Generous Time Off</h3>
                <p className="text-gray-700">
                  Paid vacation, holidays, sick leave, and parental leave to rest and recharge.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-gray-100">
                <div className="w-16 h-16 bg-[#00FAA8]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#00FAA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Career Growth</h3>
                <p className="text-gray-700">
                  Clear career paths with mentorship programs and regular performance reviews.
                </p>
              </div>
            </div>
            
            {/* Additional Benefits */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Additional Perks</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FAA8] mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Team building events and retreats</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FAA8] mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Wellness programs and gym memberships</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FAA8] mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Modern office with collaborative spaces</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FAA8] mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Retirement plans with company matching</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FAA8] mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Community service opportunities</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FAA8] mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Latest tech equipment and tools</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="max-w-5xl mx-auto mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 text-white shadow-xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="mb-6 max-w-2xl mx-auto">Discover how you can grow your career while making an impact with innovative technology solutions.</p>
            <Link href="#job-openings" className="inline-block px-6 py-3 bg-[#00FAA8] text-slate-900 font-medium rounded-lg hover:bg-[#00dfa3] transition-colors shadow-md">
              View Current Openings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
