export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const strapiUrl = config.public.strapiUrl.replace(/\/$/, '')
  const token = config.strapiToken

  try {
    const response = await $fetch<any>(`${strapiUrl}/api/projects?fields[0]=slug&fields[1]=updatedAt`, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined
    })

    return (response.data || [])
      .map((entry: any) => {
        const item = entry.attributes || entry
        return item.slug
          ? {
              loc: `/projetos/${item.slug}`,
              lastmod: item.updatedAt
            }
          : null
      })
      .filter(Boolean)
  } catch {
    return []
  }
})
