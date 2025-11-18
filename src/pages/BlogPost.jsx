import { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);
  
  // Sample blog posts data (in a real app, this would come from an API)
  const blogPosts = [
    {
      id: 1,
      slug: 'the-art-of-mixology',
      title: 'The Art of Mixology',
      content: [
        'Welcome to our comprehensive guide on the art of mixology. In this post, we\'ll explore the fundamental techniques that every aspiring mixologist should master.',
        'From shaking and stirring to muddling and layering, we\'ll cover all the essential skills you need to create perfect cocktails at home.',
        'Stay tuned for more expert tips and recipes in our upcoming posts!',
        'Mixology is both an art and a science, requiring precision, creativity, and a deep understanding of flavors. Whether you\'re a beginner or an experienced home bartender, there\'s always something new to learn in the world of cocktails.'
      ],
      date: 'October 15, 2023',
      category: 'Mixology',
      author: 'John Mixer',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1470&auto=format&fit=crop'
    },
    {
      id: 2,
      slug: 'summer-cocktail-recipes',
      title: 'Summer Cocktail Recipes',
      content: [
        'Refresh your summer with these delicious and easy-to-make cocktail recipes perfect for hot days. From fruity spritzers to frozen delights.',
        'Each recipe has been carefully crafted to bring out the best summer flavors.'
      ],
      date: 'July 22, 2023',
      category: 'Recipes',
      author: 'Sarah Mixer',
      image: 'https://images.unsplash.com/photo-1514361892635-6b07e874567b?q=80&w=1470&auto=format&fit=crop'
    },
    {
      id: 3,
      slug: 'whiskey-cocktails-101',
      title: 'Whiskey Cocktails 101',
      content: [
        'Explore the world of whiskey cocktails with our comprehensive guide for beginners and enthusiasts alike. From classics to modern twists.',
        'Learn how to make the perfect Old Fashioned, Manhattan, and more.'
      ],
      date: 'May 5, 2023',
      category: 'Tutorials',
      author: 'Mike Whiskey',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704c?q=80&w=1374&auto=format&fit=crop'
    },
    // Add more blog posts as needed
  ];

  // Find the blog post that matches the current slug
  const blogPost = blogPosts.find(post => post.slug === slug) || blogPosts[0]; // Fallback to first post if not found

  useEffect(() => {
    // Save the current scroll position before doing anything
    const scrollY = window.scrollY;
    
    // Disable ScrollTrigger during initial render
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.saveStyles();
    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.defaults({ immediateRender: false });
    
    // Kill any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(instance => instance.kill());
    
    // Set up scroll restoration
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Set initial styles
    gsap.set('.blog-content p, .blog-content h2, .blog-content ul', { 
      y: 30, 
      opacity: 0 
    });
    
    // Small delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      // Re-enable ScrollTrigger
      ScrollTrigger.refresh(true);
      
      // Animation for blog post content
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete: () => {
          // Re-enable smooth scrolling after animations complete
          document.documentElement.style.scrollBehavior = 'smooth';
          document.body.style.scrollBehavior = 'smooth';
        }
      });
      
      tl.to('.blog-content p, .blog-content h2, .blog-content ul', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });
      
      // Set up scroll triggers after content is loaded
      const contentSections = document.querySelectorAll('.blog-content > *');
      contentSections.forEach((section, i) => {
        gsap.fromTo(section,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
              id: `section-${i}`
            }
          }
        );
      });
      
      // Refresh ScrollTrigger after a short delay to ensure all content is loaded
      const refreshTimer = setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 500);
      
      return () => clearTimeout(refreshTimer);
    }, 50);
    
    // Cleanup function
    return () => {
      clearTimeout(initTimeout);
      ScrollTrigger.getAll().forEach(instance => instance.kill());
      ScrollTrigger.clearMatchMedia();
      
      // Restore scroll behavior
      document.documentElement.style.scrollBehavior = '';
      document.body.style.scrollBehavior = '';
      
      if (window.history.scrollRestoration) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, [slug]); // Re-run effect when slug changes

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Changa+One:ital@0;1&display=swap');
      `}</style>
      {/* Full-width header with background image */}
      <div 
        className="relative w-full h-96 md:h-[500px] bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${blogPost.image})` }}
      >
        <div className="container mx-auto px-4 pt-8">
          <div className="absolute bottom-12 left-0 w-full px-4">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold font-['Changa_One',cursive] text-white mb-6 max-w-4xl leading-tight tracking-tight">
                {blogPost.title}
              </h1>
              <div className="flex items-center">
                <span className="inline-block bg-[#6f35c8] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {blogPost.category}
                </span>
                <span className="ml-4 text-white/90 text-sm font-['League_Spartan']">{blogPost.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article content */}
      <div className="w-full relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <article ref={contentRef} className="w-full pt-8 px-6 pb-12 md:pt-12 md:px-12 md:pb-12 blog-content">
            <div className="w-full">
              <div className="space-y-8">
                {blogPost.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 text-lg leading-8 font-['League_Spartan']">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-20 mb-16 -ml-4">
                <h2 className="text-3xl font-bold text-[#6f35c8] font-['Changa_One',cursive] mb-6">Key Takeaways</h2>
                <ul className="space-y-4 pl-2 -ml-2 text-gray-700 font-['League_Spartan'] text-lg leading-relaxed">
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-[#6f35c8] before:rounded-full">
                    <span className="font-semibold text-gray-800">Master the basics</span> - Learn essential mixology techniques that form the foundation of great cocktails
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-[#6f35c8] before:rounded-full">
                    <span className="font-semibold text-gray-800">Flavor mastery</span> - Understand the art of balancing and pairing flavors for perfect cocktails
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-[#6f35c8] before:rounded-full">
                    <span className="font-semibold text-gray-800">Professional presentation</span> - Elevate your drinks with expert presentation techniques
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-[#6f35c8] before:rounded-full">
                    <span className="font-semibold text-gray-800">Essential tools</span> - Discover the must-have bar tools and how to use them effectively
                  </li>
                </ul>
              </div>
              
              <div className="mt-20 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <p className="text-base text-gray-500 font-['League_Spartan']">
                    Written by <span className="text-[#6f35c8] font-bold text-lg">{blogPost.author}</span>
                  </p>
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center gap-2 rounded-full border border-gray-900 px-6 py-3 text-sm font-semibold hover:bg-purple-600 text-gray-900 hover:text-white transition-colors group whitespace-nowrap"
                  >
                    <span className="group-hover:text-white transition-colors">Back insights</span>
                    <span className="group-hover:text-white transition-colors" aria-hidden>↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
