import React from 'react';

const CTA = () => {
  return (
    <div className="w-full flex justify-center py-16 px-6">
      <div className="w-[800px] text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-3xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-3">
          Trusted by Millions
        </h2>

        <p className="text-sm opacity-90 mb-6">
          Unlock powerful tools to grow your business and reach more customers.
        </p>

        <button className="bg-white text-blue-700 text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
