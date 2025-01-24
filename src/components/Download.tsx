import React from 'react';

export function Download() {
  return (
    <section id="download" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative px-8 py-16 md:px-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Ready to Start Your AR Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Download PentoAR now and experience the future of puzzle gaming.
              Available on iOS and Android devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-black text-white hover:bg-gray-900 transition-colors duration-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-8"
                />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-black text-white hover:bg-gray-900 transition-colors duration-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}