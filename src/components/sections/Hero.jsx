import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import RotatingText from "../RotatingText";

// Check if we're on a mobile device or have reduced motion preference
const isMobile = () => {
  return (typeof window !== 'undefined') && 
    (window.innerWidth <= 768 || 
     window.matchMedia('(prefers-reduced-motion: reduce)').matches);
};

const Hero = () => {
  const heroRef = useRef();
  const q = gsap.utils.selector(heroRef);
  const headingRef = useRef();
  const paragraphRef = useRef();


  // Optimized animation setup with will-change and reduced motion support
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
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
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 md:pt-0 [&_*:focus]:outline-none overflow-hidden">
        {/* Parallax Background Layer */}
        <Parallax speed={-20} className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-[#E0E0E0]/30 to-[#E0E0E0]/10" />
        </Parallax>

        {/* Parallax Decorative Circles */}
        <Parallax speed={-15} className="absolute w-40 h-40 bg-[#6f35c8]/50 -left-10 top-1/4 rounded-full animate-float"></Parallax>
        <Parallax speed={-10} className="absolute w-60 h-60 bg-[#6f35c8]/50 -right-8 -top-8 rounded-full animate-float animation-delay-1000"></Parallax>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column - Text */}
          <div className="lg:w-[45%] text-center lg:text-left mb-12 lg:mb-0 font-['League_Spartan']">
            <div className="md:mt-20 mb-6">
              <div className="space-y-2 md:space-y-4">
                <h1 
                  ref={headingRef} 
                  className="text-xl xs:text-2xl sm:text-4xl md:text-5xl text-gray-900 font-bold leading-tight tracking-tight hero-heading"
                >
                  <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-x-2">
                    <span className="whitespace-normal sm:whitespace-nowrap word">Transform Data Into</span>
                    <span className="text-[#6f35c8] inline-block">
                      <RotatingText
                        texts={["Impact", "Results", "Success"]}
                        rotationInterval={3000}
                        mainClassName="inline-block"
                        elementLevelClassName="inline-block word"
                        className="transition-all duration-1000"
                        splitBy="words"
                        auto={true}
                        loop={true}
                      />
                    </span>
                  </div>
                </h1>
                <p className="text-lg sm:text-2xl md:text-3xl text-gray-600 font-normal max-w-2xl leading-relaxed hero-paragraph">
                  <span className="line block">Unlock the power of data with our comprehensive research and analysis solutions</span>
                </p>
              </div>
            </div>
            <div ref={paragraphRef} className="text-lg md:text-2xl text-gray-900 mb-8 font-medium tracking-wide space-y-4">
              {/* Text content removed as requested */}
            </div>
            {/* Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start mr-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-medium text-[#6f35c8]">Get Started</span>
                <Link
                  to="/contact"
                  className="group relative bg-white text-[#6f35c8] w-16 h-16 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 opacity-100 shadow-md hover:shadow-lg"
                >
                  <span className="relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transition-all duration-300 transform group-hover:translate-x-1 group-hover:stroke-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#6f35c8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        className="transition-colors duration-300"
                      />
                    </svg>
                  </span>
                  <span className="absolute inset-0 rounded-full bg-[#6f35c8] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100 origin-center"></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-[55%] -mt-16 -ml-4 md:ml-0 md:mt-0">
            <img
              src="../assets/images/hero4.png"
              alt="Hero"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Mobile Get Started - Only shows on mobile */}
            <div className="lg:hidden w-full flex justify-center mt-8">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-medium text-[#6f35c8]">Get Started</span>
                <Link
                  to="/contact"
                  className="group relative bg-white text-[#6f35c8] w-16 h-16 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 opacity-100 shadow-md hover:shadow-lg"
                >
                  <span className="relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transition-all duration-300 transform group-hover:translate-x-1 group-hover:stroke-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#6f35c8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        className="transition-colors duration-300"
                      />
                    </svg>
                  </span>
                  <span className="absolute inset-0 rounded-full bg-[#6f35c8] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100 origin-center"></span>
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
