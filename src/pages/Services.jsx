import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Puzzle, Workflow, UsersRound, ShieldCheck, Handshake, Target } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { accentColors } from '../constants/colors';

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
    label: 'Research & Foresight',
    title: 'Evidence that moves faster than markets.',
    body: 'We spot inflection points early with blended qualitative and quantitative research. The result is a clear brief for leadership, investors, and partners.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Market, policy, and ecosystem mapping',
      'Expert interviews, ethnography, and fieldwork',
      'Scenario planning and investment theses',
    ],
    cta: 'How we discover',
  },
  {
    label: 'Data & Intelligence',
    title: 'Operational clarity through trusted data.',
    body: 'From raw telemetry to executive dashboards, we engineer data products that leaders actually rely on.',
    image: 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Data platform + governance design',
      'Decision dashboards and narrative reporting',
      'Modeling, forecasting, and AI copilots',
    ],
    cta: 'How we build',
  },
  {
    label: 'Programs & Enablement',
    title: 'Change that lands and lasts.',
    body: 'We translate insight into operating models, playbooks, and teams that can run without us.',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Pilot orchestration and partner coordination',
      'Capability building and embedded specialists',
      'Measurement, learning, and scale plans',
    ],
    cta: 'How we enable',
  },
  {
    label: 'Innovation & Strategy',
    title: 'Future-proof your business model.',
    body: 'We help you anticipate market shifts and position your organization for long-term success through strategic innovation.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Market disruption analysis and opportunity mapping',
      'Innovation portfolio design and management',
      'Strategic roadmapping and execution frameworks',
    ],
    cta: 'How we innovate',
  },
];

const solutions = [
  {
    icon: Puzzle,
    title: 'Evidence with Purpose',
    body: 'Our work is always anchored in a clear decision or problem. We design studies so that findings can be used, not just admired.',
  },
  {
    icon: Workflow,
    title: 'Academic Rigor & Practical Strategy',
    body: 'We bring PhD-level research capacity to real-world challenges, translating complex analysis into straightforward options for action.',
  },
  {
    icon: UsersRound,
    title: 'Technology at the Core',
    body: 'From advanced analytics to automated reporting, technology is embedded in our processes, helping clients see more and decide faster.',
  },
  {
    icon: ShieldCheck,
    title: 'Africa-Centered, Globally Aligned',
    body: 'We are deeply rooted in African contexts yet benchmark our methods and quality standards against leading global practices.',
  },
  {
    icon: Handshake,
    title: 'Partnership Mindset',
    body: 'We work collaboratively, listening first, adapting as we learn, and co-owning both challenges and solutions with our clients.',
  },
  {
    icon: Target,
    title: 'Clarity and Precision',
    body: 'We specialize in translating complexity into clear insights, concise narratives, and visually engaging outputs.',
  },
];

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
      <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5', color: '#1a1a1a' }}>
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
              <p className="text-sm uppercase tracking-[0.3em]" style={{ color: `${accentColors.main}80` }}>Services</p>
            </AnimatedText>
            <AnimatedText delay={0.2} split>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Your partner for research-led strategy, design, and delivery.
              </h1>
            </AnimatedText>
          </div>
          <AnimatedText delay={0.2}>
            <div className="flex-1 max-w-xl space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
              <p className="[&>span]:inline-block [&>span]:opacity-95">
                <AnimatedText split={false} delay={0.25}>
                  We help leadership teams make confident decisions. Every engagement blends rigorous research with calm,
                  minimal execution so the work feels as clear as it looks.
                </AnimatedText>
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-black px-6 py-3 text-base font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#1a1a1a',
                    borderColor: '#1a1a1a',
                    '--tw-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                  }}
                  whileHover={{
                    backgroundColor: accentColors.main,
                    color: 'white',
                    borderColor: accentColors.main,
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Talk to us</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </motion.a>
              </div>
            </div>
          </AnimatedText>
        </div>
      </motion.section>

      {/* capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-10" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: `${accentColors.main}80` }}>What we do</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Simple structure, deep capability.</h2>
          </div>
          <p className="text-gray-600 md:max-w-md leading-relaxed">
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
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest">
                    <span className="h-px w-8" style={{ backgroundColor: `${accentColors.main}80` }} />
                    <span style={{ color: `${accentColors.main}80` }}>{capability.label}</span>
                  </div>
                  <h3 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">{capability.title}</h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed max-w-3xl">{capability.body}</p>
                <div className="space-y-4">
                  {capability.bullets.map((item) => (
                    <div key={item} className="flex gap-4">
                      <span className="mt-2 inline-block h-1 w-6 bg-gray-900" />
                      <p className="text-base text-gray-800 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <motion.button 
                  className="group inline-flex items-center gap-2 rounded-full border border-gray-900 px-6 py-2 text-sm font-semibold transition-all duration-300 ease-in-out hover:shadow-md"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#1a1a1a',
                    borderColor: '#1a1a1a',
                    '--tw-shadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)'
                  }}
                  whileHover={{
                    backgroundColor: accentColors.main,
                    color: 'white',
                    borderColor: accentColors.main,
                    scale: 1.05,
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{capability.cta}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                </motion.button>
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
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-103"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* solutions */}
      <section className="border-t border-gray-200" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="mx-auto max-w-6xl px-6 py-20 space-y-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: `${accentColors.main}80` }}>Our Differentiators</p>
            <h2 className="text-3xl font-semibold text-gray-900 mt-2">What Makes Midak Different</h2>
            <div className="w-24 h-0.5 bg-gray-200 mt-6"></div>
          </div>
          
          <div className="relative">
            <div className="grid gap-12 md:grid-cols-2">
              {solutions.map(({ icon: Icon, title, body }) => (
                <article key={title} className="space-y-4 group">
                  <div className="h-16 w-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `${accentColors.main}10` }}>
                    <Icon className="h-6 w-6" strokeWidth={1.75} style={{ color: `${accentColors.main}80` }} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">{title}</h3>
                    <p className="text-gray-700 leading-relaxed">{body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-200 -translate-x-1/2"></div>
          </div>
        </div>
      </section>

      {/* insights */}
      <section className="mx-auto max-w-6xl px-6 bg-[#f4f4f4] py-16 space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em]" style={{ color: `${accentColors.main}80` }}>Latest insights</p>
            <h2 className="text-3xl font-bold tracking-tight mt-2 md:text-4xl">Thinking that travels from lab to boardroom.</h2>
          </div>
          <motion.a
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-gray-900 px-5 py-2 text-sm font-semibold transition-all duration-300 ease-in-out hover:shadow-md"
            style={{
              backgroundColor: 'transparent',
              color: '#1a1a1a',
              borderColor: '#1a1a1a',
              '--tw-shadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)'
            }}
            whileHover={{
              backgroundColor: accentColors.main,
              color: 'white',
              borderColor: accentColors.main,
              scale: 1.05,
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Discover more</span>
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
          </motion.a>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {insights.map((item) => (
            <Link
              to="/blog"
              key={item.title}
              className="group flex flex-col rounded-lg overflow-hidden h-full border border-gray-200 transition-all duration-300 hover:border-transparent hover:shadow-xl hover:-translate-y-1"
            >
              <div className="shrink-0 overflow-hidden h-48">
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
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: `${accentColors.main}80` }}>
                    {item.category}
                  </p>
                  <div className="block mt-1">
                    <p className="text-lg font-bold text-gray-900 line-clamp-2 leading-snug">{item.title}</p>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">{item.excerpt}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-500 font-medium">
                    <time>{item.date}</time>
                  </div>
                  <div className="flex items-center ml-4">
                    <div 
                      className="relative w-11 h-11 rounded-full flex items-center justify-center overflow-hidden shadow-lg"
                      style={{
                        backgroundColor: accentColors.main
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5m0 0H9m10 0v10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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