/**
 * Main App Component
 * 
 * This is the root component that composes the entire application.
 * It organizes the layout of different sections in a vertical stack:
 * 1. Hero - The main landing section with the title and primary CTA
 * 2. About - Statistics and information about carbon reduction
 * 3. CarbonTracker - Interactive component for tracking corporate carbon initiatives
 * 4. Tips - Resources and additional information for sustainability
 * 5. Footer - Copyright and attribution information
 */
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import CarbonTracker from './components/CarbonTracker';
import Tips from './components/Tips';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <CarbonTracker />
      <Tips />
      <Footer />
    </div>
  );
}

export default App;
