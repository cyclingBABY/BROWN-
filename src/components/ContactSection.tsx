import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { ServiceId } from '../types';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Calendar,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldAlert,
  HelpCircle,
  Bot
} from 'lucide-react';

interface ContactSectionProps {
  initialServices?: ServiceId[];
  initialEventType?: string;
  initialMessage?: string;
  onOpenAIAssistant?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServices,
  initialEventType,
  initialMessage,
  onOpenAIAssistant,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: initialEventType || 'Concert / Festival',
    eventDate: '',
    eventLocation: 'Kampala',
    services: initialServices || ['sound-systems', 'stage-lighting'] as ServiceId[],
    message: initialMessage || '',
  });

  useEffect(() => {
    if (initialServices && initialServices.length > 0) {
      setFormData((prev) => ({ ...prev, services: initialServices }));
    }
    if (initialEventType) {
      setFormData((prev) => ({ ...prev, eventType: initialEventType }));
    }
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialServices, initialEventType, initialMessage]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleServiceToggle = (serviceId: ServiceId) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const buildWhatsAppLinkFromForm = () => {
    const serviceNames = formData.services
      .map((id) => SERVICES_DATA.find((s) => s.id === id)?.title)
      .join(', ');

    const text = `Hello Brown Entertainment,\n\nI just submitted a booking inquiry:\n• Name: ${formData.fullName}\n• Phone: ${formData.phone}\n• Event Type: ${formData.eventType}\n• Date: ${formData.eventDate || 'TBD'}\n• Venue/Location: ${formData.eventLocation}\n• Services: ${serviceNames || 'All Services'}\n• Message: ${formData.message || 'Please provide quotation.'}`;

    return `https://wa.me/256704292981?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Dynamic stage glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Fast Turnaround Quotations</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Get In Touch & <span className="gold-gradient-text">Book Technical Production</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Call our Kampala engineers directly, start a WhatsApp conversation, or submit your event specs below for a prompt itemized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Hotlines */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Phone Numbers Callout Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-[#D4AF37]/40 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Technical Production Hotline
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-white mt-1">
                  Speak Directly With Our Team
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-2">
                  Call either of our direct lines for instant availability, technical advice, or site inspection requests in Uganda.
                </p>
              </div>

              {/* Number 1 */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-[#D4AF37]/60 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase">Primary Hotline</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone1Raw}`}
                      className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#F3CE5A] transition-colors"
                    >
                      {COMPANY_INFO.phone1}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone1Raw}`}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Call
                </a>
              </div>

              {/* Number 2 */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-[#D4AF37]/60 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase">Secondary Hotline</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone2Raw}`}
                      className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#F3CE5A] transition-colors"
                    >
                      {COMPANY_INFO.phone2}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone2Raw}`}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Call
                </a>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 hover:scale-[1.01] transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat on WhatsApp (+256 704 292 981)</span>
                </a>
                <span className="block text-center text-[11px] text-slate-500 mt-2">
                  Typically replies within 15 minutes during business hours
                </span>
              </div>
            </div>

            {/* Location & Coverage Card */}
            <div className="p-6 rounded-3xl bg-[#141414] border border-white/5 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-white uppercase">
                    Headquarters & Staging Yard
                  </h4>
                  <p className="text-slate-300 text-xs mt-1">
                    Kampala, Uganda. Fleet deployment available nationwide (Central, Jinja, Entebbe, Mbarara, Gulu, Arua) and cross-border in East Africa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-white/5">
                <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-white uppercase">
                    24/7 Event Technical Support
                  </h4>
                  <p className="text-slate-300 text-xs mt-1">
                    Emergency sound or lighting backup rigs available on call for live events.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Contact & Quote Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-white">
                    Quote Request Received!
                  </h3>

                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Our production director will review your event requirements and respond promptly.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={buildWhatsAppLinkFromForm()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          eventType: 'Concert / Festival',
                          eventDate: '',
                          eventLocation: 'Kampala',
                          services: ['sound-systems', 'stage-lighting'],
                          message: '',
                        });
                      }}
                      className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {onOpenAIAssistant && (
                    <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-purple-900/80 border border-purple-400/40 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-[#D4AF37]" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Unsure what sound or lighting package you need?</p>
                          <p className="text-[11px] text-purple-200/80">Chat with Brown AI Booking Assistant — it automatically drafts your specs & forwards to WhatsApp.</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={onOpenAIAssistant}
                        className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold whitespace-nowrap shadow transition-all flex items-center gap-1.5"
                      >
                        <Bot className="w-3.5 h-3.5" />
                        <span>Launch AI Assistant</span>
                      </button>
                    </div>
                  )}

                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-white">
                      Request a Detailed Technical Quote
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1">
                      Fill in your event details and our engineering director will prepare a tailored proposal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name / Organization <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. David Mukasa"
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone / WhatsApp <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+256 700 000 000"
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Event Type */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Event Nature
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Concert / Music Festival">Concert / Festival</option>
                        <option value="Corporate Gala / AGM">Corporate Gala / AGM</option>
                        <option value="VIP Wedding Reception">VIP Wedding</option>
                        <option value="Church Crusade / Gospel Event">Church / Gospel</option>
                        <option value="Brand Activation / Sports">Brand Activation</option>
                        <option value="Private Celebration">Private Party</option>
                      </select>
                    </div>

                    {/* Event Date */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Event Date <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    {/* Venue / City */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Venue / Town
                      </label>
                      <input
                        type="text"
                        value={formData.eventLocation}
                        onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                        placeholder="e.g. Lugogo, Serena"
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-3 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Required Services Checkboxes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Services Required (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SERVICES_DATA.map((srv) => {
                        const isChecked = formData.services.includes(srv.id);
                        return (
                          <label
                            key={srv.id}
                            className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white font-semibold'
                                : 'bg-black/40 border-white/5 text-slate-400 hover:bg-white/5'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleServiceToggle(srv.id)}
                              className="accent-[#D4AF37] rounded"
                            />
                            <span className="truncate">{srv.title.split('&')[0]}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Specific Event Details / Technical Rider
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share estimated guest count, stage dimensions, artist sound requirements, or special lighting requests..."
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3CE5A] to-[#B8860B] text-black font-extrabold text-sm uppercase tracking-wider hover:opacity-95 shadow-xl shadow-[#D4AF37]/25 flex items-center justify-center gap-2 transition-all"
                  >
                    {loading ? (
                      <span className="inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Quote Request</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Free Site Consultations
                    </span>
                    <span>•</span>
                    <span>Direct WhatsApp Follow-up</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
