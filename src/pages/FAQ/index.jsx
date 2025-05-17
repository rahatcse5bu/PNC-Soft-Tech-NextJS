import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Link from 'next/link';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedQuestions, setExpandedQuestions] = useState({});
  
  // FAQ data organized by categories
  const faqData = {
    general: [
      {
        id: 'g1',
        question: 'What services does PNC Soft Tech provide?',
        answer: 'PNC Soft Tech offers a comprehensive range of IT services including web development, mobile app development, UI/UX design, cloud services, and digital marketing solutions. We provide end-to-end technology solutions tailored to meet the unique needs of businesses across various industries.'
      },
      {
        id: 'g2',
        question: 'How experienced is your team?',
        answer: 'Our team consists of highly skilled professionals with an average of 7+ years of experience in their respective domains. Our developers, designers, and strategists stay up-to-date with the latest technologies and industry best practices to deliver cutting-edge solutions.'
      },
      {
        id: 'g3',
        question: 'What industries do you work with?',
        answer: 'We work with clients across diverse industries including healthcare, finance, education, e-commerce, real estate, and manufacturing. Our versatile expertise allows us to understand the unique challenges and requirements of different business sectors.'
      }
    ],
    process: [
      {
        id: 'p1',
        question: 'What is your development process?',
        answer: 'Our development process follows a systematic approach: 1) Requirements analysis and planning, 2) Design and prototyping, 3) Development, 4) Testing and quality assurance, 5) Deployment, and 6) Maintenance and support. We emphasize clear communication and client involvement throughout each phase.'
      },
      {
        id: 'p2',
        question: 'How long does it take to complete a project?',
        answer: "Project timelines vary depending on the scope, complexity, and specific requirements. A simple website might take 2-4 weeks, while a complex web application or mobile app could take 2-6 months. During our initial consultation, we will provide a detailed timeline based on your project specifications."
      },
      {
        id: 'p3',
        question: 'Do you offer ongoing maintenance and support?',
        answer: 'Yes, we provide comprehensive maintenance and support services for all our projects. We offer various support packages including regular updates, security patches, performance monitoring, content updates, and technical assistance to ensure your digital solutions continue to operate optimally.'
      }
    ],
    technical: [
      {
        id: 't1',
        question: 'What technologies do you use for web development?',
        answer: 'We utilize modern web technologies including React.js, Next.js, Angular, and Vue.js for frontend development; Node.js, Python, and PHP for backend development; and MySQL, PostgreSQL, MongoDB for databases. Our technology stack is selected based on each project\'s specific requirements to ensure optimal performance.'
      },
      {
        id: 't2',
        question: 'Do you develop cross-platform mobile apps?',
        answer: 'Yes, we develop both native (iOS and Android) and cross-platform mobile applications. For cross-platform development, we primarily use React Native and Flutter, which allow us to create high-performance apps that work seamlessly across different devices while maintaining a native feel.'
      },
      {
        id: 't3',
        question: 'How do you ensure the security of web applications?',
        answer: 'We implement multiple layers of security measures including secure coding practices, data encryption, regular security audits, vulnerability assessments, and compliance with industry standards like OWASP. We also provide security training and documentation to ensure ongoing protection against emerging threats.'
      }
    ],
    pricing: [
      {
        id: 'pr1',
        question: 'How do you determine the cost of a project?',
        answer: 'Project costs are determined based on several factors: scope and complexity, timeline requirements, technology stack, required features, and ongoing support needs. We provide transparent, detailed quotes after thoroughly understanding your project requirements during the initial consultation.'
      },
      {
        id: 'pr2',
        question: 'Do you offer flexible payment options?',
        answer: 'Yes, we offer flexible payment structures tailored to project size and duration. Options include milestone-based payments, monthly retainers, and custom payment schedules. For larger projects, we typically divide payments into phases aligned with project milestones.'
      },
      {
        id: 'pr3',
        question: 'Is there a cost for initial consultation?',
        answer: 'No, we provide free initial consultations to understand your requirements, discuss potential solutions, and answer any questions you might have. This allows us to provide an accurate project estimate and establish if we\'re the right fit for your needs.'
      }
    ]
  };
  
  // Toggle question expansion
  const toggleQuestion = (id) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Get filtered questions based on category and search term
  const getFilteredQuestions = () => {
    let questions = [];
    
    // Get questions based on category
    if (activeCategory === 'all') {
      Object.values(faqData).forEach(categoryQuestions => {
        questions = [...questions, ...categoryQuestions];
      });
    } else {
      questions = faqData[activeCategory] || [];
    }
    
    // Filter based on search term
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      questions = questions.filter(
        q => q.question.toLowerCase().includes(term) || 
             q.answer.toLowerCase().includes(term)
      );
    }
    
    return questions;
  };
  
  const filteredQuestions = getFilteredQuestions();
  
  // All categories for filtering
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General Information' },
    { id: 'process', name: 'Our Process' },
    { id: 'technical', name: 'Technical Questions' },
    { id: 'pricing', name: 'Pricing & Payment' }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <PageHeader 
          title="Frequently Asked Questions" 
          description="Find answers to common questions about our services and processes"
        />
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mt-8 mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00FAA8] focus:border-transparent"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Category Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#00FAA8] text-slate-900 shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {filteredQuestions.length > 0 ? (
            <div className="space-y-4">
              {filteredQuestions.map((faq) => (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 border border-gray-100"
                >
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-[#00FAA8] transform transition-transform duration-300 ${expandedQuestions[faq.id] ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedQuestions[faq.id] && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No questions found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
              <button 
                onClick={() => {setSearchTerm(''); setActiveCategory('all');}}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-900 bg-[#00FAA8] hover:bg-[#00dfa3]"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
        
        {/* Still Have Questions Section */}
        <div className="max-w-4xl mx-auto mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 text-white shadow-xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-6">Our team is here to help with any specific questions you might have about our services or your project.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/Contact/page" className="bg-[#00FAA8] text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-[#00dfa3] transition-colors shadow-md">
                Contact Us
              </Link>
              <Link href="tel:+1234567890" className="bg-transparent border-2 border-[#00FAA8] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#00FAA8]/10 transition-colors">
                Call: (123) 456-7890
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
