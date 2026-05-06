import { fallbackProfile } from '~/data/fallback'
import type { Profile } from '~/types/profile'

export const useStrapiProfile = () => {
  const { strapiFetch, normalizeProfile } = useStrapiClient()

  const asyncData = useAsyncData<Profile>(
    'strapi-profile',
    async () => {
      const response = await strapiFetch<any>('/api/profile?populate[profileImage]=true&populate[heroImage]=true')
      const profile = normalizeProfile(response.data)
      return profile.name ? { ...fallbackProfile, ...profile } : fallbackProfile
    },
    {
      default: () => fallbackProfile
    }
  )

  return {
    profile: asyncData.data,
    pending: asyncData.pending,
    error: asyncData.error,
    refresh: asyncData.refresh
  }
}
