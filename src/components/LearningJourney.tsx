import React from 'react';
import { Calendar, School, BookOpen, CheckCircle } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#101022]/60 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-8 sm:p-10 border-purple-500/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 border border-purple-500/30 text-purple-300 text-xs font-mono">
                <Calendar className="w-3.5 h-3.5 text-pink-400 icon-continuous-pulse" />
                <span>1 YILLIK RIVOJLANISH SHAHODATNOMASI</span>
              </div>

              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                IT Live Ta'lim Markazi va Amaliy Tajriba
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Men IT Live ta'lim markazida taxminan bir yildan beri Full-Stack Development yo'nalishida faol tahsil olib kelmoqdaman. Ushbu davr mobaynida 19 dan ortiq amaliy loyihalar yaratib, C#, .NET, EF Core, PostgreSQL va React texnologiyalarida dasturlash ko'nikmalarini amalda sinab ko'rdim.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono pt-2">
                <div className="flex items-center gap-2 text-purple-300">
                  <School className="w-4 h-4 text-pink-400 icon-continuous-bounce" />
                  <span>Markaz: IT Live</span>
                </div>

                <div className="flex items-center gap-2 text-purple-300">
                  <BookOpen className="w-4 h-4 text-blue-400 icon-continuous-wiggle" />
                  <span>Yo'nalish: Full-Stack Development</span>
                </div>

                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle className="w-4 h-4 icon-continuous-pulse" />
                  <span>Taqdimot: Shaxsiy Amaliy Portfoliyo</span>
                </div>
              </div>
            </div>

            {/* Practical Stats Glass Card */}
            <div className="w-full lg:w-auto grid grid-cols-2 gap-4 shrink-0 font-mono text-center">
              <div className="p-5 rounded-2xl bg-[#090915] border border-purple-500/30">
                <span className="text-3xl font-black text-gradient block mb-1">~1 Yil</span>
                <span className="text-slate-400 text-xs">Amaliy Ta'lim Davri</span>
              </div>

              <div className="p-5 rounded-2xl bg-[#090915] border border-purple-500/30">
                <span className="text-3xl font-black text-gradient-pink block mb-1">19 Ta</span>
                <span className="text-slate-400 text-xs">Ochiq GitHub Repozitoriya</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
