import React from 'react';
import { X, ExternalLink, Github, Code2, Layers, Sparkles, CheckCircle, Cpu } from 'lucide-react';
import type { Repository } from '../types';

interface ProjectModalProps {
  project: Repository | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay animate-fadeIn" onClick={onClose}>
      <div
        className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border-purple-500/40 relative shadow-2xl shadow-purple-950/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-purple-950/60 border border-purple-500/30 text-slate-300 hover:text-white hover:bg-purple-500/30 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-400">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold border border-purple-500/30">
              {project.category}
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight mt-1">{project.name}</h2>
          </div>
        </div>

        {/* Primary Language & Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#090915] border border-purple-500/20 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-xs font-mono">Primary Language:</span>
            <span className="px-3 py-1 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-xs font-mono font-bold">
              {project.language || 'Information not provided'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold font-mono flex items-center gap-2 transition-all shadow-lg shadow-pink-950/50"
              >
                <span>Jonli Sayt (Live Demo) 🚀</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-xs"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Modal Content Sections */}
        <div className="space-y-5 text-sm text-slate-300">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
              Project Overview
            </h4>
            <p className="bg-[#101026]/70 p-3.5 rounded-xl border border-purple-500/20 leading-relaxed text-slate-200">
              {project.description || "Information not provided"}
            </p>
          </div>

          {/* Purpose */}
          <div>
            <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
              Purpose & Objective
            </h4>
            <p className="bg-[#101026]/70 p-3.5 rounded-xl border border-purple-500/20 leading-relaxed">
              {project.purpose || "Information not provided"}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-2">
              Key Features
            </h4>
            {project.features && project.features.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#101026]/70 border border-purple-500/20 text-xs">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-400 text-xs italic">Information not provided</p>
            )}
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-2">
              Technologies & Badges
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
              Architecture & Structure
            </h4>
            <p className="bg-[#101026]/70 p-3.5 rounded-xl border border-purple-500/20 leading-relaxed font-mono text-xs text-indigo-300">
              {project.architecture || "Information not provided"}
            </p>
          </div>

          {/* Contribution & Learning */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20">
              <h4 className="text-xs font-mono font-bold text-pink-400 uppercase tracking-wider mb-1">
                My Contribution
              </h4>
              <p className="text-xs leading-relaxed text-slate-300">
                {project.contribution || "Information not provided"}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20">
              <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
                What I Learned
              </h4>
              <p className="text-xs leading-relaxed text-slate-300">
                {project.whatILearned || "Information not provided"}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-purple-500/20 flex justify-end">
          <button onClick={onClose} className="btn-secondary text-xs">
            Yopish
          </button>
        </div>

      </div>
    </div>
  );
};
