import React from 'react';
import { FiTrendingUp, FiGlobe, FiLayers, FiCode, FiBookOpen } from 'react-icons/fi';

const Future = () => {
  const initiatives = [
    {
      icon: <FiTrendingUp className="w-6 h-6 text-[#6f35c8]" />,
      title: "AI-Powered Analytics",
      description: "Developing AI-powered and predictive analytics tools that anticipate trends and support proactive decision-making."
    },
    {
      icon: <FiGlobe className="w-6 h-6 text-[#6f35c8]" />,
      title: "Regional Expansion",
      description: "Expanding our presence across West, East, and Southern Africa through strategic partnerships and regional project hubs."
    },
    {
      icon: <FiLayers className="w-6 h-6 text-[#6f35c8]" />,
      title: "Midak Insights Platform",
      description: "Launching a digital space where clients can access dashboards, visualizations, and curated reports in real-time."
    },
    {
      icon: <FiCode className="w-6 h-6 text-[#6f35c8]" />,
      title: "Insight Labs",
      description: "Establishing a dedicated unit for innovative research on socio-economic development, markets, governance, and technology adoption."
    },
    {
      icon: <FiBookOpen className="w-6 h-6 text-[#6f35c8]" />,
      title: "Midak Academy",
      description: "Creating capacity-building programs for students, professionals, and organizations in research methods, data analytics, and evidence-based strategy."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4eff4] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-[#6f35c8] font-semibold mb-2">
            Our Vision
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Building the Next Generation of Insight
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Midak is intentionally designed as a future-facing firm. As data ecosystems expand and decision-making becomes more complex, we are investing in capabilities, partnerships, and platforms that will help our clients stay ahead of the curve.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                {initiative.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#6f35c8] to-[#9c4dff] rounded-2xl p-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Shaping the Future</h2>
            <p className="text-lg mb-8 text-purple-100">
              Interested in partnering with us or learning more about our future initiatives? Get in touch to explore collaboration opportunities.
            </p>
            <button className="bg-white text-[#6f35c8] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
