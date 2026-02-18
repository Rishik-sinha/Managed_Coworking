import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Private Office Client ( 2021 - 2023 )",
      quote: "WorkSpace has been a game-changer for me. The community here is so welcoming, the amenities are good!",
      image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=1600"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Freelance Developer ( 2022 - Present )",
      quote: "The internet speed is unmatched, and the meeting rooms are professional. Best decision for my startup.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600"
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Digital Artist ( 2023 - Present )",
      quote: "I love the natural light and the creative vibe. It's not just an office; it's a place where ideas grow.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1600"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="w-full bg-white">
      {/* 1. End-to-End Layout with White Padding */}
      <div className="w-full p-2 sm:p-4">
        
        {/* Main Card Container */}
        <div className={`relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden group transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          
          {/* --- Dynamic Background Image --- */}
          <div key={currentReview.id} className="absolute inset-0 animate-fade-in">
            <img 
              src={currentReview.image} 
              alt={currentReview.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
          </div>

          {/* --- Content Area --- */}
          <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 md:p-16 w-full md:w-3/4">
            
            {/* Quote Text */}
            <div key={currentReview.quote} className="mt-6 sm:mt-8 md:mt-16 animate-slide-up">
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-tight drop-shadow-md">
                "{currentReview.quote}"
              </h2>
            </div>

          </div>

          {/* --- Name Tag Section (Bottom-Left Corner) --- */}
          {/* Matches the 'New Location' style: White box anchored to bottom-left with a curve */}
          <div className="absolute bottom-0 left-0 bg-white pr-6 sm:pr-10 pt-4 sm:pt-6 pb-4 sm:pb-6 pl-6 sm:pl-10 md:pl-16 rounded-tr-[2rem] sm:rounded-tr-[3rem] z-20">
             <div key={currentReview.name} className="animate-fade-in">
                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-1">
                  {currentReview.name}
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm font-bold tracking-wide">
                  {currentReview.role}
                </p>
             </div>
          </div>

          {/* --- Right Side Control Arrows --- */}
          <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-3 px-1.5 sm:py-4 sm:px-2 md:py-6 md:px-3 flex flex-col gap-3 sm:gap-4 md:gap-6 text-white shadow-xl z-30">
            <button 
              onClick={handlePrev}
              className="p-2 hover:bg-white/20 rounded-full transition-all hover:-translate-y-1 active:scale-90"
            >
              <ArrowUp size={18} className="sm:hidden" />
              <ArrowUp size={24} className="hidden sm:block" />
            </button>
            
            {/* Divider Line */}
            <div className="w-[1px] h-6 sm:h-8 md:h-12 bg-white/30 mx-auto"></div>
            
            <button 
              onClick={handleNext}
              className="p-2 hover:bg-white/20 rounded-full transition-all hover:translate-y-1 active:scale-90"
            >
              <ArrowDown size={18} className="sm:hidden" />
              <ArrowDown size={24} className="hidden sm:block" />
            </button>
          </div>

        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;