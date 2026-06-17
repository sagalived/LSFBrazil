import React from 'react';
import { Hammer, Facebook, Instagram, Linkedin, ArrowUp, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-400 border-t border-slate-800 py-16 text-left relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Logo & Slogan Column (Col-5) */}
          <div className="md:col-span-5 space-y-4">
            <div
              className="flex items-center space-x-2 cursor-pointer group w-max"
              onClick={handleScrollTop}
            >
              <div className="bg-emerald-600 p-2 rounded-lg text-white font-bold flex items-center justify-center transition-transform group-hover:scale-105">
                <Hammer className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white">
                  LSF<span className="text-emerald-500 font-medium">Brazil</span>
                </span>
                <p className="text-[9px] font-mono tracking-[0.2em] text-slate-500 uppercase leading-none mt-0.5">
                  Construção Inteligente
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              Liderando o desenvolvimento imobiliário e comercial sustentável no Nordeste do Brasil através da modulação computacional precisa do Light Steel Frame.
            </p>

            {/* Social channels */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-[#1E3A5F]/20 border border-slate-800 hover:border-emerald-500/35 hover:text-emerald-400 flex items-center justify-center text-slate-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#1E3A5F]/20 border border-slate-800 hover:border-emerald-500/35 hover:text-emerald-400 flex items-center justify-center text-slate-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#1E3A5F]/20 border border-slate-800 hover:border-emerald-500/35 hover:text-emerald-400 flex items-center justify-center text-slate-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick jump navigation Links (Col-3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Navegação Rápida</h4>
            <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
              {[
                { id: 'sobre', label: 'Quem Somos' },
                { id: 'tecnologia', label: 'Tecnologia Steel Frame' },
                { id: 'servicos', label: 'Nossos Serviços' },
                { id: 'diferenciais', label: 'Diferenciais Técnicos' }
              ].map(link => (
                <button
                  key={link.id}
                  onClick={() => onNavClick(link.id)}
                  className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer w-max"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Links 2 (Col-2) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Institucional</h4>
            <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
              {[
                { id: 'sustentabilidade', label: 'Sustentabilidade' },
                { id: 'projetos', label: 'Nossos Projetos' },
                { id: 'processo', label: 'Processo Operacional' },
                { id: 'contato', label: 'Contato & Canais' }
              ].map(link => (
                <button
                  key={link.id}
                  onClick={() => onNavClick(link.id)}
                  className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer w-max"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Compliance Plaque (Col-2) */}
          <div className="md:col-span-2 space-y-4 border-t md:border-t-0 border-white/5 pt-6 md:pt-0">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">LGPD & Privacidade</h4>
            <div className="flex items-start space-x-2 text-xs text-slate-500 leading-normal">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>Seus dados de simulação e contato são sigilosos e regidos em estrita conformidade com a Lei Geral de Proteção de Dados (Nº 13.709/2018).</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar copyright & BackToTop */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            <span>© {new Date().getFullYear()} LSF Brazil. Todos os direitos reservados. CNPJ: 22.345.678/0001-90.</span>
            <span className="block mt-1 sm:inline sm:ml-4 border-l border-white/5 pl-4">Desenvolvido com Engenharia BIM 3D</span>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
            <span>•</span>
            <button
              onClick={handleScrollTop}
              className="inline-flex items-center space-x-1 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-3 px-0.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
