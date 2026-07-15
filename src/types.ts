/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'weddings' | 'films' | 'destination' | 'traditional' | 'engagement';
  image: string;
  description: string;
  location: string;
  year: string;
  vibe?: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  details: string[];
}

export interface PackageTier {
  id: string;
  name: 'Essential' | 'Premium' | 'Luxury' | 'Custom';
  subtitle: string;
  coverage: string;
  team: string;
  deliverables: string[];
  timeline: string;
  priceEstimate?: string;
  highlights: string[];
}

export interface JournalPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  content: string[];
}

export interface Inquiry {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  date: string;
  eventType: string;
  location: string;
  guestCount: number;
  budgetRange: string;
  message: string;
  status: 'new' | 'reviewed' | 'contacted' | 'booked';
  createdAt: string;
  selectedPackage?: string;
  calculatedPrice?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
