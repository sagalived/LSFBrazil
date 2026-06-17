import React from 'react';
import { ShieldCheck, BarChart2, Hammer, Droplet, Layers, HelpCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Specs() {
  const compData = [
    {
      factor: 'Prazo de Entrega',
      trad: 'Mais lenta (sujeita a atrasos climáticos e operacional artesanal)',
      lsf: 'Mais rápida (até 60% de redução no cronograma total da obra)',
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      highlight: true
    },
    {
      factor: 'Geração de Resíduos',
      trad: 'Mais resíduos (desperdício médio de 25% de areia, tijolo e cimento)',
      lsf: 'Menos resíduos (menos de 1% de sobra, obra limpa industrializada)',
      icon: <HelpCircle className="w-5 h-5 text-emerald-400" />,
      highlight: false
    },
    {
      factor: 'Consumo de Água',
      trad: 'Maior consumo (canteiro úmido, mistura constante de massas)',
      lsf: 'Menor consumo (construção seca, reduz o uso de água em até 95%)',
      icon: <Droplet className="w-5 h-5 text-emerald-400" />,
      highlight: false
    },
    {
      factor: 'Processo Construtivo',
      trad: 'Processo artesanal dependente de mão de obra improvisada',
      lsf: 'Processo industrializado de alta precisão milimétrica',
      icon: <Hammer className="w-5 h-5 text-emerald-400" />,
      highlight: true
    }
  ];

  const highlights = [
    { title: 'Até 60% Mais Rápido', desc: 'Sua obra entregue em meses em vez de anos, reduzindo custos de vigilância de canteiro, aluguel e juros de obra.' },
    { title: 'Menor Impacto Ambiental', desc: 'Emissão reduzida de CO₂ e uso de materiais 100% recicláveis com certificação verde de cadeia de custódia.' },
    { title: 'Precisão Construtiva', desc: 'Previsibilidade total do projeto. Paredes perfeitamente aprumadas que aceitam qualquer marcenaria sem correções.' },
    { title: 'Durabilidade Elevada', desc: 'Estrutura calculada para resistir a ventos de furacão e revestida com aço galvanizado imune a cupins, mofo e corrosão.' },
    { title: 'Maior Eficiência Operacional', desc: 'Espessura interna de parede reduzida em relação ao tijolo tradicional, ganhando até 4% a mais de área útil interna.' }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-slate-900 text-white scroll-mt-12 overflow-hidden relative">
      {/* Decorative Blueprint Background grids */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-400 uppercase block">
            Diferenciais Técnicos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tradicional vs Light Steel Frame
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Compare os dados reais de desempenho e engenharia estrutural. A evolução da arquitetura exige métodos baseados na previsibilidade e na precisão científica.
          </p>
        </div>

        {/* Comparative Visual Matrix */}
        <div className="overflow-x-auto pb-4 mb-20">
          <div className="min-w-[640px] border border-white/10 rounded-2xl bg-slate-950/40 backdrop-blur-sm overflow-hidden shadow-2xl">
            <div className="grid grid-cols-12 bg-slate-950 p-6 border-b border-white/10 font-bold text-sm tracking-widest text-slate-300 uppercase font-mono">
              <div className="col-span-3">Fator Comparativo</div>
              <div className="col-span-4 text-rose-400 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-1 shrink-0" />
                Construção Tradicional (Alvenaria)
              </div>
              <div className="col-span-5 text-emerald-400 flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1 shrink-0" />
                Light Steel Frame (Industrializado)
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {compData.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-12 p-6 text-sm items-center transition-colors ${
                    row.highlight ? 'bg-emerald-500/5' : 'hover:bg-white/2'
                  }`}
                >
                  <div className="col-span-3 font-semibold text-white flex items-center space-x-3 pr-4">
                    <span className="shrink-0 bg-slate-900 p-1.5 rounded-lg border border-white/5">{row.icon}</span>
                    <span>{row.factor}</span>
                  </div>
                  <div className="col-span-4 text-slate-400 text-xs sm:text-sm pr-6 leading-relaxed">
                    {row.trad}
                  </div>
                  <div className="col-span-5 text-slate-200 font-medium text-xs sm:text-sm leading-relaxed flex items-start space-x-2">
                    <span className="text-emerald-400 hover:scale-110 transition-transform">✦</span>
                    <span>{row.lsf}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {highlights.map((h, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, borderColor: 'rgba(16, 185, 129, 0.4)' }}
              className="bg-slate-950 border border-white/5 rounded-xl p-6 flex flex-col justify-between text-left project-card-glow"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-emerald-400 block tracking-widest uppercase">
                  Destaque {idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {h.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
