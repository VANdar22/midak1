import React, { useState, useEffect } from 'react';


// Color for all number circles
const circleColor = 'bg-[#6f35c8]'; // Purple

// --- DATA (Using your existing structure for content) ---
const accordionItems = [
    {
        id: "1",
        label: "1",
        title: "Energy Monitoring",
        color: circleColor,
        content: [
            { type: "image", src: "https://placehold.co/600x400/4F46E5/FFFFFF?text=Energy+Monitoring", alt: "Energy Monitoring System" },
            { type: "text", text: "Comprehensive energy monitoring solutions provide real-time insights into your building's energy consumption patterns." },
            { type: "text", text: "Our advanced analytics help identify inefficiencies and opportunities for significant cost savings and sustainability improvements." }
        ]
    },
    {
        id: "2",
        label: "2",
        title: "Heat recovery",
        color: circleColor,
        content: [
            { type: "image", src: "https://placehold.co/600x400/10B981/FFFFFF?text=Heat+Recovery", alt: "Heat Recovery System" },
            { type: "text", text: "Heat recovery systems capture waste heat from various processes and redistribute it as an additional energy source." },
            { type: "text", text: "This can be used for space heating, water heating, or other industrial processes, significantly improving energy efficiency." }
        ]
    },
    {
        id: "3",
        label: "3",
        title: "Automation & Control",
        color: circleColor,
        content: [
            { type: "image", src: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Automation+Control", alt: "Automation & Control System" },
            { type: "text", text: "Advanced automation and control systems optimize building performance and energy usage." },
            { type: "text", text: "Smart controls can adjust lighting, heating, and cooling based on occupancy and environmental conditions." }
        ]
    },
    {
        id: "4",
        label: "4",
        title: "Zone and demand control",
        color: circleColor,
        content: [
            { type: "image", src: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=Zone+Control", alt: "Zone Control System" },
            { type: "text", text: "In many buildings all rooms receive the same amount of heating, cooling, and ventilation regardless of their specific needs." },
            { type: "text", text: "Zone control systems allow for independent temperature and airflow control in different areas, reducing energy waste and improving comfort." }
        ]
    }
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
        <section className="w-full bg-[#f4eff4] pt-8 pb-16">
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
                                <div
                                    className="w-full pl-2 pr-8 py-6 text-left focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent flex items-center h-40 justify-between bg-[#f4eff4] border-b border-gray-500 cursor-pointer md:px-8"
                                    onMouseEnter={() => handleItemHover(item.id)}
                                    onMouseLeave={handleItemLeave}
                                    onClick={() => handleItemClick(item.id)}
                                    aria-expanded={isExpanded}
                                    aria-controls={`panel-${item.id}`}
                                    style={{ minHeight: '100px' }}
                                >
                                    <div className="flex items-center space-x-2 md:space-x-8">
                                        {/* IMPROVED LABEL STYLE */}
                                        <div className={`
                                            w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center
                                            border-2 transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
                                            border-white/50 bg-[#6f35c8] text-white
                                            hover:scale-105 transform transition-all duration-300
                                        `}>
                                            <span className="text-2xl font-bold">
                                                {item.label}
                                            </span>
                                        </div>
                                        {/* IMPROVED TITLE STYLE */}
                                        <h3 className="text-xl font-semibold text-gray-800 pl-2 md:pl-0">
                                            {item.title}
                                        </h3>
                                    </div>

                                </div>
                                
                                {/* ACCORDION PANEL (CONTENT) */}
                                <div
                                    id={`panel-${item.id}`}
                                    className={`
                                        transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] overflow-hidden
                                        ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                                        hover:max-h-[500px] hover:opacity-100
                                    `}
                                    role="region"
                                    aria-labelledby={`button-${item.id}`}
                                >
                                    <div className="px-2 md:px-8 pt-4">
                                        <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
                                            {/* Image - Left Side */}
                                            <div className="md:w-1/2">
                                                {item.content
                                                    .filter(content => content.type === 'image')
                                                    .map((content, index) => (
                                                        <img 
                                                            key={index}
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
                                                    .map((content, index) => (
                                                        <p key={index} className="text-gray-600 leading-relaxed text-md md:text-2xl font-medium tracking-wide">
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