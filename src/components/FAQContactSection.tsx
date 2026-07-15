/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Calendar, Users, HelpCircle, CheckCircle, ArrowRight, MessageSquare, Plus, Minus } from 'lucide-react';
import { faqItems } from '../data';
import { Inquiry } from '../types';

interface FAQContactSectionProps {
  prefilledPackage: string;
  prefilledPrice: string;
  clearPrefills: () => void;
  setActiveTab: (tab: string) => void;
}

export default function FAQContactSection({ prefilledPackage, prefilledPrice, clearPrefills, setActiveTab }: FAQContactSectionProps) {
  // Accordion active state
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1');

  // Booking Form State
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [eventType, setEventType] = useState('Wedding Photography & Film');
  const [location, setLocation] = useState('Kumarakom, Kerala');
  const [guestCount, setGuestCount] = useState<number>(200);
  const [budgetRange, setBudgetRange] = useState('₹2,00,000 - ₹3,50,000');
  const [message, setMessage] = useState('');

  // Submit status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedInquiryId, setSubmittedInquiryId] = useState('');

  // Handle prefill updates
  useEffect(() => {
    if (prefilledPackage && prefilledPrice) {
      setMessage(`Hi 7 Lenz team, we are interested in configuring a custom consultation based on the website estimate: ${prefilledPackage}. Calculated pricing estimate: ${prefilledPrice}.`);
      setBudgetRange(prefilledPrice);
    }
  }, [prefilledPackage, prefilledPrice]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName || !email || !phone || !date) {
      return;
    }

    const newInquiry: Inquiry = {
      id: `inq-${Date.now()}`,
      clientName,
      email,
      phone,
      date,
      eventType,
      location,
      guestCount,
      budgetRange,
      message,
      status: 'new',
      createdAt: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      selectedPackage: prefilledPackage || undefined,
      calculatedPrice: prefilledPrice || undefined
    };

    // Store in LocalStorage database
    const existingInquiriesStr = localStorage.getItem('lenzInquiries');
    const existingInquiries: Inquiry[] = existingInquiriesStr ? JSON.parse(existingInquiriesStr) : [];
    existingInquiries.unshift(newInquiry);
    localStorage.setItem('lenzInquiries', JSON.stringify(existingInquiries));

    setSubmittedInquiryId(newInquiry.id);
    setIsSubmitted(true);
    clearPrefills();

    // Reset Form fields
    setClientName('');
    setEmail('');
    setPhone('');
    setDate('');
    setMessage('');
  };

  return (
    <section className="relative bg-ivory dark:bg-ink py-20 sm:py-28 transition-colors duration-500 overflow-hidden">
      
      {/* Visual Accent Overlay */}
      <div className="absolute top-0 bottom-0 right-0 w-1/3 bg-border-warm/10 dark:bg-charcoal-surf/10 hidden lg:block border-l border-border-warm/20 dark:border-white/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1 (Left): Form & Editorial Subtitles */}
          <div className="lg:col-span-7 text-left space-y-10">
            
            <div className="space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-heritage-yellow font-bold uppercase block">
                CREATIVE VENTURE RESERVATION
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-ink dark:text-white leading-tight">
                Secure Your Date with <br />
                <span className="italic text-heritage-yellow font-normal">7 Lenz Artisanal Council</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-ink-text/60 dark:text-warm-text/50 font-light leading-relaxed max-w-xl">
                We accept only a highly restricted catalog of celebrations each season to maintain absolute visual taste and meticulous custom grading. Submit your event details to receive availability.
              </p>
            </div>

            <div className="hairline" />

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  
                  {/* Prefill Indicator Notice */}
                  {prefilledPackage && prefilledPrice && (
                    <div className="bg-heritage-yellow/10 border border-heritage-yellow/30 p-3.5 rounded flex items-center justify-between text-xs font-sans text-heritage-yellow font-semibold animate-pulse">
                      <span>Prefilled with estimate: {prefilledPrice} ({prefilledPackage.slice(0, 30)}...)</span>
                      <button 
                        type="button"
                        onClick={clearPrefills}
                        className="underline text-[10px] tracking-wider cursor-pointer"
                      >
                        RESET PRE-FILLS
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Client name */}
                    <div className="space-y-2 text-left">
                      <label className="font-mono text-[9px] text-muted-grey tracking-widest font-bold uppercase block">
                        PARTNER A / CLIENT FULL NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="ANJALI SHARMA"
                        className="w-full p-3.5 bg-white dark:bg-[#151515] border border-border-warm/60 dark:border-white/5 outline-none focus:border-heritage-yellow text-ink dark:text-white font-sans text-xs uppercase tracking-widest transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2 text-left">
                      <label className="font-mono text-[9px] text-muted-grey tracking-widest font-bold uppercase block">
                        EMAIL CORRESPONDENCE
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ANJALI@GMAIL.COM"
                        className="w-full p-3.5 bg-white dark:bg-[#151515] border border-border-warm/60 dark:border-white/5 outline-none focus:border-heritage-yellow text-ink dark:text-white font-sans text-xs uppercase tracking-widest transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2 text-left">
                      <label className="font-mono text-[9px] text-muted-grey tracking-widest font-bold uppercase block">
                        PHONE / WHATSAPP NUMBER
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 9447 700 700"
                        className="w-full p-3.5 bg-white dark:bg-[#151515] border border-border-warm/60 dark:border-white/5 outline-none focus:border-heritage-yellow text-ink dark:text-white font-sans text-xs tracking-widest transition-colors"
                      />
                    </div>

                    {/* Date */}
                    <div className="space-y-2 text-left">
                      <label className="font-mono text-[9px] text-muted-grey tracking-widest font-bold uppercase block">
                        CELEBRATION WEDDING DATE
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-3.5 bg-white dark:bg-[#151515] border border-border-warm/60 dark:border-white/5 outline-none focus:border-heritage-yellow text-ink dark:text-white font-sans text-xs tracking-widest transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Event Type dropdown */}
                    <div className="space-y-2 text-left">
                      <label className="font-mono text-[9px] text-muted-grey tracking-widest font-bold uppercase block">
                        CORE SERVICE CATALOG REQUIRED
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full p-3.5 bg-white dark:bg-[#151515] border border-border-warm/60 dark:border-white/5 outline-none focus:border-heritage-yellow text-ink dark:text-white font-sans text-xs uppercase tracking-widest cursor-pointer"
                      >
                        <option value="Wedding Photography & Film">Wedding Photography & Film</option>
                        <option value="Wedding Cinema Only">Wedding Cinema Only</option>
                        <option value="Pre-Wedding Shoot & Save the Date">Pre-Wedding & Save the Date</option>
                        <option value="Baptism Ceremony Coverage">Baptism & Sacred Ceremonies</option>
                        <option value="Newborn, Family & Portraiture">Newborn, Family & Portraiture</option>
                        <option value="Special Birthday / Corporate Gala">Special Birthday & Corporate Gala</option>
                      </select>
                    </div>

                    {/* Venue Location input */}
                    <div className="space-y-2 text-left">
                      <label className="font-mono text-[9px] text-muted-grey tracking-widest font-bold uppercase block">
                        EXPECTED DESTINATION / VENUE LOCATION
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Kumarakom Lake Resort, Kerala"
                        className="w-full p-3.5 bg-white dark:bg-[#151515] border border-border-warm/60 dark:border-white/5 outline-none focus:border-heritage-yellow text-ink dark:text-white font-sans text-xs uppercase tracking-widest transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Estimated Guest count */}
                    <div className="space-y-2 text-left">
                      <label className="font-mono text-[9px] text-muted-grey tracking-widest font-bold uppercase block">
                        ESTIMATED GUEST DENSITY
                      </label>
                      <div className="relative flex items-center">
                        <Users className="w-4 h-4 absolute left-3.5 text-heritage-yellow" />
                        <input
                          type="number"
                          value={guestCount}
                          onChange={(e) => setGuestCount(Math.max(1, parseInt(e.target.value) || 0))}
                          className="w-full pl-10 pr-4 py-3.5 bg-white dark:bg-[#151515] border border-border-warm/60 dark:border-white/5 outline-none focus:border-heritage-yellow text-ink dark:text-white font-sans text-xs tracking-widest"
                        />
                      </div>
                    </div>

                    {/* Target budget range */}
                    <div className="space-y-2 text-left">
                      <label className="font-mono text-[9px] text-muted-grey tracking-widest font-bold uppercase block">
                        EXPECTED INVESTMENT RANGE
                      </label>
                      <input
                        type="text"
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        placeholder="e.g. ₹2,00,000 - ₹3,50,000"
                        className="w-full p-3.5 bg-white dark:bg-[#151515] border border-border-warm/60 dark:border-white/5 outline-none focus:border-heritage-yellow text-ink dark:text-white font-sans text-xs uppercase tracking-widest transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message details */}
                  <div className="space-y-2 text-left">
                    <label className="font-mono text-[9px] text-muted-grey tracking-widest font-bold uppercase block">
                      CUSTOM CELEBRATION DETAILS, REQUESTS & OUTLINES
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="TELL US ABOUT YOUR HEIRLOOM PLANS, CUSTOM SCHEDULES, SPECIAL CULTURAL TRADITIONS OR ENTIRE CONCEPTS..."
                      className="w-full p-3.5 bg-white dark:bg-[#151515] border border-border-warm/60 dark:border-white/5 outline-none focus:border-heritage-yellow text-ink dark:text-white font-sans text-xs transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-ink dark:bg-white text-white dark:text-ink hover:bg-heritage-yellow dark:hover:bg-heritage-yellow hover:text-white dark:hover:text-white font-interface text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg"
                  >
                    SUBMIT RESERVATION REQUEST
                  </button>

                </motion.form>
              ) : (
                <motion.div 
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white dark:bg-charcoal-surf border border-heritage-yellow p-8 sm:p-12 text-center rounded-sm shadow-2xl space-y-6"
                >
                  <div className="flex justify-center">
                    <CheckCircle className="w-16 h-16 text-heritage-yellow" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-heritage-yellow tracking-widest font-bold uppercase">RESERVATION SUBMITTED SUCCESSFULLY</span>
                    <h3 className="font-display text-2xl sm:text-3xl font-light text-ink dark:text-white leading-tight">
                      Thank You, Our Art Directors <br />Will Contact You Shortly
                    </h3>
                  </div>

                  <div className="hairline max-w-xs mx-auto" />

                  <p className="font-sans text-xs text-ink-text/60 dark:text-warm-text/60 leading-relaxed max-w-md mx-auto">
                    Your inquiry has been cataloged inside our local system database with ID: <strong className="text-heritage-yellow font-mono">{submittedInquiryId}</strong>. We typically complete our availability checks and customized outline grids within 2 to 4 hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setSubmittedInquiryId('');
                      }}
                      className="px-6 py-3 border border-border-warm hover:border-heritage-yellow font-interface text-xs font-bold tracking-widest text-muted-grey hover:text-heritage-yellow uppercase transition-all cursor-pointer"
                    >
                      SUBMIT NEW INQUIRY
                    </button>

                    <button
                      onClick={() => setActiveTab('admin')}
                      className="px-6 py-3 bg-heritage-yellow text-white hover:bg-burnt-amber font-interface text-xs font-bold tracking-widest uppercase transition-all cursor-pointer shadow"
                    >
                      VIEW INQUIRIES PORTAL
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Column 2 (Right): FAQ Accordion & Quick Contacts */}
          <div className="lg:col-span-5 text-left space-y-12 lg:pl-4">
            
            {/* Quick Contacts Block */}
            <div className="space-y-6 bg-white/4 p-6 sm:p-8 rounded border border-border-warm/35 dark:border-white/5">
              <h4 className="font-interface text-xs font-bold tracking-widest text-ink dark:text-white uppercase">
                DIRECT CHANNELS
              </h4>
              <ul className="space-y-4 font-sans text-xs">
                <li className="flex items-center space-x-3 text-ink-text/80 dark:text-warm-text/80">
                  <Phone className="w-4 h-4 text-heritage-yellow flex-shrink-0" />
                  <span>+91 9447 700 700 &bull; +91 9447 800 800</span>
                </li>
                <li className="flex items-center space-x-3 text-ink-text/80 dark:text-warm-text/80">
                  <Mail className="w-4 h-4 text-heritage-yellow flex-shrink-0" />
                  <span>inquire@7lenz.com</span>
                </li>
                <li className="flex items-start space-x-3 text-ink-text/80 dark:text-warm-text/80">
                  <MapPin className="w-4 h-4 text-heritage-yellow flex-shrink-0 mt-0.5" />
                  <span>Ring Road, Pathanamthitta, Kerala 689645</span>
                </li>
              </ul>
              
              <div className="hairline" />

              <a 
                href="https://wa.me/919447700700"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 bg-green-600 hover:bg-green-700 text-white font-interface text-[10px] font-bold tracking-widest uppercase transition-colors rounded-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAT ON WHATSAPP NOW</span>
              </a>
            </div>

            {/* Structured Accordion */}
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-heritage-yellow tracking-widest font-bold uppercase block">
                  CELEBRATION GUIDANCE
                </span>
                <h4 className="font-interface text-xs font-bold tracking-widest text-ink dark:text-white uppercase">
                  FREQUENTLY ASKED INQUIRIES
                </h4>
              </div>

              <div className="space-y-4">
                {faqItems.map((faq) => {
                  const isOpen = activeFaqId === faq.id;
                  return (
                    <div 
                      key={faq.id}
                      className="border-b border-border-warm/40 dark:border-white/5 pb-4"
                    >
                      <button
                        onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                        className="w-full flex items-center justify-between text-left font-display text-base font-light text-ink dark:text-white hover:text-heritage-yellow dark:hover:text-heritage-yellow cursor-pointer transition-colors py-2"
                      >
                        <span className="pr-4">{faq.question}</span>
                        {isOpen ? <Minus className="w-4 h-4 text-heritage-yellow flex-shrink-0" /> : <Plus className="w-4 h-4 text-heritage-yellow flex-shrink-0" />}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="font-sans text-xs text-ink-text/60 dark:text-warm-text/50 font-light leading-relaxed pt-2">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
