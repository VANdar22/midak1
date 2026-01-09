import React from 'react';
import { FiBarChart2, FiUsers, FiCpu, FiTarget } from 'react-icons/fi';

const Approach = () => {
  const sections = [
    {
      title: 'Discovery & Alignment',
      body: 'We start by understanding your goals, constraints, and audiences. Workshops and stakeholder interviews help us align on the right research questions and success metrics.',
    },
    {
      title: 'Research Design',
      body: 'Our team pairs qualitative and quantitative methods, selecting the right blend of surveys, fieldwork, and desk research to produce reliable, context-aware insights.',
    },
    {
      title: 'Analysis & Modeling',
      body: 'We turn raw data into stories and models. Exploratory data analysis, forecasting, and scenario modeling reveal the levers that matter most to your strategy.',
    },
    {
      title: 'Delivery & Enablement',
      body: 'Findings arrive as actionable playbooks—dashboards, executive briefs, and working sessions that equip your team to move quickly and confidently.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4eff4] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <p className="text-sm uppercase tracking-wide text-[#6f35c8] font-semibold">
            Our Approach
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            A collaborative, insight-led process
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Every project follows the same principles: clarity, rigor, and measurable impact.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>

        {/* Our Approach Section */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <p className="text-lg text-gray-600">
              Our approach is designed to move clients from questions to answers, and from answers to action through an integrated process that combines rigorous methods, modern technology, and strategic thinking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <FiBarChart2 className="w-6 h-6 text-[#6f35c8]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rigorous Research Methodology</h3>
              <p className="text-gray-600">
                We apply globally recognized qualitative, quantitative, and mixed methods approaches. Surveys, interviews, focus groups, experiments, and advanced statistical models are carefully designed to ensure credibility, reliability, and validity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <FiUsers className="w-6 h-6 text-[#6f35c8]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Human-Centered Insight</h3>
              <p className="text-gray-600">
                We look beyond numbers to understand people—their motivations, constraints, perceptions, and experiences. Our work is grounded in context, culture, and lived reality, ensuring insights are not only accurate but also empathetic and practical.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <FiCpu className="w-6 h-6 text-[#6f35c8]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technology-Enabled Analytics</h3>
              <p className="text-gray-600">
                We use modern tools such as data visualization, predictive modeling, machine learning, and interactive dashboards to reveal patterns and trends that might otherwise remain hidden. These tools make complex insights accessible and actionable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <FiTarget className="w-6 h-6 text-[#6f35c8]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy & Implementation Focus</h3>
              <p className="text-gray-600">
                We don't stop at reporting findings. We co-create strategies, action plans, and decision frameworks that help clients use insights to improve performance, design better programs, refine products, and allocate resources more effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;

