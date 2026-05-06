declare const process: {
  env: Record<string, string | undefined>
}

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://lucasrodriguescad.com.br'
const strapiUrl = process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  css: ['~/assets/styles/main.css'],

  runtimeConfig: {
    strapiToken: process.env.STRAPI_TOKEN || '',
    public: {
      siteUrl,
      strapiUrl
    }
  },

  site: {
    url: siteUrl,
    name: 'Lucas Rodrigues Portfolio'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      titleTemplate: '%s | Lucas Rodrigues',
      meta: [
        { name: 'theme-color', content: '#151210' },
        { name: 'color-scheme', content: 'dark light' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: siteUrl }
      ]
    }
  },

  image: {
    quality: 82,
    format: ['webp', 'avif', 'jpg', 'png'],
    domains: ['localhost', '127.0.0.1']
  },

  robots: {
    sitemap: `${siteUrl}/sitemap.xml`,
    allow: '/'
  },

  sitemap: {
    sources: ['/api/__sitemap__/urls']
  },

  nitro: {
    compressPublicAssets: true
  },

  routeRules: {
    '/': { prerender: true },
    '/projetos/**': { swr: 3600 }
  }
})
