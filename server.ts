import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Lazy-initialize Gemini client
let genAIClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey.trim() === '') {
    return null;
  }
  if (!genAIClient) {
    genAIClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return genAIClient;
}

const SYSTEM_INSTRUCTION = `You are the Senior Technical Event Consultant and Booking Assistant for "Brown Entertainment" in Uganda.
Motto: "Let's fix it for you".
Booking Hotlines: +256 704 292 981 & +256 776 292 981.
Direct WhatsApp: +256 704 292 981 (wa.me/256704292981).
Headquarters: Kampala, Uganda (Deploying across Kampala, Entebbe, Jinja, Mbarara, Gulu, and East Africa).

Brown Entertainment provides 6 core technical pillars:
1. Sound Systems & Audio Engineering (Concert line arrays, front-loaded dual 18" subwoofers, digital mixing consoles Yamaha/Allen & Heath/Behringer X32, wireless Shure/Sennheiser mics, acoustic calibration for 500 to 50,000+ pax).
2. Stage Trussing & Rigging (Heavy-duty aluminum box truss 290mm & 400mm, ground support towers, 1-ton CM Lodestar electric hoists, all-weather roof canopies, non-slip stages, 100% certified safety).
3. Stage Lighting & Visual FX (DMX computerized moving head beams Sharpy 7R/BSW, RGBW wash luminaires, warm white profile follow-spots, stage hazers/fog, signature gold & purple atmospheric glows).
4. LED Screens & Visual Displays (Indoor P2.9 & outdoor P3.9 5,500+ nit daylight-visible modular video walls, Novastar 4K processors, live SDI/HDMI presentation switchers).
5. Videography & Live Coverage (4K multi-cam broadcast rigs Sony FX6/FX3, 32-ft telescopic crane jib, wireless video transmitters, low-latency live-to-screen and online streaming).
6. Complete Events Management & Power (100kVA-250kVA super-silent backup generators, power distribution distros, Mojo crowd barriers, on-site technical directors).

YOUR ROLE:
- Assist the client warmly and professionally to plan their event production requirements.
- Inquire gently about: Event Type, Date/Timeline, Venue or City in Uganda (indoor vs outdoor), Expected Crowd/Audience Size, and which gear they need.
- Offer intelligent technical recommendations tailored to Ugandan venues (e.g., Lugogo Cricket Oval, Kampala Serena, Speke Resort Munyonyo, Kololo, hotel ballrooms, open fields).
- Be concise, practical, and clear. Avoid endless walls of text; use bullet points where helpful.
- Keep in mind that all details discussed will be formatted and sent directly to Brown Entertainment's WhatsApp (+256 704 292 981).
- At the end of your message, you MUST return a valid JSON block enclosed in \`\`\`json ... \`\`\` containing the extracted structured dossier fields:
{
  "eventType": string (e.g. "Concert", "Wedding", "Corporate Gala", "Church Crusade", or "Not specified yet"),
  "eventDate": string (e.g. "December 15, 2026" or "Pending"),
  "venue": string (e.g. "Kampala Serena Hotel" or "Pending"),
  "audienceSize": string (e.g. "1,500 guests" or "Pending"),
  "gearSelected": string[] (list of recommended gear categories),
  "whatsappSummary": string (a crisp 2-4 sentence WhatsApp-ready summary of what was agreed/discussed)
}`;

// Booking AI consultation endpoint
app.post('/api/booking-ai', async (req: Request, res: Response) => {
  try {
    const { messages, currentDossier } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    const ai = getGenAI();

    // If Gemini API Key is available, use Gemini 3.8 Flash
    if (ai) {
      try {
        // Build conversation contents
        const conversationHistory = messages.map((m: any) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }));

        // Append dossier context to the last user message if provided
        if (currentDossier && Object.keys(currentDossier).length > 0) {
          const lastIdx = conversationHistory.length - 1;
          if (lastIdx >= 0 && conversationHistory[lastIdx].role === 'user') {
            conversationHistory[lastIdx].parts[0].text += `\n\n[Current Extracted Dossier State: ${JSON.stringify(currentDossier)}]`;
          }
        }

        const response = await ai.models.generateContent({
          model: 'gemini-3.6-flash',
          contents: conversationHistory,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });

        const replyText = response.text || "I'm here to help you configure the perfect stage, sound, and lighting setup for your event. What type of event are you organizing?";

        // Parse JSON dossier if present
        let extractedDossier = currentDossier || null;
        let cleanText = replyText;

        const jsonMatch = replyText.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch && jsonMatch[1]) {
          try {
            extractedDossier = JSON.parse(jsonMatch[1]);
            cleanText = replyText.replace(/```json\s*[\s\S]*?\s*```/, '').trim();
          } catch (e) {
            // ignore parsing error
          }
        }

        return res.json({
          reply: cleanText,
          dossier: extractedDossier,
        });
      } catch (geminiError) {
        console.warn('Gemini API call failed, using expert technical fallback:', geminiError);
        // Fall through to expert fallback logic below
      }
    }

    // Fallback if no GEMINI_API_KEY is configured
    const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';
    let fallbackReply = `Hello! Welcome to **Brown Entertainment** — *"Let's fix it for you"*. 

I'm your Technical Event Consultant. We engineer top-tier concert sound, heavy aluminum box trussing, dynamic lighting, high-definition LED screens, 4K multi-cam videography, and silent backup power generators across Uganda.

Tell me a bit about your upcoming event:
• **Event Type**: (e.g., Concert, Corporate Gala, Wedding, Crusade)
• **Expected Date & Venue**: (e.g., Kampala, Jinja, Munyonyo, outdoor/indoor)
• **Audience Size**: (e.g., 500 to 20,000+ people)

Once we review your needs, you can send the full technical dossier straight to our WhatsApp hotline (**+256 704 292 981**)!`;

    const lower = lastUserMessage;
    let eventType = 'Concert / Live Event';
    let venue = 'Kampala, Uganda';
    let audience = '1,000+ Guests';
    const gear: string[] = ['Sound Systems', 'Stage Lighting'];

    if (lower.includes('wedding')) {
      eventType = 'VIP Wedding';
      gear.push('Stage Trussing', 'LED Screens');
      fallbackReply = `Congratulations! For weddings, Brown Entertainment delivers an enchanting ambiance:
• **Acoustics**: Crystal-clear wireless microphones for the vows & speeches, with warm sound coverage that doesn't overwhelm table conversations.
• **Lighting**: Elegant warm gold profile spots and soft mood washes matching your wedding theme.
• **Visuals**: Seamless P2.9 LED screens for live photo moments and couple entrance videos.
• **Stage**: Pristine glossy white or finished stage platform with low-profile trussing.

What venue or hotel are you hosting at, and how many guests are you expecting? You can also hit **Send to WhatsApp (+256 704 292 981)** anytime to get an immediate quotation!`;
    } else if (lower.includes('corporate') || lower.includes('conference') || lower.includes('gala')) {
      eventType = 'Corporate Gala / Summit';
      gear.push('LED Screens', 'Videography');
      fallbackReply = `Excellent choice. For corporate summits and annual galas in Uganda (such as Serena, Speke Munyonyo, or Sheraton):
• **Presentation LED Walls**: High-resolution P2.9 curved or flat video walls for ultra-sharp presentations & executive video feeds.
• **Speech Intelligibility**: Digital sound distribution with podium mics, discreet lavaliers, and acoustic tuning.
• **Broadcast Videography**: 4K multi-camera recording, livestream feed, and teleprompter options.
• **Guaranteed Redundancy**: 100kVA silent backup generator to ensure zero blackout.

What is your planned date and delegate headcount? Hit **Send to WhatsApp (+256 704 292 981)** to lock in date availability!`;
    } else if (lower.includes('concert') || lower.includes('festival') || lower.includes('crusade')) {
      eventType = 'Concert / Festival / Crusade';
      gear.push('Sound Systems', 'Stage Trussing', 'Stage Lighting', 'LED Screens', 'Complete Events Management');
      fallbackReply = `Massive events are our specialty! We've powered 850+ major stadium and arena stages across East Africa:
• **Audio**: High-output touring line arrays with dual 18" front-loaded subs for chest-thumping bass and intelligible vocals up to 50,000+ fans.
• **Staging & Truss**: 400mm heavy-duty certified aluminum box truss roof grid with ground-support towers.
• **Lighting & FX**: Sharpy moving heads, audience blinders, stage hazers, and computerized DMX light shows.
• **LED Walls**: Daylight-visible IP65 outdoor P3.9 video walls (up to 100+ sqm).
• **Power**: Super-silent 250kVA generators with automatic transfer switch.

Where will your concert be held (e.g. Lugogo Oval, Kololo, Kyadondo)? Let's send these specs directly to our production team on WhatsApp (**+256 704 292 981**)!`;
    }

    return res.json({
      reply: fallbackReply,
      dossier: {
        eventType,
        eventDate: 'Pending client confirmation',
        venue,
        audienceSize: audience,
        gearSelected: gear,
        whatsappSummary: `Client inquiring about ${eventType} technical production package in Uganda with Brown Entertainment.`,
      },
    });
  } catch (error: any) {
    console.error('Booking AI Error:', error);
    return res.status(500).json({
      error: 'Failed to process request',
      details: error.message,
    });
  }
});

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', brand: 'Brown Entertainment' });
});

// Start server with Vite middleware in dev or static files in prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Brown Entertainment Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
