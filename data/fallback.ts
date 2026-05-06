import type { Experience } from '~/types/experience'
import type { Profile } from '~/types/profile'
import type { Project } from '~/types/project'
import type { Skill } from '~/types/skill'

export const fallbackProfile: Profile = {
  name: 'Lucas Rodrigues',
  headline: 'Desenhista Cadista | Projetista CAD/BIM | Modelagem 3D e Renderização',
  professionalSummary:
    'Desenhista Cadista com mais de 10 anos de experiência em desenho técnico, projetos arquitetônicos, modelagem 3D e renderização. Atua no desenvolvimento de pranchas técnicas, levantamento e medição in loco, apoio a reformas, restauro, interiores, paisagismo e ambientes industriais, com foco em precisão, organização e qualidade visual para apresentação e documentação de projetos.',
  phone: '[Telefone]',
  email: '[E-mail]',
  location: '[Cidade, UF]',
  linkedin: '[LinkedIn]',
  portfolioUrl: '[Portfolio]',
  whatsapp: '[Telefone]',
  heroImage: {
    url: '/images/hero-render.svg',
    alt: 'Render arquitetonico com tijolo aparente, madeira, marmore escuro e iluminacao ambar'
  }
}

export const fallbackProjects: Project[] = [
  {
    id: 'demo-interiores',
    title: 'Interiores contemporâneos',
    slug: 'interiores-contemporaneos',
    category: 'Interiores',
    client: 'Conteudo demonstrativo',
    sector: 'Arquitetura e interiores',
    coverImage: {
      url: '/images/project-interior.svg',
      alt: 'Visualização 3D de ambiente interno contemporâneo'
    },
    gallery: [
      {
        url: '/images/project-interior.svg',
        alt: 'Render de interiores com madeira, tijolo aparente e luz quente'
      }
    ],
    shortDescription:
      'Exemplo de cadastro para apresentar renders de interiores, composição de materiais e iluminação de projeto.',
    fullDescription:
      'Este item funciona como conteúdo de demonstração até que os trabalhos reais sejam publicados no Strapi. Use este formato para cadastrar renders, imagens de processo, softwares utilizados, serviços executados e destaques técnicos de cada projeto.',
    softwareUsed: ['SketchUp', 'Lumion', 'Adobe Photoshop'],
    servicesProvided: ['Modelagem 3D', 'Renderização', 'Interiores'],
    featured: true,
    order: 1,
    highlights: ['Iluminação quente indireta', 'Materiais industriais premium', 'Composição visual para apresentação']
  },
  {
    id: 'demo-cad-bim',
    title: 'Documentação CAD/BIM',
    slug: 'documentacao-cad-bim',
    category: 'CAD/BIM',
    client: 'Conteudo demonstrativo',
    sector: 'Projetos tecnicos',
    coverImage: {
      url: '/images/project-cad.svg',
      alt: 'Prancha técnica CAD BIM com linhas e cotas arquitetônicas'
    },
    gallery: [
      {
        url: '/images/project-cad.svg',
        alt: 'Documentação técnica com desenho, cotas e organização de pranchas'
      }
    ],
    shortDescription:
      'Modelo de projeto para organizar pranchas, levantamentos, revisões técnicas e documentação executiva.',
    fullDescription:
      'Cadastre aqui projetos com desenhos técnicos, pranchas arquitetônicas, revisões, levantamento in loco e organização de arquivos. O layout foi pensado para valorizar tanto o rigor técnico quanto a clareza visual da documentação.',
    softwareUsed: ['AutoCAD', 'Revit'],
    servicesProvided: ['Desenho técnico', 'Pranchas técnicas', 'CAD/BIM'],
    featured: true,
    order: 2,
    highlights: ['Precisão de desenho', 'Organização de arquivos', 'Leitura técnica para equipes de arquitetura']
  },
  {
    id: 'demo-industrial',
    title: 'Ambientes industriais',
    slug: 'ambientes-industriais',
    category: 'Industrial',
    client: 'Conteudo demonstrativo',
    sector: 'Industrial e agroindustrial',
    coverImage: {
      url: '/images/project-industrial.svg',
      alt: 'Visualização de ambiente industrial com estrutura metálica e áreas técnicas'
    },
    gallery: [
      {
        url: '/images/project-industrial.svg',
        alt: 'Estudo visual para ambientes corporativos industriais'
      }
    ],
    shortDescription:
      'Espaço para destacar modelagens, estudos de layout e apoio técnico em ambientes industriais e agroindustriais.',
    fullDescription:
      'Use este cadastro para apresentar projetos de apoio a ambientes corporativos, industriais e agroindustriais, incluindo modelagem 3D, layouts, documentação técnica e imagens de apresentação.',
    softwareUsed: ['AutoCAD', 'SketchUp', 'Lumion'],
    servicesProvided: ['Layout técnico', 'Modelagem 3D', 'Renderização'],
    featured: false,
    order: 3,
    highlights: ['Setorização visual', 'Apoio à tomada de decisão', 'Clareza na comunicação técnica']
  },
  {
    id: 'demo-paisagismo',
    title: 'Paisagismo e áreas externas',
    slug: 'paisagismo-areas-externas',
    category: 'Paisagismo',
    client: 'Conteudo demonstrativo',
    sector: 'Paisagismo',
    coverImage: {
      url: '/images/project-landscape.svg',
      alt: 'Estudo 3D de paisagismo e área externa'
    },
    gallery: [
      {
        url: '/images/project-landscape.svg',
        alt: 'Visualização de paisagismo com circulação externa'
      }
    ],
    shortDescription:
      'Modelo para projetos de áreas externas, estudos volumétricos, paisagismo e composição de percursos.',
    fullDescription:
      'Publique estudos de paisagismo, reformas externas e visualizações arquitetônicas que ajudem clientes e equipes a compreender materiais, circulações e volumes antes da execução.',
    softwareUsed: ['SketchUp', 'Lumion', 'Adobe Photoshop'],
    servicesProvided: ['Paisagismo', 'Modelagem 3D', 'Renderização'],
    featured: false,
    order: 4,
    highlights: ['Composição de volumes', 'Vegetação e percurso', 'Apresentação visual clara']
  }
]

export const fallbackExperiences: Experience[] = [
  {
    id: 'ape-arquitetura',
    company: 'APE Arquitetura',
    role: 'Assistente de Arquiteto / Desenhista Cadista',
    startDate: '2015',
    current: true,
    description:
      'Apoio ao desenvolvimento de projetos arquitetônicos, reformas, restauros, interiores, paisagismo e ambientes industriais, da leitura técnica à preparação de documentação e apresentações visuais.',
    responsibilities: [
      'Levantamentos e medições in loco',
      'Elaboração e atualização de desenhos técnicos',
      'Desenvolvimento de pranchas arquitetônicas',
      'Modelagem 3D e renderização',
      'Apoio em projetos de interiores, paisagismo e ambientes industriais',
      'Organização de arquivos técnicos, revisão visual e preparação para impressão ou plotagem',
      'Prestação de serviços para Longping, ProGime, Bestway, Qualitest, Agrality, Topnutri, Agripar e Bayer'
    ]
  }
]

export const fallbackSkills: Skill[] = [
  { id: 'autocad', name: 'AutoCAD', category: 'Software', level: 'Desenho técnico' },
  { id: 'revit', name: 'Revit', category: 'Software', level: 'CAD/BIM' },
  { id: 'sketchup', name: 'SketchUp', category: 'Software', level: 'Modelagem 3D' },
  { id: 'lumion', name: 'Lumion', category: 'Software', level: 'Renderização' },
  { id: 'photoshop', name: 'Adobe Photoshop', category: 'Software', level: 'Pós-produção' }
]

export const services = [
  {
    title: 'Desenho técnico arquitetônico',
    description: 'Desenvolvimento e atualização de desenhos com leitura clara, cotas consistentes e rigor de documentação.'
  },
  {
    title: 'Projetos CAD/BIM',
    description: 'Apoio a estudos, layouts, compatibilização visual e organização de arquivos em fluxos CAD e BIM.'
  },
  {
    title: 'Modelagem 3D arquitetônica',
    description: 'Volumes, ambientes e elementos construtivos modelados para apoiar decisão, apresentação e execução.'
  },
  {
    title: 'Renderização de interiores',
    description: 'Imagens com materiais, luz, profundidade e atmosfera para comunicar o potencial real do ambiente.'
  },
  {
    title: 'Pranchas técnicas',
    description: 'Montagem, revisão visual e preparação de pranchas para impressão, plotagem e apresentação profissional.'
  },
  {
    title: 'Levantamento in loco',
    description: 'Medições, leitura de espaços existentes e transformação das informações em base técnica confiável.'
  },
  {
    title: 'Reformas, restauro e interiores',
    description: 'Suporte técnico para adequações, estudos de solução e documentação de intervenções arquitetônicas.'
  },
  {
    title: 'Ambientes corporativos e industriais',
    description: 'Apoio a projetos para contextos corporativos, industriais e agroindustriais com foco em clareza técnica.'
  }
]

export const clients = ['Longping', 'ProGime', 'Bestway', 'Qualitest', 'Agrality', 'Topnutri', 'Agripar', 'Bayer']

export const sectors = ['Corporativo', 'Industrial', 'Agroindustrial', 'Arquitetura', 'Interiores', 'Paisagismo']

export const differentials = [
  'Mais de 10 anos de experiência em desenho técnico e apoio à arquitetura',
  'Precisão em leitura, desenvolvimento e revisão de documentação',
  'Experiência com levantamento arquitetônico e medição in loco',
  'Domínio de modelagem 3D e renderização para apresentações de alto impacto',
  'Apoio eficiente a equipes de arquitetura, reformas, restauros e interiores',
  'Organização de arquivos técnicos e preparação para impressão ou plotagem',
  'Versatilidade entre projetos arquitetonicos, industriais e agroindustriais',
  'Qualidade visual para comunicar ideias com clareza e sofisticação'
]
