import React from 'react';
import { SERVICES } from '../data';
import { Home, Building, Layers, FileText, ShieldCheck, Activity, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  onQuoteClick: () => void;
}

export default function Services({ onQuoteClick }: ServicesProps) {
  
  // Icon mapping helper
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-6 h-6 stroke-[2]" />;
      case 'Building':
        return <Building className="w-6 h-6 stroke-[2]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 stroke-[2]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 stroke-[2]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 stroke-[2]" />;
      case 'Activity':
        default:
        return <Activity className="w-6 h-6 stroke-[2]" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-slate-50 text-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-600 uppercase block">
            Nossas Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Serviços Especializados LSF Brazil
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Oferecemos uma solução completa de engenharia, modulação industrial e montagem para que você construa com segurança jurídica, custos controlados do início ao fim.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <motion.div
              key={s.id}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-sm group"
            >
              <div className="space-y-6">
                {/* Icon wrapper */}
                <div className="w-12 h-12 bg-slate-900 text-emerald-400 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                  {getIcon(s.iconName)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-emerald-600 transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Sublist detailed points */}
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {s.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-500 leading-normal">
                      <span className="text-emerald-500 font-bold mr-1 shrink-0">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6">
                <button
                  onClick={onQuoteClick}
                  className="inline-flex items-center text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  Saber mais sobre esta solução
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
