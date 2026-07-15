/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProofSection from './components/ProofSection';
import SelectedStories from './components/SelectedStories';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import JournalSection from './components/JournalSection';
import FAQContactSection from './components/FAQContactSection';
import AdminPortal from './components/AdminPortal';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Film, Compass, Clock, ArrowRight, Play, Heart, Star, Award, Sparkles, Check } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  
  // Custom Package Pre-fill States
  const [prefilledPackage, setPrefilledPackage] = useState<string>('');
  const [prefilledPrice, setPrefilledPrice] = useState<string>('');

  // Video overlay popup for Featured Cinematic Film
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

  // Toggle dark/light theme classes on html and body elements
  useEffect(() => {
    const bodyClass = document.body.classList;
    const htmlClass = document.documentElement.classList;
    if (isDarkMode) {
      htmlClass.add('dark');
      bodyClass.add('dark-mode', 'dark', 'bg-ink', 'text-warm-text');
      bodyClass.remove('bg-ivory', 'text-ink-text');
    } else {
      htmlClass.remove('dark');
      bodyClass.add('bg-ivory', 'text-ink-text');
      bodyClass.remove('dark-mode', 'dark', 'bg-ink', 'text-warm-text');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Pre-fill a package in the pricing calculator, then route to booking tab
  const handleSelectPackage = (packageName: string, price: string) => {
    setPrefilledPackage(packageName);
    setPrefilledPrice(price);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearPrefills = () => {
    setPrefilledPackage('');
    setPrefilledPrice('');
  };

  // Redirect to contact from recent story
  const handleInquireAboutStory = (storyTitle: string) => {
    setPrefilledPackage(`Inquiry about portfolio style: ${storyTitle}`);
    setPrefilledPrice('Bespoke Proposal');
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen transition-colors duration-500 overflow-hidden font-sans">
      
      {/* Luxury Ambient Film Grain Overlay */}
      <div className="grain-overlay" />

      {/* The Breathing Frame: Outer Border Layout */}
      <div className="fixed inset-4 sm:inset-6 border border-border-warm/50 dark:border-white/10 pointer-events-none z-[99] transition-colors duration-500" />

      {/* Elegant Editorial Side Watermark */}
      <div className="fixed bottom-40 -right-24 rotate-90 origin-right select-none pointer-events-none z-0 hidden xl:block">
        <span className="text-[100px] font-display font-light text-[#111111]/[0.02] dark:text-white/[0.02] tracking-[0.2em] uppercase">
          AUTHENTICITY
        </span>
      </div>

      {/* Primary Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />

      {/* Main Tab Render Switcher */}
      <main className="relative z-10">
        
        {activeTab === 'home' && (
          <div className="animate-fade-in">
            {/* 1. Hero / Full Viewport */}
            <HeroSection onNavigate={setActiveTab} />

            {/* 2. Quiet Proof Statistics */}
            <ProofSection />

            {/* 3. Featured Wedding Film Segment */}
            <section className="relative bg-[#0d0d0d] text-white py-24 sm:py-32 overflow-hidden border-y border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,155,29,0.06)_0%,transparent_100%)] pointer-events-none" />
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Visual Label */}
                <div className="max-w-3xl text-left space-y-4 mb-16">
                  <span className="font-mono text-[9px] tracking-widest text-heritage-yellow font-bold uppercase block">
                    FEATURED KERALA CINEMA
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                    The Silent Language of Whispered Vows: <br />
                    <span className="italic text-heritage-yellow font-normal">Sandra & George at Kovalam</span>
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-warm-text/60 font-light leading-relaxed max-w-xl">
                    Crafted in ultra-high-definition 4K cinematic format. We followed their quiet smiles, traditional Syrian Christian temple liturgy, and dynamic coastal reception at Raviz Kovalam.
                  </p>
                </div>

                {/* Immersive Film play stage */}
                <div 
                  onClick={() => setIsVideoPopupOpen(true)}
                  className="relative h-[320px] sm:h-[480px] w-full bg-[#181818] border border-white/10 overflow-hidden shadow-2xl group cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200" 
                    alt="Cinematographer filming a Kerala wedding under warm sunset lighting" 
                    className="w-full h-full object-cover grayscale opacity-65 group-hover:scale-105 group-hover:opacity-80 transition-all duration-[2s]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark Vignette and visual labels */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Play Trigger Badge */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-6 sm:p-8 rounded-full bg-heritage-yellow hover:bg-burnt-amber text-white shadow-2xl transform group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white ml-1 animate-pulse" />
                    </div>
                  </div>

                  {/* Camera rig footnote metadata */}
                  <div className="absolute bottom-6 left-6 text-left hidden sm:block">
                    <span className="font-mono text-[8px] text-muted-grey tracking-widest block uppercase">PRODUCTION GEAR DETAILS</span>
                    <span className="font-mono text-[9px] text-heritage-yellow font-bold uppercase block mt-1">RED V-RAPTOR 8K &bull; ARRI SIGNATURE PRIMES &bull; anamorphic lens</span>
                  </div>

                  <div className="absolute bottom-6 right-6 text-right">
                    <span className="font-mono text-[9px] text-white tracking-widest uppercase font-bold bg-white/10 px-2.5 py-1 rounded backdrop-blur-sm border border-white/20">
                      PLAY TRAILER (3:20)
                    </span>
                  </div>

                </div>

              </div>
            </section>

            {/* 4. Selected Stories Preview Gallery */}
            <SelectedStories onInquireAboutStory={handleInquireAboutStory} />

            {/* 5. Destination Wedding Highlight Callout */}
            <section className="relative bg-ivory dark:bg-[#151515] py-20 sm:py-28 border-y border-border-warm/30 dark:border-white/5 transition-colors duration-500 overflow-hidden">
              <div className="absolute top-1/4 left-0 w-72 h-72 bg-heritage-yellow/5 rounded-full blur-[90px] pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
                  
                  {/* Photo montage frame */}
                  <div className="lg:col-span-6 relative h-[300px] sm:h-[400px]">
                    <div className="absolute left-0 top-0 w-4/5 h-4/5 overflow-hidden bg-charcoal-surf shadow-xl border border-border-warm/30 rounded-sm">
                      <img 
                        src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800" 
                        alt="Scenic backwaters of Kumarakom with sunset reflections" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute right-0 bottom-0 w-3/5 h-3/5 overflow-hidden bg-charcoal-surf shadow-2xl border border-border-warm/40 rounded-sm z-20">
                      <img 
                        src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=600" 
                        alt="Sunset couple silhouette in Munnar" 
                        className="w-full h-full object-cover grayscale"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Core copy */}
                  <div className="lg:col-span-6 space-y-6 lg:pl-8">
                    <span className="font-mono text-[9px] tracking-widest text-heritage-yellow font-bold uppercase block">
                      ATMOSPHERIC DESTINATION PLANNING
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl font-light text-ink dark:text-white leading-tight">
                      Destination Sovereignty: <br />
                      <span className="italic text-heritage-yellow font-normal">From Munnar Mist to Lakeside Decks</span>
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-ink-text/70 dark:text-warm-text/60 leading-relaxed font-light">
                      We plan, map, and coordinate complete destination wedding coverage throughout Kumarakom, Alappuzha backwaters, Wayanad tea canopies, and Fort Kochi heritage yards.
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-ink-text/70 dark:text-warm-text/60 leading-relaxed font-light">
                      Our directors travel with professional mobile editing rigs, high-grade aerial drone bodies, backup power generators, and humidity protection caskets to ensure flawless service anywhere in the world.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setActiveTab('services')}
                        className="inline-flex items-center space-x-2 font-interface text-xs font-bold tracking-widest text-ink dark:text-white hover:text-heritage-yellow dark:hover:text-heritage-yellow transition-colors uppercase cursor-pointer"
                      >
                        <span>EXPLORE DESTINATION RATES</span>
                        <ArrowRight className="w-4 h-4 text-heritage-yellow" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* 6. Why Couples Choose Us (Premium Bento Grid) */}
            <section className="relative bg-ivory dark:bg-ink py-20 sm:py-28 transition-colors duration-500">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="max-w-2xl text-left space-y-4 mb-16">
                  <span className="font-mono text-[9px] tracking-widest text-heritage-yellow font-bold uppercase block">
                    THE HEIGHT OF SECTOR EXPERIENCE
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-light text-ink dark:text-white leading-tight">
                    Why Celebrated Families <br />
                    <span className="italic text-heritage-yellow font-normal">Entrust Their Legacy to 7 Lenz</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                  
                  {/* Item 1 */}
                  <div className="p-8 bg-white dark:bg-[#181818] border border-border-warm/30 dark:border-white/5 rounded-sm shadow-md space-y-4">
                    <div className="p-3 bg-heritage-yellow/10 rounded-full w-fit">
                      <Camera className="w-5 h-5 text-heritage-yellow" />
                    </div>
                    <h3 className="font-interface text-xs font-bold text-ink dark:text-white tracking-widest uppercase">Creative Candor</h3>
                    <p className="font-sans text-xs text-ink-text/60 dark:text-warm-text/50 font-light leading-relaxed">
                      We focus entirely on the unscripted, natural dynamics. We watch from the borders to capture raw emotion—never forcing uncomfortable plastic poses.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="p-8 bg-white dark:bg-[#181818] border border-border-warm/30 dark:border-white/5 rounded-sm shadow-md space-y-4">
                    <div className="p-3 bg-heritage-yellow/10 rounded-full w-fit">
                      <Film className="w-5 h-5 text-heritage-yellow" />
                    </div>
                    <h3 className="font-interface text-xs font-bold text-ink dark:text-white tracking-widest uppercase">Master Filmic Grade</h3>
                    <p className="font-sans text-xs text-ink-text/60 dark:text-warm-text/50 font-light leading-relaxed">
                      Every shot is individually processed and color-graded by dedicated professional film editors to protect perfect, natural, warm skin tones.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="p-8 bg-white dark:bg-[#181818] border border-border-warm/30 dark:border-white/5 rounded-sm shadow-md space-y-4">
                    <div className="p-3 bg-heritage-yellow/10 rounded-full w-fit">
                      <Award className="w-5 h-5 text-heritage-yellow" />
                    </div>
                    <h3 className="font-interface text-xs font-bold text-ink dark:text-white tracking-widest uppercase">Calm Reassuring Presense</h3>
                    <p className="font-sans text-xs text-ink-text/60 dark:text-warm-text/50 font-light leading-relaxed">
                      8+ years of expertise has trained our team to provide a serene, reassuring presence that allows families to rest perfectly at ease.
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div className="p-8 bg-white dark:bg-[#181818] border border-border-warm/30 dark:border-white/5 rounded-sm shadow-md space-y-4">
                    <div className="p-3 bg-heritage-yellow/10 rounded-full w-fit">
                      <Compass className="w-5 h-5 text-heritage-yellow" />
                    </div>
                    <h3 className="font-interface text-xs font-bold text-ink dark:text-white tracking-widest uppercase">Premium Gear Arsenal</h3>
                    <p className="font-sans text-xs text-ink-text/60 dark:text-warm-text/50 font-light leading-relaxed">
                      Equipped with high-end dual-card slot RED and Arri cinema camera bodies, anamorphic lenses, DJI Pro drones, and high-fidelity sound recorders.
                    </p>
                  </div>

                  {/* Item 5 */}
                  <div className="p-8 bg-white dark:bg-[#181818] border border-border-warm/30 dark:border-white/5 rounded-sm shadow-md space-y-4">
                    <div className="p-3 bg-heritage-yellow/10 rounded-full w-fit">
                      <Clock className="w-5 h-5 text-heritage-yellow" />
                    </div>
                    <h3 className="font-interface text-xs font-bold text-ink dark:text-white tracking-widest uppercase">Prompt Delivery</h3>
                    <p className="font-sans text-xs text-ink-text/60 dark:text-warm-text/50 font-light leading-relaxed">
                      We deliver curated, signature teasers within 48 to 72 hours, and secure complete, fully-graded digital galleries within 25 to 30 days.
                    </p>
                  </div>

                  {/* Item 6 */}
                  <div className="p-8 bg-white dark:bg-[#181818] border border-border-warm/30 dark:border-white/5 rounded-sm shadow-md space-y-4">
                    <div className="p-3 bg-heritage-yellow/10 rounded-full w-fit">
                      <Sparkles className="w-5 h-5 text-heritage-yellow" />
                    </div>
                    <h3 className="font-interface text-xs font-bold text-ink dark:text-white tracking-widest uppercase">Archival Heirlooms</h3>
                    <p className="font-sans text-xs text-ink-text/60 dark:text-warm-text/50 font-light leading-relaxed">
                      Custom-designed, hand-bound layflat albums in premium leather, thick museum linen, and high-definition acrylic shells to protect your family legacy forever.
                    </p>
                  </div>

                </div>

              </div>
            </section>

          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="animate-fade-in">
            <SelectedStories onInquireAboutStory={handleInquireAboutStory} />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="animate-fade-in">
            <ServicesSection onSelectPackage={handleSelectPackage} />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="animate-fade-in">
            <AboutSection />
          </div>
        )}

        {activeTab === 'journal' && (
          <div className="animate-fade-in">
            <JournalSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-fade-in">
            <FAQContactSection 
              prefilledPackage={prefilledPackage} 
              prefilledPrice={prefilledPrice} 
              clearPrefills={clearPrefills}
              setActiveTab={setActiveTab}
            />
          </div>
        )}

        {activeTab === 'admin' && (
          <div className="animate-fade-in">
            <AdminPortal />
          </div>
        )}

      </main>

      {/* Global Cinematic Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Immersive Videography Playback Popup Dialog */}
      <AnimatePresence>
        {isVideoPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoPopupOpen(false)}
            className="fixed inset-0 z-[100] bg-[#090909]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <div 
              className="relative max-w-4xl w-full bg-black border border-white/10 rounded-sm overflow-hidden aspect-video shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoPopupOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-heritage-yellow text-white cursor-pointer z-50"
              >
                &times;
              </button>

              {/* High-quality embed simulation with beautiful aesthetic video/sound layers */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Sandra & George Luxury Cinematic Highlight Trailer at Kovalam, Kerala"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
