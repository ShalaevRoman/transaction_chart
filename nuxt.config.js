import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'static',
  router: {
    base: '/transaction_chart/'
  },
  ssr: false,
  head: {
    titleTemplate: '%s - transaction_chart',
    title: 'transaction_chart',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#00E676' },
  css: [
    '@/node_modules/vuetify/dist/vuetify.css'
  ],
  plugins: ['@/plugins/chart.js'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'http://api.spending.gov.ua',
    headers: {
      common: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: '#424242',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#ffa450',
          accent: '#a1e754',
          secondary: '#d7d7d7',
          success: '#6dff74',
          info: '#7365ff',
          warning: '#2e8ac0',
          error: '#ff5e3c'
        }
      }
    }
  },
  build: {}
}
