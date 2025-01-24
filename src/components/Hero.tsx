import React from 'react';
import { ArrowRight, Brain, Sparkles, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Powered by Advanced AI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text leading-tight">
              Accelerate Your Business with AI-Powered Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Automate processes, gain actionable insights, and make smarter decisions with our cutting-edge AI platform. Transform your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Watch Demo
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
              {[
                { label: 'Active Users', value: '10K+' },
                { label: 'Data Processed', value: '1B+' },
                { label: 'Success Rate', value: '99.9%' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
              <div className="relative z-10 h-full rounded-2xl bg-white shadow-2xl shadow-blue-500/10 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
                <div className="relative h-full p-6 flex flex-col">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">AI Analysis</h3>
                      <p className="text-sm text-gray-500">Real-time insights</p>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-gray-50 p-4 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}