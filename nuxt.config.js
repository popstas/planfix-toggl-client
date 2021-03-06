module.exports = {
  mode: 'spa',
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  plugins: [
    { src: '~/plugins/onsenui', ssr: false },
    { src: '~/plugins/idle', ssr: false }
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'planfix-toggl',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Send metrics from Toggl to Planfix' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/planfix-toggl.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    { src: 'onsenui/css/onsenui-core.css', lang: 'css' },
    { src: 'onsenui/css/onsen-css-components.css', lang: 'css' },
  ]
}
