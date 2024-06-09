import React from 'react';
import underwaterVideo from '../assets/underwater.mp4'; 

const Home = () => {
  return (
    <section id="home" className="relative h-screen">
      <video className="absolute top-0 left-0 w-full h-full object-cover" src={underwaterVideo} autoPlay loop muted />
      <div className="relative z-20 flex flex-col items-center justify-center h-full bg-Blue1 bg-opacity-60 p-10">
        <h1 className="text-7xl text-white animate-pulse font-poppins text-center mb-2">
        Discover. Protect. Innovate.
        </h1>
        <h2 className="text-2xl text-white lg:w-1/2 font-sans text-left">
          Dive into the future with our cutting-edge technology that identifies marine species and harmful debris while ensuring diver safety through real-time gesture recognition. Discover new underwater worlds, protect our oceans, and enhance diver communication. 
        </h2>
      </div>
    </section>
  );
};

export default Home;
