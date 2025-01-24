import React from 'react';
import { Building2, ShoppingBag, HeartPulse, Briefcase } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: 'AI for Finance',
    description: 'Advanced fraud detection and risk analysis solutions for financial institutions.',
    features: [
      'Real-time fraud detection',
      'Risk assessment automation',
      'Market trend analysis',
      'Regulatory compliance',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
  },
  {
    icon: HeartPulse,
    title: 'AI for Healthcare',
    description: 'Predictive diagnostics and patient insights for healthcare providers.',
    features: [
      'Disease prediction',
      'Patient data analysis',
      'Treatment optimization',
      'Resource management',
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
  },
  {
    icon: ShoppingBag,
    title: 'AI for Retail',
    description: 'Personalized recommendations and demand forecasting for retailers.',
    features: [
      'Customer segmentation',
      'Inventory optimization',
      'Price optimization',
      'Demand prediction',
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
  },
  {
    icon: Briefcase,
    title: 'AI for Enterprise',
    description: 'End-to-end AI solutions for large-scale business operations.',
    features: [
      'Process automation',
      'Data analytics',
      'Decision support',
      'Resource planning',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored AI solutions for your industry's specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90" />
              </div>
              <div className="relative p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}