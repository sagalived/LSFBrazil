import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onQuoteClick: () => void;
  onNavClick: (sectionId: string) => void;
}

export default function Header({ onQuoteClick, onNavClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'tecnologia', label: 'Steel Frame' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'diferenciais', label: 'Diferenciais' },
    { id: 'sustentabilidade', label: 'Sustentabilidade' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'processo', label: 'Processo' },
    { id: 'contato', label: 'Contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link calculation based on scroll offset
      const offsets = navItems.map((item) => {
        const el = document.getElementById(item.id);
        return {
          id: item.id,
          top: el ? el.offsetTop - 120 : 0,
        };
      });

      const currentScroll = window.scrollY;
      const current = offsets.reduce((acc, curr) => {
        if (currentScroll >= curr.top) {
          return curr.id;
        }
        return acc;
      }, 'home');

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setIsOpen(false);
    onNavClick(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg py-4'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => handleClick('home')}
        >
          <div className="w-10 h-10 bg-[#0F172A] flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105">
            <div className="w-4.5 h-4.5 border-2 border-white rotate-45"></div>
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">
              LSF <span className="font-light tracking-wide text-slate-500">BRAZIL</span>
            </span>
            <p className="text-[9px] font-mono tracking-[0.2em] text-emerald-600 uppercase leading-none mt-0.5 font-bold">
              CONSTRUÇÃO INTELIGENTE
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`px-3 py-2 text-sm font-semibold transition-all duration-200 hover:text-emerald-600 cursor-pointer ${
                activeSection === item.id
                  ? 'text-emerald-600 border-b-2 border-emerald-600'
                  : 'text-slate-700 hover:text-emerald-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={onQuoteClick}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#0F172A] hover:bg-[#1E3A5F] text-white font-semibold text-sm rounded-full shadow-md hover:shadow-[#0F172A]/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 mr-2" />
            Solicitar Orçamento
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-800 p-2 focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-slate-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold hover:bg-slate-50 transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'text-emerald-600 bg-emerald-50/50'
                      : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onQuoteClick();
                  }}
                  className="w-full inline-flex items-center justify-center py-3 bg-[#0F172A] hover:bg-slate-800 text-white font-semibold rounded-full shadow-md cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
