import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => (
  <Link to={`/projects/${project.slug}`} className="block">
    <motion.div 
      className="bg-[#f4eff4] border-2 border-gray-300 hover:border-gray-400 overflow-hidden transition-all duration-300 flex flex-col h-[380px] max-w-xs mx-auto w-full group"
      whileHover={{ y: -5 }}
    >
      <div className="h-40 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col h-full">
        <div className="grow">
          <h3 className="text-xl font-semibold text-gray-900 mb-0.5">{project.title}</h3>
          <p className="text-[#6f35c8] text-xs mb-1">{project.date}</p>
          <p className="text-gray-600 text-xl mt-6 line-clamp-2 leading-tight">{project.subtext}</p>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-base font-medium text-[#6f35c8]">View Project</span>
            <div className="group-hover:bg-[#6f35c8] transition-colors duration-300 w-16 h-16 ml-32 rounded-full flex items-center justify-center overflow-hidden shadow group-hover:shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#6f35c8] group-hover:text-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 19L19 5m0 0H9m10 0v10"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
);

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate projects per page based on screen size
  const [projectsPerPage, setProjectsPerPage] = useState(1);
  
  // Update projects per page on window resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProjectsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setProjectsPerPage(2);
      } else {
        setProjectsPerPage(3);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const pages = Math.max(1, Math.ceil(projects.length / projectsPerPage));
    setCurrentPage((prev) => Math.min(prev, pages));
  }, [projectsPerPage]);
  
  // Recalculate pagination when projectsPerPage changes
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="py-16 bg-[#f4eff4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="flex justify-center items-center mt-16 space-x-3">
          <button 
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
            disabled={currentPage === 1}
            className="p-3 rounded-full bg-[#6f35c8]/10 hover:bg-[#6f35c8]/20 text-[#6f35c8] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-medium text-lg ${
                currentPage === number 
                  ? 'bg-[#6f35c8] text-white shadow-lg transform scale-105' 
                  : 'text-[#6f35c8] hover:bg-[#6f35c8]/10'
              } transition-all duration-300`}
            >
              {number}
            </button>
          ))}
          
          <button 
            onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
            disabled={currentPage === totalPages}
            className="p-3 rounded-full bg-[#6f35c8]/10 hover:bg-[#6f35c8]/20 text-[#6f35c8] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
