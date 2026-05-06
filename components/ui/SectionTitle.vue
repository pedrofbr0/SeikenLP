<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    description?: string
    align?: 'left' | 'center'
  }>(),
  {
    align: 'left'
  }
)
</script>

<template>
  <div :class="['max-w-3xl', align === 'center' && 'mx-auto text-center']">
    <UiBadge v-if="eyebrow" tone="amber">
      {{ eyebrow }}
    </UiBadge>
    <h2 class="mt-5 text-balance text-3xl font-semibold leading-tight text-warm-50 sm:text-4xl lg:text-5xl">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-5 text-base leading-8 text-concrete-100/78 sm:text-lg">
      {{ description }}
    </p>
  </div>
</template>
