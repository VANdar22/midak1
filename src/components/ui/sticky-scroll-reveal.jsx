"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const StickyScrollReveal = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const contentRef = useRef(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#f4f4f4", // white
    "#f4f4f4", // white
    "#f4f4f4", // white
  ];


  return (
    <div className="w-full">
      {/* About Us Banner */}
      <div className="w-full relative min-h-[80vh] md:min-h-screen flex items-center justify-center pt-48 sm:pt-40 md:pt-60 lg:pt-72 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/aboutus.png" 
            alt="About Us Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-12">
          <div className="max-w-4xl">
            <div className="text-purple-400 text-sm sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-3 md:mb-4">
              ABOUT MIDAK
            </div>
            <p className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-gray-200 leading-relaxed sm:leading-7 md:leading-8">
              At Midak, we believe that meaningful progress starts with understanding. Today's world moves fast — markets shift, customer needs evolve, and new challenges appear every day. But one thing never changes: organizations need clarity to make confident decisions. Midak was built to provide exactly that. We are a research and strategy consultancy dedicated to helping businesses uncover deep insights, solve complex problems, and move forward with purpose.
            </p>
          </div>
          
          {/* Scroll Down Button - Hidden on mobile, visible on lg screens */}
          <div className="hidden lg:flex flex-col items-center absolute bottom-8 right-8 z-20 space-y-2">
            <span 
              className="text-white text-xl font-bold mb-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={scrollToContent}
            >
              Click me
            </span>
            <button 
              onClick={scrollToContent}
              className="group relative bg-[#6f35c8] text-white w-16 h-16 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg hover:bg-white"
              aria-label="Scroll down"
            >
              <span className="relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-all duration-300 transform group-hover:translate-y-1 group-hover:stroke-[#6f35c8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    className="transition-colors duration-300"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100 origin-center"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div ref={contentRef}></div>
      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="relative flex h-[40rem] w-full max-w-7xl mx-auto justify-center space-x-10 overflow-y-auto rounded-md p-10 bg-white"
        ref={ref}>
      <div className="relative flex items-start pl-0 pr-4 sm:pl-6 sm:pr-0">
        <div className="w-full max-w-2xl sm:mx-auto">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-12 sm:my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base sm:text-xl max-w-lg text-gray-600 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-10 hidden h-[28rem] w-[32rem] overflow-hidden rounded-xl bg-white shadow-[0_0_0_4px_rgba(156,163,175,0.3)] hover:shadow-[0_0_0_4px_rgba(156,163,175,0.5)] transition-shadow duration-300 lg:block group",
          contentClassName
        )}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 4px rgba(156, 163, 175, 0.3)'
        }}
        onMouseMove={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateY = (x - centerX) / 25;
          const rotateX = (centerY - y) / 25;
          e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }}>
        {content[activeCard].content ?? null}
      </div>
      </motion.div>
    </div>
  );
};

export { StickyScrollReveal };
export default StickyScrollReveal;
