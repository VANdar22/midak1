import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { accentColors } from '../constants/colors';

// Sample insight post data - in a real app, this would come from an API
const insightPosts = {
  'market-trends-insights-2023': {
    id: 1,
    title: 'Key Market Trends and Insights for 2023',
    date: 'November 15, 2023',
    category: 'Market Insights',
    readTime: '6 min read',
    excerpt: 'An in-depth analysis of emerging market trends and strategic insights for businesses in 2023.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
    backgroundColor: accentColors.darkest,
    color: accentColors.text,
    content: [
      {
        type: 'paragraph',
        text: 'The business landscape in 2023 is being shaped by several key trends that are transforming industries and consumer behaviors. Understanding these trends is crucial for businesses looking to stay competitive.'
      },
      {
        type: 'heading',
        color: accentColors.main,
        text: 'Emerging Market Trends'
      },
      {
        type: 'paragraph',
        text: 'The current market is witnessing significant shifts in consumer preferences and technological adoption. Companies that can adapt to these changes will be better positioned for success.'
      },
      {
        type: 'list',
        items: [
          'Increased focus on sustainability and ESG initiatives',
          'Rapid digital transformation across sectors',
          'Growing importance of data privacy and security',
          'Shift towards remote and hybrid work models'
        ]
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
        alt: 'Market Trends Analysis',
        caption: 'Analyzing key market trends for strategic advantage'
      },
      {
        type: 'heading',
        color: accentColors.main,
        text: 'Strategic Implications'
      },
      {
        type: 'paragraph',
        text: 'Businesses need to develop agile strategies to navigate the evolving market landscape. This includes investing in digital capabilities, upskilling workforce, and building resilient supply chains.'
      }
    ],
    author: {
      name: 'Michael Chen',
      role: 'Chief Insights Officer',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    relatedInsights: [
      {
        id: 2,
        title: 'Consumer Behavior Shifts in 2023',
        excerpt: 'Understanding the changing patterns in consumer behavior and preferences.',
        date: 'November 5, 2023',
        category: 'Consumer Insights',
        readTime: '5 min read',
        slug: 'consumer-behavior-shifts-2023',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      },
      {
        id: 3,
        title: 'Digital Transformation Strategies',
        excerpt: 'Key strategies for successful digital transformation in the modern business environment.',
        date: 'October 28, 2023',
        borderBottom: `2px solid ${accentColors.main}`,
        category: 'Digital Strategy',
        readTime: '7 min read',
        slug: 'digital-transformation-strategies',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop'
      }
    ]
  }
  // Add more insight posts as needed
};

export default function InsightPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);
  
  // Get the current insight post or redirect to 404 if not found
  const post = insightPosts[slug];
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate content on mount
    const contentElements = contentRef.current?.querySelectorAll('.animate-on-scroll');
    
    if (contentElements) {
      for (const [index, element] of contentElements.entries()) {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }

    // Clean up animations on unmount
    return () => {
      const triggers = ScrollTrigger.getAll();
    for (const trigger of triggers) {
      trigger.kill();
    }
    };
  }, [post]);

  if (!post) {
    navigate('/404');
    return null;
  }

  const renderContent = () => {
    return post.content.map((item, index) => {
      const itemKey = `content-${item.type}-${index}`;
      switch (item.type) {
        case 'heading':
          return (
            <h2 key={`${itemKey}-heading`} className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-gray-900 animate-on-scroll">
              {item.text}
            </h2>
          );
        case 'paragraph':
          return (
            <p key={`${itemKey}-para`} className="text-lg text-gray-700 leading-relaxed mb-6 animate-on-scroll">
              {item.text}
            </p>
          );
        case 'list':
          return (
            <ul key={`${itemKey}-list`} className="list-disc list-inside space-y-2 mb-6 pl-4 animate-on-scroll">
              {item.items.map((listItem, i) => (
                <li key={`${itemKey}-item-${i}`} className="text-gray-700">
                  {listItem}
                </li>
              ))}
            </ul>
          );
        case 'image':
          return (
            <div key={`${itemKey}-img`} className="my-8 rounded-lg overflow-hidden shadow-lg animate-on-scroll">
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {item.caption && (
                <p className="text-sm text-gray-500 italic mt-2 text-center">
                  {item.caption}
                </p>
              )}
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-96 object-cover"
        />
        <div className="container mlx-auto px-4 relative z-20 -mt-32">
          <div className="max-w-3xl bg-white p-8 rounded-lg shadow-xl">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">
                {post.date} · {post.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {post.excerpt}
            </p>
            <div className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto" ref={contentRef}>
          {renderContent()}
        </div>
      </main>

      {/* Related Insights */}
      {post.relatedInsights && post.relatedInsights.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Related Insights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {post.relatedInsights.map((insight) => (
                <article 
                  key={`insight-${insight.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  tabIndex={0}
                  role="button"
                  onClick={() => navigate(`/insights/${insight.slug}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      navigate(`/insights/${insight.slug}`);
                    }
                  }}
                  aria-label={`View ${insight.title}`}
                >
                  <img 
                    src={insight.image} 
                    alt={insight.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{insight.date}</span>
                      <span className="mx-2">•</span>
                      <span>{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600">
                      {insight.excerpt}
                    </p>
                    <div className="mt-4">
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      </div>
    
  );  
}