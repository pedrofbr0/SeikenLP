<script setup lang="ts">
import { SlidersHorizontal } from 'lucide-vue-next'
import type { Project } from '~/types/project'

const props = defineProps<{
  projects: Project[]
  pending?: boolean
  error?: unknown
}>()

const selectedCategory = ref('Todos')
const selectedProject = ref<Project | null>(null)

const categories = computed(() => ['Todos', ...new Set(props.projects.map((project) => project.category).filter(Boolean))])

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Todos') return props.projects
  return props.projects.filter((project) => project.category === selectedCategory.value)
})
</script>

<template>
  <section id="portfolio" class="relative overflow-hidden bg-graphite-950 py-24 sm:py-28">
    <div class="absolute inset-x-0 top-0 h-px material-line opacity-70" />
    <div class="section-shell">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <UiSectionTitle
          eyebrow="Portfólio"
          title="Projetos selecionados carregados pelo Strapi CMS."
          description="A vitrine foi pensada para destacar renders, documentação CAD/BIM, interiores, paisagismo, reformas e ambientes industriais com imagens otimizadas e navegação fluida."
        />

        <div class="flex flex-wrap items-center gap-2">
          <span class="inline-flex items-center gap-2 pr-2 text-xs font-semibold uppercase tracking-[0.16em] text-concrete-100/60">
            <SlidersHorizontal class="h-4 w-4 text-amberline-300" />
            Filtro
          </span>
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            class="rounded-full border px-4 py-2 text-sm font-semibold transition"
            :class="
              selectedCategory === category
                ? 'border-amberline-300 bg-amberline-400/14 text-amberline-300'
                : 'border-warm-100/12 bg-warm-100/5 text-warm-100/72 hover:border-amberline-300/50'
            "
            @click="selectedCategory = String(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div v-if="error" class="mt-8 rounded-lg border border-amberline-300/25 bg-amberline-400/10 p-4 text-sm text-warm-100/78">
        O Strapi ainda não respondeu. A página está exibindo conteúdo demonstrativo para manter a experiência navegável.
      </div>

      <div v-if="pending" class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="item in 3" :key="item" class="h-96 animate-pulse rounded-lg bg-warm-100/8" />
      </div>

      <div v-else class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <UiProjectCard
          v-for="(project, index) in filteredProjects"
          :key="project.slug"
          v-motion
          :project="project"
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 540, delay: index * 55 } }"
          @view="selectedProject = $event"
        />
      </div>
    </div>

    <LazyUiProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </section>
</template>
