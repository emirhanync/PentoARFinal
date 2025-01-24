import React from 'react';
import { Star, Users, ArrowRight } from 'lucide-react';

const trendingGames = [
  {
    title: 'Neon Hunters',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80',
    rating: 4.9,
    players: '1.2M+',
    genre: 'Action',
  },
  {
    title: 'Medieval Quest',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80',
    rating: 4.7,
    players: '950K+',
    genre: 'RPG',
  },
  {
    title: 'Future Racing',
    image: 'https://images.unsplash.com/photo-1548484352-ea579e5233a8?auto=format&fit=crop&q=80',
    rating: 4.8,
    players: '800K+',
    genre: 'Racing',
  },
  {
    title: 'Cosmic Wars',
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80',
    rating: 4.6,
    players: '1.5M+',
    genre: 'Strategy',
  },
];

export function TrendingGames() {
  return (
    <section id="trending" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Trending Games</h2>
          <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingGames.map((game, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {game.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                    {game.genre}
                  </span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm">{game.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="h-4 w-4" />
                      <span className="ml-1 text-sm">{game.players}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}