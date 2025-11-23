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
    <div className="min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-4 py-16 space-y-8">
        <header>
          <p className={`text-sm tracking-wide uppercase text-[${accentColors.DEFAULT}] font-semibold`}>Privacy</p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Privacy Policy</h1>
          <p className="text-gray-600 mt-3">
            We are committed to protecting your personal information and being transparent about how we use it.
          </p>
        </header>

        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              {section.content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
          <p className="text-gray-600">
            Email <a href="mailto:info@midakresearch.com" className={`text-[${accentColors.DEFAULT}] underline`}>info@midakresearch.com</a> if you have any questions about this policy or would like to exercise your privacy rights.
          </p>
        </section>

        <footer className="pt-4 border-t border-gray-100 text-sm text-gray-500">
          Last updated: November 18, 2025
        </footer>
      </div>
    </div>
  );
};

export default Privacy;

