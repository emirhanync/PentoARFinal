import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#resources', label: 'Resources' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Bolt.ai
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}