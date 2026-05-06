<script setup lang="ts">
import { clients, sectors } from '~/data/fallback'
</script>

<template>
  <section class="bg-warm-100 py-20 text-graphite-950 sm:py-24">
    <div class="section-shell">
      <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <UiBadge tone="dark">Clientes e setores</UiBadge>
          <h2 class="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            Experiência com empresas e contextos de alta exigência técnica.
          </h2>
          <p class="mt-5 text-base leading-8 text-graphite-700">
            Quando logos oficiais não estiverem disponíveis, a seção funciona com nomes em composição editorial para manter a credibilidade sem depender de arquivos de marca.
          </p>
        </div>

        <div class="space-y-8">
          <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <span
              v-for="client in clients"
              :key="client"
              class="grid min-h-20 place-items-center rounded-lg border border-graphite-900/10 bg-white/62 px-4 text-center text-sm font-semibold text-graphite-800 shadow-sm"
            >
              {{ client }}
            </span>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="sector in sectors"
              :key="sector"
              class="rounded-full border border-graphite-900/12 bg-graphite-950 px-4 py-2 text-sm font-semibold text-warm-50"
            >
              {{ sector }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
