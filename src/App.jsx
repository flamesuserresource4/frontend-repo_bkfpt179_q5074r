import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Systems from './components/Systems';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Systems />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-xs text-white/60">
          © {new Date().getFullYear()} ForBrandFactory Pvt Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
