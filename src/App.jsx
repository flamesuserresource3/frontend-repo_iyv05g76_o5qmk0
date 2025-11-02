import React from 'react';
import Hero from './components/Hero';
import CodeEmbed from './components/CodeEmbed';
import TrustSignals from './components/TrustSignals';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#07090C] text-white">
      <Hero />
      <CodeEmbed />
      <TrustSignals />
      <CTASection />
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-gray-400 md:flex-row md:text-left">
          <div>
            <span className="font-semibold text-white">Vanish Auth</span> — passwordless authentication for developers.
          </div>
          <div className="flex items-center gap-5">
            <a href="#code" className="hover:text-white">Docs</a>
            <a href="#trust" className="hover:text-white">Security</a>
            <a href="#cta" className="hover:text-white">Early access</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
