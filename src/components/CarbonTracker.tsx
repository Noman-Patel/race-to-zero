/**
 * CarbonTracker Component
 * 
 * Interactive component that allows tracking corporate carbon reduction initiatives.
 * Features:
 * - Dynamic carbon footprint counter
 * - Interactive initiative cards
 * - Progress bar visualization
 * - Confetti animation on completion
 * 
 * State Management:
 * - carbonFootprint: Current carbon footprint in tons
 * - completedActions: Array of selected initiative IDs
 * - showConfetti: Controls confetti animation visibility
 */
import React, { useState } from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

// Corporate sustainability initiatives with their impact metrics
const actions = [
  { 
    id: 1, 
    name: '🚌 Green Commuting Program', 
    reduction: 20, 
    emoji: '🚌',
    description: 'Incentivize biking, public transport, or carpooling',
    target: '25% employee participation by 2025'
  },
  { 
    id: 2, 
    name: '💡 Office Energy Optimization', 
    reduction: 25, 
    emoji: '💡',
    description: 'LED lighting and smart energy systems',
    target: '30-40% reduction in electricity usage'
  },
  { 
    id: 3, 
    name: '🌳 Company Reforestation', 
    reduction: 30, 
    emoji: '🌳',
    description: 'Plant trees for milestones and achievements',
    target: '100,000 trees by December 2025'
  },
  { 
    id: 4, 
    name: '🍴 Sustainable Cafeteria', 
    reduction: 15, 
    emoji: '🍴',
    description: 'Promote plant-based meals and reduce food waste',
    target: '20% reduction in meat consumption'
  },
  { 
    id: 5, 
    name: '♻️ Waste Reduction', 
    reduction: 18, 
    emoji: '♻️',
    description: 'Go paperless and reduce single-use plastics',
    target: '70% recycling rate, 30% less landfill waste'
  },
  { 
    id: 6, 
    name: '📦 Sustainable Supply Chain', 
    reduction: 25, 
    emoji: '📦',
    description: 'Evaluate vendors on environmental practices',
    target: '70% of vendors meet sustainability criteria'
  },
  { 
    id: 7, 
    name: '🧪 Carbon Literacy', 
    reduction: 12, 
    emoji: '🧪',
    description: 'Internal training and awareness programs',
    target: '80% employee completion rate'
  },
  { 
    id: 8, 
    name: '📊 Public Dashboard', 
    reduction: 8, 
    emoji: '📊',
    description: 'Track and display sustainability progress',
    target: 'Real-time carbon reduction tracking'
  }
];

const CarbonTracker: React.FC = () => {
  const { ref, isVisible } = useScrollFade();
  const [carbonFootprint, setCarbonFootprint] = useState(153); // Starting carbon footprint in tons
  const [completedActions, setCompletedActions] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  /**
   * Handles the selection/deselection of initiatives
   * @param id - Initiative ID
   * @param reduction - Carbon reduction value in tons
   */
  const handleAction = (id: number, reduction: number) => {
    const isSelected = completedActions.includes(id);
    
    if (isSelected) {
      // Deselect initiative - add back the carbon footprint
      setCarbonFootprint(prev => {
        const newValue = prev + reduction;
        if (newValue > 0) {
          setShowConfetti(false);
        }
        return newValue;
      });
      setCompletedActions(prev => prev.filter(actionId => actionId !== id));
    } else {
      // Select initiative - reduce carbon footprint
      setCarbonFootprint(prev => {
        const newValue = Math.max(0, prev - reduction);
        if (newValue === 0) {
          setShowConfetti(true);
        }
        return newValue;
      });
      setCompletedActions(prev => [...prev, id]);
    }
  };

  return (
    <section 
      ref={ref}
      className={`py-20 bg-gradient-to-b from-green-50 to-white px-4 relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <h2 className="text-5xl font-bold text-green-800 mb-12 text-center transform hover:scale-105 transition-transform duration-300">
          Corporate Carbon Tracker
        </h2>
        
        {/* Carbon footprint counter with progress bar */}
        <div className="text-center mb-12 relative">
          <div className="inline-block">
            <div className="text-8xl font-bold text-green-600 mb-4 transform transition-all duration-500">
              {carbonFootprint}
            </div>
            {/* Progress bar showing remaining carbon footprint */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-green-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-600 transition-all duration-1000"
                style={{ width: `${(carbonFootprint / 153) * 100}%` }}
              ></div>
            </div>
          </div>
          <p className="text-xl text-gray-600 mt-8">tons CO₂ remaining</p>
        </div>

        {/* Grid of initiative cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {actions.map(action => {
            const isSelected = completedActions.includes(action.id);
            return (
              <button
                key={action.id}
                onClick={() => handleAction(action.id, action.reduction)}
                className={`p-6 rounded-xl text-left flex items-start gap-4 transition-all duration-300 transform hover:scale-105 ${
                  isSelected
                    ? 'bg-green-100 text-green-800 border-2 border-green-500'
                    : 'bg-white hover:bg-green-50 text-gray-800 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Initiative emoji */}
                <span className="text-4xl mt-1">{action.emoji}</span>
                {/* Initiative details */}
                <div className="flex-1">
                  <p className="font-medium text-lg mb-1">{action.name}</p>
                  <p className="text-sm text-gray-600 mb-2">{action.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-green-600 font-bold">
                      {isSelected ? `+${action.reduction}` : `-${action.reduction}`} tons CO₂
                    </p>
                    <p className="text-xs text-gray-500">{action.target}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Success message with confetti animation */}
        {carbonFootprint === 0 && (
          <div className="mt-12 text-center animate-fade-in">
            <p className="text-3xl font-bold text-green-600 mb-4">🎉 Congratulations!</p>
            <p className="text-xl text-gray-600">Your company has reached carbon neutrality! Share this achievement with stakeholders.</p>
            {showConfetti && (
              <div className="fixed inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-green-500 rounded-full animate-confetti"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CarbonTracker; 