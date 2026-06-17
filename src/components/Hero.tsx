import React from 'react';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onQuoteClick: () => void;
  onTechClick: () => void;
}

export default function Hero({ onQuoteClick, onTechClick }: HeroProps) {
  const indicators = [
    { title: '60% Mais Rápida', desc: 'Agilidade industrializada' },
    { title: 'Eco-Sustentável', desc: 'Resíduo zero garantido' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-stretch pt-20 overflow-hidden bg-[#F8FAFC] text-[#0F172A]"
    >
      {/* Left Column - Clean off-white main focus */}
      <div className="w-full lg:w-3/5 p-6 sm:p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden text-left bg-[#F8FAFC]">
        {/* Subtle dot pattern for depth */}
        <div className="absolute inset-0 dot-pattern-dark opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl space-y-8">
          {/* Aesthetic solid indicator bar from instructions */}
          <div className="accent-line"></div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 px-3.5 py-1 rounded-full text-slate-700 font-mono text-xs uppercase tracking-wider font-bold"
          >
            <Zap className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            <span>Selo de Inovação Sustentável</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1]"
          >
            Construção Inteligente<br />
            <span className="text-steel">para o Futuro.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-lg"
          >
            Soluções modernas, sustentáveis e eficientes em Light Steel Frame para todo o Nordeste brasileiro. Engenharia com padrão industrial e desperdício zero.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-steel hover:bg-[#12253F] text-white font-bold rounded-xl shadow-lg transition-all duration-250 cursor-pointer text-base"
            >
              Conhecer Tecnologia
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={onTechClick}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 hover:bg-slate-50 text-slate-600 font-bold rounded-xl transition-all duration-250 cursor-pointer text-base"
            >
              Simular Orçamento
            </button>
          </motion.div>

          {/* Indicators cards with icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-200/60"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600 font-bold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#16A34A" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-[#0F172A]">{indicators[0].title}</p>
                <p className="text-xs text-gray-400 font-medium">{indicators[0].desc}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600 font-bold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944A11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#2563EB" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-[#0F172A]">{indicators[1].title}</p>
                <p className="text-xs text-gray-400 font-medium">{indicators[1].desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Column - Beautiful dark deep navy aside styling */}
      <aside className="w-full lg:w-2/5 hero-gradient relative flex items-center justify-center p-8 sm:p-12 lg:p-16 text-left">
        {/* Custom background pattern from theme description */}
        <div className="absolute inset-0 dot-pattern opacity-15 pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-md">
          {/* Transparent glassmorphic card */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 card-shadow text-white">
            <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></span>
              Vantagem Competitiva
            </h3>

            <div className="space-y-4 font-sans">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-white/80 text-sm font-medium">Precisão Estrutural</span>
                <span className="text-emerald-400 font-mono font-bold tracking-tight text-base">100%</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10 text-white/40 italic">
                <span className="line-through text-sm">Construção Tradicional</span>
                <span className="text-xs">Artesanal</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-white/80 text-sm font-medium">Eficiência Térmica</span>
                <span className="text-emerald-400 font-mono font-bold tracking-tight text-base">+40%</span>
              </div>

              {/* Technology highlight block */}
              <div className="mt-8 p-4 bg-[#16A34A]/25 border border-[#16A34A]/30 rounded-xl">
                <p className="text-[#A7F3D0] text-[10px] uppercase tracking-widest font-bold mb-2">
                  Destaque Tecnológico
                </p>
                <p className="text-white text-sm leading-relaxed">
                  Aço galvanizado de alta resistência que garante durabilidade imobiliária superior a 100 anos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
