import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Play } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Footer = () => {
  const links = {
    company: ["About Us", "Careers", "Contact"],
    community: ["Event", "Stories", "Partnership"],
    resources: ["Blog", "FAQ", "Support"]
  };

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <footer ref={ref} className="w-full bg-white font-sans">
      {/* Consistent end-to-end width and padding */}
      <div className="w-full p-2 sm:p-4">
        
        <div className="bg-white py-10 sm:py-12 md:py-20 flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-24 max-w-[1400px] mx-auto px-2 sm:px-0">
          
          {/* --- Left Column: Content & Links --- */}
          <div className={`flex-1 flex flex-col justify-between transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 sm:mb-6 leading-tight">
                Let's Keep in<br />Touch with Us!
              </h2>
              <p className="text-gray-500 text-sm md:text-base mb-8 sm:mb-12 max-w-md leading-relaxed font-medium">
                Contact us today to explore the possibilities of our dynamic co-working space. Your ideal workspace is just a message or call away with us.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-16 font-bold text-[#1A1A1A] text-sm md:text-base">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Phone size={18} strokeWidth={2} className="shrink-0" />
                  <span>(+123) 456 7890</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mail size={18} strokeWidth={2} className="shrink-0" />
                  <span className="break-all sm:break-normal">workspace@mailservice.com</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <MapPin size={18} strokeWidth={2} className="shrink-0" />
                  <span>123 Wanderer Street, Any State, City</span>
                </div>
              </div>
            </div>

            {/* Footer Links Grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-[#1A1A1A]">
              <div>
                <h4 className="font-bold mb-4 sm:mb-6 text-sm sm:text-base">Company</h4>
                <ul className="space-y-3 sm:space-y-4">
                  {links.company.map((link, i) => (
                    <li key={i}><a href="#" className="text-gray-500 hover:text-[#1A1A1A] font-medium text-xs sm:text-sm transition">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 sm:mb-6 text-sm sm:text-base">Community</h4>
                <ul className="space-y-3 sm:space-y-4">
                  {links.community.map((link, i) => (
                    <li key={i}><a href="#" className="text-gray-500 hover:text-[#1A1A1A] font-medium text-xs sm:text-sm transition">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 sm:mb-6 text-sm sm:text-base">Resources</h4>
                <ul className="space-y-3 sm:space-y-4">
                  {links.resources.map((link, i) => (
                    <li key={i}><a href="#" className="text-gray-500 hover:text-[#1A1A1A] font-medium text-xs sm:text-sm transition">{link}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* --- Right Column: Image, Newsletter & Video Button --- */}
          <div className={`relative flex-1 h-[350px] sm:h-[450px] lg:h-auto min-h-[350px] sm:min-h-[500px] transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
             {/* Main Rounded Image Container */}
             <div className="relative w-full h-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden z-10">
                <img 
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Workspace" 
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Circular Stamp Logo (Top Right) */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white/80 animate-spin-slow">
                  <svg viewBox="0 0 100 100" width="60" height="60" className="sm:w-[80px] sm:h-[80px]">
                    <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"/>
                    <text width="100">
                      <textPath xlinkHref="#curve" fill="currentColor" className="text-[10px] font-bold tracking-widest uppercase">
                        Workspace • Workspace • Workspace •
                      </textPath>
                    </text>
                  </svg>
                  {/* Center Globe Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white sm:w-6 sm:h-6"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </div>
                </div>

                {/* Newsletter Section (Bottom Overlay) */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 bg-gradient-to-t from-black/60 to-transparent text-white z-20">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Newsletter</h3>
                  <div className="flex items-center border-b border-white/50 pb-2 max-w-md">
                    <input 
                      type="email" 
                      placeholder="Enter your email address..." 
                      className="bg-transparent border-none outline-none text-white placeholder-white/70 flex-1 text-xs sm:text-sm font-medium min-w-0"
                    />
                    <button className="text-white hover:text-white/80 transition shrink-0 ml-2">
                      <ArrowRight size={20} className="sm:hidden" />
                      <ArrowRight size={24} className="hidden sm:block" />
                    </button>
                  </div>
                </div>
             </div>

             {/* Floating Play Video Button (Bottom Right) */}
             <button className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white text-[#1A1A1A] px-4 sm:px-6 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 sm:gap-3 shadow-2xl z-30 hover:bg-gray-50 transition group">
               <span className="hidden sm:inline">Play Company Video</span>
               <span className="sm:hidden">Play Video</span>
               <Play size={12} fill="currentColor" className="group-hover:scale-110 transition-transform sm:w-3.5 sm:h-3.5"/>
             </button>
          </div>

        </div>
      </div>
      {/* Add spin animation for the stamp */}
      <style>{`
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;