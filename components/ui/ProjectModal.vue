<script setup lang="ts">
import { Calendar, Layers3, X } from 'lucide-vue-next'
import type { Project } from '~/types/project'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  close: []
}>()

const activeImage = ref(props.project.coverImage?.url || props.project.gallery[0]?.url || '/images/project-cad.svg')

const images = computed(() => {
  const cover = props.project.coverImage ? [props.project.coverImage] : []
  return [...cover, ...props.project.gallery]
})

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-50 overflow-y-auto bg-graphite-950/84 px-4 py-6 backdrop-blur-md sm:py-10"
      role="dialog"
      aria-modal="true"
      :aria-label="project.title"
      @click.self="$emit('close')"
    >
      <div class="mx-auto max-w-6xl overflow-hidden rounded-lg border border-warm-100/12 bg-graphite-900 shadow-architectural">
        <div class="flex items-center justify-between border-b border-warm-100/10 px-5 py-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.16em] text-amberline-300">
              {{ project.category }}
            </p>
            <h2 class="mt-1 text-xl font-semibold text-warm-50 sm:text-2xl">{{ project.title }}</h2>
          </div>
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-warm-100/10 text-warm-50 transition hover:border-amberline-300/60 hover:text-amberline-300"
            aria-label="Fechar projeto"
            @click="$emit('close')"
          >
            <X class="h-5 w-5" />
          </button>
        </div>

        <div class="grid gap-0 lg:grid-cols-[1.35fr_0.85fr]">
          <div class="bg-graphite-950">
            <div class="relative aspect-[16/10] overflow-hidden">
              <NuxtImg
                :src="activeImage"
                :alt="project.coverImage?.alt || project.title"
                class="h-full w-full object-cover"
                sizes="sm:100vw lg:60vw"
              />
            </div>
            <div v-if="images.length > 1" class="flex gap-3 overflow-x-auto border-t border-warm-100/10 p-4">
              <button
                v-for="image in images"
                :key="image.url"
                type="button"
                class="h-20 w-28 shrink-0 overflow-hidden rounded-md border transition"
                :class="activeImage === image.url ? 'border-amberline-300' : 'border-warm-100/10 opacity-70 hover:opacity-100'"
                :aria-label="`Ver imagem ${image.alt || project.title}`"
                @click="activeImage = image.url"
              >
                <NuxtImg :src="image.url" :alt="image.alt || project.title" class="h-full w-full object-cover" loading="lazy" />
              </button>
            </div>
          </div>

          <div class="space-y-7 p-6 sm:p-8">
            <div class="flex flex-wrap gap-3 text-sm text-concrete-100/78">
              <span v-if="project.year" class="inline-flex items-center gap-2">
                <Calendar class="h-4 w-4 text-amberline-300" />
                {{ project.year }}
              </span>
              <span v-if="project.sector" class="inline-flex items-center gap-2">
                <Layers3 class="h-4 w-4 text-amberline-300" />
                {{ project.sector }}
              </span>
            </div>

            <p class="text-base leading-8 text-concrete-100/82">
              {{ project.fullDescription }}
            </p>

            <div v-if="project.highlights.length">
              <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-warm-50/78">Destaques</h3>
              <ul class="mt-4 space-y-3">
                <li
                  v-for="highlight in project.highlights"
                  :key="highlight"
                  class="border-l border-amberline-300/55 pl-4 text-sm leading-7 text-concrete-100/78"
                >
                  {{ highlight }}
                </li>
              </ul>
            </div>

            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-warm-50/78">Softwares</h3>
                <div class="mt-3 flex flex-wrap gap-2">
                  <UiBadge v-for="software in project.softwareUsed" :key="software">{{ software }}</UiBadge>
                </div>
              </div>
              <div>
                <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-warm-50/78">Serviços</h3>
                <div class="mt-3 flex flex-wrap gap-2">
                  <UiBadge v-for="service in project.servicesProvided" :key="service">{{ service }}</UiBadge>
                </div>
              </div>
            </div>

            <UiButton :href="`/projetos/${project.slug}`" variant="secondary">
              Abrir página do projeto
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
