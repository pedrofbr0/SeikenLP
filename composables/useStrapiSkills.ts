import { fallbackSkills } from '~/data/fallback'
import type { Skill } from '~/types/skill'

export const useStrapiSkills = () => {
  const { strapiFetch, normalizeSkill } = useStrapiClient()

  const asyncData = useAsyncData<Skill[]>(
    'strapi-skills',
    async () => {
      const response = await strapiFetch<any[]>('/api/skills?sort[0]=name:asc')
      const skills = (response.data || []).map(normalizeSkill).filter((item) => item.name)
      return skills.length ? skills : fallbackSkills
    },
    {
      default: () => fallbackSkills
    }
  )

  return {
    skills: asyncData.data,
    pending: asyncData.pending,
    error: asyncData.error,
    refresh: asyncData.refresh
  }
}
