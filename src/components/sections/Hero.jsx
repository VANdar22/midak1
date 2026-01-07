import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import RotatingText from "../RotatingText";
import { accentColors } from "../../constants/colors";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

const paragraphVariant = {
  hidden: { y: 10, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5 + (i * 0.1),
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// Check if we're on a mobile device or have reduced motion preference
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768 || 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const Hero = () => {
  // Heading text split into two lines
  const headingLine1 = "Transform Data";
  const headingLine2 = "Into";
  const paragraphText = "Unlock the power of data with our comprehensive research and analysis solutions that drive meaningful business outcomes and strategic decisions.";
  const paragraphLines = [paragraphText];

  return (
    <ParallaxProvider>
      <section className="relative min-h-screen flex items-center pt-20 md:pt-0 [&_*:focus]:outline-none overflow-hidden">
        {/* Parallax Background Layer */}
        <Parallax speed={-20} className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[#f5f5f5]" />
        </Parallax>

        {/* Parallax Decorative Circles */}
        <Parallax speed={-15} className="absolute w-40 h-40 -left-10 top-1/4 rounded-full animate-float" style={{ backgroundColor: `${accentColors.lighter}80` }}></Parallax>
        <Parallax speed={-10} className="absolute w-60 h-60 -right-8 -top-8 rounded-full animate-float animation-delay-1000" style={{ backgroundColor: `${accentColors.lighter}80` }}></Parallax>
        
        <div className="container mx-auto px-0 sm:px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            {/* Left Column - Text */}
            <div className="lg:w-[45%] text-left mb-12 lg:mb-0 font-['League_Spartan'] px-4 sm:px-6 md:px-8 lg:px-0">
              <div className="pt-10 sm:pt-16 md:pt-24 lg:pt-32 mb-8 md:mb-10">
                <AnimatePresence>
                  <motion.div 
                    className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.h1 
                      className="text-[24px] xs:text-[28px] sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-gray-900 font-bold w-full overflow-x-visible"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        lineHeight: '1.1',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        textRendering: 'optimizeLegibility'
                      }}
                    >
                      <div className="flex flex-col space-y-1 sm:space-y-2 md:space-y-3">
                        {/* First Line: Transform Data */}
                        <div className="flex items-baseline">
                          <motion.span 
                            className="block whitespace-nowrap"
                            variants={item}
                          >
                            {headingLine1}
                          </motion.span>
                        </div>
                        
                        {/* Second Line: Into Impact */}
                        <div className="flex items-baseline">
                          <motion.span 
                            className="block whitespace-nowrap"
                            variants={item}
                          >
                            {headingLine2}
                          </motion.span>
                          <div className="inline-flex items-baseline ml-1 sm:ml-2">
                            <motion.span 
                              className="inline-block relative" 
                              style={{ color: accentColors.main }}
                              variants={item}
                            >
                              <RotatingText
                                texts={["Impact", "Results", "Success"]}
                                rotationInterval={3000}
                                mainClassName="inline-block"
                                elementLevelClassName="inline-block"
                                className="transition-all duration-1000"
                                auto={true}
                                loop={true}
                                transition={{
                                  type: 'spring',
                                  damping: 15,
                                  stiffness: 100,
                                  mass: 0.5
                                }}
                                initial={{ y: '20%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: '-20%', opacity: 0 }}
                              />
                              <span className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </motion.span>
                          </div>
                        </div>
                    </div>
                    </motion.h1>
                    
                    <motion.div className="mt-6 max-w-3xl">
                      {paragraphLines.map((line, i) => (
                        <motion.p 
                          key={i}
                          className="text-xl xs:text-xl sm:text-2xl md:text-2xl lg:text-2xl text-black leading-relaxed"
                          style={{
                            fontFamily: "'Montserrat Alternates', sans-serif",
                            fontWeight: 400,
                            letterSpacing: '0.01em',
                            lineHeight: '1.6'
                          }}
                          custom={i}
                          variants={paragraphVariant}
                        >
                          {line}
                        </motion.p>
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            {/* CTA Button - Bottom Left */}
            <motion.div 
              className="mt-4 lg:mt-8 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.span 
                className="text-xl lg:text-2xl text-black"
                style={{
                  fontFamily: "'Montserrat Alternates', sans-serif",
                  fontWeight: 600,
                  letterSpacing: '0.02em'
                }}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                Get Started
              </motion.span>
              <Link
                to="/contact"
                className="group relative bg-white w-20 h-20 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 opacity-100 shadow-md hover:shadow-lg"
                style={{ color: accentColors.main }}
                aria-label="Get Started"
              >
                <span className="relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 transition-all duration-300 transform group-hover:translate-x-1 group-hover:stroke-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    style={{ stroke: accentColors.main }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      className="transition-colors duration-300 group-hover:stroke-white"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100 origin-center" style={{ backgroundColor: accentColors.main }}></span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            className="w-full lg:w-[40%] lg:ml-0 lg:mr-0 lg:mt-0 px-4 lg:px-0 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{ 
              delay: 0.8,
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="relative w-full h-full">
              <img
                src="/assets/images/heroh.png"
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </ParallaxProvider>
  );
};

export default Hero;
