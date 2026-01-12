import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Sample project data (in a real app, this would come from an API)
const projects = [
  {
    id: 1,
    slug: 'market-analysis',
    title: 'Market Analysis',
    date: 'November 2023',
    category: '',
    image: 'https://images.unsplash.com/photo-1551285563-dbdf1849c1d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: [
      'Our comprehensive market analysis provides deep insights into current industry trends, competitive landscapes, and emerging opportunities. We utilize advanced data analytics and industry expertise to deliver actionable intelligence.',
      'This project involved extensive primary and secondary research, including surveys, interviews, and data mining. Our team analyzed market size, growth rates, and key players to identify strategic opportunities for our client.',
      'The final deliverable included a detailed report with strategic recommendations, market forecasts, and implementation roadmaps.'
    ],
    client: 'Global Tech Solutions',
    duration: '3 months',
    technologies: ['Market Research', 'Data Analysis', 'Competitive Intelligence']
  },
  {
    id: 2,
    slug: 'data-visualization',
    title: 'Data Visualization',
    date: 'October 2023',
    category: '',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: [
      'Interactive dashboards and data visualization solutions that transform complex data into actionable insights. Our approach combines cutting-edge technology with intuitive design to make data accessible to all stakeholders.',
      'This project involved creating custom visualizations for large datasets, enabling real-time monitoring and decision-making. We implemented interactive features that allow users to drill down into specific metrics and trends.',
      'The solution was built using modern web technologies and is fully responsive across all devices.'
    ],
    client: 'Data Insights Inc.',
    duration: '2 months',
    technologies: ['D3.js', 'React', 'Python', 'MongoDB']
  },
  {
    id: 3,
    slug: 'strategic-planning',
    title: 'Strategic Planning',
    date: 'September 2023',
    category: '',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: [
      'Comprehensive strategic planning services to help organizations define their vision, mission, and long-term goals. Our approach combines industry expertise with data-driven insights to create actionable strategies.',
      'For this engagement, we conducted a thorough analysis of the client\'s internal capabilities, market position, and competitive landscape. We facilitated strategy workshops with key stakeholders to align on objectives and priorities.',
      'The result was a clear strategic roadmap with defined milestones, KPIs, and implementation plans to drive sustainable growth.'
    ],
    client: 'Enterprise Solutions Group',
    duration: '4 months',
    technologies: ['SWOT Analysis', 'OKR Framework', 'Market Research']
  }
];

const ProjectPost = () => {
  const containerStyle = {
    fontFamily: "'Montserrat', sans-serif"
  };
  const { slug } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);
  
  // Find the project that matches the current slug
  const project = projects.find(proj => proj.slug === slug);
  
  // Debug: Log the project data and image URL
  if (process.env.NODE_ENV === 'development') {
    console.log('Project data:', project);
    console.log('Image URL:', project?.image);
  }

  useEffect(() => {
    // Scroll position will be handled by the subsequent scrollTo calls
    
    // Disable ScrollTrigger during initial render
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.saveStyles();
    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.defaults({ immediateRender: false });
    
    // Kill any existing ScrollTrigger instances
    for (const instance of ScrollTrigger.getAll()) {
      instance.kill();
    }
    
    // Set up scroll restoration
    if (globalThis.history.scrollRestoration) {
      globalThis.history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top
    globalThis.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Set initial styles
    gsap.set('.project-content p, .project-content h2, .project-content ul', { 
      y: 30, 
      opacity: 0 
    });
    
    // Small delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      // Re-enable ScrollTrigger
      ScrollTrigger.refresh(true);
      
      // Animation for project content
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete: () => {
          // Re-enable smooth scrolling after animations complete
          document.documentElement.style.scrollBehavior = 'smooth';
        }
      });

      tl.to('.project-header', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      });

      tl.to('.project-image', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.4');

      // Animate in content
      const contentElements = gsap.utils.toArray('.project-content p, .project-content h2, .project-content ul');
      for (let i = 0; i < contentElements.length; i++) {
        tl.to(contentElements[i], {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        }, i * 0.1);
      }

      // Clean up
      const cleanup = () => {
        clearTimeout(initTimeout);
        const instances = ScrollTrigger.getAll();
        for (const instance of instances) {
          instance.kill();
        }
      };
      return cleanup;
    }, 100);

  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ fontFamily: 'League Spartan, sans-serif' }}>
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'League Spartan, sans-serif' }}>Project Not Found</h1>
          <p className="text-gray-600 mb-6" style={{ fontFamily: 'League Spartan, sans-serif' }}>The project you're looking for doesn't exist or has been moved.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#6f35c8] text-white rounded-lg hover:bg-[#5d2da8] transition-colors"
            style={{ fontFamily: 'League Spartan, sans-serif' }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{ ...containerStyle, fontFamily: 'League Spartan, sans-serif' }}>
      {/* Full-width header with background image */}
      <div 
        className="relative w-full h-96 md:h-[500px] bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${project.image})` }}
      >
        <div className="container mx-auto px-4">
          <div className="absolute bottom-12 left-0 w-full px-4">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight tracking-tight" style={{ fontFamily: 'League Spartan, sans-serif' }}>
                {project.title}
              </h1>
              <div className="flex items-center">
                <div className="text-white/90 text-sm flex flex-wrap gap-4" style={{ fontFamily: 'League Spartan, sans-serif' }}>
                  <div className="flex items-center">
                    <span className="font-medium">Duration:&nbsp;</span>
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">Date:&nbsp;</span>
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content container */}
      <div className="w-full relative z-10 bg-white" style={{ fontFamily: 'League Spartan, sans-serif' }}>
        <div className="max-w-7xl mx-auto">
          <div className="w-full pt-8 px-6 pb-12 md:pt-12 md:px-12 md:pb-12 project-content">

            <div ref={contentRef} className="prose prose-lg max-w-none" style={{ fontFamily: 'League Spartan, sans-serif' }}>
              {project.content.map((paragraph, index) => {
                // Create a more stable key using the index and first 20 characters of the paragraph
                const key = `para-${index}-${paragraph.substring(0, 20).replaceAll(/\s+/g, '-')}`;
                return (
                  <p key={key} className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'League Spartan, sans-serif' }}>
                    {paragraph}
                  </p>
                );
              })}

              {project.technologies && (
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'League Spartan, sans-serif' }}>Technologies & Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={`tech-${tech}`}
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-50 text-gray-800"
                        style={{ fontFamily: 'League Spartan, sans-serif' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <p className="text-base text-gray-500" style={{ fontFamily: 'League Spartan, sans-serif' }}>
                    Project by <span className="text-accent font-bold text-lg hover:text-accent/80 transition-colors">{project.client}</span>
                  </p>
                  <div className="group">
                    <button
                      onClick={() => navigate(-1)}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-6 py-3 text-sm font-semibold bg-accent/10 text-accent transition-all duration-300 whitespace-nowrap group-hover:bg-[#800020] group-hover:border-[#800020] group-hover:text-white"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">Back to Projects</span>
                      <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Changa+One:ital@0;1&display=swap');
      `}</style>
    </div>
  );
};

export default ProjectPost;