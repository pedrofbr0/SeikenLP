import type { Profile } from '~/types/profile'
import type { Project } from '~/types/project'

interface SeoOptions {
  title?: string
  description?: string
  path?: string
  image?: string
  profile?: Profile
  project?: Project
}

export const usePortfolioSeo = (options: SeoOptions = {}) => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl.replace(/\/$/, '')
  const path = options.path || '/'
  const canonical = `${siteUrl}${path === '/' ? '' : path}`
  const title = options.title || 'Lucas Rodrigues - Desenhista Cadista e Projetista CAD/BIM'
  const description =
    options.description ||
    'Portfolio profissional de Lucas Rodrigues: desenho tecnico arquitetonico, CAD/BIM, modelagem 3D, renderizacao, interiores, reformas, restauro, paisagismo e ambientes industriais.'
  const image = options.image || `${siteUrl}/images/hero-render.svg`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: options.project ? 'article' : 'website',
    ogUrl: canonical,
    ogImage: image,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image
  })

  const jsonLd = computed(() => {
    const person = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: options.profile?.name || 'Lucas Rodrigues',
      jobTitle: 'Desenhista Cadista | Projetista CAD/BIM | Modelagem 3D e Renderizacao',
      description,
      url: siteUrl,
      sameAs: [options.profile?.linkedin, options.profile?.portfolioUrl].filter(Boolean),
      knowsAbout: [
        'Desenho tecnico arquitetonico',
        'Projetos CAD/BIM',
        'Modelagem 3D arquitetura',
        'Renderizacao arquitetonica',
        'SketchUp',
        'Lumion',
        'AutoCAD',
        'Revit'
      ]
    }

    if (!options.project) return person

    return {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: options.project.title,
      description: options.project.shortDescription,
      creator: {
        '@type': 'Person',
        name: options.profile?.name || 'Lucas Rodrigues'
      },
      image: options.project.coverImage?.url || image,
      url: canonical,
      keywords: options.project.servicesProvided.join(', ')
    }
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: () => JSON.stringify(jsonLd.value)
      }
    ]
  })
}
