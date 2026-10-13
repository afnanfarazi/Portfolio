/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'work', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F4F4F0] flex flex-col font-sans selection:bg-[#F4F4F0] selection:text-[#0A0A0A]">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow">
        {/* A. Hero: Name, short intro, portrait, explore work link */}
        <HeroSection />

        {/* B. Selected Work: 3 prominent projects + secondary work index */}
        <ProjectsSection />

        {/* C. About: Concise 2-sentence bio + curated skill labels */}
        <AboutSection />
      </main>

      {/* D. Contact: Closing statement, understated links, minimal footer */}
      <ContactSection />
    </div>
  );
}
