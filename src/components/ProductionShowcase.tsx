import React, { useState } from 'react';
import { PRODUCTION_SHOWCASE_GALLERY, COMPANY_INFO } from '../data/companyData';
import {
  Sparkles,
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Layers,
  Volume2,
  Tv,
  Video,
  Heart
} from 'lucide-react';

type GalleryFilter = 'all' | 'sound' | 'lighting' | 'staging' | 'weddings' | 'broadcast';

export const ProductionShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filters: { id: GalleryFilter; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Photos (8)', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'sound', label: 'Sound & Audio', icon: <Volume2 className="w-3.5 h-3.5" /> },
    { id: 'staging', label: 'Truss & Staging', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'lighting', label: 'Stage Lighting', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'weddings', label: 'VIP Weddings', icon: <Heart className="w-3.5 h-3.5" /> },
    { id: 'broadcast', label: '4K Broadcast Video', icon: <Video className="w-3.5 h-3.5" /> },
  ];

  const galleryItems = [
    {
      ...PRODUCTION_SHOWCASE_GALLERY[0],
      filter: 'sound',
      venue: 'Lugogo Cricket Oval & Namboole',
      gearSpec: 'Active Touring Line Array Clusters + Dual 18" Subwoofers',
      rating: '105dB Clean Throw @ 120m',
    },
    {
      ...PRODUCTION_SHOWCASE_GALLERY[1],
      filter: 'staging',
      venue: 'Lake Victoria Serena & Kololo',
      gearSpec: '400mm Certified Box Truss with 1-Ton Electric Chain Hoists',
      rating: 'Certified Rigging Calculations',
    },
    {
      ...PRODUCTION_SHOWCASE_GALLERY[2],
      filter: 'lighting',
      venue: 'Kololo Ceremonial Grounds',
      gearSpec: '48x Sharpy 380W Moving Beams, RGBW Washes, Dual Hazers',
      rating: 'GrandMA DMX Programmed',
    },
    {
      ...PRODUCTION_SHOWCASE_GALLERY[3],
      filter: 'staging',
      venue: 'Kampala Serena Hotel Victoria Hall',
      gearSpec: 'Curved High-Definition P2.9 LED Display & Warm Profile Spots',
      rating: 'Presidential Protocol Standard',
    },
    {
      ...PRODUCTION_SHOWCASE_GALLERY[4],
      filter: 'weddings',
      venue: 'Speke Resort Munyonyo Convention Centre',
      gearSpec: 'Warm Amber Profile Spotlights, Floral Truss Arch & Mirror Runway',
      rating: 'VIP Luxury Experience',
    },
    {
      ...PRODUCTION_SHOWCASE_GALLERY[5],
      filter: 'broadcast',
      venue: 'Nationwide Arena Concerts',
      gearSpec: '32-foot Motorized Telescopic Jib Crane & Sony FX6 4K Cinema Rigs',
      rating: 'Live-to-LED & Broadcast Stream',
    },
    {
      ...PRODUCTION_SHOWCASE_GALLERY[6],
      filter: 'sound',
      venue: 'Jinja Nile Discovery Park & Arenas',
      gearSpec: 'Yamaha / Allen & Heath Digital Consoles with Multi-track Recording',
      rating: 'Veteran FOH Sound Engineers',
    },
    {
      ...PRODUCTION_SHOWCASE_GALLERY[7],
      filter: 'staging',
      venue: 'Lugogo Cricket Oval Stadium',
      gearSpec: 'Full Roof Canopy Stage, Twin Delay Sound Towers, 250kVA Power',
      rating: 'Turnkey 50,000+ Crowd Capacity',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.filter === activeFilter);

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentPhoto = selectedPhotoIndex !== null ? filteredItems[selectedPhotoIndex] : null;

  return (
    <section id="photo-gallery" className="relative py-24 bg-[#0B0B0B] border-t border-b border-white/5 overflow-hidden">
      {/* Dynamic stage light beams in background */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-purple-900/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Real Production Imagery</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Our Gear & Stages <span className="gold-gradient-text">In Action</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            High-resolution photography showcasing Brown Entertainment's touring line arrays, certified box trusses, dynamic stage lighting, VIP wedding stages, and 4K camera crane rigs across Uganda.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setActiveFilter(f.id);
                setSelectedPhotoIndex(null);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === f.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-black shadow-lg shadow-[#D4AF37]/20 font-bold'
                  : 'bg-[#151515] text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {f.icon}
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group cursor-pointer relative rounded-2xl bg-[#131313] border border-white/10 hover:border-[#D4AF37]/60 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/40 flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-black/50" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-[#E8C868]">
                  {item.category}
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/75 text-slate-300 group-hover:text-[#D4AF37] group-hover:bg-black transition-colors border border-white/10">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Rating / Quality Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3 h-3" /> {item.rating}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-[#E8C868] transition-colors leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 truncate max-w-[170px]">
                    📍 {item.venue}
                  </span>
                  <span className="text-[#D4AF37] font-semibold group-hover:underline flex items-center gap-1">
                    Expand
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#181818] to-purple-950/40 border border-[#D4AF37]/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
              Need these exact gear setups for your upcoming event?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Connect directly with Brown Entertainment's technical directors via WhatsApp for venue measurements, stage CAD renders, and equipment reservations.
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-black font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-[#D4AF37]/25 hover:opacity-95 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (+256 704 292 981)</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentPhoto && selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#121212] border border-[#D4AF37]/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main High-Res Image with Nav Arrows */}
            <div className="relative h-72 sm:h-96 md:h-[480px] w-full bg-black overflow-hidden flex items-center justify-center">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/50" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 hover:bg-black text-white hover:text-[#D4AF37] border border-white/20 transition-all z-10"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={handlePrevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/75 hover:bg-black text-white hover:text-[#D4AF37] border border-white/20 transition-all z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={handleNextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/75 hover:bg-black text-white hover:text-[#D4AF37] border border-white/20 transition-all z-10"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo Title Overlay */}
              <div className="absolute bottom-4 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  {currentPhoto.category} • Photo {selectedPhotoIndex + 1} of {filteredItems.length}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-white drop-shadow-md">
                  {currentPhoto.title}
                </h3>
              </div>
            </div>

            {/* Modal Specs & Actions */}
            <div className="p-6 overflow-y-auto space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                {currentPhoto.caption}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-black/60 border border-white/10 text-xs">
                <div>
                  <span className="text-[#D4AF37] font-bold block mb-0.5">Deployment Venue:</span>
                  <span className="text-slate-200">{currentPhoto.venue}</span>
                </div>
                <div>
                  <span className="text-purple-300 font-bold block mb-0.5">Technical Rigging Specification:</span>
                  <span className="text-slate-200">{currentPhoto.gearSpec}</span>
                </div>
              </div>

              {/* Direct Booking Link */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Ready to book this setup in Uganda?
                </span>
                <a
                  href={`https://wa.me/256704292981?text=Hello%20Brown%20Entertainment%2C%20I%20saw%20your%20production%20photo%20of%20"${encodeURIComponent(currentPhoto.title)}"%20and%20want%20to%20inquire%20for%20my%20event.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire About This Setup on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
