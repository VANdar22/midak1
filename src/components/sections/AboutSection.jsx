
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt as ShieldIcon, 
  FaAward as AwardIcon, 
  FaLightbulb as LightbulbIcon, 
  FaCrosshairs as TargetIcon, 
  FaUsers as UsersIcon
} from 'react-icons/fa';
import { 
  BarChart2,
  Users,
  Cpu,
  Target,
  TrendingUp,
  Globe,
  Layers,
  BookOpen,
  FileText,
  ShieldCheck,
  Award,
  Lightbulb,

} from 'lucide-react';

const AboutSection = () => {
  const values = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Integrity", description: "We uphold honesty, transparency, and ethical standards in all engagements." },
    { icon: <Award className="w-6 h-6" />, title: "Excellence", description: "We maintain high standards of quality, clarity, and professionalism." },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation", description: "We embrace new tools, ideas, and methods to improve decision-making." },
    { icon: <Target className="w-6 h-6" />, title: "Impact", description: "We prioritize solutions that lead to measurable, meaningful change." },
    { icon: <UsersIcon className="w-6 h-6" />, title: "Collaboration", description: "We believe the best outcomes emerge through partnership and mutual respect." }
  ];

  const approachItems = [
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Rigorous Research Methodology",
      description: "We apply globally recognized qualitative, quantitative, and mixed methods approaches. Surveys, interviews, focus groups, experiments, and advanced statistical models are carefully designed to ensure credibility, reliability, and validity."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human-Centered Insight",
      description: "We look beyond numbers to understand people—their motivations, constraints, perceptions, and experiences. Our work is grounded in context, culture, and lived reality, ensuring insights are not only accurate but also empathetic and practical."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Technology-Enabled Analytics",
      description: "We use modern tools such as data visualization, predictive modeling, machine learning, and interactive dashboards to reveal patterns and trends that might otherwise remain hidden. These tools make complex insights accessible and actionable."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategy & Implementation Focus",
      description: "We don't stop at reporting findings. We co-create strategies, action plans, and decision frameworks that help clients use insights to improve performance, design better programs, refine products, and allocate resources more effectively."
    }
  ];

  const futureInitiatives = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "AI & Predictive Analytics",
      description: "Developing AI-powered and predictive analytics tools that anticipate trends and support proactive decision-making.",
      highlight: "Developing AI-powered and predictive analytics tools"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Regional Expansion",
      description: "Expanding our presence across West, East, and Southern Africa through strategic partnerships and regional project hubs.",
      highlight: "Expanding across West, East, and Southern Africa"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Insights Platform",
      description: "Launching the Midak Insights Platform, a digital space where clients can access dashboards, visualizations, and curated reports in real time.",
      highlight: "Launching the Midak Insights Platform for real-time dashboards"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Insight Labs",
      description: "Establishing Midak Insight Labs, a dedicated unit for innovative research on socio-economic development, markets, governance, and technology adoption.",
      highlight: "Establishing Midak Insight Labs for innovative research"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Midak Academy",
      description: "Creating the Midak Academy to build capacity among students, professionals, and organizations in research methods, data analytics, and evidence-based strategy.",
      highlight: "Creating the Midak Academy for capacity building"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Flagship Reports",
      description: "Producing in-depth, data-driven reports that inform policy decisions and investment strategies, shaping the future of key industries and communities.",
      highlight: "Producing flagship reports that inform policy and investment change"
    }
  ];

  return (
    <div className="text-[#111111] text-left">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-cover bg-center pt-28" style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80\')' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              About Midak
            </h1>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-white">
                Midak Research & Analytics Ltd is a modern research, analytics, and strategy consultancy dedicated to turning data into intelligent action. In a rapidly changing world, we help organizations navigate complexity with clarity—enabling leaders to make evidence-based decisions with confidence and foresight.
              </p>
              <p className="text-xl leading-relaxed text-white">
                We partner with businesses, NGOs, development organizations, startups, and public institutions to deliver insights that matter. By combining rigorous research with strategic thinking, Midak helps clients move deliberately toward the futures they want to create.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-gray-800 text-left">
              In a rapidly changing world, organizations succeed when decisions are guided by evidence, insight, and foresight. Midak exists to provide that clarity. We partner with businesses, NGOs, development organizations, startups, and public institutions to generate insights that inform better decisions and create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-gray-700">
                Midak is a knowledge-driven consultancy built on three pillars: intelligence, insight, and integrity. Our multidisciplinary team of researchers, analysts, strategists, and technologists combines academic rigor with practical strategy to deliver clear, actionable recommendations grounded in real-world relevance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Approach</h2>
            <div className="space-y-6 mb-12">
              <p className="text-xl leading-relaxed text-gray-700">
                Our approach is designed to move clients from questions to answers, and from answers to action through an integrated process that combines rigorous methods, modern technology, and strategic thinking.
              </p>
              <ul className="space-y-4 pl-5 list-disc text-gray-700">
                <motion.li 
                  className="pl-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <span className="font-medium">Rigorous Research Methodology:</span> We apply globally recognized qualitative, quantitative, and mixed methods approaches. Surveys, interviews, focus groups, experiments, and advanced statistical models are carefully designed to ensure credibility, reliability, and validity.
                </motion.li>
                <motion.li 
                  className="pl-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <span className="font-medium">Human-Centered Insight:</span> We look beyond numbers to understand people—their motivations, constraints, perceptions, and experiences. Our work is grounded in context, culture, and lived reality, ensuring insights are not only accurate but also empathetic and practical.
                </motion.li>
                <motion.li 
                  className="pl-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <span className="font-medium">Technology-Enabled Analytics:</span> We use modern tools such as data visualization, predictive modeling, machine learning, and interactive dashboards to reveal patterns and trends that might otherwise remain hidden.
                </motion.li>
                <motion.li 
                  className="pl-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <span className="font-medium">Strategy & Implementation Focus:</span> We don't stop at reporting findings. We co-create strategies, action plans, and decision frameworks that help clients use insights to improve performance, design better programs, refine products, and allocate resources more effectively.
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      
      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <div className="space-y-6 mb-12">
              <p className="text-xl leading-relaxed text-gray-700">
                We measure our success by the value our work creates for clients and the communities they serve. Midak's projects are designed not just to generate knowledge, but to support real change whether that means entering a new market, improving service delivery, refining a social program, or informing a policy decision.
              </p>
              <ul className="space-y-4 pl-5 list-disc text-gray-700">
                <li className="pl-2">
                  <span className="font-medium">Businesses</span> gain a clearer understanding of their markets, customers, and competitive landscape, enabling them to grow sustainably and strategically.
                </li>
                <li className="pl-2">
                  <span className="font-medium">NGOs and development partners</span> strengthen their program designs, monitoring systems, and evaluation frameworks, leading to more effective and accountable interventions.
                </li>
                <li className="pl-2">
                  <span className="font-medium">Government agencies and public institutions</span> receive evidence that supports policy formulation, budgeting decisions, and service improvements.
                </li>
                <li className="pl-2">
                  <span className="font-medium">Startups and entrepreneurs</span> access market intelligence and feasibility insights that help them refine their ideas, de-risk investments, and attract partners or investors.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Looking Ahead Section
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Looking Ahead</h2>
            <p className="text-lg text-gray-700 mb-12 text-left">
              Midak is building a future-ready platform for insight and decision-making by:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { 
                  title: "AI & Predictive Analytics",
                  description: "Developing AI-powered and predictive analytics tools"
                },
                { 
                  title: "Regional Expansion",
                  description: "Expanding across West, East, and Southern Africa"
                },
                { 
                  title: "Insights Platform",
                  description: "Launching the Midak Insights Platform for real-time dashboards"
                },
                { 
                  title: "Insight Labs",
                  description: "Establishing Midak Insight Labs for innovative research"
                },
                { 
                  title: "Midak Academy",
                  description: "Creating the Midak Academy for capacity building"
                },
                { 
                  title: "Flagship Reports",
                  description: "Producing flagship reports that inform policy and investment"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-[#800020] transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-[#800020] mb-2 group-hover:text-[#6b001c]">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-700">
              Our values guide how we work, how we partner with clients, and how we create impact.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-f5f5f5 p-8 rounded-lghover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-[#800020] mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
