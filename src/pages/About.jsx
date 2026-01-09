import React from 'react';
import { accentColors } from '@/constants/colors';
import { motion, useScroll, useTransform } from 'framer-motion';
import AboutSection from '@/components/sections/AboutSection';
import { StickyScrollReveal } from '@/components/ui/sticky-scroll-reveal';
import CoreValuesSection from '@/components/sections/CoreValuesSection';
import ScrollVelocity from '@/components/ScrollVelocity';

const content = [
  {
    title: <span style={{ fontFamily: 'League_Spartan, sans-serif', fontWeight: 700 }}>Who We Are</span>,
    description: <div className="text-xl md:text-2xl text-gray-800 leading-relaxed opacity-90">Midak is a knowledge-driven consultancy built on three core pillars: intelligence, insight, and integrity. We bring together a multidisciplinary team of researchers, analysts, strategists, and technologists who share a common belief that data, when used responsibly and creatively, has the power to transform organizations and communities.<br /><br />Our team operates at the intersection of academic rigor and practical strategy. We design and execute studies, analyze complex data, and translate findings into clear, usable recommendations. From market assessments and impact evaluations to customer analytics and policy research, we approach every assignment with the same commitment to quality, accuracy, and real-world relevance.</div>,
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
    title: <span style={{ fontFamily: 'League_Spartan, sans-serif' }}>Our Approach</span>,
    description: (
      <div className="space-y-6 text-xl! md:text-2xl! text-gray-800 leading-relaxed opacity-90">
        <p className="text-xl! md:text-2xl!">Our approach is designed to move clients from questions to answers, and from answers to action. We do this through an integrated process that combines rigorous methods, modern technology, and strategic thinking.</p>
        
        <ol className="space-y-4 list-decimal pl-5">
          <li className="pl-2">
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT, fontFamily: 'League_Spartan, sans-serif' }}>Intense Research: </span>
              <span>We apply global qualitative, quantitative, and mixed methods through surveys, interviews, and advanced statistical analysis.</span>
            </div>
          </li>
          
          <li className="pl-2">
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT, fontFamily: 'League_Spartan, sans-serif' }}>Human Insights: </span>
              <span>Understanding people's motivations and experiences through cultural and contextual analysis for practical, empathetic solutions.</span>
            </div>
          </li>
          
          <li className="pl-2">
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT, fontFamily: 'League_Spartan, sans-serif' }}>Advanced Analytics: </span>
              <span>Leveraging data visualization, machine learning, and interactive tools to uncover and present actionable insights.</span>
            </div>
          </li>
          
          <li className="pl-2">
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT, fontFamily: 'League_Spartan, sans-serif' }}>Focused Implementation: </span>
              <span>Transforming insights into strategic action plans for better performance and resource allocation.</span>
            </div>
          </li>
        </ol>
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
    title: <span style={{ color: accentColors.DEFAULT, fontFamily: 'League_Spartan, sans-serif', fontWeight: 700 }}>Our Story</span>,
    description: <div className="text-xl md:text-2xl text-gray-800 leading-relaxed opacity-90">Midak was founded by Michael (Asante) Ofosu, a PhD researcher at Auburn University (USA), whose academic and professional journey spans research design, statistical modeling, monitoring and evaluation, and advisory work. Having worked across academic institutions, development projects, and private-sector initiatives, Michael observed a persistent gap: high-quality research was being produced but not always translated into decisions that changed practice or improved outcomes.<br /><br />Midak was created to close that gap. The firm was envisioned as a bridge between intense research and practical decision-making a consultancy rooted in African realities, operating to global standards, and committed to helping clients move from "data" to "direction." Today, Midak continues to grow as a trusted partner for organizations seeking clarity, innovation, and measurable impact.</div>,
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
    title: <span style={{ fontFamily: 'Montserrat, sans-serif'}}>Our Impact</span>,
    description: (
      <div className="space-y-6 text-xl! md:text-2xl text-gray-800 leading-relaxed opacity-90">
        <p className="text-xl! md:text-2xl!">We measure our success by the value our work creates for clients and the communities they serve. Our projects are designed not just to generate knowledge, but to support real change whether that means entering a new market, improving service delivery, refining a social program, or informing a policy decision.</p>
        
        <ol className="space-y-4 list-decimal pl-5">
          <li className="pl-2">
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT, fontFamily: 'Montserrat, sans-serif' }}>Businesses: </span>
              <span>Gain a clearer understanding of markets, customers, and competitive landscape for sustainable, strategic growth.</span>
            </div>
          </li>
          
          <li className="pl-2">
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT, fontFamily: 'Montserrat, sans-serif' }}>NGOs & Development Partners: </span>
              <span>Strengthen program designs and evaluation frameworks for more effective interventions.</span>
            </div>
          </li>
          
          <li className="pl-2">
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT, fontFamily: 'Montserrat, sans-serif' }}>Government Agencies: </span>
              <span>Receive evidence-based support for policy formulation and service improvements.</span>
            </div>
          </li>
          
          <li className="pl-2">
            <div>
              <span className="font-semibold" style={{ color: accentColors.DEFAULT, fontFamily: 'Montserrat, sans-serif' }}>Startups & Entrepreneurs: </span>
              <span>Access market intelligence to refine ideas and attract investment.</span>
            </div>
          </li>
        </ol>
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
    title: <span style={{ fontFamily: 'League_Spartan, sans-serif' }}>Building the Next Generation of Insight</span>,
    description: (
      <div className="space-y-6 text-xl! md:text-2xl! text-gray-800 leading-relaxed opacity-90">
        <p className="text-xl! md:text-2xl!">Midak is intentionally designed as a future-facing firm. As data ecosystems expand and decision-making becomes more complex, we are investing in capabilities, partnerships, and platforms that will help our clients stay ahead of the curve.</p>
        <ol className="space-y-3 list-decimal pl-5">
          <li className="pl-2">Developing AI-powered and predictive analytics tools that anticipate trends and support proactive decision-making.</li>
          <li className="pl-2">Expanding our presence across West, East, and Southern Africa through strategic partnerships and regional project hubs.</li>
          <li className="pl-2">Launching the Midak Insights Platform, a digital space where clients can access dashboards, visualizations, and curated reports in real-time.</li>
          <li className="pl-2">Establishing Midak Insight Labs, a dedicated unit for innovative research on socio-economic development, markets, governance, and technology adoption.</li>
          <li className="pl-2">Creating the Midak Academy to build capacity among students, professionals, and organizations in research methods, data analytics, and evidence-based strategy.</li>
        </ol>
      </div>
    ),
    content: (
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
          alt="Digital innovation and future technology"
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
];

const About = () => {
  return (
    <div>
      <section className="w-full">
        <StickyScrollReveal 
          content={content.map(item => ({
            ...item,
            title: <span style={{ color: accentColors.DEFAULT, fontFamily: 'Montserrat_Alternates' }}>{item.title}</span>,
            description: item.description
          }))}
          contentClassName="text-5xl text-gray-900 leading-relaxed max-w-6xl mx-auto px-8 py-20 [&_h2]:text-5xl [&_h2]:font-bold [&_h2]:mb-8 [&_p]:text-2xl [&_p]:leading-9 [&_p]:text-gray-900 [&_p]:opacity-90 font-['Montserrat']"
          containerClassName="min-h-screen"
        />

        <CoreValuesSection />
      </section>
      <AboutSection />
    </div>
  );
};

export default About;
