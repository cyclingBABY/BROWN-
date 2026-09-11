import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, MessageSquare, Menu, X, Calendar, Sparkles, Bot } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
  onOpenAIAssistant?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onOpenAIAssistant }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Photo Gallery', href: '#photo-gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Quote Estimator', href: '#quote-estimator' },
    { name: 'Contact & Booking', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro-bar for direct contact & emergency booking */}
      <div className="bg-[#080808] border-b border-[#D4AF37]/15 text-xs text-slate-300 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Uganda Stage & Event Production Hotline
            </span>
            <a
              href={`tel:${COMPANY_INFO.phone1Raw}`}
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              {COMPANY_INFO.phone1}
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${COMPANY_INFO.phone2Raw}`}
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              {COMPANY_INFO.phone2}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Kampala & East Africa Coverage</span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-[#f3ce5a] font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Direct Booking
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md shadow-2xl border-b border-[#D4AF37]/25 py-2.5'
            : 'bg-[#0D0D0D]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg">
              <Logo variant="horizontal" size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors tracking-wide relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-purple-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Call to Actions */}
            <div className="hidden sm:flex items-center gap-3">
              {onOpenAIAssistant && (
                <button
                  type="button"
                  onClick={onOpenAIAssistant}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-purple-950/80 border border-purple-500/50 text-purple-200 hover:bg-purple-900 hover:text-white transition-all duration-200 shadow-md shadow-purple-950/40 group"
                >
                  <Bot className="w-3.5 h-3.5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
                  <span>AI Booking</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </button>
              )}

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/80 hover:border-emerald-400 transition-all duration-200"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-[#D4AF37] via-[#f0cc62] to-[#B8860B] text-black hover:opacity-95 shadow-md shadow-[#D4AF37]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Get a Quote</span>
              </a>
            </div>

            {/* Mobile menu toggle button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${COMPANY_INFO.phone1Raw}`}
                className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30"
                aria-label="Call Brown Entertainment"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0D0D0D] border-b border-[#D4AF37]/30 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:bg-white/5 hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 space-y-2.5">
              <div className="text-xs text-slate-400 font-medium px-1">Call Technical Support Directly:</div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phone1Raw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:border-[#D4AF37]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  0704 292 981
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone2Raw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:border-[#D4AF37]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  0776 292 981
                </a>
              </div>

              {onOpenAIAssistant && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAIAssistant();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-purple-900/80 border border-purple-500/40 text-purple-200 font-bold text-sm hover:bg-purple-800 shadow-md"
                >
                  <Bot className="w-4 h-4 text-[#D4AF37]" />
                  <span>Brown AI Booking Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </button>
              )}

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp Now
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-black font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#D4AF37]/25"
              >
                <Sparkles className="w-4 h-4" />
                Get a Free Quote
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
