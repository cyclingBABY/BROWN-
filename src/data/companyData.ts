import { ServiceItem, PortfolioItem } from '../types';

import heroImg from '../assets/images/stage_lighting_hero_1789144517069.jpg';
import trussLedImg from '../assets/images/stage_truss_led_1789144532501.jpg';
import soundRigImg from '../assets/images/sound_audio_rig_1789144577799.jpg';
import corporateStageImg from '../assets/images/corporate_gala_stage_1789144590811.jpg';
import weddingStageImg from '../assets/images/wedding_stage_luxury_1789145875128.jpg';
import broadcastCameraImg from '../assets/images/broadcast_camera_crane_1789145891652.jpg';
import soundEngineerImg from '../assets/images/sound_engineer_mixing_1789145905592.jpg';
import outdoorFestivalImg from '../assets/images/outdoor_festival_stage_1789145919727.jpg';

export const PRODUCTION_IMAGES = {
  hero: heroImg,
  trussLed: trussLedImg,
  soundRig: soundRigImg,
  corporateStage: corporateStageImg,
  weddingStage: weddingStageImg,
  broadcastCamera: broadcastCameraImg,
  soundEngineer: soundEngineerImg,
  outdoorFestival: outdoorFestivalImg,
};

export const COMPANY_INFO = {
  name: 'Brown Entertainment',
  tagline: "Let's fix it for you",
  summary: 'For Sound, Truss, Lighting, LED Screens, Videography & Events Management',
  description: 'Uganda’s premier full-scale technical event production company. We engineer breathtaking concert stages, crystal-clear line array acoustics, stadium-grade aluminum rigging, intelligent lighting choreography, and broadcast videography for events of any magnitude.',
  phone1: '+256 704 292 981',
  phone1Raw: '+256704292981',
  phone2: '+256 776 292 981',
  phone2Raw: '+256776292981',
  whatsappUrl: 'https://wa.me/256704292981?text=Hello%20Brown%20Entertainment%2C%20I%20would%20like%20to%20inquire%20about%20your%20event%20production%20services.',
  email: 'bookings@brownentertainment.ug',
  location: 'Kampala, Uganda',
  coverageArea: 'Serving Kampala, Jinja, Entebbe, Mbarara, Gulu & all East Africa',
  yearsActive: '12+ Years Experience',
  eventsDelivered: '850+ Events Produced',
  uptimeGuarantee: '100% Zero-Failure Rigging Record',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sound-systems',
    title: 'Sound Systems & Audio Engineering',
    tagline: 'Acoustic Precision for 500 to 50,000+ Audiences',
    shortDescription: 'Tour-grade active line arrays, digital consoles, ultra-clean UHF wireless systems, and veteran FOH sound engineers.',
    fullDescription: 'We deploy concert-grade line-array sound systems with tuned subwoofers to ensure crisp vocal clarity and chest-thumping low ends with even acoustic dispersion across your entire venue. Managed by veteran sound technicians and sound engineers.',
    iconName: 'Volume2',
    badge: 'Tour-Grade Line Arrays',
    imageUrl: soundRigImg,
    features: [
      'High-output line array speaker clusters & ground subs',
      'Digital mixing consoles (Yamaha, Allen & Heath, Behringer X32)',
      'Multi-channel wireless microphone systems (Shure, Sennheiser)',
      'Stage monitors, in-ear monitoring (IEM), and backline setup',
      'On-site live audio engineers & acoustic calibration'
    ],
    equipmentHighlights: [
      'V-Series Line Array Modules',
      'Dual 18" Front-Loaded Subwoofers',
      'Digital Snake 32/16 Stage Boxes',
      'RF Multi-zone Signal Antenna Distros'
    ],
    idealFor: ['Concerts & Music Festivals', 'Corporate AGMs & Galas', 'Religious Crusades & Conventions', 'VIP Weddings & Receptions']
  },
  {
    id: 'stage-trussing',
    title: 'Stage Trussing & Rigging',
    tagline: 'Engineered Safety & Architectural Stage Presence',
    shortDescription: 'Heavy-duty certified aluminum box trusses, goal posts, custom roof grids, and ground-support towers built to global safety codes.',
    fullDescription: 'Your stage is the centerpiece of the entire production. We design and erect heavy-duty aluminum box truss systems, curved arches, roof grids, and ground-support towers rated for heavy lighting fixtures, LED video screens, and audio arrays with strict safety certifications.',
    iconName: 'Building2',
    badge: 'Certified Structural Rigging',
    imageUrl: trussLedImg,
    features: [
      'Square & triangular heavy-duty aluminum box truss',
      'Ground support towers with manual & electric chain hoists',
      'Weather-resistant concert roof truss systems',
      'Custom stage platform heights with non-slip surfaces & skirting',
      'Engineered load distribution & safety rigging checks'
    ],
    equipmentHighlights: [
      'Global Truss 290mm / 400mm Box Profiles',
      '1-Ton CM Lodestar Chain Motors',
      'Modular All-Weather Heavy Decking',
      'Certified Rigging Shackles & Span-sets'
    ],
    idealFor: ['Outdoor Festivals', 'Stadium Stages', 'Fashion Runway Catwalks', 'VIP Exhibition Stands']
  },
  {
    id: 'stage-lighting',
    title: 'Stage Lighting & Visual FX',
    tagline: 'Immersive Gold, Purple & Dynamic Intelligent Beams',
    shortDescription: 'Computerized DMX moving head beams, wash luminaires, audience blinders, haze machines, and custom light shows.',
    fullDescription: 'Bring concert energy or refined luxury ambiance to your event. Our lighting designers orchestrate high-power Sharpy moving beams, LED wash lights, warm profiles, stage blinders, and atmospheric haze generators to transform any indoor or outdoor venue into a spectacle.',
    iconName: 'Sparkles',
    badge: 'DMX Intelligent Shows',
    imageUrl: heroImg,
    features: [
      'High-intensity moving head beam lights (Sharpy 7R / 15R / BSW)',
      'RGBW LED wash luminaires for rich stage & venue color washes',
      'Warm white profile spots & follow-spots for key speakers/artists',
      'Audience blinders, LED strobe bars & atmospheric fog/hazers',
      'Computerized DMX consoles (Avolites / grandMA programming)'
    ],
    equipmentHighlights: [
      '380W Hybrid Beam/Spot/Wash Moving Heads',
      'High-CRI Warm White Profile Spotlights',
      'Water-based Stage Hazers for Beam Definition',
      'Wireless DMX Transceivers'
    ],
    idealFor: ['Concerts & DJ Sets', 'Awards Ceremonies & Galas', 'Night-Time Outdoor Festivals', 'Theatrical Productions']
  },
  {
    id: 'led-screens',
    title: 'LED Screens & Visual Displays',
    tagline: 'Ultra-Crisp P3.9 / P2.9 High-Brightness Video Walls',
    shortDescription: 'Modular indoor/outdoor high-definition LED screens with video switchers for live camera feeds, sponsor branding, and graphics.',
    fullDescription: 'Command attention with ultra-bright, high-refresh-rate LED video screens. Whether suspended from roof trusses or ground-stacked, our seamless video walls ensure vivid visuals even under harsh daylight, coupled with seamless presentation switchers for live feeds.',
    iconName: 'Tv',
    badge: 'Indoor & Outdoor Daylight Visible',
    imageUrl: trussLedImg,
    features: [
      'P3.9 and P2.9 pixel pitch high-definition modular panels',
      'High brightness (5,500+ nits) for crisp outdoor sunlight visibility',
      'Curved and straight wall configurations with seamless bezels',
      'Novastar video processors & seamless presentation switchers',
      'Side delay screens & center-stage backdrop configurations'
    ],
    equipmentHighlights: [
      'Die-cast Aluminum 500x500mm / 500x1000mm Panels',
      'Novastar 4K Ultra HD Master Processors',
      'HDMI / SDI Live Video Scalers',
      'Weather-sealed IP65 Outdoor Rating'
    ],
    idealFor: ['Live Concert Backdrops', 'Corporate Keynotes & Product Launches', 'Sports Broadcasts & Fan Parks', 'Church Conventions']
  },
  {
    id: 'videography',
    title: 'Videography & Live Coverage',
    tagline: 'Cinematic 4K Multi-Camera Production & Live Streaming',
    shortDescription: 'Professional broadcast cameras, telescopic crane jibs, wireless video links, live streaming, and post-production highlight reels.',
    fullDescription: 'Never miss a single moment of your landmark event. Our live broadcast crews operate high-end 4K cameras, motorized camera jibs, wireless steady-cams, and drone systems with real-time video switching directly to your LED screens and global livestream feeds.',
    iconName: 'Video',
    badge: '4K Multi-Camera Broadcast',
    imageUrl: broadcastCameraImg,
    features: [
      'Multi-camera 4K broadcast setup with director comms',
      'Heavy-duty camera crane jibs for sweeping panoramic arena shots',
      'Low-latency wireless video transmission (Hollyland / Teradek)',
      'Live-to-LED screen projection and simultaneous internet streaming',
      'Same-day event highlight reel editing & full master archiving'
    ],
    equipmentHighlights: [
      'Sony FX6 / FX3 Cinema Broadcast Rigs',
      'Blackmagic ATEM Television Studio 4K Switcher',
      '32-foot Telescopic Camera Jib Arm',
      'Licensed Aerial Drone 4K Coverage'
    ],
    idealFor: ['Music Festivals & Concerts', 'Corporate Summits & Press Briefings', 'State & Diplomatic Functions', 'Mega Weddings']
  },
  {
    id: 'events-management',
    title: 'Complete Events Management',
    tagline: 'Turnkey Execution from Blueprint to Final Applause',
    shortDescription: 'End-to-end technical production coordination, power generators, backup systems, stage crews, and on-site logistics.',
    fullDescription: 'From initial floor planning and CAD stage renders to generator silent power logistics and safety clearance, Brown Entertainment takes the stress out of event technical production. "Let\'s fix it for you" means you focus on your guests while we manage the entire technical engine.',
    iconName: 'Layers',
    badge: 'Turnkey Peace of Mind',
    imageUrl: outdoorFestivalImg,
    features: [
      'Comprehensive technical site surveys & 3D stage CAD modeling',
      'Heavy-duty super-silent event power generators with backup units',
      'Professional stage managers, sound technicians, and rigging crews',
      'Crowd control barrier rigging and VIP stage barricades',
      'Complete timeline coordination and artist technical rider fulfillment'
    ],
    equipmentHighlights: [
      '100kVA - 250kVA Super-Silent Generator Sets',
      'Heavy-Duty Cable Protectors & Power Distros',
      'Mojo Aluminum Crowd Safety Barriers',
      'Comprehensive On-Site Technical Contingency Plan'
    ],
    idealFor: ['Large-scale Music Festivals', 'Corporate End-of-Year Galas', 'Government & Cultural Ceremonies', 'National Sports Events']
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'pf-1',
    title: 'Nile Special Grand Music Fiesta',
    category: 'concerts',
    categoryLabel: 'Concerts & Festivals',
    location: 'Lugogo Cricket Oval, Kampala',
    date: 'Recent Production',
    imageUrl: outdoorFestivalImg,
    description: 'Turnkey arena concert production featuring massive aluminum box truss stage roof, 48 moving head beam lights, full line-array acoustics, and 60sqm central LED wall.',
    servicesProvided: ['Sound Systems', 'Stage Trussing', 'Stage Lighting', 'LED Screens', 'Live Video'],
    audienceSize: '15,000+ Attendees',
    highlights: ['Zero acoustic feedback', 'Dynamic gold & purple light choreography', 'Twin delay sound towers']
  },
  {
    id: 'pf-2',
    title: 'East Africa Telecom Leadership Summit',
    category: 'corporate',
    categoryLabel: 'Corporate & Galas',
    location: 'Kampala Serena Hotel Victoria Hall',
    date: 'Recent Production',
    imageUrl: corporateStageImg,
    description: 'High-elegance corporate stage design featuring curved seamless P2.9 LED presentation walls, warm profile spot lighting, studio broadcast audio, and multi-cam live streaming.',
    servicesProvided: ['LED Screens', 'Sound Systems', 'Stage Lighting', 'Videography'],
    audienceSize: '800 VIP Delegates',
    highlights: ['Ultra-crisp PowerPoint/Video rendering', 'Discreet lavalier microphone arrays', '4K live stream to 12 countries']
  },
  {
    id: 'pf-3',
    title: 'Pearl of Africa Royal VIP Wedding',
    category: 'corporate',
    categoryLabel: 'VIP Weddings & Galas',
    location: 'Speke Resort Munyonyo Convention Centre',
    date: 'Recent Production',
    imageUrl: weddingStageImg,
    description: 'Ultra-luxurious bespoke wedding reception stage built with warm golden ambient profile spotlights, floral truss canopy, glossy mirror-finish runway, and backdrop LED display.',
    servicesProvided: ['Stage Lighting', 'Sound Systems', 'LED Screens', 'Stage Trussing'],
    audienceSize: '1,000 VIP Guests',
    highlights: ['Warm amber & gold color grading', 'Whisper-quiet acoustic distribution', 'Reflective mirror runway stage']
  },
  {
    id: 'pf-4',
    title: 'Kampala Gospel Praise Explosion',
    category: 'lighting',
    categoryLabel: 'Lighting & FX',
    location: 'Kololo Ceremonial Grounds, Kampala',
    date: 'Recent Production',
    imageUrl: heroImg,
    description: 'Breathtaking 360-degree intelligent light show synchronized with live orchestra and choir performances, featuring 60+ beam fixtures, warm washes, and atmospheric gold pyro effects.',
    servicesProvided: ['Stage Lighting', 'Sound Systems', 'LED Screens', 'Live Videography'],
    audienceSize: '25,000 Attendees',
    highlights: ['Custom timecoded light sequences', 'Gold and purple atmospheric beam effects', 'Broadcast crane camera coverage']
  },
  {
    id: 'pf-5',
    title: 'All-Star Urban DJ Arena Experience',
    category: 'concerts',
    categoryLabel: 'Live Audio & Sound',
    location: 'Jinja Nile Discovery Park',
    date: 'Recent Production',
    imageUrl: soundEngineerImg,
    description: 'Immersive electronic stage design pairing responsive audio-reactive LED screen visuals with club-grade sub-bass punch and synchronized beam strobes mixed live by Brown FOH engineers.',
    servicesProvided: ['Sound Systems', 'Stage Lighting', 'LED Screens'],
    audienceSize: '8,000+ Fans',
    highlights: ['FOH live digital multi-track mixing', 'Bass extension down to 28Hz with 16 subwoofers', 'High-intensity strobe & wash lighting']
  },
  {
    id: 'pf-6',
    title: 'Kigo Lakeside Sunset Festival',
    category: 'truss',
    categoryLabel: 'Stage & Truss Rigging',
    location: 'Lake Victoria Serena Golf Resort, Kigo',
    date: 'Recent Production',
    imageUrl: trussLedImg,
    description: 'Engineered outdoor lakeside stage structure built with certified 400mm heavy box trussing, wind-resistant roof canopies, and suspended line array towers.',
    servicesProvided: ['Stage Trussing', 'Sound Systems', 'Stage Lighting'],
    audienceSize: '5,000 Attendees',
    highlights: ['Certified load-bearing calculations', 'Elevated VIP viewing deck truss', 'Safe rigging in high-wind lakeside conditions']
  },
  {
    id: 'pf-7',
    title: 'East Africa Broadcast & Media Summit',
    category: 'corporate',
    categoryLabel: '4K Videography & Crane',
    location: 'Kampala Serena Hotel',
    date: 'Recent Production',
    imageUrl: broadcastCameraImg,
    description: 'Full 4K broadcast multi-camera filming with 32ft motorized crane jib, wireless video transmission, and live satellite stream for global news distribution.',
    servicesProvided: ['Videography', 'Live Streaming', 'LED Screens'],
    audienceSize: '1,500 Delegates',
    highlights: ['Zero-latency live-to-screen transmission', 'Cinema-grade Sony FX6 multi-camera angles', 'Real-time highlight clipping']
  },
  {
    id: 'pf-8',
    title: 'National Stadium Crusade & Mega Audio Array',
    category: 'truss',
    categoryLabel: 'Audio & Stadium Touring',
    location: 'Namboole Stadium Outer Grounds',
    date: 'Recent Production',
    imageUrl: soundRigImg,
    description: 'Massive acoustic coverage deployment reaching over 40,000 worshippers with line array clusters, delay towers, and super-silent 250kVA backup power generators.',
    servicesProvided: ['Sound Systems', 'Stage Trussing', 'Complete Events Management'],
    audienceSize: '40,000+ Attendees',
    highlights: ['Even sound pressure level to 350 meters', 'Dual redundant power distribution', 'Weatherproof IP-rated audio rigging']
  }
];

export const PRODUCTION_SHOWCASE_GALLERY = [
  {
    title: 'Touring Concert Sound Systems',
    category: 'Sound Engineering',
    caption: 'Concert line arrays and ground-shaking dual 18" subwoofers tuned for open-air arenas.',
    imageUrl: soundRigImg,
  },
  {
    title: 'Certified Stage Box Trussing',
    caption: 'Heavy-duty 290mm & 400mm aluminum box truss roof systems and ground support.',
    imageUrl: trussLedImg,
  },
  {
    title: 'Dynamic Stage Lighting & Hazers',
    caption: 'Computerized moving beams, warm profile spotlights, and signature purple/gold glows.',
    imageUrl: heroImg,
  },
  {
    title: 'Prestige Corporate Summits',
    caption: 'Curved seamless P2.9 LED presentation walls and broadcast podium audio.',
    imageUrl: corporateStageImg,
  },
  {
    title: 'VIP Luxury Wedding Stages',
    caption: 'Elegantly illuminated wedding stages with warm gold ambiance and LED backdrops.',
    imageUrl: weddingStageImg,
  },
  {
    title: '4K Multi-Cam Broadcast & Crane Jibs',
    caption: '32-ft telescopic crane jib and Sony cinema cameras for live streaming & archiving.',
    imageUrl: broadcastCameraImg,
  },
  {
    title: 'FOH Sound Engineers at the Console',
    caption: 'Veterans running Yamaha and Allen & Heath digital boards with zero acoustic feedback.',
    imageUrl: soundEngineerImg,
  },
  {
    title: 'Stadium Festivals & Crusades',
    caption: 'Turnkey stage, sound, lighting, and power deployment for up to 50,000+ attendees.',
    imageUrl: outdoorFestivalImg,
  },
];

export const TRUST_PILLARS = [
  {
    title: '100% Structural Safety',
    description: 'Rigid adherence to international rigging standards. Heavy-duty aluminum box trusses with certified hoists and dual safety chains.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Zero-Downtime Assurance',
    description: 'Redundant power distribution, dual backup microphones, and hot-standby audio digital consoles to guarantee zero event interruption.',
    icon: 'Zap'
  },
  {
    title: 'Veteran Technical Crew',
    description: 'Certified audio engineers, lighting programmers, and stage hands with over a decade of stadium and ballroom event execution in East Africa.',
    icon: 'Users'
  },
  {
    title: 'Uganda & Regional Reach',
    description: 'Logistics fleets equipped to deploy full stadium sound, trussing, and LED screens anywhere in Uganda and neighboring regions.',
    icon: 'MapPin'
  }
];

export const TESTIMONIALS = [
  {
    client: 'Event Director, Major Kampala Music Festival',
    quote: 'Brown Entertainment delivered beyond expectations. When they say "Let’s fix it for you", they truly mean it. The sound at Lugogo was crystal clear to the back row, and the stage lighting was world-class.',
    event: 'Lugogo Cricket Oval Concert'
  },
  {
    client: 'Lead Production Manager, Corporate Summit',
    quote: 'Our international keynote speakers praised the audio clarity and the LED video walls were flawless. Having both phones active and prompt response gave our team absolute peace of mind.',
    event: 'Kampala Serena Executive Gala'
  },
  {
    client: 'Wedding & Gala Executive Planner',
    quote: 'The luxury gold lighting aesthetic matched our bride’s dream setup. Professional, polite crew, and set up 4 hours ahead of schedule.',
    event: 'Speke Resort Munyonyo Ballroom'
  }
];
