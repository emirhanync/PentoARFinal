import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    caption: 'AR Puzzle Solving',
  },
  {
    url: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80',
    caption: 'Interactive Gameplay',
  },
  {
    url: 'https://images.unsplash.com/photo-1596994836772-06384ca1f45f?auto=format&fit=crop&q=80',
    caption: 'Immersive Experience',
  },
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((current) => (current + 1) % images.length);
  const prev = () => setCurrentIndex((current) => (current - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Gallery
          </h2>
          <p className="text-xl text-gray-300">
            Experience the magic of PentoAR through our gallery
          </p>
        </div>

        <div className="relative group">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <p className="text-xl text-white text-center">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-400'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}