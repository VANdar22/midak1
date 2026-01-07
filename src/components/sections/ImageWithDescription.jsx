import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ImageWithDescription = ({
  description = "We're here to help you make sense of complex questions, uncover insights, and develop strong research foundations for your academic or institutional needs. Initiate your consultation and move forward with confidence.",
  reverse = false
}) => {
  // Video configuration
  const videoSource = '/assets/images/videoi.mp4';
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-24 overflow-hidden" style={{
      clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
    }}>
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="relative w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full min-h-[100vh] object-cover"
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gray-900/70"></div>
          <div className="absolute inset-0 border-4 border-white/20 rounded-lg m-4 pointer-events-none"></div>
        </div>
      </div>
      
      {/* Decorative Circle - Smaller on mobile */}
      {/* Decorative Elements */}
      <div className="absolute -right-12 -bottom-12 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-white/10 z-0"></div>
      <div className="absolute -left-8 -top-8 w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-white/5 z-0"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] py-12 sm:py-16">
          <motion.div 
            className="w-full max-w-5xl mx-auto px-4 sm:px-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-full max-w-4xl mx-auto lg:ml-auto lg:mr-0 lg:pr-12">
              <p 
                className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-normal text-[#f4f4f4] leading-tight md:leading-normal text-left"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.5px',
                  lineHeight: '1.4'
                }}
              >
                {description}
              </p>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

ImageWithDescription.propTypes = {
  description: PropTypes.string,
  reverse: PropTypes.bool
};

ImageWithDescription.defaultProps = {
  description: "We're here to help you make sense of complex questions, uncover insights, and develop strong research foundations for your academic or institutional needs. Initiate your consultation and move forward with confidence.",
  reverse: false
};

export default ImageWithDescription;