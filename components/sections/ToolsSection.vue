<script setup lang="ts">
import { Box, DraftingCompass, Image, Layers3, PenLine } from 'lucide-vue-next'
import type { Skill } from '~/types/skill'

defineProps<{
  skills: Skill[]
}>()

const iconMap: Record<string, any> = {
  autocad: DraftingCompass,
  revit: Layers3,
  sketchup: Box,
  lumion: Image,
  photoshop: PenLine
}

const iconFor = (name: string) => iconMap[name.toLowerCase().replace(/\s+/g, '')] || DraftingCompass
</script>

<template>
  <section class="py-20 sm:py-24">
    <div class="section-shell">
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <UiSectionTitle
          eyebrow="Ferramentas"
          title="Softwares que sustentam o fluxo técnico e visual."
          description="A combinação entre CAD, BIM, modelagem, renderização e pós-produção permite construir documentações precisas e imagens com leitura arquitetônica sofisticada."
        />

        <div class="grid gap-3 sm:grid-cols-2">
          <div
            v-for="skill in skills"
            :key="skill.id"
            class="flex items-center gap-4 rounded-lg border border-warm-100/10 bg-warm-100/[0.055] p-4 transition hover:border-amberline-300/45 hover:bg-warm-100/[0.085]"
          >
            <span class="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-graphite-950 text-amberline-300">
              <component :is="iconFor(skill.name)" class="h-6 w-6" />
            </span>
            <span>
              <strong class="block text-base font-semibold text-warm-50">{{ skill.name }}</strong>
              <span class="text-sm text-concrete-100/68">{{ skill.level || skill.category }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
