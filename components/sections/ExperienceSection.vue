<script setup lang="ts">
import { Building2, CheckCircle2 } from 'lucide-vue-next'
import type { Experience } from '~/types/experience'

defineProps<{
  experiences: Experience[]
}>()
</script>

<template>
  <section id="experiencia" class="py-24 sm:py-28">
    <div class="section-shell">
      <UiSectionTitle
        eyebrow="Experiência"
        title="Atuação contínua em arquitetura, documentação e visualização."
        description="A experiência profissional é apresentada como linha editorial, valorizando responsabilidades, setores atendidos e participação direta no fluxo técnico dos projetos."
      />

      <div class="mt-12 space-y-8">
        <article
          v-for="experience in experiences"
          :key="experience.id"
          class="grid gap-8 border-l border-amberline-300/50 pl-6 md:grid-cols-[0.42fr_1fr] md:pl-8"
        >
          <div>
            <span class="inline-flex h-12 w-12 items-center justify-center rounded-md bg-amberline-400/12 text-amberline-300 ring-1 ring-amberline-300/25">
              <Building2 class="h-6 w-6" />
            </span>
            <p class="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-amberline-300">
              {{ experience.startDate }} - {{ experience.current ? 'Atual' : experience.endDate }}
            </p>
            <h3 class="mt-3 text-2xl font-semibold text-warm-50">{{ experience.company }}</h3>
            <p class="mt-2 text-concrete-100/72">{{ experience.role }}</p>
          </div>

          <div class="rounded-lg border border-warm-100/10 bg-warm-100/[0.055] p-6">
            <p class="text-base leading-8 text-concrete-100/82">{{ experience.description }}</p>
            <ul class="mt-6 grid gap-3 sm:grid-cols-2">
              <li
                v-for="responsibility in experience.responsibilities"
                :key="responsibility"
                class="flex gap-3 text-sm leading-7 text-concrete-100/76"
              >
                <CheckCircle2 class="mt-1 h-4 w-4 shrink-0 text-amberline-300" />
                <span>{{ responsibility }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
