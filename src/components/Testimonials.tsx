import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section id="depoimentos" className="py-24 bg-[#F8FAFC] text-slate-800 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content and absolute premium badge */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-600 uppercase block">
            Voz dos Clientes e Parceiros
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Quem Constrói Conosco, Recomenda LSF Brazil
          </h2>
          <div className="accent-line mx-auto"></div>
          
          {/* Rating plaque absolute satisfaction */}
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200/60 px-4 py-2 rounded-full card-shadow mt-4">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 stroke-[1.5]" />
              ))}
            </div>
            <span className="text-slate-700 font-mono text-sm font-bold">5.0 / 5.0</span>
            <span className="text-slate-400 text-xs font-medium">Nota Média</span>
          </div>
        </div>

        {/* Carousel Slider Panel Container */}
        <div className="relative max-w-4xl mx-auto flex items-center justify-between">
          
          {/* Left indicator arrow */}
          <button
            onClick={prev}
            className="absolute -left-4 sm:-left-16 z-10 w-12 h-12 rounded-full bg-white hover:bg-slate-50 border border-slate-200 card-shadow flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Scrolling client speech container */}
          <div className="w-full bg-white p-8 sm:p-12 md:p-16 rounded-3xl border border-slate-200/50 card-shadow relative min-h-[16rem] sm:min-h-[14rem] flex flex-col justify-between">
            <Quote className="absolute top-8 left-8 w-14 h-14 text-slate-50 shrink-0 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 relative z-10 text-left"
              >
                {/* Text comment body */}
                <p className="text-slate-600 text-sm sm:text-lg italic leading-relaxed font-semibold">
                  "{TESTIMONIALS[index].text}"
                </p>

                {/* Author row profile */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                  <img
                    src={TESTIMONIALS[index].avatar}
                    alt={TESTIMONIALS[index].name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover shadow-sm bg-slate-50 shrink-0"
                  />
                  <div>
                    <h4 className="font-extrabold text-[#0F172A] text-sm sm:text-base leading-none">
                      {TESTIMONIALS[index].name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {TESTIMONIALS[index].role} {TESTIMONIALS[index].company ? `• ${TESTIMONIALS[index].company}` : ''}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right indicator arrow */}
          <button
            onClick={next}
            className="absolute -right-4 sm:-right-16 z-10 w-12 h-12 rounded-full bg-white hover:bg-slate-50 border border-slate-200 card-shadow flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

        </div>

        {/* Bullet index tracker bar */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                index === idx ? 'bg-emerald-600 w-6' : 'bg-slate-300'
              }`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
