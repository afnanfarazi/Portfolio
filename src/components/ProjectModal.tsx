import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';
import { X, ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border border-[#303030] text-[#F4F4F0] p-6 sm:p-8 md:p-10 shadow-2xl focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-start justify-between border-b border-[#242424] pb-5 mb-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#777777] uppercase mb-1">
              {project.category}
            </div>
            <h3 id="modal-project-title" className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F0]">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 border border-[#303030] hover:border-[#F4F4F0] text-[#777777] hover:text-[#F4F4F0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Preview */}
        <div className="w-full mb-6 rounded overflow-hidden">
          <ProjectVisual type={project.visualType} className="h-64 sm:h-72" />
        </div>

        {/* Status & Tech tags */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-[#888888] pb-6 border-b border-[#242424]">
          {project.status && (
            <>
              <span className="text-[#F4F4F0] font-medium">{project.status}</span>
              <span aria-hidden="true">·</span>
            </>
          )}
          <span>Stack: {project.technologies.join(', ')}</span>
        </div>

        {/* Description body */}
        <div className="py-6 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#777777]">Overview</h4>
          <p className="text-base sm:text-lg text-[#D0D0CB] leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-[#242424] flex flex-wrap items-center justify-between gap-4">
          <div>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider bg-[#F4F4F0] text-[#0A0A0A] font-semibold hover:bg-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            ) : null}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono uppercase tracking-wider border border-[#303030] text-[#777777] hover:text-[#F4F4F0] hover:border-[#F4F4F0] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
