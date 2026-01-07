import React from 'react';
import { accentColors } from '../constants/colors';

const sections = [
  {
    title: 'Acceptance of Terms',
    text: 'By accessing or using Midak Research Consult digital services, you agree to comply with these Terms of Service and all applicable laws.',
  },
  {
    title: 'Use of Services',
    text: 'You may not misuse our products, interfere with their normal operation, or attempt to access them using a method we do not support.',
  },
  {
    title: 'Intellectual Property',
    text: 'All content, trademarks, and assets remain the property of Midak Research Consult. You may not reproduce or distribute materials without written consent.',
  },
  {
    title: 'Liability',
    text: 'We provide services “as-is” and disclaim warranties to the fullest extent permitted by law. Our liability is limited to the amount you paid for the services.',
  },
];

const Terms = () => (
  <div className="min-h-screen bg-white pt-24" style={{ fontFamily: "'Montserrat', sans-serif" }}>
    <div className="w-full max-w-4xl mx-auto px-4 pb-12 space-y-8">
      <header>
        <p className={`text-sm tracking-wide uppercase text-[${accentColors.DEFAULT}] font-semibold`}>Terms</p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Terms of Service</h1>
        <p className="text-gray-600 mt-3">
          These terms outline the rules and conditions for using our website and consulting services.
        </p>
      </header>

      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.title}</h2>
          <p className="text-gray-600 leading-relaxed">{section.text}</p>
        </section>
      ))}

      <footer className="pt-4 border-t border-gray-100 text-sm text-gray-500">
        Last updated: November 18, 2025
      </footer>
    </div>
  </div>
);

export default Terms;

