import React from 'react';
import { Cuboid as Cube, Puzzle, Smartphone, Brain } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            About PentoAR
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            PentoAR is a revolutionary augmented reality puzzle game that combines classic pentomino challenges with cutting-edge AR technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Cube,
              title: '3D Puzzles',
              description: 'Solve intricate 3D puzzles in augmented reality',
            },
            {
              icon: Puzzle,
              title: 'Multiple Modes',
              description: 'Choose from various game modes and difficulty levels',
            },
            {
              icon: Smartphone,
              title: 'AR Technology',
              description: 'Experience seamless AR integration on your device',
            },
            {
              icon: Brain,
              title: 'Brain Training',
              description: 'Enhance spatial awareness and problem-solving skills',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-cyan-400/10 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}