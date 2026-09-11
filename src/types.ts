export type ServiceId = 
  | 'sound-systems'
  | 'stage-trussing'
  | 'stage-lighting'
  | 'led-screens'
  | 'videography'
  | 'events-management';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge: string;
  imageUrl: string;
  features: string[];
  equipmentHighlights: string[];
  idealFor: string[];
}

export type PortfolioCategory = 'all' | 'concerts' | 'truss' | 'lighting' | 'led' | 'corporate';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  location: string;
  date: string;
  imageUrl: string;
  description: string;
  servicesProvided: string[];
  audienceSize?: string;
  highlights: string[];
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  estimatedGuests: string;
  servicesNeeded: ServiceId[];
  additionalNotes: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface AIDossier {
  eventType?: string;
  eventDate?: string;
  venue?: string;
  audienceSize?: string;
  gearSelected?: string[];
  estimatedBudgetUgx?: string;
  whatsappSummary?: string;
}

