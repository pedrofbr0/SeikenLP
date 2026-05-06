<script setup lang="ts">
import { BriefcaseBusiness, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-vue-next'
import type { Profile } from '~/types/profile'

const props = defineProps<{
  profile: Profile
}>()

const isPlaceholder = (value?: string) => !value || /^\[.+\]$/.test(value)

const emailHref = computed(() => (isPlaceholder(props.profile.email) ? undefined : `mailto:${props.profile.email}`))
const whatsappHref = computed(() =>
  isPlaceholder(props.profile.whatsapp)
    ? undefined
    : `https://wa.me/${String(props.profile.whatsapp).replace(/\D/g, '')}`
)
const linkedinHref = computed(() => (isPlaceholder(props.profile.linkedin) ? undefined : props.profile.linkedin))
const portfolioHref = computed(() => (isPlaceholder(props.profile.portfolioUrl) ? undefined : props.profile.portfolioUrl))
</script>

<template>
  <section id="contato" class="relative overflow-hidden bg-graphite-950 py-24 sm:py-28">
    <div class="absolute inset-x-0 top-0 h-px material-line opacity-70" />
    <div class="section-shell">
      <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div
          v-motion
          :initial="{ opacity: 0, y: 26 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 620 } }"
        >
          <UiBadge tone="amber">Contato</UiBadge>
          <h2 class="mt-5 text-balance text-4xl font-semibold leading-tight text-warm-50 sm:text-5xl">
            Precisa transformar seu projeto em uma apresentação técnica e visual de alto impacto?
          </h2>
          <p class="mt-6 max-w-2xl text-base leading-8 text-concrete-100/78 sm:text-lg">
            Entre em contato para alinhar escopo, referências, prazos e materiais disponíveis. Os campos pessoais estão preparados para serem preenchidos pelo Strapi assim que os dados oficiais forem definidos.
          </p>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <UiButton :href="whatsappHref" :disabled="!whatsappHref" external size="lg">
              <template #icon>
                <MessageCircle class="h-5 w-5" />
              </template>
              WhatsApp
            </UiButton>
            <UiButton :href="emailHref" :disabled="!emailHref" external variant="secondary" size="lg">
              <template #icon>
                <Mail class="h-5 w-5" />
              </template>
              E-mail
            </UiButton>
            <UiButton :href="linkedinHref" :disabled="!linkedinHref" external variant="secondary" size="lg">
              <template #icon>
                <Linkedin class="h-5 w-5" />
              </template>
              LinkedIn
            </UiButton>
            <UiButton :href="portfolioHref" :disabled="!portfolioHref" external variant="secondary" size="lg">
              <template #icon>
                <BriefcaseBusiness class="h-5 w-5" />
              </template>
              Portfólio
            </UiButton>
          </div>
        </div>

        <div class="rounded-lg border border-warm-100/10 bg-warm-100/[0.055] p-6 shadow-architectural">
          <h3 class="text-xl font-semibold text-warm-50">Dados de contato</h3>
          <dl class="mt-6 space-y-5">
            <div class="flex gap-4">
              <Phone class="mt-1 h-5 w-5 shrink-0 text-amberline-300" />
              <div>
                <dt class="text-sm text-concrete-100/55">Telefone / WhatsApp</dt>
                <dd class="mt-1 font-medium text-warm-50">{{ profile.phone || '[Telefone]' }}</dd>
              </div>
            </div>
            <div class="flex gap-4">
              <Mail class="mt-1 h-5 w-5 shrink-0 text-amberline-300" />
              <div>
                <dt class="text-sm text-concrete-100/55">E-mail</dt>
                <dd class="mt-1 font-medium text-warm-50">{{ profile.email || '[E-mail]' }}</dd>
              </div>
            </div>
            <div class="flex gap-4">
              <MapPin class="mt-1 h-5 w-5 shrink-0 text-amberline-300" />
              <div>
                <dt class="text-sm text-concrete-100/55">Localização</dt>
                <dd class="mt-1 font-medium text-warm-50">{{ profile.location || '[Cidade, UF]' }}</dd>
              </div>
            </div>
            <div class="flex gap-4">
              <Linkedin class="mt-1 h-5 w-5 shrink-0 text-amberline-300" />
              <div>
                <dt class="text-sm text-concrete-100/55">LinkedIn</dt>
                <dd class="mt-1 font-medium text-warm-50">{{ profile.linkedin || '[LinkedIn]' }}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
