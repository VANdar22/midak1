"use client";
import React, { useRef } from "react";
import PropTypes from 'prop-types';
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { accentColors } from "@/constants/colors";
import { cn } from "@/lib/utils";

const StickyScrollReveal = ({
  content = [],
  contentClassName = ''
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const contentRef = useRef(null);

  // Check if mobile on mount and on resize
  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: isMobile ? undefined : ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  // Only enable scroll animation on non-mobile devices
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) return;
    
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
            <div className={`text-[${accentColors.light}] text-sm sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-3 md:mb-4`}>
              ABOUT MIDAK
            </div>
            <p className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-gray-200 leading-relaxed sm:leading-7 md:leading-8">
              At Midak, we believe that meaningful progress starts with understanding. Today's world moves fast — markets shift, customer needs evolve, and new challenges appear every day. But one thing never changes: organizations need clarity to make confident decisions. Midak was built to provide exactly that. We are a research and strategy consultancy dedicated to helping businesses uncover deep insights, solve complex problems, and move forward with purpose.
            </p>
          </div>
          
          {/* Scroll Down Button - Hidden on mobile, visible on lg screens */}
          <div className="hidden lg:flex flex-col items-center absolute bottom-8 right-8 z-20 space-y-2">
            <button 
              type="button"
              onClick={scrollToContent}
              onKeyDown={(e) => e.key === 'Enter' && scrollToContent()}
              className="text-white text-xl font-bold mb-2 cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-label="Scroll to content"
            >
              Click me
            </button>
            <button 
              onClick={scrollToContent}
              className={`group relative bg-[${accentColors.DEFAULT}] text-white w-16 h-16 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg hover:bg-white hover:text-[${accentColors.DEFAULT}]`}
              aria-label="Scroll down"
            >
              <span className="relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-all duration-300 transform text-white group-hover:translate-y-1 group-hover:text-[${accentColors.DEFAULT}]`}
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
        className={`relative flex flex-col lg:flex-row h-auto lg:h-160 w-full max-w-7xl mx-auto justify-center space-y-10 lg:space-y-0 lg:space-x-10 overflow-y-auto rounded-md p-4 sm:p-6 lg:p-10 bg-white`}
        ref={isMobile ? null : ref}
        role="region"
        aria-live="polite"
        aria-label="Content carousel">
      <div className="relative w-full lg:w-auto flex-1">
        <div className="w-full max-w-2xl mx-auto">
          {content.map((item, index) => (
            <div key={item.title + index} className="py-8 sm:py-12 lg:py-16 border-b border-gray-100 last:border-0">
              <motion.div
                initial={{
                  opacity: isMobile ? 1 : 0,
                }}
                animate={{
                  opacity: isMobile ? 1 : (activeCard === index ? 1 : 0.3),
                }}
                className="space-y-4"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
          {!isMobile && <div className="h-40" />}
        </div>
      </div>
      <div
        className={cn(
          "w-full lg:w-1/2 h-auto lg:h-112 overflow-hidden rounded-xl bg-white shadow-lg lg:sticky lg:top-10 transition-all duration-300",
          isMobile ? 'mb-8' : 'group',
          contentClassName
        )}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          ...(isMobile ? {} : {
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer'
          })
        }}
        onMouseMove={!isMobile ? (e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateY = (x - centerX) / 25;
          const rotateX = (centerY - y) / 25;
          e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        } : undefined}
        onMouseLeave={!isMobile ? (e) => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        } : undefined}
        onClick={isMobile ? () => {
          // On mobile, clicking cycles through the content
          setActiveCard((prev) => (prev + 1) % content.length);
        } : undefined}
        role="img"
        aria-label={isMobile ? 'Tap to view next content' : `Content for ${content[activeCard]?.title || 'selected item'}`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || (isMobile && (e.key === 'Enter' || e.key === ' '))) {
            e.preventDefault();
            setActiveCard(prev => (prev + 1) % content.length);
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            setActiveCard(prev => (prev - 1 + content.length) % content.length);
          }
        }}>
        {content[activeCard].content ?? null}
      </div>
      </motion.div>
    </div>
  );
};

StickyScrollReveal.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.node
  })).isRequired,
  contentClassName: PropTypes.string
};

export { StickyScrollReveal };
export default StickyScrollReveal;
