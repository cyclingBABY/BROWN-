import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, PRODUCTION_IMAGES } from '../data/companyData';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Zap, Disc3, Sparkles, Bot, Camera } from 'lucide-react';
import heroBgImage from '../assets/images/stage_lighting_hero_1789144517069.jpg';

interface HeroProps {
  onOpenQuoteModal?: () => void;
  onOpenAIAssistant?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAIAssistant }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      {/* Background Stage Image with Dark Gradient & Volumetric Light Beam Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Brown Entertainment Concert Stage Lighting and Truss Production"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform motion-safe:animate-pulse transition-all duration-1000"
        />
        {/* Deep dark gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/75 to-[#0D0D0D]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-transparent to-[#0D0D0D]" />

        {/* Dynamic stage volumetric beam lighting effects (Purple & Gold) */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-1/4 translate-x-1/2 w-96 h-[600px] bg-[#D4AF37]/15 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-purple-700/25 via-[#D4AF37]/15 to-transparent blur-[90px] pointer-events-none" />

        {/* Subtle grid pattern overlay for technical stage rigging feel */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/50 via-[#D4AF37]/20 to-purple-900/50 border border-[#D4AF37]/40 backdrop-blur-md mb-6 shadow-lg shadow-[#D4AF37]/10">
          <Sparkles className="w-3.5 h-3.5 text-[#E5C365] animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-200">
            Uganda's Leading Technical Event Production
          </span>
        </div>

        {/* Grand Centered Brand Identity */}
        <div className="mb-6 flex flex-col items-center">
          <Logo variant="stacked" size="xl" showTagline={false} />
          
          {/* Script Tagline with luxurious styling matching the official flyer */}
          <div className="mt-3 relative">
            <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#E8C868] drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)] tracking-wide">
              "Let's fix it for you"
            </span>
          </div>
        </div>

        {/* Punchy Value Proposition */}
        <h1 className="max-w-4xl font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-[1.1] mb-6">
          World-Class <span className="gold-gradient-text">Stage Rigging</span>, Sound & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-[#D4AF37]">Lighting</span> in Uganda
        </h1>

        {/* Subtitle listing the exact 6 core capabilities from the flyer */}
        <p className="max-w-3xl text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8">
          Powering unforgettable concerts, festivals, corporate galas, and VIP experiences across Uganda and East Africa with tour-grade sound, engineered trussing, dynamic lighting, and razor-sharp LED screens.
        </p>

        {/* The 6 Services Highlight Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mb-10 text-xs sm:text-sm font-medium text-slate-300">
          {[
            'Sound Systems',
            'Stage Trussing & Rigging',
            'Stage Lighting',
            'LED Screens',
            'Videography & Live Coverage',
            'Events Management',
          ].map((item, idx) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all text-slate-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              {item}
            </span>
          ))}
        </div>

        {/* AI Booking Assistant Interactive Highlight */}
        {onOpenAIAssistant && (
          <div className="mb-6">
            <button
              type="button"
              onClick={onOpenAIAssistant}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-purple-950/80 hover:bg-purple-900 border border-purple-500/50 hover:border-[#D4AF37] text-purple-200 hover:text-white text-xs sm:text-sm font-semibold shadow-lg shadow-purple-950/50 transition-all hover:scale-105 active:scale-95 group"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-500 flex items-center justify-center text-black">
                <Bot className="w-3 h-3 text-black" />
              </div>
              <span>Need equipment advice? <strong>Consult AI Booking Assistant</strong></span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <MessageSquare className="w-2.5 h-2.5" />
                Sends to WhatsApp +256 704 292 981
              </span>
            </button>
          </div>
        )}

        {/* Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-xl">
          <a
            href="#contact"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3CE5A] to-[#B8860B] text-black font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/40 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phone1Raw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30 text-amber-200 font-semibold text-sm transition-all"
            title="Call technical hotline"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">{COMPANY_INFO.phone1}</span>
          </a>
        </div>

        {/* Direct Phone Numbers Callout matching the flyer */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
          <span>Direct Hotlines:</span>
          <a
            href={`tel:${COMPANY_INFO.phone1Raw}`}
            className="font-bold text-slate-100 hover:text-[#D4AF37] transition-colors underline decoration-[#D4AF37]/50 underline-offset-4"
          >
            {COMPANY_INFO.phone1}
          </a>
          <span className="text-slate-600">•</span>
          <a
            href={`tel:${COMPANY_INFO.phone2Raw}`}
            className="font-bold text-slate-100 hover:text-[#D4AF37] transition-colors underline decoration-[#D4AF37]/50 underline-offset-4"
          >
            {COMPANY_INFO.phone2}
          </a>
        </div>

        {/* Trust Proof Banner */}
        <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center p-3 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm">
            <span className="font-heading text-xl sm:text-2xl font-black text-[#D4AF37]">850+</span>
            <span className="text-xs text-slate-400 mt-0.5">Stages Built in Uganda</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm">
            <span className="font-heading text-xl sm:text-2xl font-black text-purple-400">100%</span>
            <span className="text-xs text-slate-400 mt-0.5">Safety & Zero Failures</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm">
            <span className="font-heading text-xl sm:text-2xl font-black text-amber-300">50K+</span>
            <span className="text-xs text-slate-400 mt-0.5">Max Crowd Sound Capacity</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm">
            <span className="font-heading text-xl sm:text-2xl font-black text-emerald-400">24/7</span>
            <span className="text-xs text-slate-400 mt-0.5">On-Site Technical Crew</span>
          </div>
        </div>

        {/* Live Production Photography Teaser Ribbon */}
        <div className="mt-8 pt-6 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Camera className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-semibold text-white">Live Production Gallery:</span>
            <span className="hidden md:inline text-slate-400">Stadium Concerts • VIP Weddings • 4K Broadcast • Sound Engineering</span>
          </div>

          <a
            href="#photo-gallery"
            className="flex items-center gap-2 group text-xs text-[#E8C868] hover:text-white font-semibold transition-colors"
          >
            {/* 4 Mini Avatar Photos */}
            <div className="flex items-center -space-x-2">
              <img
                src={PRODUCTION_IMAGES.outdoorFestival}
                alt="Concerts"
                referrerPolicy="no-referrer"
                className="w-7 h-7 rounded-full object-cover border-2 border-black"
              />
              <img
                src={PRODUCTION_IMAGES.weddingStage}
                alt="Weddings"
                referrerPolicy="no-referrer"
                className="w-7 h-7 rounded-full object-cover border-2 border-black"
              />
              <img
                src={PRODUCTION_IMAGES.soundEngineer}
                alt="Sound Console"
                referrerPolicy="no-referrer"
                className="w-7 h-7 rounded-full object-cover border-2 border-black"
              />
              <img
                src={PRODUCTION_IMAGES.broadcastCamera}
                alt="Broadcast Crane"
                referrerPolicy="no-referrer"
                className="w-7 h-7 rounded-full object-cover border-2 border-black"
              />
            </div>
            <span>View All 8 Production Photos</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
