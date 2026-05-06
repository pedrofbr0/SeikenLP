import type { MediaAsset } from './media'

export interface Profile {
  name: string
  headline: string
  professionalSummary: string
  phone?: string
  email?: string
  location?: string
  linkedin?: string
  portfolioUrl?: string
  whatsapp?: string
  profileImage?: MediaAsset
  heroImage?: MediaAsset
}
