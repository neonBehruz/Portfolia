import React from 'react';
import { Compass, Target, Code, CheckCircle2, Sparkles, Laptop } from 'lucide-react';

export const CurrentLevel: React.FC = () => {
  const myPath = [
    { year: "2023", text: "Dasturlash asoslari" },
    { year: "2023", text: "C# tilini o'rganish" },
    { year: "2023", text: ".NET va Web API" },
    { year: "2024", text: "Database & EF Core" },
    { year: "2024", text: "Frontend (HTML, CSS, JS)" },
    { year: "2024", text: "Full Stack Development" }
  ];

  const interests = [
    "Backend Development",
    "Web API va Microservices",
    "Database Design",
    "Clean Architecture",
    "Problem Solving",
    "UI/UX Design"
  ];

  const competencies = [
    { name: "Backend (C# .NET)", pct: 90, color: "from-purple-500 to-indigo-500" },
    { name: "Database (PostgreSQL)", pct: 85, color: "from-blue-500 to-sky-500" },
    { name: "Web API Development", pct: 90, color: "from-indigo-500 to-purple-500" },
    { name: "Frontend (React, JS, TS)", pct: 80, color: "from-cyan-500 to-blue-500" },
    { name: "Problem Solving & Debugging", pct: 95, color: "from-pink-500 to-purple-500" },
    { name: "UI/UX & Design", pct: 75, color: "from-violet-500 to-pink-500" }
  ];

  const futurePlans = [
    "Advanced .NET va Clean Architecture",
    "Docker, DevOps & CI/CD",
    "Cloud (AWS / Azure)",
    "Redis, RabbitMQ",
    "Katta real loyihalarda ishtirok etish"
  ];

  return (
    <section id="daraja" className="relative py-16 bg-[#060611]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Four-Column Grid Matching Reference Image Exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Column 1: MENING YO'LIM */}
          <div className="glass-card p-6 border-purple-500/30 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-purple-400 icon-continuous-pulse" />
                MENING YO'LIM
              </h3>

              <div className="space-y-3 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-purple-500/30">
                {myPath.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 relative pl-6">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500 absolute left-1 -translate-x-1/2 border border-purple-300 animate-ping" />
                    <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 text-[10px] font-mono font-bold border border-purple-500/30">
                      {item.year}
                    </span>
                    <span className="text-xs text-slate-200 font-mono">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-500/20 text-[11px] font-mono text-purple-300">
              IT Live ta'lim bosqichlari
            </div>
          </div>

          {/* Column 2: NIMALARGA QIZIQAMAN? */}
          <div className="glass-card p-6 border-purple-500/30 flex flex-col justify-between relative overflow-hidden">
            <div>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Code className="w-4 h-4 text-pink-400 icon-continuous-wiggle" />
                NIMALARGA QIZIQAMAN?
              </h3>

              <ul className="space-y-2 text-xs font-mono text-slate-200">
                {interests.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#09091A] border border-purple-500/20 group">
                    <Sparkles className="w-3.5 h-3.5 text-pink-400 shrink-0 icon-continuous-bounce" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3D Laptop Visual Icon Container */}
            <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 flex items-center justify-center">
              <Laptop className="w-12 h-12 text-purple-300 icon-continuous-float" />
            </div>
          </div>

          {/* Column 3: KO'NIKMALARNING DARAJA KO'RSATKICHI */}
          <div className="glass-card p-6 border-purple-500/30 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400 icon-continuous-pulse" />
                KO'NIKMALARNING DARAJA KO'RSATKICHI
              </h3>

              <div className="space-y-3">
                {competencies.map((comp, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-slate-300">{comp.name}</span>
                      <span className="text-purple-300 font-bold">{comp.pct}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#09091A] overflow-hidden border border-purple-500/20">
                      <div
                        className={`h-full bg-gradient-to-r ${comp.color} rounded-full progress-glow`}
                        style={{ width: `${comp.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-purple-500/20 text-[11px] font-mono text-slate-400">
              Amaliy tajriba bahosi
            </div>
          </div>

          {/* Column 4: KELAJAK REJALARIM */}
          <div className="glass-card p-6 border-purple-500/30 flex flex-col justify-between relative overflow-hidden">
            <div>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-pink-400 icon-continuous-wiggle" />
                KELAJAK REJALARIM
              </h3>

              <ul className="space-y-2 text-xs font-mono text-slate-200 mb-4">
                {futurePlans.map((plan, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5 icon-continuous-pulse" />
                    <span>{plan}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3D Dartboard Image Target matching Reference Image */}
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-[#09091A] flex items-center justify-center p-2">
              <img
                src="/images/target.png"
                alt="3D Target Dartboard"
                className="w-full max-w-[140px] h-auto object-contain drop-shadow-[0_0_20px_rgba(217,70,239,0.5)] hover:scale-110 transition-transform icon-continuous-float"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
