import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { QuoteSimulation } from '../types';
import { Phone, Mail, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactFormInputs {
  nome: string;
  telefone: string;
  email: string;
  cidade: string;
  tipoProjeto: string;
  mensagem: string;
}

interface ContactProps {
  prefilledSimulation: (QuoteSimulation & { total: number; detailStr: string }) | null;
}

export default function Contact({ prefilledSimulation }: ContactProps) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm<ContactFormInputs>();

  // If the user performed a simulation, prefill the form values dynamically
  useEffect(() => {
    if (prefilledSimulation) {
      setValue('tipoProjeto', prefilledSimulation.type);
      setValue(
        'mensagem',
        `Olá! Realizei uma simulação no orçamento inteligente e pretendo construir uma estrutura de ${
          prefilledSimulation.area
        }m² (${
          prefilledSimulation.floors
        } pavimentos) do tipo ${prefilledSimulation.type.replace('_', ' ')}. Estimativa de Investimento Indicada: R$ ${prefilledSimulation.total.toLocaleString(
          'pt-BR',
          { maximumFractionDigits: 0 }
        )}. Aguardo contato para refinamento.`
      );
    }
  }, [prefilledSimulation, setValue]);

  const onSubmit = (data: ContactFormInputs) => {
    // Generate a WhatsApp deep-link containing form metadata for instant mobile closing
    const textMsg = `Olá LSF Brazil! Seguem meus dados de contato para orçamento:%0A%0A*Nome:* ${
      data.nome
    }%0A*Telefone:* ${data.telefone}%0A*E-mail:* ${data.email}%0A*Cidade:* ${data.cidade}%0A*Tipo de Projeto:* ${
      data.tipoProjeto
    }%0A%0A*Detalhamento:* ${encodeURIComponent(data.mensagem)}`;

    // Open WhatsApp in new tab
    const url = `https://wa.me/5581999999999?text=${textMsg}`;
    window.open(url, '_blank');
    reset();
  };

  return (
    <section id="contato" className="py-24 bg-[#F8FAFC] text-slate-900 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-600 uppercase block">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Inicie Seu Projeto Hoje Mesmo
          </h2>
          <div className="accent-line mx-auto"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Preencha os dados ou use o WhatsApp para falar diretamente com nosso departamento de engenharia e modelagem.
          </p>
        </div>

        {/* Contact Layout Splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Information & Channel Column (Col-4) */}
          <div className="lg:col-span-4 space-y-8 text-left flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-[#0F172A] leading-tight">
                Informações de Atendimento
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Nossa filial central atende e despacha perfis de Light Steel Frame (LSF) estrutural homologados para todos os estados do Nordeste brasileiro.
              </p>

              {/* Informative nodes list */}
              <div className="space-y-4 pt-4">
                
                {/* Node 1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase font-mono block">Telefone / WhatsApp</span>
                    <span className="text-sm font-extrabold text-slate-900 block">(81) 99999-9999</span>
                    <span className="text-xs text-slate-400 block font-medium">Atendimento Segunda a Sexta, 8h às 18h</span>
                  </div>
                </div>

                {/* Node 2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg text-emerald-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase font-mono block">E-mail Comercial</span>
                    <span className="text-sm font-extrabold text-slate-900 block">contato@lsfbrazil.com.br</span>
                    <span className="text-xs text-slate-400 block font-medium">Retorno em até 4 horas comerciais</span>
                  </div>
                </div>

                {/* Node 3 */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase font-mono block">Central Nordeste</span>
                    <span className="text-sm font-extrabold text-slate-900 block">Av. Conselheiro Aguiar, 4200</span>
                    <span className="text-xs text-slate-400 block font-medium">Boa Viagem, Recife - PE | CEP: 51021-020</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Simulated Geography Map Canvas */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden h-44 relative bg-white card-shadow">
              {/* Custom geographical look mockup using dark overlay */}
              <div 
                className="absolute inset-0 opacity-15" 
                style={{
                  backgroundImage: `radial-gradient(#10b981 1.5px, transparent 1.5px)`,
                  backgroundSize: '16px 16px'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-4 text-left">
                <div>
                  <span className="inline-block bg-slate-900 text-white font-mono text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-widest leading-none mb-1">
                    Google Maps
                  </span>
                  <p className="text-xs font-bold text-white leading-tight">
                    Cobertura de entrega em PE, AL, PB, RN, CE, SE e BA.
                  </p>
                </div>
              </div>
              
              {/* Stylized vector pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <MapPin className="w-7 h-7 text-emerald-600 fill-emerald-100 animate-bounce" />
                <div className="w-2.5 h-1 bg-slate-950/25 rounded-full scale-x-150 blur-[1px]"></div>
              </div>
            </div>

          </div>

          {/* Budget Submission Form Column (Col-8) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl flex flex-col justify-between card-shadow">
            <div className="space-y-6">
              <div className="text-left space-y-2">
                <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-2">
                  Solicitação de Orçamento Técnico
                </h3>
                {prefilledSimulation && (
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-250 flex items-center text-xs text-emerald-800">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0 mr-2" />
                    <span>Os dados fornecidos no <b>Orçamento Inteligente</b> foram inseridos abaixo com sucesso!</span>
                  </div>
                )}
              </div>

              {/* Form elements */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome field */}
                  <div className="space-y-1 text-xs">
                    <label className="font-bold text-slate-500 uppercase font-mono">Seu Nome *</label>
                    <input
                      type="text"
                      placeholder="Ex: Roberto Alencar"
                      {...register('nome', { required: 'Nome é obrigatório' })}
                      className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel/10 text-slate-800 text-sm font-medium"
                    />
                    {errors.nome && <p className="text-rose-500 text-[10px] uppercase font-bold">{errors.nome.message}</p>}
                  </div>

                  {/* Telefone field */}
                  <div className="space-y-1 text-xs">
                    <label className="font-bold text-slate-500 uppercase font-mono">Telefone / WhatsApp *</label>
                    <input
                      type="tel"
                      placeholder="Ex: (81) 99999-9999"
                      {...register('telefone', { required: 'Telefone é obrigatório' })}
                      className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel/10 text-slate-800 text-sm font-medium"
                    />
                    {errors.telefone && <p className="text-rose-500 text-[10px] uppercase font-bold">{errors.telefone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* E-mail field */}
                  <div className="space-y-1 text-xs">
                    <label className="font-bold text-slate-500 uppercase font-mono">E-mail Corporativo *</label>
                    <input
                      type="email"
                      placeholder="Ex: roberto@empresa.com.br"
                      {...register('email', { required: 'E-mail é obrigatório' })}
                      className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel/10 text-slate-800 text-sm font-medium"
                    />
                    {errors.email && <p className="text-rose-500 text-[10px] uppercase font-bold">{errors.email.message}</p>}
                  </div>

                  {/* Cidade field */}
                  <div className="space-y-1 text-xs">
                    <label className="font-bold text-slate-500 uppercase font-mono">Cidade / Estado d'Obra *</label>
                    <input
                      type="text"
                      placeholder="Ex: Recife - PE"
                      {...register('cidade', { required: 'Cidade d\'obra é obrigatória' })}
                      className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel/10 text-slate-800 text-sm font-medium"
                    />
                    {errors.cidade && <p className="text-rose-500 text-[10px] uppercase font-bold">{errors.cidade.message}</p>}
                  </div>
                </div>

                {/* Tipo de projeto selector */}
                <div className="space-y-1 text-xs">
                  <label className="font-bold text-slate-500 uppercase font-mono">Tipo de Projeto</label>
                  <select
                    {...register('tipoProjeto')}
                    className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-700 text-sm font-medium focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel/10 cursor-pointer"
                  >
                    <option value="residencial_standard">Residencial Unifamiliar Padrão</option>
                    <option value="residencial_luxury">Residencial Unifamiliar Alto Padrão</option>
                    <option value="comercial_office">Espaço Comercial / Escritório</option>
                    <option value="industrial_shed">Galpão de Armazenamento / Especial</option>
                  </select>
                </div>

                {/* Mensagem field */}
                <div className="space-y-1 text-xs">
                  <label className="font-bold text-slate-500 uppercase font-mono">Detalhamento da Demanda</label>
                  <textarea
                    rows={4}
                    placeholder="Descreva detalhes como dimensões do terreno, se já possui projeto assinado por arquiteto, cronograma previsto..."
                    {...register('mensagem')}
                    className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel/10 text-slate-800 text-sm placeholder-slate-400 font-medium"
                  ></textarea>
                </div>

                {/* Submit action button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-slate-400 leading-normal max-w-xs text-left">
                    *Ao clicar em enviar, você será direcionado para formalização imediata via canal WhatsApp de plantão.
                  </p>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-steel hover:bg-[#12253F] text-white font-bold rounded-xl shadow-md hover:-translate-y-0.5 transition-all cursor-pointer text-sm"
                  >
                    <Send className="w-4.5 h-4.5 mr-2" />
                    Enviar Proposta Técnica
                  </button>
                </div>

                {/* Success alert */}
                {isSubmitSuccessful && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center space-x-2 font-bold">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>Redirecionando você ao atendimento de plantão WhatsApp de LSF Brazil...</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
