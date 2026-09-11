import React, { useState } from 'react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';
import { ServiceId } from '../types';
import { Calculator, Check, MessageSquare, ArrowRight, Sparkles, Calendar, Users, MapPin } from 'lucide-react';

interface InteractiveQuoteCalculatorProps {
  onPreloadContactForm?: (selectedServices: ServiceId[], eventType: string) => void;
}

export const InteractiveQuoteCalculator: React.FC<InteractiveQuoteCalculatorProps> = ({
  onPreloadContactForm,
}) => {
  const [selectedServices, setSelectedServices] = useState<ServiceId[]>([
    'sound-systems',
    'stage-lighting',
    'stage-trussing',
  ]);
  const [eventType, setEventType] = useState<string>('Concert / Music Festival');
  const [guestCount, setGuestCount] = useState<string>('1,000 - 5,000 Guests');
  const [eventDate, setEventDate] = useState<string>('');
  const [eventLocation, setEventLocation] = useState<string>('Kampala');

  const toggleService = (id: ServiceId) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAllServices = () => {
    if (selectedServices.length === SERVICES_DATA.length) {
      setSelectedServices([]);
    } else {
      setSelectedServices(SERVICES_DATA.map((s) => s.id));
    }
  };

  const buildWhatsAppMessage = () => {
    const serviceNames = selectedServices
      .map((id) => SERVICES_DATA.find((s) => s.id === id)?.title)
      .filter(Boolean)
      .join(', ');

    const text = `Hello Brown Entertainment! I would like a quotation for an upcoming event:\n\n• Event Type: ${eventType}\n• Expected Crowd: ${guestCount}\n• Location: ${eventLocation}\n• Date: ${eventDate || 'To be confirmed'}\n• Services Needed: ${serviceNames || 'All technical services'}\n\nPlease let me know availability and pricing.`;
    return `https://wa.me/256704292981?text=${encodeURIComponent(text)}`;
  };

  const handleApplyToForm = () => {
    if (onPreloadContactForm) {
      onPreloadContactForm(selectedServices, eventType);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="quote-estimator" className="relative py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-900/20 via-[#D4AF37]/15 to-purple-900/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Estimator</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
            Custom Event <span className="gold-gradient-text">Quote Estimator</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Configure your technical stage requirements in seconds. Connect directly with our Kampala production engineers via WhatsApp or submit your booking brief.
          </p>
        </div>

        {/* The Interactive Calculator Box */}
        <div className="rounded-3xl bg-[#121212] border border-[#D4AF37]/30 shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Options Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Event Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Select Event Nature
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Concert / Music Festival',
                    'Corporate Gala & Awards',
                    'VIP Wedding & Reception',
                    'Church / Crusade Event',
                    'Sports / Brand Activation',
                    'Private VIP Party',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`p-2.5 text-xs text-left rounded-xl font-medium transition-all ${
                        eventType === type
                          ? 'bg-[#D4AF37] text-black font-bold shadow-md'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Crowd & Venue Scale */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    2. Expected Audience
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Under 500 Guests">Under 500 Guests (Boutique / Intimate)</option>
                    <option value="500 - 1,500 Guests">500 - 1,500 Guests (Medium Hall / Ballroom)</option>
                    <option value="1,500 - 5,000 Guests">1,500 - 5,000 Guests (Arena / Open Field)</option>
                    <option value="5,000 - 15,000 Guests">5,000 - 15,000 Guests (Festival / Oval)</option>
                    <option value="15,000 - 50,000+ Guests">15,000 - 50,000+ Guests (Mega Stadium Rig)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    3. Location in Uganda / Region
                  </label>
                  <input
                    type="text"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    placeholder="e.g. Kampala, Jinja, Entebbe, Mbarara"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Service Checkboxes */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    4. Required Technical Services ({selectedServices.length} selected)
                  </label>
                  <button
                    type="button"
                    onClick={selectAllServices}
                    className="text-[11px] text-[#D4AF37] hover:underline font-semibold"
                  >
                    {selectedServices.length === SERVICES_DATA.length ? 'Deselect All' : 'Select All 6'}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES_DATA.map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <div
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`cursor-pointer p-3 rounded-xl border flex items-start gap-2.5 transition-all ${
                          isSelected
                            ? 'bg-purple-950/30 border-[#D4AF37] text-white shadow-sm'
                            : 'bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/5'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-all ${
                            isSelected
                              ? 'bg-[#D4AF37] border-[#D4AF37] text-black'
                              : 'border-white/20'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-bold block truncate">
                            {service.title}
                          </span>
                          <span className="text-[11px] text-slate-400 block truncate">
                            {service.badge}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary & Action Column */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-black/60 border border-white/10">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-slate-400">
                    Your Package Blueprint
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    Instant Review
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Event Scope:</span>
                    <span className="font-bold text-white text-right">{eventType}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Audience:</span>
                    <span className="font-medium text-amber-200">{guestCount}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Location:</span>
                    <span className="font-medium text-slate-200">{eventLocation || 'Kampala Area'}</span>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <span className="text-slate-400 block mb-2 font-semibold">
                      Included Technical Modules:
                    </span>
                    {selectedServices.length === 0 ? (
                      <p className="text-slate-500 italic text-[11px]">
                        Please choose at least one technical service on the left.
                      </p>
                    ) : (
                      <div className="space-y-1">
                        {selectedServices.map((id) => (
                          <div key={id} className="flex items-center gap-1.5 text-[#D4AF37]">
                            <Sparkles className="w-3 h-3 shrink-0" />
                            <span className="text-[11px] text-slate-200">
                              {SERVICES_DATA.find((s) => s.id === id)?.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs text-purple-200">
                  ⚡ <strong>Production Promise:</strong> Includes full site inspection, CAD stage load calculations, and on-site engineering team.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={buildWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/40 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to WhatsApp (+256 704 292 981)</span>
                </a>

                <button
                  type="button"
                  onClick={handleApplyToForm}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-[#D4AF37]/20 transition-all"
                >
                  <span>Attach to Formal Booking Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
