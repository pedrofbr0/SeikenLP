<script setup lang="ts">
withDefaults(
  defineProps<{
    tone?: 'light' | 'amber' | 'dark'
  }>(),
  {
    tone: 'light'
  }
)
</script>

<template>
  <span
    :class="[
      'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]',
      tone === 'amber' && 'border-amberline-300/45 bg-amberline-400/12 text-amberline-300',
      tone === 'light' && 'border-warm-100/15 bg-warm-100/8 text-warm-100/85',
      tone === 'dark' && 'border-graphite-700 bg-graphite-900 text-concrete-100'
    ]"
  >
    <slot />
  </span>
</template>
