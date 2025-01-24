import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Solutions } from './components/Solutions';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Resources } from './components/Resources';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat opacity-[0.03]" />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Solutions />
          <Testimonials />
          <Pricing />
          <Resources />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;