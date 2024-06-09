import React from 'react';
import analysisImage from '../assets/analysis.jpeg'; 

const Analysis = () => {
  return (
    <section id="analysis" className="min-h-screen p-10 bg-Blue2 text-white">
      <h2 className="text-4xl font-poppins mb-5">Analysis</h2>
      <div className="w-full">
        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*VdKk0F4krrJ2wPn1RGDt3w.png" alt="Analysis" className="w-full rounded-lg shadow-lg"/>
      </div>
    </section>
  );
};

export default Analysis;
