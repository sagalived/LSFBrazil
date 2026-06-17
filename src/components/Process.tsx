import React from 'react';
import { TIMELINE } from '../data';
import { CheckCircle, Shield, Award, Calendar, Layers, PenTool } from 'lucide-react';
import { motion } from 'motion/react';

export default function Process() {
  
  // Icon finder helper
  const getIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Calendar className="w-5 h-5 text-emerald-600" />;
      case 2:
        return <PenTool className="w-5 h-5 text-emerald-600" />;
      case 3:
        return <Layers className="w-5 h-5 text-emerald-600" />;
      case 4:
        return <CheckCircle className="w-5 h-5 text-emerald-600" />;
      case 5:
        return <Shield className="w-5 h-5 text-emerald-600" />;
      default:
        return <Award className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="processo" className="py-24 bg-white text-slate-900 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-600 uppercase block">
            Fluxo Operacional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Nossos Passos para um Projeto de Sucesso
          </h2>
          <div className="accent-line mx-auto"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Nossa esteira de engenharia industrializada garante que prazos sejam respeitados e custos fiquem exatamente sob controle matemático. Conheça a jornada da sua obra.
          </p>
        </div>

        {/* Timeline stepper container */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
          
          {/* Vertical central spine line (desktop only) */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-[1px] hidden sm:block"></div>

          {/* Stepper items list */}
          <div className="space-y-12 sm:space-y-16">
            {TIMELINE.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.id} 
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline bubble milestone dot */}
                  <div className="absolute left-0 sm:left-1/2 w-8 h-8 rounded-full bg-steel border-4 border-white flex items-center justify-center transform -translate-x-[12px] sm:-translate-x-4 z-10 card-shadow">
                    <span className="text-[10px] font-bold text-white font-mono">{step.id}</span>
                  </div>

                  {/* Spacer helper column (desktop) */}
                  <div className="w-full sm:w-1/2 hidden sm:block"></div>

                  {/* Content card column */}
                  <div className="w-full sm:w-1/2 pl-8 sm:pl-0 sm:px-8">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="bg-white p-6 sm:p-8 rounded-2xl card-shadow border border-slate-200/50 relative text-left"
                    >
                      {/* Floating duration date tag */}
                      <span className="absolute top-4 right-4 bg-slate-50 border border-slate-100 text-slate-500 rounded px-2 py-0.5 text-[10px] font-mono font-bold">
                        {step.duration}
                      </span>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2.5">
                          <span className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
                            {getIcon(step.id)}
                          </span>
                          <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-600">
                            {step.badge}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                          {step.title}
                        </h3>

                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
