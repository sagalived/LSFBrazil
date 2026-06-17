import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhatIsLSF from './components/WhatIsLSF';
import Services from './components/Services';
import Specs from './components/Specs';
import Sustainability from './components/Sustainability';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import BudgetCalculator from './components/BudgetCalculator';
import AIAdvisor from './components/AIAdvisor';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { QuoteSimulation } from './types';
import { MessageSquare, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [simulation, setSimulation] = useState<(QuoteSimulation & { total: number; detailStr: string }) | null>(null);

  // Smooth scroll handler to target sections
  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // When a user submits an estimate, bind it and jump directly down to the formal contact form
  const handleSimulationSubmit = (sim: QuoteSimulation & { total: number; detailStr: string }) => {
    setSimulation(sim);
    handleScrollTo('contato');
  };

  const handleWhatsAppFloat = () => {
    const textMsg = encodeURIComponent("Olá LSF Brazil! Acessei o site premium e gostaria de conversar com o plantão de engenharia sobre meu novo projeto.");
    window.open(`https://wa.me/5581999999999?text=${textMsg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans relative selection:bg-emerald-500 selection:text-white">
      
      {/* Sticky Top Header Navigation */}
      <Header
        onQuoteClick={() => handleScrollTo('contato')}
        onNavClick={handleScrollTo}
      />

      {/* Main Content Sections Stack */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero
          onQuoteClick={() => handleScrollTo('calculador_ia')}
          onTechClick={() => handleScrollTo('tecnologia')}
        />

        {/* 2. Sobre a Empresa (Who We Are) */}
        <About />

        {/* 3. O que é Light Steel Frame (Educational wall layers) */}
        <WhatIsLSF />

        {/* 4. Nossos Serviços (Interactive mesh catalog) */}
        <Services onQuoteClick={() => handleScrollTo('contato')} />

        {/* 5. Diferenciais (Tradicional vs LSF side-by-side Dark grid) */}
        <Specs />

        {/* 6. Sustentabilidade (Commitments + odometer counters + sliding eco calculator) */}
        <Sustainability />

        {/* 7. Projetos (Portfólio photo gallery with filters & detail modals) */}
        <Projects />

        {/* 8. Processo de Trabalho (Milestone timeline) */}
        <Process />

        {/* 9. Depoimentos (Elegant client slider) */}
        <Testimonials />

        {/* 10. Orçamento Inteligente & Consultoria por IA Section */}
        <section id="calculador_ia" className="py-24 bg-slate-950 text-white border-t border-b border-white/5 relative overflow-hidden">
          {/* Neon backdrop flares */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold font-mono tracking-widest text-emerald-400 uppercase block">
                Tecnologia de Vantagem
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Simulador Inteligente & Suporte por IA
              </h2>
              <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Calcule os custos aproximados do seu projeto em tempo real ou bata um papo com nosso Engenheiro Consultor Inteligente alimentado com tecnologia Gemini.
              </p>
            </div>

            {/* Split layout: Calculator left, AI Chatbot right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 h-full flex flex-col justify-between">
                <BudgetCalculator onQuoteSubmit={handleSimulationSubmit} />
              </div>
              <div className="lg:col-span-5 h-full">
                <AIAdvisor />
              </div>
            </div>

          </div>
        </section>

        {/* 11. Contato & Leads Collection Form */}
        <Contact prefilledSimulation={simulation} />

      </main>

      {/* Footer information and compliance */}
      <Footer onNavClick={handleScrollTo} />

      {/* Pulsating Floating WhatsApp trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={handleWhatsAppFloat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group bg-emerald-600 hover:bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-colors cursor-pointer border border-emerald-400/20"
          title="Fale Conosco no WhatsApp"
        >
          {/* Pulsating back waves */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-20 group-hover:scale-130 transition-transform duration-1000 animate-ping"></span>
          
          <MessageSquare className="w-6 h-6 fill-white" />
          
          {/* Floating alert Badge dot */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-rose-500 border-2 border-slate-900 rounded-full animate-[pulse_1.5s_infinite]"></span>
        </motion.button>
      </div>

    </div>
  );
}
