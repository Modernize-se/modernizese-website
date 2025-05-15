
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine active section
      const sections = ['hero', 'edge', 'capabilities', 'founders', 'impact', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY >= section.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { title: 'Our Edge', id: 'edge' },
    { title: 'Services', id: 'capabilities' },
    { title: 'Founders', id: 'founders' },
    { title: 'Impact', id: 'impact' },
    { title: 'Connect', id: 'contact' }
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'glassmorphism py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={() => scrollToSection('hero')}
          className="flex items-center space-x-2 group"
        >
          <div className="w-10 h-10 relative overflow-hidden">
            {/* Abstract logo shape */}
            <div className="absolute inset-0 w-6 h-6 bg-modern-accent rounded-sm transform rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
            <div className="absolute inset-0 w-4 h-4 bg-modern-secondary rounded-full translate-x-2 translate-y-3 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
          <span className="text-xl font-montserrat font-bold">Modernize-se</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                'text-sm font-semibold relative',
                activeSection === link.id 
                  ? 'text-modern-accent' 
                  : 'text-modern-text-muted hover:text-modern-text'
              )}
            >
              <span className="relative">
                {link.title}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-modern-accent"></span>
                )}
              </span>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:block px-5 py-2 rounded-full bg-modern-accent text-modern-bg font-medium text-sm transition-all hover:shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        >
          Initiate Contact
        </button>

        {/* Mobile hamburger menu - simplified for this version */}
        <button className="md:hidden text-modern-text-muted hover:text-modern-text">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
