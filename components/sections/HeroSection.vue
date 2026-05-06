<script setup lang="ts">
import { ArrowDown, MessageCircle, MoveRight } from 'lucide-vue-next'
import type { Profile } from '~/types/profile'

const props = defineProps<{
  profile: Profile
}>()

const heroImage = computed(() => props.profile.heroImage?.url || '/images/hero-render.svg')
</script>

<template>
  <section id="inicio" class="relative min-h-[92svh] overflow-hidden pt-16">
    <NuxtImg
      :src="heroImage"
      :alt="profile.heroImage?.alt || 'Render arquitetônico premium com estética industrial contemporânea'"
      class="absolute inset-0 h-full w-full object-cover"
      sizes="100vw"
      preload
      fetchpriority="high"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-graphite-950 via-graphite-950/78 to-graphite-950/25" />
    <div class="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-graphite-950/28" />
    <div class="absolute inset-0 bg-fine-grid bg-[length:46px_46px] opacity-35" />

    <div class="section-shell relative flex min-h-[calc(92svh-4rem)] items-center py-16">
      <div
        v-motion
        :initial="{ opacity: 0, y: 28 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 760, ease: 'easeOut' } }"
        class="max-w-4xl"
      >
        <UiBadge tone="amber">Portfólio CAD/BIM e visualização arquitetônica</UiBadge>
        <h1 class="mt-7 text-balance text-5xl font-semibold leading-[1.02] text-warm-50 sm:text-6xl lg:text-7xl">
          {{ profile.name }}
        </h1>
        <p class="mt-5 max-w-3xl text-xl font-medium leading-8 text-amberline-300 sm:text-2xl">
          {{ profile.headline }}
        </p>
        <p class="mt-6 max-w-2xl text-base leading-8 text-warm-100/82 sm:text-lg">
          Precisão técnica e visualização arquitetônica para transformar ideias em projetos claros, executáveis e visualmente impactantes.
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <UiButton href="#portfolio" size="lg">
            <template #icon>
              <MoveRight class="h-5 w-5" />
            </template>
            Ver portfólio
          </UiButton>
          <UiButton href="#contato" variant="secondary" size="lg">
            <template #icon>
              <MessageCircle class="h-5 w-5" />
            </template>
            Entrar em contato
          </UiButton>
        </div>

        <div class="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
          <div class="border-l border-amberline-300/55 bg-graphite-950/38 px-4 py-3 backdrop-blur-sm">
            <strong class="block text-2xl font-semibold text-warm-50">10+</strong>
            <span class="text-sm text-concrete-100/72">anos de experiência</span>
          </div>
          <div class="border-l border-amberline-300/55 bg-graphite-950/38 px-4 py-3 backdrop-blur-sm">
            <strong class="block text-2xl font-semibold text-warm-50">CAD/BIM</strong>
            <span class="text-sm text-concrete-100/72">documentação técnica</span>
          </div>
          <div class="border-l border-amberline-300/55 bg-graphite-950/38 px-4 py-3 backdrop-blur-sm">
            <strong class="block text-2xl font-semibold text-warm-50">3D</strong>
            <span class="text-sm text-concrete-100/72">modelagem e renderização</span>
          </div>
        </div>
      </div>
    </div>

    <a
      href="#sobre"
      class="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-warm-100/12 bg-graphite-950/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-warm-100/74 backdrop-blur-md transition hover:text-amberline-300 md:inline-flex"
    >
      <ArrowDown class="h-4 w-4" />
      Explorar
    </a>
  </section>
</template>
