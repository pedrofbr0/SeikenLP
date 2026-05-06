import { fallbackExperiences } from '~/data/fallback'
import type { Experience } from '~/types/experience'

export const useStrapiExperience = () => {
  const { strapiFetch, normalizeExperience } = useStrapiClient()

  const asyncData = useAsyncData<Experience[]>(
    'strapi-experience',
    async () => {
      const response = await strapiFetch<any[]>('/api/experiences?sort[0]=startDate:desc')
      const experiences = (response.data || []).map(normalizeExperience).filter((item) => item.company)
      return experiences.length ? experiences : fallbackExperiences
    },
    {
      default: () => fallbackExperiences
    }
  )

  return {
    experiences: asyncData.data,
    pending: asyncData.pending,
    error: asyncData.error,
    refresh: asyncData.refresh
  }
}
