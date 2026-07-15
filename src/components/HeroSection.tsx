/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Eye, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (tabId: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-ivory dark:bg-ink py-16 sm:py-24 transition-colors duration-500">
      
      {/* Background Subtle Gradient & Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-ivory dark:to-ink pointer-events-none z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-heritage-yellow/5 dark:bg-heritage-yellow/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero "Breathing Frame" Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Asymmetrical Column 1: Copy, Typography, CTAs */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            <div className="space-y-4">
              {/* Micro-label */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex items-center space-x-3"
              >
                <span className="w-8 h-[1px] bg-heritage-yellow" />
                <span className="font-mono text-[10px] tracking-widest text-heritage-yellow font-bold uppercase">
                  ESTD 2018 &bull; KERALA, INDIA
                </span>
              </motion.div>

              {/* Expressive Display Headline (Cormorant Garamond) */}
              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-ink dark:text-white leading-[1.1]"
              >
                Crafting Timeless <br />
                <span className="italic font-normal text-heritage-yellow">Wedding Stories</span> <br />
                Through Art & Emotion.
              </motion.h1>

              {/* Support lines */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-sans text-sm sm:text-base text-ink-text/70 dark:text-warm-text/70 max-w-lg font-light leading-relaxed"
              >
                7 Lenz preserves your once-in-a-lifetime celebrations into emotionally honest, artfully composed visual films and portrait catalogs. Experience the height of Indian luxury event coverage.
              </motion.p>
            </div>

            {/* Hairline structural separation */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hairline origin-left max-w-sm"
            />

            {/* Dynamic CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => onNavigate('portfolio')}
                className="flex items-center space-x-2.5 px-6 py-3.5 bg-ink dark:bg-white text-white dark:text-ink hover:bg-heritage-yellow dark:hover:bg-heritage-yellow hover:text-white dark:hover:text-white transition-all duration-300 font-interface text-xs font-bold tracking-widest uppercase cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>VIEW RECENT STORIES</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center space-x-2.5 px-6 py-3.5 bg-transparent text-ink dark:text-white border border-border-warm hover:border-heritage-yellow dark:hover:border-heritage-yellow hover:text-heritage-yellow dark:hover:text-heritage-yellow transition-all duration-300 font-interface text-xs font-bold tracking-widest uppercase cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK CONSULTATION</span>
              </button>
            </motion.div>
          </div>

          {/* Asymmetrical Column 2: Oversized Editorial Images with "Slow Memory" Multi-layer Feel */}
          <div className="lg:col-span-6 relative flex justify-center items-center lg:pl-8">
            
            {/* Background layered landscape frame (Munnar Misty Backdrop) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 0.85, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute -left-4 -top-8 w-44 sm:w-60 h-64 sm:h-80 bg-charcoal-surf overflow-hidden shadow-2xl rounded-sm border border-border-warm/20 hidden sm:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=600" 
                alt="Misty tea gardens of Munnar pre-wedding landscape"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-ink/70 px-2 py-1 backdrop-blur-sm">
                <span className="font-mono text-[8px] text-white tracking-widest uppercase">MUNNAR ESCAPE</span>
              </div>
            </motion.div>

            {/* Front main layered frame (Timeless Kerala Bride) with soft parallax-like animation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              className="relative w-full max-w-sm sm:max-w-md h-[400px] sm:h-[480px] bg-charcoal-surf overflow-hidden shadow-2xl border border-border-warm/30 z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800" 
                alt="Kerala traditional wedding luxury portrait"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[1.5s]"
                referrerPolicy="no-referrer"
              />

              {/* Floating micro-caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-30">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-heritage-yellow tracking-widest font-bold uppercase block">NOW FEATURED</span>
                  <h3 className="font-display text-lg sm:text-xl font-light text-white italic">Anjali & Rahul &bull; The Royal Kasavu</h3>
                </div>
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-heritage-yellow/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
            </motion.div>

            {/* Accent Absolute elements - Minimal signature indicators */}
            <div className="absolute -bottom-6 -right-2 font-mono text-[8px] text-muted-grey tracking-widest uppercase hidden lg:block select-none transform rotate-90 origin-right">
              SCROLL TO CAPTURED EMOTIONS &bull; 01
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
