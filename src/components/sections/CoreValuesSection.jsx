import React from 'react';
import CardSwap, { Card } from '@/components/CardSwap';
import { FaGraduationCap, FaLightbulb, FaUsers } from 'react-icons/fa';
import { accentColors } from '@/constants/colors';

const CoreValuesSection = () => {
  const cardStyle = {
    WebkitFontSmoothing: 'antialiased',
    WebkitTextRendering: 'optimizeLegibility',
    textRendering: 'optimizeLegibility',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
    WebkitTransform: 'translateZ(0)'
  };

  return (
    <section className="w-full py-8 md:py-16 bg-[#f5f5f5]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="lg:w-1/3 lg:sticky lg:top-24 pt-12 md:pt-32">
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-[${accentColors.DEFAULT}]`}>Our Core Values</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mt-1">
              Our values guide how we think, work, and support our clients — ensuring every decision is honest, thoughtful, and focused on real impact.
            </p>
          </div>
          <div className="w-full lg:w-2/3 mx-auto -mt-64 -ml-26 lg:mt-0 lg:ml-0" style={{ height: '400px', position: 'relative' }}>
            <CardSwap
              cardDistance={40}
              verticalDistance={50}
              delay={5000}
              pauseOnHover={true}
              easing="power2.inOut"
              skewAmount={3}
            >
            <Card className={`px-0 overflow-hidden text-gray-600 border-2 border-[${accentColors.DEFAULT}] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white transform-gpu`} style={cardStyle}>
              <div className={`h-40 bg-gradient-to-r from-[${accentColors.DEFAULT}] to-[${accentColors.dark}] relative`}>
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Academic Excellence"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl md:text-2xl font-bold mb-3 text-[${accentColors.DEFAULT}] flex items-center gap-3 group subpixel-antialiased`}>
                  <span className={`w-10 h-10 rounded-full bg-[${accentColors.DEFAULT}] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    <FaGraduationCap className="w-5 h-5" />
                  </span>
                  <span>Academic Excellence</span>
                </h3>
                <p className="hidden md:block text-gray-600 text-base md:text-lg leading-relaxed subpixel-antialiased">
                  We maintain the highest standards of academic integrity in all our work and collaborations.
                </p>
              </div>
            </Card>
            <Card className={`px-0 overflow-hidden text-gray-600 border-2 border-[${accentColors.DEFAULT}] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white transform-gpu`} style={cardStyle}>
              <div className={`h-40 bg-gradient-to-r from-[${accentColors.light}] to-[${accentColors.DEFAULT}] relative`}>
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Innovation"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl md:text-2xl font-bold mb-3 text-[${accentColors.DEFAULT}] flex items-center gap-3 group subpixel-antialiased`}>
                  <span className={`w-10 h-10 rounded-full bg-[${accentColors.DEFAULT}] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    <FaLightbulb className="w-5 h-5" />
                  </span>
                  <span>Innovation</span>
                </h3>
                <p className="hidden md:block text-gray-600 text-base md:text-lg leading-relaxed subpixel-antialiased">
                  We constantly seek new and better ways to solve complex problems in data analysis.
                </p>
              </div>
            </Card>
            <Card className={`px-0 overflow-hidden text-gray-600 border-2 border-[${accentColors.DEFAULT}] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white transform-gpu`} style={cardStyle}>
              <div className={`h-40 bg-gradient-to-r from-[${accentColors.dark}] to-[${accentColors.hover}] relative`}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009c01201c3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Collaboration"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl md:text-2xl font-bold mb-3 text-[${accentColors.DEFAULT}] flex items-center gap-3 group subpixel-antialiased`}>
                  <span className={`w-10 h-10 rounded-full bg-[${accentColors.DEFAULT}] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    <FaUsers className="w-5 h-5" />
                  </span>
                  <span>Collaboration</span>
                </h3>
                <p className="hidden md:block text-gray-600 text-base md:text-lg leading-relaxed subpixel-antialiased">
                  We believe in the power of teamwork and shared knowledge to achieve outstanding results.
                </p>
              </div>
            </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
