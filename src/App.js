import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Analysis from './components/Analysis';
import Explore from './components/Explore';
import Learn from './components/Learn';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Analysis />
      <Explore />
      <Learn />
      <Contact />
    </div>
  );
};

export default App;
