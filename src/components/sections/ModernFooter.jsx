import React, { useRef } from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ModernFooter = () => {
  const footerData = {
    title: "Data has the power to transform",
    links: [
      { label: "Home", url: "/" },
      { label: "About", url: "/about" },
      { label: "Services", url: "/services" },
      { label: "Approach", url: "/approach" },
      { label: "Blog", url: "/blog" },
      { label: "Contact", url: "/contact" },
    ],
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/company/midak-research-consult" },
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "email", url: "mailto:info@midakresearch.com" }
    ],
    contact: {
      address: "Accra, Ghana",
      email: "info@midakresearch.com",
      phone: "+233 000 000 000"
    }
  };

  const SocialLink = ({ platform, url }) => {
    const iconProps = { 
      className: "w-10 h-10 text-gray-700 hover:text-[#EA1821] transition-colors" 
    };
    
    const getIcon = () => {
      switch (platform.toLowerCase()) {
        case 'linkedin':
          return <FaLinkedin {...iconProps} />;
        case 'twitter':
          return <FaTwitter {...iconProps} />;
        case 'email':
          return <FaEnvelope {...iconProps} />;
        default:
          return platform;
      }
    };

    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 hover:bg-gray-100 rounded-full transition-colors font-['League Spartan', sans-serif]"
        aria-label={platform}
      >
        {getIcon()}
      </a>
    );
  };

  // Refs for the animated text
  const dataRef = useRef(null);
  const powerRef = useRef(null);
  const transformRef = useRef(null);
  const futureRef = useRef(null);
  const footerRef = useRef(null);
  const navLinkRefs = useRef([]);

  return (
    <footer 
      ref={footerRef} 
      className="w-full min-h-screen bg-gradient-to-b from-[#ea1821]/20 to-[#ea1821]/40 flex items-center justify-center py-8 sm:py-12 px-4 font-['League Spartan',sans-serif]"
    >
      
      <div className="w-full max-w-4xl mx-auto text-center px-4 sm:px-6" style={{ fontFamily: '"League Spartan", sans-serif' }}>
        <h2 className="font-bold text-[#1B1D1C] mb-6 sm:mb-8 uppercase" style={{
          letterSpacing: '0.02em',
          fontSize: 'clamp(1.5rem, 5vw, 3rem)',
          lineHeight: 1,
          textTransform: 'uppercase',
          fontWeight: 700
        }}>
          <div className="flex flex-col space-y-2 sm:space-y-4">
            <span className="block text-[#ea1821]">
              <span ref={dataRef} className="font-['League Spartan', sans-serif]">Data</span> has the <span ref={powerRef} className="cursor-target">power</span>
            </span>
            <span className="text-[#1B1D1C] block">to</span>
            <span className="block text-[#1B1D1C]">
              <span ref={transformRef} className="cursor-target">transform</span> your <span ref={futureRef} className="cursor-target">future</span>
            </span>
          </div>
        </h2>
        
        <nav className="mb-12">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
            {footerData.links.map((link, index) => (
              <li key={link.label}>
                <a 
                  ref={el => navLinkRefs.current[index] = el}
                  href={link.url} 
                  className="text-xl text-gray-700 hover:text-[#ea1821] transition-colors font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center space-x-4 mb-12">
          {footerData.socials.map((social, index) => (
            <SocialLink 
              key={index} 
              platform={social.platform} 
              url={social.url} 
            />
          ))}
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-3">
            <FaMapMarkerAlt className="text-[#ea1821]" />
            <span className="text-gray-700 font-medium">{footerData.contact.address}</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <FaEnvelope className="text-[#ea1821]" />
            <a href={`mailto:${footerData.contact.email}`} className="text-gray-700 hover:text-[#ea1821] transition-colors font-medium">
              {footerData.contact.email}
            </a>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <FaPhone className="text-[#ea1821]" />
            <a href={`tel:${footerData.contact.phone.replace(/\D/g, '')}`} className="text-gray-700 hover:text-[#ea1821] transition-colors font-medium">
              {footerData.contact.phone}
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-base text-[#1B1D1C] font-medium">
            © {new Date().getFullYear()} Midak Research Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;