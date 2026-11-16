import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ChevronRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3.5 shadow-2xl shadow-black/50' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Brand */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center space-x-1.5 focus:outline-none focus:ring-1 focus:ring-white/40 rounded px-1"
            >
              <span className="text-lg font-light tracking-[0.2em] text-white group-hover:text-neutral-200 transition-colors">
                KARTHIK<span className="text-[#8E8E93] group-hover:text-white transition-colors">.</span>
              </span>
            </a>

            {/* Center Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 border border-white/5 bg-white/[0.03] backdrop-blur-md rounded-full px-4 py-1.5 shadow-inner">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3.5 py-1 text-xs font-normal tracking-wide transition-all duration-200 rounded-full focus:outline-none ${
                      isActive
                        ? 'text-white font-medium'
                        : 'text-[#A1A1A6] hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right: Resume CTA */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={personalData.resumeUrl}
                download="P_Karthik_Rao_Resume.pdf"
                className="group relative inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95"
              >
                <span>Download Resume</span>
                <Download className="w-3.5 h-3.5 text-[#A1A1A6] group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center space-x-2">
              <a
                href={personalData.resumeUrl}
                download="P_Karthik_Rao_Resume.pdf"
                className="inline-flex items-center p-2 rounded-full text-white bg-white/5 border border-white/10"
                aria-label="Download Resume"
              >
                <Download className="w-4 h-4 text-white" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#A1A1A6] hover:text-white bg-white/5 border border-white/10 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[62px] z-30 bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl lg:hidden flex flex-col space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-colors ${
                      isActive
                        ? 'text-white bg-white/10 font-medium'
                        : 'text-[#A1A1A6] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10">
              <a
                href={personalData.resumeUrl}
                download="P_Karthik_Rao_Resume.pdf"
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-neutral-200 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
