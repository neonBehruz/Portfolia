import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Star, Eye, ArrowRight, Play } from 'lucide-react';
import { REAL_REPOSITORIES, PERSONAL_INFO } from '../data/portfolioData';
import type { Repository } from '../types';
import { ProjectModal } from './ProjectModal';

export const GithubShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Repository | null>(null);

  // Top Featured Visual Projects derived from real repositories
  const featuredNames = ['Online-Test', 'edunova-bot', 'Klassy-Cafe', 'Loook', 'BurgerKing', 'Clock'];
  const featuredProjects: Repository[] = REAL_REPOSITORIES.filter(r => featuredNames.includes(r.name));

  return (
    <section id="loyihalar" className="relative py-16 bg-[#060611]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* ===================================================
            SECTION 1: LOYIHALARIM (Featured Visual Cards)
           =================================================== */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="section-title-ref">
              <Code2 className="w-5 h-5 text-purple-400 icon-continuous-pulse" />
              <span>LOYIHALARIM</span>
            </div>

            <a
              href="#github-all"
              className="btn-secondary text-xs"
            >
              <span>Barchasini ko'rish</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Grid of Featured Visual Project Mockup Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((proj) => (
              <div
                key={proj.name}
                className="glass-card overflow-hidden border-purple-500/30 hover:border-pink-500/50 flex flex-col justify-between group"
              >
                {/* Visual Mockup Header Frame */}
                <div className="h-44 bg-[#090918] border-b border-purple-500/20 relative overflow-hidden flex items-center justify-center p-4">
                  
                  {/* Browser Bar */}
                  <div className="absolute top-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-white/10 pb-1.5">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-purple-400 font-bold">{proj.name}.dev</span>
                  </div>

                  {/* Mockup Preview Content */}
                  <div className="mt-4 text-center space-y-2">
                    {proj.name === 'Clock' ? (
                      <div className="font-mono text-3xl font-bold text-white tracking-widest bg-black/60 px-4 py-2 rounded-xl border border-purple-500/30 shadow-lg">
                        12:00:00
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-200">
                        <span className="text-pink-400 font-bold">&lt;{proj.name} /&gt;</span>
                        <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">{proj.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base font-bold text-white font-mono">{proj.name}</h3>
                      <div className="flex gap-1 flex-wrap">
                        {proj.technologies.slice(0, 3).map(t => (
                          <span key={t} className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 text-[10px] font-mono border border-purple-500/20">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="text-xs font-bold text-purple-300 hover:text-pink-300 flex items-center gap-1 font-mono"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Batafsil</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {proj.homepage && (
                        <a
                          href={proj.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-pink-950/80 border border-pink-500/40 text-pink-300 hover:text-white text-[11px] font-mono flex items-center gap-1 hover:bg-pink-900/80 transition-colors"
                        >
                          <Play className="w-3 h-3 fill-pink-300" />
                          <span>Demo</span>
                        </a>
                      )}

                      <a
                        href={proj.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white"
                      >
                        <Github className="w-3.5 h-3.5 text-purple-400" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ===================================================
            SECTION 2: GITHUB REPOSITORIYALARIM (Full Grid)
           =================================================== */}
        <div id="github-all">
          <div className="flex items-center justify-between mb-8">
            <div className="section-title-ref">
              <Github className="w-5 h-5 text-pink-400" />
              <span>GITHUB REPOSITORIYALARIM</span>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs"
            >
              <span>GitHub profilim ➔</span>
            </a>
          </div>

          {/* Grid of All Real Public Repos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REAL_REPOSITORIES.map((repo) => (
              <div
                key={repo.name}
                className="glass-card p-4 border-purple-500/25 hover:border-pink-500/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-[#09091A] border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-white font-mono group-hover:text-purple-300 transition-colors truncate">
                      {repo.name}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400 block truncate">
                      {repo.technologies.join(', ')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-pink-950/60 text-pink-300 hover:text-white border border-pink-500/30 hover:bg-pink-900/60"
                      title="Jonli Sayt / Demo"
                      aria-label={`${repo.name} Live Demo`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-purple-950/60 text-purple-300 hover:text-white border border-purple-500/30 hover:bg-purple-900/60"
                    title="GitHub Repository"
                    aria-label={`${repo.name} GitHub Repository`}
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono">
              <span>📊 Barchasi: {REAL_REPOSITORIES.length} ta public repository ({PERSONAL_INFO.githubUsername})</span>
            </span>
          </div>
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
