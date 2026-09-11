import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageSquare, Phone, X, Bot, Sparkles } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenAIAssistant?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenAIAssistant }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Popover Card */}
      {isOpen && (
        <div className="w-80 bg-[#141414] border border-[#D4AF37]/50 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-3 duration-200 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-heading font-bold text-white">Brown Entertainment</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-slate-300 my-2.5 leading-relaxed">
            Need urgent sound, stage trussing, lighting, or LED screens for your event in Uganda?
          </p>

          <div className="space-y-2 pt-1">
            {onOpenAIAssistant && (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenAIAssistant();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 hover:from-purple-900 hover:to-purple-800 text-purple-200 hover:text-white border border-purple-500/40 font-bold tracking-wide shadow transition-all group"
              >
                <Bot className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span>AI Booking Consultant</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30">
                  Sends to WhatsApp
                </span>
              </button>
            )}

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wide shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Chat</span>
            </a>

            <div className="grid grid-cols-2 gap-1.5 pt-1">
              <a
                href={`tel:${COMPANY_INFO.phone1Raw}`}
                className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/5 font-semibold text-[11px]"
              >
                <Phone className="w-3 h-3 text-[#D4AF37]" />
                0704 292 981
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone2Raw}`}
                className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/5 font-semibold text-[11px]"
              >
                <Phone className="w-3 h-3 text-[#D4AF37]" />
                0776 292 981
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons Row */}
      <div className="flex items-center gap-2">
        {onOpenAIAssistant && (
          <button
            type="button"
            onClick={onOpenAIAssistant}
            className="relative group flex items-center gap-2 px-3.5 py-3 rounded-full bg-[#1A1429] hover:bg-[#251b3d] text-purple-200 hover:text-white font-bold text-xs uppercase tracking-wider shadow-2xl shadow-purple-950/70 border border-purple-500/50 hover:border-[#D4AF37] hover:scale-105 active:scale-95 transition-all"
            aria-label="Open AI Booking Assistant"
          >
            <Bot className="w-4 h-4 text-[#D4AF37]" />
            <span className="hidden sm:inline">AI Booking</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
          </button>
        )}

        {/* Main Floating Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-2xl shadow-emerald-950/60 border border-emerald-400/40 hover:scale-105 active:scale-95 transition-all"
          aria-label="Direct WhatsApp inquiry"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
          </span>
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">WhatsApp Booking</span>
        </button>
      </div>
    </div>
  );
};
