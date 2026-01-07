import React from 'react';
import { FaShieldAlt, FaStar, FaLightbulb, FaChartLine, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { accentColors } from '@/constants/colors';

const CoreValuesSection = () => {
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
    <section className="w-full pt-12 md:pt-24 pb-0 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mb-16 pl-6 pr-6 md:pl-8 md:pr-8">
          <p className="text-sm uppercase tracking-[0.3em] mb-4 font-['Montserrat'] pl-1" style={{ color: `${accentColors.main}80` }}>Our Foundation</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900 font-['Montserrat_Alternates'] pl-1">
            Our Core Values
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-900 opacity-90 max-w-4xl font-['Montserrat'] md:whitespace-nowrap overflow-visible md:overflow-hidden pl-1">
            Our values guide how we work, how we relate to clients and partners, and how we make decisions internally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg border border-gray-200 h-full flex flex-col"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group" 
                style={{ 
                  backgroundColor: `${accentColors.light}20`,
                  color: accentColors.main,
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                  {value.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-['Montserrat_Alternates']">
                {value.title}
              </h3>
              <p className="text-gray-600 grow font-['Montserrat']">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
