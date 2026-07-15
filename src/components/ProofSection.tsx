/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Camera, Heart, Sparkles } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = '', duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-ink dark:text-white transition-colors duration-300">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ProofSection() {
  const proofItems = [
    {
      id: 'proof-years',
      number: 8,
      suffix: '+',
      label: 'Years of Devoted Craft',
      sub: 'Evolving, perfecting, and telling deep authentic visual stories.',
      icon: Award
    },
    {
      id: 'proof-weddings',
      number: 200,
      suffix: '+',
      label: 'Sacred Celebrations',
      sub: 'From intimate lakeside vows to majestic multi-day castle unions.',
      icon: Camera
    },
    {
      id: 'proof-clients',
      number: 500,
      suffix: '+',
      label: 'Grateful Families',
      sub: 'Nurturing relationships built on absolute trust and quiet calm.',
      icon: Heart
    },
    {
      id: 'proof-moments',
      number: 10000,
      suffix: '+',
      label: 'Moments Locked in Light',
      sub: 'Laughs, quiet tears, tight hugs, and heritage rites frozen in time.',
      icon: Sparkles
    }
  ];

  return (
    <section className="relative bg-ivory dark:bg-ink py-16 sm:py-24 transition-colors duration-500 overflow-hidden">
      
      {/* Editorial horizontal layout dividers - Part of the spatial "Breathing Frame" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="hairline mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {proofItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id} 
                className="flex flex-col space-y-4 text-left border-l border-border-warm/35 pl-6 lg:pl-8 dark:border-white/10 group hover:border-heritage-yellow transition-colors duration-500"
              >
                {/* Micro Icon */}
                <div className="flex items-center justify-between">
                  <IconComponent className="w-5 h-5 text-heritage-yellow/70 group-hover:text-heritage-yellow group-hover:scale-110 transition-all duration-300" />
                  <span className="font-mono text-[9px] text-muted-grey tracking-widest font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Animated counter */}
                <div className="flex items-baseline">
                  <AnimatedCounter value={item.number} suffix={item.suffix} />
                </div>

                {/* Counter Details */}
                <div className="space-y-1">
                  <h4 className="font-interface text-xs font-semibold tracking-widest text-ink dark:text-white uppercase transition-colors">
                    {item.label}
                  </h4>
                  <p className="font-sans text-xs text-ink-text/60 dark:text-warm-text/50 font-light leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hairline mt-16" />
      </div>
    </section>
  );
}
