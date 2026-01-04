import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { Button } from './ui/Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Program', href: '#program' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Seminars', href: '#seminars' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Apply', href: '#apply' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#0b0f14]/80 backdrop-blur-xl border-white/10' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="flex items-center justify-between py-4">
          
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 min-w-[200px] group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-300/20 to-violet-400/20 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-sky-300/30 transition-colors">
              <Hexagon className="text-sky-300 w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold tracking-wide leading-tight text-white">KMDSM</h1>
              <p className="text-[11px] text-muted">CE + Readiness + Systems</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-sm text-text/90 hover:bg-white/5 hover:text-white px-3 py-2 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button size="sm" href="#apply" className="hidden sm:inline-flex">Apply</Button>
            <Button variant="primary" size="sm" href="https://kingdommindsetcommunity.as.me/kmdsm" target="_blank" rel="noopener noreferrer">
              Book Call
            </Button>
            
            <button 
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="block px-4 py-3 rounded-xl bg-white/5 text-sm font-medium hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};