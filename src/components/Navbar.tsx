import React, { useState, useEffect } from 'react';
import { Github, Menu, X, Code2, Download, Activity, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    // Generate text CV file for download
    const cvText = `
BEHRUZ SAGDULLAYEV
Junior Full-Stack Developer (C# / .NET)

Personal Info:
- Full Name: Behruz Sagdullayev
- Age: 16
- Education: IT Live Academy (~1 year Full-Stack Development)
- Location: Tashkent, Uzbekistan
- GitHub: https://github.com/neonBehruz

Primary Focus: C# / .NET Backend Development (ASP.NET Core, EF Core, PostgreSQL)
Secondary Focus: Frontend Development (React, TypeScript, HTML, CSS)

Public Repositories: 19+ real public projects on GitHub (TestPlatform, Gebula, Emax, Kutubxona, sneakers, etc.)
`;
    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Behruz_Sagdullayev_CV.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const navLinks = [
    { name: "BOSH SAHIFA", href: "#bosh-sahifa" },
    { name: "HAQIMDA", href: "#haqimda" },
    { name: "LOYIHALAR", href: "#loyihalar" },
    { name: "KO'NIKMALAR", href: "#konikmalar" },
    { name: "ALOQA", href: "#aloqa" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#060611]/90 backdrop-blur-md border-b border-purple-500/20 py-3 shadow-xl' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo matching reference image: BEHRUZ.DEV */}
          <a href="#bosh-sahifa" className="flex items-center gap-2 group text-decoration-none">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 p-[1px] flex items-center justify-center shadow-lg shadow-purple-500/30">
              <div className="w-full h-full bg-[#060611] rounded-[7px] flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
              </div>
            </div>
            <span className="font-extrabold text-base tracking-widest text-white font-mono uppercase">
              BEHRUZ<span className="text-purple-400">.DEV</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-slate-300 hover:text-white tracking-widest transition-colors font-mono"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons matching reference image */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* CV Download Button */}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-200 text-xs font-mono font-semibold hover:bg-purple-900/80 transition-all hover:scale-105"
            >
              <Download className="w-3.5 h-3.5 text-pink-400" />
              <span>CV Yuklab olish</span>
            </button>

            {/* API Status Button */}
            <button
              onClick={() => setShowStatusModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0F0F26] border border-purple-500/30 text-slate-200 text-xs font-mono font-semibold hover:border-purple-400 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>API Status</span>
            </button>

          </div>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-purple-950/60 border border-purple-500/30 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#060611]/95 backdrop-blur-xl border-b border-purple-500/20 px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-purple-600/20"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleDownloadCV}
                className="btn-primary w-full justify-center text-xs"
              >
                <Download className="w-4 h-4" />
                <span>CV Yuklab olish</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* API Status Modal */}
      {showStatusModal && (
        <div className="modal-overlay" onClick={() => setShowStatusModal(false)}>
          <div className="glass-card max-w-md w-full p-6 border-purple-500/40 relative space-y-4" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowStatusModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-400">
                <Activity className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-mono">SYSTEM API STATUS</h3>
                <span className="text-xs text-emerald-400 font-mono">● All Services Operational</span>
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-300 bg-[#060611] p-4 rounded-xl border border-purple-500/20">
              <div className="flex justify-between">
                <span>GitHub API Integration:</span>
                <span className="text-emerald-400">200 OK (Live)</span>
              </div>
              <div className="flex justify-between">
                <span>C# .NET Backend Service:</span>
                <span className="text-emerald-400">Active</span>
              </div>
              <div className="flex justify-between">
                <span>PostgreSQL Database:</span>
                <span className="text-emerald-400">Connected</span>
              </div>
              <div className="flex justify-between">
                <span>Developer Mode:</span>
                <span className="text-purple-400">Behruz Sagdullayev</span>
              </div>
            </div>

            <button onClick={() => setShowStatusModal(false)} className="btn-secondary w-full justify-center text-xs">
              Yopish
            </button>
          </div>
        </div>
      )}
    </>
  );
};
