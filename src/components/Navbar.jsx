import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { accentColors } from "../constants/colors";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  // Handle scroll to hide/show navbar with throttling
  useEffect(() => {
    let ticking = false;
    
    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      
      // Only update state if scroll position changed significantly
      if (Math.abs(currentScrollY - lastScrollY) < 5) {
        ticking = false;
        return;
      }

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && isVisible) {
          setIsVisible(false);
          setMobileOpen(false);
        } else if (currentScrollY < lastScrollY && !isVisible) {
          setIsVisible(true);
        }
      } else if (!isVisible) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    // Use passive scroll for better performance
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isVisible, lastScrollY]);

  // Floating hamburger menu variants
  const floatingButtonVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 20, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Navbar variants for smooth show/hide with spring physics
  const navVariants = {
    visible: { 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        mass: 0.6
      }
    },
    hidden: { 
      y: -100,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        mass: 0.6
      }
    },
  };

  return (
    <>
      {/* ================= FLOATING HAMBURGER BUTTON (Mobile) ================= */}
      <AnimatePresence>
        {!isVisible && (
          <motion.button
            initial="hidden"
            animate={!isVisible ? "visible" : "hidden"}
            exit="hidden"
            variants={floatingButtonVariants}
            onClick={() => {
              const isMobile = window.innerWidth < 768; // md breakpoint
              setIsVisible(true);
              setMobileOpen(isMobile);
            }}
            className="fixed top-4 right-4 z-50 p-3 rounded-full bg-[#800020] text-white shadow-lg"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ================= DESKTOP NAVBAR ================= */}
      <motion.nav 
        ref={navRef}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40
          hidden md:flex items-center
          bg-[#800020]/70 backdrop-blur-md
          border border-white/10 shadow-lg
          rounded-full px-6 py-3 w-[90%] max-w-6xl`}
        style={{ fontFamily: 'League_Spartan, sans-serif' }}
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        variants={navVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src="/assets/images/logo.png"
            alt="Midak Research"
            className="h-12   w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="flex-1 flex items-center text-semibold gap-2" style={{ fontFamily: 'League_Spartan, sans-serif'  }}>
          {/* Main Navigation Links */}
          <div className="flex-1 flex justify-center items-center gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/blog", label: "Insights" },
            ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-5 py-2 rounded-full text-white text-xl transition-all duration-200 font-medium
                ${
                  isActive(item.to)
                    ? "bg-white/15"
                    : "hover:bg-white/10"
                }`}
            >
              {item.label}
            </Link>
          ))}
          </div>
          
          {/* Contact with Button - Far Right */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className={`px-5 py-2 rounded-full text-white text-xl transition-all duration-200 font-medium
                ${isActive("/contact") ? "bg-white/15" : "hover:bg-white/10"} flex items-center`}
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="group relative bg-white w-12 h-12 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 opacity-100 shadow-md hover:shadow-lg"
              style={{ color: accentColors.main }}
              aria-label="Contact Us"
            >
             <span className="relative z-10">
                               <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="h-8 w-8 transition-all duration-300 transform group-hover:translate-x-1 group-hover:stroke-white"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 style={{ stroke: accentColors.main }}
                               >
                                 <path
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth={2.5}
                                   d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                   className="transition-colors duration-300 group-hover:stroke-white"
                                 />
                               </svg>
                             </span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100 origin-center" style={{ backgroundColor: accentColors.main }}></span>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE NAVBAR ================= */}
      <motion.div 
        className="md:hidden fixed top-0 left-0 w-full z-40"
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        variants={navVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-between items-center px-4 py-3 bg-[#800020] text-white">
          <Link to="/" className="text-xl font-bold">
            <img
              src="/assets/images/logo.png"
              alt="Midak Research"
              className="h-10 w-auto"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 w-full h-full bg-[#800020]/70
            transform transition-transform duration-300 ease-out
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ fontFamily: 'League_Spartan, sans-serif' }}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <img
              src="/assets/images/logo.png"
              alt="Midak Research"
              className="h-10"
            />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-7 h-7 text-white" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col px-8 py-12 gap-8">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/blog", label: "Insights" },
              { to: "/contact", label: "Contact" },
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              >
                <Link
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white text-4xl font-semibold border-b-2 border-white/20 py-5 hover:pl-6 transition-all duration-300"
                  style={{ fontFamily: 'League_Spartan, sans-serif' }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="absolute bottom-0 w-full p-6 text-center text-white/70 text-sm" style={{ fontFamily: 'League_Spartan, sans-serif' }}>
            © {new Date().getFullYear()} Midak Research & Analytics
          </div>
        </div>
      </div>
      </motion.div>
    </>
  );
};

export default Navbar;
