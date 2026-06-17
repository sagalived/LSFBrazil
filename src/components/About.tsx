import React from 'react';
import { Target, Eye, Shield, Users, Compass, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const valores = [
    { label: 'Inovação tecnológica', detail: 'Modulação e BIM de última geração.' },
    { label: 'Sustentabilidade', detail: 'Construção seca, limpa e reciclável.' },
    { label: 'Qualidade superior', detail: 'Garantia de aço certificado Z275.' },
    { label: 'Ética e Compliance', detail: 'Processos claros e transparentes.' },
    { label: 'Transparência total', detail: 'Acompanhamento financeiro em tempo real.' },
    { label: 'Eficiência construtiva', detail: 'Redução de até 60% do cronograma.' },
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-50 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-600 uppercase block">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            LSF Brazil: Engenharia do Amanhã
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            "A LSF Brazil é uma empresa especializada em construções industrializadas utilizando a tecnologia Light Steel Frame, oferecendo rapidez, qualidade, sustentabilidade e inovação para o setor da construção civil no Nordeste."
          </p>
        </div>

        {/* Brand Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Mission Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Missão</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Desenvolver soluções construtivas inovadoras, sustentáveis e de altíssima qualidade técnica, simplificando radicalmente o processo de construção e trazendo máxima economia operacional para os nossos clientes.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Visão</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ser reconhecida como a maior referência no Nordeste brasileiro em construção industrializada de Light Steel Frame, liderando a transição da construção tradicional (úmida e geradora de resíduos) para a era industrial computadorizada.
              </p>
            </div>
          </motion.div>

          {/* Values Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg border border-slate-800 flex flex-col justify-between md:row-span-1"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Valores</h3>
                <div className="grid grid-cols-1 gap-2">
                  {valores.map((v, i) => (
                    <div key={i} className="flex items-start space-x-2.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                      <div>
                        <span className="text-xs font-bold block text-slate-100">{v.label}</span>
                        <span className="text-[11px] text-slate-400 block">{v.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* regional credibility callout for Nordeste */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 mix-blend-multiply"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <h4 className="text-2xl font-bold">Por que Light Steel Frame no Nordeste?</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Nossos projetos são modelados especificamente para a umidade salina litorânea e a radiação térmica intensa da nossa região. Usamos revestimentos multicamadas de alto desempenho com membranas higrorreguláveis (barreiras de vapor) e EPS elastificado ou painéis PIR, que bloqueiam o calor antes que ele chegue ao ambiente, reduzindo em até 50% os custos de climatização artificial.
              </p>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <span className="text-2xl font-black text-emerald-400 block">Z275++</span>
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Corrosão Zero</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <span className="text-2xl font-black text-emerald-400 block">-50%</span>
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Ar Condicionado</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
