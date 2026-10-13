import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  ArrowUp,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ArrowUpRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', url: PERSONAL_INFO.contact.github, icon: Github },
    { name: 'LinkedIn', url: PERSONAL_INFO.contact.linkedin, icon: Linkedin },
    { name: 'Facebook', url: PERSONAL_INFO.contact.facebook, icon: Facebook },
    { name: 'Instagram', url: PERSONAL_INFO.contact.instagram, icon: Instagram },
  ];

  return (
    <footer
      id="contact"
      className="bg-[#0A0A0A] text-[#F4F4F0] pt-24 md:pt-32 pb-12 border-t border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bold Closing Statement */}
        <div className="border-b border-[#222222] pb-12 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-3">
            GET IN TOUCH
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F4F4F0] leading-none mb-6">
            LET&apos;S MAKE
            <br />
            SOMETHING
            <br />
            MEANINGFUL.
          </h2>

          <div className="pt-6 flex flex-wrap items-center gap-4">
            {/* Primary Email Dispatch */}
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-wider bg-[#F4F4F0] text-[#0A0A0A] font-semibold hover:bg-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_INFO.contact.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Quick Copy Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 text-xs font-mono uppercase tracking-wider border border-[#333333] hover:border-[#F4F4F0] text-[#F4F4F0] transition-colors"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#888888]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Understated Social Links */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 pb-16 border-b border-[#1A1A1A]">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#888888] hover:text-[#F4F4F0] transition-colors group"
              >
                <Icon className="w-4 h-4 text-[#666666] group-hover:text-[#F4F4F0] transition-colors" />
                <span>{social.name}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            );
          })}
        </div>

        {/* Minimal Footer Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <div>
            &copy; {currentYear} {PERSONAL_INFO.fullName}.
          </div>

          <a
            href="#hero"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#888888] hover:text-[#F4F4F0] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
