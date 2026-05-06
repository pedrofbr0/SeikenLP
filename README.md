# Lucas Rodrigues Portfolio Frontend

Landing page premium em Nuxt 3 para o portfólio digital de Lucas Rodrigues, Desenhista Cadista e Projetista CAD/BIM.

## Stack

- Nuxt 3, Vue 3 e TypeScript
- Tailwind CSS
- Nuxt Image
- VueUse Motion
- SEO com `useSeoMeta`, Open Graph, Twitter Cards, canonical e Schema.org
- Sitemap e robots
- Consumo do Strapi CMS via REST API

## Rodar localmente

```bash
npm install
npm run dev
```

URL local: `http://localhost:3000`.

## Variáveis de ambiente

Use `.env.example` como referência:

```bash
NUXT_PUBLIC_SITE_URL=https://lucasrodriguescad.com.br
NUXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_TOKEN=
```

`STRAPI_TOKEN` é opcional se o CMS liberar leitura pública para `find` e `findOne`.

## Fallback

Se o Strapi estiver offline, a landing usa os dados de `data/fallback.ts`. Isso evita tela vazia durante desenvolvimento e demonstração.

## Estrutura

```txt
components/
  sections/
  ui/
composables/
data/
pages/
  index.vue
  projetos/[slug].vue
public/images/
server/api/__sitemap__/urls.ts
types/
```

## Endpoints consumidos

- `GET /api/profile?populate[profileImage]=true&populate[heroImage]=true`
- `GET /api/projects?populate[coverImage]=true&populate[gallery]=true&sort[0]=order:asc&sort[1]=year:desc`
- `GET /api/projects?filters[slug][$eq]=:slug&populate[coverImage]=true&populate[gallery]=true`
- `GET /api/experiences?sort[0]=startDate:desc`
- `GET /api/skills?sort[0]=name:asc`

## Build

```bash
npm run typecheck
npm run build
```
