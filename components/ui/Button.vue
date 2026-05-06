<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    href?: string
    external?: boolean
    variant?: 'primary' | 'secondary' | 'ghost' | 'dark'
    size?: 'sm' | 'md' | 'lg'
    ariaLabel?: string
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    external: false,
    disabled: false
  }
)

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-300 ease-premium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amberline-300 disabled:pointer-events-none disabled:opacity-45'

const variantClasses = computed(() => {
  const variants = {
    primary:
      'bg-amberline-400 text-graphite-950 shadow-glow hover:-translate-y-0.5 hover:bg-amberline-300 hover:shadow-architectural',
    secondary:
      'border border-warm-100/18 bg-warm-100/10 text-warm-50 backdrop-blur-md hover:-translate-y-0.5 hover:border-amberline-300/70 hover:bg-warm-100/16',
    ghost: 'text-warm-50 hover:bg-warm-100/10 hover:text-amberline-300',
    dark: 'bg-graphite-950 text-warm-50 hover:-translate-y-0.5 hover:bg-graphite-800'
  }

  return variants[props.variant]
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'min-h-9 px-3 text-sm',
    md: 'min-h-11 px-5 text-sm',
    lg: 'min-h-12 px-6 text-base'
  }

  return sizes[props.size]
})

const classes = computed(() => [baseClasses, variantClasses.value, sizeClasses.value])
</script>

<template>
  <NuxtLink
    v-if="href && !external"
    :to="href"
    :class="classes"
    :aria-label="ariaLabel"
  >
    <slot name="icon" />
    <span><slot /></span>
  </NuxtLink>

  <a
    v-else-if="href && external"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="classes"
    :aria-label="ariaLabel"
  >
    <slot name="icon" />
    <span><slot /></span>
  </a>

  <button
    v-else
    type="button"
    :class="classes"
    :aria-label="ariaLabel"
    :disabled="disabled"
  >
    <slot name="icon" />
    <span><slot /></span>
  </button>
</template>
