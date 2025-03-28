import React from 'react';
import { Truck, Leaf, Heart, RefreshCw, Shield, Gift } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Free Shipping',
      description: 'On orders over $50'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Eco-Friendly',
      description: 'Sustainable materials'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Cruelty Free',
      description: 'Never tested on animals'
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Easy Returns',
      description: '30-day return policy'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Payment',
      description: 'Safe transactions'
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Gift Cards',
      description: 'Perfect for loved ones'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 text-[#1E293B]">
                {feature.icon}
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 