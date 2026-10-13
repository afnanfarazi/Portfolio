import React from 'react';

interface ProjectVisualProps {
  type: 'recruitment-platform' | 'ml-pipeline' | 'microscope-vision' | 'safety-app' | 'java-game' | 'c-calculator';
  className?: string;
  isHovered?: boolean;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type, className = '', isHovered = false }) => {
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-[#101010] border border-[#262626] select-none ${className}`}
      style={{ minHeight: '260px' }}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#F4F4F0 1px, transparent 1px), linear-gradient(90deg, #F4F4F0 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Dhandha: Clean Browser Mockup of Recruitment Interface */}
      {type === 'recruitment-platform' && (
        <div className="relative h-full flex flex-col justify-between p-5 md:p-6 text-[#F4F4F0]">
          {/* Browser Window Header */}
          <div className="flex items-center justify-between border-b border-[#242424] pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#222222]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#222222]" />
              <div className="ml-3 px-3 py-1 bg-[#161616] border border-[#282828] text-[10px] font-mono text-[#888888] rounded">
                dhandhabd.org/portal/overseas
              </div>
            </div>
            <div className="text-[10px] font-mono text-[#666666] uppercase">Flask · MySQL</div>
          </div>

          {/* Interface Content Mockup */}
          <div className="space-y-3 my-auto">
            <div className="flex items-center justify-between text-xs">
              <span className="font-display font-semibold text-sm text-[#F4F4F0]">Overseas Employment Registry</span>
              <span className="text-[11px] font-mono text-[#888888]">Verified Agencies Only</span>
            </div>

            {/* Simulated Data Grid */}
            <div className="space-y-2 font-mono text-[11px]">
              <div className="flex items-center justify-between p-3 bg-[#161616] border border-[#262626] rounded transition-transform group-hover:translate-x-0.5">
                <div className="flex items-center gap-3">
                  <span className="text-[#666666]">01</span>
                  <span className="text-[#F4F4F0] font-sans font-medium">Technical Trades · Japan</span>
                </div>
                <span className="text-[10px] text-[#999999]">Agency ID: #4402</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#141414] border border-[#222222] rounded transition-transform group-hover:translate-x-0.5">
                <div className="flex items-center gap-3">
                  <span className="text-[#666666]">02</span>
                  <span className="text-[#F4F4F0] font-sans font-medium">Civil Engineering · UAE</span>
                </div>
                <span className="text-[10px] text-[#999999]">Agency ID: #3180</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#121212] border border-[#202020] rounded opacity-75">
                <div className="flex items-center gap-3">
                  <span className="text-[#666666]">03</span>
                  <span className="text-[#F4F4F0] font-sans font-medium">Logistics &amp; Transport · Qatar</span>
                </div>
                <span className="text-[10px] text-[#999999]">Agency ID: #1944</span>
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="pt-3 border-t border-[#1E1E1E] flex items-center justify-between text-[10px] font-mono text-[#666666]">
            <span>Role-Based Auth Active</span>
            <span className="text-[#888888]">Relational Pipeline</span>
          </div>
        </div>
      )}

      {/* Industrial Product Defect Detection: Microscope Optical Inspection */}
      {type === 'microscope-vision' && (
        <div className="relative h-full flex flex-col justify-between p-5 md:p-6 text-[#F4F4F0]">
          <div className="flex items-center justify-between border-b border-[#242424] pb-3 mb-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">
              OPTICAL MICROSCOPY / SURFACE DEFECT
            </span>
            <span className="text-[10px] font-mono text-[#AAAAAA]">MAG: 100X</span>
          </div>

          {/* Microscopic Surface Texture Simulation */}
          <div className="my-auto relative flex items-center justify-center py-3">
            {/* Circular lens aperture */}
            <div className="relative w-44 h-44 rounded-full border border-[#444444] flex items-center justify-center bg-[#141414] overflow-hidden">
              {/* Radial gradient representing light concentration */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#252525_0%,_#0E0E0E_80%)]" />

              {/* Surface micro-lines pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <filter id="noise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                  <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
              </svg>

              {/* Crosshair reticle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-[1px] bg-[#383838]" />
                <div className="h-full w-[1px] bg-[#383838] absolute" />
              </div>

              {/* Concentric rings */}
              <div className="w-32 h-32 rounded-full border border-[#2E2E2E] absolute pointer-events-none" />
              <div className="w-16 h-16 rounded-full border border-[#3C3C3C] absolute pointer-events-none" />

              {/* Defect Region of Interest (ROI) */}
              <div className="absolute top-8 right-10 w-10 h-10 border border-[#F4F4F0] border-dashed flex flex-col justify-between p-0.5">
                <span className="text-[7px] font-mono bg-[#0A0A0A] text-[#F4F4F0] px-0.5 leading-none">ANOMALY</span>
                <span className="text-[7px] font-mono text-right text-[#888888] leading-none">Δ 4.2%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#666666] pt-3 border-t border-[#1E1E1E]">
            <span>Contour Edge Analysis</span>
            <span className="text-[#888888]">Non-Destructive Testing</span>
          </div>
        </div>
      )}

      {/* Student Academic Prediction: Minimalist ML Dashboard */}
      {type === 'ml-pipeline' && (
        <div className="relative h-full flex flex-col justify-between p-5 md:p-6 text-[#F4F4F0]">
          <div className="flex items-center justify-between border-b border-[#242424] pb-3 mb-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">
              PREDICTIVE MODELING MATRIX
            </span>
            <span className="text-[10px] font-mono text-[#AAAAAA]">scikit-learn</span>
          </div>

          <div className="my-auto space-y-4">
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
              <div className="p-2.5 bg-[#141414] border border-[#242424]">
                <div className="text-[#666666] mb-1">Inputs</div>
                <div className="text-[#F4F4F0]">Attendance &amp; Quizzes</div>
              </div>
              <div className="p-2.5 bg-[#141414] border border-[#242424]">
                <div className="text-[#666666] mb-1">Classifiers</div>
                <div className="text-[#F4F4F0]">Tree · Forest · LogReg</div>
              </div>
              <div className="p-2.5 bg-[#141414] border border-[#242424]">
                <div className="text-[#666666] mb-1">Output</div>
                <div className="text-[#F4F4F0]">Early Risk Index</div>
              </div>
            </div>

            {/* Minimalist Distribution Wave */}
            <div className="p-3 bg-[#141414] border border-[#242424] rounded space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-[#777777]">
                <span>Risk Stratification Signal</span>
                <span>k-Fold Evaluated</span>
              </div>
              <div className="h-12 flex items-end gap-1.5 pt-1">
                {[30, 48, 62, 85, 70, 92, 60, 45, 68, 80, 52, 74].map((v, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#3A3A3A] hover:bg-[#888888] transition-colors"
                    style={{ height: `${v}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#666666] pt-3 border-t border-[#1E1E1E]">
            <span>Pedagogical Support Pipeline</span>
            <span className="text-[#888888]">Continuous Validation</span>
          </div>
        </div>
      )}

      {/* Safety for Woman: Mobile Interface Mockup */}
      {type === 'safety-app' && (
        <div className="relative h-full flex flex-col justify-between p-4 md:p-6 text-[#F4F4F0]">
          <div className="flex items-center justify-between border-b border-[#242424] pb-2 mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">MOBILE PROTOTYPE</span>
            <span className="text-[10px] font-mono text-[#AAAAAA]">GPS DISPATCH</span>
          </div>

          <div className="my-auto flex flex-col items-center justify-center py-2 space-y-3">
            <div className="w-16 h-16 rounded-full border-2 border-[#555555] bg-[#1A1A1A] flex flex-col items-center justify-center text-center shadow-inner">
              <span className="font-display font-bold text-xs tracking-widest text-[#F4F4F0]">SOS</span>
            </div>
            <div className="w-full max-w-xs space-y-1 font-mono text-[10px]">
              <div className="flex justify-between p-1.5 bg-[#141414] border border-[#222222] rounded">
                <span className="text-[#777777]">Live Coordinates</span>
                <span className="text-[#F4F4F0]">23.8103° N, 90.4125° E</span>
              </div>
              <div className="flex justify-between p-1.5 bg-[#141414] border border-[#222222] rounded">
                <span className="text-[#777777]">Dispatch Target</span>
                <span className="text-[#F4F4F0]">Designated Circle</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-[#666666] pt-2 border-t border-[#1E1E1E]">
            Rapid Intervention Concept
          </div>
        </div>
      )}

      {/* LexiSpell Quest: Java Swing Frame */}
      {type === 'java-game' && (
        <div className="relative h-full flex flex-col justify-between p-4 md:p-6 text-[#F4F4F0]">
          <div className="flex items-center justify-between border-b border-[#242424] pb-2 mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">JAVA SWING</span>
            <span className="text-[10px] font-mono text-[#AAAAAA]">OOP ARCHITECTURE</span>
          </div>

          <div className="my-auto p-3 bg-[#141414] border border-[#242424] rounded space-y-2">
            <div className="flex justify-between text-[10px] font-mono text-[#777777]">
              <span>PUZZLE ROUND #04</span>
              <span>STREAK: 8X</span>
            </div>
            <div className="flex justify-center gap-1.5 py-1">
              {['S', 'P', 'E', 'L', 'L'].map((char, i) => (
                <div
                  key={i}
                  className="w-7 h-8 bg-[#202020] border border-[#3A3A3A] rounded flex items-center justify-center font-mono font-bold text-xs text-[#F4F4F0]"
                >
                  {char}
                </div>
              ))}
            </div>
          </div>

          <div className="text-[10px] font-mono text-[#666666] pt-2 border-t border-[#1E1E1E]">
            Desktop Educational Engine
          </div>
        </div>
      )}

      {/* Universal Calculator: C Execution Frame */}
      {type === 'c-calculator' && (
        <div className="relative h-full flex flex-col justify-between p-4 md:p-6 text-[#F4F4F0]">
          <div className="flex items-center justify-between border-b border-[#242424] pb-2 mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">C PARSER</span>
            <span className="text-[10px] font-mono text-[#AAAAAA]">MEMORY MANAGEMENT</span>
          </div>

          <div className="my-auto p-3 bg-[#0C0C0C] border border-[#222222] rounded font-mono text-[11px] space-y-1">
            <div className="text-[#666666]">$ gcc -O2 calc.c &amp;&amp; ./calc</div>
            <div className="text-[#F4F4F0]">&gt; eval &quot;4 * (8 + 2) / 5&quot; = 8.00</div>
            <div className="text-[#666666] text-[10px]">Stack trace: OK · 0 leaks</div>
          </div>

          <div className="text-[10px] font-mono text-[#666666] pt-2 border-t border-[#1E1E1E]">
            Algorithmic Arithmetic Core
          </div>
        </div>
      )}

      {/* Subtle hover state transition */}
      <div
        className={`absolute inset-0 bg-white/[0.02] pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
