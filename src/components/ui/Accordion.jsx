import React, { useState, useEffect, useCallback } from 'react';
import { accentColors } from '../../constants/colors';


// Color for all number circles
const circleColor = accentColors.active // Purple

// --- DATA (Using your existing structure for content) ---
const accordionItems = [
    {
        id: "1",
        label: "1",
        title: "MARKET RESEARCH & INTELLIGENCE",
        color: circleColor,
        content: [
            { type: "image", src: "/assets/images/market.png", alt: "Market Research" },
            { type: "text", text: "We provide in-depth market assessments that clarify opportunities, risks, and competitive dynamics." },
            { type: "text", text: "Our research answers critical questions about demand, pricing, and market gaps before major investments are made." },
            { type: "text", text: "Each study is tailored to your specific business or investment decisions." }
        ]
    },
    {
        id: "2",
        label: "2",
        title: "CUSTOMER & CONSUMER ANALYTICS",
        color: circleColor,
        content: [
            { type: "image", src: "/assets/images/strategy.png", alt: "Customer Analytics" },
            { type: "text", text: "We uncover what truly drives customer behavior, satisfaction, and loyalty." },
            { type: "text", text: "Our analytics go beyond surface metrics to identify experience breakdowns and improvement opportunities." },
            { type: "text", text: "The result is actionable insight that reduces churn and strengthens customer relationships." }
        ]
    },
    {
        id: "3",
        label: "3",
        title: "DATA ANALYTICS & VISUALIZATION",
        color: circleColor,
        content: [
            { type: "image", src: "/assets/images/3.png", alt: "Data Analytics" },
            { type: "text", text: "We transform complex datasets into clear insights and decision-ready dashboards." },
            { type: "text", text: "Our analyses reveal patterns, trends, and drivers that matter most to your organization." },
            { type: "text", text: "We focus on interpretation and action—not just statistics." }
        ]
    },
    {
        id: "4",
        label: "4",
        title: "MONITORING, EVALUATION & IMPACT ASSESSMENT",
        color: circleColor,
        content: [
            { type: "image", src: "/assets/images/4.png", alt: "Monitoring & Evaluation" },
            { type: "text", text: "We design M&E systems that measure what matters and support continuous learning." },
            { type: "text", text: "Our approach tracks results across inputs, outputs, outcomes, and long-term impact." },
            { type: "text", text: "The goal is improvement and accountability, not box-ticking compliance." }
        ]
    },
    {
        id: "5",
        label: "5",
        title: "POLICY RESEARCH & STRATEGIC ANALYSIS",
        color: circleColor,
        content: [
            { type: "image", src: "/assets/images/5.png", alt: "Policy Research" },
            { type: "text", text: "We evaluate policies to determine what works, what doesn't, and why." },
            { type: "text", text: "Our research combines data analysis with real-world implementation insights." },
            { type: "text", text: "Findings are translated into practical recommendations that inform better decisions and systemic change." }
        ]
    },
];

// --- MODERN ACCORDION COMPONENT ---
const Accordion = () => {
    const [openItemId, setOpenItemId] = useState(null);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check if the device is mobile on component mount and window resize
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Initial check
        checkIfMobile();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const handleItemHover = (id) => {
        if (isMobile) return; // Don't handle hover on mobile
        
        // Clear any existing timeouts to prevent premature closing
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
        // Add a small delay before opening to make it feel more deliberate
        const openTimeout = setTimeout(() => {
            setOpenItemId(id);
        }, 150);
        setHoverTimeout(openTimeout);
    };

    const handleItemLeave = () => {
        if (isMobile) return; // Don't handle hover on mobile
        
        // Clear any pending open timeouts
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
        
        // Add a delay before closing to allow for moving between items
        const closeTimeout = setTimeout(() => {
            setOpenItemId(null);
        }, 200);
        setHoverTimeout(closeTimeout);
    };
    
    const handleItemClick = (id) => {
        if (!isMobile) return; // Only handle clicks on mobile
        setOpenItemId(openItemId === id ? null : id);
    };

    return (
        <section className="w-full bg-[#f5f5f5] pt-8 pb-16">
            <div className="w-full px-4">
                <div className="w-full space-y-4">
                    {accordionItems.map((item) => {
                        const isExpanded = openItemId === item.id;
                        
                        return (
                            <div 
                                key={item.id}
                                className={`
                                    bg-gray-100 border-b border-gray-200 transition-all duration-300 ease-in-out w-full
                                    ${isExpanded ? 'border-[#f4eff4]' : ''}
                                `}
                            >
                                {/* ACCORDION BUTTON (HEADER) */}
                                <button
                                    className="w-full pl-2 pr-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-[#6b2a4c] flex items-center h-40 justify-between bg-[#f5f5f5] border-b border-gray-500 cursor-pointer md:px-8"
                                    onMouseEnter={() => handleItemHover(item.id)}
                                    onMouseLeave={handleItemLeave}
                                    onClick={() => handleItemClick(item.id)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            handleItemClick(item.id);
                                        }
                                    }}
                                    aria-expanded={isExpanded}
                                    aria-controls={`panel-${item.id}`}
                                    id={`button-${item.id}`}
                                    style={{ minHeight: '100px' }}
                                >
                                    <div className="flex items-center space-x-2 md:space-x-4 -ml-6 md:-ml-12">
                                        {/* IMPROVED LABEL STYLE */}
                                        <div className={`
                                            w-12 h-12 rounded-full shrink-0 flex items-center justify-center
                                            border-2 transition-all duration-500 ease-in-out
                                            border-white/50 text-white bg-[#6b2a4c]
                                        `}>
                                            <span className="text-2xl font-bold">
                                                {item.label}
                                            </span>
                                        </div>
                                        {/* IMPROVED TITLE STYLE */}
                                        <h3 className="text-lg xs:text-lg sm:text-2xl md:text-2xl lg:text-2xl font-semibold text-gray-800 pl-2 md:pl-0">
                                            {item.title}
                                        </h3>
                                    </div>
                                </button>
                                
                                {/* ACCORDION PANEL (CONTENT) */}
                                <div
                                    id={`panel-${item.id}`}
                                    className={`
                                        transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] overflow-hidden
                                        ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                                        hover:max-h-[500px] hover:opacity-100
                                    `}
                                    aria-labelledby={`button-${item.id}`}
                                >
                                    <div className="px-2 md:px-8 pt-4">
                                        <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
                                            {/* Image - Left Side */}
                                            <div className="md:w-1/2">
                                                {item.content
                                                    .filter(content => content.type === 'image')
                                                    .map((content, imgIndex) => (
                                                        <img 
                                                            key={`${item.id}-img-${imgIndex}`}
                                                            src={content.src} 
                                                            alt={content.alt} 
                                                            className="w-full h-auto object-cover"
                                                        />
                                                    ))}
                                            </div>
                                            
                                            {/* Text Content - Right Side */}
                                            <div className="md:w-1/2 space-y-4">
                                                {item.content
                                                    .filter(content => content.type === 'text')
                                                    .map((content, textIndex) => (
                                                        <p key={`${item.id}-text-${textIndex}`} className="text-gray-600 leading-relaxed text-md md:text-2xl font-medium tracking-wide">
                                                            {content.text}
                                                        </p>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Accordion;