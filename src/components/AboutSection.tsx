import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#F4F4F0] text-[#0A0A0A] border-b border-[#D8D8D3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Section Header */}
          <div className="lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
              BIOGRAPHY
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#0A0A0A]">
              ABOUT ME.
            </h2>
          </div>

          {/* Concise 2-Sentence Introduction & Core Skills */}
          <div className="lg:col-span-8 space-y-10">
            {/* Exactly two concise sentences */}
            <p className="text-xl sm:text-2xl md:text-3xl text-[#1A1A1A] font-normal leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Integrated Technical Capabilities */}
            <div className="pt-8 border-t border-[#D8D8D3]">
              <div className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-4">
                CORE CAPABILITIES &amp; TOOLS
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base font-mono text-[#444444]">
                {PERSONAL_INFO.skills.map((skill, index) => (
                  <React.Fragment key={skill}>
                    <span className="text-[#0A0A0A] font-medium hover:text-[#555555] transition-colors">
                      {skill}
                    </span>
                    {index < PERSONAL_INFO.skills.length - 1 && (
                      <span className="text-[#BBBBB5]" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
