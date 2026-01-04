import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Seminars } from './components/Seminars';
import { HowItWorks } from './components/HowItWorks';
import { ApplyForm } from './components/ApplyForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-[#e8eef6] selection:bg-sky-500/30 font-sans">
      {/* Global Grain/Noise or overlay if desired, keeping simple for now */}
      
      <Header />
      
      <main className="max-w-[1120px] mx-auto px-5">
        <Hero />
        <Features />
        <Pricing />
        <Seminars />
        <HowItWorks />
        <ApplyForm />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;