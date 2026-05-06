import type { MediaAsset } from './media'

export type ProjectCategory =
  | 'Interiores'
  | 'Arquitetônico'
  | 'Industrial'
  | 'Paisagismo'
  | 'Reforma e restauro'
  | 'Renderização'
  | 'CAD/BIM'

export interface Project {
  id: string | number
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  category: ProjectCategory | string
  client?: string
  sector?: string
  year?: string | number
  coverImage?: MediaAsset
  gallery: MediaAsset[]
  softwareUsed: string[]
  servicesProvided: string[]
  featured?: boolean
  order?: number
  seoTitle?: string
  seoDescription?: string
  highlights: string[]
}
