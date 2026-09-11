import React, { useState } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, TRUST_PILLARS, TESTIMONIALS, PRODUCTION_IMAGES } from '../data/companyData';
import { ShieldCheck, Zap, Users, MapPin, CheckCircle, Award, Clock, Star, Quote, Camera } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const [activePhotoKey, setActivePhotoKey] = useState<keyof typeof PRODUCTION_IMAGES>('outdoorFestival');

  const photoOptions: { key: keyof typeof PRODUCTION_IMAGES; label: string; caption: string }[] = [
    { key: 'outdoorFestival', label: 'Arena Rigs', caption: 'Stadium concert trussing & line arrays (Lugogo Oval)' },
    { key: 'weddingStage', label: 'VIP Weddings', caption: 'Warm golden luxury wedding staging (Speke Munyonyo)' },
    { key: 'soundEngineer', label: 'Sound Engineering', caption: 'FOH digital audio mixing console & concert audio' },
    { key: 'broadcastCamera', label: '4K Broadcast', caption: 'Telescopic crane jib & Sony cinema live switching' },
    { key: 'corporateStage', label: 'Corporate Galas', caption: 'Curved seamless P2.9 LED presentation walls' },
  ];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-300" />;
      case 'Users':
        return <Users className="w-6 h-6 text-purple-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Award className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="about" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-900/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left visual column with interactive switcher */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-black">
              <img
                key={activePhotoKey}
                src={PRODUCTION_IMAGES[activePhotoKey]}
                alt="Brown Entertainment Technical Production Equipment Uganda"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover opacity-90 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />

              {/* Photo live caption */}
              <div className="absolute top-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-[#D4AF37]/30 text-[11px] font-semibold text-amber-200">
                  <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{photoOptions.find((p) => p.key === activePhotoKey)?.caption}</span>
                </div>
              </div>

              {/* Float badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#8A6305] flex items-center justify-center font-bold text-black text-lg shadow-md shrink-0">
                    B
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                      Brown Entertainment
                    </h4>
                    <p className="font-serif italic text-xs text-[#E8C868]">
                      "Let's fix it for you"
                    </p>
                  </div>
                </div>
                <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                  <span>Kampala, Uganda</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Certified Technical Riggers
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Photo Switcher Thumbnails */}
            <div className="mt-4 flex items-center justify-between gap-2 overflow-x-auto pb-1">
              {photoOptions.map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => setActivePhotoKey(opt.key)}
                  className={`group relative rounded-xl overflow-hidden border-2 transition-all flex-1 h-14 min-w-[62px] ${
                    activePhotoKey === opt.key
                      ? 'border-[#D4AF37] shadow-lg shadow-[#D4AF37]/30 scale-105'
                      : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                  }`}
                  title={opt.label}
                >
                  <img
                    src={PRODUCTION_IMAGES[opt.key]}
                    alt={opt.label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 text-center mt-1">
              Tap any photo above to inspect different production setups
            </p>

            {/* Accent decorative frame */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-3xl pointer-events-none" />
          </div>

          {/* Right text column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>About Brown Entertainment</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              When You Need It Done Right, <span className="gold-gradient-text">"Let's Fix It For You"</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Founded on the principle of unyielding technical precision and execution reliability, <strong>Brown Entertainment</strong> is one of Uganda’s premier stage, sound, lighting, and visual production houses.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are organizing a 20,000-person music festival at Lugogo, a high-stakes presidential or corporate gala at Serena, an energetic church crusade, or a dream wedding, our multidisciplinary team of sound engineers, lighting designers, riggers, and videographers handles the entire technical engine seamlessly.
            </p>

            {/* 3 Core Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <Clock className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h5 className="font-heading font-bold text-sm text-white mb-1">On-Time Deployment</h5>
                <p className="text-xs text-slate-400">Stages rigged and soundchecked hours before doors open.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <Zap className="w-5 h-5 text-purple-400 mb-2" />
                <h5 className="font-heading font-bold text-sm text-white mb-1">Redundant Power</h5>
                <p className="text-xs text-slate-400">Seamless silent generator integration with instant failover.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <h5 className="font-heading font-bold text-sm text-white mb-1">Safety Certified</h5>
                <p className="text-xs text-slate-400">Strict structural load inspections and wind bracing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Our Technical <span className="gold-gradient-text">Standards</span>
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Why leading concert promoters, festival organizers, and corporate brands in East Africa trust Brown Entertainment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-white/5 w-fit mb-4">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <h4 className="font-heading text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Endorsements / Testimonials */}
        <div className="rounded-3xl bg-gradient-to-b from-[#161616] to-[#0F0F0F] border border-[#D4AF37]/25 p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Client Confidence
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
              Feedback From The Field
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black/50 border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#D4AF37] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-purple-500/40 mb-2" />
                  <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed mb-4">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="font-heading font-bold text-xs text-white">
                    {t.client}
                  </div>
                  <div className="text-[11px] text-[#D4AF37] mt-0.5">
                    {t.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
