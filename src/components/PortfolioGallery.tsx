import React, { useState } from 'react';
import { PORTFOLIO_DATA, COMPANY_INFO } from '../data/companyData';
import { PortfolioItem, PortfolioCategory } from '../types';
import {
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Maximize2,
  X,
  MessageSquare,
  ArrowRight,
  Layers
} from 'lucide-react';

export const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories: { id: PortfolioCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'concerts', label: 'Concerts & Festivals' },
    { id: 'truss', label: 'Stage & Trussing' },
    { id: 'lighting', label: 'Lighting & FX' },
    { id: 'led', label: 'LED Screens' },
    { id: 'corporate', label: 'Corporate Galas' },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 bg-[#0A0A0A] border-t border-b border-white/5 overflow-hidden">
      {/* Stage ambient beams */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-800/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#D4AF37]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Past Concert Stages & <span className="gold-gradient-text">Event Builds</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A glimpse into the stadium rigs, concert stages, awards galas, and bespoke lighting architectures we've brought to life across Uganda.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-black shadow-lg shadow-[#D4AF37]/25'
                  : 'bg-[#161616] text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer relative rounded-2xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/30 flex flex-col justify-between"
            >
              {/* Image with zoom on hover */}
              <div className="relative h-60 w-full overflow-hidden bg-black">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/40" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-purple-300">
                  {item.categoryLabel}
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/70 text-slate-300 group-hover:text-[#D4AF37] group-hover:bg-black/90 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-amber-200 bg-black/70 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/10 w-fit">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#F3CE5A] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Service tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {item.servicesProvided.map((service, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {item.audienceSize || 'VIP Attendance'}
                    </span>
                    <span className="text-[#D4AF37] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      View Rig Setup <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats & reassurance */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Looking for technical photos or stage load calculations of a specific venue like Lugogo or Serena?
          </p>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-[#D4AF37]/40 text-amber-200 text-xs font-bold uppercase tracking-wider transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            <span>Request Full Portfolio & Technical Rider via WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Lightbox / Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#141414] border border-[#D4AF37]/40 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Image */}
            <div className="relative h-64 sm:h-80 w-full bg-black shrink-0">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/60" />

              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/80 text-white hover:bg-black border border-white/20 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2.5 py-1 rounded-md bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  {activeItem.categoryLabel}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-white mt-2">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-2 text-slate-300 text-xs">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span><strong>Venue:</strong> {activeItem.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-xs">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span><strong>Audience:</strong> {activeItem.audienceSize}</span>
                </div>
              </div>

              <div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Production Overview
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
                  Services & Technical Scope
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeItem.servicesProvided.map((service, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  Key Technical Milestones
                </h4>
                <div className="space-y-1.5">
                  {activeItem.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-black/60 border-t border-white/10 flex items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                Back
              </button>

              <a
                href={`https://wa.me/256704292981?text=Hi%20Brown%20Entertainment%2C%20I%20saw%20your%20production%20of%20${encodeURIComponent(activeItem.title)}%20and%20would%20like%20a%20quote%20for%20a%20similar%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:opacity-95"
              >
                <span>Book Similar Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
