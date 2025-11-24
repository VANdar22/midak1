import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import RotatingText from "../RotatingText";
import { accentColors } from "../../constants/colors";

// Check if we're on a mobile device or have reduced motion preference
const isMobile = () => {
  return (globalThis.window !== undefined) && 
    (globalThis.window.innerWidth <= 768 || 
     globalThis.window.matchMedia('(prefers-reduced-motion: reduce)').matches);
};

const Hero = () => {
  const heroRef = useRef();
  const q = gsap.utils.selector(heroRef);
  const headingRef = useRef();
  const paragraphRef = useRef();


  // Optimized animation setup with will-change and reduced motion support
  useEffect(() => {
    if (globalThis.window === undefined) return;
    
    // Check for reduced motion preference
    const mediaQuery = globalThis.window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      // Skip animations if user prefers reduced motion
      return;
    }

    // Create a timeline for the animation
    const tl = gsap.timeline({ 
      defaults: { 
        ease: "power3.out",
        force3D: true,
        willChange: 'transform, opacity'
      } 
    });
    
    // Animate heading with word-by-word reveal
    tl.fromTo(
      q(".hero-heading .word"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      },
      "<0.1"
    )
    // Animate paragraph with line-by-line reveal
    .fromTo(
      q(".hero-paragraph .line"),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      },
      "-=0.4"
    );
    
    // Cleanup
    return () => {
      tl.kill();
    };
  }, [q]);
  


  return (
    <ParallaxProvider>
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 md:pt-0 [&_*:focus]:outline-none overflow-hidden">
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
              <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
                <h1 
                  ref={headingRef} 
                  className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-7xl text-gray-900 font-bold leading-tight tracking-tight hero-heading w-full md:overflow-x-visible"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-baseline gap-y-2 md:gap-x-2 md:whitespace-nowrap">
                    <span className="word">Transform Data</span>
                    <div className="flex items-baseline">
                      <span className="md:hidden">Into&nbsp;</span>
                      <span className="hidden md:inline">Into&nbsp;</span>
                      <span className="inline-block relative" style={{ color: accentColors.main }}>
                        <RotatingText
                        texts={["Impact", "Results", "Success"]}
                        rotationInterval={3000}
                        mainClassName="inline-block"
                        elementLevelClassName="inline-block word"
                        className="transition-all duration-1000"
                        splitBy="words"
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
                      </span>
                    </div>
                  </div>
                </h1>
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal max-w-2xl leading-relaxed md:leading-normal hero-paragraph text-gray-800">
                  <span className="line block">Unlock the power of data with our comprehensive research and analysis solutions that drive meaningful business outcomes and strategic decisions.</span>
                </p>
              </div>
            </div>
            <div ref={paragraphRef} className="text-lg md:text-2xl text-gray-900 mb-8 font-medium tracking-wide space-y-4">
              {/* Text content removed as requested */}
            </div>
            {/* Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start mr-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-medium" style={{ color: accentColors.main }}>Get Started</span>
                <Link
                  to="/contact"
                  className="group relative bg-white w-16 h-16 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 opacity-100 shadow-md hover:shadow-lg"
                  style={{ color: accentColors.main }}
                >
                  <span className="relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transition-all duration-300 transform group-hover:translate-x-1 group-hover:stroke-white"
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
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="w-full h-full lg:w-[40%] lg:h-[40%] -mt-8 -mx-4 lg:ml-0 lg:mr-0 lg:mt-0 px-4 lg:px-0">
            <div 
              className="relative w-full h-full aspect-video overflow-hidden rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl transform-gpu transition-all duration-500 hover:scale-[1.02] lg:hover:scale-105"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.98)',
                boxShadow: '10px 10px 20px rgba(0,0,0,0.1)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-xl lg:rounded-2xl overflow-hidden"
                style={{
                  transform: 'translateZ(10px)',
                  boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)'
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/images/Scene.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
              </div>
              {/* 3D Border Effect - Only on desktop */}
              <div 
                className="hidden lg:block absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"
                style={{
                  transform: 'translateZ(20px)',
                  boxShadow: '0 0 15px rgba(255,255,255,0.1)'
                }}
              ></div>
            </div>
            
            {/* Mobile Get Started - Only shows on mobile */}
            <div className="lg:hidden w-full flex justify-center mt-8 sm:mt-10 px-4">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="text-xl sm:text-2xl font-medium" style={{ color: accentColors.main }}>Get Started</span>
                <Link
                  to="/contact"
                  className="group relative bg-white w-16 h-16 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 opacity-100 shadow-md hover:shadow-lg"
                  style={{ color: accentColors.main }}
                >
                  <span className="relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transition-all duration-300 transform group-hover:translate-x-1 group-hover:stroke-white"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </ParallaxProvider>
  );
};

export default Hero;
