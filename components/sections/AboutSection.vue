<script setup lang="ts">
import { DraftingCompass, FileStack, Ruler } from 'lucide-vue-next'
import type { Profile } from '~/types/profile'

defineProps<{
  profile: Profile
}>()

const pillars = [
  {
    icon: Ruler,
    title: 'Leitura precisa do espaço',
    text: 'Levantamento, medição e transformação de informações in loco em base técnica confiável.'
  },
  {
    icon: DraftingCompass,
    title: 'Projeto claro para execução',
    text: 'Desenhos, pranchas e documentação organizados para apoiar arquitetos, equipes e clientes.'
  },
  {
    icon: FileStack,
    title: 'Visualização de alto impacto',
    text: 'Modelos 3D e renders que comunicam materialidade, luz, proporção e intenção de projeto.'
  }
]
</script>

<template>
  <section id="sobre" class="relative py-24 sm:py-28">
    <div class="section-shell">
      <div class="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <UiSectionTitle
          eyebrow="Sobre"
          title="Técnica, organização e imagem a serviço da arquitetura."
          description="Lucas atua no ponto em que desenho técnico, documentação e visualização 3D precisam conversar com clareza. O resultado é um portfólio menos parecido com currículo e mais próximo de uma apresentação arquitetônica profissional."
        />

        <div
          v-motion
          :initial="{ opacity: 0, y: 26 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 620 } }"
          class="space-y-6 text-base leading-8 text-concrete-100/82"
        >
          <p>
            Desenhista Cadista com mais de 10 anos de experiência em desenho técnico, projetos arquitetônicos, modelagem 3D e renderização. Sua atuação envolve desde o levantamento e medição in loco até o desenvolvimento de pranchas, atualização de desenhos, modelagem de ambientes e revisão visual para apresentação ou plotagem.
          </p>
          <p>
            Ao apoiar equipes de arquitetura em reformas, restauros, interiores, paisagismo e ambientes industriais, Lucas contribui para que ideias ganhem documentação clara, imagens consistentes e uma leitura mais segura antes da execução.
          </p>

          <div class="grid gap-4 pt-4 sm:grid-cols-3">
            <div
              v-for="pillar in pillars"
              :key="pillar.title"
              class="border-t border-warm-100/12 pt-5"
            >
              <component :is="pillar.icon" class="h-6 w-6 text-amberline-300" />
              <h3 class="mt-4 text-base font-semibold text-warm-50">{{ pillar.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-concrete-100/72">{{ pillar.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
