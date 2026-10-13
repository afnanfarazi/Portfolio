import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ChessmanLogo } from './ChessmanLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#222222] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Monogram Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 text-[#F4F4F0]"
          >
            <span className="w-8 h-8 flex items-center justify-center bg-[#161616] border border-[#303030] text-[#F4F4F0] group-hover:border-[#F4F4F0] transition-colors overflow-hidden p-1">
              <ChessmanLogo size={22} className="w-full h-full object-contain" />
            </span>
            <span className="font-display font-semibold tracking-tight text-sm hidden sm:inline-block">
              {PERSONAL_INFO.fullName}
            </span>
          </a>

          {/* Zone 2: Essential Single-line Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-[#888888]"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive ? 'text-[#F4F4F0] font-semibold' : 'hover:text-[#F4F4F0]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#F4F4F0]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: CTA Button */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider bg-[#F4F4F0] text-[#0A0A0A] font-semibold hover:bg-white transition-colors whitespace-nowrap shrink-0"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 border border-[#303030] text-[#F4F4F0] hover:border-[#F4F4F0] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#242424] px-6 py-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4 text-sm font-mono uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`py-2 border-b border-[#181818] transition-colors ${
                  activeSection === link.id ? 'text-[#F4F4F0] font-bold' : 'text-[#888888]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 mt-2 px-4 py-3 text-xs font-mono uppercase tracking-wider bg-[#F4F4F0] text-[#0A0A0A] font-bold text-center"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
