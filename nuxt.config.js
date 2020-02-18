module.exports = {
  head: {
    title: 'Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  css: [
    { src: '~styles/main.sass', lang: 'sass' },
  ],
  plugins: [
    '~plugins/global-components.js',
    '~plugins/vue-axios'
  ],
  modules: [
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: ['far']
        },
      ]
    }],
    '@nuxtjs/svg-sprite',
  ],
  svgSprite: {
    input: '~/static/img/svg/',
  },
  build: {
    extractCSS: {
      allChunks: true
    },
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
     return { x: 0, y: 0 }
    }
  },
}
