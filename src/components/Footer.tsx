/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#151515] text-warm-text/90 pt-20 pb-8 overflow-hidden border-t border-white/5 transition-colors duration-300">
      
      {/* Structural Accent lines - Part of "The Breathing Frame" spatial signature */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-heritage-yellow/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Editorial Manifesto */}
          <div className="space-y-6 text-left">
            <div>
              <img 
                src="https://res.cloudinary.com/ddax67wik/image/upload/v1784124069/kling_20260710_IMAGE_Create_a_w_3809_0_nsqkcd.png" 
                alt="7 Lenz Logo" 
                className="h-9 w-auto object-contain brightness-0 invert opacity-90 mb-2"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="font-sans text-xs text-warm-text/60 leading-relaxed font-light">
              Crafting Timeless Memories Through Art & Emotion. Based in Kerala, capturing premium cinematic events, destination celebrations, and fine-art portraits globally.
            </p>

            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-full bg-white/5 hover:bg-heritage-yellow/20 text-warm-text/80 hover:text-heritage-yellow transition-all duration-300 cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-full bg-white/5 hover:bg-heritage-yellow/20 text-warm-text/80 hover:text-heritage-yellow transition-all duration-300 cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav & Studio Pages */}
          <div className="space-y-6">
            <h4 className="font-interface text-xs font-bold tracking-widest text-white uppercase">
              STUDIO EXPLORER
            </h4>
            <ul className="space-y-3 font-sans text-xs">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'portfolio', label: 'Works' },
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Book Now' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-warm-text/50 hover:text-heritage-yellow transition-colors duration-200 cursor-pointer flex items-center group text-left"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all transform translate-y-0.5 group-hover:-translate-y-0" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Local SEO Discovery Links */}
          <div className="space-y-6">
            <h4 className="font-interface text-xs font-bold tracking-widest text-white uppercase">
              7 LENZ PATHANAMTHITTA & KOCHI
            </h4>
            
            <ul className="space-y-4 font-sans text-xs font-light text-warm-text/60">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-heritage-yellow flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Pathanamthitta Studio:</strong> Near Ring Road, Pathanamthitta, Kerala 689645
                  <br />
                  <strong className="block mt-2">Kochi Office:</strong> Bolgatty Island Road, Kochi, Kerala 682027
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-heritage-yellow flex-shrink-0" />
                <span>+91 9447 700 700 &bull; +91 9447 800 800</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-heritage-yellow flex-shrink-0" />
                <span>inquire@7lenz.com</span>
              </li>
            </ul>
          </div>

          {/* Premium Newsletter Sign-up */}
          <div className="space-y-6">
            <h4 className="font-interface text-xs font-bold tracking-widest text-white uppercase">
              THE EXCLUSIVE JOURNAL
            </h4>
            <p className="font-sans text-xs text-warm-text/50 leading-relaxed font-light">
              Receive rare photography guides, Kerala premium venue insights, planning check-lists, and customized wedding film trends once a month.
            </p>

            <form onSubmit={handleSubscribe} className="relative flex items-center border-b border-white/20 focus-within:border-heritage-yellow transition-colors duration-300 pb-2">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent font-sans text-xs uppercase tracking-widest text-white placeholder-warm-text/30 outline-none pr-10"
              />
              <button
                type="submit"
                className="absolute right-0 p-2 text-warm-text/50 hover:text-heritage-yellow transition-colors cursor-pointer"
                aria-label="Send email subscription"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {subscribed && (
              <p className="font-sans text-xs text-heritage-yellow animate-fade-in font-medium">
                Welcome to our circle. Thank you for subscribing.
              </p>
            )}
          </div>
        </div>

        {/* Local SEO Semantic Footnote & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] font-sans text-warm-text/40 tracking-wider">
          <div className="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} 7 Lenz Wedd Planner. All Rights Reserved.
            <span className="block mt-1 text-[9px] opacity-60">
              Ranked among Kerala's finest luxury wedding film directors and candidacy masters.
            </span>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 font-mono opacity-50">
            <span>#WeddingPlannerKerala</span>
            <span>#WeddingPhotographerKerala</span>
            <span>#WeddingFilmsKerala</span>
            <span>#PathanamthittaWedding</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
