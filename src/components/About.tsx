import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollFade();

  return (
    <section 
      ref={ref}
      className={`py-20 bg-white px-4 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-green-800 mb-12 text-center transform hover:scale-105 transition-transform duration-300">
          Why Race to Zero?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-green-50 p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:bg-green-100">
            <p className="text-4xl font-bold text-green-600 mb-4">16.5</p>
            <p className="text-gray-600">kg CO₂ emitted per person daily</p>
          </div>
          <div className="bg-green-50 p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:bg-green-100">
            <p className="text-4xl font-bold text-green-600 mb-4">60%</p>
            <p className="text-gray-600">from transportation and food</p>
          </div>
          <div className="bg-green-50 p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:bg-green-100">
            <p className="text-4xl font-bold text-green-600 mb-4">2.5</p>
            <p className="text-gray-600">tons CO₂ saved per year with small changes</p>
          </div>
        </div>
        <p className="text-2xl text-gray-600 text-center italic transform hover:scale-105 transition-transform duration-300">
          "We can't do everything. But we can all do something."
        </p>
      </div>
    </section>
  );
};

export default About; 