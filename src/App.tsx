import React, { useState } from 'react';
import { IntroLoader } from './components/IntroLoader';
import { GlobalBackground3D } from './components/3d/GlobalBackground3D';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { JourneyTimeline } from './components/JourneyTimeline';
import { Technologies } from './components/Technologies';
import { GithubShowcase } from './components/GithubShowcase';
import { ProblemSolving } from './components/ProblemSolving';
import { LearningJourney } from './components/LearningJourney';
import { CurrentLevel } from './components/CurrentLevel';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#060611] text-slate-100 font-main selection:bg-purple-500/30 selection:text-white overflow-x-hidden">
      
      {/* Cyberpunk Fast Entrance Loader Animation */}
      {loading && <IntroLoader onComplete={() => setLoading(false)} />}

      {/* 3D Interactive WebGL Background Canvas */}
      <GlobalBackground3D />

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <AboutMe />
          <JourneyTimeline />
          <Technologies />
          <GithubShowcase />
          <ProblemSolving />
          <LearningJourney />
          <CurrentLevel />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
