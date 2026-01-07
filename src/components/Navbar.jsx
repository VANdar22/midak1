import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Menu, X } from 'lucide-react';
import { accentColors } from '../constants/colors';

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);





  // Check if current path is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    return location.pathname.startsWith(path);
  };



  // Ensure navbar stays hidden when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isVisible) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  // GSAP animations for menu toggle
  useGSAP(() => {
    gsap.to('nav', {
      opacity: isVisible ? 1 : 0,
      pointerEvents: isVisible ? 'auto' : 'none',
      duration: 0.3,
      ease: 'power2.inOut'
    });
  }, [isVisible]);

  // Toggle navbar visibility
  const toggleNavbar = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    setIsVisible(newMenuState);
    
    // Close menu when clicking outside
    if (newMenuState) {
      const handleClickOutside = (e) => {
        const nav = document.querySelector('nav');
        const menuButton = document.querySelector('.menu-button');
        
        if (nav && !nav.contains(e.target) && menuButton && !menuButton.contains(e.target)) {
          setIsMenuOpen(false);
          setIsVisible(false);
          document.removeEventListener('mousedown', handleClickOutside);
        }
      };
      
      // Add event listener with a small delay to prevent immediate closure
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
    }
  };

  return (
    <div className="relative">
      <div className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        {/* Logo - Hidden when menu is open */}
        {!isMenuOpen && (
          <div className="transition-opacity duration-300">
            <Link to="/" className="shrink-0 flex items-center hover:opacity-90 transition-opacity">
              <img 
                src="/assets/images/logo.png" 
                alt="Logo" 
                className="h-12 w-auto drop-shadow-lg md:h-16"
              />
            </Link>
          </div>
        )}
        
        {/* Mobile Menu Button - Hidden when menu is open */}
        {!isMenuOpen && (
          <div className="md:hidden">
            <button 
              onClick={toggleNavbar}
              className="menu-button p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex items-center justify-center transform hover:scale-110"
              style={{ 
                backgroundColor: 'white',
                color: accentColors.main,
                width: '3rem',
                height: '3rem'
              }}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 md:h-8 md:w-8" />
            </button>
          </div>
        )}

        {/* Desktop Menu Button - Only shows when navbar is hidden */}
        {!isVisible && (
          <div className="hidden md:flex items-center">
            <button 
              onClick={toggleNavbar}
              className="menu-button p-4 rounded-full shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex items-center justify-center transform hover:scale-110"
              style={{ 
                backgroundColor: 'white',
                color: accentColors.main,
                width: '4rem',
                height: '4rem'
              }}
              aria-label="Show navigation"
            >
              <Menu className="h-8 w-8" />
            </button>
          </div>
        )}
      </div>
      
      <nav 
        className={`fixed top-4 left-0 right-0 mx-auto w-[95%] max-w-6xl z-40 rounded-full overflow-visible backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ 
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-100%) scale(0.98)',
          willChange: 'transform, opacity'
        }}
      >
      <div 
        className="backdrop-blur-md px-4 sm:px-6 md:px-8 py-2 md:py-3 lg:py-4 flex items-center justify-center w-full rounded-full transition-all duration-300 ease-in-out"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform, opacity',
          // Mobile: Keep the gradient background
          background: `linear-gradient(135deg, ${accentColors.main}99, ${accentColors.dark}99)`
        }}
      >
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center w-full mx-auto">
          <Link 
            to="/"
            className={`group relative px-4 lg:px-6 py-2 rounded-full text-base lg:text-xl font-medium transition-all duration-300 text-white ${
              isActive('/') ? 'opacity-100' : 'opacity-90 hover:opacity-100'
            } hover:bg-opacity-[0.01] hover:bg-[#800020] hover:scale-105 transform transition-transform duration-200`}
          >
            <span className="relative z-10 group-hover:font-medium text-white transition-all duration-200 whitespace-nowrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>Home</span>
          </Link>
          <div className="h-6 lg:h-8 w-0.5 bg-white/20 mx-1"></div>
          <Link 
            to="/services"
            className={`group relative px-4 lg:px-6 py-2 rounded-full text-base lg:text-xl font-medium transition-all duration-300 text-white ${
              isActive('/services') ? 'opacity-100' : 'opacity-90 hover:opacity-100'
            } hover:bg-opacity-[0.01] hover:bg-[#800020] hover:scale-105 transform transition-transform duration-200`}
          >
            <span className="relative z-10 group-hover:font-medium text-white transition-all duration-200 whitespace-nowrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>Services</span>
          </Link>
          <div className="h-6 lg:h-8 w-0.5 bg-white/20 mx-1"></div>
          <Link 
            to="/about"
            className={`group relative px-4 lg:px-6 py-2 rounded-full text-base lg:text-xl font-medium transition-all duration-300 text-white ${
              isActive('/about') ? 'opacity-100' : 'opacity-90 hover:opacity-100'
            } hover:bg-opacity-[0.01] hover:bg-[#800020] hover:scale-105 transform transition-transform duration-200`}
          >
            <span className="relative z-10 group-hover:font-medium text-white transition-all duration-200 whitespace-nowrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>About</span>
          </Link>
          <div className="h-6 lg:h-8 w-0.5 bg-white/20 mx-1"></div>
          <Link 
            to="/blog"
            className={`group relative px-4 lg:px-6 py-2 rounded-full text-base lg:text-xl font-medium transition-all duration-300 active:scale-95 text-white ${
              isActive('/blog') ? 'opacity-100' : 'opacity-90 hover:opacity-100'
            } hover:bg-opacity-[0.01] hover:bg-[#800020] hover:scale-105 transform transition-transform duration-200`}
          >
            <span className="relative z-10 group-hover:font-medium text-white transition-all duration-200 whitespace-nowrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>Insights</span>
          </Link>
          <div className="h-6 lg:h-8 w-0.5 bg-white/20 mx-1"></div>
          <Link 
            to="/contact"
            className={`group relative px-4 lg:px-6 py-2 rounded-full text-base lg:text-xl font-medium transition-all duration-300 text-white ${
              isActive('/contact') ? 'opacity-100' : 'opacity-90 hover:opacity-100'
            } hover:bg-opacity-[0.01] hover:bg-[#800020] hover:scale-105 transform transition-transform duration-200`}
          >
            <span className="relative z-10 group-hover:font-medium text-white transition-all duration-200 whitespace-nowrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact</span>
          </Link>
        </div>

      </div>

      {/* Mobile Drawer Menu - Only visible on mobile */}
      <div 
        className={`md:hidden fixed inset-0 z-50 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          transition: 'opacity 300ms ease-in-out',
        }}
      >
        {/* Overlay - Only visible on mobile */}
        <div 
          className="md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
          aria-label="Close menu"
        />
        
        {/* Drawer Content - Full width mobile menu */}
        <div 
          className="md:hidden fixed top-0 right-0 bottom-0 left-0 w-screen h-screen bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col"
          style={{
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            maxHeight: '100vh',
            overflow: 'hidden',
          }}
        >
          {/* Drawer Header with Close Button on Right */}
          <div className="p-6 flex justify-between items-center border-b border-gray-100">
            <Link to="/" className="shrink-0 flex items-center" onClick={() => setIsMenuOpen(false)}>
              <img 
                src="/assets/images/logo.png" 
                alt="Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
              style={{ color: accentColors.main }}
            >
              <X className="h-8 w-8" />
            </button>
          </div>
          
          {/* Navigation Links - No scrollbar */}
          <nav 
            className="flex-1 w-full px-6 py-4 space-y-2 overflow-y-auto custom-scrollbar" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <Link 
              to="/"
              className={`block py-5 px-6 rounded-xl text-2xl font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-[#80002010] text-[#800020] font-semibold' 
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="block" style={{ fontFamily: 'Montserrat, sans-serif' }}>Home</span>
            </Link>
            <Link 
              to="/services"
              className={`block py-5 px-6 rounded-xl text-2xl font-medium transition-all duration-200 ${
                isActive('/services') 
                  ? 'bg-[#80002010] text-[#800020] font-semibold' 
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="block" style={{ fontFamily: 'Montserrat, sans-serif' }}>Services</span>
            </Link>
            <Link 
              to="/about"
              className={`block py-5 px-6 rounded-xl text-2xl font-medium transition-all duration-200 ${
                isActive('/about') 
                  ? 'bg-[#80002010] text-[#800020] font-semibold' 
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="block" style={{ fontFamily: 'Montserrat, sans-serif' }}>About</span>
            </Link>
            <Link 
              to="/blog"
              className={`block py-5 px-6 rounded-xl text-2xl font-medium transition-all duration-200 ${
                isActive('/blog') 
                  ? 'bg-[#80002010] text-[#800020] font-semibold' 
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="block" style={{ fontFamily: 'Montserrat, sans-serif' }}>Insights</span>
            </Link>
            <Link 
              to="/contact"
              className={`block py-5 px-6 rounded-xl text-2xl font-medium transition-all duration-200 ${
                isActive('/contact') 
                  ? 'bg-[#80002010] text-[#800020] font-semibold' 
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="block" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact Us</span>
            </Link>
          </nav>
          
          {/* Optional: Add a footer or additional content */}
          <div className="p-6 border-t border-gray-200 mt-auto">
            <p className="text-base text-center" style={{ fontFamily: 'Montserrat, sans-serif', color: accentColors.main }}>
               © {new Date().getFullYear()} Midak Research & Analytics
            </p>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;