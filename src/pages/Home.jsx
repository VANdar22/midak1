import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from '../components/sections/Hero';
import ImageWithDescription from '../components/sections/ImageWithDescription';
import Services from '../components/sections/Services';
import ScrollVelocity from '../components/ScrollVelocity';
import Quote from '../components/ui/Quote';
import Projects from '../components/sections/Projects';

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <ParallaxProvider>
      <div className="min-h-screen flex flex-col bg-[#f4f4f4]">
      <main className="grow">
        <Hero />
        
        {/* Image with Description Section */}
        <ImageWithDescription 
          imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          description="We're here to help you make sense of complex questions, uncover insights, and develop strong research foundations for your academic or institutional needs. Initiate your consultation and move forward with confidence."
        />
        <div className="flex justify-center items-center py-4">
          <ScrollVelocity 
            texts={[
              <span className="text-[#6f35c8]/50"> Market Research <span className="text-yellow-400">✦</span> Data Analysis <span className="text-yellow-400">✦</span> Impact Assessment <span className="text-yellow-400">✦</span> Feasibility Studies <span className="text-yellow-400">✦</span> </span>,
              <span className="text-[#6f35c8]/50">Project Development <span className="text-yellow-400">✦</span> Exploratory Research <span className="text-yellow-400">✦</span> Academic Support <span className="text-yellow-400">✦</span> Strategic Insights <span className="text-yellow-400">✦</span></span>
            ]} 
            velocity={50} 
            className="custom-scroll-text"
          />
        </div>
        
        <div className="mb-0">
          <Services />
        </div>
        
        {/* Quote Section */}
        <div className="bg-[#f4f4f4]">
          <Quote />
        </div>

        {/* Projects Section */}
        <div className="bg-[#f4f4f4]">
          <Projects />
        </div>
      </main>
    </div>
    </ParallaxProvider>
  );
};

export default Home;
