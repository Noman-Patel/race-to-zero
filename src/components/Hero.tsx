/**
 * Hero Component
 * 
 * The main landing section of the application that introduces the concept
 * of corporate carbon reduction. Features:
 * - Animated background with floating blobs
 * - Large, bold title
 * - Descriptive subtitle
 * - Call-to-action button
 * 
 * Uses Tailwind CSS for styling and custom animations defined in index.css
 */
import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollFade();

  return (
    // Main container with gradient background and overflow handling for animations
    <section 
      ref={ref}
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-white px-4 relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Animated background elements - three overlapping circles that move */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-green-200 rounded-full opacity-20 animate-blob"></div>
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-green-300 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-green-400 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-green-500 rounded-full opacity-20 animate-blob animation-delay-4000"></div>

      </div>

      {/* Content container with z-index to appear above background animations */}
      <div className="relative z-10 text-center">
        {/* Main title with fade-in animation */}
        <h1 className="text-7xl font-bold text-green-800 mb-6 animate-fade-in">
          Race to Zero
        </h1>
        {/* Subtitle with delayed fade-in animation */}
        <p className="text-2xl text-gray-600 mb-12 text-center max-w-2xl animate-fade-in-up">
          Cut your daily carbon footprint — one action at a time
        </p>
        {/* CTA button with hover effects and subtle bounce animation */}
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md animate-bounce-subtle">
          Start Cutting Carbon
        </button>
      </div>
    </section>
  );
};

export default Hero; 