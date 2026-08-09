import React from 'react';
import { Wrench, AlertTriangle, Bug, CheckCircle2, Lightbulb } from 'lucide-react';
import { PROBLEM_SOLUTIONS } from '../data/portfolioData';

export const ProblemSolving: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#080812]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 rounded-xl bg-violet-500/20 text-violet-400 border border-violet-500/30 icon-continuous-pulse">
            <Wrench className="w-5 h-5 icon-continuous-wiggle" />
          </span>
          <h2 className="section-title text-gradient">MUAMMO → YECHIM</h2>
        </div>
        <p className="section-subtitle">
          Ishlab chiqish davomida duch kelingan real texnik muammolar va ularni professional bartaraf etish bosqichlari (Problem ➔ Debug ➔ Solution ➔ Lesson)
        </p>

        {/* Problem Solving Cards Grid */}
        <div className="space-y-6">
          {PROBLEM_SOLUTIONS.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 border-purple-500/30 hover:border-pink-500/40 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 border-b border-purple-500/20 pb-4">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-pink-950/80 border border-pink-500/40 text-pink-400 icon-continuous-pulse">
                    <AlertTriangle className="w-5 h-5 icon-continuous-wiggle" />
                  </span>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 text-[10px] font-mono border border-purple-500/30">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">{item.title}</h3>
                  </div>
                </div>
              </div>

              {/* 4-Step Pipeline */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                
                {/* 1. PROBLEM */}
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 space-y-1">
                  <span className="font-mono font-bold text-red-400 flex items-center gap-1.5 uppercase text-[11px]">
                    <AlertTriangle className="w-3.5 h-3.5 icon-continuous-pulse" /> 1. Problem
                  </span>
                  <p className="text-slate-300 leading-relaxed">{item.problem}</p>
                </div>

                {/* 2. DEBUG */}
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-1">
                  <span className="font-mono font-bold text-amber-400 flex items-center gap-1.5 uppercase text-[11px]">
                    <Bug className="w-3.5 h-3.5 icon-continuous-wiggle" /> 2. Debugging
                  </span>
                  <p className="text-slate-300 leading-relaxed">{item.debug}</p>
                </div>

                {/* 3. SOLUTION */}
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                  <span className="font-mono font-bold text-emerald-400 flex items-center gap-1.5 uppercase text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 icon-continuous-pulse" /> 3. Solution
                  </span>
                  <p className="text-slate-300 leading-relaxed">{item.solution}</p>
                </div>

                {/* 4. LESSON */}
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-1">
                  <span className="font-mono font-bold text-purple-300 flex items-center gap-1.5 uppercase text-[11px]">
                    <Lightbulb className="w-3.5 h-3.5 text-pink-400 icon-continuous-bounce" /> 4. What I Learned
                  </span>
                  <p className="text-slate-300 leading-relaxed">{item.lesson}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
