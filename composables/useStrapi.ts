import type { Experience } from '~/types/experience'
import type { MediaAsset } from '~/types/media'
import type { Profile } from '~/types/profile'
import type { Project } from '~/types/project'
import type { Skill } from '~/types/skill'

interface StrapiResponse<T> {
  data: T
  meta?: unknown
}

const unwrapAttributes = <T extends Record<string, any>>(entry: any): T => {
  if (!entry) return {} as T
  return {
    id: entry.id,
    ...(entry.attributes || entry)
  } as T
}

const asArray = (value: any): any[] => {
  if (!value) return []
  if (Array.isArray(value?.data)) return value.data
  if (Array.isArray(value)) return value
  return []
}

const stringList = (value: any): string[] => {
  if (!value) return []
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === 'string' ? item : item?.name || item?.title || item?.label))
      .filter(Boolean)
  }
  if (typeof value === 'string') {
    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
  }
  return []
}

const categoryLabels: Record<string, string> = {
  interiores: 'Interiores',
  arquitetonico: 'Arquitetônico',
  industrial: 'Industrial',
  paisagismo: 'Paisagismo',
  reforma_restauro: 'Reforma e restauro',
  renderizacao: 'Renderização',
  cad_bim: 'CAD/BIM'
}

const categoryLabel = (value?: string) => {
  if (!value) return 'CAD/BIM'
  return categoryLabels[value] || value
}

export const useStrapiClient = () => {
  const config = useRuntimeConfig()
  const strapiUrl = config.public.strapiUrl.replace(/\/$/, '')
  const token = config.strapiToken

  const headers = computed(() => (token ? { Authorization: `Bearer ${token}` } : undefined))

  const strapiFetch = <T>(path: string) =>
    $fetch<StrapiResponse<T>>(`${strapiUrl}${path}`, {
      headers: headers.value
    })

  const mediaUrl = (url?: string) => {
    if (!url) return ''
    return url.startsWith('http') ? url : `${strapiUrl}${url}`
  }

  const normalizeMedia = (media: any): MediaAsset | undefined => {
    const raw = Array.isArray(media?.data) ? media.data[0] : media?.data || media
    const file = unwrapAttributes<any>(raw)
    if (!file?.url) return undefined

    return {
      url: mediaUrl(file.url),
      alt: file.alternativeText || file.caption || file.name || '',
      width: file.width,
      height: file.height
    }
  }

  const normalizeMediaGallery = (media: any): MediaAsset[] =>
    asArray(media)
      .map((item) => normalizeMedia(item))
      .filter(Boolean) as MediaAsset[]

  const normalizeProject = (entry: any): Project => {
    const item = unwrapAttributes<any>(entry)

    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      shortDescription: item.shortDescription || '',
      fullDescription: item.fullDescription || item.shortDescription || '',
      category: categoryLabel(item.category),
      client: item.client,
      sector: item.sector,
      year: item.year,
      coverImage: normalizeMedia(item.coverImage),
      gallery: normalizeMediaGallery(item.gallery),
      softwareUsed: stringList(item.softwareUsed),
      servicesProvided: stringList(item.servicesProvided),
      featured: item.featured,
      order: item.order,
      seoTitle: item.seoTitle,
      seoDescription: item.seoDescription,
      highlights: stringList(item.highlights || item.projectHighlights)
    }
  }

  const normalizeProfile = (entry: any): Profile => {
    const item = unwrapAttributes<any>(entry)

    return {
      name: item.name,
      headline: item.headline,
      professionalSummary: item.professionalSummary,
      phone: item.phone,
      email: item.email,
      location: item.location,
      linkedin: item.linkedin,
      portfolioUrl: item.portfolioUrl,
      whatsapp: item.whatsapp,
      profileImage: normalizeMedia(item.profileImage),
      heroImage: normalizeMedia(item.heroImage)
    }
  }

  const normalizeExperience = (entry: any): Experience => {
    const item = unwrapAttributes<any>(entry)

    return {
      id: item.id,
      company: item.company,
      role: item.role,
      startDate: item.startDate,
      endDate: item.endDate,
      current: item.current,
      description: item.description,
      responsibilities: stringList(item.responsibilities)
    }
  }

  const normalizeSkill = (entry: any): Skill => {
    const item = unwrapAttributes<any>(entry)

    return {
      id: item.id,
      name: item.name,
      category: item.category,
      level: item.level,
      icon: item.icon
    }
  }

  return {
    strapiFetch,
    normalizeProject,
    normalizeProfile,
    normalizeExperience,
    normalizeSkill
  }
}
