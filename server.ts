import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware for parsing requests
app.use(express.json());

// Initialize Gemini SDK with telemetry header and server key safely
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
} else {
  console.warn('GEMINI_API_KEY não foi declarado no ambiente. O assistente técnico usará respostas padrão.');
}

// API endpoint for technical Chatbot Advisor
app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Mensagem é obrigatória' });
  }

  // Fallback if SDK or target key is not initialized
  if (!ai) {
    return res.json({
      text: 'Olá! Sou seu assessor de engenharia LSF Brazil. O sistema está rodando localmente de prontidão. Com o Light Steel Frame (LSF), sua fundação é mais leve, sua obra é concluída em até 1/3 do prazo convencional de alvenaria e você economiza até 95% de água!'
    });
  }

  try {
    // Format history for chat integration
    const formattedHistory = Array.isArray(history) 
      ? history.slice(-6).map((h: any) => ({
          role: h.role === 'model' ? 'model' : 'user',
          parts: [{ text: h.parts?.[0]?.text || '' }]
        }))
      : [];

    // Create chat session with System Instruction
    const chat = ai.chats.create({
      model: 'gemini-3.5-flash',
      config: {
        systemInstruction: `Você é o "Construtor Inteligente", assessor de engenharia civil sênior da empresa LSF Brazil.
Seu objetivo é responder dúvidas técnicas de arquitetos, construtores, investidores e clientes interessados em construir com Light Steel Frame (LSF) no Nordeste brasileiro.
Destaque sempre os seguintes pontos chaves:
- Velocidade: construção até 60% mais rápida.
- Sustentabilidade: redução drástica de água (construção seca), menos de 1% de desperdício em sobras.
- Conforto Térmico: isolamento termoacústico multicamadas de alta classe (com Lã de PET, placas cimentícias e EIFS) que reduz os custos de climatização artificial em até 50%.
- Durabilidade: perfis com alta proteção de zinco galvanizado Z275 (275 gramas de zinco por m² em ambas as faces), à prova de cupins, fungos e umidade salina litorânea.
Responda de forma profissional, persuasiva, técnica de forma acessível e extremamente clara. Escreva sempre em português do Brasil.`
      }
    });

    // Send the user message
    const result = await chat.sendMessage({ message });
    return res.json({ text: result.text });
  } catch (error: any) {
    console.error('Erro na chamada do Gemini:', error);
    return res.status(500).json({
      error: 'Erro no servidor de inteligência',
      text: 'Note que todas as estruturas de aço da LSF Brazil possuem blindagem anticorrosiva de padrão Z275 certificado, suportando com facilidade ventos do litoral e garantindo obra seca e limpa de verdade.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

// Configure static/dev mounting
async function configureServer() {
  if (process.env.NODE_ENV !== 'production') {
    // Mount Vite dev helper server in middleware mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log('Vite montado em modo de Desenvolvimento.');
  } else {
    // Serve static compiled app in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log('Servidor rodando em modo de Produção.');
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express Server running on port ${PORT}`);
  });
}

configureServer();
