import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: ['~/plugins/vuetify.js'],
  ssr: true,
  build: {
    transpile: ['vuetify'],
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
  ],

  hooks: {
    async "prerender:routes"(ctx) {
      const  response  = await fetch("https://fakestoreapi.com/products/");
      const result = await response.json();
      for (const page of result) {
        ctx.routes.add(`/product/${page.id}`);
      }
    },
  },
})


