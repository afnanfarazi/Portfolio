import React, { useState } from 'react';

interface PortraitPhotoProps {
  className?: string;
}

export const PortraitPhoto: React.FC<PortraitPhotoProps> = ({ className = '' }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-w-md sm:max-w-lg lg:max-w-[540px] xl:max-w-[580px] h-[460px] sm:h-[540px] lg:h-[620px] xl:h-[660px] mx-auto lg:ml-auto bg-[#0E0E0E] border border-[#262626] overflow-hidden select-none shadow-2xl ${className}`}
    >
      {/* Background Architectural Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F4F4F0 1px, transparent 1px), linear-gradient(90deg, #F4F4F0 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {!hasError ? (
        <div className="relative w-full h-full flex items-end justify-center bg-[#0C0C0C] overflow-hidden">
          {/* Subtle bottom gradient to naturally blend subject with the dark page */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90 z-10 pointer-events-none" />

          {/* Authentic Portrait Image */}
          <img
            src="/portrait.png"
            alt="Portrait of Sariut Ullah Afnan"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('thumbnail%20photo')) {
                target.src = '/thumbnail photo without bg.png';
              } else {
                setHasError(true);
              }
            }}
            style={{ objectPosition: '72% 18%' }}
            className="w-full h-full object-cover scale-105 sm:scale-110 filter grayscale contrast-[1.08] brightness-[0.98] transition-all duration-500 hover:scale-115 hover:contrast-[1.12]"
          />

          {/* Minimal Corner Monogram Badge */}
          <div className="absolute top-4 left-4 z-20 text-[10px] font-mono tracking-widest text-[#777777] uppercase bg-[#0A0A0A]/85 px-2.5 py-1 border border-[#262626] backdrop-blur-sm">
            SARIUT ULLAH AFNAN
          </div>
        </div>
      ) : (
        /* Editorial Fallback Display */
        <div className="relative w-full h-full flex flex-col items-center justify-between p-8 text-center text-[#F4F4F0]">
          <div className="w-full flex justify-between items-center text-[10px] font-mono text-[#777777] uppercase tracking-widest border-b border-[#222222] pb-3">
            <span>PORTRAIT</span>
            <span>3:4 EDITORIAL</span>
          </div>

          <div className="my-auto space-y-4 max-w-xs">
            <div className="w-24 h-24 mx-auto rounded-full border border-[#333333] flex items-center justify-center bg-[#161616]">
              <span className="font-display font-bold text-3xl text-[#C5C5BF]">SA</span>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-display font-semibold text-xl text-[#F4F4F0]">
                Sariut Ullah Afnan
              </h3>
              <p className="text-xs text-[#777777] font-mono uppercase tracking-wider">
                Software Engineering / Creative Technology
              </p>
            </div>
          </div>

          <div className="w-full text-[10px] font-mono text-[#666666] pt-3 border-t border-[#1E1E1E]">
            MONOCHROME FILM GRADE
          </div>
        </div>
      )}
    </div>
  );
};