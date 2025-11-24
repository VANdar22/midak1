import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { accentColors } from '../constants/colors';
import Hero from '../components/sections/Hero';
import ImageWithDescription from '../components/sections/ImageWithDescription';
import Services from '../components/sections/Services';
import ScrollVelocity from '../components/ScrollVelocity';
import Quote from '../components/ui/Quote';
import Projects from '../components/sections/Projects';

const Home = () => {
  return (
    <ParallaxProvider>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: accentColors.lightest }}>
      <main className="grow">
        <Hero />
        
        {/* Image with Description Section */}
        <ImageWithDescription 
          imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          description="We're here to help you make sense of complex questions, uncover insights, and develop strong research foundations for your academic or institutional needs. Initiate your consultation and move forward with confidence."
        />
        <div className="flex justify-center items-center py-4 bg-[#f5f5f5]">
          <ScrollVelocity 
            texts={[
              <span key="scroll-text-1" className="text-xl" style={{ color: `${accentColors.main}80` }}> Market Research <span style={{ color: accentColors.DEFAULT }}>✦</span> Data Analysis <span style={{ color: accentColors.DEFAULT }}>✦</span> Impact Assessment <span style={{ color: accentColors.DEFAULT }}>✦</span> Feasibility Studies <span style={{ color: accentColors.DEFAULT }}>✦</span> </span>,
              <span key="scroll-text-2" className="text-xl" style={{ color: `${accentColors.main}80` }}>Project Development <span style={{ color: accentColors.DEFAULT }}>✦</span> Exploratory Research <span style={{ color: accentColors.DEFAULT }}>✦</span> Academic Support <span style={{ color: accentColors.DEFAULT }}>✦</span> Strategic Insights <span style={{ color: accentColors.DEFAULT }}>✦</span></span>
            ]} 
            velocity={50} 
            className="custom-scroll-text"
          />
        </div>
        
        <div className="mb-0">
          <Services />
        </div>
        
        {/* Quote Section */}
        <div style={{ backgroundColor: accentColors.lightest }}>
          <Quote />
        </div>

        {/* Projects Section */}
        <div style={{ backgroundColor: accentColors.lightest }}>
          <Projects />
        </div>
      </main>
    </div>
    </ParallaxProvider>
  );
};

export default Home;
