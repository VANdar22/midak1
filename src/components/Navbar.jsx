import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40
        hidden md:flex items-center
        bg-[#800020]/60 backdrop-blur-md
        border border-white/10 shadow-lg
        rounded-full px-6 py-3 w-[90%] max-w-6xl"
        style={{ fontFamily: 'Montserrat, sans-serif' }}>

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src="/assets/images/logo.png"
            alt="Midak Research"
            className="h-12  w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="flex-1 flex justify-center items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "About" },
            { to: "/blog", label: "Insights" },
            { to: "/contact", label: "Contact" },
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
      </nav>

      {/* ================= MOBILE MENU BUTTON ================= */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 right-4 z-50
          w-12 h-12 rounded-full bg-white shadow-lg
          flex items-center justify-center"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 text-[#800020]" />
      </button>

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
          className={`absolute top-0 right-0 w-full h-full bg-[#800020]/75
            transform transition-transform duration-300 ease-out
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
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
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="absolute bottom-0 w-full p-6 text-center text-white/70 text-sm" style={{ fontFamily: 'Montserrat-al, sans-serif' }}>
            © {new Date().getFullYear()} Midak Research & Analytics
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
