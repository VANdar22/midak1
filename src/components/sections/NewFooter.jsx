import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Squares from '../Squares';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const footerData = {
  layout: {
    maxWidth: 2000,
    horizontalMargin: 20,
    verticalMargin: 60,
    borderRadius: 36,
    padding: {
      top: 48,
      right: 48,
      bottom: 48,
      left: 48
    },
    alignment: 'left',
    stackSpacing: 32
  },
  theme: {
    containerBackground: '#800020',
    textColor: '#FFFFFF',
    mutedTextColor: '#C7D6CC',
    accentColor: '#800020' // Emerald-500 as accent color
  },
  cta: {
    title: 'Tell us about your project',
    description: 'Ready to start your research journey? Contact us to discover how Midak can support your project development and research needs',
    button: {
      label: 'Get Started With Us',
      link: '/contact',
      style: {
        padding: '14px 28px',
        borderRadius: 999
      }
    }
  },
  divider: {
    visible: true,
    opacity: 0.15,
    margin: 40
  },
  contact: {
    grid: {
      columns: 2,
      gap: 64
    },
    location: {
      label: 'Location',
      lines: [
        'Global',
        
      ]
    },
    email: {
      label: 'Email',
      value: 'info@midakresearch.com',
      link: 'mailto:info@midakresearch.com'
    },
    telephone: {
      label: 'Telephone',
      value: '+233 59 277 4934 ',
      link: 'tel:+233592774934'
    },
    whatsapp: {
      label: 'WhatsApp',
      value: '+233 20 199 2691 ',
      link: 'https://wa.me/233201992691'
    },
    social: [
      { 
        label: 'LinkedIn', 
        link: 'https://www.linkedin.com/company/midak-research-analytics/',
        icon: 'linkedin'
      },
      { 
        label: 'Instagram', 
        link: 'https://instagram.com/midakresearch',
        icon: 'instagram'
      },
      { 
        label: 'X (Twitter)', 
        link: 'https://twitter.com/midakresearch',
        icon: 'twitter'
      }
    ]
  },
  branding: {
    paddingTop: 48,
    companyName: 'Midak Research & Analytics',
    copyright: `© ${new Date().getFullYear()} Midak Research & Analytics. All rights reserved.`,
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' }
    ],
    style: {
      fontFamily: "'Montserrat', sans-serif"
    }
  }
};

const NewFooter = ({ hideFooter = false }) => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  if (hideFooter) return null;
  
  const { 
    layout, 
    theme, 
    cta, 
    divider, 
    contact, 
    branding 
  } = footerData;

  const renderSocialIcon = (icon) => {
    switch(icon) {
      case 'linkedin':
        return (
          <svg className="w-10 h-10 transition-transform duration-200 hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-10 h-10 transition-transform duration-200 hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-10 h-10 transition-transform duration-200 hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer 
      className="w-full py-12 md:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 text-white relative overflow-hidden"
      style={{
        color: theme.textColor,
        maxWidth: `${layout.maxWidth}px`,
        margin: '0 auto',
        position: 'relative',
        isolation: 'isolate',
        marginBottom: 0,
        paddingBottom: 0,
        backgroundColor: `#800020`,
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 -z-10">
        <Squares 
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='rgba(255, 255, 255, 0.15)'
          hoverFillColor='rgba(255, 255, 255, 0.25)'
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 100%)',
            mixBlendMode: 'multiply'
          }}
        />
      </div>
       

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 w-full max-w-7xl mx-auto">
          {/* Column 1: Navigation Links */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-white" style={{ fontFamily: "'League Spartan', sans-serif" }}>Navigation</h3>
            <nav className="space-y-2 text-xl">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About" },
                { to: "/blog", label: "Insights" },
                { to: "/contact", label: "Contact Us" }
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="block text-white hover:opacity-80 transition-opacity duration-200"
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          {/* Column 2: Social Media */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-white" style={{ fontFamily: "'League Spartan', sans-serif" }}>Follow Us</h3>
            <div className="flex space-x-4 -ml-6">
              {contact.social.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity duration-200 p-2"
                  aria-label={social.label}
                >
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-white" style={{ fontFamily: "'League Spartan', sans-serif" }}>Contact Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-white/80 mb-2" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                  {contact.email.label}
                </h4>
                <a 
                  href={contact.email.link}
                  className="text-white hover:opacity-80 text-xl transition-opacity duration-200"
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                >
                  {contact.email.value}
                </a>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white/80 mb-2" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                  {contact.telephone.label}
                </h4>
                <a 
                  href={contact.telephone.link}
                  className="text-white hover:opacity-80 text-xl transition-opacity duration-200"
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                >
                  {contact.telephone.value}
                </a>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white/80 mb-2" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                  {contact.whatsapp.label}
                </h4>
                <a 
                  href={contact.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 text-xl transition-opacity duration-200"
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                >
                  {contact.whatsapp.value}
                </a>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white/80 mb-2" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                  Location
                </h4>
                <p className="text-white text-xl" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                  {contact.location.lines[0]}
                </p>
              </div>
            </div>
          </div>

          
        </div>


      
      {/* Branding, Copyright and Policy Links */}
      <div className="w-full bg-[accentColors.main] py-6 mt-8">
        <div className="max-w-7xl mx-auto pl-2 pr-4">
          {/* Logo at the top left */}
          <div className="flex justify-start mb-8">
            <img 
              src="/assets/images/logo.png" 
              alt="Midak Research & Analytics Logo" 
              className="h-16 w-auto"
              style={{ display: 'block' }}
            />
          </div>
          
          {/* Bottom row with copyright and policy links */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-6 border-t border-white/10">
            {/* Copyright on the left */}
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-[#f5f5f5] opacity-90 leading-tight text-left" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                {branding.copyright}
              </p>
            </div>
            
            {/* Policy links on the right */}
            <div className="flex flex-wrap gap-4 justify-start md:justify-center">
              {branding.links.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-sm font-medium text-white hover:opacity-80 transition-opacity duration-200 whitespace-nowrap"
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
