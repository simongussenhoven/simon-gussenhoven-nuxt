// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/ui'
  ],
  css: [
    '@/assets/css/main.css',
  ],

})
