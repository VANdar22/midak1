import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Menu, X } from 'lucide-react';
import { accentColors } from '../constants/colors';

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

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



  // Handle scroll to show/hide navbar (desktop only)
  useEffect(() => {
    // Skip scroll handling on mobile
    if (window.innerWidth < 768) {
      setIsVisible(true);
      return;
    }

    let timeoutId;
    let buttonTimeoutId;
    
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      // Clear any existing timeouts
      clearTimeout(timeoutId);
      clearTimeout(buttonTimeoutId);
      
      // Show navbar if at the top of the page
      if (currentScrollPos < 10) {
        setIsVisible(true);
        return;
      }
      
      // Only update visibility when scrolling down significantly
      if (Math.abs(prevScrollPos - currentScrollPos) > 5 && !isScrollingUp) {
        setIsVisible(false);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      clearTimeout(buttonTimeoutId);
    };
  }, [prevScrollPos]);

  // GSAP animations with enhanced transitions
  useGSAP(() => {
    gsap.to('nav', {
      y: isVisible ? 0 : -100,
      opacity: isVisible ? 1 : 0,
      scale: isVisible ? 1 : 0.98,
      duration: 0.5,
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      willChange: 'transform, opacity',
      transformOrigin: 'center top',
      transitionProperty: 'transform, opacity',
      force3D: true
    });
  }, [isVisible]);

  // Toggle navbar visibility
  const toggleNavbar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      {/* Show Navbar Button - Only appears when navbar is hidden on desktop */}
      {!isVisible && (
        <div className="hidden md:block">
          <button 
            onClick={toggleNavbar}
            className="fixed top-4 right-4 z-40 p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out delay-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex items-center justify-center transform"
            style={{ 
              color: accentColors.main,
              backgroundColor: 'white',
              ':hover': {
                backgroundColor: accentColors.main,
                color: 'white'
              }
            }}
            aria-label="Show navigation"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      )}
      
      {/* Main Navbar */}
      <nav 
        className={`fixed md:top-4 top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 rounded-full overflow-visible backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ 
          transform: isVisible ? 'translate(-50%, 0) scale(1)' : 'translate(-50%, -100%) scale(0.98)',
          willChange: 'transform, opacity',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased'
        }}
      >
      <div 
        className="backdrop-blur-md px-6 sm:px-10 py-3 md:py-4 flex items-center justify-between w-full rounded-full transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: `${accentColors.main}CC`, // CC is 80% opacity in hex
          transform: 'translateZ(0)',
          willChange: 'transform, opacity',
          background: `linear-gradient(135deg, ${accentColors.main}CC, ${accentColors.dark}CC)`
        }}
      >
        {/* Logo */}
        <Link to="/" className="shrink-0 flex items-center justify-center">
          <img src="/images/logo.png" alt="Logo" className="h-8 sm:h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center ml-32">
          <Link 
            to="/"
            className={`group relative px-4 py-2 text-xl font-medium transition-all duration-200 text-white! ${
              isActive('/') ? 'opacity-100' : 'opacity-90 hover:opacity-100'
            }`}
          >
            <span className="relative z-10">Home</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 -translate-x-1/2 group-hover:w-3/4"></span>
          </Link>
          <div className="h-8 w-0.5 bg-white/20 mx-1"></div>
          <Link 
            to="/services"
            className={`group relative px-4 py-2 text-xl font-medium transition-all duration-200 text-white! ${
              isActive('/services') ? 'opacity-100' : 'opacity-90 hover:opacity-100'
            }`}
          >
            <span className="relative z-10">Services</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 -translate-x-1/2 group-hover:w-3/4"></span>
          </Link>
          <div className="h-8 w-0.5 bg-white/20 mx-1"></div>
          <Link 
            to="/about"
            className={`group relative px-4 py-2 text-xl font-medium transition-all duration-200 text-white! ${
              isActive('/about') ? 'opacity-100' : 'opacity-90 hover:opacity-100'
            }`}
          >
            <span className="relative z-10">About</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 -translate-x-1/2 group-hover:w-3/4"></span>
          </Link>
          <div className="h-8 w-0.5 bg-white/20 mx-1"></div>
          <Link 
            to="/blog"
            className={`group relative px-4 py-2 text-xl font-medium transition-all duration-200 active:scale-95 !text-white ${
              isActive('/blog') ? 'opacity-100' : 'opacity-90 hover:opacity-100'
            }`}
          >
            <span className="relative z-10">Insights</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 -translate-x-1/2 group-hover:w-3/4"></span>
          </Link>
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-4">
            <span className="text-xl font-medium text-white!">Contact Us</span>
            <Link 
              to="/contact"
              className="group relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 bg-white hover:bg-[#800020]"
            >
              <svg className="relative z-10 w-6 h-6 text-[#800020] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
              <span className="absolute inset-0 bg-[#800020] transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>

        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button w-10 h-10 flex items-center justify-center bg-transparent border-0 p-0 m-0 text-white hover:bg-white/20 transition-colors duration-200"
            aria-label="Toggle menu"
            style={{
              minWidth: '2.5rem',
              minHeight: '2.5rem',
              borderRadius: '0.375rem',
              height: 'auto',
              padding: '0',
              backgroundColor: 'transparent',
              fontFamily: 'inherit',
              cursor: 'pointer'
            }}
          >
            {isMenuOpen ? (
              <X size={24} className="text-white m-auto" />
            ) : (
              <Menu size={24} className="text-white m-auto" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        } absolute left-0 right-0 top-full mt-1 z-60 rounded-b-2xl mx-4`}
        style={{
          background: `linear-gradient(135deg, ${accentColors.dark}EE, ${accentColors.darkest}EE)`,
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}
      >
        <div className="flex flex-col items-stretch space-y-3 px-6">
          <Link 
            to="/"
            className={`w-full text-center py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 text-white! ${
              isActive('/') ? 'bg-white/25 shadow-lg scale-[1.02]' : 'opacity-100 hover:bg-white/15 hover:scale-[1.02]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services"
            className={`w-full text-center py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 text-white! ${
              isActive('/services') ? 'bg-white/25 shadow-lg scale-[1.02]' : 'opacity-100 hover:bg-white/15 hover:scale-[1.02]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/about"
            className={`w-full text-center py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 text-white! ${
              isActive('/about') ? 'bg-white/25 shadow-lg scale-[1.02]' : 'opacity-100 hover:bg-white/15 hover:scale-[1.02]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/blog"
            className={`w-full text-center py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 text-white! ${
              isActive('/blog') ? 'bg-white/25 shadow-lg scale-[1.02]' : 'opacity-100 hover:bg-white/15 hover:scale-[1.02]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Insights
          </Link>
          <Link 
            to="/contact"
            className={`w-full text-center py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 text-white! ${
              isActive('/contact') ? 'bg-white/25 shadow-lg scale-[1.02]' : 'opacity-100 hover:bg-white/15 hover:scale-[1.02]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;