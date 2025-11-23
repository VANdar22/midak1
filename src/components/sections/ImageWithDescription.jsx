import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ImageWithDescription = ({
  description = "We're here to help you make sense of complex questions, uncover insights, and develop strong research foundations for your academic or institutional needs. Initiate your consultation and move forward with confidence.",
  reverse = false
}) => {
  // Video configuration
  const videoSource = '/assets/images/Scene.mp4';
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-24 overflow-hidden" style={{
      clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
    }}>
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      {/* Decorative Circle - Smaller on mobile */}
      <div className="absolute -right-16 -bottom-16 w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-white/10 z-0"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[60vh]">
          <motion.div 
            className="w-full max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-full max-w-3xl space-y-6 sm:space-y-8 px-4 sm:px-6">
              <p 
                className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl lg:text-4xl leading-snug font-normal tracking-tight text-[#f4f4f4] mx-auto w-full" 
                style={{ 
                  fontFamily: 'League Spartan, sans-serif',
                  lineHeight: '1.3',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  maxWidth: '90%',
                  marginLeft: 'auto',
                  marginRight: 'auto'
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
