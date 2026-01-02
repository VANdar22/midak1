import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="mt-32 bg-purple-900 text-white w-full">
      <div className="w-full border-t border-white/1">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand + Tagline */}
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-white/50 pb-8 md:pb-0 md:pr-8">
              <div className="bg-white rounded-full p-1.5 w-16 h-16 flex items-center justify-center mb-4">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Logo" 
                  className="w-4/5 h-4/5"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4">
                Midak Research Analytics
              </h3>
              <p className="text-lg leading-relaxed max-w-sm text-white/90">
                Aligning research, data, and clarity — helping organizations make confident, impact-driven decisions.
              </p>
            </div>

            {/* Navigation - Hidden on mobile */}
            <div className="hidden md:block md:col-span-2 border-b md:border-b-0 md:border-r border-white/50 h-full pb-8 md:pb-0 md:px-8">
              <h4 className="text-xl font-semibold mb-4 text-white/90">Navigation</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-lg transition duration-300 hover:text-gray-300">About Us</a></li>
                <li><a href="#services" className="text-lg transition duration-300 hover:text-gray-300">Services</a></li>
                <li><a href="#about" className="text-lg transition duration-300 hover:text-gray-300">Our Approach</a></li>
                <li><a href="#contact" className="text-lg transition duration-300 hover:text-gray-300">Contact</a></li>
              </ul>
            </div>

            {/* Connect - Always visible */}
            <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-white/50 pb-8 md:pb-0 md:px-8">
              <h4 className="text-xl font-semibold mb-4 text-white/90">Connect</h4>
              <div className="space-y-3">
                <a href="https://linkedin.com/company/midak-research-consult" target="_blank" rel="noopener noreferrer" className="block text-lg transition duration-300 hover:text-gray-300">
                  LinkedIn
                </a>
                <a href="#" className="block text-lg transition duration-300 hover:text-gray-300">
                  Instagram
                </a>
              </div>
            </div>

            {/* Contact (Right Column) */}
            <div className="space-y-10 text-lg md:col-span-4 pl-0 md:pl-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-white/90">Contact</h4>
                <address className="not-italic space-y-3">
                  <p className="leading-relaxed text-lg">
                    <span className="block">Accra, Ghana</span>
                    <a href="mailto:info@midakresearch.com" className="hover:text-gray-300 transition duration-300">info@midakresearch.com</a>
                  </p>
                  <p className="leading-relaxed">
                    <a href="tel:+233000000000" className="text-lg hover:text-gray-300 transition duration-300">+233 000 000 000</a>
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-purple-900 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <p> {new Date().getFullYear()} Midak Research Analytics. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
