import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Filter, Maximize2, MapPin, Calendar, Scale, Trash2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'residencial' | 'comercial' | 'industrial'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projetos" className="py-24 bg-slate-900 text-white scroll-mt-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-400 uppercase block">
            Portfólio LSF
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Nossos Projetos de Sucesso no Nordeste
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Consulte as construções executadas pela LSF Brazil. Elevamos o padrão da arquitetura litorânea e urbana corporativa através do aço estrutural.
          </p>
        </div>

        {/* Categories Tab selector bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'Todos os Projetos' },
            { id: 'residencial', label: 'Residencial' },
            { id: 'comercial', label: 'Comercial' },
            { id: 'industrial', label: 'Industrial / Galpões' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm tracking-wide transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/15'
                  : 'bg-slate-950/60 border border-white/5 hover:bg-slate-800 hover:text-slate-200 text-slate-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid Panel */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-950/40 border border-white/5 rounded-2xl overflow-hidden group hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Image Box */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-102 transition-transform duration-500 group-hover:scale-108"
                  />
                  {/* Category overlay label */}
                  <span className="absolute top-4 left-4 bg-emerald-600 text-white font-bold font-mono text-[9px] px-2.5 py-1 rounded-full uppercase tracking-widest leading-none">
                    {p.category}
                  </span>

                  {/* View Details Hover Mask */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="bg-white text-slate-950 p-3 rounded-full hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Maximize2 className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

                {/* Card Content details */}
                <div className="p-6 space-y-4 text-left">
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {p.title}
                    </h3>
                    <div className="flex items-center space-x-1.5 text-slate-400 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{p.location}</span>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs text-slate-400 font-mono">
                    <div>
                      <span className="text-[10px] text-slate-500 block">ÁREA CONSTRUÍDA</span>
                      <span className="font-bold text-slate-200 text-sm">{p.area} m²</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">MONTANTE</span>
                      <span className="font-bold text-emerald-400 text-sm">Light Steel Frame</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state callback */}
        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-slate-500 text-sm">Nenhum projeto registrado para esta categoria.</p>
          </div>
        )}

      </div>

      {/* Project Details Modal dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop screen click back */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Dialog container Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              {/* Image banner head */}
              <div className="relative aspect-video w-full overflow-hidden shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-800 text-slate-300 p-2 rounded-full cursor-pointer border border-white/5 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal stats and descriptive details scrolling content */}
              <div className="p-6 sm:p-8 space-y-6 text-left overflow-y-auto">
                <div className="space-y-2">
                  <span className="inline-block bg-emerald-600 text-white text-[9px] font-bold font-mono tracking-widest px-2.5 py-1 roundeduppercase">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-slate-400 text-xs">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Key Technical specifications metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950 border border-white/5 font-mono text-center">
                  
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase">Dimensão</span>
                    <span className="text-sm font-bold text-slate-100">{selectedProject.area} m²</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase">Tempo de Obra</span>
                    <span className="text-sm font-bold text-sky-400">{selectedProject.durationWeeks} semanas</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase">Aço Estrutural</span>
                    <span className="text-sm font-bold text-slate-100">
                      {selectedProject.steelWeight ? `${selectedProject.steelWeight} t` : 'Z275'}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase">Desperdício Salvo</span>
                    <span className="text-sm font-bold text-emerald-400">{selectedProject.wasteSavedKg.toLocaleString('pt-BR')} kg</span>
                  </div>

                </div>

                {/* Sustainability indicator badges callout */}
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-start space-x-3 text-xs text-slate-300 leading-normal">
                  <Trash2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-emerald-400 font-extrabold block mb-0.5">Tecnologia Circular de Mitigação Ambiental</span>
                    <span>Ao escolher Light Steel Frame, {selectedProject.wasteSavedKg.toLocaleString('pt-BR')} kg de sobras, pedrisco, cimento, e arame farpado foram poupados do descarte em caçambas, mantendo o ecossistema nordestino íntegro.</span>
                  </div>
                </div>
              </div>

              {/* Close Button footer bar */}
              <div className="p-4 bg-slate-950 border-t border-white/5 shrink-0 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold cursor-pointer transition-colors"
                >
                  Fechar Detalhes
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
