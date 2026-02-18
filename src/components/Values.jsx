import React from 'react';
import { Users, Leaf, Lightbulb, Maximize } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Values = () => {
  const colors = {
    beigeBg: '#F9F8F4',
    brownAccent: '#8C7A6B',
    darkText: '#1A1A1A',
  };

  const values = [
    {
      title: "Community Building",
      description: "Building a space where everyone feels welcome and connected within the group.",
      icon: <Users size={28} strokeWidth={1.5} />,
      active: false
    },
    {
      title: "Sustainable Actions",
      description: "Committed to eco-friendly practices by reducing our energy usage for the future.",
      icon: <Leaf size={28} strokeWidth={1.5} />,
      active: true 
    },
    {
      title: "Incubating Innovations",
      description: "Fostering an environment that encourages new ideas and growth for our users.",
      icon: <Lightbulb size={28} strokeWidth={1.5} />,
      active: false
    },
    {
      title: "Room for Flexibility",
      description: "Offering various workspaces to suit your unique needs. Be flexible as you need.",
      icon: <Maximize size={28} strokeWidth={1.5} />,
      active: false
    }
  ];

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={ref} className="w-full bg-white">
      {/* Container matching Hero section's padding and width */}
      <div className="w-full p-2 sm:p-4">
        
        {/* --- Main Beige Container --- */}
        <div 
          className="w-full rounded-[2rem] sm:rounded-[3rem] px-4 py-10 sm:px-8 sm:py-16 md:px-12 md:py-20"
          style={{ backgroundColor: colors.beigeBg }}
        >
          
          {/* Header Row */}
          <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-16 gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: colors.darkText }}
            >
              Our Values
            </h2>
            <a href="#" className="text-sm font-bold text-gray-400 hover:text-gray-600 transition hidden md:block mb-1">
              See More
            </a>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((item, index) => (
              <div 
                key={index} 
                className={`
                  flex flex-col justify-between p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] h-full min-h-[250px] sm:min-h-[320px] transition-all duration-500
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${item.active 
                    ? `text-white shadow-xl translate-y-[-4px]` 
                    : `bg-transparent border border-gray-200 text-[#1A1A1A] hover:border-[#8C7A6B]/50 hover:bg-white`
                  }
                `}
                style={{ backgroundColor: item.active ? colors.brownAccent : '', transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className={`mb-8 ${item.active ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  {item.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed font-medium ${item.active ? 'text-white/90' : 'text-gray-500'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Values;