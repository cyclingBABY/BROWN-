import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  ArrowUp,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Sparkles
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] text-slate-300 border-t border-[#D4AF37]/25 relative overflow-hidden">
      {/* Stage lighting glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-40 bg-purple-950/20 blur-[120px] pointer-events-none" />

      {/* Main footer contents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Motto Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="horizontal" size="md" />
            
            <p className="font-serif italic text-[#E8C868] text-base mt-2">
              "Let's fix it for you"
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Uganda's trusted stage, sound, lighting, trussing, LED screen, and broadcast video production company. Delivering unforgettable event technical precision nationwide.
            </p>

            {/* Direct Phone Numbers Callout */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                Booking Hotlines:
              </span>
              <div className="flex flex-col gap-1 text-sm font-semibold">
                <a
                  href={`tel:${COMPANY_INFO.phone1Raw}`}
                  className="text-white hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {COMPANY_INFO.phone1}
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone2Raw}`}
                  className="text-white hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {COMPANY_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#D4AF37] hover:text-black transition-colors text-slate-400"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#D4AF37] hover:text-black transition-colors text-slate-400"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#D4AF37] hover:text-black transition-colors text-slate-400"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-600 text-emerald-300 hover:text-white transition-colors border border-emerald-500/30"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Core Technical Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage & Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services Directory</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Concert Portfolio</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us & Crew</a>
              </li>
              <li>
                <a href="#quote-estimator" className="hover:text-white transition-colors">Instant Estimator</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Booking</a>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Call to action */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Instant Booking
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Have an immediate event date to reserve? Message our team directly on WhatsApp with your technical specs.
            </p>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/40 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp +256 704 292 981</span>
            </a>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Kampala, Uganda</span>
              </div>
              <div>Available for cross-country deployments across East Africa.</div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and to top button */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong>Brown Entertainment</strong>. All rights reserved.
            <span className="hidden sm:inline"> • "Let's fix it for you"</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">Sound • Truss • Lighting • LED • Videography</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-[#D4AF37] hover:text-black text-slate-400 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
