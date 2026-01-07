import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { accentColors } from '../constants/colors';

const ServiceHeaderImage = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  margin: 0 auto 3rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ServiceContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.7;
  color: #333;
  text-align: left;
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 2rem 0;
  padding: 0.5rem 0;
  color: ${accentColors.main};
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.2s ease;
  position: relative;
  text-align: left;
  width: 100%;
  justify-content: flex-start;
  
  &:hover {
    color: ${accentColors.dark};
    transform: translateX(-4px);
    
    svg {
      transform: translateX(-4px);
    }
  }
  
  svg {
    transition: transform 0.2s ease;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const ServiceHeader = styled.div`
  margin-bottom: 3rem;
  text-align: left;
  max-width: 100%;
  
  h1 {
    font-size: 2.5rem;
    color: #2d3748;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
    text-align: left;
  }
  
  p {
    font-size: 1.4rem;
    color: #4a5568;
    margin: 0 0 1.5rem 0;
    font-weight: 500;
    max-width: 100%;
    text-align: left;
  }
  
  .description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a5568;
    margin-top: 1.5rem;
    padding: 0;
  }
`;

const Section = styled.div`
  margin-bottom: 3.5rem;
  
  h2 {
    font-size: 1.75rem;
    color: #2d3748;
    margin: 2.5rem 0 1.5rem;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 1.25rem;
    line-height: 1.8;
    color: #4a5568;
    font-size: 1.05rem;
  }
  
  ul {
    margin: 1.5rem 0 2.5rem 1rem;
    padding-left: 1.5rem;
    list-style-type: none;
    
    li {
      margin-bottom: 0.8rem;
      line-height: 1.8;
      color: #4a5568;
      font-family: 'Montserrat', sans-serif;
      padding-left: 1.5rem;
      position: relative;
      
      &::before {
        content: '•';
        color: ${accentColors.main};
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1.5rem;
        font-size: 1.4em;
        line-height: 1;
        vertical-align: middle;
      }
  }
`;

const serviceDetails = {
  'market-research-intelligence': {
    title: 'MARKET RESEARCH & INTELLIGENCE',
    image: '/assets/images/market.png',
    subtitle: 'Understanding markets, customers, and competition so you can move with confidence.',
    description: 'We help organizations understand where opportunities truly exist and what risks need to be managed before committing resources. Our market research combines data analysis, field research, and strategic interpretation to provide a clear, decision-ready view of markets, sectors, and competitive dynamics.',
    sections: [
      {
        title: 'Market Assessment & Opportunity Analysis',
        content: [
          'Before launching a product, entering a new market, or expanding operations, you need a realistic understanding of demand, competition, pricing, and regulatory conditions. Our market assessments answer the critical questions decision-makers face: market size, growth potential, customer needs, competitive positioning, and commercial viability. Each study is customized to your specific objectives and context.'
        ],
        list: {
          title: 'Deliverables typically include:',
          items: [
            'Market sizing and medium-term growth projections',
            'Competitive landscape and positioning analysis',
            'Customer segmentation based on behavior and needs',
            'Market entry or expansion strategies with risk assessment',
            'Pricing benchmarks and willingness-to-pay analysis',
            'Regulatory and business environment assessment'
          ]
        }
      },
      {
        title: 'Competitive Intelligence & Benchmarking',
        content: [
          'Markets evolve quickly, and competitors continuously adjust their strategies. We systematically track competitor activities—pricing, product launches, distribution strategies, promotions, and customer experience—to help you stay ahead. Our competitive intelligence relies on ethical, publicly available data and structured analysis to identify strengths, weaknesses, and strategic gaps.'
        ]
      },
      {
        title: 'Industry & Sector Deep Dives',
        content: [
          'When decisions require a broader view, we conduct in-depth sector studies covering value chains, key players, investment trends, policy frameworks, and future outlooks. These studies support investors, policymakers, and businesses considering diversification or large-scale investments.'
        ]
      },
      {
        title: 'Feasibility Studies & Business Case Development',
        content: [
          'Not every idea is commercially or operationally viable. Our feasibility studies combine market analysis, technical assessment, financial modeling, and risk evaluation to determine whether an initiative should move forward—and how to do it successfully. The output is a clear business case that supports confident go/no-go decisions.'
        ]
      }
    ]
  },
  'customer-consumer-analytics': {
    title: 'CUSTOMER & CONSUMER ANALYTICS',
    image: '/assets/images/strategy.png',
    subtitle: 'Understanding what drives customer behavior, satisfaction, and loyalty.',
    description: 'We help organizations move beyond assumptions to understand how customers think, feel, and act. Our customer and consumer analytics uncover the real drivers of satisfaction, churn, brand perception, and purchasing decisions.',
    sections: [
      {
        title: 'Customer Satisfaction & Experience Studies',
        content: [
          'We design experience and satisfaction studies that identify where customer journeys break down and where they excel. Rather than relying on headline metrics alone, we analyze specific touchpoints and service drivers to pinpoint actionable improvements.'
        ],
        list: {
          title: 'Key focus areas include:',
          items: [
            'Satisfaction and Net Promoter Score (NPS)',
            'Service quality across channels',
            'Customer effort and pain points',
            'Loyalty drivers and churn risk',
            'Journey mapping with emotional insights'
          ]
        }
      },
      {
        title: 'Consumer Behavior & Insights Research',
        content: [
          'We explore why consumers make the choices they do—how culture, habits, social influence, and perceptions shape decisions. Using qualitative and quantitative methods, we generate insights that inform product design, marketing strategy, and communication.'
        ]
      },
      {
        title: 'Brand Health & Positioning Studies',
        content: [
          'We measure how brands are perceived in the market, including awareness, associations, trust, and differentiation. These studies help organizations strengthen positioning, guide rebranding efforts, and protect market share.'
        ]
      },
      {
        title: 'Usage & Attitude (U&A) Studies',
        content: [
          'U&A studies reveal how products and services are actually used in real life, uncovering unmet needs and unexpected behaviors that create opportunities for innovation and growth.'
        ]
      }
    ]
  },
  'data-analytics-visualization': {
    title: 'DATA ANALYTICS & VISUALIZATION',
    image: '/assets/images/3.png',
    subtitle: 'Turning data into insight, foresight, and action.',
    description: 'We help organizations extract value from their data by applying rigorous analytics and translating results into clear, usable insights.',
    sections: [
      {
        title: 'Advanced Statistical Analysis',
        content: [
          'Our statisticians and data scientists apply robust analytical methods to identify patterns, drivers, and relationships within complex datasets. We focus on interpretation and implications, not just technical outputs.'
        ]
      },
      {
        title: 'Predictive Analytics & Machine Learning',
        content: [
          'We build predictive models that help organizations anticipate future outcomes—such as customer churn, demand fluctuations, or risk exposure. Our models are designed to be practical, deployable, and decision-relevant.'
        ]
      },
      {
        title: 'Interactive Dashboards & Visualization',
        content: [
          'We design dashboards that provide real-time visibility into performance, trends, and risks. These tools support faster, more informed decision-making at both executive and operational levels.'
        ]
      },
      {
        title: 'Data Quality & Management',
        content: [
          'Strong analytics depend on strong data foundations. We support data governance, quality assurance, and system integration to ensure data is reliable, consistent, and fit for purpose.'
        ]
      }
    ]
  },
  'monitoring-evaluation-impact': {
    title: 'MONITORING, EVALUATION & IMPACT ASSESSMENT',
    image: '/assets/images/4.png',
    subtitle: 'Measuring results, learning what works, and improving performance.',
    description: 'We design M&E systems that support learning and accountability, not just reporting requirements.',
    sections: [
      {
        title: 'Program Design & Theory of Change',
        content: [
          'We help organizations define success clearly by articulating program logic, theories of change, and measurable indicators aligned with strategic objectives.'
        ]
      },
      {
        title: 'Monitoring & Evaluation Systems',
        content: [
          'We design and implement end-to-end M&E systems that track inputs, outputs, outcomes, and impacts, supported by appropriate data tools and reporting frameworks.'
        ]
      },
      {
        title: 'Impact Evaluations',
        content: [
          'Using rigorous evaluation methods, we assess whether programs caused observed outcomes and identify what drives effectiveness. Evaluations are tailored to decision-makers\' priorities.'
        ]
      },
      {
        title: 'Real-Time Monitoring & Adaptive Management',
        content: [
          'We support continuous feedback systems that allow organizations to adjust implementation in real time, improving effectiveness while programs are still active.'
        ]
      }
    ]
  },
  'policy-research-strategic-analysis': {
    title: 'POLICY RESEARCH & STRATEGIC ANALYSIS',
    image: '/assets/images/5.png',
    subtitle: 'Evidence that informs better policy and systemic change.',
    description: 'We support governments, donors, and institutions with research that connects policy intent to real-world outcomes.',
    sections: [
      {
        title: 'Policy Analysis & Evaluation',
        content: [
          'We assess whether policies are achieving intended results, identify unintended effects, and analyze implementation challenges using mixed-method approaches.'
        ]
      },
      {
        title: 'Evidence Synthesis & Policy Briefs',
        content: [
          'We distill large bodies of research into concise, decision-ready briefs that clearly communicate what is known, what works, and what to consider next.'
        ]
      },
      {
        title: 'Socio-Economic Research',
        content: [
          'We conduct research on poverty, labor markets, inequality, access to services, and demographic change to inform planning, budgeting, and reform.'
        ]
      },
      {
        title: 'Governance & Institutional Analysis',
        content: [
          'We analyze institutional capacity, incentives, and political economy factors that influence policy success or failure.'
        ]
      }
    ]
  },
  'strategic-consulting-advisory': {
    title: 'STRATEGIC CONSULTING & ADVISORY SERVICES',
    image: '/assets/images/7.png',
    subtitle: 'How we guide',
    description: 'We support leadership teams with evidence-based strategy, planning, and execution support that turns direction into measurable results.',
    sections: [
      {
        title: 'Organizational strategy and planning',
        content: [
          'We help organizations define their strategic direction, align resources, and implement effective governance structures to achieve sustainable growth and impact.'
        ]
      },
      {
        title: 'Business planning and growth strategy',
        content: [
          'We develop comprehensive business plans and growth strategies that are both ambitious and achievable, helping organizations scale effectively.'
        ]
      },
      {
        title: 'Investment due diligence and advisory',
        content: [
          'We provide thorough due diligence services to support investment decisions, assessing market opportunities, risks, and operational capabilities.'
        ]
      }
    ]
  },
  'surveys-field-research': {
    title: 'SURVEYS & FIELD RESEARCH',
    image: '/assets/images/6.png',
    subtitle: 'Rigorous, ethical, and context-sensitive data collection you can trust—at scale or in-depth.',
    description: 'We design and execute quantitative and qualitative research across diverse African settings.',
    sections: [
      {
        title: 'Quantitative surveys',
        content: [
          'We deliver statistically sound surveys from design through analysis, using CATI, CAPI, online, paper-based, or hybrid approaches. Our fieldwork emphasizes quality control, ethics, and cultural sensitivity.'
        ]
      },
      {
        title: 'Qualitative research',
        content: [
          'We conduct interviews, focus groups, and participatory research to uncover motivations, perceptions, and decision drivers. Insights are systematically analyzed using thematic methods.'
        ]
      },
      {
        title: 'Mixed methods research',
        content: [
          'We integrate qualitative and quantitative approaches to deepen understanding and strengthen validity—moving from exploration to testing and explanation.'
        ]
      },
      {
        title: 'Specialized data collection',
        content: [
          'We also conduct mystery shopping, service quality audits, market observation studies, and facility assessments tailored to sector-specific needs.'
        ]
      }
    ]
  },
  'sectoral-expertise': {
    title: 'SPECIALIZED SECTORAL EXPERTISE',
    image: '/assets/images/Hero.png',
    subtitle: 'Deep knowledge in sectors that matter.',
    description: 'We bring sector-specific expertise across health, education, agriculture, financial services, energy, infrastructure, and the digital economy, combining technical understanding with market and policy insight.',
    sections: []
  },
  'capacity-building-training': {
    title: 'CAPACITY BUILDING & TRAINING',
    image: '/assets/images/Hero2.png',
    subtitle: 'Building internal capability for lasting impact.',
    description: 'We deliver customized training in research methods, analytics, M&E, data visualization, and evidence-based decision-making to strengthen internal teams.',
    sections: []
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <ServiceContainer>
        <h1>Service not found</h1>
        <Link to="/services">Back to Services</Link>
      </ServiceContainer>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ServiceContainer>
        <BackButton 
          onClick={() => navigate(-1)}
          className="back-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Services
        </BackButton>
        
        <ServiceHeaderImage>
          <img 
            src={service.image || '/assets/images/heroh.png'}
            alt={service.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/assets/images/heroh.png';
            }}
          />
        </ServiceHeaderImage>
        
        <ServiceHeader>
          <h1>{service.title}</h1>
          <p>{service.subtitle}</p>
          {service.description && <div className="description">{service.description}</div>}
        </ServiceHeader>

        {service.sections.map((section, index) => (
          <Section key={index}>
            <h2>{section.title}</h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
            {section.list && (
              <>
                <p><strong>{section.list.title}</strong></p>
                <ul>
                  {section.list.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </Section>
        ))}
      </ServiceContainer>
    </motion.div>
  );
};

export default ServiceDetail;
