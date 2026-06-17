import { Project, ServiceItem, Testimonial, TimelineStep } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'res',
    title: 'Construções Residenciais',
    description: 'Casas modernas, seguras e sustentáveis planejadas com engenharia de alta performance estrutural.',
    iconName: 'Home',
    details: [
      'Residências unifamiliares de alto padrão',
      'Casas térreas ou sobrados estruturados em LSF',
      'Isolamento termoacústico de nível superior',
      'Acabamento premium conforme projeto arquitetônico'
    ]
  },
  {
    id: 'com',
    title: 'Construções Comerciais',
    description: 'Lojas, escritórios corporativos e clínicas construídos na metade do tempo, acelerando o retorno do seu capital.',
    iconName: 'Building',
    details: [
      'Fachadas dinâmicas e vãos livres estendidos',
      'Construção de escritórios com flexibilidade de layout',
      'Retrofit estrutural e ampliações seguras',
      'Lojas modulares de rápida inauguração'
    ]
  },
  {
    id: 'ind',
    title: 'Galpões e Projetos Especiais',
    description: 'Estruturas de grandes vãos e fechamentos industriais leves e duráveis para o Nordeste.',
    iconName: 'Layers',
    details: [
      'Galpões logísticos e depósitos industriais',
      'Mezaninos leves de alta capacidade de carga',
      'Fechamento de fachadas em sistemas secos de alta velocidade',
      'Módulos habitáveis industrializados'
    ]
  },
  {
    id: 'proj_spec',
    title: 'Projetos Personalizados',
    description: 'Engenharia de detalhamento estrutural em LSF para se adequar perfeitamente ao seu projeto arquitetônico.',
    iconName: 'FileText',
    details: [
      'Modulação BIM em 3D detalhada',
      'Cálculo estrutural avançado com aços de alta resistência',
      'Memorial de cálculo detalhado para aprovações',
      'Compatibilização de sistemas elétricos e hidráulicos'
    ]
  },
  {
    id: 'tech_advice',
    title: 'Consultoria Técnica',
    description: 'Planejamento e acompanhamento estratégico para construtoras e investidores que desejam migrar para o LSF.',
    iconName: 'ShieldCheck',
    details: [
      'Viabilidade econômica e de suprimentos do aço',
      'Treinamento e treinamento de equipes de montagem',
      'Otimização de custos construtivos',
      'Inspeções e auditorias sob as normas ABNT aplicáveis'
    ]
  },
  {
    id: 'mng',
    title: 'Gestão de Obras',
    description: 'Controle de ponta a ponta desde a produção fabril dos perfis até a chave na mão.',
    iconName: 'Activity',
    details: [
      'Cronograma físico-financeiro rastreável zero-desperdício',
      'Controle rigoroso de cronograma (60% mais rápido)',
      'Direcionamento de montagem com rastreabilidade de peças',
      'Entrega documentada com garantia estrutural'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Villa Oceano Premium',
    category: 'residencial',
    image: '/src/assets/images/project_residential_villa_1781720647049.jpg',
    area: 320,
    location: 'Porto de Galinhas, PE',
    description: 'Residência à beira-mar de dois pavimentos, com balanços estruturais arrojados em Light Steel Frame e excelente isolamento térmico contra a radiação do sol nordestino.',
    steelWeight: 8.4,
    durationWeeks: 12,
    wasteSavedKg: 9500
  },
  {
    id: 'p2',
    title: 'Sede Corporativa Tech Hub',
    category: 'comercial',
    image: '/src/assets/images/project_commercial_building_1781720661320.jpg',
    area: 780,
    location: 'Recife Antigo, PE',
    description: 'Edifício comercial de três pavimentos projetado para flexibilidade total de layout. O fechamento termoacústico com placas cimentícias e LÃ de PET gerou alta eficiência de ar-condicionado.',
    steelWeight: 22.1,
    durationWeeks: 18,
    wasteSavedKg: 24000
  },
  {
    id: 'p3',
    title: 'Complexo Logístico Agreste',
    category: 'industrial',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    area: 1200,
    location: 'Caruaru, PE',
    description: 'Galpão industrial e administrativo com estrutura otimizada, mezaninos leves e fechamento seco. Redução drástica das cargas de fundação em terreno de baixa capacidade de suporte.',
    steelWeight: 31.5,
    durationWeeks: 14,
    wasteSavedKg: 38000
  },
  {
    id: 'p4',
    title: 'Residência Altiplano Green',
    category: 'residencial',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    area: 245,
    location: 'João Pessoa, PB',
    description: 'Uma casa ecológica moderna que alcançou eficiência energética classe A. Utilização de captação solar integrada e ventilação cruzada facilitada pela modulação das paredes em LSF.',
    steelWeight: 6.2,
    durationWeeks: 10,
    wasteSavedKg: 7200
  }
];

export const TIMELINE: TimelineStep[] = [
  {
    id: 1,
    title: 'Consulta Inicial & Diagnóstico',
    description: 'Analisamos seus desejos, projetos arquitetônicos existentes e as necessidades do seu terreno para traçar a viabilidade construtiva ideal.',
    duration: 'Dias 1 - 3',
    badge: 'Alinhamento'
  },
  {
    id: 2,
    title: 'Planejamento & Engenharia 3D (BIM)',
    description: 'Modelagem tridimensional milimétrica de todas as peças de aço. Calculamos cargas, vento, e definimos todas as furações hidráulicas e elétricas na fábrica.',
    duration: 'Semanas 1 - 3',
    badge: 'Engenharia da Precisão'
  },
  {
    id: 3,
    title: 'Produção Industrial do Aço',
    description: 'Os perfis de aço estrutural galvanizado com proteção anticorrosiva Z275 são manufaturados com cortes automáticos sob controle computadorizado.',
    duration: 'Semanas 4 - 5',
    badge: 'Manufatura Inteligente'
  },
  {
    id: 4,
    title: 'Montagem de Frame e Ancoragem',
    description: 'Os painéis chegam prontos à obra. A ereção da ossatura de aço é extremamente rápida sobre as fundações previamente niveladas.',
    duration: 'Semanas 6 - 8',
    badge: 'Montagem Seca'
  },
  {
    id: 5,
    title: 'Cladding, Revestimentos & Instalações',
    description: 'Instalação de placas OSB, barreiras de vento-água (Tyvek), placas cimentícias externas, recheio de isolamento térmico, instalações nos vãos e gesso acartonado interno.',
    duration: 'Semanas 9 - 11',
    badge: 'Fechamentos'
  },
  {
    id: 6,
    title: 'Acabamentos e Entrega da Chave',
    description: 'Execução de revestimentos estéticos premium e sanitários. Entrega limpa, sem entulhos e com manual do usuário estrutural.',
    duration: 'Semana 12',
    badge: 'Entrega'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Roberto Vasconcelos',
    role: 'Arquiteto Associado',
    company: 'RV Studio de Criação',
    text: 'Trabalhar com a LSF Brazil foi um divisor de águas. Conseguimos materializar uma casa com balanços de 4 metros e vãos de vidro imensos que no concreto tradicional exigiriam vigas pesadíssimas e caras. Obra limpa, organizada e entregue no prazo absoluto.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 't2',
    name: 'Mariana Drummond',
    role: 'Proprietária da Villa Oceano',
    company: 'Cliente LSF PE',
    text: 'Eu estava receosa sobre o isolamento termoacústico no litoral do Nordeste. Mas a casa é incrivelmente fresca! Raramente precisamos ligar o ar-condicionado na potência máxima. Além disso, a obra ficou pronta em 3 meses. Meus vizinhos ainda estão erguendo tijolos!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 't3',
    name: 'Eng. Fernando Filho',
    role: 'Diretor de Incorporação',
    company: 'Pernambuco Real Estate',
    text: 'Analisamos a taxa de retorno antes de escolher LSF para o nosso novo centro médico. Economizamos 4 meses de construção, o que permitiu faturar muito antes. A alta precisão milimétrica eliminou retrabalhos na colocação de esquadrias e modulados.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80'
  }
];
