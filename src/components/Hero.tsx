import React from 'react';
import { ArrowRight, Github, Send, Instagram, Mail, Sparkles, UserCheck, Calendar, FolderCode, Cpu, Code2, Rocket } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const stats = [
    { label: "Yillik tajriba", val: "1+", icon: <Calendar className="w-5 h-5 text-purple-400" /> },
    { label: "Public Loyihalar", val: "19+", icon: <FolderCode className="w-5 h-5 text-pink-400" /> },
    { label: "Texnologiyalar", val: "8+", icon: <Cpu className="w-5 h-5 text-indigo-400" /> },
    { label: "Kod satrlari", val: "500+", icon: <Code2 className="w-5 h-5 text-blue-400" /> },
    { label: "Rivojlanishda", val: "Doim", icon: <Rocket className="w-5 h-5 text-emerald-400" /> }
  ];

  return (
    <section id="bosh-sahifa" className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Hero Layout matching Reference Image Exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-12">
          
          {/* Left Column: Personal Intro */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
              <span>SALOM, MEN</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none font-main">
                Behruz <br />
                <span className="text-gradient">Sagdullayev</span>
              </h1>
              <p className="text-lg font-bold text-gradient-purple mt-1.5 font-mono">
                Full Stack Developer
              </p>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              16 yoshli, IT Live Academy'da 1 yildan beri Full Stack Development yo'nalishida o'qiyotgan va amaliy loyihalar orqali rivojlanayotgan dasturchiman.
            </p>

            {/* Action Buttons matching Reference Image */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#loyihalar" className="btn-primary text-xs group">
                <span>Mening loyihalarim</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs group"
              >
                <Github className="w-4 h-4 text-purple-400 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                <span>GitHub profilim</span>
              </a>
            </div>

            {/* Social Connect Icons Row matching Reference Image */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span>Menga ulaning:</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0F0F26] border border-purple-500/30 text-purple-300 hover:text-cyan-300 hover:border-cyan-400 transition-all hover:scale-110 group shadow-md"
                  aria-label="Telegram"
                  title="Telegram: @Sagdullayev_Behruz"
                >
                  <Send className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0F0F26] border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 transition-all hover:scale-110 group shadow-md"
                  aria-label="GitHub"
                  title="GitHub: neonBehruz"
                >
                  <Github className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0F0F26] border border-purple-500/30 text-pink-400 hover:text-pink-300 hover:border-pink-400 transition-all hover:scale-110 group shadow-md"
                  aria-label="Instagram"
                  title="Instagram: @sagdu11ayev_07"
                >
                  <Instagram className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-[#0F0F26] border border-purple-500/30 text-purple-300 hover:text-pink-300 hover:border-pink-400 transition-all hover:scale-110 group shadow-md"
                  aria-label="Email"
                  title={`Email: ${PERSONAL_INFO.email}`}
                >
                  <Mail className="w-4 h-4 group-hover:-rotate-12 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Center Column: 3D Laptop Workspace Graphic matching Reference Image Exactly */}
          <div className="lg:col-span-5 flex items-center justify-center relative py-4 lg:py-0">
            <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative group cursor-pointer">
              <img
                src="/images/hero_exact.png"
                alt="Behruz Sagdullayev 3D Hero Workstation"
                className="w-full max-w-[460px] h-auto object-contain drop-shadow-[0_20px_45px_rgba(139,92,246,0.5)] group-hover:scale-105 transition-transform duration-500 animate-float"
              />
            </div>
          </div>

          {/* Right Column: Glass Cards (Info & Status) matching Reference Image Exactly */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Shaxsiy Ma'lumotlar Card */}
            <div className="glass-card p-5 border-purple-500/30 relative group">
              <h3 className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                SHAXSIY MA'LUMOTLAR
              </h3>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-purple-500/15 pb-1.5">
                  <span className="text-slate-400">Ism:</span>
                  <span className="text-white font-bold">Behruz Sagdullayev</span>
                </div>
                <div className="flex justify-between border-b border-purple-500/15 pb-1.5">
                  <span className="text-slate-400">Yosh:</span>
                  <span className="text-purple-300 font-bold">16</span>
                </div>
                <div className="flex justify-between border-b border-purple-500/15 pb-1.5">
                  <span className="text-slate-400">O'qish joyi:</span>
                  <span className="text-emerald-400 font-bold">IT Live Academy</span>
                </div>
                <div className="flex justify-between border-b border-purple-500/15 pb-1.5">
                  <span className="text-slate-400">Yo'nalish:</span>
                  <span className="text-indigo-300 font-bold">Full Stack Development</span>
                </div>
                <div className="flex justify-between border-b border-purple-500/15 pb-1.5">
                  <span className="text-slate-400">Joylashuv:</span>
                  <span className="text-slate-200">Sirdaryo, O'zbekiston</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Til:</span>
                  <span className="text-pink-300">Uzbek, Russian, English</span>
                </div>
              </div>
            </div>

            {/* Hozirgi Statusim Card */}
            <div className="glass-card p-5 border-purple-500/30 space-y-2 group">
              <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                HOZIRGI STATUSIM
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                "Har kuni o'rganaman, quraman, xatolardan o'rganaman va rivojlanaman."
              </p>
              <div className="pt-2 flex justify-end">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Online
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Counter Row matching Reference Image Exactly */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="glass-card p-4 border-purple-500/25 flex items-center gap-3.5 hover:border-pink-500/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-[#0F0F26] border border-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {st.icon}
              </div>
              <div>
                <span className="text-xl font-black text-white font-mono block leading-none">
                  {st.val}
                </span>
                <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                  {st.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
