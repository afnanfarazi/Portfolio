import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PortraitPhoto } from './PortraitPhoto';
import { ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen bg-[#0A0A0A] text-[#F4F4F0] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#222222]"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#F4F4F0 1px, transparent 1px), linear-gradient(90deg, #F4F4F0 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Typographic Identity */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8 order-2 lg:order-1">
            {/* Small Label */}
            <div>
              <span className="text-xs sm:text-sm font-mono tracking-widest text-[#888888] uppercase">
                {PERSONAL_INFO.eyebrow}
              </span>
            </div>

            {/* Oversized Name Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-[#F4F4F0]">
              SARIUT
              <br />
              ULLAH
              <br />
              AFNAN
            </h1>

            {/* Short Introduction */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#C0C0BA] max-w-xl font-normal leading-relaxed">
              &ldquo;{PERSONAL_INFO.headline}&rdquo;
            </p>

            {/* Primary Action Link */}
            <div className="pt-2">
              <a
                href="#work"
                onClick={scrollToWork}
                className="inline-flex items-center gap-2 group text-sm font-mono uppercase tracking-widest text-[#F4F4F0] hover:text-white transition-colors"
              >
                <span className="border-b border-[#F4F4F0] pb-1 group-hover:border-white">
                  EXPLORE MY WORK
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Monochrome Portrait */}
          <div className="lg:col-span-6 xl:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end w-full">
            <PortraitPhoto className="shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
