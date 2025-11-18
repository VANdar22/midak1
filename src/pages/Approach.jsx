import React from 'react';

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
      </div>
    </div>
  );
};

export default Approach;

