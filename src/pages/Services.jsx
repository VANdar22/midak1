import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Puzzle, Workflow, UsersRound, ShieldCheck, Handshake, Target } from 'lucide-react';
import styled from '@emotion/styled';
import { accentColors } from '../constants/colors';
import PageTransition from '../components/PageTransition';

const ServiceButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${accentColors.main};
  text-decoration: none;
  font-weight: 500;
  margin-top: 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${accentColors.dark};
    transform: translateX(4px);
    
    svg {
      transform: translateX(4px);
    }
  }
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.2s ease;
    width: 1rem;
    height: 1rem;
  }
`;

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      opacity: { duration: 0.9 },
      y: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      },
      scale: { 
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const letterAnimation = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95,
    filter: 'blur(4px)'
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0)',
    transition: {
      delay: i * 0.015, // Faster letter-by-letter for description
      duration: 0.8,   // Shorter duration for description
      ease: [0.16, 1, 0.3, 1],
      opacity: { duration: 1 },
      y: { duration: 1 },
      scale: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] },
      filter: { duration: 0.8 }
    }
  })
};

/**
 * AnimatedText Component
 * @param {React.ReactNode} children - The text content to animate
 * @param {number} [delay=0] - Delay before animation starts in seconds
 * @param {boolean} [split=false] - Whether to split text into words for individual animation
 * @param {string} [className=''] - Additional CSS classes
 */
const AnimatedText = ({ 
  children, 
  delay = 0, 
  split = false, 
  className = '' 
}) => {
  if (split && typeof children === 'string') {
    // Split into words and preserve spaces
    const words = children.split(/(\s+)/u);
    return (
      <span className={`inline-block ${className}`}>
        {words.map((word, wordIndex) => {
          const wordKey = `word-${word.trim() || 'space'}-${wordIndex}`;
          if (word.trim() === '') {
            return <span key={wordKey}>&nbsp;</span>;
          }
          return (
            <motion.span
              key={wordKey}
              className="inline-block mr-1.5 last:mr-0"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ 
                delay: delay + (wordIndex * 0.04),
                ...fadeInUp.visible.transition
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </span>
    );
  }

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ 
        delay,
        ...fadeInUp.visible.transition
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const capabilities = [
  {
    id: 'market-research-intelligence',
    label: 'Market Research & Intelligence',
    title: 'How we discover',
    body: 'We provide in-depth market assessments that clarify opportunities, risks, and competitive dynamics. Our research answers critical questions about demand, pricing, and market gaps before major investments are made.',
    image: '/assets/images/market.png',
    bullets: [
      'Market opportunity and competitive analysis',
      'Demand assessment and pricing studies',
      'Sector and industry research',
    ],
    cta: 'Learn more',
  },
  {
    id: 'customer-consumer-analytics',
    label: 'Customer & Consumer Analytics',
    title: 'How we understand',
    body: 'We uncover what truly drives customer behavior, satisfaction, and loyalty. Our analytics go beyond surface metrics to identify experience breakdowns and improvement opportunities.',
    image: '/assets/images/strategy.png',
    bullets: [
      'Customer segmentation and profiling',
      'Experience mapping and journey analysis',
      'Satisfaction and loyalty measurement',
    ],
    cta: 'Learn more',
  },
  {
    id: 'data-analytics-visualization',
    label: 'Data Analytics & Visualization',
    title: 'How we build',
    body: 'We transform complex datasets into clear insights and decision-ready dashboards. Our analyses reveal patterns, trends, and drivers that matter most to your organization.',
    image: '/assets/images/3.png',
    bullets: [
      'Data exploration and pattern recognition',
      'Interactive dashboards and reporting',
      'Predictive modeling and forecasting',
    ],
    cta: 'Learn more',
  },
  {
    id: 'monitoring-evaluation-impact',
    label: 'Monitoring, Evaluation & Impact Assessment',
    title: 'How we measure',
    body: 'We design M&E systems that measure what matters and support continuous learning. Our approach tracks results across inputs, outputs, outcomes, and long-term impact.',
    image: '/assets/images/4.png',
    bullets: [
      'M&E framework and indicator development',
      'Performance tracking and impact assessment',
      'Learning and adaptation strategies',
    ],
    cta: 'Learn more',
  },
  {
    id: 'policy-research-analysis',
    label: 'Policy Research & Strategic Analysis',
    title: 'How we inform',
    body: 'We evaluate policies to determine what works, what doesn\'t, and why. Our research combines data analysis with real-world implementation insights.',
    image: '/assets/images/5.png',
    bullets: [
      'Policy analysis and evaluation',
      'Stakeholder and political economy analysis',
      'Implementation research and recommendations',
    ],
    cta: 'Learn more',
  },
  {
    id: 'surveys-field-research',
    label: 'Surveys & Field Research',
    title: 'How we collect',
    body: 'Primary data you can rely on. We design and implement high-quality quantitative and qualitative research across diverse African contexts.',
    image: '/assets/images/6.png',
    bullets: [
      'Large-scale surveys (CATI, CAPI, online)',
      'Qualitative research and mixed methods',
      'Specialized studies and field assessments',
    ],
    cta: 'Learn more',
  },
  {
    id: 'strategic-consulting-advisory',
    label: 'Strategic Consulting & Advisory',
    title: 'How we guide',
    body: 'We support leadership teams with evidence-based strategy, planning, and execution support that turns direction into measurable results.',
    image: '/assets/images/6.png',
    bullets: [
      'Organizational strategy and planning',
      'Business planning and growth strategy',
      'Investment due diligence and advisory',
    ],
    cta: 'Learn more',
  },
];

const solutions = [
  {
    icon: 'Puzzle',
    title: 'Evidence with Purpose',
    body: 'Our work is always anchored in a clear decision or problem. We design studies so that findings can be used, not just admired.',
  },
  {
    icon: 'Workflow',
    title: 'Rigorous Methods',
    body: 'We use the right mix of qualitative and quantitative methods to answer your specific questions with confidence.',
  },
  {
    icon: 'UsersRound',
    title: 'Local Expertise',
    body: 'Our team has deep experience working across Africa, with a network of local researchers in multiple countries.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Ethical Standards',
    body: 'We maintain the highest ethical standards in data collection, analysis, and reporting.',
  },
  {
    icon: 'Handshake',
    title: 'Partnership Approach',
    body: 'We work closely with our clients to ensure our work meets their needs and builds their capacity.',
  },
  {
    icon: 'Target',
    title: 'Actionable Insights',
    body: 'We go beyond data to provide clear, practical recommendations that drive impact.',
  },
];

const iconComponents = {
  Puzzle,
  Workflow,
  UsersRound,
  ShieldCheck,
  Handshake,
  Target
};

const insights = [
  {
    title: 'Transforming Data into Strategic Advantage',
    category: 'Insights',
    date: 'Nov 4, 2025',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80',
    excerpt: 'How we build pragmatic AI roadmaps that tie every experiment back to value.',
  },
  {
    title: 'Designing Decision Rooms for Modern Leadership',
    category: 'Tips',
    date: 'Nov 2, 2025',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Dashboards alone rarely change behavior. A look at rituals that do.',
  },
  {
    title: 'Playbooks for Data-Backed Policy Design',
    category: 'Research',
    date: 'Oct 28, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Lessons from public-sector partners who move fast without cutting corners.',
  },
];

const Services = () => {
  return (
    <PageTransition>
      <div className="min-h-screen font-['Montserrat']" style={{ backgroundColor: '#f5f5f5', color: '#1a1a1a' }}>
      {/* hero */}
      <motion.section 
        className="mx-auto max-w-6xl px-6 py-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        variants={staggerContainer}
      >
        <div className="flex flex-col gap-10 md:flex-row md:items-end">
          <div className="flex-1">
            <AnimatedText>
              <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: `${accentColors.main}80` }}>Our Services</p>
            </AnimatedText>
            <AnimatedText delay={0.2} split>
              <h1 className="text-3xl! xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 font-bold leading-tight tracking-tight font-['Montserrat_Alternates']">
                Your partner for research-led strategy, design, and delivery.
              </h1>
            </AnimatedText>
          </div>
          <AnimatedText delay={0.2}>
            <div className="flex-1 max-w-xl space-y-6">
              <div className="[&>span]:inline-block [&>span]:opacity-90 mb-8">
                <AnimatedText split={false} delay={0.25}>
                  <p className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-xl text-black leading-relaxed font-['Montserrat']">
                    We help leadership teams make confident decisions. Every engagement blends rigorous research with calm,
                    minimal execution so the work feels as clear as it looks.
                  </p>
                </AnimatedText>
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium"
                  style={{
                    backgroundColor: accentColors.main,
                    color: 'white',
                    border: `1px solid ${accentColors.main}`
                  }}
                >
                  <span>Talk to us</span>
                  <span>↗</span>
                </motion.a>
              </div>
            </div>
          </AnimatedText>
        </div>
      </motion.section>

      {/* capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-10" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: `${accentColors.main}80` }}>What we do</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 font-['Montserrat_Alternates']">Simple structure, deep capability.</h2>
          </div>
          <p className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-xl text-black leading-relaxed opacity-90 md:max-w-2xl font-['Montserrat']">
            We keep the interface minimal so conversations stay about your business. Behind the scenes, multidisciplinary
            teams cover the detail.
          </p>
        </div>
        <div className="space-y-12">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid gap-10 lg:grid-cols-2 items-center pt-12 ${
                index === 0 ? 'border-t-0 pt-0' : ''
              } ${index % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'}`}
            >
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-sm font-['Montserrat']">
                    <span className="font-medium tracking-wider" style={{ color: accentColors.main }}>{capability.label}</span>
                    <span className="w-1 h-1 rounded-full bg-transparent"></span>
                    <span className="text-gray-500">{capability.cta}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 font-['Montserrat_Alternates']">{capability.title}</h3>
                </div>
                <p className="text-lg text-gray-900 leading-relaxed opacity-90">{capability.body}</p>
                <div className="space-y-4">
                  {capability.bullets.map((item) => (
                    <div key={item} className="flex gap-4 items-start">
                      <span className="mt-3 inline-block h-1 w-6 bg-gray-900 flex-shrink-0" />
                      <p className="text-lg text-gray-900 leading-relaxed opacity-90">{item}</p>
                    </div>
                  ))}
                </div>
                <Link to={`/services/${capability.id}`}>
                  <motion.button 
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-lg font-medium"
                    style={{
                      backgroundColor: accentColors.main,
                      color: 'white',
                      border: `1px solid ${accentColors.main}`
                    }}
                  >
                    <span>{capability.cta}</span>
                    <span>↗</span>
                  </motion.button>
                </Link>
              </div>
              <div
                className={`relative h-[400px] w-5/5 mx-auto lg:mx-0 lg:w-[90%] overflow-hidden ${
                  index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                }`}
              >
                <div className="h-full w-full">
                  <img
                    src={capability.image}
                    alt={capability.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* solutions */}
      <section style={{ backgroundColor: '#f5f5f5' }}>
        <div className="mx-auto max-w-6xl px-6 py-24 space-y-16">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] mb-4 font-['Montserrat']" style={{ color: `${accentColors.main}80` }}>Our Differentiators</p>
            <h2 className="text-3xl! sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900 font-['Montserrat_Alternates']">
              What Makes Midak Different
            </h2>
            <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-900 opacity-90 max-w-2xl font-['Montserrat']">
              Explore our unique approach to research, strategy, and the future of data-driven organizations.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid gap-12 md:grid-cols-2">
              {solutions.map(({ icon, title, body }) => {
                const IconComponent = iconComponents[icon];
                return (
                  <article key={title} className="space-y-6">
                    <div className="h-20 w-20 rounded-full flex items-center justify-center" style={{ backgroundColor: `${accentColors.main}10` }}>
                      {IconComponent && <IconComponent className="h-8 w-8" strokeWidth={1.75} style={{ color: `${accentColors.main}80` }} />}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">{title}</h3>
                      <p className="text-gray-900 text-lg leading-relaxed opacity-90">{body}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* insights */}
      <section className="mx-auto max-w-6xl px-6 bg-[#f4f4f4] py-16 space-y-8">
        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium uppercase tracking-[0.3em] font-['Montserrat']" style={{ color: `${accentColors.main}80` }}>Latest insights</p>
            <h2 className="text-3xl font-bold tracking-tight mt-2 md:text-4xl font-['Montserrat_Alternates']">Thinking that travels from lab to boardroom.</h2>
          </div>
          <motion.a
            href="/blog"
            className="inline-flex items-center justify-start gap-2 rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap w-auto md:w-auto self-start font-['Montserrat']"
            style={{
              backgroundColor: accentColors.main,
              color: 'white',
              border: `1px solid ${accentColors.main}`,
              minWidth: 'fit-content',
              maxWidth: '200px',
              display: 'inline-flex'
            }}
          >
            <span>Discover more</span>
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
          </motion.a>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {insights.map((item) => (
            <div key={item.title} className="flex flex-col overflow-hidden h-full border border-gray-200 transition-colors duration-300 hover:border-gray-300">
              <div className="flex-shrink-0 overflow-hidden h-40">
                <div className="relative h-full w-full group">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xs font-medium mb-1" style={{ color: `${accentColors.main}CC` }}>
                    {item.category || 'Insight'}
                  </p>
                  <div className="block">
                    <Link to="/blog" className="transition-colors duration-200">
                      <p className="text-lg font-semibold text-gray-900 line-clamp-2">{item.title}</p>
                    </Link>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2 mb-4">{item.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <time dateTime={item.date}>{item.date || 'Jan 7, 2024'}</time>
                  </div>
                  <div className="flex items-center ml-4">
                    <Link to="/blog" className="block" aria-label={`Read more about ${item.title}`}>
                      <ServiceButton to="/blog">
                        Read more
                        <ArrowRight size={16} />
                      </ServiceButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      </div>
    </PageTransition>
  );
};

// Add prop type validation for the AnimatedText component
AnimatedText.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  split: PropTypes.bool,
  className: PropTypes.string
};

export default Services;