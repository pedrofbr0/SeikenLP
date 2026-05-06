<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { differentials } from '~/data/fallback'
</script>

<template>
  <section class="py-24 sm:py-28">
    <div class="section-shell">
      <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <UiSectionTitle
          eyebrow="Diferenciais"
          title="O valor está na precisão do detalhe e na clareza da entrega."
          description="A atuação de Lucas combina repertório técnico, disciplina de documentação e sensibilidade visual para apoiar projetos em diferentes escalas."
        />

        <div class="grid gap-3 sm:grid-cols-2">
          <div
            v-for="item in differentials"
            :key="item"
            class="flex gap-4 rounded-lg border border-warm-100/10 bg-warm-100/[0.055] p-4"
          >
            <span class="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amberline-400/16 text-amberline-300">
              <Check class="h-4 w-4" />
            </span>
            <p class="text-sm leading-7 text-concrete-100/78">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
