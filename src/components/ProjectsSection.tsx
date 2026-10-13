import React, { useState } from 'react';
import { Project, FEATURED_PROJECTS, SECONDARY_PROJECTS } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="py-24 md:py-32 bg-[#0A0A0A] text-[#F4F4F0] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-[#222222] pb-6 mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
              PORTFOLIO
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#F4F4F0]">
              SELECTED WORK.
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666]">
            3 Featured Projects
          </span>
        </div>

        {/* 3 Prominent Featured Projects with Alternating Editorial Layout */}
        <div className="space-y-20 lg:space-y-28 mb-24">
          {FEATURED_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group border border-[#222222] hover:border-[#383838] bg-[#0C0C0C] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Large Visual Frame */}
                  <div
                    className={`lg:col-span-7 h-72 sm:h-80 md:h-[380px] cursor-pointer ${
                      isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
                    }`}
                    onClick={() => setActiveModalProject(project)}
                  >
                    <ProjectVisual
                      type={project.visualType}
                      isHovered={hoveredProjectId === project.id}
                      className="h-full border-0"
                    />
                  </div>

                  {/* Concise Editorial Copy */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between ${
                      isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Category & Status */}
                      <div className="flex items-center gap-2 text-xs font-mono text-[#777777] uppercase tracking-wider mb-3">
                        <span>{project.category}</span>
                        {project.status && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#AAAAAA]">{project.status}</span>
                          </>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3
                        onClick={() => setActiveModalProject(project)}
                        className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F0] group-hover:text-white transition-colors mb-4 cursor-pointer flex items-center justify-between"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">
                          {project.title}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-[#666666] group-hover:text-white transition-colors shrink-0" />
                      </h3>

                      {/* 1 Short Description */}
                      <p className="text-sm sm:text-base text-[#888888] leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Minimal Technology Labels & Link */}
                    <div className="pt-6 border-t border-[#1C1C1C] flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#888888]">
                        {project.technologies.map((tech, tIdx) => (
                          <React.Fragment key={tech}>
                            <span className="text-[#BBBBBB]">{tech}</span>
                            {tIdx < project.technologies.length - 1 && (
                              <span className="text-[#444444]" aria-hidden="true">/</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs font-mono uppercase tracking-wider text-[#F4F4F0] hover:underline"
                      >
                        Inspect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Secondary Work Index */}
        <div className="pt-12 border-t border-[#1E1E1E]">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#1A1A1A]">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#777777]">
              SECONDARY WORK INDEX
            </h3>
            <span className="text-xs font-mono text-[#555555]">
              {SECONDARY_PROJECTS.length} Selected Projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SECONDARY_PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group cursor-pointer p-6 bg-[#0E0E0E] border border-[#202020] hover:border-[#383838] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-mono text-[#777777] uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#F4F4F0] mb-2 group-hover:translate-x-0.5 transition-transform flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#555555] group-hover:text-white transition-colors" />
                  </h4>
                  <p className="text-xs text-[#888888] leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#181818] flex items-center justify-between text-[11px] font-mono text-[#666666]">
                  <span>{project.technologies.slice(0, 2).join(' · ')}</span>
                  <span className="text-[#AAAAAA] group-hover:text-white">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal Dialog */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
