import React from 'react';
import { GitCommit, CheckCircle2 } from 'lucide-react';
import { JOURNEY_STEPS } from '../data/portfolioData';
import { TimelineScene3D } from './3d/TimelineScene3D';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="tajriba" className="relative py-20 bg-[#101022]/60 bg-grid-pattern overflow-hidden">
      
      {/* Embedded 3D Scene Animation */}
      <TimelineScene3D />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 icon-continuous-pulse">
            <GitCommit className="w-5 h-5 icon-continuous-spin" />
          </span>
          <h2 className="section-title text-gradient">TAJRIBA & TA'LIM TIMELINE</h2>
        </div>
        <p className="section-subtitle">
          1 yillik rivojlanish bosqichlari: Dasturlash asoslaridan to Full-Stack proyektlargacha
        </p>

        {/* Timeline Desktop & Mobile Grid */}
        <div className="relative pt-6">
          
          {/* Vertical Glowing Energy Spine Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-1 -translate-x-1/2 bg-gradient-to-b from-purple-600 via-pink-500 to-blue-600 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]" />

          <div className="space-y-8 lg:space-y-12">
            {JOURNEY_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Left/Right Content Glass Card */}
                  <div className="w-full lg:w-1/2 px-0 lg:px-8">
                    <div className="glass-card p-6 border-purple-500/30 hover:border-pink-500/50 relative group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
                          Step 0{step.step}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 icon-continuous-pulse" />
                          <span>O'zlashtirilgan</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-purple-500/20">
                        {step.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 text-[11px] font-mono border border-purple-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node Glowing Sphere */}
                  <div className="my-4 lg:my-0 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-[#080812] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.6)] group hover:scale-110 transition-transform">
                      <span className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-400 to-pink-500 animate-pulse" />
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Symmetry */}
                  <div className="hidden lg:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
