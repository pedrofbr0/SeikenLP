<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()

defineEmits<{
  view: [project: Project]
}>()
</script>

<template>
  <article
    class="group overflow-hidden rounded-lg border border-warm-100/10 bg-graphite-900/72 shadow-architectural transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-amberline-300/45"
  >
    <button
      type="button"
      class="block w-full text-left"
      :aria-label="`Abrir projeto ${project.title}`"
      @click="$emit('view', project)"
    >
      <div class="relative aspect-[4/3] overflow-hidden bg-graphite-800">
        <NuxtImg
          :src="project.coverImage?.url || '/images/project-cad.svg'"
          :alt="project.coverImage?.alt || project.title"
          class="h-full w-full object-cover transition duration-700 ease-premium group-hover:scale-105"
          loading="lazy"
          sizes="sm:100vw md:50vw lg:33vw"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-graphite-950/78 via-graphite-950/12 to-transparent" />
        <UiBadge class="absolute left-4 top-4" tone="amber">
          {{ project.category }}
        </UiBadge>
      </div>

      <div class="p-5">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.16em] text-concrete-100/55">
              {{ project.sector || project.client || 'Projeto técnico' }}
            </p>
            <h3 class="mt-2 text-xl font-semibold leading-snug text-warm-50">
              {{ project.title }}
            </h3>
          </div>
          <span
            class="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-warm-100/10 text-amberline-300 transition group-hover:border-amberline-300/60 group-hover:bg-amberline-400/12"
            aria-hidden="true"
          >
            <ArrowUpRight class="h-5 w-5" />
          </span>
        </div>

        <p class="mt-4 line-clamp-3 text-sm leading-7 text-concrete-100/74">
          {{ project.shortDescription }}
        </p>

        <div class="mt-5 flex flex-wrap gap-2">
          <span
            v-for="software in project.softwareUsed.slice(0, 3)"
            :key="software"
            class="rounded-full bg-warm-100/8 px-3 py-1 text-xs font-medium text-warm-100/78"
          >
            {{ software }}
          </span>
        </div>
      </div>
    </button>
  </article>
</template>
