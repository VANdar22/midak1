import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { accentColors } from '../constants/colors';

const ViewButton = styled.button`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: ${accentColors.main};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 0;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: white;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  svg {
    color: white;
    height: 1.5rem;
    width: 1.5rem;
    transition: all 0.3s ease;
  }
  
  &:hover svg {
    color: ${accentColors.main} !important;
    transform: translate(2px, -1px);
  }
`;

// Custom scrollbar hiding for mobile
const globalStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const FeaturedPostContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 80px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 60px 120px -20px ${accentColors.alpha20},
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transform: 
    perspective(1500px) 
    rotateX(0deg) 
    rotateY(0deg) 
    rotateZ(0deg)
    translateZ(0);
  transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: transform, box-shadow;
  background: linear-gradient(145deg, ${accentColors.darkest}, #000000);
  padding: 0;
  backface-visibility: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    transform: 
      perspective(1500px) 
      rotateY(-8deg) 
      rotateX(5deg) 
      translateZ(20px);
    box-shadow: 
      0 80px 140px -30px ${accentColors.alpha20},
      0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  .featured-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .featured-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 40px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    color: white;
  }

  .featured-category {
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 6px 16px;
    border-radius: 20px;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .featured-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0 0 16px;
    line-height: 1.2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .featured-excerpt {
    font-size: 1.1rem;
    opacity: 0.9;
    margin: 0 0 20px;
    max-width: 70%;
    line-height: 1.6;
  }
`;


const Blog = () => {
  // Apply Montserrat font to the entire page
  useEffect(() => {
    document.body.style.fontFamily = 'Montserrat, sans-serif';
    return () => {
      document.body.style.fontFamily = ''; // Reset on unmount if needed
    };
  }, []);
  // Apply Montserrat font to the entire page
  document.body.style.fontFamily = 'Montserrat, sans-serif';
  
  const [activeCategory, setActiveCategory] = useState('View all');
  const [sortBy, setSortBy] = useState('mostRecent');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const sortButtonRef = React.useRef(null);
  const postsPerPage = 4; // Number of posts per page

  React.useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }
    const styleTag = document.createElement('style');
    styleTag.textContent = globalStyles;
    document.head.appendChild(styleTag);
    return () => {
      if (styleTag.parentNode) {
        styleTag.parentNode.removeChild(styleTag);
      }
    };
  }, []);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, sortBy]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortButtonRef.current && !sortButtonRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const sortOptions = [
    { value: 'mostRecent', label: 'Most Recent' },
    { value: 'mostPopular', label: 'Most Popular' },
    { value: 'mostViewed', label: 'Most Viewed' }
  ];

  const categories = [
    'View all',
    'Design',
    'Product',
    'Software Engineering',
    'Customer Success'
  ];

  const featuredPost = {
    id: 1,
    slug: 'getting-started-with-modern-web-development',
    title: 'Getting Started with Modern Web Development',
    excerpt: 'A comprehensive guide to building modern web applications with the latest technologies and best practices.',
    date: 'November 15, 2023',
    category: 'Software Engineering',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
  };

  const posts = [
    {
      id: 2,
      slug: 'designing-for-accessibility',
      title: 'Designing for Accessibility',
      excerpt: 'Learn how to create inclusive web experiences that work for everyone, regardless of ability.',
      date: 'November 10, 2023',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
      popularity: 92,
      views: 4200,
    },
    {
      id: 3,
      slug: 'future-of-product-management',
      title: 'The Future of Product Management',
      excerpt: 'Exploring how AI and machine learning are transforming product development and management.',
      date: 'November 5, 2023',
      category: 'Product',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      popularity: 88,
      views: 3650,
    },
    {
      id: 4,
      slug: 'building-scalable-apis-with-nodejs',
      title: 'Building Scalable APIs with Node.js',
      excerpt: 'Best practices for designing and implementing high-performance, scalable APIs using Node.js.',
      date: 'October 30, 2023',
      category: 'Software Engineering',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      popularity: 96,
      views: 5100,
    },
    {
      id: 5,
      slug: 'customer-success-in-saas',
      title: 'Customer Success in SaaS',
      excerpt: 'Strategies for building a customer success program that drives retention and growth.',
      date: 'October 25, 2023',
      category: 'Customer Success',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      popularity: 85,
      views: 2800,
    },
    {
      id: 6,
      slug: 'the-art-of-ui-animation',
      title: 'The Art of UI Animation',
      excerpt: 'How to use animation to enhance user experience and create delightful interfaces.',
      date: 'October 20, 2023',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      popularity: 90,
      views: 3300,
    }
  ];

  const filteredPosts = activeCategory === 'View all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const sortedPosts = (() => {
    const list = [...filteredPosts];
    switch (sortBy) {
      case 'mostPopular':
        return list.sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
      case 'mostViewed':
        return list.sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
      case 'mostRecent':
      default:
        return list.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  })();

  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / postsPerPage));

  React.useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, totalPages));
  }, [totalPages]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Get featured posts (first 3 posts)
  const featuredPosts = [featuredPost, ...posts].slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Featured Posts Carousel */}
      <div 
        className="relative mx-auto w-[calc(100%-32px)] md:w-11/12 max-w-5xl"
        style={{
          transform: 'perspective(1500px) rotateX(0deg) rotateY(0deg) translateZ(0)',
          transformOrigin: 'center center',
          transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1.2)',
          willChange: 'transform, box-shadow',
          borderRadius: '16px',
          overflow: 'hidden',
          margin: '20px auto',
          boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(168, 85, 247, 0.3)'
        }}
        onMouseEnter={(e) => {
          if (window.innerWidth > 768) { // Only apply hover effects on desktop
            e.currentTarget.style.transform = 'perspective(1500px) rotateX(-3deg) translateY(-10px) translateZ(20px)';
            e.currentTarget.style.boxShadow = '0 30px 60px -10px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transformOrigin = 'bottom center';
          }
        }}
        onMouseLeave={(e) => {
          if (window.innerWidth > 768) { // Only apply hover effects on desktop
            e.currentTarget.style.transform = 'perspective(1500px) rotateX(0deg) translateY(0) translateZ(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.transformOrigin = 'center center';
          }
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'perspective(1500px) rotateX(-3deg) translateY(-10px) translateZ(20px)';
          e.currentTarget.style.boxShadow = '0 40px 100px -10px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 30px 80px -10px rgba(0, 0, 0, 0.5)';
          e.currentTarget.style.transformOrigin = 'bottom center';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'perspective(1500px) rotateX(0deg) translateY(0) translateZ(0)';
          e.currentTarget.style.boxShadow = '0 20px 60px -10px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)';
          e.currentTarget.style.transformOrigin = 'center center';
        }}
      >
        <div 
          className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-gray-900 overflow-hidden"
          style={{
            borderRadius: 0,
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'transform',
            transformStyle: 'preserve-3d'
          }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="h-full w-full"
            style={{
              '--swiper-pagination-color': '#9B2C2C',
              '--swiper-pagination-bullet-inactive-color': '#C53030',
              '--swiper-pagination-bullet-size': '8px',
              '--swiper-pagination-bullet-horizontal-gap': '6px',
              '--swiper-pagination-bullet-opacity': '1',
              '--swiper-pagination-bullet-inactive-opacity': '0.8'
            }}
          >
            {featuredPosts.map((post) => (
              <SwiperSlide key={post.id} className="relative">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                      borderRadius: 0,
                      transform: 'scale(1.02)',
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                  />
                </div>
                <div 
                  className="absolute inset-0 z-20 flex items-end p-4 sm:p-8 md:p-12"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)',
                    transform: 'translateZ(30px)',
                    transformStyle: 'preserve-3d',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    paddingTop: '40%',
                    display: 'flex',
                    alignItems: 'flex-end'
                  }}
                >
                  <div className="w-full max-w-3xl text-left">
                    <span 
                      className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-white rounded-full"
                      style={{
                        transform: 'translateZ(40px)',
                        display: 'inline-block',
                        backdropFilter: 'blur(10px)',
                        backgroundColor: `${accentColors.main}E6`
                      }}
                    >
                      {post.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {post.title}
                    </h2>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-2xl mb-3 sm:mb-4 line-clamp-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {post.excerpt}
                    </p>
                    <div className="text-sm text-white/80 font-sans">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Midak Insights Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3 text-left">
        <h1 className="text-lg sm:text-2xl font-bold tracking-tight" style={{ 
          color: accentColors.main, 
          fontFamily: '"Montserrat Alternates", sans-serif',
          fontWeight: 700,
          margin: 0
        }}>
          Midak Insights
        </h1>
      </div>

          {/* Category and Sort Section */}
          <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 mb-6 sm:mb-8">
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between items-stretch sm:items-center w-full">
          {/* Category Tabs */}
          <div className="w-full relative pr-4 sm:pr-0">
            <div 
              className="flex space-x-4 sm:space-x-8 overflow-x-auto pb-3 -mx-2 px-2 hide-scrollbar"
              style={{
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* IE and Edge */
                WebkitOverflowScrolling: 'touch', /* Smooth scrolling on iOS */
                paddingBottom: '0.5rem',
                marginBottom: '-0.5rem',
              }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-2 py-2 sm:py-3 font-medium sm:font-semibold text-sm sm:text-base transition-all duration-200 ${
                    activeCategory === category
                      ? 'font-semibold border-b-2'
                      : 'text-gray-600 hover:opacity-80'
                  }`}
                  style={{
                    color: activeCategory === category ? accentColors.main : 'inherit',
                    borderColor: activeCategory === category ? accentColors.main : 'transparent',
                    '&:hover': {
                      color: accentColors.main
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Sort Dropdown */}
          <div className="relative w-full sm:w-auto mt-2 sm:mt-0 sm:ml-4" ref={sortButtonRef}>
            <div className="relative w-full">
              <button
                type="button"
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="group flex items-center justify-between w-full sm:w-40 px-4 py-3 sm:py-2.5 text-sm font-medium focus:outline-none transition-all duration-200 border rounded-lg sm:rounded-md bg-white shadow-sm"
                style={{
                  color: accentColors.main,
                  borderColor: `${accentColors.main}4D`,
                  '&:hover': {
                    color: `${accentColors.main}E6`,
                    backgroundColor: `${accentColors.main}0D`
                  },
                  '&:focus': {
                    '--tw-ring-opacity': '1',
                    '--tw-ring-color': `${accentColors.main}33`,
                    '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                    '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                    'box-shadow': 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)'
                  }
                }}
                aria-haspopup="listbox"
                aria-expanded={isSortOpen}
              >
                <span className="whitespace-nowrap text-left">
                  {sortOptions.find(opt => opt.value === sortBy)?.label || 'Most Recent'}
                </span>
                <svg 
                  className={`h-4 w-4 text-gray-400 transform transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {isSortOpen && (
              <div 
                className="absolute right-0 mt-1 w-full sm:w-40 origin-top-right rounded-lg sm:rounded-md bg-[#f4f4f4]/80 py-1 shadow-lg ring-1 ring-[#f4f4f4]/80 focus:outline-none z-10 border border-[#f4f4f4]/80"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="sort-menu"
                tabIndex="-1"
              >
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setIsSortOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm font-semibold transition-colors duration-150"
                    style={{
                      backgroundColor: sortBy === option.value ? accentColors.main : 'transparent',
                      color: sortBy === option.value ? accentColors.text : 'var(--gray-600)',
                      '&:hover': {
                        backgroundColor: sortBy === option.value ? accentColors.dark : `${accentColors.main}26`,
                        color: sortBy === option.value ? accentColors.text : accentColors.darkest
                      }
                    }}
                    role="menuitem"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <div key={post.id} className="flex flex-col rounded-lg overflow-hidden h-full border border-gray-200 transition-colors duration-300 hover:border-gray-300">
              <div className="flex-shrink-0 overflow-hidden h-40">
                <div className="relative h-full w-full group">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    src={post.image}
                    alt={post.title}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xs font-medium" style={{ color: `${accentColors.main}CC` }}>
                    {post.category}
                  </p>
                  <div className="block mt-1">
                    <Link to={`/blog/${post.slug}`} className="transition-colors duration-200" style={{ '--tw-text-opacity': '1', color: `var(--tw-text-opacity, ${accentColors.main})` }}>
                    <p className="text-lg font-semibold text-gray-900 line-clamp-2">{post.title}</p>
                  </Link>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>

                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <div className="flex items-center ml-4">
                    <Link to={`/blog/${post.slug}`} className="block" aria-label={`Read more about ${post.title}`}>
                      <ViewButton>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 19L19 5M19 5H9m10 0v10"
                          />
                        </svg>
                      </ViewButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 space-x-3">
            <button 
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: `${accentColors.main}1A`,
                color: accentColors.main,
                '--tw-bg-opacity': '0.1',
                '&:hover': {
                  backgroundColor: `${accentColors.main}33`
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`w-5 h-5 rounded-full flex items-center justify-center font-medium text-lg ${
                  currentPage === number 
                    ? 'text-white shadow-lg transform scale-105' 
                    : 'hover:bg-opacity-10'
                } transition-all duration-300`}
                style={{
                  backgroundColor: currentPage === number ? accentColors.main : 'transparent',
                  color: currentPage === number ? accentColors.text : accentColors.main,
                  '--tw-bg-opacity': '0.1',
                  '--tw-text-opacity': '1'
                }}
              >
                {number}
              </button>
            ))}
            
            <button 
              onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: `${accentColors.main}1A`,
                color: accentColors.main,
                '--tw-bg-opacity': '0.1',
                '&:hover': {
                  backgroundColor: `${accentColors.main}33`
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
