import React from 'react';
import { Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#04040A] border-t border-purple-500/20 py-6 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div>
          © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Barcha huquqlar himoyalangan.
        </div>

        <div className="flex items-center gap-1.5 text-purple-300">
          <span>Designed & Developed with</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          <span>for {PERSONAL_INFO.fullName}</span>
        </div>

      </div>
    </footer>
  );
};
