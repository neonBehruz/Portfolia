import React from 'react';
import { User, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { AboutMeScene3D } from './3d/AboutMeScene3D';

export const AboutMe: React.FC = () => {
  const benefits = [
    "16 yoshli intiluvchan Full Stack Dasturchi",
    "C# .NET & Entity Framework Core bo'yicha kuchli amaliy ko'nikmalar",
    "RESTful Web API hamda PostgreSQL, MySQL, SQLite integratsiyasi",
    "React.js, TypeScript va HTML/CSS frontend ko'nikmalari",
    "Kuchli muammo yechish va tizimli fikrlash qobiliyati"
  ];

  return (
    <section id="haqimda" className="relative py-16 bg-[#060611] overflow-hidden">
      
      {/* Embedded 3D Scene Animation */}
      <AboutMeScene3D />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Mid Section matching Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Box: HAQIMDA with 3D Character Avatar */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 border-purple-500/30 relative h-full flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="section-title-ref mb-4">
                  <User className="w-5 h-5 text-purple-400 icon-continuous-pulse" />
                  <span>HAQIMDA</span>
                </div>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-6 font-main">
                  Men 16 yoshli, maqsadli va intiluvchan dasturchiman. IT Live Academy'da 1 yildan beri Full Stack Development yo'nalishida ta'lim olaman. Asosiy qiziqishim backend development bo'lib, C# va .NET texnologiyalari bilan chuqur ishlayman. Shuningdek, zamonaviy frontend texnologiyalarini ham o'rganib, to'liq web ilovalar yaratishga intilaman.
                </p>
              </div>

              {/* 3D Character Illustration matching Reference Image */}
              <div className="relative mt-2 rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-b from-[#0F0F26] to-[#060611] flex items-center justify-center p-4">
                <img
                  src="/images/avatar.png"
                  alt="Behruz Sagdullayev 3D Avatar"
                  className="w-full max-w-[280px] h-auto object-contain drop-shadow-[0_10px_25px_rgba(139,92,246,0.4)] hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-purple-500/30 text-[11px] font-mono text-purple-300">
                  Behruz Sagdullayev @ IT Live
                </div>
              </div>

            </div>
          </div>

          {/* Right Box: ASOSIY YUTUQ VA AFZALLIKLAR */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 border-purple-500/30 relative h-full flex flex-col justify-between">
              <div>
                <div className="section-title-ref mb-6">
                  <Award className="w-5 h-5 text-pink-400 icon-continuous-wiggle" />
                  <span>ASOSIY YUTUQ VA AFZALLIKLAR</span>
                </div>

                <ul className="space-y-4">
                  {benefits.map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#09091A] border border-purple-500/20 hover:border-purple-500/40 transition-all group">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5 icon-continuous-pulse" />
                      <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs font-mono text-purple-300 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-400 icon-continuous-bounce" />
                  <span>Amaliy yondashuv:</span>
                </span>
                <span className="font-bold text-white">100% Real Kodlash</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
