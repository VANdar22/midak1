import React from 'react';
import { FaShieldAlt, FaStar, FaLightbulb, FaChartLine, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { accentColors } from '@/constants/colors';

const CoreValuesSection = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We uphold honesty, transparency, and ethical standards in all our engagements, ensuring that findings are objective and trustworthy.',
      icon: 'shield'
    },
    {
      title: 'Excellence',
      description: 'We set high expectations for the quality of our work, striving for accuracy, clarity, and professionalism in every deliverable.',
      icon: 'star'
    },
    {
      title: 'Innovation',
      description: 'We embrace new tools, ideas, and methods, constantly improving how we collect, analyze, and communicate data.',
      icon: 'lightbulb'
    },
    {
      title: 'Impact',
      description: 'We prioritize solutions that lead to measurable improvements—whether in performance, equity, efficiency, or well-being.',
      icon: 'chart'
    },
    {
      title: 'Collaboration',
      description: 'We believe that the best outcomes emerge when clients, communities, and experts work together in a spirit of mutual respect.',
      icon: 'handshake'
    }
  ];

  const iconComponents = {
    shield: FaShieldAlt,
    star: FaStar,
    lightbulb: FaLightbulb,
    chart: FaChartLine,
    handshake: FaHandshake
  };

  return (
    <section style={{ backgroundColor: '#f5f5f5' }}>
      <div className="mx-auto max-w-6xl px-6 py-24 space-y-16">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] mb-4 font-['Montserrat']" style={{ color: `${accentColors.main}80` }}>Our Foundation</p>
          <h2 className="text-3xl! sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900 font-['Montserrat']">
            Our Core Values
          </h2>
          <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-900 opacity-90 max-w-4xl font-['Montserrat'] whitespace-nowrap overflow-hidden text-ellipsis md:whitespace-normal md:overflow-visible md:text-left">
            Our values guide how we work, how we relate to clients and partners, and how we make decisions internally.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid gap-12 md:grid-cols-2">
            {values.map((value) => {
              const IconComponent = iconComponents[value.icon];
              return (
                <article key={value.title} className="space-y-6">
                  <div className="h-20 w-20 rounded-full flex items-center justify-center" style={{ backgroundColor: `${accentColors.main}10` }}>
                    {IconComponent && <IconComponent className="h-8 w-8" strokeWidth={1.75} style={{ color: `${accentColors.main}80` }} />}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl! font-bold leading-tight tracking-tight text-gray-900 md:text-3xl font-['Montserrat']">{value.title}</h3>
                    <p className="text-gray-900 text-lg leading-relaxed opacity-90 font-['Montserrat']">{value.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
