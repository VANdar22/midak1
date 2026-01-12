import React from 'react';
import { accentColors } from '../constants/colors';

const Privacy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Contact details you provide when booking consultations or subscribing to updates.',
        'Project information shared during onboarding and discovery sessions.',
        'Usage data from analytics tools that help us understand how visitors interact with our site.',
      ],
    },
    {
      title: 'How We Use Information',
      content: [
        'Deliver consulting engagements and respond to inquiries.',
        'Improve our digital experiences and protect against fraud.',
        'Send research insights and service updates, when permitted.',
      ],
    },
    {
      title: 'Your Choices',
      content: [
        'Request copies of your data or ask us to delete it by emailing info@midakresearch.com.',
        'Unsubscribe from marketing emails at any time via the link in each message.',
        'Adjust cookie preferences in your browser or via our onsite controls.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24" style={{ fontFamily: "'League Spartan', sans-serif" }}>
      <div className="w-full max-w-4xl mx-auto px-4 pb-12 space-y-8">
        <header>
          <p className={`text-sm tracking-wide uppercase text-[${accentColors.DEFAULT}] font-semibold`} style={{ fontFamily: "'League Spartan', sans-serif" }}>Privacy</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6" style={{ fontFamily: "'League Spartan', sans-serif" }}>Privacy Policy</h1>
          <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>{section.title}</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-3 text-lg" style={{ fontFamily: "'League Spartan', sans-serif" }}>
              {section.content.map((item) => (
                <li key={item} className="leading-relaxed" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-12 mb-6" style={{ fontFamily: "'League Spartan', sans-serif" }}>Contact Us</h2>
          <p className="text-base text-gray-600 leading-relaxed" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            Have questions? Contact us at{' '}
            <a href="mailto:info@midakresearch.com" className="text-blue-600 hover:underline" style={{ fontFamily: "'League Spartan', sans-serif" }}>
              info@midakresearch.com
            </a>
          </p>
        </section>

        <footer className="pt-6 border-t border-gray-100 text-base text-gray-500 mt-12" style={{ fontFamily: "'League Spartan', sans-serif" }}>
          Last updated: November 18, 2025
        </footer>
      </div>
    </div>
  );
};

export default Privacy;

