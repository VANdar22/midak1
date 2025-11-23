import React from "react";
import ShinyText from "../ShinyText";
import DecryptedText from "../DecryptedText";
import { accentColors } from "../../constants/colors";

const Quote = ({
  text = "Transforming data into meaningful insights that drive informed decisions, sustainable development, and business growth across Africa and beyond.",
  author = "Tristan Handy",
  role = "Founder & CEO of dbt Labs",
  linkedinUrl = "https://www.linkedin.com/in/tristanhandy/",
}) => {
  return (
    <section className="relative w-full bg-[#f5f5f5] py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-start gap-6 md:gap-12">
        <div className="flex-1 px-4 md:pl-20 relative max-w-3xl mx-auto">
          {/* Classic Quote Mark */}
          <div className="absolute left-0 top-0 -mt-8 -ml-2">
            <svg 
              className="w-20 h-20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: `${accentColors.main}99` }}
            >
              <path d="M16.5 17h-3.5l-1.5-4.5V7h6.5v5.5h-3L16.5 17zm-7 0H6l-1.5-4.5V7h6.5v5.5H8L9.5 17z" />
            </svg>
          </div>

          {/* Gold Accent Bar with Shine */}
          <div className="absolute -left-2 md:left-10 top-0 bottom-0 w-1 overflow-hidden rounded-full">
            <div 
              className="h-full w-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600"
              style={{
                animation: 'shimmer 6s linear infinite',
                backgroundSize: '100% 200%',
              }}
            />
          </div>

          <blockquote className="m-0 relative z-10">
            {/* Small Header */}
            <ShinyText 
              text="EXPERT INSIGHT" 
              speed={3}
              className="text-lg font-semibold tracking-widest uppercase text-gray-800 px-3 py-1 rounded-md"
            />

            {/* Quote Text */}
            <div className="relative">
              <div className="w-full mt-8 md:mt-12">
                <div className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 leading-snug mb-6">
                  <DecryptedText
                    text={text}
                    speed={20}
                    maxIterations={10}
                    animateOn="view"
                    className="inline text-current"
                    parentClassName="inline-block w-full"
                    revealDirection="start"
                    characters="*#%"
                  />
                </div>
              </div>
              <div className="absolute right-0 bottom-0 -mb-8 -mr-2">
                <svg 
                  className="w-20 h-20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: `${accentColors.main}99` }}
                >
                  <path d="M7.5 17h3.5l1.5-4.5V7H6v5.5h3L7.5 17zm7 0h3.5l1.5-4.5V7h-6.5v5.5h3L14.5 17z" />
                </svg>
              </div>
            </div>

            {/* Divider Line - Hidden on mobile */}
            <div className="relative my-4 h-px overflow-hidden hidden md:block">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
                style={{
                  width: '100%',
                  height: '100%',
                  animation: 'shimmer 4s linear infinite',
                  backgroundSize: '200% 100%',
                }}
              />
            </div>

            {/* Attribution Box */}
            <figcaption className="flex items-center justify-start gap-4">
              <div>
                <p className="text-lg font-semibold text-gray-900">{author}</p>
                {role && (
                  <ShinyText 
                    text={role}
                    speed={4}
                    className="text-sm font-medium"
                  />
                )}
              </div>
            </figcaption>
          </blockquote>
        </div>

        {/* Quote Image */}
        <div className="hidden -mt-16 md:block flex-1">
          <img
            src="/assets/images/Quote.png"
            alt="Quote illustration"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Quote;
