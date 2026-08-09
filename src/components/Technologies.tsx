import React from 'react';
import { Cpu, Code2, Layers, Database, Server, HardDrive, Atom, FileCode, Layout, Palette, GitBranch } from 'lucide-react';

export const Technologies: React.FC = () => {
  const techPedestals = [
    { name: "C#", label: "C#", icon: <Code2 className="w-8 h-8 text-purple-400 icon-continuous-pulse" />, glow: "from-purple-600/40 to-violet-900/20", border: "border-purple-500/40" },
    { name: ".NET", label: ".NET", icon: <Cpu className="w-8 h-8 text-violet-400 icon-continuous-float" />, glow: "from-violet-600/40 to-indigo-900/20", border: "border-violet-500/40" },
    { name: "ASP.NET Core", label: "ASP.NET Core", icon: <Layers className="w-8 h-8 text-indigo-400 icon-continuous-wiggle" />, glow: "from-indigo-600/40 to-blue-900/20", border: "border-indigo-500/40" },
    { name: "EF Core", label: "EF Core", icon: <Layers className="w-8 h-8 text-pink-400 icon-continuous-bounce" />, glow: "from-pink-600/40 to-purple-900/20", border: "border-pink-500/40" },
    { name: "PostgreSQL", label: "PostgreSQL", icon: <Database className="w-8 h-8 text-sky-400 icon-continuous-pulse" />, glow: "from-sky-600/40 to-blue-900/20", border: "border-sky-500/40" },
    { name: "MySQL", label: "MySQL", icon: <Server className="w-8 h-8 text-blue-400 icon-continuous-float" />, glow: "from-blue-600/40 to-indigo-900/20", border: "border-blue-500/40" },
    { name: "SQLite", label: "SQLite", icon: <HardDrive className="w-8 h-8 text-cyan-400 icon-continuous-wiggle" />, glow: "from-cyan-600/40 to-slate-900/20", border: "border-cyan-500/40" },
    { name: "React.js", label: "React.js", icon: <Atom className="w-8 h-8 text-cyan-300 icon-continuous-spin" />, glow: "from-cyan-500/40 to-blue-900/20", border: "border-cyan-400/40" },
    { name: "TypeScript", label: "TypeScript", icon: <FileCode className="w-8 h-8 text-blue-400 icon-continuous-pulse" />, glow: "from-blue-600/40 to-indigo-900/20", border: "border-blue-500/40" },
    { name: "HTML5", label: "HTML5", icon: <Layout className="w-8 h-8 text-orange-400 icon-continuous-bounce" />, glow: "from-orange-600/40 to-red-900/20", border: "border-orange-500/40" },
    { name: "CSS3", label: "CSS3", icon: <Palette className="w-8 h-8 text-blue-400 icon-continuous-float" />, glow: "from-blue-500/40 to-sky-900/20", border: "border-blue-400/40" },
    { name: "Git & GitHub", label: "Git & GitHub", icon: <GitBranch className="w-8 h-8 text-white icon-continuous-wiggle" />, glow: "from-slate-600/40 to-purple-900/20", border: "border-slate-400/40" }
  ];

  return (
    <section id="konikmalar" className="relative py-16 bg-[#060611]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title matching Reference Image */}
        <div className="text-center mb-10">
          <h2 className="text-sm font-mono font-bold tracking-widest text-purple-300 uppercase">
            TEXNOLOGIYALARIM
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* 3D Glass Pedestal Grid matching Reference Image */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {techPedestals.map((item, idx) => (
            <div
              key={idx}
              className={`pedestal-card p-5 flex flex-col items-center justify-center gap-3 text-center cursor-pointer ${item.border} relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${item.glow} opacity-50 group-hover:opacity-100 transition-opacity`} />

              {/* 3D Badge Pedestal Icon */}
              <div className="relative z-10 p-3 rounded-2xl bg-[#09091A] border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                {item.icon}
              </div>

              <span className="relative z-10 text-xs font-mono font-bold text-slate-200 group-hover:text-white transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
