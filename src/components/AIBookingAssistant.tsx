import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, AIDossier, ServiceId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import {
  Bot,
  Send,
  Sparkles,
  MessageSquare,
  X,
  Copy,
  Check,
  Calendar,
  MapPin,
  Users,
  Layers,
  ArrowRight,
  Maximize2,
  Minimize2,
  RefreshCw
} from 'lucide-react';

interface AIBookingAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToBookingForm?: (services: ServiceId[], eventType: string, notes: string) => void;
}

const INITIAL_PROMPTS = [
  'Plan a 2,000-person concert in Kampala',
  'Corporate gala at Serena Hotel for 400 guests',
  'VIP wedding sound, lighting & LED screen',
  'Outdoor church crusade line-array audio rig',
  'Recommend LED screen & roof truss package',
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    role: 'assistant',
    content: `Hello! I'm your **Brown Entertainment AI Booking Consultant** — *"Let's fix it for you"*.

I'm here to help you configure the ideal stage, sound, lighting, LED screen, and videography setup for your event anywhere in Uganda.

As we chat, I'll compile your technical specifications into a complete dossier that you can **send directly to our WhatsApp (+256 704 292 981)** with one tap!

What kind of event are you planning?`,
    timestamp: 'Just now',
  },
];

export const AIBookingAssistant: React.FC<AIBookingAssistantProps> = ({
  isOpen,
  onClose,
  onApplyToBookingForm,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDossier, setShowDossier] = useState(true);

  const [dossier, setDossier] = useState<AIDossier>({
    eventType: 'Pending discussion',
    eventDate: 'To be determined',
    venue: 'Uganda (Kampala & regions)',
    audienceSize: 'Flexible',
    gearSelected: ['Sound Systems', 'Stage Lighting'],
    whatsappSummary: 'Inquiring about Brown Entertainment stage and audio production packages.',
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/booking-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
          currentDossier: dossier,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: data.reply || 'Thank you! Let me know if you would like to adjust any details.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);

      if (data.dossier) {
        setDossier((prev) => ({
          ...prev,
          ...data.dossier,
          gearSelected: data.dossier.gearSelected || prev.gearSelected,
        }));
      }
    } catch (err) {
      console.error('AI chat error, using local fallback:', err);
      // Client-side fallback if server endpoint is temporarily unavailable
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: `Got it! I have noted your requirements: **"${text}"**.

For this setup, **Brown Entertainment** recommends:
• **Sound**: Precision line array speakers and digital mixing console for crystal clarity
• **Stage & Truss**: Certified heavy-duty aluminum box trussing
• **Lighting**: Intelligent DMX moving head beams and warm wash lighting
• **Visuals**: High-resolution daylight-visible LED screens with 4K video switching
• **Backup Power**: Super-silent 100kVA–250kVA generators for zero power outages

Hit the **"Send to WhatsApp (+256 704 292 981)"** button below to immediately connect with our production director with your complete specs!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);

      // Update dossier with educated guess
      setDossier((prev) => ({
        ...prev,
        eventType: text.toLowerCase().includes('wedding')
          ? 'VIP Wedding'
          : text.toLowerCase().includes('corporate')
          ? 'Corporate Gala / Summit'
          : 'Concert / Live Event',
        whatsappSummary: `Client inquired: ${text}`,
      }));
    } finally {
      setIsLoading(false);
    }
  };

  // Build formatted WhatsApp message with all discussed details
  const generateWhatsAppMessage = () => {
    const fullDiscussion = messages
      .filter((m) => m.role === 'user')
      .map((m, idx) => `${idx + 1}. ${m.content}`)
      .join('\n');

    const gearText =
      dossier.gearSelected && dossier.gearSelected.length > 0
        ? dossier.gearSelected.map((g) => `• ${g}`).join('\n')
        : '• Sound Systems\n• Stage Lighting\n• Aluminum Box Trussing\n• LED Video Screen';

    return `*BROWN ENTERTAINMENT - EVENT TECHNICAL BOOKING INQUIRY*
"Let's fix it for you"
Direct Line: +256 704 292 981 / +256 776 292 981

📋 *EVENT DOSSIER (DISCUSSED WITH AI):*
• *Event Type:* ${dossier.eventType || 'Custom Production'}
• *Target Date:* ${dossier.eventDate || 'To be confirmed'}
• *Venue / Location:* ${dossier.venue || 'Kampala, Uganda'}
• *Audience Size:* ${dossier.audienceSize || 'Flexible'}

🎛️ *EQUIPMENT & SERVICES NEEDED:*
${gearText}

💬 *CLIENT REQUIREMENTS / HIGHLIGHTS DISCUSSED:*
${fullDiscussion || 'Full technical production inquiry for stage, sound, lighting, and LED screens.'}

${dossier.whatsappSummary ? `📌 *Summary:* ${dossier.whatsappSummary}` : ''}

Please let me know your availability and send an official quotation. Thank you!`;
  };

  const handleSendToWhatsApp = () => {
    const rawMsg = generateWhatsAppMessage();
    const encoded = encodeURIComponent(rawMsg);
    const url = `https://wa.me/256704292981?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyToClipboard = () => {
    const msg = generateWhatsAppMessage();
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleApplyToForm = () => {
    if (onApplyToBookingForm) {
      const mappedServices: ServiceId[] = [];
      const gear = dossier.gearSelected || [];
      if (gear.some((g) => g.toLowerCase().includes('sound'))) mappedServices.push('sound-systems');
      if (gear.some((g) => g.toLowerCase().includes('truss') || g.toLowerCase().includes('stage')))
        mappedServices.push('stage-trussing');
      if (gear.some((g) => g.toLowerCase().includes('light'))) mappedServices.push('stage-lighting');
      if (gear.some((g) => g.toLowerCase().includes('led') || g.toLowerCase().includes('screen')))
        mappedServices.push('led-screens');
      if (gear.some((g) => g.toLowerCase().includes('video') || g.toLowerCase().includes('stream')))
        mappedServices.push('videography');
      if (gear.some((g) => g.toLowerCase().includes('event') || g.toLowerCase().includes('power')))
        mappedServices.push('events-management');

      const userNotes = messages
        .filter((m) => m.role === 'user')
        .map((m) => m.content)
        .join(' | ');

      onApplyToBookingForm(
        mappedServices.length > 0 ? mappedServices : ['sound-systems', 'stage-lighting'],
        dossier.eventType || 'Concert / Music Festival',
        `AI Consultation Summary: Venue: ${dossier.venue || 'Kampala'}, Audience: ${
          dossier.audienceSize || '1000'
        }. Details: ${userNotes}`
      );
      onClose();

      // Scroll to contact form
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
    setDossier({
      eventType: 'Pending discussion',
      eventDate: 'To be determined',
      venue: 'Uganda (Kampala & regions)',
      audienceSize: 'Flexible',
      gearSelected: ['Sound Systems', 'Stage Lighting'],
      whatsappSummary: 'Inquiring about Brown Entertainment stage and audio production packages.',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`bg-[#111111] border border-[#D4AF37]/50 rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col w-full transition-all duration-300 overflow-hidden ${
          isExpanded
            ? 'h-[96vh] sm:max-w-5xl'
            : 'h-[92vh] sm:h-[680px] sm:max-w-3xl'
        }`}
      >
        {/* Assistant Header */}
        <div className="p-4 bg-gradient-to-r from-black via-[#1a1505] to-black border-b border-[#D4AF37]/30 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#8C6F14] flex items-center justify-center text-black font-bold shadow-md shadow-[#D4AF37]/20 flex-shrink-0">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-white text-sm sm:text-base truncate">
                  Brown AI Booking Assistant
                </h3>
                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>
              <p className="text-xs text-[#D4AF37] font-serif italic truncate">
                "Let's fix it for you" • Direct WhatsApp: +256 704 292 981
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setShowDossier(!showDossier)}
              className={`hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                showDossier
                  ? 'bg-[#D4AF37]/20 text-[#E8C868] border border-[#D4AF37]/40'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
              title="Toggle Live Event Specs Dossier"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Specs</span>
            </button>

            <button
              onClick={handleResetChat}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="Reset Conversation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="hidden sm:block p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title={isExpanded ? 'Restore window size' : 'Expand window'}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
              title="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action Callout Bar */}
        <div className="bg-emerald-950/40 border-b border-emerald-500/30 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="font-medium">
              Everything discussed here is packaged for direct WhatsApp dispatch to{' '}
              <strong className="text-white">+256 704 292 981</strong>.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyToClipboard}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
              title="Copy discussion to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Specs'}</span>
            </button>

            <button
              onClick={handleSendToWhatsApp}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-md shadow-emerald-950/40"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </button>
          </div>
        </div>

        {/* Content Body: Chat + Side Dossier */}
        <div className="flex-1 flex overflow-hidden min-h-0">
          {/* Chat Messages Column */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#0c0c0c]">
            {/* Quick Prompt Chips */}
            <div className="p-3 border-b border-white/5 bg-black/40 flex items-center gap-2 overflow-x-auto text-xs scrollbar-none">
              <span className="text-slate-400 text-[11px] whitespace-nowrap flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Ideas:
              </span>
              {INITIAL_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 hover:text-[#E8C868] text-slate-300 border border-white/10 whitespace-nowrap transition-colors flex-shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Conversation Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => {
                const isBot = msg.role === 'assistant';
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${isBot ? 'items-start' : 'items-end flex-row-reverse'}`}
                  >
                    {isBot ? (
                      <div className="w-8 h-8 rounded-lg bg-[#D4AF37] text-black flex items-center justify-center font-bold flex-shrink-0 mt-1 shadow">
                        <Bot className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mb-1">
                        You
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                        isBot
                          ? 'bg-[#181818] border border-white/10 text-slate-200'
                          : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium shadow-md shadow-amber-950/30'
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{renderFormattedContent(msg.content)}</div>
                      <div
                        className={`text-[10px] mt-2 ${
                          isBot ? 'text-slate-500' : 'text-amber-200'
                        } text-right`}
                      >
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37] text-black flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-[#181818] border border-white/10 rounded-2xl px-4 py-3 text-xs text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                    <span>Brown AI is calculating technical specs...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#111111] border-t border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Describe your event, venue, crowd size, or required gear..."
                  disabled={isLoading}
                  className="flex-1 bg-black/60 border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  className="p-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#AA820A] disabled:opacity-40 disabled:hover:bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Ask AI</span>
                </button>
              </form>
            </div>
          </div>

          {/* Collapsible Live Dossier Side Panel (Desktop & Tablet) */}
          {showDossier && (
            <div className="w-72 sm:w-80 bg-[#141414] border-l border-white/10 p-4 flex flex-col justify-between overflow-y-auto hidden md:flex">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    Live Event Dossier
                  </span>
                  <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    Auto-Captured
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Event Category:
                    </span>
                    <p className="font-semibold text-white pl-4">
                      {dossier.eventType || 'Not specified yet'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                      <Calendar className="w-3 h-3 text-[#D4AF37]" /> Target Date:
                    </span>
                    <p className="font-semibold text-white pl-4">
                      {dossier.eventDate || 'Pending'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3 h-3 text-[#D4AF37]" /> Venue / Location:
                    </span>
                    <p className="font-semibold text-white pl-4">
                      {dossier.venue || 'Kampala, Uganda'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                      <Users className="w-3 h-3 text-[#D4AF37]" /> Expected Crowd:
                    </span>
                    <p className="font-semibold text-white pl-4">
                      {dossier.audienceSize || 'Flexible'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                    <span className="text-slate-400 text-[11px] block">Gear Spec Checklist:</span>
                    <div className="flex flex-wrap gap-1">
                      {dossier.gearSelected && dossier.gearSelected.length > 0 ? (
                        dossier.gearSelected.map((gear, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-amber-950/60 text-amber-300 border border-amber-500/30"
                          >
                            {gear}
                          </span>
                        ))
                      ) : (
                        <span className="text-[11px] text-slate-500">Audio, Lighting & Staging</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Actions inside Dossier */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send to WhatsApp</span>
                </button>

                <div className="text-[10px] text-center text-slate-400">
                  Sends directly to <strong className="text-emerald-400">+256 704 292 981</strong>
                </div>

                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  <button
                    onClick={handleCopyToClipboard}
                    className="py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] font-medium border border-white/5 flex items-center justify-center gap-1"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy Text'}</span>
                  </button>

                  <button
                    onClick={handleApplyToForm}
                    className="py-1.5 px-2 rounded-lg bg-white/5 hover:bg-[#D4AF37]/20 hover:text-[#E8C868] text-slate-300 text-[11px] font-medium border border-white/5 flex items-center justify-center gap-1"
                    title="Transfer specs to bottom booking form"
                  >
                    <span>Fill Form</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Persistent Bottom WhatsApp Bar */}
        <div className="md:hidden p-3 bg-black border-t border-white/10 flex items-center justify-between gap-2">
          <div className="text-[11px] text-slate-300">
            Send discussion to <strong className="text-emerald-400">+256 704 292 981</strong>
          </div>
          <button
            onClick={handleSendToWhatsApp}
            className="py-2 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Send to WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Simple Markdown formatting helper for bolding and bullets
function renderFormattedContent(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    // Check if line is bullet
    const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-');
    const formatted = parseBold(line);

    if (isBullet) {
      return (
        <div key={i} className="flex items-start gap-1.5 my-0.5">
          <span className="text-[#D4AF37] font-bold">•</span>
          <span>{parseBold(line.replace(/^[•\-]\s*/, ''))}</span>
        </div>
      );
    }

    return (
      <p key={i} className={line.trim() === '' ? 'h-2' : 'my-1'}>
        {formatted}
      </p>
    );
  });
}

function parseBold(str: string): React.ReactNode[] {
  const parts = str.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
