import React from 'react';
import CardSwap, { Card } from '@/components/CardSwap';
import { FaShieldAlt, FaStar, FaLightbulb, FaChartLine, FaHandshake } from 'react-icons/fa';
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

  const values = [
    {
      title: 'Integrity',
      description: 'We uphold honesty, transparency, and ethical standards in all our engagements, ensuring that findings are objective and trustworthy.',
      icon: <FaShieldAlt className="w-5 h-5" />
    },
    {
      title: 'Excellence',
      description: 'We set high expectations for the quality of our work, striving for accuracy, clarity, and professionalism in every deliverable.',
      icon: <FaStar className="w-5 h-5" />
    },
    {
      title: 'Innovation',
      description: 'We embrace new tools, ideas, and methods, constantly improving how we collect, analyze, and communicate data.',
      icon: <FaLightbulb className="w-5 h-5" />
    },
    {
      title: 'Impact',
      description: 'We prioritize solutions that lead to measurable improvements—whether in performance, equity, efficiency, or well-being.',
      icon: <FaChartLine className="w-5 h-5" />
    },
    {
      title: 'Collaboration',
      description: 'We believe that the best outcomes emerge when clients, communities, and experts work together in a spirit of mutual respect.',
      icon: <FaHandshake className="w-5 h-5" />
    }
  ];

  return (
    <section className="w-full py-8 md:py-16 bg-[#f5f5f5]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="lg:w-1/3 lg:sticky lg:top-24 pt-12 md:pt-32">
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-[${accentColors.DEFAULT}]`}>Our Core Values</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mt-1">
              Our values guide how we work, how we relate to clients and partners, and how we make decisions internally: with integrity, excellence, and a commitment to making a meaningful impact.
            </p>
          </div>
          <div className="w-full lg:w-2/3 mx-auto -mt-64 -ml-26 lg:mt-0 lg:ml-0" style={{ height: '500px', position: 'relative' }}>
            <CardSwap
              cardDistance={40}
              verticalDistance={50}
              delay={5000}
              pauseOnHover={true}
              easing="power2.inOut"
              skewAmount={3}
            >
            {values.map((value, index) => (
              <Card 
                key={index}
                className={`px-0 overflow-hidden text-gray-600 border-2 border-[${accentColors.DEFAULT}] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white transform-gpu`} 
                style={cardStyle}
              >
                <div 
                  className={`h-40 bg-gradient-to-r from-${index % 2 === 0 ? `[${accentColors.light}] to-[${accentColors.DEFAULT}]` : `[${accentColors.DEFAULT}] to-[${accentColors.dark}]`} relative`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-3xl">
                        {value.icon}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl md:text-2xl font-bold mb-3 text-[${accentColors.DEFAULT}] flex items-center gap-3 group subpixel-antialiased`}>
                    <span className={`w-10 h-10 rounded-full bg-[${accentColors.DEFAULT}] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                      {value.icon}
                    </span>
                    <span>{value.title}</span>
                  </h3>
                  <p className="hidden md:block text-gray-600 text-base md:text-lg leading-relaxed subpixel-antialiased">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
