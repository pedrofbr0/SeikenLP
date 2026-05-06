import { fallbackProjects } from '~/data/fallback'
import type { Project } from '~/types/project'

export const useStrapiProjects = () => {
  const { strapiFetch, normalizeProject } = useStrapiClient()

  const asyncData = useAsyncData<Project[]>(
    'strapi-projects',
    async () => {
      const response = await strapiFetch<any[]>(
        '/api/projects?populate[coverImage]=true&populate[gallery]=true&sort[0]=order:asc&sort[1]=year:desc'
      )
      const projects = (response.data || []).map(normalizeProject).filter((project) => project.title && project.slug)
      return projects.length ? projects : fallbackProjects
    },
    {
      default: () => fallbackProjects
    }
  )

  return {
    projects: asyncData.data,
    pending: asyncData.pending,
    error: asyncData.error,
    refresh: asyncData.refresh
  }
}

export const useStrapiProject = (slug: string) => {
  const { strapiFetch, normalizeProject } = useStrapiClient()

  const asyncData = useAsyncData<Project | null>(
    `strapi-project-${slug}`,
    async () => {
      const response = await strapiFetch<any[]>(
        `/api/projects?filters[slug][$eq]=${encodeURIComponent(slug)}&populate[coverImage]=true&populate[gallery]=true`
      )
      const project = (response.data || []).map(normalizeProject).find(Boolean)
      return project || fallbackProjects.find((item) => item.slug === slug) || null
    },
    {
      default: () => fallbackProjects.find((item) => item.slug === slug) || null
    }
  )

  return {
    project: asyncData.data,
    pending: asyncData.pending,
    error: asyncData.error,
    refresh: asyncData.refresh
  }
}
