import React from 'react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import CombinedExperience from './components/CombinedExperience';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <ProductShowcase />
      <CombinedExperience />
      <SiteFooter />
    </div>
  );
}

export default App;
