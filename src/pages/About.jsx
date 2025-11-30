import React from 'react';
import { accentColors } from '@/constants/colors';
import { motion, useScroll, useTransform } from 'framer-motion';
import AboutSection from '@/components/sections/AboutSection';
import { StickyScrollReveal } from '@/components/ui/sticky-scroll-reveal';
import CoreValuesSection from '@/components/sections/CoreValuesSection';
import ScrollVelocity from '@/components/ScrollVelocity';

const content = [
  {
    title: 'Who We Are',
    description: 'Midak is a knowledge-driven consultancy built on three core pillars: intelligence, insight, and integrity. We bring together a multidisciplinary team of researchers, analysts, strategists, and technologists who share a common belief that data, when used responsibly and creatively, has the power to transform organizations and communities.\n\nOur team operates at the intersection of academic rigor and practical strategy. We design and execute studies, analyze complex data, and translate findings into clear, usable recommendations. From market assessments and impact evaluations to customer analytics and policy research, we approach every assignment with the same commitment to quality, accuracy, and real-world relevance.',
    content: (
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/image1.png" 
          alt="Who We Are"
          className="w-full h-full text-[${accentColors.DEFAULT}] object-cover"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            objectPosition: 'center',
            transform: 'translateZ(0)' // Force GPU acceleration
          }}
        />
      </div>
    ),
  },
  {
    title: 'Our Approach',
    description: (
      <div className="space-y-4">
        <p>Our approach is designed to move clients from questions to answers, and from answers to action. We do this through an integrated process that combines rigorous methods, modern technology, and strategic thinking.</p>
        
        <ul className="space-y-4 list-none pl-0">
          <li className="flex items-start">
            <span className="mr-2" style={{ color: accentColors.DEFAULT }}>•</span>
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT }}>Rigorous Research: </span>
              <span>We apply global qualitative, quantitative, and mixed methods through surveys, interviews, and advanced statistical analysis.</span>
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="mr-2" style={{ color: accentColors.DEFAULT }}>•</span>
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT }}>Human Insights: </span>
              <span>Understanding people's motivations and experiences through cultural and contextual analysis for practical, empathetic solutions.</span>
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="mr-2" style={{ color: accentColors.DEFAULT }}>•</span>
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT }}>Advanced Analytics: </span>
              <span>Leveraging data visualization, machine learning, and interactive tools to uncover and present actionable insights.</span>
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="mr-2" style={{ color: accentColors.DEFAULT }}>•</span>
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT }}>Focused Implementation: </span>
              <span>Transforming insights into strategic action plans for better performance and resource allocation.</span>
            </div>
          </li>
        </ul>
      </div>
    ),
    content: (
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/image2.png" 
          alt="Our Approach"
          className="w-full h-full text-[${accentColors.DEFAULT}] object-cover"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            objectPosition: 'center',
            transform: 'translateZ(0)'
          }}
        />
      </div>
    ),
  },
  {
    title: 'Our Story',
    description: 'Midak was founded by Michael (Asante) Ofosu, a PhD researcher at Auburn University (USA), whose academic and professional journey spans research design, statistical modeling, monitoring and evaluation, and advisory work. Having worked across academic institutions, development projects, and private-sector initiatives, Michael observed a persistent gap: high-quality research was being produced but not always translated into decisions that changed practice or improved outcomes.\n\nMidak was created to close that gap. The firm was envisioned as a bridge between rigorous research and practical decision-making—a consultancy rooted in African realities, operating to global standards, and committed to helping clients move from "data" to "direction." Today, Midak continues to grow as a trusted partner for organizations seeking clarity, innovation, and measurable impact.',
    content: (
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/founder1.png" 
          alt="Our Story"
          className="w-full h-full text-[${accentColors.DEFAULT}] object-cover"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            objectPosition: 'center',
            transform: 'translateZ(0)'
          }}
        />
      </div>
    ),
  },
  {
    title: 'Our Impact',
    description: (
      <div className="space-y-4">
        <p>We measure our success by the value our work creates for clients and the communities they serve. Our projects are designed not just to generate knowledge, but to support real change—whether that means entering a new market, improving service delivery, refining a social program, or informing a policy decision.</p>
        
        <ul className="space-y-4 list-none pl-0">
          <li className="flex items-start">
            <span className="mr-2" style={{ color: accentColors.DEFAULT }}>•</span>
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT }}>Businesses: </span>
              <span>Gain a clearer understanding of markets, customers, and competitive landscape for sustainable, strategic growth.</span>
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="mr-2" style={{ color: accentColors.DEFAULT }}>•</span>
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT }}>NGOs & Development Partners: </span>
              <span>Strengthen program designs and evaluation frameworks for more effective interventions.</span>
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="mr-2" style={{ color: accentColors.DEFAULT }}>•</span>
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT }}>Government Agencies: </span>
              <span>Receive evidence-based support for policy formulation and service improvements.</span>
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="mr-2" style={{ color: accentColors.DEFAULT }}>•</span>
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT }}>Startups & Entrepreneurs: </span>
              <span>Access market intelligence to refine ideas and attract investment.</span>
            </div>
          </li>
        </ul>
      </div>
    ),
    content: (
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/image4.png" 
          alt="Our Impact"
          className="w-full h-full text-[${accentColors.DEFAULT}] object-cover"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            objectPosition: 'center',
            transform: 'translateZ(0)'
          }}
        />
      </div>
    ),
  },
  {
    title: 'Our Vision',
    description: 'To become Africa\'s leading research and strategy consultancy recognized for excellence, innovation, and impact and to be a firm that helps shape the future by placing insight at the center of every major decision.',
    content: (
      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-white p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: accentColors.DEFAULT }}>Our Vision</h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            To become Africa's leading research and strategy consultancy recognized for excellence, innovation, and impact and to be a firm that helps shape the future by placing insight at the center of every major decision.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Building the Next Generation of Insight',
    description: (
      <div className="space-y-4">
        <p>Midak is intentionally designed as a future-facing firm. As data ecosystems expand and decision-making becomes more complex, we are investing in capabilities, partnerships, and platforms that will help our clients stay ahead of the curve.</p>
        <ul className="space-y-3 list-disc pl-5">
          <li>Developing AI-powered and predictive analytics tools that anticipate trends and support proactive decision-making.</li>
          <li>Expanding our presence across West, East, and Southern Africa through strategic partnerships and regional project hubs.</li>
          <li>Launching the Midak Insights Platform, a digital space where clients can access dashboards, visualizations, and curated reports in real-time.</li>
          <li>Establishing Midak Insight Labs, a dedicated unit for innovative research on socio-economic development, markets, governance, and technology adoption.</li>
          <li>Creating the Midak Academy to build capacity among students, professionals, and organizations in research methods, data analytics, and evidence-based strategy.</li>
        </ul>
      </div>
    ),
    content: (
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/future-building.jpg" 
          alt="Future Building"
          className="w-full h-full object-cover"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            objectPosition: 'center',
            transform: 'translateZ(0)'
          }}
        />
      </div>
    ),
  },
  {
    title: 'Our Mission',
    description: 'To transform data into powerful, practical insights that enable organizations to make confident decisions, accelerate growth, and create lasting positive impact across sectors and communities.',
    content: (
      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-50 p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: accentColors.DEFAULT }}>Our Mission</h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            To transform data into powerful, practical insights that enable organizations to make confident decisions, accelerate growth, and create lasting positive impact across sectors and communities.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Our Promise',
    description: 'At Midak, our promise is simple: we will treat every assignment as an opportunity to create clarity, add value, and support better decisions. We listen carefully, think deeply, work rigorously, and communicate clearly. Above all, we are committed to partnering with organizations that want to understand more, do better, and build futures grounded in evidence and insight.',
    content: (
      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-white p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: accentColors.DEFAULT }}>Our Promise</h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            At Midak, our promise is simple: we will treat every assignment as an opportunity to create clarity, add value, and support better decisions. We listen carefully, think deeply, work rigorously, and communicate clearly. Above all, we are committed to partnering with organizations that want to understand more, do better, and build futures grounded in evidence and insight.
          </p>
        </div>
      </div>
    ),
  },
];

const About = () => {
  return (
    <div className="bg-[${accentColors.DEFAULT}]/80">
      <section className="w-full bg-[#6f35c8]/80">
        <StickyScrollReveal 
          content={content.map(item => ({
            ...item,
            title: <span style={{ color: accentColors.DEFAULT }}>{item.title}</span>,
            description: item.description
          }))}
          contentClassName="text-3xl md:text-4xl text-gray-900 leading-relaxed max-w-5xl mx-auto px-6 py-16"
        />
        <div className="flex justify-center items-center py-4 bg-[#f4f4f4]">
          <ScrollVelocity 
            texts={[
              <span key="scrolling-text" className="text-xl" style={{ color: `${accentColors.main}80` }}>
                Research Excellence <span style={{ color: accentColors.DEFAULT }}>✦</span> Data-Driven Insights <span style={{ color: accentColors.DEFAULT }}>✦</span> Strategic Consulting <span style={{ color: accentColors.DEFAULT }}>✦</span> Innovative Solutions <span style={{ color: accentColors.DEFAULT }}>✦</span> Market Analysis <span style={{ color: accentColors.DEFAULT }}>✦</span> Impact Assessment <span style={{ color: accentColors.DEFAULT }}>✦</span> Academic Research <span style={{ color: accentColors.DEFAULT }}>✦</span> Business Intelligence
              </span>
            ]} 
            velocity={50}
            className="custom-scroll-text"
          />
        </div>
        
        <CoreValuesSection />
      </section>
      <AboutSection />
    </div>
  );
};

export default About;
