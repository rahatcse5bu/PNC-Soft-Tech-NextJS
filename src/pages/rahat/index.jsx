import React, { useState } from 'react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('download');
  const [showPreview, setShowPreview] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState({
    bundle: false,
    video: false
  });
  
  const handleDownload = (item) => {
    setDownloadStarted(prev => ({ ...prev, [item]: true }));
    
    // Simulate download completion after 3 seconds
    setTimeout(() => {
      setDownloadStarted(prev => ({ ...prev, [item]: false }));
    }, 3000);
  };
  
  // Icon components - Fixed all missing components
  const Download = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7,10 12,15 17,10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );

  const Check = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polyline points="20,6 9,17 4,12"/>
    </svg>
  );

  const Play = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polygon points="5,3 19,12 5,21"/>
    </svg>
  );

  const Video = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polygon points="23,7 16,12 23,17"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  );

  const FileText = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M14,2 L14,8 L20,8 M14,2 L20,8 L20,20 C20,21.1046 19.1046,22 18,22 L6,22 C4.89543,22 4,21.1046 4,20 L4,4 C4,2.89543 4.89543,2 6,2 L14,2 Z"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10,9 9,9 8,9"/>
    </svg>
  );

  const Image = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21,15 16,10 5,21"/>
    </svg>
  );

  const Box = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  );

  const ChevronRight = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polyline points="9,18 15,12 9,6"/>
    </svg>
  );

  const ExternalLink = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15,3 21,3 21,9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );

  const ArrowDown = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <line x1="12" y1="5" x2="12" y2="19"/>
      <polyline points="19,12 12,19 5,12"/>
    </svg>
  );
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 200 200" width="40" height="40">
              <path d="M50,0 L0,50 L50,100 L150,0 Z" fill="#54C5F8" />
              <path d="M50,100 L100,150 L150,100 L100,50 Z" fill="#54C5F8" />
              <path d="M50,200 L0,150 L50,100 L100,150 Z" fill="#01579B" />
            </svg>
            <div>
              <h1 className="text-2xl font-bold">Flutter Development Assets</h1>
              <p className="text-blue-100 text-sm">Professional materials for your Fiverr profile</p>
            </div>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <button 
                  onClick={() => setActiveTab('download')}
                  className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'download' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`}
                >
                  Downloads
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'preview' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`}
                >
                  Preview
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-8 flex-1">
        {activeTab === 'download' ? (
          <div>
            <div className="max-w-3xl mx-auto">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Box className="mr-2" size={24} />
                  Complete Asset Bundle
                </h2>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Flutter Development Bundle (MP4 + SVGs + PDF)</h3>
                      <div className="text-gray-600 mb-4">
                        Comprehensive package with all promotional materials
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white bg-opacity-70 p-3 rounded-lg flex items-center">
                          <Video size={20} className="text-blue-500 mr-2" />
                          <span className="text-sm">Promotional Video (MP4)</span>
                        </div>
                        <div className="bg-white bg-opacity-70 p-3 rounded-lg flex items-center">
                          <FileText size={20} className="text-red-500 mr-2" />
                          <span className="text-sm">Service Portfolio (PDF)</span>
                        </div>
                        <div className="bg-white bg-opacity-70 p-3 rounded-lg flex items-center">
                          <Image size={20} className="text-green-500 mr-2" />
                          <span className="text-sm">3 Gig Images (SVG)</span>
                        </div>
                        <div className="bg-white bg-opacity-70 p-3 rounded-lg flex items-center">
                          <FileText size={20} className="text-purple-500 mr-2" />
                          <span className="text-sm">Video Script (TXT)</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        Total Size: 28.4 MB • Format: ZIP Archive
                      </div>
                    </div>
                    
                    <div>
                      <button 
                        onClick={() => handleDownload('bundle')}
                        className={`${
                          downloadStarted.bundle 
                            ? 'bg-green-600 hover:bg-green-700' 
                            : 'bg-blue-600 hover:bg-blue-700'
                        } text-white py-3 px-6 rounded-lg flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl`}
                      >
                        {downloadStarted.bundle ? (
                          <>
                            <Check size={20} className="animate-pulse" />
                            <span>Downloading...</span>
                          </>
                        ) : (
                          <>
                            <Download size={20} />
                            <span>Download Bundle</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Video className="mr-2" size={24} />
                  MP4 Promotional Video
                </h2>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Flutter Developer Video</h3>
                      <div className="text-gray-600 mb-4">
                        High-quality promotional video showcasing your Flutter development services
                      </div>
                      
                      <div className="bg-black bg-opacity-5 rounded-lg p-4 mb-4 flex">
                        <div className="mr-4 flex-shrink-0">
                          <div className="w-24 h-24 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <Play size={36} className="text-indigo-500" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-1">flutter_promo_video.mp4</h4>
                          <div className="text-sm text-gray-500 mb-2">1920x1080 • 60fps • H.264</div>
                          <div className="text-sm text-gray-600">
                            A professional 60-second video presentation highlighting your Flutter development services, ideal for Fiverr profile and social media
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        File Size: 24.2 MB • Duration: 60 seconds • Format: MP4
                      </div>
                    </div>
                    
                    <div>
                      <button 
                        onClick={() => handleDownload('video')}
                        className={`${
                          downloadStarted.video 
                            ? 'bg-green-600 hover:bg-green-700' 
                            : 'bg-indigo-600 hover:bg-indigo-700'
                        } text-white py-3 px-6 rounded-lg flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl`}
                      >
                        {downloadStarted.video ? (
                          <>
                            <Check size={20} className="animate-pulse" />
                            <span>Downloading...</span>
                          </>
                        ) : (
                          <>
                            <Download size={20} />
                            <span>Download MP4</span>
                          </>
                        )}
                      </button>
                      
                      <button 
                        onClick={() => setShowPreview(true)}
                        className="mt-3 w-full bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-gray-700"
                      >
                        <Play size={16} />
                        <span>Preview</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Video Contents & Timeline</h3>
                  
                  <div className="space-y-4">
                    {[
                      { time: "0:00-0:10", title: "Professional Introduction", desc: "Flutter logo animation with your name" },
                      { time: "0:10-0:20", title: "Custom App Development", desc: "Code animation showing Flutter expertise" },
                      { time: "0:20-0:30", title: "UI/UX Design Excellence", desc: "App interface mockups and transitions" },
                      { time: "0:30-0:40", title: "Cross-Platform Solutions", desc: "iOS and Android platform compatibility" },
                      { time: "0:40-0:50", title: "Bug Fixing & Optimization", desc: "Performance optimization visualization" },
                      { time: "0:50-1:00", title: "Call to Action", desc: "Client reviews and order button" }
                    ].map((section, index) => (
                      <div key={index} className="flex">
                        <div className="w-20 flex-shrink-0 text-sm font-medium text-gray-500">
                          {section.time}
                        </div>
                        <div className="flex-1 border-l-2 border-gray-200 pl-4 pb-4">
                          <h4 className="font-medium text-gray-800">{section.title}</h4>
                          <p className="text-sm text-gray-600">{section.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col items-center">
            <div className="w-full aspect-video bg-black rounded-lg mb-6 flex items-center justify-center">
              <button 
                onClick={() => setShowPreview(true)}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all rounded-full p-6 flex items-center justify-center"
              >
                <Play size={48} className="text-white" />
              </button>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Flutter Developer Promotional Video</h2>
            <p className="text-gray-600 mb-6 text-center max-w-xl">
              Click to preview your professional Flutter development services video, showcasing your expertise in app development, UI/UX design, and cross-platform solutions.
            </p>
            
            <div className="flex gap-4">
              <button 
                onClick={() => handleDownload('video')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg flex items-center gap-2 transition-colors shadow-lg"
              >
                <Download size={20} />
                <span>Download MP4</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('download')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
              >
                <ChevronRight size={20} />
                <span>View All Downloads</span>
              </button>
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-200 py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Created for Md. Rahat • Flutter Developer
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 transition-colors">
                <ExternalLink size={14} />
                Fiverr Profile
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 transition-colors">
                <ArrowDown size={14} />
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="max-w-4xl w-full">
            <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
              <div className="relative pt-[56.25%]">
                {/* This is where an actual video player would be embedded */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900">
                  <div className="text-center">
                    <Play size={64} className="text-white mx-auto mb-4 opacity-50" />
                    <p className="text-white opacity-80 max-w-md mx-auto">
                      Video player would appear here - MP4 file ready for download
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-4 flex justify-between items-center">
                <div className="text-white font-medium">Flutter Development Services - Md. Rahat</div>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="text-white bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center">
              <button 
                onClick={() => handleDownload('video')}
                className="bg-white py-3 px-6 rounded-lg flex items-center gap-2 transition-colors shadow-lg"
              >
                <Download size={20} />
                <span>Download MP4 Video</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
