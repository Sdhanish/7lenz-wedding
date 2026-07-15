/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, HelpCircle, Sparkles, Sliders, ChevronDown, Plus, Info } from 'lucide-react';
import { services, packageTiers } from '../data';

interface ServicesSectionProps {
  onSelectPackage: (packageName: string, price: string) => void;
}

export default function ServicesSection({ onSelectPackage }: ServicesSectionProps) {
  // Budget & Package Calculator States
  const [selectedTier, setSelectedTier] = useState<'Essential' | 'Premium' | 'Luxury'>('Premium');
  const [extraHours, setExtraHours] = useState<number>(0);
  const [extraPhotographers, setExtraPhotographers] = useState<number>(0);
  const [extraVideographers, setExtraVideographers] = useState<number>(0);
  
  // Custom Add-on States
  const [addOnSameDayEdit, setAddOnSameDayEdit] = useState<boolean>(false);
  const [addOnExtraAlbum, setAddOnExtraAlbum] = useState<boolean>(false);
  const [addOnDroneDay, setAddOnDroneDay] = useState<boolean>(false);
  const [addOnRawDeliverables, setAddOnRawDeliverables] = useState<boolean>(false);

  // Price Calculation Logic
  const getBasePrice = () => {
    if (selectedTier === 'Essential') return 120000;
    if (selectedTier === 'Premium') return 250000;
    return 480000; // Luxury
  };

  const calculateTotal = () => {
    let total = getBasePrice();
    
    // Custom configurations
    total += extraHours * 10000; // ₹10,000 per extra hour of crew coverage
    total += extraPhotographers * 15000; // ₹15,000 per additional photographer
    total += extraVideographers * 18000; // ₹18,000 per additional cinematographer
    
    // Custom add-ons
    if (addOnSameDayEdit && selectedTier !== 'Luxury') total += 35000; // Included in Luxury
    if (addOnExtraAlbum) total += 25000; // Premium archival book
    if (addOnDroneDay && selectedTier === 'Essential') total += 20000; // Extra day drone
    if (addOnRawDeliverables) total += 15000; // Standard RAW drives
    
    return total;
  };

  const handleBookEstimate = () => {
    const formattedPrice = `₹${calculateTotal().toLocaleString()}`;
    const customSummary = `${selectedTier} Package (Customized with ${extraHours} extra hrs, ${extraPhotographers} extra photog, ${extraVideographers} extra video, and selected add-ons)`;
    onSelectPackage(customSummary, formattedPrice);
  };

  return (
    <section className="relative bg-ivory dark:bg-ink py-20 sm:py-28 transition-colors duration-500 overflow-hidden">
      
      {/* Decorative Blur and grid lines */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-heritage-yellow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl text-left space-y-4 mb-20">
          <span className="font-mono text-[9px] tracking-widest text-heritage-yellow font-bold uppercase block">
            OUR BRAND OF SERVICE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-ink dark:text-white leading-tight">
            Comprehensive Event Coverage & <br />
            <span className="italic text-heritage-yellow font-normal">Art-Directed Media Catalogs</span>
          </h2>
          <p className="font-sans text-sm text-ink-text/60 dark:text-warm-text/50 font-light leading-relaxed max-w-xl">
            We blend architectural precision with candid, raw emotion. Explore our core services and design your ideal wedding production suite.
          </p>
        </div>

        {/* 1. Large-Format Photograph-Led Service Cards */}
        <div className="space-y-16 sm:space-y-24 mb-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center 
                  ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                
                {/* Photo card panel */}
                <div className={`lg:col-span-6 overflow-hidden bg-charcoal-surf shadow-xl border border-border-warm/20 h-[320px] sm:h-[400px]
                  ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Typography panel */}
                <div className={`lg:col-span-6 text-left space-y-6 
                  ${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}
                >
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] text-heritage-yellow tracking-widest font-bold uppercase">
                      SERVICE {index + 1} OF {services.length}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-light text-ink dark:text-white leading-tight">
                      {service.title}
                    </h3>
                    <p className="font-display text-sm sm:text-base italic text-heritage-yellow font-normal">
                      &ldquo;{service.tagline}&rdquo;
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-ink-text/70 dark:text-warm-text/60 font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-ink-text/80 dark:text-warm-text/80">
                        <Check className="w-3.5 h-3.5 text-heritage-yellow mr-2 mt-0.5 flex-shrink-0" />
                        <span className="font-light">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <a 
                      href="#calculator"
                      className="inline-flex items-center space-x-2 font-interface text-xs font-bold tracking-widest text-ink dark:text-white hover:text-heritage-yellow dark:hover:text-heritage-yellow transition-colors uppercase"
                    >
                      <span>CONFIGURE PRICING</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Static Elegant Tiered Package Cards */}
        <div className="mb-32">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
            <span className="font-mono text-[9px] tracking-widest text-heritage-yellow font-bold uppercase block">
              STANDARD OFFERINGS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-light text-ink dark:text-white">
              Signature Production Tiers
            </h3>
            <p className="font-sans text-xs text-ink-text/50 dark:text-warm-text/40 font-light">
              Meticulously scaled options tailored for events of varying durations and client requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packageTiers.map((tier) => (
              <div 
                key={tier.id}
                className={`relative flex flex-col justify-between p-8 bg-white dark:bg-charcoal-surf border transition-all duration-300 shadow-xl rounded-sm text-left
                  ${tier.name === 'Premium' 
                    ? 'border-heritage-yellow ring-1 ring-heritage-yellow/30 lg:scale-[1.03]' 
                    : 'border-border-warm/30 dark:border-white/5'
                  }`}
              >
                {tier.name === 'Premium' && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-heritage-yellow px-3 py-1 font-mono text-[8px] font-bold text-white tracking-widest uppercase shadow">
                    OUR SIGNATURE SELECTION
                  </div>
                )}

                <div className="space-y-6">
                  {/* Package Meta */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] text-muted-grey tracking-widest font-bold uppercase block">
                      {tier.coverage}
                    </span>
                    <h4 className="font-display text-2xl font-light text-ink dark:text-white">
                      {tier.name}
                    </h4>
                    <p className="font-sans text-[11px] text-ink-text/60 dark:text-warm-text/50 font-light leading-relaxed min-h-[44px]">
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Pricing Frame */}
                  <div className="py-4 border-y border-border-warm/30 dark:border-white/5">
                    <span className="font-mono text-[9px] text-muted-grey tracking-widest block uppercase">
                      REPRESENTATIVE INVESTMENT
                    </span>
                    <span className="font-display text-2xl sm:text-3xl font-medium text-heritage-yellow">
                      {tier.priceEstimate}
                    </span>
                  </div>

                  {/* Core Inclusions */}
                  <div className="space-y-3 font-sans text-xs">
                    <span className="font-mono text-[9px] text-muted-grey tracking-widest block font-bold uppercase">
                      KEY INCLUSIONS
                    </span>
                    <ul className="space-y-2.5">
                      {tier.deliverables.slice(0, 5).map((item, idx) => (
                        <li key={idx} className="flex items-start text-ink-text/80 dark:text-warm-text/70">
                          <Check className="w-3.5 h-3.5 text-heritage-yellow flex-shrink-0 mr-2 mt-0.5" />
                          <span className="font-light line-clamp-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-border-warm/20 dark:border-white/5 space-y-2">
                  <button
                    onClick={() => onSelectPackage(tier.name, tier.priceEstimate || 'Custom Quote')}
                    className="w-full text-center py-3 bg-ink dark:bg-white text-white dark:text-ink hover:bg-heritage-yellow dark:hover:bg-heritage-yellow hover:text-white dark:hover:text-white font-interface text-[10px] font-bold tracking-widest uppercase transition-colors cursor-pointer"
                  >
                    SELECT {tier.name}
                  </button>
                  <a
                    href="https://wa.me/919447700700"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center py-2 border border-border-warm/50 hover:border-heritage-yellow font-interface text-[9px] font-bold tracking-widest text-muted-grey hover:text-heritage-yellow uppercase transition-all"
                  >
                    CHAT ON WHATSAPP
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. The Breathing Frame Interactive Budget Estimator */}
        <div id="calculator" className="bg-[#121212] text-warm-text rounded-sm p-8 sm:p-12 border border-white/5 text-left max-w-5xl mx-auto shadow-2xl relative">
          
          <div className="absolute top-4 right-4 text-white/5 font-mono text-7xl font-bold uppercase select-none pointer-events-none hidden sm:block">
            CALC
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Controls Column */}
            <div className="lg:col-span-8 space-y-8">
              
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-heritage-yellow tracking-widest font-bold uppercase block">
                  INTERACTIVE LAB & STUDIO COST ESTIMATOR
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-light text-white leading-tight">
                  Design Your Bespoke <span className="italic font-normal text-heritage-yellow">Production Package</span>
                </h3>
                <p className="font-sans text-xs text-warm-text/50 font-light">
                  Tailor coverage times, additional crews, and deliverables dynamically to review customized pricing estimates immediately.
                </p>
              </div>

              <div className="hairline" />

              {/* Step 1: Base Tier Choice */}
              <div className="space-y-3">
                <span className="font-mono text-[9px] text-muted-grey tracking-widest font-bold uppercase block">
                  STEP 1: SELECT COUTUR BASE TIER
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {(['Essential', 'Premium', 'Luxury'] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setSelectedTier(tier)}
                      className={`py-3.5 text-center font-interface text-[10px] sm:text-xs font-semibold tracking-widest cursor-pointer border transition-all duration-300 uppercase
                        ${selectedTier === tier 
                          ? 'bg-heritage-yellow text-white border-heritage-yellow shadow-lg shadow-heritage-yellow/10' 
                          : 'bg-white/5 border-white/10 text-warm-text/70 hover:bg-white/10'
                        }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Crew Expansion */}
              <div className="space-y-4">
                <span className="font-mono text-[9px] text-muted-grey tracking-widest font-bold uppercase block">
                  STEP 2: SERVICE EXPANSIONS & HOURS
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  
                  {/* Extra Hours Slider */}
                  <div className="space-y-2 bg-white/3 p-4 rounded border border-white/5">
                    <div className="flex justify-between items-center text-xs font-sans">
                      <span className="text-warm-text/60">Extra Hours</span>
                      <strong className="text-heritage-yellow">+{extraHours} hrs</strong>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="10" 
                      value={extraHours} 
                      onChange={(e) => setExtraHours(parseInt(e.target.value))}
                      className="w-full accent-heritage-yellow cursor-pointer"
                    />
                    <span className="font-mono text-[8px] text-muted-grey block">₹10,000 / Hr Crew Coverage</span>
                  </div>

                  {/* Extra Photographers Slider */}
                  <div className="space-y-2 bg-white/3 p-4 rounded border border-white/5">
                    <div className="flex justify-between items-center text-xs font-sans">
                      <span className="text-warm-text/60">Extra Photographer</span>
                      <strong className="text-heritage-yellow">+{extraPhotographers}</strong>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="3" 
                      value={extraPhotographers} 
                      onChange={(e) => setExtraPhotographers(parseInt(e.target.value))}
                      className="w-full accent-heritage-yellow cursor-pointer"
                    />
                    <span className="font-mono text-[8px] text-muted-grey block">₹15,000 / Lead Operator</span>
                  </div>

                  {/* Extra Videographer Slider */}
                  <div className="space-y-2 bg-white/3 p-4 rounded border border-white/5">
                    <div className="flex justify-between items-center text-xs font-sans">
                      <span className="text-warm-text/60">Extra Cinematographer</span>
                      <strong className="text-heritage-yellow">+{extraVideographers}</strong>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="3" 
                      value={extraVideographers} 
                      onChange={(e) => setExtraVideographers(parseInt(e.target.value))}
                      className="w-full accent-heritage-yellow cursor-pointer"
                    />
                    <span className="font-mono text-[8px] text-muted-grey block">₹18,000 / Lead Cinematographer</span>
                  </div>

                </div>
              </div>

              {/* Step 3: Custom Premium Addons */}
              <div className="space-y-3">
                <span className="font-mono text-[9px] text-muted-grey tracking-widest font-bold uppercase block">
                  STEP 3: EXQUISITE HEIRLOOM ADD-ONS
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
                  
                  {/* Same Day Edit */}
                  <label className="flex items-center space-x-3 bg-white/3 hover:bg-white/5 border border-white/5 p-3.5 rounded cursor-pointer transition-all select-none">
                    <input 
                      type="checkbox" 
                      checked={selectedTier === 'Luxury' ? true : addOnSameDayEdit} 
                      disabled={selectedTier === 'Luxury'}
                      onChange={(e) => setAddOnSameDayEdit(e.target.checked)}
                      className="w-4 h-4 accent-heritage-yellow"
                    />
                    <div className="text-left">
                      <span className="block font-medium">Same-Day-Edit Reception Highlight Film</span>
                      <span className="block font-mono text-[9px] text-heritage-yellow">
                        {selectedTier === 'Luxury' ? 'INCLUDED IN LUXURY' : '+ ₹35,000'}
                      </span>
                    </div>
                  </label>

                  {/* Extra Layflat Wedding Album */}
                  <label className="flex items-center space-x-3 bg-white/3 hover:bg-white/5 border border-white/5 p-3.5 rounded cursor-pointer transition-all select-none">
                    <input 
                      type="checkbox" 
                      checked={addOnExtraAlbum} 
                      onChange={(e) => setAddOnExtraAlbum(e.target.checked)}
                      className="w-4 h-4 accent-heritage-yellow"
                    />
                    <div className="text-left">
                      <span className="block font-medium">Extra Layflat Archival Coffee Table Album</span>
                      <span className="block font-mono text-[9px] text-heritage-yellow">+ ₹25,000 (12" x 15")</span>
                    </div>
                  </label>

                  {/* Drone Over Time */}
                  <label className="flex items-center space-x-3 bg-white/3 hover:bg-white/5 border border-white/5 p-3.5 rounded cursor-pointer transition-all select-none">
                    <input 
                      type="checkbox" 
                      checked={selectedTier === 'Essential' ? addOnDroneDay : true} 
                      disabled={selectedTier !== 'Essential'}
                      onChange={(e) => setAddOnDroneDay(e.target.checked)}
                      className="w-4 h-4 accent-heritage-yellow"
                    />
                    <div className="text-left">
                      <span className="block font-medium">Cinematic Drone 4K Coverage</span>
                      <span className="block font-mono text-[9px] text-heritage-yellow">
                        {selectedTier !== 'Essential' ? 'INCLUDED IN PREMIUM & LUXURY' : '+ ₹20,000'}
                      </span>
                    </div>
                  </label>

                  {/* Raw footage delivery */}
                  <label className="flex items-center space-x-3 bg-white/3 hover:bg-white/5 border border-white/5 p-3.5 rounded cursor-pointer transition-all select-none">
                    <input 
                      type="checkbox" 
                      checked={addOnRawDeliverables} 
                      onChange={(e) => setAddOnRawDeliverables(e.target.checked)}
                      className="w-4 h-4 accent-heritage-yellow"
                    />
                    <div className="text-left">
                      <span className="block font-medium">Full Raw Catalog Catalogues & Video Reels</span>
                      <span className="block font-mono text-[9px] text-heritage-yellow">+ ₹15,000</span>
                    </div>
                  </label>

                </div>
              </div>

            </div>

            {/* Price Calculations Summary Column */}
            <div className="lg:col-span-4 bg-white/3 rounded p-6 sm:p-8 border border-white/5 flex flex-col justify-between text-left space-y-6">
              
              <div className="space-y-4">
                <span className="font-mono text-[9px] text-heritage-yellow tracking-widest font-bold uppercase block">
                  REAL-TIME QUOTE DETAILS
                </span>

                <div className="space-y-3 font-sans text-xs">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-warm-text/50">Base Tier: {selectedTier}</span>
                    <span>₹{getBasePrice().toLocaleString()}</span>
                  </div>
                  {extraHours > 0 && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-warm-text/50">Extra Hours ({extraHours}h)</span>
                      <span>₹{(extraHours * 10000).toLocaleString()}</span>
                    </div>
                  )}
                  {extraPhotographers > 0 && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-warm-text/50">Photographers (+{extraPhotographers})</span>
                      <span>₹{(extraPhotographers * 15000).toLocaleString()}</span>
                    </div>
                  )}
                  {extraVideographers > 0 && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-warm-text/50">Videographers (+{extraVideographers})</span>
                      <span>₹{(extraVideographers * 18000).toLocaleString()}</span>
                    </div>
                  )}
                  {addOnSameDayEdit && selectedTier !== 'Luxury' && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-warm-text/50">Same-Day-Edit</span>
                      <span>₹35,000</span>
                    </div>
                  )}
                  {addOnExtraAlbum && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-warm-text/50">Custom Coffee Album</span>
                      <span>₹25,000</span>
                    </div>
                  )}
                  {addOnDroneDay && selectedTier === 'Essential' && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-warm-text/50">Aerial Drone Day</span>
                      <span>₹20,000</span>
                    </div>
                  )}
                  {addOnRawDeliverables && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-warm-text/50">RAW Hard Drives</span>
                      <span>₹15,000</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-muted-grey tracking-widest uppercase">
                    TOTAL INVESTMENT ESTIMATE
                  </span>
                  <div className="font-display text-3xl sm:text-4xl font-semibold text-heritage-yellow">
                    ₹{calculateTotal().toLocaleString()}
                  </div>
                  <span className="font-mono text-[8px] text-muted-grey block">Inclusive of Pathanamthitta/Kochi local taxes</span>
                </div>

                <button
                  onClick={handleBookEstimate}
                  className="w-full py-4 bg-heritage-yellow hover:bg-burnt-amber text-white font-interface text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-heritage-yellow/10"
                >
                  PRE-FILL CONSULTATION FORM
                </button>
                <p className="text-[9px] text-muted-grey font-mono text-center tracking-wider leading-relaxed">
                  *This interactive quote serves as a structured guideline. Final custom terms will be consolidated during consultation.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
