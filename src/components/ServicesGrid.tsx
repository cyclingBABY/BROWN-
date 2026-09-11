import React, { useState } from 'react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';
import { ServiceItem } from '../types';
import {
  Volume2,
  Building2,
  Sparkles,
  Tv,
  Video,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sliders,
  X,
  MessageSquare,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface ServicesGridProps {
  onSelectServiceForQuote?: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Volume2':
        return <Volume2 className="w-6 h-6 text-[#D4AF37]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'Tv':
        return <Tv className="w-6 h-6 text-amber-300" />;
      case 'Video':
        return <Video className="w-6 h-6 text-purple-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  const handleInquireService = (service: ServiceItem) => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(service.id);
    }
    const quoteElement = document.getElementById('contact');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedService(null);
  };

  return (
    <section id="services" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Subtle stage lighting background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-900/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4">
            <Sliders className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Turnkey Technical Capabilities</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Comprehensive <span className="gold-gradient-text">Event Production</span> Services
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From concert stadium sound and heavy trussing to intelligent lighting choreography and crystal LED walls, Brown Entertainment engineers every technical facet of your event.
          </p>
        </div>

        {/* The 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col rounded-2xl bg-[#141414] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-purple-950/40 hover:-translate-y-1"
            >
              {/* Card Image Header with Dark Stage Vignette */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-black">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-[#D4AF37]/30 text-[11px] font-semibold text-amber-200">
                  {service.badge}
                </div>

                {/* Icon bubble */}
                <div className="absolute bottom-3 left-4 p-2.5 rounded-xl bg-[#0D0D0D]/90 border border-white/15 backdrop-blur-md shadow-lg">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#F3CE5A] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Bullet features preview */}
                  <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs font-semibold transition-colors border border-white/10"
                  >
                    <span>Full Specs & Gear</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleInquireService(service)}
                    className="inline-flex items-center justify-center gap-1 py-2.5 px-3.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-black text-xs font-bold uppercase tracking-wider hover:opacity-90 shadow-md shadow-[#D4AF37]/20 transition-all"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#161616] to-[#D4AF37]/10 border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] hidden sm:block">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-white mb-1">
                Need a Custom Package Combining Sound, Trussing & LED Screens?
              </h4>
              <p className="text-slate-400 text-sm">
                We design tailored technical solutions for single-day corporate launches or multi-day national festivals.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/256704292981?text=Hello%20Brown%20Entertainment%2C%20I%20would%20like%20a%20custom%20event%20production%20package.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/50 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Detail Modal for Service Specs */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#121212] border border-[#D4AF37]/40 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header Image */}
            <div className="relative h-44 sm:h-52 w-full bg-black shrink-0">
              <img
                src={selectedService.imageUrl}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
              
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/70 text-slate-300 hover:text-white hover:bg-black border border-white/20 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest">
                  Technical Specifications
                </span>
                <h3 className="font-heading text-2xl font-black text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm">
              <p className="text-slate-300 leading-relaxed">
                {selectedService.fullDescription}
              </p>

              {/* Equipment highlights */}
              <div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  Key Equipment & Gear Inventory
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.equipmentHighlights.map((eq, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-200 text-xs font-medium">
                      • {eq}
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Features list */}
              <div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-purple-300 mb-3">
                  Service Deliverables
                </h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Recommended For:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.idealFor.map((item, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-[#D4AF37]/10 text-amber-200 border border-[#D4AF37]/20 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-black/60 border-t border-white/10 flex items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/256704292981?text=Hi%20Brown%20Entertainment%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(selectedService.title)}%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleInquireService(selectedService)}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-black text-xs font-bold uppercase tracking-wider shadow hover:opacity-90"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
