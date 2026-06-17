export interface Project {
  id: string;
  title: string;
  category: 'residencial' | 'comercial' | 'industrial';
  image: string;
  area: number; // in m²
  location: string;
  description: string;
  steelWeight?: number; // indicative tons of steel used
  durationWeeks: number; // weeks to build
  wasteSavedKg: number; // waste prevented in kg
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface TimelineStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  badge: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

export interface QuoteSimulation {
  area: number;
  type: 'residencial_standard' | 'residencial_luxury' | 'comercial_office' | 'industrial_shed';
  floors: number;
  includeFoundation: boolean;
}
