import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const VideoContainer = styled(motion.div)`
  position: relative;
  width: 70%;
  max-width: 500px;
  height: 350px;
  z-index: 1;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 60px 120px -20px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transform: 
    perspective(1500px) 
    rotateY(-15deg) 
    rotateX(5deg) 
    translateY(50px)
    translateZ(50px);
  transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: transform, box-shadow;
  background: linear-gradient(145deg, #000000, #1a1a1a);
  padding: 0;
  backface-visibility: hidden;
  box-sizing: border-box;
  opacity: 1 !important;
  border: 1px solid rgba(255, 255, 255, 0.05);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 45%;
    display: block;
    opacity: 1 !important;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    filter: none;
    transform-origin: center center;
    background-color: #000;
  }

  &:hover {
    transform: 
      perspective(1500px) 
      rotateY(-18deg) 
      rotateX(7deg) 
      translateY(45px)
      translateZ(60px);
    box-shadow: 
      0 80px 150px -30px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.15);

    video {
      transform: scale(1.02);
      filter: brightness(1.1);
    }
  }

  @media (max-width: 1024px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 400px;
    height: 250px;
    transform: 
      perspective(1000px) 
      rotateY(-10deg) 
      rotateX(2deg) 
      translateY(30px)
      translateZ(30px);
    
    &:hover {
      transform: 
        perspective(1000px) 
        rotateY(-12deg) 
        rotateX(3deg) 
        translateY(25px)
        translateZ(40px);
    }
  }
`;

const ImageWithDescription = ({
  description = "We're here to help you make sense of complex questions, uncover insights, and develop strong research foundations for your academic or institutional needs. Initiate your consultation and move forward with confidence.",
  reverse = false
}) => {
  // Video configuration
  const videoSource = '/assets/images/Scene.mp4';
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#6f35c8]/80 overflow-hidden" style={{
      clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
    }}>
      {/* Decorative Circle */}
      <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-white/10 -z-0"></div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          {/* Single Image */}
          <motion.div 
            className={`${reverse ? 'lg:w-6/12' : 'lg:w-7/12'} w-full mt-0 lg:-mt-24`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="px-4 sm:px-0">
              <VideoContainer
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={videoSource} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </VideoContainer>
            </div>
          </motion.div>
          {/* Content - Full width on mobile, 1/2 width on large screens */}
          <motion.div 
            className={`w-full ${reverse ? 'lg:w-6/12' : 'lg:w-5/12'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative h-full flex items-center">
              {/* Vertical line - visible on all screens */}
              <div className={`absolute ${reverse ? 'lg:-right-12' : 'lg:-left-12'} top-0 bottom-0 w-0.5 bg-white/30 rounded-full hidden lg:block`}></div>
              
              <div className="relative pl-6 lg:pl-0 lg:-ml-8">
                {/* Mobile vertical line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/50 rounded-full lg:hidden"></div>
                
                <div className="space-y-6 max-w-2xl w-full">
                  <p className="text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight text-[#f4f4f4] whitespace-normal" style={{ fontFamily: 'Changa One, cursive', minWidth: 'min(100%, 32rem)' }}>
                    {description}
                  </p>
                  <div className="relative w-full mt-24">
                    <div className="absolute right-0 bottom-0 group cursor-pointer flex flex-col items-end mt-32">
                      <div className="relative w-12 h-32">
                        <svg 
                          className="absolute right-0 h-full text-white/70 group-hover:text-white transition-colors" 
                          viewBox="0 0 80 80" 
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            fill="none" 
                            d="M40,10 L40,60"
                            className="transition-all duration-300"
                          />
                          <path 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            fill="none" 
                            d="M40,60 L30,50"
                            className="transition-all duration-300"
                          />
                          <path 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            fill="none" 
                            d="M40,60 L50,50"
                            className="transition-all duration-300"
                          />
                          <animate 
                            attributeName="opacity" 
                            values="0;1;0" 
                            dur="2s" 
                            repeatCount="indefinite"
                            begin="0.5s"
                          />
                        </svg>
                        <div className="absolute left-1/2 top-0 w-0.5 h-0 bg-white/50 group-hover:bg-white transition-all duration-500 group-hover:h-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithDescription;
