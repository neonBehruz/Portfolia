import React, { useState } from 'react';
import { Server, Code2, Layers, Cpu, ShieldCheck, Database, FileCode, CheckCircle } from 'lucide-react';
import { ArchitectureScene3D } from './3d/ArchitectureScene3D';

export const BackendDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'code' | 'patterns'>('architecture');

  const backendConcepts = [
    { name: "C# & .NET Core", desc: "Strongly typed OOP language with high execution speed and memory management." },
    { name: "ASP.NET Core Web API", desc: "Building scalable HTTP REST endpoints, custom middleware, and status responses." },
    { name: "Entity Framework Core", desc: "Code-First DB Migrations, Fluent API configurations, LINQ queries, and DbContext." },
    { name: "PostgreSQL Database", desc: "Relational database schema modeling, primary/foreign keys, and data integrity." },
    { name: "Repository & Service Pattern", desc: "Decoupling data persistence from domain business logic for clean maintenance." },
    { name: "DTOs & AutoMapper", desc: "Preventing over-posting and mapping request payload models to domain entities." },
    { name: "JWT & Security", desc: "JSON Web Token claims, authorization policies, and password hashing algorithms." }
  ];

  return (
    <section id="backend" className="relative py-20 bg-[#101022]/80 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Server className="w-5 h-5" />
          </span>
          <h2 className="section-title text-gradient">BACKEND DEVELOPMENT</h2>
        </div>
        <p className="section-subtitle">
          C# va .NET ekotizimidagi backend arxitektura bilimlari, ma'lumotlar bazasi va xavfsizlik amaliyotlari
        </p>

        {/* Tab Selection Bar */}
        <div className="flex gap-3 mb-8 border-b border-purple-500/20 pb-4">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeTab === 'architecture'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-[#080812] text-slate-400 border border-purple-500/20 hover:text-white'
            }`}
          >
            3D ARCHITECTURE DIAGRAM
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeTab === 'code'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-[#080812] text-slate-400 border border-purple-500/20 hover:text-white'
            }`}
          >
            C# CLEAN ARCHITECTURE CODE
          </button>

          <button
            onClick={() => setActiveTab('patterns')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeTab === 'patterns'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-[#080812] text-slate-400 border border-purple-500/20 hover:text-white'
            }`}
          >
            BACKEND COMPETENCIES
          </button>
        </div>

        {/* Tab 1: 3D Architecture Diagram */}
        {activeTab === 'architecture' && (
          <div className="space-y-6 animate-fadeIn">
            <ArchitectureScene3D />
            
            {/* Flow Pipeline Indicator */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#090915] border border-blue-500/30 text-blue-300">Frontend (React)</div>
              <div className="p-3 rounded-xl bg-[#090915] border border-sky-500/30 text-sky-300">REST API</div>
              <div className="p-3 rounded-xl bg-[#090915] border border-purple-500/30 text-purple-300">Controller</div>
              <div className="p-3 rounded-xl bg-[#090915] border border-violet-500/30 text-violet-300">Service</div>
              <div className="p-3 rounded-xl bg-[#090915] border border-pink-500/30 text-pink-300">Repository</div>
              <div className="p-3 rounded-xl bg-[#090915] border border-fuchsia-500/30 text-fuchsia-300">EF Core</div>
              <div className="p-3 rounded-xl bg-[#090915] border border-indigo-500/30 text-indigo-300">PostgreSQL</div>
            </div>
          </div>
        )}

        {/* Tab 2: C# Code Preview */}
        {activeTab === 'code' && (
          <div className="glass-card p-6 border-purple-500/40 animate-fadeIn space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-purple-300 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-pink-400" />
                Repository & Service Pattern in C# (.NET Core)
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 text-[10px] font-mono border border-purple-500/30">
                Production-Ready Structure
              </span>
            </div>

            <pre className="code-block text-xs leading-relaxed max-h-[420px]">
{`// 1. Domain Entity
public class Student
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string FullName { get; set; } = string.Empty;
    public string Specialization { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

// 2. Generic Repository Interface
public interface IRepository<T> where T : class
{
    Task<IEnumerable<T>> GetAllAsync();
    Task<T?> GetByIdAsync(Guid id);
    Task AddAsync(T entity);
    Task SaveChangesAsync();
}

// 3. Service Layer Implementation
public class StudentService : IStudentService
{
    private readonly IRepository<Student> _studentRepo;
    private readonly IMapper _mapper;

    public StudentService(IRepository<Student> repo, IMapper mapper)
    {
        _studentRepo = repo;
        _mapper = mapper;
    }

    public async Task<StudentDto> CreateStudentAsync(CreateStudentDto dto)
    {
        var entity = _mapper.Map<Student>(dto);
        await _studentRepo.AddAsync(entity);
        await _studentRepo.SaveChangesAsync();
        return _mapper.Map<StudentDto>(entity);
    }
}`}
            </pre>
          </div>
        )}

        {/* Tab 3: Backend Competencies Grid */}
        {activeTab === 'patterns' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fadeIn">
            {backendConcepts.map((item, idx) => (
              <div key={idx} className="glass-card p-5 border-purple-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
                  <h4 className="text-sm font-bold text-white font-mono">{item.name}</h4>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
