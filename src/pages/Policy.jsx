import React from 'react';

const Policy = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="w-full max-w-4xl mx-auto px-4 pb-12 space-y-8">
          <header>
            <p className="text-sm tracking-wide uppercase text-[#6f35c8] font-semibold">Legal</p>
            <h1 className="text-4xl font-bold text-gray-900 mt-2">Privacy Policy</h1>
            <p className="text-gray-600 mt-3">
              We are committed to protecting your personal information and being transparent about how we use it.
            </p>
          </header>
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">1. Introduction</h2>
            <p className="text-gray-600">
              Welcome to our Privacy Policy page. This document outlines how we collect, use, and protect your personal information when you use our website.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">2. Information We Collect</h2>
            <p className="text-gray-600 mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Personal information (name, email, etc.) provided by you</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">3. How We Use Your Information</h2>
            <p className="text-gray-600">
              We use the collected information to provide and improve our services, communicate with you, and ensure the security of our website.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">4. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">5. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>
          
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">Last updated: November 14, 2023</p>
          </div>
      </div>
    </div>
  );
};

export default Policy;
