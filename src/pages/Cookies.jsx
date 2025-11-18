import React from 'react';

const Cookies = () => {
  const table = [
    { name: 'Essential', purpose: 'Required for security, authentication, and basic navigation.', duration: 'Session' },
    { name: 'Analytics', purpose: 'Help us understand how visitors interact with the site.', duration: '14 months' },
    { name: 'Preferences', purpose: 'Remember language and layout choices.', duration: '12 months' },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="w-full max-w-4xl mx-auto px-4 pb-12 space-y-8">
        <header>
          <p className="text-sm tracking-wide uppercase text-[#6f35c8] font-semibold">Cookies</p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Cookie Policy</h1>
          <p className="text-gray-600 mt-3">
            This policy explains how we use cookies and similar technologies to provide, protect, and improve our services.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">What are cookies?</h2>
          <p className="text-gray-600 leading-relaxed">
            Cookies are small text files placed on your device to store data that can be recalled by a web server. They
            are widely used to make websites work or operate more efficiently.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">How we use cookies</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We categorize cookies by their purpose. You can control or delete cookies through your browser settings, but
            disabling essential cookies may impact core functionality.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-100 rounded-xl overflow-hidden text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-gray-600 font-semibold">Type</th>
                  <th className="px-4 py-3 text-gray-600 font-semibold">Purpose</th>
                  <th className="px-4 py-3 text-gray-600 font-semibold">Retention</th>
                </tr>
              </thead>
              <tbody>
                {table.map((row) => (
                  <tr key={row.name} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.name}</td>
                    <td className="px-4 py-3 text-gray-600">{row.purpose}</td>
                    <td className="px-4 py-3 text-gray-500">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="pt-4 border-t border-gray-100 text-sm text-gray-500">
          Last updated: November 18, 2025
        </footer>
      </div>
    </div>
  );
};

export default Cookies;

