import React from 'react';
import learnImage from '../assets/learn.jpg'; 

const Learn = () => {
  return (
    <section id="learn" className="min-h-screen p-10 bg-Blue4 text-white">
      <h2 className="text-4xl mb-5 font:poppins">Learn</h2>
      <div className="flex flex-col lg:flex-row items-center">
        <img src={learnImage} alt="Learn" className="w-full lg:w-1/2 rounded-lg shadow-lg mb-5 lg:mb-0 lg:mr-5"/>
        <p className="lg:w-1/2 font-sans">Educational content about the marine world. Learn about marine biology, oceanography, and the importance of conservation...</p>
      </div>
    </section>
  );
};

export default Learn;
