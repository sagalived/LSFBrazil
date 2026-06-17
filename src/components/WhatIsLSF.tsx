import React, { useState } from 'react';
import { Layers, Activity, Wind, CloudSun, ShieldAlert, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayerDetails {
  id: string;
  name: string;
  function: string;
  thickness: string;
  color: string;
}

export default function WhatIsLSF() {
  const [activeLayer, setActiveLayer] = useState<string>('steel');

  const wallLayers: LayerDetails[] = [
    {
      id: 'drywall',
      name: '1. Gesso Acartonado (Interno)',
      function: 'O gesso acartonado duplo fornece uma superfície interna perfeitamente lisa e pronta para receber pintura final, além de alta resistência ao fogo.',
      thickness: '25 mm (Duplo)',
      color: 'bg-slate-300'
    },
    {
      id: 'wool',
      name: '2. Lã de PET / Rocha',
      function: 'Isolante térmico e acústico macio de alto desempenho que preenche os vãos dos montantes de aço, garantindo conforto contra o barulho e o calor do Nordeste.',
      thickness: '100 mm',
      color: 'bg-yellow-100 border border-yellow-300'
    },
    {
      id: 'steel',
      name: '3. Perfis de Aço Galvanizado',
      function: 'A ossatura estrutural que suporta todo o edifício. Feita de montantes de aço galvanizado estrutural Z275 (espessura mínima 0,80mm). Não oxida, não empena, livre de pragas.',
      thickness: '90 - 140 mm',
      color: 'bg-zinc-400 border border-zinc-500 shadow-sm'
    },
    {
      id: 'osb',
      name: '4. Painel Estrutural OSB',
      function: 'Placa de tiras de madeira orientada prensada com resinas impermeabilizantes que confere rigidez dimensional e contraventamento a toda a estrutura de Steel Frame.',
      thickness: '11.1 mm',
      color: 'bg-amber-100 border border-amber-300'
    },
    {
      id: 'membrane',
      name: '5. Membrana Inteligente (Tyvek)',
      function: 'Barreira contra água e vento. Permite que a parede "respire" liberando micro-umidade interna do ambiente, mas impede de forma absoluta qualquer entrada de água externa.',
      thickness: '0.5 mm',
      color: 'bg-emerald-100 border border-emerald-300'
    },
    {
      id: 'eifs',
      name: '6. Painel EPS + Acabamento EIFS',
      function: 'Revestimento térmico externo especial (EIFS) com elastômeros e malha de fibra de vidro para evitar trincas, finalizado com textura hidro-repelente elegante.',
      thickness: '50 mm',
      color: 'bg-slate-200 border border-slate-300'
    }
  ];

  const pillars = [
    {
      icon: <Cpu className="w-6 h-6 text-emerald-500" />,
      title: 'Precisão Milimétrica',
      desc: 'Os perfis de aço são cortados a laser em fábrica especializada, reduzindo margens de erro normativas de centímetros para frações de milímetro.'
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-500" />,
      title: 'Isolamento Termoacústico Superior',
      desc: 'Composição em camadas que resulta em uma barreira intransponível para ruídos urbanos e calor solar intenso.'
    },
    {
      icon: <Activity className="w-6 h-6 text-emerald-500" />,
      title: 'Velocidade Industrial',
      desc: 'Toda a estrutura e perfis vêm numerados de fábrica para montagem instantânea em canteiro de obras seco.'
    },
    {
      icon: <CloudSun className="w-6 h-6 text-emerald-500" />,
      title: 'Eco-Suficiência',
      desc: 'Uso insignificante de água durante o processo rítmico de montagem e resíduos virtuais zero.'
    }
  ];

  return (
    <section id="tecnologia" className="py-24 bg-white text-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-600 uppercase block">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-850 tracking-tight leading-tight">
            A Engenharia inteligente do Light Steel Frame
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Esqueça tijolos úmidos, quebras de parede e desperdícios absurdos de cimento. Saiba por que o LSF é o método construtivo definitivo preferido nos EUA, Europa e Japão.
          </p>
        </div>

        {/* Content Section Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Explanatory column left */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              O que é exatamente o Light Steel Frame?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              É um sistema de construção civil de concepção racionalizada, que utiliza como elemento estrutural principal perfis leves de aço galvanizado formados a frio. O aço galvanizado é extremamente durável, oferecendo proteção absoluta contra corrosão do litoral por décadas.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {pillars.map((p, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    {p.icon}
                    <h4 className="text-sm font-bold text-slate-900">{p.title}</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Graphical Blueprint & Photo card right */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="/src/assets/images/structure_lsf_brazil_1781720632122.jpg"
                alt="Estrutura de Aço LSF Brazil"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-6">
                <div>
                  <span className="bg-emerald-500 text-white font-mono text-[10px] px-2 py-1 rounded uppercase font-bold tracking-widest block w-max mb-1">
                    Fábrica LSF
                  </span>
                  <p className="text-sm font-bold text-white">
                    Modulação estrutural real de perfis de aço de alta resistência conformados a frio.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Wall Constructor Tool */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visualizer column */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <span className="text-emerald-400 font-mono text-xs tracking-wider uppercase block mb-6">
                Explore a Parede Inteligente (Camadas LSF)
              </span>

              {/* Stack visual list */}
              <div className="w-full max-w-sm space-y-2">
                {wallLayers.map((layer) => {
                  const isSelected = activeLayer === layer.id;
                  return (
                    <button
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id)}
                      className={`relative w-full rounded-xl py-3 px-4 flex items-center justify-between text-left transition-all duration-300 transform cursor-pointer border ${
                        isSelected
                          ? 'bg-slate-800 border-emerald-500 scale-102 shadow-lg shadow-emerald-500/5'
                          : 'bg-slate-900/40 border-slate-800 hover:bg-slate-800/40'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded ${layer.color}`}></div>
                        <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-300'}`}>
                          {layer.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">{layer.thickness}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Information panel column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full px-3 py-1 text-xs font-mono">
                Multicamadas Termoacústicas
              </span>

              <AnimatePresence mode="wait">
                {wallLayers.map((layer) => {
                  if (layer.id !== activeLayer) return null;
                  return (
                    <motion.div
                      key={layer.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h4 className="text-2xl font-extrabold text-white">
                        {layer.name.split('. ')[1]}
                      </h4>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {layer.function}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                        <div>
                          <span className="text-slate-500 text-xs uppercase font-mono block">Espessura Projetada</span>
                          <span className="text-sm font-extrabold text-emerald-400">{layer.thickness}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 text-xs uppercase font-mono block">Tratamento Salino</span>
                          <span className="text-sm font-extrabold text-slate-200">ISO C5-I Marítimo</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </div>

          {/* Interactive instruction tip */}
          <div className="mt-8 text-center border-t border-slate-800/60 pt-6">
            <p className="text-[11px] font-medium text-slate-400">
              *Cada camada cumpre uma função no sistema drywall/isoframing duplo. Toque nos materiais para entender o papel de cada estrutura.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
