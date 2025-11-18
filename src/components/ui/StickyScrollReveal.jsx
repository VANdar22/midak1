"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const StickyScrollReveal = ({
  content,
  contentClassName,
  className,
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className={cn("relative h-[300vh] py-20", className)}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative h-[500px]">
              {content.map((item, index) => {
                const y = useTransform(
                  scrollYProgress,
                  [index / content.length, (index + 1) / content.length],
                  [100, -100]
                );
                const opacity = useTransform(
                  scrollYProgress,
                  [
                    (index - 0.5) / content.length,
                    index / content.length,
                    (index + 0.5) / content.length,
                    (index + 1) / content.length
                  ],
                  [0, 1, 1, 0]
                );

                return (
                  <motion.div
                    key={index}
                    style={{
                      y,
                      opacity,
                      position: index === 0 ? 'relative' : 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                    }}
                    className="transition-all duration-500 ease-out"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h2>
                    <div className={cn("text-lg text-gray-600 leading-relaxed", contentClassName)}>
                      {item.description}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="h-[600px] w-full relative">
              {content.map((item, index) => {
                const scale = useTransform(
                  scrollYProgress,
                  [
                    (index - 0.5) / content.length,
                    index / content.length,
                    (index + 0.5) / content.length,
                    (index + 1) / content.length
                  ],
                  [0.8, 1, 1, 0.8]
                );
                const opacity = useTransform(
                  scrollYProgress,
                  [
                    (index - 0.5) / content.length,
                    index / content.length,
                    (index + 0.5) / content.length,
                    (index + 1) / content.length
                  ],
                  [0, 1, 1, 0]
                );

                return (
                  <motion.div
                    key={index}
                    style={{
                      scale,
                      opacity,
                      position: index === 0 ? 'relative' : 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 10 - index
                    }}
                    className="h-full w-full bg-cover bg-center"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScrollReveal;
