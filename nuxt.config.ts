export default defineNuxtConfig({
  ssr: true,
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    define: {
      'process.env.DEBUG':false
    }
  },

  devtools: { enabled: true },
  modules: [
    '@nuxt/content'
  ],

  content: {
    markdown: {
      anchorLinks: {
        depth: 1
      }
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-07-17'
})