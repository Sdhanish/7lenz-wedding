/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, Key, Users, MapPin, Calendar, Clock, DollarSign, RefreshCw, 
  Trash2, CheckCircle2, MessageSquare, Search, Filter, Database, PlusCircle 
} from 'lucide-react';
import { Inquiry } from '../types';

export default function AdminPortal() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // No hard credentials barrier so it is immediately testable!
  const [replyMessage, setReplyMessage] = useState<string>('');
  const [activeReplyInquiryId, setActiveReplyInquiryId] = useState<string | null>(null);

  // Load inquiries from localStorage
  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = () => {
    const existing = localStorage.getItem('lenzInquiries');
    if (existing) {
      setInquiries(JSON.parse(existing));
    } else {
      // Seed initial high-value mock data so the panel looks breathtaking on first look!
      const mockInquiries: Inquiry[] = [
        {
          id: 'inq-seed-1',
          clientName: 'Sandra & George',
          email: 'sandra.g@gmail.com',
          phone: '+91 9845 001 002',
          date: '2026-11-20',
          eventType: 'Wedding Photography & Film',
          location: 'Raviz Kovalam, Thiruvananthapuram',
          guestCount: 450,
          budgetRange: '₹3,50,000',
          message: 'We are planning a grand 2-day ocean-view wedding. We love your editorial candid portraits and would love to have a same-day edit trailer prepared for our reception.',
          status: 'booked',
          createdAt: 'Jul 14, 2026, 04:30 PM'
        },
        {
          id: 'inq-seed-2',
          clientName: 'Deepika & Vignesh',
          email: 'vignesh.deepika@yahoo.com',
          phone: '+91 9445 123 456',
          date: '2026-12-15',
          eventType: 'Wedding Photography & Film',
          location: 'Grand Hyatt Bolgatty, Kochi',
          guestCount: 800,
          budgetRange: '₹4,80,000',
          message: 'Traditional Hindu ceremony combined with a grand western reception. We require full multi-camera drone coverage and two distinct leather-bound albums.',
          status: 'reviewed',
          createdAt: 'Jul 15, 2026, 09:12 AM'
        },
        {
          id: 'inq-seed-3',
          clientName: 'Dr. Neha Mathews',
          email: 'neha.mathews@health.in',
          phone: '+91 9820 555 777',
          date: '2027-02-12',
          eventType: 'Pre-Wedding Shoot & Save the Date',
          location: 'Kumarakom Lake Resort, Kerala',
          guestCount: 150,
          budgetRange: '₹2,50,000',
          message: 'Looking for a relaxed, sunset lake-bound photoshoot and an evocative cinematic Save-The-Date trailer. Pre-filled website estimate used.',
          status: 'new',
          createdAt: 'Jul 15, 2026, 11:45 AM'
        }
      ];
      localStorage.setItem('lenzInquiries', JSON.stringify(mockInquiries));
      setInquiries(mockInquiries);
    }
  };

  const seedNewMockData = () => {
    localStorage.removeItem('lenzInquiries');
    loadInquiries();
  };

  const updateStatus = (id: string, newStatus: 'new' | 'reviewed' | 'contacted' | 'booked') => {
    const updated = inquiries.map(inq => {
      if (inq.id === id) {
        return { ...inq, status: newStatus };
      }
      return inq;
    });
    localStorage.setItem('lenzInquiries', JSON.stringify(updated));
    setInquiries(updated);
  };

  const deleteInquiry = (id: string) => {
    if (window.confirm('Are you sure you want to remove this inquiry from the active ledger?')) {
      const updated = inquiries.filter(inq => inq.id !== id);
      localStorage.setItem('lenzInquiries', JSON.stringify(updated));
      setInquiries(updated);
    }
  };

  const handleSendMockReply = (id: string) => {
    if (replyMessage.trim()) {
      alert(`Reply Simulated Successfully!\n\nTo: ${inquiries.find(i => i.id === id)?.email}\nMessage: "${replyMessage}"`);
      updateStatus(id, 'contacted');
      setReplyMessage('');
      setActiveReplyInquiryId(null);
    }
  };

  // Calculations for stats
  const totalInquiries = inquiries.length;
  const newCount = inquiries.filter(i => i.status === 'new').length;
  const reviewedCount = inquiries.filter(i => i.status === 'reviewed').length;
  const contactedCount = inquiries.filter(i => i.status === 'contacted').length;
  const bookedCount = inquiries.filter(i => i.status === 'booked').length;

  // Potential Revenue estimator based on budgets
  const calculatePotentialRevenue = () => {
    return inquiries.reduce((sum, inq) => {
      // Simple parse of budget numbers
      const numeric = parseInt(inq.budgetRange.replace(/[^0-9]/g, '')) || 0;
      return sum + numeric;
    }, 0);
  };

  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = inq.clientName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          inq.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          inq.eventType.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || inq.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <section className="relative bg-ivory dark:bg-ink min-h-[85vh] py-16 sm:py-24 transition-colors duration-500 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Portal Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border-warm/40 dark:border-white/10 pb-8 mb-12">
          <div className="space-y-2 mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-heritage-yellow rounded-full animate-ping" />
              <span className="font-mono text-[9px] tracking-widest text-heritage-yellow font-bold uppercase block">
                7 LENZ STUDIO OFFICE PORTAL
              </span>
            </div>
            
            <h2 className="font-display text-3xl font-light text-ink dark:text-white leading-tight">
              Inquiries Ledger &bull; <span className="italic text-heritage-yellow font-normal">Customer Hub</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={seedNewMockData}
              className="px-4 py-2 bg-border-warm/25 hover:bg-border-warm/50 text-ink dark:text-white border border-border-warm/40 dark:border-white/5 font-mono text-[10px] font-bold tracking-widest uppercase cursor-pointer flex items-center space-x-2"
              title="Reset Database to original seeded high-value mock items"
            >
              <RefreshCw className="w-3.5 h-3.5 text-heritage-yellow" />
              <span>RESEED DATABASE</span>
            </button>
            <div className="bg-heritage-yellow/10 border border-heritage-yellow/20 px-3 py-1.5 rounded-full font-mono text-[9px] text-heritage-yellow tracking-wider font-bold">
              SYSTEM LIVE &bull; LOCAL PERSISTENT SECURE
            </div>
          </div>
        </div>

        {/* Studio Statistics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          
          <div className="bg-white dark:bg-charcoal-surf border border-border-warm/30 dark:border-white/5 p-6 rounded-sm shadow text-left relative overflow-hidden">
            <span className="font-mono text-[9px] text-muted-grey tracking-widest uppercase">POTENTIAL CONTRACT LEDGER</span>
            <div className="font-display text-2xl sm:text-3xl font-semibold text-heritage-yellow mt-1">
              ₹{calculatePotentialRevenue().toLocaleString()}
            </div>
            <span className="font-mono text-[8px] text-muted-grey block mt-1">Aggregated Pipeline Budgets</span>
          </div>

          <div className="bg-white dark:bg-charcoal-surf border border-border-warm/30 dark:border-white/5 p-6 rounded-sm shadow text-left relative overflow-hidden">
            <span className="font-mono text-[9px] text-muted-grey tracking-widest uppercase">ACTIVE INQUIRIES</span>
            <div className="font-display text-2xl sm:text-3xl font-semibold text-ink dark:text-white mt-1">
              {totalInquiries}
            </div>
            <span className="font-mono text-[8px] text-heritage-yellow block mt-1">{newCount} Untouched Inquiries</span>
          </div>

          <div className="bg-white dark:bg-charcoal-surf border border-border-warm/30 dark:border-white/5 p-6 rounded-sm shadow text-left relative overflow-hidden">
            <span className="font-mono text-[9px] text-muted-grey tracking-widest uppercase">REVIEWED TARIFFS</span>
            <div className="font-display text-2xl sm:text-3xl font-semibold text-ink dark:text-white mt-1">
              {reviewedCount}
            </div>
            <span className="font-mono text-[8px] text-muted-grey block mt-1">Awaiting Consultation</span>
          </div>

          <div className="bg-white dark:bg-charcoal-surf border border-border-warm/30 dark:border-white/5 p-6 rounded-sm shadow text-left relative overflow-hidden">
            <span className="font-mono text-[9px] text-muted-grey tracking-widest uppercase">CONTACTED CLIENTS</span>
            <div className="font-display text-2xl sm:text-3xl font-semibold text-ink dark:text-white mt-1">
              {contactedCount}
            </div>
            <span className="font-mono text-[8px] text-muted-grey block mt-1">Discussion Ongoing</span>
          </div>

          <div className="bg-white dark:bg-charcoal-surf border border-border-warm/30 dark:border-white/5 p-6 rounded-sm shadow text-left relative overflow-hidden">
            <span className="font-mono text-[9px] text-muted-grey tracking-widest uppercase">BOOKED EVENTS</span>
            <div className="font-display text-2xl sm:text-3xl font-semibold text-green-600 mt-1">
              {bookedCount}
            </div>
            <span className="font-mono text-[8px] text-green-600/70 block mt-1">Perfectly Secured</span>
          </div>

        </div>

        {/* Database Filtering & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 bg-white/4 p-4 border border-border-warm/30 dark:border-white/5 rounded-sm">
          
          {/* Search Input */}
          <div className="relative flex items-center flex-grow max-w-lg">
            <Search className="w-4 h-4 text-heritage-yellow absolute left-3" />
            <input 
              type="text" 
              placeholder="SEARCH BY CLIENT, LOCATION OR CATALOG TYPE..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-[#181818] border border-border-warm/60 dark:border-white/5 font-sans text-xs outline-none focus:border-heritage-yellow text-ink dark:text-white tracking-wider"
            />
          </div>

          {/* Filter selection buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'ALL LEDGERS' },
              { id: 'new', label: 'NEW' },
              { id: 'reviewed', label: 'REVIEWED' },
              { id: 'contacted', label: 'CONTACTED' },
              { id: 'booked', label: 'SECURED BOOKINGS' }
            ].map((filt) => (
              <button
                key={filt.id}
                onClick={() => setStatusFilter(filt.id)}
                className={`px-3.5 py-1.5 font-interface text-[9px] font-bold tracking-widest uppercase transition-all duration-300 rounded cursor-pointer
                  ${statusFilter === filt.id 
                    ? 'bg-heritage-yellow text-white' 
                    : 'bg-border-warm/20 text-ink-text/70 dark:text-warm-text/70 hover:bg-border-warm/35'
                  }`}
              >
                {filt.label}
              </button>
            ))}
          </div>

        </div>

        {/* Records list rendering */}
        <div className="space-y-6">
          {filteredInquiries.length > 0 ? (
            filteredInquiries.map((inq) => (
              <div 
                key={inq.id}
                className="bg-white dark:bg-charcoal-surf border border-border-warm/30 dark:border-white/5 rounded-sm p-6 sm:p-8 hover:shadow-lg transition-all relative"
              >
                
                {/* Float Indicator Badge */}
                <div className="absolute top-6 right-6 flex items-center space-x-2">
                  <span className="font-mono text-[9px] text-muted-grey mr-2 hidden sm:block">STATUS:</span>
                  
                  <select
                    value={inq.status}
                    onChange={(e) => updateStatus(inq.id, e.target.value as any)}
                    className={`font-mono text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded cursor-pointer outline-none border
                      ${inq.status === 'new' ? 'bg-blue-100 text-blue-800 border-blue-200' : ''}
                      ${inq.status === 'reviewed' ? 'bg-amber-100 text-amber-800 border-amber-200' : ''}
                      ${inq.status === 'contacted' ? 'bg-purple-100 text-purple-800 border-purple-200' : ''}
                      ${inq.status === 'booked' ? 'bg-green-100 text-green-800 border-green-200' : ''}
                    `}
                  >
                    <option value="new">NEW</option>
                    <option value="reviewed">REVIEWED</option>
                    <option value="contacted">CONTACTED</option>
                    <option value="booked">BOOKED</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
                  
                  {/* Column A (Left): Client profile metadata */}
                  <div className="lg:col-span-4 space-y-4">
                    <div>
                      <span className="font-mono text-[8px] text-muted-grey tracking-wider block">SUBMITTED ON {inq.createdAt}</span>
                      <h3 className="font-display text-2xl font-light text-ink dark:text-white mt-1">{inq.clientName}</h3>
                      <span className="font-mono text-[9px] text-heritage-yellow tracking-wider uppercase font-semibold">{inq.eventType}</span>
                    </div>

                    <div className="space-y-2 font-sans text-xs font-light text-ink-text/80 dark:text-warm-text/80">
                      <div className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-2 text-heritage-yellow flex-shrink-0" />
                        <span><strong>VENUE:</strong> {inq.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-2 text-heritage-yellow flex-shrink-0" />
                        <span><strong>DATE:</strong> {inq.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3.5 h-3.5 mr-2 text-heritage-yellow flex-shrink-0" />
                        <span><strong>GUESTS:</strong> {inq.guestCount} Headcount</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-heritage-yellow mr-2 font-mono text-[10px]">TARIFF BUDGET:</span>
                        <strong className="text-heritage-yellow font-semibold">{inq.budgetRange}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Column B (Middle): Client Message & Custom Needs */}
                  <div className="lg:col-span-6 space-y-4 border-l border-border-warm/30 dark:border-white/5 pl-0 lg:pl-8">
                    <div>
                      <span className="font-mono text-[8px] text-muted-grey tracking-wider block">MESSAGE TRANSCRIPT</span>
                      <p className="font-sans text-xs text-ink-text/75 dark:text-warm-text/70 leading-relaxed font-light mt-1">
                        &ldquo;{inq.message || 'No additional custom requirements specified.'}&rdquo;
                      </p>
                    </div>

                    <div className="space-y-1 font-sans text-xs text-muted-grey">
                      <div><strong>EMAIL:</strong> {inq.email}</div>
                      <div><strong>PHONE:</strong> {inq.phone}</div>
                    </div>
                  </div>

                  {/* Column C (Right): Action Panel & Reply Simulation */}
                  <div className="lg:col-span-2 flex flex-col justify-end space-y-3 pt-6 lg:pt-0">
                    
                    <button
                      onClick={() => {
                        setActiveReplyInquiryId(activeReplyInquiryId === inq.id ? null : inq.id);
                        setReplyMessage(`Dear ${inq.clientName},\n\nThank you for reaching out to 7 Lenz Wedd Planner. We have reviewed your details for ${inq.date} at ${inq.location}. We are happy to confirm our team availability!`);
                      }}
                      className="w-full flex items-center justify-center space-x-1.5 py-2.5 bg-border-warm/25 hover:bg-heritage-yellow hover:text-white transition-all text-ink dark:text-white border border-border-warm/30 dark:border-white/5 font-interface text-[9px] font-bold tracking-widest uppercase cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>SIMULATE REPLY</span>
                    </button>

                    <button
                      onClick={() => deleteInquiry(inq.id)}
                      className="w-full flex items-center justify-center space-x-1.5 py-2.5 bg-red-100 hover:bg-red-600 hover:text-white text-red-800 transition-all border border-red-200 font-interface text-[9px] font-bold tracking-widest uppercase cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>REMOVE REQ</span>
                    </button>
                  </div>

                </div>

                {/* Simulated Reply Area expandable inline */}
                <AnimatePresence>
                  {activeReplyInquiryId === inq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-6 pt-6 border-t border-border-warm/30 dark:border-white/5 space-y-3"
                    >
                      <span className="font-mono text-[8px] text-heritage-yellow tracking-wider uppercase block">SIMULATE DIRECT CLIENT CORRESPONDENCE OVER GIVEN EMAIL</span>
                      <textarea
                        rows={3}
                        value={replyMessage}
                        onChange={(e) => setReplyMessage(e.target.value)}
                        className="w-full p-3 bg-white dark:bg-[#151515] border border-border-warm/60 dark:border-white/10 font-sans text-xs outline-none text-ink dark:text-white"
                      />
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => setActiveReplyInquiryId(null)}
                          className="px-4 py-2 bg-transparent text-muted-grey font-interface text-[9px] font-bold tracking-widest uppercase cursor-pointer hover:text-ink dark:hover:text-white"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleSendMockReply(inq.id)}
                          className="px-4 py-2 bg-heritage-yellow text-white font-interface text-[9px] font-bold tracking-widest uppercase cursor-pointer hover:bg-burnt-amber shadow"
                        >
                          Simulate Send Email
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))
          ) : (
            <div className="bg-white dark:bg-charcoal-surf border border-dashed border-border-warm/40 dark:border-white/5 text-center p-16 rounded-sm space-y-4">
              <Database className="w-12 h-12 text-heritage-yellow/40 mx-auto" />
              <p className="font-sans text-xs text-muted-grey">No matching inquiries found in active ledger database.</p>
              <button
                onClick={seedNewMockData}
                className="px-4 py-2 bg-heritage-yellow text-white font-interface text-[10px] font-bold tracking-widest uppercase rounded cursor-pointer"
              >
                RE-SEED INITIAL PORTFOLIO DATA
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
