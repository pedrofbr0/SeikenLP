<script setup lang="ts">
const { profile, error: profileError } = useStrapiProfile()
const { projects, pending: projectsPending, error: projectsError } = useStrapiProjects()
const { experiences, error: experiencesError } = useStrapiExperience()
const { skills, error: skillsError } = useStrapiSkills()

const hasCmsWarning = computed(() => Boolean(profileError.value || projectsError.value || experiencesError.value || skillsError.value))

usePortfolioSeo({
  profile: profile.value,
  path: '/',
  title: 'Lucas Rodrigues - Desenhista Cadista, Projetista CAD/BIM e Renderização',
  description:
    'Portfólio profissional de Lucas Rodrigues: desenho técnico arquitetônico, projetos CAD/BIM, modelagem 3D, renderização, interiores, reformas, restauro, paisagismo e ambientes industriais.'
})
</script>

<template>
  <div class="min-h-screen bg-graphite-900 text-warm-50">
    <SiteHeader :profile="profile" />

    <main>
      <SectionsHeroSection :profile="profile" />

      <div
        v-if="hasCmsWarning"
        class="border-y border-amberline-300/20 bg-amberline-400/10 px-5 py-3 text-center text-sm text-warm-100/80"
      >
        Strapi não conectado ou sem resposta no momento. O site está usando conteúdo fallback para desenvolvimento.
      </div>

      <SectionsAboutSection :profile="profile" />
      <SectionsServicesSection />
      <SectionsToolsSection :skills="skills" />
      <SectionsPortfolioSection :projects="projects" :pending="projectsPending" :error="projectsError" />
      <SectionsExperienceSection :experiences="experiences" />
      <SectionsClientsSection />
      <SectionsDifferentialsSection />
      <SectionsContactSection :profile="profile" />
    </main>

    <footer class="border-t border-warm-100/10 bg-graphite-950 py-8">
      <div class="section-shell flex flex-col gap-3 text-sm text-concrete-100/62 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ new Date().getFullYear() }} Lucas Rodrigues. Portfólio CAD/BIM e renderização arquitetônica.</p>
        <a href="#inicio" class="font-semibold text-amberline-300 transition hover:text-amberline-300/76">
          Voltar ao topo
        </a>
      </div>
    </footer>
  </div>
</template>
