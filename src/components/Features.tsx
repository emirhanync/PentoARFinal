import React from 'react';
import {
  Brain,
  BarChart3,
  Workflow,
  Shield,
  Zap,
  Settings,
  Users,
  Code,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced ML Algorithms',
    description: 'State-of-the-art machine learning models trained on diverse datasets.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Instant insights and analytics to drive informed decision-making.',
  },
  {
    icon: Code,
    title: 'Seamless API Integration',
    description: 'Easy integration with your existing systems and workflows.',
  },
  {
    icon: Settings,
    title: 'Customizable Models',
    description: 'Tailor AI models to your specific business needs and requirements.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance.',
  },
  {
    icon: Workflow,
    title: 'Automated Workflows',
    description: 'Streamline processes with intelligent automation solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration Tools',
    description: 'Built-in tools for team collaboration and project management.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Lightning-fast processing with optimized infrastructure.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your business with artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}