/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, X, Heart, MessageSquare, Send } from 'lucide-react';
import { journalPosts } from '../data';

export default function JournalSection() {
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [localComments, setLocalComments] = useState<{ [key: string]: { name: string, text: string, date: string }[] }>({
    'post-1': [
      { name: 'Dr. Neha Mathews', text: 'Excellent guide! We are actually planning our sunset ceremony at Kumarakom Resort next February and your light mapping tips are exactly what our family needed.', date: 'July 1, 2026' }
    ]
  });

  const activePost = journalPosts.find(post => post.id === activeArticleId);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeArticleId && commentName.trim() && commentText.trim()) {
      const newComment = {
        name: commentName,
        text: commentText,
        date: 'Just Now'
      };
      setLocalComments({
        ...localComments,
        [activeArticleId]: [newComment, ...(localComments[activeArticleId] || [])]
      });
      setCommentName('');
      setCommentText('');
    }
  };

  return (
    <section className="relative bg-ivory dark:bg-ink py-20 sm:py-28 transition-colors duration-500 overflow-hidden text-left">
      
      {/* Background Soft radial decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-heritage-yellow/2 dark:bg-heritage-yellow/1 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-[9px] tracking-widest text-heritage-yellow font-bold uppercase block">
              7 LENZ EDITORIAL JOURNAL
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-ink dark:text-white leading-tight">
              Curated Chronicles of <br />
              <span className="italic text-heritage-yellow font-normal">Weddings, Venues & Vision</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="font-sans text-xs text-ink-text/50 dark:text-warm-text/40 font-light leading-relaxed max-w-sm ml-auto">
              A luxury registry of tips, professional gear guidelines, and regional Kerala venue blueprints written specifically for modern couples.
            </p>
          </div>
        </div>

        {/* Journal Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalPosts.map((post) => (
            <div 
              key={post.id}
              onClick={() => setActiveArticleId(post.id)}
              className="flex flex-col h-full bg-white dark:bg-charcoal-surf border border-border-warm/30 dark:border-white/5 rounded-sm overflow-hidden hover:border-heritage-yellow dark:hover:border-heritage-yellow hover:shadow-2xl cursor-pointer transition-all duration-300"
            >
              
              {/* Photo Frame */}
              <div className="h-56 overflow-hidden relative bg-black">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro Label Tag */}
                <div className="absolute top-4 left-4 bg-ink/70 px-2 py-1 backdrop-blur-sm">
                  <span className="font-mono text-[8px] text-white tracking-widest uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Meta details */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-[10px] font-mono text-muted-grey">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-heritage-yellow" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-heritage-yellow" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-light text-ink dark:text-white line-clamp-2 hover:text-heritage-yellow transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="font-sans text-xs text-ink-text/60 dark:text-warm-text/50 font-light line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-warm/30 dark:border-white/5 flex items-center justify-between text-ink dark:text-white font-interface text-[10px] font-bold tracking-widest uppercase">
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-4 h-4 text-heritage-yellow" />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Full Article Reader Dialog Overlay */}
        <AnimatePresence>
          {activeArticleId && activePost && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setActiveArticleId(null)}
            >
              <div 
                className="relative bg-white dark:bg-charcoal-surf border border-border-warm/40 dark:border-white/5 max-w-4xl w-full rounded-sm shadow-2xl overflow-hidden my-8"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Close Trigger Button */}
                <button
                  onClick={() => setActiveArticleId(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/50 hover:bg-heritage-yellow text-white hover:text-white transition-all cursor-pointer z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Banner Header Image */}
                <div className="h-64 sm:h-80 w-full relative overflow-hidden bg-black">
                  <img 
                    src={activePost.image} 
                    alt={activePost.title} 
                    className="w-full h-full object-cover opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent z-10" />
                  
                  {/* Article metadata floated inside banner */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                    <span className="font-mono text-[9px] text-heritage-yellow tracking-widest font-bold uppercase block mb-2">
                      {activePost.category}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight">
                      {activePost.title}
                    </h2>
                  </div>
                </div>

                {/* Article Contents panel */}
                <div className="p-6 sm:p-10 space-y-8 overflow-y-auto max-h-[50vh]">
                  
                  {/* Time info and divider */}
                  <div className="flex items-center space-x-6 text-xs font-mono text-muted-grey border-b border-border-warm/30 dark:border-white/5 pb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5 text-heritage-yellow" />
                      {activePost.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5 text-heritage-yellow" />
                      {activePost.readTime}
                    </span>
                    <span className="hidden sm:inline">&bull; WRITTEN BY 7 LENZ CREATIVE COUNCIL</span>
                  </div>

                  {/* HTML Content Paragraphs */}
                  <div className="space-y-6 text-ink-text/80 dark:text-warm-text/80 font-sans text-sm leading-relaxed font-light text-left">
                    {activePost.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Structured Local Comments & In-built Discussion section */}
                  <div className="border-t border-border-warm/30 dark:border-white/5 pt-8 space-y-6">
                    
                    <h4 className="font-interface text-xs font-bold tracking-widest text-ink dark:text-white uppercase flex items-center">
                      <MessageSquare className="w-4 h-4 text-heritage-yellow mr-2" />
                      <span>READER CONVERSATIONS ({ (localComments[activePost.id] || []).length })</span>
                    </h4>

                    {/* Submit Comment Form */}
                    <form onSubmit={handlePostComment} className="grid grid-cols-1 gap-4 bg-border-warm/15 dark:bg-white/3 p-4 rounded border border-border-warm/20 dark:border-white/5">
                      <span className="font-mono text-[8px] text-muted-grey uppercase block">Join the conversation</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input 
                          type="text" 
                          placeholder="YOUR NAME" 
                          required
                          value={commentName}
                          onChange={(e) => setCommentName(e.target.value)}
                          className="p-2.5 bg-white dark:bg-[#181818] border border-border-warm/50 dark:border-white/5 font-sans text-xs outline-none focus:border-heritage-yellow text-ink dark:text-white uppercase tracking-widest"
                        />
                        <button 
                          type="submit"
                          className="p-2.5 bg-heritage-yellow hover:bg-burnt-amber text-white font-interface text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>SUBMIT POST</span>
                        </button>
                      </div>
                      <textarea 
                        rows={2}
                        placeholder="ENTER COMMENT TEXT..."
                        required
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="p-2.5 bg-white dark:bg-[#181818] border border-border-warm/50 dark:border-white/5 font-sans text-xs outline-none focus:border-heritage-yellow text-ink dark:text-white"
                      />
                    </form>

                    {/* Comments Render List */}
                    <div className="space-y-4">
                      {((localComments[activePost.id]) || []).map((cmt, cIdx) => (
                        <div key={cIdx} className="bg-border-warm/5 p-4 rounded-sm border border-border-warm/10 text-xs space-y-1 text-left">
                          <div className="flex justify-between items-center text-[10px] font-mono text-muted-grey">
                            <span className="font-bold text-heritage-yellow uppercase">{cmt.name}</span>
                            <span>{cmt.date}</span>
                          </div>
                          <p className="font-sans text-ink-text/70 dark:text-warm-text/70 leading-relaxed font-light">
                            {cmt.text}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>

                {/* Footer panel inside modal */}
                <div className="p-4 bg-border-warm/10 dark:bg-[#141414] border-t border-border-warm/20 dark:border-white/5 text-center">
                  <span className="font-mono text-[8px] text-muted-grey tracking-widest uppercase">
                    7 LENZ WEDD PLANNER &bull; CINEMA JOURNAL
                  </span>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
