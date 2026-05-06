# Lucas Rodrigues Portfolio

Landing page premium em Nuxt 3 para o portfólio digital de Lucas Rodrigues, Desenhista Cadista e Projetista CAD/BIM.

## Stack

- Nuxt 3, Vue 3 e TypeScript
- Tailwind CSS
- Nuxt Image
- Strapi CMS headless
- VueUse Motion
- SEO com `useSeoMeta`, Open Graph, Twitter Cards, canonical e Schema.org
- Sitemap e robots via módulos Nuxt

## Identidade visual

A direção visual combina grafite, madeira, concreto, bege quente e âmbar, inspirada em render arquitetônico industrial premium: tijolo aparente, madeira natural, mármore preto, iluminação indireta e profundidade espacial. A primeira dobra usa imagem full-bleed com overlay escuro, evitando aparência de currículo e priorizando leitura de portfólio arquitetônico.

## Arquitetura

```txt
components/
  sections/
    AboutSection.vue
    ClientsSection.vue
    ContactSection.vue
    DifferentialsSection.vue
    ExperienceSection.vue
    HeroSection.vue
    PortfolioSection.vue
    ServicesSection.vue
    ToolsSection.vue
  ui/
    Badge.vue
    Button.vue
    Card.vue
    ProjectCard.vue
    ProjectModal.vue
    SectionTitle.vue
composables/
  useSeo.ts
  useStrapi.ts
  useStrapiExperience.ts
  useStrapiProfile.ts
  useStrapiProjects.ts
  useStrapiSkills.ts
data/
  fallback.ts
pages/
  index.vue
  projetos/[slug].vue
server/api/__sitemap__/urls.ts
types/
public/images/
docs/
```

## Rodando localmente

```bash
npm install
npm run dev
```

Configure o Strapi em `.env`:

```bash
NUXT_PUBLIC_SITE_URL=https://lucasrodriguescad.com.br
NUXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_TOKEN=
```

Sem Strapi, a aplicação usa conteúdo fallback para desenvolvimento e exibe um aviso discreto.

## Integração Strapi

O app consome:

- `/api/profile?populate[profileImage]=true&populate[heroImage]=true`
- `/api/projects?populate[coverImage]=true&populate[gallery]=true`
- `/api/experiences`
- `/api/skills`

Os content types sugeridos estão em [docs/strapi-content-types.md](docs/strapi-content-types.md). O guia para popular projetos está em [docs/cms-population-guide.md](docs/cms-population-guide.md).

## SEO e performance

- `usePortfolioSeo` centraliza title, description, canonical, Open Graph, Twitter Cards e JSON-LD.
- `server/api/__sitemap__/urls.ts` gera URLs de projetos publicados no Strapi para o sitemap.
- Imagens usam `NuxtImg`, lazy loading nos cards/galerias e preload apenas no hero.
- Componentes pesados como modal de projeto são carregados com `LazyUiProjectModal`.
- A navegação é semântica, com heading hierarchy clara, aria-labels em botões críticos e contraste alto.
