import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const footerData = {
  "logo": {
    "src": "/assets/images/logo.png",
    "position": "top-left"
  },
  "columns": [
    {
      "title": "",
      "links": [
        { "label": "About Us", "href": "/about" },
        { "label": "Services", "href": "/services" },
        { "label": "Our Approach", "href": "/approach" },
        { "label": "Contact Us", "href": "/contact" }
      ],
      "className": "hidden md:block md:col-start-1"
    },
    {
      "title": "Connect",
      "links": [
        { "label": "LinkedIn", "href": "https://linkedin.com/company/midak-research-consult" },
        { "label": "Instagram", "href": "https://instagram.com/midakresearch" },
        { "label": "Twitter", "href": "https://twitter.com/midakresearch" }
      ],
      "className": "md:col-start-2"
    },
    {
      "title": "Contact",
      "links": [
        { "label": "Accra, Ghana", "href": "#" },
        { "label": "info@midakresearch.com", "href": "mailto:info@midakresearch.com" },
        { "label": "+233 00 000 0000", "href": "tel:+233000000000" }
      ],
      "className": "md:col-start-3"
    }
  ],
  "bottomBar": {
    "left": `© ${new Date().getFullYear()} Midak Research Consult. All rights reserved.`,
    "center": "",
    "right": [
      { "label": "Privacy Policy", "href": "/privacy" },
      { "label": "Terms of Service", "href": "/terms" },
      { "label": "Cookie Policy", "href": "/cookies" }
    ]
  },
  "styles": {
    "fontFamily": "'Inter', 'Helvetica Neue', sans-serif",
    "spacing": {
      "columnGap": 60,
      "rowGap": 20,
      "sectionPadding": 60
    },
    "colors": {
      "text": "#FFFFFF",
      "background": "#800020",
      "hover": "#a6264a",
      "accent": "#F7FAFC"
    },
    "typography": {
      "titleSize": "1.25rem",
      "titleWeight": 600,
      "linkSize": "1.125rem",
      "linkWeight": 400,
      "lineHeight": 1.6
    }
  }
};

const NewFooter = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const numSquaresX = useRef(0);
  const numSquaresY = useRef(0);
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquareRef = useRef(null);
  const squareSize = 40;
  const speed = 0.5;
  const borderColor = 'rgba(255, 255, 255, 0.1)';
  const hoverFillColor = 'rgba(156, 163, 175, 0.5)';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize);
          const squareY = y - (gridOffset.current.y % squareSize);

          if (
            hoveredSquareRef.current &&
            Math.floor((x - startX) / squareSize) === hoveredSquareRef.current.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquareRef.current.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }
    };

    const updateAnimation = () => {
      gridOffset.current.x = (gridOffset.current.x - speed + squareSize) % squareSize;
      gridOffset.current.y = (gridOffset.current.y - speed + squareSize) % squareSize;
      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;
      
      const gridX = Math.floor((x + (gridOffset.current.x % squareSize)) / squareSize);
      const gridY = Math.floor((y + (gridOffset.current.y % squareSize)) / squareSize);
      
      hoveredSquareRef.current = { x: gridX, y: gridY };
    };

    requestRef.current = requestAnimationFrame(updateAnimation);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <footer
      style={{
        fontFamily: footerData.styles.fontFamily,
        color: footerData.styles.colors.text,
        backgroundColor: footerData.styles.colors.background,
        padding: '2.5rem 0 1.25rem 0',
        position: 'relative',
        marginTop: '0',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5,
          zIndex: 0
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, color: 'white' }}>
        <div className="w-full px-4 sm:px-6 text-white" style={{ maxWidth: '100%' }}>
          {/* Logo */}
          {footerData.logo && footerData.logo.position === 'top-left' && (
            <div className="mb-8 sm:mb-10 text-center sm:text-left">
              <img 
                src={footerData.logo.src} 
                alt="Logo" 
                className="h-16 w-auto sm:h-20"
              />
            </div>
          )}

        {/* Main Footer Content */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 md:gap-8 mb-8 sm:mb-12 w-full"
          style={{
            gap: '2rem',
            rowGap: '2rem',
            margin: '0',
            padding: '0 0.5rem',
            width: '100%',
            maxWidth: '100%'
          }}
        >
          {footerData.columns.map((column, index) => (
            <div 
              key={index} 
              className={`${column.className} flex flex-col px-4 sm:px-2`}
              style={{
                fontFamily: footerData.styles.fontFamily,
              }}
            >
              {column.title && (
                <h3 
                  className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 pb-2 relative
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-8 sm:after:w-10 after:h-0.5 after:bg-white after:opacity-30"
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  {column.title}
                </h3>
              )}
              <ul className="space-y-2.5 sm:space-y-3.5 flex-1">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center text-sm sm:text-base text-gray-100 hover:text-white transition-colors duration-200 py-1"
                      style={{
                        lineHeight: '1.5',
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-6 sm:pt-8 border-t border-gray-400/30 flex flex-col sm:flex-row justify-between items-center"
          style={{ paddingTop: '1.5rem' }}
        >
          <div className="w-full px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <div 
                className="text-xs sm:text-sm text-gray-200 text-center sm:text-left"
                style={{
                  opacity: 0.8
                }}
              >
                {footerData.bottomBar.left}
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2">
                {footerData.bottomBar.right.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href || '#'}
                    className="text-xs sm:text-sm text-gray-200 hover:text-white transition-colors duration-200 px-2 py-1"
                    style={{
                      opacity: 0.8,
                      position: 'relative',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.label || item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
      </div>
      </div>
      </div>
    </footer>
  );
};

export default NewFooter;
