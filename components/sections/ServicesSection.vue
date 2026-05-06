<script setup lang="ts">
import {
  Building2,
  Cuboid,
  Factory,
  FileCheck2,
  Hammer,
  MapPinned,
  PenTool,
  Trees
} from 'lucide-vue-next'
import { services } from '~/data/fallback'

const icons = [PenTool, Building2, Cuboid, FileCheck2, FileCheck2, MapPinned, Hammer, Factory, Trees]
</script>

<template>
  <section id="servicos" class="bg-graphite-950/58 py-24 sm:py-28">
    <div class="section-shell">
      <UiSectionTitle
        eyebrow="Serviços"
        title="Áreas de atuação com foco técnico e apresentação visual."
        description="Do desenho técnico à renderização, a entrega combina rigor de documentação com uma estética arquitetônica capaz de valorizar cada decisão de projeto."
      />

      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <UiCard
          v-for="(service, index) in services"
          :key="service.title"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 520, delay: index * 45 } }"
        >
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-md bg-amberline-400/12 text-amberline-300 ring-1 ring-amberline-300/25 transition group-hover:bg-amberline-400/18">
            <component :is="icons[index]" class="h-6 w-6" />
          </span>
          <h3 class="mt-6 text-lg font-semibold leading-snug text-warm-50">{{ service.title }}</h3>
          <p class="mt-4 text-sm leading-7 text-concrete-100/72">{{ service.description }}</p>
        </UiCard>
      </div>
    </div>
  </section>
</template>
