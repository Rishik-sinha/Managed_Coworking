import React from 'react';
import { Hexagon, Command, Box, Disc, Layers } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const BrandLogos = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const logos = [
    { icon: <Hexagon fill="currentColor" strokeWidth={0} size={20} />, text: 'logoipsum' },
    { icon: <Disc fill="currentColor" strokeWidth={0} size={20} />, text: 'logoipsum' },
    { icon: <Box fill="currentColor" strokeWidth={0} size={20} />, text: 'Logo Ipsum' },
    { icon: <Layers fill="currentColor" strokeWidth={0} size={20} />, text: 'LOGOIPSUM' },
    { icon: <Command strokeWidth={2} size={20} />, text: 'Logoipsum' },
  ];

  return (
    <section ref={ref} className="py-6 sm:py-8 px-4 sm:px-8 w-full bg-white border-b border-gray-100">
       <div className="max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center text-[#1A1A1A] px-2 sm:px-4">
         {logos.map((logo, i) => (
           <div
             key={i}
             className={`flex items-center gap-2 sm:gap-3 text-base sm:text-xl font-bold font-sans justify-center md:justify-start transition-all duration-500 ${i === 4 ? 'col-span-2 sm:col-span-1' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
             style={{ transitionDelay: `${i * 100}ms` }}
           >
             {logo.icon} {logo.text}
           </div>
         ))}
       </div>
    </section>
  );
};

export default BrandLogos;