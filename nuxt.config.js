export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KenGen',
    script: [
      {
        src: 'https://kit.fontawesome.com/32744a4164.js',
        crossorigin: 'anonymous',
      },
    ],
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'KenGen | Home' },
      { property: 'og:description', content: 'A simple Discord bot for your server.'},
      { name:'theme-color', content: '#5302e0'},
      { property: 'og:image', content: '@/static/assets/standard.gif' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/internet.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/static/css/index'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/VueTyped', ssr: false },
    { src: '@/plugins/VueParticles', ssr: false },
    { src: '@/plugins/VueScrollReveal', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
