import React from 'react';
import { ArrowRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ExploreSpaces = () => {
  const spaces = [
    {
      title: "Private Office",
      description: "Secluded, secure, and fully furnished.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
      type: "badge",
    },
    {
      title: "Open Desks",
      description: "Great for freelancers and small teams.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600",
      type: "arrow",
    },
    {
      title: "Meeting Rooms",
      description: "Equipped with modern A/V tech.",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=600",
      type: "arrow",
    },
    {
      title: "Virtual Office",
      description: "Mail service and meeting room access.",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=600",
      type: "arrow",
    },
    {
      title: "Creative Studio",
      description: "Design-ready spaces for creators.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
      type: "arrow",
    }
  ];

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="w-full bg-white">
      <div className="w-full p-2 sm:p-4">
        <div className="py-10 sm:py-12 md:py-20">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight text-center mb-10 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Explore Spaces
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {spaces.map((space, index) => (
              <div key={index} className={`flex flex-col group cursor-pointer transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${index * 120}ms` }}>

                {/* Card wrapper — position relative so the corner overlay can escape overflow */}
                <div className="relative mb-6">

                  {/* Image Container — overflow hidden for rounded corners on image only */}
                  <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* ── BADGE CORNER (first card) ── */}
                  {space.type === 'badge' && (
                    <div className="absolute -top-0 -right-0 z-20" style={{ width: 'clamp(70px, 10vw, 100px)', height: 'clamp(70px, 10vw, 100px)' }}>
                      <div
                        className="absolute inset-0 bg-white"
                        style={{ borderRadius: '0 2.5rem 0 50%' }}
                      />
                      <div
                        className="absolute bg-[#8C7A6B] text-white flex flex-col items-center justify-center text-center shadow-lg"
                        style={{
                          width: 'calc(100% - 12px)',
                          height: 'calc(100% - 12px)',
                          borderRadius: '50%',
                          top: '1px',
                          right: '1px',
                        }}
                      >
                        <span className="text-[8px] sm:text-[10px] font-bold leading-tight uppercase tracking-wide">
                          View<br />Available<br />Dates
                        </span>
                      </div>
                    </div>
                  )}

                  {/* ── ARROW CORNER (all other cards) ── */}
                  {space.type === 'arrow' && (
                    <div className="absolute -top-0 -right-0 z-20" style={{ width: 'clamp(48px, 7vw, 65px)', height: 'clamp(48px, 7vw, 65px)' }}>
                      <div
                        className="absolute inset-0 bg-white"
                        style={{ borderRadius: '0 2.5rem 0 50%' }}
                      />
                      <div
                        className="absolute bg-[#1A1A1A] text-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:-rotate-45"
                        style={{
                          width: 'calc(100% - 11px)',
                          height: 'calc(100% - 11px)',
                          borderRadius: '50%',
                          top: '1px',
                          right: '1px',
                        }}
                      >
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  )}

                </div>

                {/* Text Content */}
                <div className="px-1 sm:px-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#1A1A1A] mb-1 sm:mb-2">{space.title}</h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">{space.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSpaces;