import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personal } from '../data/personal';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled ? 'nav-clean py-3.5 shadow-subtle' : 'bg-surface-white/90 backdrop-blur-md py-4 border-b border-surface-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-base font-semibold tracking-tight text-primary hover:text-black transition-colors"
          >
            {personal.navBrand}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-colors relative ${
                    isActive ? 'text-primary' : 'text-muted hover:text-primary'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download Resume Button */}
          <div className="hidden sm:flex items-center">
            <a
              href={personal.resumePath}
              download="P_Karthik_Rao_Resume.pdf"
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-medium text-surface-white bg-primary hover:bg-black rounded-lg transition-colors active:scale-95 shadow-sm"
            >
              <span>Download Resume</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger & Quick Resume Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href={personal.resumePath}
              download="P_Karthik_Rao_Resume.pdf"
              className="p-2 text-primary border border-surface-border rounded-lg bg-surface-white"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary border border-surface-border rounded-lg bg-surface-white hover:bg-surface-section transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-white border-b border-surface-border px-6 py-4 shadow-elevated animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'bg-surface-section text-primary font-semibold' : 'text-body hover:bg-surface-alt hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-surface-border">
            <a
              href={personal.resumePath}
              download="P_Karthik_Rao_Resume.pdf"
              className="flex items-center justify-center space-x-2 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-surface-white bg-primary hover:bg-black rounded-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
