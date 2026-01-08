"use client";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "motion/react";
import { accentColors } from "@/constants/colors";
import { cn } from "@/lib/utils";

const StickyScrollReveal = ({ content = [], contentClassName = "" }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [visibleCards, setVisibleCards] = React.useState(new Set([0]));
  const [isMobile, setIsMobile] = React.useState(false);
  const contentRef = useRef(null);

  // Check if mobile on mount and on resize
  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: isMobile ? undefined : ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  // Only enable scroll animation on non-mobile devices
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) {
      // For mobile, track which cards are in view
      const cardElements = document.querySelectorAll('[data-card-index]');
      cardElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setVisibleCards(prev => new Set([...prev, index]));
        }
      });
      return;
    }

    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
    setVisibleCards(prev => new Set([...prev, closestBreakpointIndex]));
  });

  const backgroundColors = [
    "#f4f4f4", // white
    "#f4f4f4", // white
    "#f4f4f4", // white
  ];

  return (
    <div className="w-full">
      {/* Main Content */}
      <div ref={contentRef} className="pt-8"></div>
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className={`relative flex flex-col lg:flex-row h-auto lg:h-160 w-full max-w-7xl mx-auto justify-center space-y-6 lg:space-y-0 lg:space-x-10 overflow-y-auto rounded-md p-4 sm:p-4 lg:p-6 bg-white`}
        ref={isMobile ? null : ref}
        role="region"
        aria-live="polite"
        aria-label="Content carousel"
      >
        <div className={cn("relative w-full lg:w-auto flex-1", contentClassName)}>
          <div className="w-full max-w-3xl mx-auto -pl-10">
            <AnimatePresence>
              {content.map((item, index) => (
                <motion.div
                  key={item.title + index}
                  data-card-index={index}
                  className="py-5 sm:py-6 lg:py-8 border-b border-gray-100 last:border-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isMobile 
                      ? visibleCards.has(index) ? 1 : 0.3 
                      : activeCard === index ? 1 : 0.3,
                    y: isMobile && visibleCards.has(index) ? 0 : 20
                  }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: isMobile ? index * 0.1 : 0
                  }}
                >
                  <motion.div
                    className="space-y-4"
                  >
                    <motion.h2 
                      className="text-3xl! md:text-3xl font-bold text-gray-800 leading-tight mb-3"
                      whileInView={{ 
                        y: 0, 
                        opacity: 1,
                        transition: { 
                          delay: isMobile ? 0.1 : 0.2,
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1]
                        } 
                      }}
                      initial={{ y: -40, opacity: 0 }}
                    >
                      {item.title}
                    </motion.h2>
                    {typeof item.description === 'string' ? (
                      <motion.p 
                        className="text-xl! md:text-lg text-gray-800 leading-relaxed opacity-90"
                        whileInView={{ 
                          y: 0, 
                          opacity: 1,
                          transition: { 
                            delay: isMobile ? 0.2 : 0.3,
                            duration: 0.6 
                          } 
                        }}
                        initial={{ y: 20, opacity: 0 }}
                      >
                        {item.description}
                      </motion.p>
                    ) : (
                      <motion.div 
                        className="text-xl! md:text-2xl text-gray-800 leading-relaxed opacity-90 space-y-4"
                        whileInView={{ 
                          y: 0, 
                          opacity: 1,
                          transition: { 
                            delay: isMobile ? 0.2 : 0.3,
                            duration: 0.6 
                          } 
                        }}
                        initial={{ y: 20, opacity: 0 }}
                      >
                        {item.description}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
            {!isMobile && <div className="h-40" />}
          </div>
        </div>
        <div
          className={cn(
            "w-full lg:w-1/2 h-auto lg:h-96 overflow-hidden rounded-xl bg-white shadow-lg lg:sticky lg:top-10 transition-all duration-300",
            isMobile ? "mb-5" : "group",
            contentClassName
          )}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            ...(isMobile
              ? {}
              : {
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                }),
          }}
          onMouseMove={
            !isMobile
              ? (e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateY = (x - centerX) / 25;
                  const rotateX = (centerY - y) / 25;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                }
              : undefined
          }
          onMouseLeave={
            !isMobile
              ? (e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
                }
              : undefined
          }
          onClick={
            isMobile
              ? () => {
                  // On mobile, clicking cycles through the content
                  setActiveCard((prev) => (prev + 1) % content.length);
                }
              : undefined
          }
          role="img"
          aria-label={
            isMobile
              ? "Tap to view next content"
              : `Content for ${content[activeCard]?.title || "selected item"}`
          }
          tabIndex={0}
          onKeyDown={(e) => {
            if (
              e.key === "ArrowRight" ||
              (isMobile && (e.key === "Enter" || e.key === " "))
            ) {
              e.preventDefault();
              setActiveCard((prev) => (prev + 1) % content.length);
            } else if (e.key === "ArrowLeft") {
              e.preventDefault();
              setActiveCard(
                (prev) => (prev - 1 + content.length) % content.length
              );
            }
          }}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </div>
  );
};

StickyScrollReveal.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content: PropTypes.node,
    })
  ).isRequired,
  contentClassName: PropTypes.string,
};

export { StickyScrollReveal };
export default StickyScrollReveal;
