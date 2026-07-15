/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Calendar, Lock } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ activeTab, setActiveTab, isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'portfolio', label: 'WORKS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'BOOK NOW' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300 border-b border-border-warm/30 bg-ivory/80 dark:bg-ink/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Essence */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center cursor-pointer select-none"
          >
            <img 
              src="https://res.cloudinary.com/ddax67wik/image/upload/v1784124069/kling_20260710_IMAGE_Create_a_w_3809_0_nsqkcd.png" 
              alt="7 Lenz Logo" 
              className="h-9 sm:h-11 w-auto object-contain dark:brightness-0 dark:invert transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-interface text-xs font-semibold tracking-widest transition-all duration-300 relative py-2 cursor-pointer
                    ${isActive 
                      ? 'text-heritage-yellow' 
                      : 'text-ink-text/70 dark:text-warm-text/70 hover:text-heritage-yellow dark:hover:text-heritage-yellow'
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-heritage-yellow transition-transform duration-300" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions Block */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Quick access to Secret Studio Portal */}
            <button
              onClick={() => handleNavClick('admin')}
              title="Studio Portal (Inquiries Manager)"
              className={`p-2 rounded-full cursor-pointer transition-all duration-300 ${
                activeTab === 'admin' 
                  ? 'bg-heritage-yellow/15 text-heritage-yellow' 
                  : 'text-muted-grey hover:bg-border-warm/30 dark:hover:bg-charcoal-surf/50'
              }`}
            >
              <Lock className="w-4 h-4" />
            </button>

            {/* Dark & Light mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-muted-grey hover:bg-border-warm/30 dark:hover:bg-charcoal-surf/50 cursor-pointer transition-colors duration-300"
              aria-label="Toggle theme color"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-heritage-yellow" /> : <Moon className="w-4 h-4 text-ink" />}
            </button>

            {/* CTA Shortcut */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-ink dark:bg-white text-white dark:text-ink hover:bg-heritage-yellow dark:hover:bg-heritage-yellow hover:text-white dark:hover:text-white transition-all duration-300 font-interface text-xs font-bold tracking-widest uppercase cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>INQUIRE NOW</span>
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden text-ink dark:text-white hover:bg-border-warm/30 cursor-pointer transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border-warm/20 bg-ivory dark:bg-ink transition-colors duration-300 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-3 rounded-md font-interface text-sm font-semibold tracking-widest cursor-pointer transition-all
                  ${activeTab === item.id 
                    ? 'bg-heritage-yellow/10 text-heritage-yellow font-bold border-l-2 border-heritage-yellow' 
                    : 'text-ink-text/80 dark:text-warm-text/80 hover:bg-border-warm/10'
                  }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Quick Portal on Mobile too */}
            <button
              onClick={() => handleNavClick('admin')}
              className={`flex items-center space-x-2 w-full text-left px-3 py-3 rounded-md font-interface text-sm font-semibold tracking-widest cursor-pointer transition-all
                ${activeTab === 'admin' 
                  ? 'bg-heritage-yellow/10 text-heritage-yellow' 
                  : 'text-ink-text/80 dark:text-warm-text/80 hover:bg-border-warm/10'
                }`}
            >
              <Lock className="w-4 h-4" />
              <span>STUDIO INQUIRIES PORTAL</span>
            </button>

            <div className="pt-4 border-t border-border-warm/20 flex justify-center">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center py-3 bg-heritage-yellow text-white font-interface text-xs font-bold tracking-widest uppercase cursor-pointer"
              >
                BOOK A DIRECT CONSULTATION
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
