"use client";;
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0,
  autoplay = true,
  autoplayDelay = 3000
}) => {
  const carouselRef = React.useRef(null);
  const autoplayRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (!carouselRef.current) return;
    
    const { scrollLeft } = carouselRef.current;
    const cardWidth = 320; // Width of card + gap
    
    if (scrollLeft <= 10) {
      // If at the start, jump to near the end (but not exactly the end to allow smooth scroll)
      carouselRef.current.scrollLeft = (items.length - 1) * cardWidth - 100;
      // Then scroll left to the last card
      requestAnimationFrame(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollTo({
            left: (items.length - 2) * cardWidth,
            behavior: 'smooth'
          });
        }
      });
    } else {
      // Normal scroll left
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (!carouselRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const cardWidth = 320; // Width of card + gap
    const maxScroll = scrollWidth - clientWidth;
    
    if (scrollLeft >= maxScroll - 10) {
      // If at the end, jump to near the start (but not exactly the start to allow smooth scroll)
      carouselRef.current.scrollLeft = cardWidth;
      // Then scroll right to the second card
      requestAnimationFrame(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollTo({
            left: cardWidth * 2,
            behavior: 'smooth'
          });
        }
      });
    } else {
      // Normal scroll right
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return typeof window !== 'undefined' && window.innerWidth < 768;
  };

  // Start autoplay with smooth infinite loop
  useEffect(() => {
    if (!autoplay || isPaused) return;

    autoplayRef.current = setInterval(() => {
      if (!carouselRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const cardWidth = 320; // Width of card + gap
      const maxScroll = scrollWidth - clientWidth;
      
      // If we're near the end, start from the beginning
      if (scrollLeft >= maxScroll - cardWidth) {
        carouselRef.current.scrollTo({
          left: 0,
          behavior: 'instant'
        });
        
        // Small delay to ensure the scroll reset is processed
        requestAnimationFrame(() => {
          if (carouselRef.current) {
            carouselRef.current.scrollTo({
              left: cardWidth,
              behavior: 'smooth'
            });
          }
        });
      } else {
        // Normal scroll right
        carouselRef.current.scrollBy({
          left: cardWidth,
          behavior: 'smooth'
        });
      }
    }, autoplayDelay);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, isPaused, autoplayDelay]);
  
  // Update current index based on scroll position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateIndex = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      const cardWidth = 320; // Width of card + gap
      const maxScroll = scrollWidth - clientWidth;
      
      // Handle seamless looping
      if (scrollLeft <= 10) {
        // If near the start, jump to near the end
        carousel.scrollLeft = (items.length - 1) * cardWidth - 10;
      } else if (scrollLeft >= maxScroll - 10) {
        // If near the end, jump to near the start
        carousel.scrollLeft = cardWidth + 10;
      }
      
      // Calculate current index based on scroll position
      let index = Math.round(carousel.scrollLeft / cardWidth) % items.length;
      setCurrentIndex(index);
    };

    carousel.addEventListener('scroll', updateIndex, { passive: true });
    return () => carousel.removeEventListener('scroll', updateIndex);
  }, [items.length]);

  // Pause autoplay on interaction
  const handleInteraction = () => {
    if (!autoplay) return;
    setIsPaused(true);
    
    // Resume after delay
    setTimeout(() => {
      setIsPaused(false);
    }, autoplayDelay * 2);
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20 h-auto min-h-[40rem]"
          ref={carouselRef}
          onScroll={checkScrollability}
          onMouseEnter={() => autoplay && setIsPaused(true)}
          onMouseLeave={() => autoplay && !isPaused && setIsPaused(false)}
          onTouchStart={() => autoplay && setIsPaused(true)}
          onTouchEnd={() => autoplay && !isPaused && setIsPaused(false)}
          style={{ minHeight: '40rem' }}>
          <div
            className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-6 pl-4",
              // remove max-w-4xl if you want the carousel to span the full width of its container
              "mx-auto w-full max-w-[90rem] px-8"
            )}>
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]">
                <div onClick={handleInteraction}>
                  <Card card={item} index={index} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute right-6 bottom-6 z-40 flex gap-3">
          <button
            className="!rounded-full !h-12 !w-12 !p-0 !m-0 flex items-center justify-center bg-white/90 shadow-lg hover:bg-white transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none"
            style={{
              borderRadius: '9999px !important',
              width: '48px !important',
              height: '48px !important',
              minWidth: '48px !important',
              minHeight: '48px !important',
              padding: '0 !important',
              margin: '0 !important',
              border: 'none !important',
              cursor: 'pointer',
              outline: 'none',
              appearance: 'none',
            }}
            onClick={scrollLeft}
            disabled={!canScrollLeft}>
            <IconArrowNarrowLeft className="!h-6 !w-6 text-gray-800 !m-0 !p-0" />
          </button>
          <button
            className="!rounded-full !h-12 !w-12 !p-0 !m-0 flex items-center justify-center bg-white/90 shadow-lg hover:bg-white transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none"
            style={{
              borderRadius: '9999px !important',
              width: '48px !important',
              height: '48px !important',
              minWidth: '48px !important',
              minHeight: '48px !important',
              padding: '0 !important',
              margin: '0 !important',
              border: 'none !important',
              cursor: 'pointer',
              outline: 'none',
              appearance: 'none',
            }}
            onClick={scrollRight}
            disabled={!canScrollRight}>
            <IconArrowNarrowRight className="!h-6 !w-6 text-gray-800 !m-0 !p-0" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              className="relative z-[60] mx-auto my-10 h-fit max-w-2xl rounded-3xl bg-white p-8 font-sans dark:bg-neutral-900"
            >
              <button
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black"
                onClick={handleClose}
              >
                <IconX className="h-5 w-5" />
              </button>
              <div className="pt-10">
                <div className="flex items-center mb-6">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="h-16 w-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {card.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{card.role}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
                  "{card.content}"
                </p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${i < (card.rating || 5) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div
        onClick={handleOpen}
        className="relative z-10 flex flex-col h-[32rem] w-[20rem] rounded-3xl !bg-[#f4eff4] dark:!bg-neutral-800 shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0"
      >
        {/* Image Section - Fixed Height */}
        <div className="h-48 w-full overflow-hidden flex-shrink-0">
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Content Section - Fixed Height with Scroll */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Testimonial Text */}
          <div className="p-6 flex-1 overflow-y-auto">
            <div className="relative min-h-[120px]">
              <svg
                className="absolute -top-2 -left-2 h-8 w-8 text-gray-200 dark:text-gray-700 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.224 6.624 8.224 3.36 0 5.856-2.624 5.856-5.856 0-3.232-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.224 6.624 8.224 3.264 0 5.856-2.624 5.856-5.856 0-3.264-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-700 dark:text-gray-200 text-base italic pl-6 line-clamp-5">
                {card.content}
              </p>
            </div>
          </div>
          
          {/* Person Info - Fixed at Bottom */}
          <div className="p-6 pt-0 mt-auto border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center">
              <img
                src={card.image}
                alt={card.name}
                className="h-12 w-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md flex-shrink-0"
              />
              <div className="ml-4 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight truncate">
                  {card.name}
                </h3>
                <p className="text-sm text-[#6f35c8] dark:text-purple-400 font-medium truncate">{card.role}</p>
                {card.rating && (
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm font-medium mr-2">{card.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < card.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">({card.rating} rating)</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  fill = false,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  const imgProps = {
    className: cn(
      "transition duration-300",
      isLoading ? "blur-sm" : "blur-0",
      fill ? "absolute inset-0 w-full h-full object-cover" : "",
      className
    ),
    onLoad: () => setLoading(false),
    src: src,
    loading: "lazy",
    decoding: "async",
    alt: alt || "Background of a beautiful view",
    ...(fill ? {} : { width, height })
  };

  return <img {...imgProps} {...rest} />;
};
