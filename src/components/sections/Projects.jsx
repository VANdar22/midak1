import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { accentColors } from '../../constants/colors';

const ViewButton = styled.button`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${accentColors.main};
  color: white;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: white;
    color: ${accentColors.main};
    transform: scale(1.05);
    box-shadow: 0 0 0 1px ${accentColors.main}33;
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    transition: stroke 0.3s ease;
  }
  
  &:hover svg {
    stroke: ${accentColors.main};
  }
`;

const projects = [
  {
    id: 1,
    slug: 'market-analysis',
    title: 'Market Analysis',
    date: 'November 2023',
    subtext: 'Comprehensive market research and trend analysis',
    image: 'https://images.unsplash.com/photo-1551285563-dbdf1849c1d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Research'
  },
  {
    id: 2,
    slug: 'data-visualization',
    title: 'Data Visualization',
    date: 'October 2023',
    subtext: 'Interactive dashboards and data insights',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Analytics'
  },
  {
    id: 3,
    slug: 'strategic-planning',
    title: 'Strategic Planning',
    date: 'September 2023',
    subtext: 'Long-term business strategy development',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Consulting'
  }
];

const ProjectCard = ({ project }) => (
  <div className="flex flex-col rounded-lg overflow-hidden h-full border border-gray-200 transition-colors duration-300 hover:border-gray-300">
    <div className="flex-shrink-0 overflow-hidden h-48">
      <div className="relative h-full w-full group">
        <motion.div 
          className="w-full h-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="h-full w-full object-cover"
            src={project.image}
            alt={project.title}
          />
        </motion.div>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        <div className="absolute top-4 right-4 bg-[#f5f5f5] px-3 py-1 rounded-full text-xs font-medium font-['Montserrat_Alternates']" 
             style={{ 
               color: accentColors.main, 
               border: `1px solid ${accentColors.main}`,
               fontFamily: "'Montserrat Alternates', sans-serif"
             }}>
          {project.category}
        </div>
      </div>
    </div>
    
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex-1">
        <div className="mb-2">
          <span className="text-xs font-semibold tracking-wider uppercase font-['Montserrat_Alternates']" 
                style={{ color: `${accentColors.main}CC`, fontFamily: "'Montserrat Alternates', sans-serif" }}>
            {project.category}
          </span>
        </div>
        <div className="block">
          <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-2 font-['Montserrat']" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {project.title}
          </h3>
          <p className="text-gray-600 leading-relaxed font-['Montserrat']" 
             style={{ fontFamily: "'Montserrat', sans-serif" }}>{project.subtext}</p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          <time dateTime={project.date}>{project.date}</time>
        </div>
        <div className="flex items-center ml-4">
          <Link to={`/projects/${project.slug}`} className="block" aria-label={`View ${project.title}`}>
            <ViewButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="w-6 h-6 transform -rotate-45"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </ViewButton>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    subtext: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string
  }).isRequired
};

const Projects = () => {
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
    <section className="w-full py-16 overflow-hidden font-['Montserrat']" style={{ backgroundColor: '#f5f5f5', fontFamily: "'Montserrat', sans-serif" }}>
      <motion.div 
        className="container mx-auto px-4"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div className="text-left mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-4">
            <div className="flex flex-wrap items-baseline justify-start lg:justify-start gap-x-2 text-left">
              <span className="whitespace-normal sm:whitespace-nowrap word">Our</span>
              <span className="text-gray-900 inline-block">Projects</span>
            </div>
          </h2>
          <motion.p 
            className="text-lg xs:text-lg sm:text-2xl md:text-2xl lg:text-2xl text-gray-600 font-normal w-full whitespace-normal text-left leading-relaxed"
            variants={itemVariants}
          >
            <span className="line">Explore our portfolio of successful projects and business solutions.</span>
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
