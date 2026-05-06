<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import type { Profile } from '~/types/profile'

defineProps<{
  profile: Profile
}>()

const isOpen = ref(false)

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' }
]
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-40 border-b border-warm-100/10 bg-graphite-950/72 backdrop-blur-xl">
    <nav class="section-shell flex min-h-16 items-center justify-between gap-6" aria-label="Navegação principal">
      <NuxtLink to="/" class="group inline-flex items-center gap-3" aria-label="Lucas Rodrigues - início">
        <span class="grid h-10 w-10 place-items-center rounded-md border border-amberline-300/35 bg-amberline-400/12 text-sm font-bold text-amberline-300">
          LR
        </span>
        <span class="hidden sm:block">
          <span class="block text-sm font-semibold text-warm-50">{{ profile.name }}</span>
          <span class="block text-xs text-concrete-100/62">CAD/BIM e Renderização</span>
        </span>
      </NuxtLink>

      <div class="hidden items-center gap-1 lg:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="rounded-md px-4 py-2 text-sm font-medium text-warm-100/76 transition hover:bg-warm-100/8 hover:text-amberline-300"
        >
          {{ item.label }}
        </a>
      </div>

      <div class="hidden lg:block">
        <UiButton href="#contato" variant="secondary" size="sm">Entrar em contato</UiButton>
      </div>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-warm-100/12 text-warm-50 lg:hidden"
        :aria-label="isOpen ? 'Fechar menu' : 'Abrir menu'"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <X v-if="isOpen" class="h-5 w-5" />
        <Menu v-else class="h-5 w-5" />
      </button>
    </nav>

    <div v-if="isOpen" class="border-t border-warm-100/10 bg-graphite-950/96 lg:hidden">
      <div class="section-shell grid gap-2 py-4">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="rounded-md px-3 py-3 text-sm font-medium text-warm-100/82 hover:bg-warm-100/8"
          @click="isOpen = false"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </header>
</template>
