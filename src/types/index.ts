export type RepositoryCategory = 'WEB PROJECTS' | 'BACKEND / API' | 'FRONTEND' | 'C# / .NET' | 'C++' | 'JAVASCRIPT' | 'OTHER';

export interface Repository {
  name: string;
  html_url: string;
  homepage?: string;
  description: string;
  language: string;
  stargazers_count: number;
  updated_at?: string;
  category: RepositoryCategory;
  technologies: string[];
  purpose?: string;
  features?: string[];
  architecture?: string;
  contribution?: string;
  whatILearned?: string;
}

export type TechCategory = 'FOUNDATION' | 'BACKEND' | 'DATABASE' | 'FRONTEND' | 'TOOLS' | 'ARCHITECTURE';

export interface Technology {
  id: string;
  name: string;
  category: TechCategory;
  purpose: string;
  iconName: string;
  color: string;
  badge?: string;
}

export interface ProblemSolution {
  id: string;
  title: string;
  category: string;
  problem: string;
  debug: string;
  solution: string;
  lesson: string;
}

export interface JourneyMilestone {
  step: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  technologies: string[];
}
