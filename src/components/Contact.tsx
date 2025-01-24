import React from 'react';
import { Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}