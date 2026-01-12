import React from 'react';
import { accentColors } from '../constants/colors';

const Cookies = () => {
  const table = [
    { name: 'Essential', purpose: 'Required for security, authentication, and basic navigation.', duration: 'Session' },
    { name: 'Analytics', purpose: 'Help us understand how visitors interact with the site.', duration: '14 months' },
    { name: 'Preferences', purpose: 'Remember language and layout choices.', duration: '12 months' },
  ];

  return (
    <div className="min-h-screen bg-white pt-24" style={{ fontFamily: "'League Spartan', sans-serif" }}>
      <div className="w-full max-w-4xl mx-auto px-4 pb-12 space-y-8">
        <header>
          <p className={`text-sm tracking-wide uppercase text-[${accentColors.DEFAULT}] font-semibold`} style={{ fontFamily: "'League Spartan', sans-serif" }}>Cookies</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6" style={{ fontFamily: "'League Spartan', sans-serif" }}>Cookie Policy</h1>
          <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            This policy explains how we use cookies and similar technologies to provide, protect, and improve our services.
          </p>
        </header>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>What are cookies?</h2>
          <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            Cookies are small text files placed on your device to store data that can be recalled by a web server. They
            are widely used to make websites work or operate more efficiently.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>How we use cookies</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            We categorize cookies by their purpose. You can control or delete cookies through your browser settings, but
            disabling essential cookies may impact core functionality.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-100 rounded-xl overflow-hidden text-base" style={{ fontFamily: "'League Spartan', sans-serif" }}>
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-gray-600 font-semibold text-lg" style={{ fontFamily: "'League Spartan', sans-serif" }}>Type</th>
                  <th className="px-4 py-3 text-gray-600 font-semibold text-lg" style={{ fontFamily: "'League Spartan', sans-serif" }}>Purpose</th>
                  <th className="px-4 py-3 text-gray-600 font-semibold text-lg" style={{ fontFamily: "'League Spartan', sans-serif" }}>Retention</th>
                </tr>
              </thead>
              <tbody>
                {table.map((row) => (
                  <tr key={row.name} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900 text-base" style={{ fontFamily: "'League Spartan', sans-serif" }}>{row.name}</td>
                    <td className="px-4 py-3 text-gray-600 text-base" style={{ fontFamily: "'League Spartan', sans-serif" }}>{row.purpose}</td>
                    <td className="px-4 py-3 text-gray-500">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="pt-6 border-t border-gray-100 text-base text-gray-500 mt-12" style={{ fontFamily: "'League Spartan', sans-serif" }}>
          Last updated: November 18, 2025
        </footer>
      </div>
    </div>
  );
};

export default Cookies;

