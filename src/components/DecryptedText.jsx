import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function DecryptedText({
  text,
  speed = 120,
  maxIterations = 15,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', // This prop is kept for backward compatibility
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  ...props
}) {
  const [displayText, setDisplayText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [revealedWords, setRevealedWords] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  
  // Use symbols for the animation effect
  const symbols = '!@#$%^&*()_+{}|:<>?[]\;\',./`~';

  useEffect(() => {
    // Split text into words (preserving spaces)
    const words = text.split(/(\s+)/);
    
    // Clear any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    if (!isHovering) {
      // Reset state when not hovering
      setDisplayText('');
      setRevealedWords(0);
      return;
    }

    let currentWordIndex = 0;
    let frameCount = 0;
    let lastUpdate = 0;
    const frameDuration = 1000 / 30; // 30fps
    
    const animate = (timestamp) => {
      if (!lastUpdate) lastUpdate = timestamp;
      const deltaTime = timestamp - lastUpdate;
      
      if (deltaTime > frameDuration) {
        frameCount++;
        lastUpdate = timestamp - (deltaTime % frameDuration);
        
        // Update the display with scrambled text
        const newText = words.map((word, index) => {
          if (index < currentWordIndex) {
            return word; // Already revealed words stay as they are
          } else if (index === currentWordIndex && frameCount % 3 === 0) {
            // For the current word being revealed, show random symbols
            return word.split('').map(() => 
              symbols[Math.floor(Math.random() * symbols.length)]
            ).join('');
          } else if (index > currentWordIndex) {
            // For words not yet being revealed, show spaces
            return ' '.repeat(word.length);
          }
          return word;
        }).join('');
        
        setDisplayText(newText);
        
        // Every few frames, move to the next word
        if (frameCount % 5 === 0 && currentWordIndex < words.length) {
          currentWordIndex++;
          setRevealedWords(currentWordIndex);
        }
      }
      
      // Continue the animation if there are more words to reveal
      if (currentWordIndex < words.length) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // When all words are revealed, ensure we show the final text
        setDisplayText(text);
      }
    };
    
    // Start the animation
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, text, symbols]);

  useEffect(() => {
    if (animateOn !== 'view' && animateOn !== 'both') return;

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [animateOn, hasAnimated]);

  const hoverProps =
    animateOn === 'hover' || animateOn === 'both'
      ? {
          onMouseEnter: () => {
            setIsHovering(true);
          },
          onMouseLeave: () => {
            setIsHovering(false);
          }
        }
      : {};

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block ${parentClassName}`}
      {...hoverProps}
      {...props}>
      <span className="sr-only">{text}</span>
      <span 
        aria-hidden="true" 
        className={`whitespace-pre-wrap ${className}`}
        style={{
          display: 'inline-block',
          minHeight: '1.2em',
          minWidth: '100%',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
        }}
      >
        {displayText || '\u00A0'}
      </span>
    </motion.span>
  );
}
