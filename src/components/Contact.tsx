import React, { useState } from 'react';
import { Send, Github, Mail, Phone, Instagram, CheckCircle2, MessageSquare, User, AtSign, Tag } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactScene3D } from './3d/ContactScene3D';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', contact: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.75 },
      colors: ['#38BDF8', '#8B5CF6', '#EC4899', '#34D399']
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', contact: '', subject: '', message: '' });
    }, 4500);
  };

  const contactList = [
    {
      label: "TELEGRAM",
      value: PERSONAL_INFO.telegramUsername,
      href: PERSONAL_INFO.telegram,
      icon: <Send className="w-5 h-5 text-cyan-400 icon-continuous-float" />,
      boxBg: "bg-cyan-950/60 border-cyan-500/40",
      textColor: "text-white font-mono",
      badgeColor: "text-cyan-400"
    },
    {
      label: "INSTAGRAM",
      value: "@sagdu11ayev_07",
      href: PERSONAL_INFO.instagram,
      icon: <Instagram className="w-5 h-5 text-pink-400 icon-continuous-spin" />,
      boxBg: "bg-pink-950/60 border-pink-500/40",
      textColor: "text-pink-300 font-mono",
      badgeColor: "text-pink-400"
    },
    {
      label: "EMAIL",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: <Mail className="w-5 h-5 text-purple-400 icon-continuous-pulse" />,
      boxBg: "bg-purple-950/60 border-purple-500/40",
      textColor: "text-purple-200 font-mono",
      badgeColor: "text-purple-400"
    },
    {
      label: "TELEFON",
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`,
      icon: <Phone className="w-5 h-5 text-emerald-400 icon-continuous-bounce" />,
      boxBg: "bg-emerald-950/60 border-emerald-500/40",
      textColor: "text-emerald-300 font-mono",
      badgeColor: "text-emerald-400"
    },
    {
      label: "GITHUB",
      value: `github.com/${PERSONAL_INFO.githubUsername}`,
      href: PERSONAL_INFO.github,
      icon: <Github className="w-5 h-5 text-amber-400 icon-continuous-wiggle" />,
      boxBg: "bg-amber-950/60 border-amber-500/40",
      textColor: "text-amber-300 font-mono",
      badgeColor: "text-amber-400"
    }
  ];

  return (
    <section id="aloqa" className="relative py-24 bg-[#04040F] border-t border-cyan-500/20 overflow-hidden">
      
      {/* Perspective Grid Background Floor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Matching Screenshot Exactly */}
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>ALOQA BOG'LASH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-mono uppercase text-white">
            MEN BILAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">BOG'LANING</span>
          </h2>
        </div>

        {/* 2-Column Main Layout Matching Screenshot Exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: ALOQA MA'LUMOTLARI Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 border-cyan-500/30 relative overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(6,182,212,0.15)]">
              
              <h3 className="text-base font-mono font-extrabold text-cyan-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <span>ALOQA MA'LUMOTLARI</span>
              </h3>

              {/* Vertical Stack of 5 Contact Cards */}
              <div className="space-y-4">
                {contactList.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-[#08081A]/90 border border-cyan-500/20 hover:border-cyan-400/60 flex items-center gap-4 transition-all duration-300 group hover:translate-x-1.5 shadow-md"
                  >
                    {/* Animated Icon Badge */}
                    <div className={`p-3 rounded-xl border ${item.boxBg} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-mono text-slate-400 block tracking-wider uppercase">{item.label}</span>
                      <span className={`text-xs sm:text-sm font-bold truncate block ${item.textColor} group-hover:text-cyan-300 transition-colors`}>
                        {item.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: XABAR YUBORISH (REST API) Form Card with 3D Scene */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-1 bg-gradient-to-r from-cyan-500/40 via-purple-500/30 to-pink-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)]">
              
              <div className="glass-card p-6 sm:p-8 border-cyan-500/40 relative overflow-hidden rounded-[22px]">
                
                {/* 3D Scene Background embedded behind Form */}
                <ContactScene3D />

                {/* Form Content */}
                <div className="relative z-10">
                  
                  <h3 className="text-base font-mono font-extrabold text-white uppercase tracking-wider mb-6 flex items-center justify-between border-b border-cyan-500/20 pb-4">
                    <span>XABAR YUBORISH (REST API)</span>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/40">
                      ● Active Web API
                    </span>
                  </h3>

                  {submitted ? (
                    <div className="p-8 text-center space-y-3 bg-purple-950/80 rounded-2xl border border-cyan-400/50 backdrop-blur-md font-mono animate-fade-in shadow-2xl">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400 animate-bounce" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Xabaringiz muvaffaqiyatli yuborildi!</h4>
                      <p className="text-xs text-slate-300 max-w-sm mx-auto">
                        Rahmat, {formState.name}! Tez orada Telegram yoki Email orqali bog'lanamiz.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                      
                      {/* ISMINGIZ */}
                      <div className="space-y-1.5">
                        <label className="block text-slate-300 font-bold tracking-wider uppercase text-[11px]">
                          ISMINGIZ *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Masalan: Jasur Bek"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#060614]/90 border border-cyan-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                        />
                      </div>

                      {/* EMAIL MANZILINGIZ / ALOQA */}
                      <div className="space-y-1.5">
                        <label className="block text-slate-300 font-bold tracking-wider uppercase text-[11px]">
                          EMAIL MANZILINGIZ / ALOQA
                        </label>
                        <input
                          type="text"
                          placeholder="email@example.com"
                          value={formState.contact}
                          onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#060614]/90 border border-cyan-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                        />
                      </div>

                      {/* MAVZU (IXTIYORIY) */}
                      <div className="space-y-1.5">
                        <label className="block text-slate-300 font-bold tracking-wider uppercase text-[11px]">
                          MAVZU (IXTIYORIY)
                        </label>
                        <input
                          type="text"
                          placeholder="Loyiha buyurtmasi / Hamkorlik"
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#060614]/90 border border-cyan-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                        />
                      </div>

                      {/* XABARINGIZ */}
                      <div className="space-y-1.5">
                        <label className="block text-slate-300 font-bold tracking-wider uppercase text-[11px]">
                          XABARINGIZ *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Xabaringizni yozing..."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#060614]/90 border border-cyan-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none font-mono"
                        />
                      </div>

                      {/* Submit Button Matching Screenshot */}
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl border border-cyan-400/80 bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-300 font-mono font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] group cursor-pointer"
                      >
                        <Send className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                        <span>API ORQALI YUBORISH</span>
                      </button>

                    </form>
                  )}

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
