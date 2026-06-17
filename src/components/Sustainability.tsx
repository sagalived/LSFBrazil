import React, { useState, useEffect } from 'react';
import { Leaf, Trash2, Droplet, Sparkles, Wind, FileHeart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Sustainability() {
  const [area, setArea] = useState<number>(180);

  // Counters state
  const [obras, setObras] = useState<number>(0);
  const [residuos, setResiduos] = useState<number>(0);
  const [clientes, setClientes] = useState<number>(0);

  // Animate counters on mount elegantly
  useEffect(() => {
    let active = true;

    const animate = () => {
      const duration = 2000; // ms
      const steps = 60;
      const stepTime = duration / steps;
      
      let step = 0;
      const interval = setInterval(() => {
        if (!active) return;
        step++;
        
        // Target values: Obras: 58, Residuos: 124 toneladas, Clientes: 64
        const ratio = step / steps;
        setObras(Math.floor(ratio * 58));
        setResiduos(Math.floor(ratio * 124));
        setClientes(Math.floor(ratio * 64));

        if (step >= steps) {
          setObras(58);
          setResiduos(124);
          setClientes(64);
          clearInterval(interval);
        }
      }, stepTime);

      return () => clearInterval(interval);
    };

    animate();
    return () => { active = false; };
  }, []);

  // Environmental calculations helper based on selected m²
  const waterSavedLiters = area * 120; // 120 liters saved per m²
  const carbonReducedKg = area * 45; // 45kg CO2 avoided per m²
  const debrisAvoidedKg = area * 80; // 80kg concrete rubble avoided per m²

  const ecoPillars = [
    {
      icon: <Trash2 className="w-6 h-6 text-emerald-500" />,
      title: 'Redução de Resíduos',
      desc: 'Os componentes chegam pré-cortados de fábrica. Isso elimina pilhas de entulho e otimiza 100% da matéria prima.'
    },
    {
      icon: <Droplet className="w-6 h-6 text-emerald-500" />,
      title: 'Menor Uso de Água',
      desc: 'A alvenaria consome milhares de litros para mistura de argamassas e concreto. O LSF é uma estrutura montada a seco.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-500" />,
      title: 'Eficiência Energética',
      desc: 'Paredes isoladas termicamente evitam trocas excessivas com o calor litorâneo, reduzindo o esforço do ar condicionado.'
    },
    {
      icon: <Wind className="w-6 h-6 text-emerald-500" />,
      title: 'Menor Emissão de CO₂',
      desc: 'Processo fabril otimizado e transporte otimizado por veículos leves reduzem consideravelmente as emissões poluentes.'
    }
  ];

  return (
    <section id="sustentabilidade" className="py-24 bg-white text-slate-900 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-600 uppercase block">
            Impacto Ecológico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Compromisso LSF de Sustentabilidade Real
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Construir o futuro significa preservar hoje. Nosso ecossistema de montagem seca reduz o passivo ecológico da construção desde o canteiro até a vida útil do edifício.
          </p>
        </div>

        {/* Animated Counters Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20 bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100">
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-200/80 pb-6 md:pb-0">
            <span className="text-4xl sm:text-5xl font-black text-slate-900 font-sans tracking-tight block">
              +{obras}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest font-mono">
              OBRAS COMPLEMENTADAS
            </span>
          </div>

          <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-200/80 py-6 md:py-0">
            <span className="text-4xl sm:text-5xl font-black text-emerald-600 font-sans tracking-tight block">
              +{residuos}t
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest font-mono">
              RESÍDUOS EVITADOS
            </span>
          </div>

          <div className="space-y-2 pt-6 md:pt-0">
            <span className="text-4xl sm:text-5xl font-black text-slate-900 font-sans tracking-tight block">
              +{clientes}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest font-mono">
              CLIENTES ATENDIDOS
            </span>
          </div>
        </div>

        {/* Content Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {ecoPillars.map((pillar, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100/60 relative text-left space-y-4">
              <div className="w-12 h-12 bg-white text-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-950">{pillar.title}</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Ecological Calculator Tool */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Control column */}
            <div className="lg:col-span-5 text-left space-y-8">
              <div className="space-y-3">
                <span className="inline-flex items-center space-x-1.5 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full text-emerald-400 font-semibold text-xs tracking-wider">
                  <Leaf className="w-3.5 h-3.5 fill-emerald-500" />
                  <span>Simulador de Preservação Ambiental</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Simule sua Economia de Carbono e Água
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Ajuste o controle deslizante abaixo de acordo com a área do projeto de construção que você pretende iniciar e verifique as economias diretas garantidas de imediato.
                </p>
              </div>

              {/* Slider controls */}
              <div className="space-y-4 bg-slate-950 p-6 rounded-2xl border border-white/5">
                <div className="flex justify-between text-xs font-mono font-bold tracking-widest text-slate-400">
                  <span>ÁREA PROJETADA</span>
                  <span className="text-emerald-400 text-sm font-extrabold">{area} m²</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="10"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>50 m²</span>
                  <span>Construção Média</span>
                  <span>600 m²</span>
                </div>
              </div>
            </div>

            {/* Calculations outputs right */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Calculated factor 1 */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 flex flex-col justify-between text-left h-44">
                <div className="w-10 h-10 bg-sky-500/10 text-sky-400 rounded-xl flex items-center justify-center">
                  <Droplet className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-sky-400 block tracking-tight">
                    {waterSavedLiters.toLocaleString('pt-BR')}L
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono block mt-1">
                    Água Potável Salva
                  </span>
                </div>
              </div>

              {/* Calculated factor 2 */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 flex flex-col justify-between text-left h-44">
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 block tracking-tight">
                    {carbonReducedKg.toLocaleString('pt-BR')} kg
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono block mt-1">
                    CO₂ footprint evitado
                  </span>
                </div>
              </div>

              {/* Calculated factor 3 */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 flex flex-col justify-between text-left h-44">
                <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center">
                  <Trash2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-amber-400 block tracking-tight">
                    {debrisAvoidedKg.toLocaleString('pt-BR')} kg
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono block mt-1">
                    Entulho de Concreto Evitado
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
