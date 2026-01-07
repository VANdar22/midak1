import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Accordion from '../ui/Accordion';
import { accentColors } from '../../constants/colors';

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.48, 0.15, 0.25, 0.96]
      }
    }
  };

  return (
    <section className="w-full pt-8 pb-20 overflow-hidden font-['Montserrat']" style={{ backgroundColor: '#f5f5f5', fontFamily: "'Montserrat', sans-serif" }}>
      <motion.div 
        className="container mx-auto px-4"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="space-y-2 md:space-y-4">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-5xl text-gray-900 font-bold leading-tight tracking-tight hero-heading"
            variants={itemVariants}
          >
            <div className="flex flex-wrap items-baseline justify-start lg:justify-start gap-x-2 text-left">
              <span className="whitespace-normal sm:whitespace-nowrap word">Our Smart</span>
              <span className="text-gray-900 inline-block">
                Solutions
              </span>
            </div>
          </motion.h2>
          <motion.p 
            className="text-lg xs:text-lg sm:text-2xl md:text-2xl lg:text-2xl text-gray-600 font-normal w-full whitespace-normal hero-paragraph text-left leading-relaxed"
            variants={itemVariants}
          >
            <span className="line">Discover our comprehensive range of intelligent solutions designed to optimize your building's performance and efficiency.</span>
          </motion.p>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.4,
                duration: 0.6,
                ease: [0.48, 0.15, 0.25, 0.96]
              }
            }
          }}
        >
          <Accordion className="w-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
