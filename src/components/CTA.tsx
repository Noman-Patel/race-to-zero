import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-green-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-8">Ready to Make a Difference?</h2>
        <p className="text-xl text-gray-600 mb-12">
          Share your progress and inspire others to join the race to zero!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Start Over
          </button>
          <button className="bg-white hover:bg-green-100 text-green-700 font-bold py-3 px-8 rounded-full text-lg transition-colors border-2 border-green-600">
            Challenge a Friend
          </button>
        </div>

        <div className="mt-12">
          <p className="text-gray-600 mb-4">Download your achievement badge:</p>
          <button className="bg-white hover:bg-green-100 text-green-700 font-bold py-3 px-8 rounded-full text-lg transition-colors border-2 border-green-600">
            "I Cut 100kg Today" Badge
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA; 