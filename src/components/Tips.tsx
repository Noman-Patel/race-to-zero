import React from 'react';

const tips = [
  {
    title: 'Transportation',
    tips: [
      'Use public transport or carpool when possible',
      'Consider electric or hybrid vehicles',
      'Walk or bike for short distances'
    ]
  },
  {
    title: 'Food',
    tips: [
      'Reduce meat consumption',
      'Buy local and seasonal produce',
      'Minimize food waste'
    ]
  },
  {
    title: 'Energy',
    tips: [
      'Switch to renewable energy providers',
      'Use energy-efficient appliances',
      'Turn off lights and electronics when not in use'
    ]
  }
];

const resources = [
  {
    name: 'Carbon Footprint Calculator',
    url: 'https://www.carbonfootprint.com/calculator.aspx',
    description: 'Calculate your personal carbon footprint'
  },
  {
    name: 'Climate Action Resources',
    url: 'https://www.un.org/en/actnow',
    description: 'UN resources for climate action'
  }
];

const Tips: React.FC = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">Tips & Resources</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tips.map((category, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-6">Additional Resources</h3>
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <p className="font-medium text-green-700">{resource.name}</p>
                <p className="text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips; 