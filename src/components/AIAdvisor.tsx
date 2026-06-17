import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Bot, User, Send, Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AIAdvisor() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-init',
      sender: 'assistant',
      text: 'Olá! Sou o Construtor Inteligente, consultor de engenharia em Light Steel Frame da LSF Brazil. Gostaria de entender mais sobre estabilidade, isolamento, prazos ou custo de aço para o seu projeto no Nordeste?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'O LSF resiste à maresia?',
    'Como funciona o isolamento térmico?',
    'Suporta quantos pavimentos?',
    'Qual a garantia do aço Z275?'
  ];

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `m-usr-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages.map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Falha na requisição ao consultor de IA.');
      }

      const data = await response.json();
      const answer = data.text || 'Desculpe, tive um contratempo de conexão. Pode refazer a pergunta?';

      const botMsg: ChatMessage = {
        id: `m-bot-${Date.now()}`,
        sender: 'assistant',
        text: answer,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const errMsg: ChatMessage = {
        id: `m-err-${Date.now()}`,
        sender: 'assistant',
        text: 'Olá, no momento estou operando localmente sem conexão de chave. Mas posso adiantar que o Light Steel Frame possui proteção de zinco Z275, sendo imune a cupins e corrosão sob as normas ABNT!',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'm-init',
        sender: 'assistant',
        text: 'Olá! Sou o Construtor Inteligente, consultor de engenharia em Light Steel Frame da LSF Brazil. Gostaria de entender mais sobre estabilidade, isolamento, prazos ou custo de aço para o seu projeto no Nordeste?',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div className="bg-white border border-slate-200/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between card-shadow h-[550px] relative overflow-hidden">
      
      {/* Absolute graphic glow overlay */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
        <div className="flex items-center space-x-3 text-left">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
            <Bot className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <span className="font-extrabold text-sm sm:text-base text-slate-900 flex items-center">
              Consultor Técnico de LSF
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 ml-1.5 fill-emerald-500/10" />
            </span>
            <p className="text-[10px] text-emerald-600 font-mono font-bold uppercase tracking-wider">SUPORTE EXCLUSIVO LSF BRAZIL</p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="p-2 hover:bg-slate-50 text-slate-400 hover:text-slate-800 rounded-lg transition-colors cursor-pointer"
          title="Reiniciar Conversa"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Messages scrolling stack */}
      <div className="flex-1 overflow-y-auto space-y-4 py-6 px-1 text-slate-800">
        <AnimatePresence initial={false}>
          {messages.map((m) => {
            const isBot = m.sender === 'assistant';
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex gap-3 max-w-[85%] ${isBot ? 'mr-auto text-left' : 'ml-auto flex-row-reverse text-right'}`}
              >
                {/* Profile Icon */}
                <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center border ${
                  isBot 
                    ? 'bg-emerald-50 border-emerald-50 text-emerald-600' 
                    : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}>
                  {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>

                {/* Message speech box */}
                <div className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed ${
                  isBot 
                    ? 'bg-slate-50 border border-slate-100 text-slate-800 shadow-sm' 
                    : 'bg-steel text-white font-medium shadow-md'
                }`}>
                  {m.text}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {loading && (
          <div className="flex gap-3 text-left max-w-[85%]">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-50/20 text-emerald-600 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-slate-50 p-4 rounded-xl flex items-center space-x-2 text-slate-400 border border-slate-100">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
              <span className="text-xs font-medium font-mono">Processando especificação...</span>
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Quick helpers prompts bar */}
      <div className="pb-3 flex flex-wrap gap-2 shrink-0 justify-start">
        {quickPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(p)}
            disabled={loading}
            className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 hover:border-emerald-600/30 hover:text-emerald-700 text-[11px] text-slate-600 cursor-pointer transition-all leading-none focus:outline-none disabled:opacity-40 font-semibold"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input interaction bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(input);
        }}
        className="flex gap-2 shrink-0"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          placeholder="Tire suas dúvidas técnicas sobre Steel Frame..."
          className="flex-grow bg-[#F8FAFC] border border-slate-200/80 focus:border-steel focus:ring-1 focus:ring-steel/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all font-medium"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="bg-steel hover:bg-steel-dark text-white p-3.5 rounded-xl flex items-center justify-center shadow-md transition-colors cursor-pointer disabled:opacity-40"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
}
