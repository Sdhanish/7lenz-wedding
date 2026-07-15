/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, ShieldCheck, Heart, ArrowUpRight, Smile, Star, Flame } from 'lucide-react';
import { testimonials } from '../data';

export default function AboutSection() {
  const values = [
    { name: 'AUTENTIC EMOTION', desc: 'No forced plastic poses. We capture the genuine tear, the real belly laugh, and the unprompted quiet squeeze of hands.', icon: Heart },
    { name: 'PREMIUM CRAFT', desc: 'Art-directed cinematography using elite prime lenses, master-class lighting directors, and museum-grade custom wedding books.', icon: Sparkles },
    { name: 'CALM COMPOSURE', desc: 'A wedding can be hectic. Our crew maintains a serene, reassuring, professional presence to help you remain perfectly at ease.', icon: Award },
    { name: 'STEADFAST TRUST', desc: '8+ years of flawless deliveries, lifetime cloud back-ups, and clear, transparent, contractual agreements.', icon: ShieldCheck },
  ];

  const timelineSteps = [
    { year: '2018', title: 'The Single Lens Origin', text: 'Started as a small team of passionate documentary photographers in Pathanamthitta, Kerala. Focused entirely on candid portraits and natural light.' },
    { year: '2020', title: 'Cinematic Expansion', text: 'Pioneered 4K slow-motion cinematic storytelling in central Travancore, fusing cinematic coloring with traditional Malayalam wedding dynamics.' },
    { year: '2022', title: 'The Destination Breakthrough', text: 'Selected as the primary production studio for grand lakeside celebrations at Kumarakom Lake Resort and Raviz Kovalam.' },
    { year: '2024', title: 'The Bespoke Casket Line', text: 'Launched our exclusive, hand-crafted line of leather, organic linen, and custom acrylic layflat heirlooms.' },
    { year: '2026', title: 'A Legacy of 10,000+ Memories', text: 'Ranked among Kerala’s top luxury wedding planners and cinematic studios. Trusted by over 500+ happy families worldwide.' }
  ];

  return (
    <section className="relative bg-ivory dark:bg-ink py-20 sm:py-28 transition-colors duration-500 overflow-hidden text-left">
      
      {/* Structural vertical lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-border-warm/15 dark:bg-white/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Storytelling introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-[9px] tracking-widest text-heritage-yellow font-bold uppercase block">
              OUR PHOTOGRAPHIC PHILOSOPHY
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-ink dark:text-white leading-tight">
              We Document Your Joy, <br />
              <span className="italic text-heritage-yellow font-normal">Without Making It Feel Like a Rehearsal</span>
            </h2>

            <div className="hairline max-w-md" />

            <p className="font-sans text-sm text-ink-text/75 dark:text-warm-text/75 leading-relaxed font-light">
              At 7 Lenz, we believe that your wedding day is a sacred milestone, not a highly scripted film set. Our primary methodology centers on the art of presence—knowing exactly when to step forward to light a formal portrait, and when to melt into the shadows to capture your mother holding back a tear.
            </p>

            <p className="font-sans text-sm text-ink-text/75 dark:text-warm-text/75 leading-relaxed font-light">
              We treat each wedding as a customized editorial project. No pre-made presets, no cookie-cutter video music, and no artificial poses. We listen to your story, understand your dynamics, and design a custom production package that represents your heritage and values.
            </p>
          </div>

          <div className="lg:col-span-5 relative pt-12 lg:pt-4">
            
            {/* Artistic Founder Frame */}
            <div className="relative w-full max-w-sm mx-auto bg-charcoal-surf border border-border-warm/30 dark:border-white/10 p-4 shadow-2xl">
              <div className="h-80 overflow-hidden relative bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600" 
                  alt="Founder Manoj Varma behind camera" 
                  className="w-full h-full object-cover grayscale opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="pt-4 space-y-1">
                <p className="font-display text-sm text-heritage-yellow italic font-medium">
                  &ldquo;Your wedding is a fleeting poem. Our duty is to lock its stanzas in light.&rdquo;
                </p>
                <div className="pt-2 flex justify-between items-center">
                  <div>
                    <h4 className="font-interface text-xs font-bold text-white tracking-widest uppercase">Manoj Varma</h4>
                    <span className="font-mono text-[8px] text-muted-grey tracking-wider uppercase">Founder & Chief Artist, 7 Lenz</span>
                  </div>
                  <span className="font-mono text-[9px] text-heritage-yellow border border-heritage-yellow/30 px-2 py-0.5 uppercase">DIRECTOR</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Brand Values Grid */}
        <div className="mb-28">
          <div className="max-w-xl mb-12">
            <span className="font-mono text-[9px] tracking-widest text-heritage-yellow font-bold uppercase block">
              OUR UNCOMPROMISED CORE VALUES
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-light text-ink dark:text-white mt-1">
              What Defines the 7 Lenz Signature
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const ValueIcon = val.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 bg-white dark:bg-charcoal-surf border border-border-warm/30 dark:border-white/5 rounded-sm hover:border-heritage-yellow dark:hover:border-heritage-yellow transition-all duration-300 shadow-md group"
                >
                  <div className="p-3 bg-heritage-yellow/5 rounded-full w-fit mb-4 group-hover:bg-heritage-yellow/15 transition-all">
                    <ValueIcon className="w-5 h-5 text-heritage-yellow" />
                  </div>
                  <h4 className="font-interface text-xs font-bold text-ink dark:text-white tracking-widest uppercase mb-2">
                    {val.name}
                  </h4>
                  <p className="font-sans text-xs text-ink-text/60 dark:text-warm-text/50 font-light leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Visual Timeline */}
        <div className="mb-16">
          <div className="max-w-xl mb-16">
            <span className="font-mono text-[9px] tracking-widest text-heritage-yellow font-bold uppercase block">
              THE 7 LENZ JOURNEY
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-light text-ink dark:text-white mt-1">
              A Timeline of Art & Milestones
            </h3>
          </div>

          <div className="relative border-l-2 border-border-warm/40 dark:border-white/10 ml-4 md:ml-12 pl-6 md:pl-12 space-y-12">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative group text-left">
                
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-ivory dark:bg-ink border-2 border-heritage-yellow flex items-center justify-center group-hover:scale-125 transition-transform">
                  <div className="w-1.5 h-1.5 bg-heritage-yellow rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  
                  {/* Year Tag */}
                  <div className="md:col-span-2">
                    <span className="font-display text-3xl sm:text-4xl font-semibold text-heritage-yellow">
                      {step.year}
                    </span>
                  </div>

                  {/* Text Details */}
                  <div className="md:col-span-10 space-y-2 max-w-3xl">
                    <h4 className="font-interface text-xs font-bold text-ink dark:text-white tracking-widest uppercase">
                      {step.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-ink-text/60 dark:text-warm-text/50 font-light leading-relaxed">
                      {step.text}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Elegant Slider Testimony section */}
        <div className="pt-16 border-t border-border-warm/25 dark:border-white/5">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="font-mono text-[9px] tracking-widest text-heritage-yellow font-bold uppercase block">
              HEARD IN PASSING
            </span>
            
            <div className="relative">
              <span className="font-display text-6xl text-heritage-yellow/20 font-serif absolute -top-8 -left-4 select-none">&ldquo;</span>
              <p className="font-display text-lg sm:text-xl md:text-2xl font-light text-ink dark:text-white italic leading-relaxed px-4 relative z-10">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
              <span className="font-display text-6xl text-heritage-yellow/20 font-serif absolute -bottom-16 -right-4 select-none">&rdquo;</span>
            </div>

            <div className="pt-4">
              <h5 className="font-interface text-xs font-bold text-ink dark:text-white tracking-widest uppercase">
                {testimonials[0].author}
              </h5>
              <p className="font-mono text-[9px] text-muted-grey tracking-wider uppercase">
                {testimonials[0].role} &bull; {testimonials[0].location}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
