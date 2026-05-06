<script setup lang="ts">
import { ArrowLeft, Calendar, Layers3 } from 'lucide-vue-next'

const route = useRoute()
const slug = String(route.params.slug)
const { profile } = useStrapiProfile()
const { project, pending, error } = useStrapiProject(slug)

usePortfolioSeo({
  profile: profile.value,
  project: project.value || undefined,
  path: `/projetos/${slug}`,
  title: project.value?.seoTitle || `${project.value?.title || 'Projeto'} - Lucas Rodrigues`,
  description:
    project.value?.seoDescription ||
    project.value?.shortDescription ||
    'Projeto do portfólio de Lucas Rodrigues com desenho técnico, CAD/BIM, modelagem 3D e renderização arquitetônica.',
  image: project.value?.coverImage?.url
})
</script>

<template>
  <div class="min-h-screen bg-graphite-900 text-warm-50">
    <SiteHeader :profile="profile" />

    <main class="pt-16">
      <section v-if="pending" class="section-shell py-24">
        <div class="h-[34rem] animate-pulse rounded-lg bg-warm-100/8" />
      </section>

      <section v-else-if="project" class="relative">
        <div class="relative min-h-[62svh] overflow-hidden">
          <NuxtImg
            :src="project.coverImage?.url || '/images/project-cad.svg'"
            :alt="project.coverImage?.alt || project.title"
            class="absolute inset-0 h-full w-full object-cover"
            sizes="100vw"
            preload
          />
          <div class="absolute inset-0 bg-gradient-to-r from-graphite-950 via-graphite-950/78 to-graphite-950/20" />
          <div class="absolute inset-0 bg-gradient-to-t from-graphite-900 via-transparent to-transparent" />
          <div class="section-shell relative flex min-h-[62svh] items-end py-14">
            <div class="max-w-4xl">
              <UiButton href="/#portfolio" variant="secondary" size="sm">
                <template #icon>
                  <ArrowLeft class="h-4 w-4" />
                </template>
                Voltar ao portfólio
              </UiButton>
              <UiBadge class="mt-8" tone="amber">{{ project.category }}</UiBadge>
              <h1 class="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {{ project.title }}
              </h1>
              <p class="mt-5 max-w-3xl text-lg leading-8 text-warm-100/82">
                {{ project.shortDescription }}
              </p>
            </div>
          </div>
        </div>

        <section class="section-shell py-16 sm:py-20">
          <div class="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <aside class="space-y-6">
              <div class="rounded-lg border border-warm-100/10 bg-warm-100/[0.055] p-6">
                <h2 class="text-sm font-semibold uppercase tracking-[0.16em] text-warm-50/78">Informações</h2>
                <dl class="mt-5 space-y-4 text-sm text-concrete-100/76">
                  <div v-if="project.year" class="flex items-center gap-3">
                    <Calendar class="h-4 w-4 text-amberline-300" />
                    <dt class="sr-only">Ano</dt>
                    <dd>{{ project.year }}</dd>
                  </div>
                  <div v-if="project.sector" class="flex items-center gap-3">
                    <Layers3 class="h-4 w-4 text-amberline-300" />
                    <dt class="sr-only">Setor</dt>
                    <dd>{{ project.sector }}</dd>
                  </div>
                </dl>

                <div class="mt-7">
                  <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-warm-50/78">Softwares</h3>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <UiBadge v-for="software in project.softwareUsed" :key="software">{{ software }}</UiBadge>
                  </div>
                </div>

                <div class="mt-7">
                  <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-warm-50/78">Serviços</h3>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <UiBadge v-for="service in project.servicesProvided" :key="service">{{ service }}</UiBadge>
                  </div>
                </div>
              </div>
            </aside>

            <article>
              <p class="text-lg leading-9 text-concrete-100/84">{{ project.fullDescription }}</p>

              <div v-if="project.highlights.length" class="mt-10">
                <h2 class="text-2xl font-semibold text-warm-50">Destaques do projeto</h2>
                <ul class="mt-5 grid gap-3 sm:grid-cols-2">
                  <li
                    v-for="highlight in project.highlights"
                    :key="highlight"
                    class="border-l border-amberline-300/55 bg-warm-100/[0.045] px-4 py-3 text-sm leading-7 text-concrete-100/78"
                  >
                    {{ highlight }}
                  </li>
                </ul>
              </div>

              <div v-if="project.gallery.length" class="mt-12 grid gap-4 sm:grid-cols-2">
                <NuxtImg
                  v-for="image in project.gallery"
                  :key="image.url"
                  :src="image.url"
                  :alt="image.alt || project.title"
                  class="aspect-[4/3] w-full rounded-lg object-cover"
                  loading="lazy"
                  sizes="sm:100vw md:50vw"
                />
              </div>
            </article>
          </div>
        </section>
      </section>

      <section v-else class="section-shell py-24">
        <div class="max-w-2xl">
          <UiBadge tone="amber">Projeto não encontrado</UiBadge>
          <h1 class="mt-5 text-4xl font-semibold">Este projeto ainda não está publicado.</h1>
          <p class="mt-5 leading-8 text-concrete-100/78">
            Verifique se o slug está correto no Strapi ou volte para a seção de portfólio.
          </p>
          <UiButton href="/#portfolio" class="mt-8" variant="secondary">Voltar ao portfólio</UiButton>
        </div>
      </section>

      <div
        v-if="error"
        class="border-y border-amberline-300/20 bg-amberline-400/10 px-5 py-3 text-center text-sm text-warm-100/80"
      >
        O Strapi não respondeu. Quando o CMS estiver conectado, esta página buscará o projeto real pelo slug.
      </div>
    </main>
  </div>
</template>
