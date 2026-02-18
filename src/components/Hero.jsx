import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="w-full bg-white relative" ref={heroRef}>
      {/* 1. Add white padding all around */}
      <div className="w-full p-2 sm:p-4 relative">

        {/* --- Main Hero Image Block --- */}
        <div className={`relative h-[500px] sm:h-[600px] md:h-[700px] w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden group transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1742630394179-67539224abc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293b3JraW5nJTIwc3BhY2UlMjBpbiUyMGJodWJhbmVzd2FyfGVufDB8fDB8fHww" 
            alt="Work Better Together" 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1742630394179-67539224abc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293b3JraW5nJTIwc3BhY2UlMjBpbiUyMGJodWJhbmVzd2FyfGVufDB8fDB8fHww"; 
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/15"></div>

          {/* Text Content */}
          <div className={`absolute bottom-32 sm:bottom-28 md:bottom-24 left-6 sm:left-8 md:left-20 max-w-[90%] sm:max-w-xl md:max-w-2xl z-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6 sm:mb-8 md:mb-10 drop-shadow-lg">
              Work Better,<br />
              Together
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8">
              {/* User Avatars */}
              <div className="flex items-center bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full pr-4 sm:pr-6 border border-white/10">
                <div className="flex -space-x-3 sm:-space-x-4">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i} 
                      src={`https://i.pravatar.cc/100?img=${i + 25}`} 
                      alt="User" 
                      className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 sm:border-[3px] border-white" 
                    />
                  ))}
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 sm:border-[3px] border-white bg-[#1A1A1A] flex items-center justify-center text-white">
                      <Plus size={16} className="sm:hidden" />
                      <Plus size={20} className="hidden sm:block" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 sm:gap-4">
                <button className="bg-white text-[#1A1A1A] px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition shadow-lg">
                  Book Now
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm hover:bg-white/10 transition backdrop-blur-md">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- The "Subimage" Card --- */}
        {/* Hidden on very small screens, shown from sm up */}
        <div className={`hidden sm:block absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-[320px] md:w-[420px] bg-white p-4 sm:p-6 rounded-tl-[2rem] sm:rounded-tl-[3rem] rounded-br-[2rem] sm:rounded-br-[3rem] transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
           {/* Header with Text and Arrow */}
           <div className="flex justify-between items-start mb-4 sm:mb-6 gap-3 sm:gap-4 pl-2">
             <p className="text-sm sm:text-lg text-gray-600 font-medium leading-snug font-sans">
               Our new location is finally open for public! Get ready for our grand opening promotion.
             </p>
             <button className="bg-[#8C7A6B] text-white p-2.5 sm:p-3 rounded-full hover:bg-[#1A1A1A] transition shrink-0 shadow-md">
               <ArrowRight size={20} className="sm:hidden" />
               <ArrowRight size={24} className="hidden sm:block" />
             </button>
           </div>
           
           {/* Card Image container */}
           <div className="relative h-36 sm:h-48 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden mt-auto">
             <img 
               src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600" 
               alt="New Location" 
               className="w-full h-full object-cover"
             />
             {/* Tag */}
             <div className="absolute bottom-0 left-0 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-tr-[1.5rem] sm:rounded-tr-[2rem] text-[#1A1A1A] font-bold text-xl sm:text-2xl leading-tight">
               New<br/>Location
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;