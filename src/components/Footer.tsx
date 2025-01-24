import React from 'react';
import { Facebook, Twitter, Instagram, Github, Cuboid as Cube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-md border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Cube className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                PentoAR
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Experience the future of puzzle gaming with our innovative AR technology. Challenge yourself and explore new dimensions of gameplay.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#download" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} PentoAR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}