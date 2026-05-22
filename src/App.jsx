import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import VoxelBuild from './components/VoxelBuild.jsx';
import Modes from './components/Modes.jsx';
import DiscordSocials from './components/DiscordSocials.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen text-bone">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:bg-gold focus:text-ink"
      >
        Przejdź do treści
      </a>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <VoxelBuild />
        <Modes />
        <DiscordSocials />
      </main>
      <Footer />
    </div>
  );
}
