import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AboutSection from '@/components/sections/AboutSection';
import { StickyScrollReveal } from '@/components/ui/sticky-scroll-reveal';
import CoreValuesSection from '@/components/sections/CoreValuesSection';
import ScrollVelocity from '@/components/ScrollVelocity';

const content = [
  {
    title: 'Who We Are',
    description: 'Midak was founded on a simple belief — that data, when used right, can drive meaningful change.',
    content: (
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/image1.png" 
          alt="Who We Are"
          className="w-full h-full text-[#6f35c8] object-cover"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            objectPosition: 'center',
            transform: 'translateZ(0)' // Force GPU acceleration
          }}
        />
      </div>
    ),
  },
  {
    title: 'Our Approach',
    description: 'We combine cutting-edge technology with deep industry expertise to deliver solutions that are not just powerful, but also intuitive and actionable.',
    content: (
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/image2.png" 
          alt="Our Approach"
          className="w-full h-full text-[#6f35c8] object-cover"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            objectPosition: 'center',
            transform: 'translateZ(0)'
          }}
        />
      </div>
    ),
  },
  {
    title: 'Our Story',
    description: 'Founded by Michael Asante Ofosu, a PhD researcher at Auburn University (USA), MRC bridges the gap between research and real-world application. With a passion for data-driven innovation, Michael and the team are building a firm that empowers organizations with the knowledge and tools to create measurable change.',
    content: (
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/founder1.png" 
          alt="Our Story"
          className="w-full h-full text-[#6f35c8] object-cover"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            objectPosition: 'center',
            transform: 'translateZ(0)'
          }}
        />
      </div>
    ),
  },
  {
    title: 'Our Impact',
    description: 'Through data-driven solutions, we empower organizations to achieve measurable results and create lasting positive change in their communities and industries.',
    content: (
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/image4.png" 
          alt="Our Impact"
          className="w-full h-full text-[#6f35c8] object-cover"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            objectPosition: 'center',
            transform: 'translateZ(0)'
          }}
        />
      </div>
    ),
  },
  {
    title: '',
    description: '',
    content: (
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/Quote.png" 
          alt=""
          className="w-full h-full object-cover"
          style={{
            minWidth: '0%',
            minHeight: '0%',
            objectPosition: 'center',
            transform: 'translateZ(0)'
          }}
        />
      </div>
    ),
  },
];

const About = () => {
  return (
    <div className="bg-[#6f35c8]/80">
      <section className="w-full bg-[#6f35c8]/80">
        <StickyScrollReveal 
          content={content} 
          contentClassName="text-3xl md:text-4xl text-gray-900 leading-relaxed max-w-5xl mx-auto px-6 py-16"
        />
        <div className="flex justify-center items-center py-4 bg-[#f4f4f4]">
          <ScrollVelocity 
            texts={[
              <span className="text-[#6f35c8]/50">
                Research Excellence <span className="text-yellow-400">✦</span> Data-Driven Insights <span className="text-yellow-400">✦</span> Strategic Consulting <span className="text-yellow-400">✦</span> 
                Innovative Solutions <span className="text-yellow-400">✦</span> Market Analysis <span className="text-yellow-400">✦</span> Impact Assessment <span className="text-yellow-400">✦</span> 
                Academic Research <span className="text-yellow-400">✦</span> Business Intelligence <span className="text-yellow-400">✦</span>
              </span>
            ]} 
            velocity={50}
            className="custom-scroll-text"
          />
        </div>
        <CoreValuesSection />
      </section>
      <AboutSection />
    </div>
  );
};

export default About;
