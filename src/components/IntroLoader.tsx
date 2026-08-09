import React, { useEffect, useState } from 'react';
import { Terminal, Zap } from 'lucide-react';

interface IntroLoaderProps {
  onComplete?: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('SYSTEM BOOTING...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const logs = [
      'SYSTEM BOOTING...',
      'INITIALIZING C# .NET CORE...',
      'CONNECTING REST API...',
      'BEHRUZ.DEV READY!'
    ];

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 14) + 10;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setStatusText('SYSTEM READY!');
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          if (onComplete) onComplete();
        }, 250);
      } else {
        setProgress(currentProgress);
        const logIndex = Math.min(
          Math.floor((currentProgress / 100) * logs.length),
          logs.length - 1
        );
        setStatusText(logs[logIndex]);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#04040B] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ease-out font-mono">
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Loader Content Container */}
      <div className="relative z-10 max-w-sm w-full px-6 text-center space-y-6">
        
        {/* Simple Clean Icon Box (Orbiting circular ring removed) */}
        <div className="relative inline-block mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 p-[2px] shadow-[0_0_35px_rgba(139,92,246,0.4)]">
            <div className="w-full h-full bg-[#08081A] rounded-[14px] flex items-center justify-center relative">
              <Zap className="w-8 h-8 text-pink-400" />
            </div>
          </div>
        </div>

        {/* Clean Simple Brand Name */}
        <div>
          <h1 className="text-xl font-bold text-white tracking-widest uppercase font-mono">
            BEHRUZ<span className="text-purple-400">.DEV</span>
          </h1>
        </div>

        {/* Progress Bar Component */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-[11px] text-slate-300 font-mono">
            <span className="flex items-center gap-1.5 text-purple-400">
              <Terminal className="w-3.5 h-3.5" />
              {statusText}
            </span>
            <span className="font-bold text-pink-400">{progress}%</span>
          </div>

          <div className="w-full h-2 bg-[#0D0D24] rounded-full border border-purple-500/30 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};
