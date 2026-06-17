import React, { useState } from 'react';
import { QuoteSimulation } from '../types';
import { Calculator, ArrowRight, ShieldCheck, Download, Printer, CheckCircle, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

interface BudgetCalculatorProps {
  onQuoteSubmit: (sim: QuoteSimulation & { total: number; detailStr: string }) => void;
}

export default function BudgetCalculator({ onQuoteSubmit }: BudgetCalculatorProps) {
  const [area, setArea] = useState<number>(150);
  const [type, setType] = useState<QuoteSimulation['type']>('residencial_standard');
  const [floors, setFloors] = useState<number>(1);
  const [includeFoundation, setIncludeFoundation] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);

  // Price calculations based on realistic regional standard pricing per m² for Light Steel Frame
  const getBaseRate = (t: QuoteSimulation['type']) => {
    switch (t) {
      case 'residencial_standard':
        return 2100; // R$2.100 per m²
      case 'residencial_luxury':
        return 3400; // R$3.400 per m²
      case 'comercial_office':
        return 2605; // R$2.605 per m²
      case 'industrial_shed':
      default:
        return 1650; // R$1.650 per m²
    }
  };

  const baseRate = getBaseRate(type);
  const multiplierFloors = floors > 1 ? 1.08 : 1.0; // multi-floor structural reinforcing costs +8% m²
  const basePrice = area * baseRate * multiplierFloors;
  
  const foundationCost = includeFoundation ? area * 350 : 0; // R$350 m² for radier/plate foundation
  const totalPrice = basePrice + foundationCost;

  // Breakdown items
  const steelFramePrice = totalPrice * 0.35; // 35% of cost is the structural steel profiling
  const claddingInsulationPrice = totalPrice * 0.30; // 30% OSB, membrane, insulation wool
  const finishingsMasonsPrice = totalPrice * 0.25; // 25% interiors & stucco finishing
  const engineeringBimPrice = totalPrice * 0.10; // 10% design engineering & BIM compatibility

  const handleApply = () => {
    const detailString = `Simulação de Obra LSF Brazil: Area ${area}m² - Tipo: ${type} - Pavimentos: ${floors} - Fundação: ${includeFoundation ? 'Sim' : 'Não'}. Valor Total Estimado: R$ ${totalPrice.toLocaleString('pt-BR')}.`;
    onQuoteSubmit({
      area,
      type,
      floors,
      includeFoundation,
      total: totalPrice,
      detailStr: detailString
    });
    setSuccess(true);
    setTimeout(() => { setSuccess(false); }, 3000);
  };

  return (
    <div className="bg-white text-slate-800 rounded-3xl p-8 sm:p-12 border border-slate-205 card-shadow relative overflow-hidden">
      
      {/* Grid Blueprint */}
      <div 
        className="absolute inset-0 dot-pattern-dark opacity-10 pointer-events-none"
      ></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Controls Column Left */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-emerald-600 font-mono text-xs tracking-wider uppercase block font-bold">
              Cálculo de Viabilidade Econômica
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Orçamento Sob Medida
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm">
              Inicie a modelagem do seu sonho. Informe os parâmetros preliminares para computar instantaneamente um espectro de investimentos.
            </p>
          </div>

          {/* Form container */}
          <div className="space-y-5 bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200">
            
            {/* Area slide */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold font-mono tracking-wider text-slate-500">
                <span>ÁREA DA OBRA (M²)</span>
                <span className="text-emerald-600 text-sm font-bold">{area} m²</span>
              </div>
              <input
                type="range"
                min="30"
                max="1000"
                step="5"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0F172A] focus:outline-none"
              />
            </div>

            {/* Type selector */}
            <div className="space-y-1.5 text-xs">
              <label className="font-bold font-mono text-slate-500 uppercase">Categoria Construtiva</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as any)}
                className="w-full p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold focus:outline-none cursor-pointer text-xs sm:text-sm"
              >
                <option value="residencial_standard">Residencial Padrão (R$ 2.100/m²)</option>
                <option value="residencial_luxury">Residencial Alto Padrão / Luxo (R$ 3.400/m²)</option>
                <option value="comercial_office">Comercial / Escritório (R$ 2.605/m²)</option>
                <option value="industrial_shed">Galpão Industrial (R$ 1.650/m²)</option>
              </select>
            </div>

            {/* Floors and foundations */}
            <div className="grid grid-cols-2 gap-4 pb-2">
              
              <div className="space-y-1.5 text-xs text-left">
                <label className="font-bold font-mono text-slate-500 uppercase">Pavimentos</label>
                <select
                  value={floors}
                  onChange={(e) => setFloors(Number(e.target.value))}
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold focus:outline-none cursor-pointer text-xs"
                >
                  <option value={1}>Térreo (1 Pav.)</option>
                  <option value={2}>Duplex (2 Pav.)</option>
                  <option value={3}>Triplex (3 Pav.)</option>
                </select>
              </div>

              <div className="space-y-1.5 text-xs text-left">
                <label className="font-bold font-mono text-slate-500 uppercase">Fundação Radier</label>
                <div className="flex items-center space-x-2 pt-2.5">
                  <input
                    type="checkbox"
                    id="foundation"
                    checked={includeFoundation}
                    onChange={(e) => setIncludeFoundation(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 bg-white border-slate-200 rounded focus:ring-emerald-500 focus:ring-2 cursor-pointer"
                  />
                  <label htmlFor="foundation" className="font-semibold text-slate-600 select-none cursor-pointer">
                    Sim, incluir
                  </label>
                </div>
              </div>

            </div>

            {/* Submit estimate */}
            <button
              onClick={handleApply}
              className="w-full inline-flex items-center justify-center py-3 bg-[#0F172A] hover:bg-[#1E3A5F] text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-sm"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Transferir para o Formulário
            </button>

          </div>
        </div>

        {/* Calculated Estimator Report Right */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6 text-left">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] text-slate-500 font-mono block uppercase font-bold">Investimento Estimado LSF Brazil</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-500 font-mono block uppercase font-bold">Custo Médio Equivalente</span>
                <span className="text-sm font-semibold text-emerald-600 block font-mono">
                  R$ {Math.round(totalPrice / area).toLocaleString('pt-BR')}/m²
                </span>
              </div>
            </div>

            {/* Breakdown progress segments */}
            <div className="space-y-4 pt-4 border-t border-slate-200 max-h-80 overflow-y-auto pr-1">
              
              {/* Item 1 */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 font-bold">1. Estrutura de Aço Galvanizado (Z275 (35%))</span>
                  <span className="text-slate-500 font-mono">R$ {steelFramePrice.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 font-bold">2. Fechamentos e Isolantes de Alta Performance (30%)</span>
                  <span className="text-slate-500 font-mono">R$ {claddingInsulationPrice.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 font-bold">3. Acabamentos Internos e EIFS Externo (25%)</span>
                  <span className="text-slate-500 font-mono">R$ {finishingsMasonsPrice.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 font-bold">4. Projeto BIM e Compatibilização de Instalações (10%)</span>
                  <span className="text-slate-500 font-mono">R$ {engineeringBimPrice.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-500 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>

            </div>

            {/* Interactive Note */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start space-x-3 text-xs leading-normal">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-slate-600">
                <span className="text-[#0F172A] font-bold block mb-0.5">O que está incluído nesta simulação?</span>
                <span>Projetos estruturais completos em BIM, montantes estruturais de aço Z275, isolamento acústico em Lã de PET, laje de concreto leve (se houver níveis superiores), encunhamento seco e reboco elastomérico de proteção térmica contra intempéries litorâneas.</span>
              </div>
            </div>
          </div>

          {/* Download and Apply callbacks */}
          <div className="flex items-center justify-between mt-6 px-2 text-xs text-slate-400 font-mono">
            <span className="flex items-center text-slate-400">
              {success ? (
                <span className="text-emerald-600 flex items-center font-bold">
                  <CheckCircle className="w-4 h-4 mr-1.5 animate-bounce" /> Parâmetros anexados ao contato!
                </span>
              ) : (
                <span>*A estimativa é referencial com base em índices de insumos.</span>
              )}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
