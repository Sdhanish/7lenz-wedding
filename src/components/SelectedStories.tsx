/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, ArrowRight, X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { portfolioItems } from '../data';

interface SelectedStoriesProps {
  onInquireAboutStory: (storyTitle: string) => void;
}

export default function SelectedStories({ onInquireAboutStory }: SelectedStoriesProps) {
  const [filter, setFilter] = useState<string>('all');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'ALL WORKS' },
    { id: 'weddings', label: 'WEDDINGS' },
    { id: 'films', label: 'CINEMATIC FILMS' },
    { id: 'destination', label: 'DESTINATIONS' },
    { id: 'traditional', label: 'TRADITIONAL KERALA' },
    { id: 'engagement', label: 'ENGAGEMENTS' },
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const openLightbox = (itemTitle: string) => {
    const idx = portfolioItems.findIndex(item => item.title === itemTitle);
    if (idx !== -1) {
      setSelectedIdx(idx);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === 0 ? portfolioItems.length - 1 : selectedIdx - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === portfolioItems.length - 1 ? 0 : selectedIdx + 1);
    }
  };

  return (
    <section className="relative bg-ivory dark:bg-ink py-20 sm:py-28 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left space-y-4">
            <span className="font-mono text-[9px] tracking-widest text-heritage-yellow font-bold uppercase block">
              PORTFOLIO CATALOGUE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-ink dark:text-white leading-tight">
              Selected Love Stories, <br />
              <span className="italic text-heritage-yellow font-normal">Whispered in Light & Shadow</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="font-sans text-xs text-ink-text/50 dark:text-warm-text/40 font-light leading-relaxed max-w-sm ml-auto">
              Every celebration is a bespoke narrative. Browse our curated galleries to feel the artistic lens we cast over each custom event.
            </p>
          </div>
        </div>

        {/* Filter Tab Interface */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 pb-8 mb-12 border-b border-border-warm/25 dark:border-white/5 scrollbar-none overflow-x-auto whitespace-nowrap">
          {filters.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-4 py-2 font-interface text-[10px] sm:text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer rounded-full
                ${filter === item.id 
                  ? 'bg-heritage-yellow text-white shadow-lg shadow-heritage-yellow/15' 
                  : 'bg-border-warm/15 text-ink-text/70 dark:text-warm-text/70 hover:bg-border-warm/30 dark:hover:bg-charcoal-surf/60'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Uneven Editorial Masonry Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // Custom asymmetric height offsets to simulate architectural layout rhythm
              const isTall = index % 3 === 1;
              const isOffset = index % 3 === 2;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  onClick={() => openLightbox(item.title)}
                  className={`relative group cursor-pointer overflow-hidden bg-charcoal-surf shadow-xl border border-border-warm/20 dark:border-white/5 
                    ${isTall ? 'md:h-[520px]' : 'md:h-[440px]'} 
                    ${isOffset ? 'md:translate-y-8' : ''} 
                    h-[380px] w-full`}
                >
                  {/* Photo crop wrapper */}
                  <div className="w-full h-full overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
                  </div>

                  {/* Editorial Overlay Details */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 z-20">
                    <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-heritage-yellow tracking-widest font-bold uppercase">
                          {item.vibe || 'AUTHENTIC MEMORY'}
                        </span>
                        <span className="font-sans text-[10px] text-warm-text/40 font-mono">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-light text-white leading-snug">
                        {item.title}
                      </h3>

                      <p className="font-sans text-[11px] text-warm-text/60 font-light line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                        {item.description}
                      </p>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-warm-text/70">
                        <span className="flex items-center text-[10px] font-sans tracking-wide">
                          <MapPin className="w-3 h-3 text-heritage-yellow mr-1" />
                          {item.location}
                        </span>
                        <span className="font-interface text-[9px] tracking-widest font-bold text-white flex items-center group-hover:text-heritage-yellow transition-colors uppercase">
                          OPEN STORY <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dynamic spacer for masonry offsets */}
        <div className="h-16 hidden md:block" />

        {/* Immersive Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#0c0c0c]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
              onClick={() => setSelectedIdx(null)}
            >
              <div 
                className="relative max-w-6xl w-full bg-charcoal-surf border border-white/5 rounded-sm shadow-2xl flex flex-col lg:flex-row overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Image panel (Left / Top) */}
                <div className="lg:w-2/3 h-[300px] sm:h-[450px] lg:h-[600px] relative overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={portfolioItems[selectedIdx].image}
                    alt={portfolioItems[selectedIdx].title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Navigation triggers */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 p-3 rounded-full bg-black/40 border border-white/10 hover:bg-heritage-yellow text-white cursor-pointer transition-all hover:scale-105"
                    title="Previous Story"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-4 p-3 rounded-full bg-black/40 border border-white/10 hover:bg-heritage-yellow text-white cursor-pointer transition-all hover:scale-105"
                    title="Next Story"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 text-[10px] font-mono text-white tracking-widest uppercase rounded">
                    STORY {selectedIdx + 1} OF {portfolioItems.length}
                  </div>
                </div>

                {/* Metadata & storytelling panel (Right / Bottom) */}
                <div className="lg:w-1/3 p-8 sm:p-10 flex flex-col justify-between text-left space-y-6 bg-[#141414]">
                  
                  {/* Close trigger */}
                  <button
                    onClick={() => setSelectedIdx(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-heritage-yellow/20 hover:text-heritage-yellow transition-all cursor-pointer text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="space-y-6 pt-4">
                    <div className="space-y-2">
                      <span className="font-mono text-[9px] text-heritage-yellow tracking-widest font-bold uppercase block">
                        {portfolioItems[selectedIdx].vibe || 'LUXURY CAPTURE'}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-light text-white tracking-tight leading-tight">
                        {portfolioItems[selectedIdx].title}
                      </h2>
                    </div>

                    <div className="hairline" />

                    <p className="font-sans text-xs sm:text-sm text-warm-text/70 leading-relaxed font-light">
                      {portfolioItems[selectedIdx].description}
                    </p>

                    <div className="space-y-3 font-sans text-xs pt-2">
                      <div className="flex items-center text-warm-text/50">
                        <MapPin className="w-3.5 h-3.5 mr-2 text-heritage-yellow" />
                        <span><strong>VENUE:</strong> {portfolioItems[selectedIdx].location}</span>
                      </div>
                      <div className="flex items-center text-warm-text/50">
                        <Calendar className="w-3.5 h-3.5 mr-2 text-heritage-yellow" />
                        <span><strong>TIMELINE:</strong> Year {portfolioItems[selectedIdx].year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 space-y-3">
                    <button
                      onClick={() => {
                        onInquireAboutStory(portfolioItems[selectedIdx].title);
                        setSelectedIdx(null);
                      }}
                      className="w-full flex items-center justify-center space-x-2.5 py-3.5 bg-heritage-yellow hover:bg-burnt-amber text-white font-interface text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>INQUIRE ABOUT THIS STYLE</span>
                    </button>
                    <p className="text-[9px] font-mono text-center text-muted-grey tracking-wider">
                      PLANNER &bull; CINEMA &bull; STORYTELLING
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
