import React, { useState } from 'react';
import { 
  Cpu, Code2, Layers, Database, Server, HardDrive, Atom, FileCode, 
  Layout, Palette, GitBranch, Terminal, Shield, FileSpreadsheet, 
  Cloud, Box, Globe, Binary, Key, Sparkles, BookOpen
} from 'lucide-react';

interface TechItem {
  name: string;
  category: 'BACKEND' | 'FRONTEND' | 'DATABASE' | 'FOUNDATION' | 'TOOLS';
  icon: React.ReactNode;
  glow: string;
  border: string;
  badge?: string;
}

export const Technologies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const allTechs: TechItem[] = [
    // BACKEND / .NET
    { name: "C#", category: "BACKEND", icon: <Code2 className="w-8 h-8 text-purple-400 icon-continuous-pulse" />, glow: "from-purple-600/40 to-violet-900/20", border: "border-purple-500/40", badge: "Main Focus" },
    { name: ".NET / .NET Core", category: "BACKEND", icon: <Cpu className="w-8 h-8 text-violet-400 icon-continuous-float" />, glow: "from-violet-600/40 to-indigo-900/20", border: "border-violet-500/40", badge: "Core Framework" },
    { name: "ASP.NET Core", category: "BACKEND", icon: <Layers className="w-8 h-8 text-indigo-400 icon-continuous-wiggle" />, glow: "from-indigo-600/40 to-blue-900/20", border: "border-indigo-500/40", badge: "Web Framework" },
    { name: "Web API", category: "BACKEND", icon: <Globe className="w-8 h-8 text-blue-400 icon-continuous-pulse" />, glow: "from-blue-600/40 to-sky-900/20", border: "border-blue-500/40", badge: "REST Endpoints" },
    { name: "EF Core", category: "BACKEND", icon: <Layers className="w-8 h-8 text-pink-400 icon-continuous-bounce" />, glow: "from-pink-600/40 to-purple-900/20", border: "border-pink-500/40", badge: "ORM" },
    { name: "LINQ", category: "BACKEND", icon: <Binary className="w-8 h-8 text-fuchsia-400 icon-continuous-float" />, glow: "from-fuchsia-600/40 to-purple-900/20", border: "border-fuchsia-500/40", badge: "Data Queries" },
    { name: "JWT Auth", category: "BACKEND", icon: <Key className="w-8 h-8 text-rose-400 icon-continuous-pulse" />, glow: "from-rose-600/40 to-pink-900/20", border: "border-rose-500/40", badge: "Security" },
    { name: "Swagger / OpenAPI", category: "BACKEND", icon: <FileSpreadsheet className="w-8 h-8 text-emerald-400 icon-continuous-wiggle" />, glow: "from-emerald-600/40 to-teal-900/20", border: "border-emerald-500/40", badge: "API Docs" },

    // FOUNDATION & LANGUAGES
    { name: "C++", category: "FOUNDATION", icon: <Code2 className="w-8 h-8 text-blue-400 icon-continuous-bounce" />, glow: "from-blue-600/40 to-cyan-900/20", border: "border-blue-500/40", badge: "Core Language" },
    { name: "Python", category: "FOUNDATION", icon: <Terminal className="w-8 h-8 text-yellow-400 icon-continuous-float" />, glow: "from-yellow-600/40 to-amber-900/20", border: "border-yellow-500/40", badge: "Scripting & Bot" },
    { name: "Programming Fundamentals", category: "FOUNDATION", icon: <BookOpen className="w-8 h-8 text-emerald-400 icon-continuous-pulse" />, glow: "from-emerald-600/40 to-green-900/20", border: "border-emerald-500/40", badge: "Foundation" },
    { name: "OOP", category: "FOUNDATION", icon: <Box className="w-8 h-8 text-amber-400 icon-continuous-wiggle" />, glow: "from-amber-600/40 to-orange-900/20", border: "border-amber-500/40", badge: "Architecture" },
    { name: "Data Structures & Algorithms", category: "FOUNDATION", icon: <Sparkles className="w-8 h-8 text-purple-400 icon-continuous-pulse" />, glow: "from-purple-600/40 to-pink-900/20", border: "border-purple-500/40", badge: "Problem Solving" },

    // FRONTEND
    { name: "React.js", category: "FRONTEND", icon: <Atom className="w-8 h-8 text-cyan-300 icon-continuous-spin" />, glow: "from-cyan-500/40 to-blue-900/20", border: "border-cyan-400/40", badge: "UI Library" },
    { name: "TypeScript", category: "FRONTEND", icon: <FileCode className="w-8 h-8 text-blue-400 icon-continuous-pulse" />, glow: "from-blue-600/40 to-indigo-900/20", border: "border-blue-500/40", badge: "Type Safety" },
    { name: "JavaScript", category: "FRONTEND", icon: <FileCode className="w-8 h-8 text-amber-300 icon-continuous-float" />, glow: "from-amber-500/40 to-yellow-900/20", border: "border-amber-400/40", badge: "Web Logic" },
    { name: "HTML5", category: "FRONTEND", icon: <Layout className="w-8 h-8 text-orange-400 icon-continuous-bounce" />, glow: "from-orange-600/40 to-red-900/20", border: "border-orange-500/40", badge: "Markup" },
    { name: "CSS3", category: "FRONTEND", icon: <Palette className="w-8 h-8 text-blue-400 icon-continuous-float" />, glow: "from-blue-500/40 to-sky-900/20", border: "border-blue-400/40", badge: "Styling" },

    // DATABASES
    { name: "PostgreSQL", category: "DATABASE", icon: <Database className="w-8 h-8 text-sky-400 icon-continuous-pulse" />, glow: "from-sky-600/40 to-blue-900/20", border: "border-sky-500/40", badge: "Primary Relational DB" },
    { name: "MySQL", category: "DATABASE", icon: <Server className="w-8 h-8 text-blue-400 icon-continuous-float" />, glow: "from-blue-600/40 to-indigo-900/20", border: "border-blue-500/40", badge: "Relational DB" },
    { name: "SQLite", category: "DATABASE", icon: <HardDrive className="w-8 h-8 text-cyan-400 icon-continuous-wiggle" />, glow: "from-cyan-600/40 to-slate-900/20", border: "border-cyan-500/40", badge: "Embedded DB" },
    { name: "SQL Server", category: "DATABASE", icon: <Database className="w-8 h-8 text-red-400 icon-continuous-pulse" />, glow: "from-red-600/40 to-rose-900/20", border: "border-red-500/40", badge: "Enterprise DB" },

    // TOOLS & CLOUD
    { name: "Git & GitHub", category: "TOOLS", icon: <GitBranch className="w-8 h-8 text-white icon-continuous-wiggle" />, glow: "from-slate-600/40 to-purple-900/20", border: "border-slate-400/40", badge: "Version Control" },
    { name: "Docker", category: "TOOLS", icon: <Box className="w-8 h-8 text-sky-400 icon-continuous-float" />, glow: "from-sky-600/40 to-cyan-900/20", border: "border-sky-500/40", badge: "Containerization" },
    { name: "Azure", category: "TOOLS", icon: <Cloud className="w-8 h-8 text-blue-400 icon-continuous-pulse" />, glow: "from-blue-600/40 to-indigo-900/20", border: "border-blue-500/40", badge: "Cloud Services" }
  ];

  const filteredTechs = activeCategory === 'ALL' 
    ? allTechs 
    : allTechs.filter(t => t.category === activeCategory);

  const categories = [
    { key: 'ALL', label: 'Barchasi' },
    { key: 'BACKEND', label: 'Backend / .NET' },
    { key: 'FOUNDATION', label: 'Foundation & Languages' },
    { key: 'FRONTEND', label: 'Frontend' },
    { key: 'DATABASE', label: 'Databases' },
    { key: 'TOOLS', label: 'Tools & Cloud' }
  ];

  return (
    <section id="konikmalar" className="relative py-16 bg-[#060611]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-sm font-mono font-bold tracking-widest text-purple-300 uppercase">
            TEXNOLOGIYALARIM & KO'NIKMALARIM
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                activeCategory === cat.key
                  ? 'bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-950/60 scale-105'
                  : 'bg-[#09091A] text-slate-400 border-purple-500/20 hover:border-purple-500/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3D Glass Pedestal Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {filteredTechs.map((item, idx) => (
            <div
              key={idx}
              className={`pedestal-card p-5 flex flex-col items-center justify-center gap-3 text-center cursor-pointer ${item.border} relative overflow-hidden group transition-all duration-300 hover:-translate-y-1.5`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${item.glow} opacity-50 group-hover:opacity-100 transition-opacity`} />

              {/* Badge if available */}
              {item.badge && (
                <span className="relative z-10 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300">
                  {item.badge}
                </span>
              )}

              {/* 3D Badge Pedestal Icon */}
              <div className="relative z-10 p-3 rounded-2xl bg-[#09091A] border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                {item.icon}
              </div>

              <span className="relative z-10 text-xs font-mono font-bold text-slate-200 group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
