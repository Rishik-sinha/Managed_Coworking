import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$199",
      features: [
        "Access to open public desk",
        "Free Coffee Break & Snacks",
        "High-Speed Wi-Fi Internet"
      ],
      highlight: false 
    },
    {
      name: "Premium",
      price: "$299",
      features: [
        "Access to public desk & private office",
        "Meeting Room Access",
        "24/7 Building Access"
      ],
      highlight: true 
    },
    {
      name: "Virtual",
      price: "$399",
      features: [
        "Enabled Business Address",
        "Monthly Mail PO-BOX Handling",
        "2 Hours of Meeting Room Access Monthly"
      ],
      highlight: false 
    }
  ];

  const colors = {
    beigeBg: '#F9F8F4',
    grayBg: '#F9F9F9',
    brownAccent: '#8C7A6B',
    darkText: '#1A1A1A',
    pageBg: '#FFFFFF', // The color of the "Gap" must match the page background
  };

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={ref} className="w-full bg-white font-sans">
      <div className="w-full p-2 sm:p-4">
        
        <div className="py-10 sm:py-12 md:py-20 max-w-[1400px] mx-auto">
          {/* Heading */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] text-center mb-10 sm:mb-16 tracking-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Pricing Plan
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
            {plans.map((plan, index) => (
              <div key={index} className={`relative transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                
                {/* --- Main Card Body --- */}
                <div 
                  className="rounded-[2rem] sm:rounded-[3rem] px-6 sm:px-8 pb-8 sm:pb-10 pt-20 sm:pt-24 flex flex-col items-center text-center h-full min-h-[420px] sm:min-h-[520px] relative overflow-hidden"
                  style={{ backgroundColor: plan.highlight ? colors.beigeBg : colors.grayBg }}
                >
                  
                  {/* --- THE GAP (White Cutout) --- */}
                  {/* This white box sits at the top center, matching the page background to create the 'cutout' look */}
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[65px] rounded-xl z-10"
                    style={{ backgroundColor: colors.pageBg }}
                  ></div>

                  {/* --- The Badge --- */}
                  {/* Positioned centered inside the white gap */}
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 px-10 py-3 rounded-xl text-white font-bold text-xl shadow-sm z-20 min-w-[140px]"
                    style={{ backgroundColor: plan.highlight ? colors.brownAccent : colors.darkText }}
                  >
                    {plan.name}
                  </div>

                  {/* Features */}
                  <div className="flex-1 flex flex-col justify-center w-full mt-4 mb-10 space-y-6">
                    {plan.features.map((feature, idx) => (
                      <p key={idx} className="text-base md:text-lg font-bold text-[#1A1A1A] leading-tight px-2">
                        {feature}
                      </p>
                    ))}
                  </div>

                  {/* Footer (Price) */}
                  <div className="w-full border-t border-gray-200/60 pt-6 sm:pt-8 flex justify-between items-end px-2">
                    <div className="text-left">
                      <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold mb-1 tracking-wider uppercase">Charged per month</p>
                      <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold tracking-wider uppercase">Free trial available</p>
                    </div>
                    <div className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tighter leading-none">
                      {plan.price}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;