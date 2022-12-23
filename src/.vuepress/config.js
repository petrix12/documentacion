const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Docs S++',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: "icon", type: "image/png", href: "https://raw.githubusercontent.com/petrix12/imagenes2022/main/Soluciones%2B%2B/S%2B%2B.ico"}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guías',
        link: '/guide/',
      },
      {
        text: 'Doc',
        link: '/config/'
      },
      {
        text: 'Mi GitHub',
        link: 'https://github.com/petrix12'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Soluciones++',
          collapsable: true,
          children: [
            ''
          ]
        },
        {
          title: 'Docker',
          collapsable: true,
          children: [
            'docker/docker2022'    // Curso práctico de Docker y Microservicios (apto para todos)
          ]
        },
        {
          title: 'Laravel',
          collapsable: true,
          children: [
            'laravel/sefar2022/sefar2022-P01',    // Proeycto Sefar 2022
            'laravel/sefar2022/sefar2022-P02',
            'laravel/sefar2022/sefar2022-P03',
            'laravel/sefar2021/sefar2021-P01',    // Proeycto Sefar 2021
            'laravel/sefar2021/sefar2021-P02',
            'laravel/sefar2021/sefar2021-P03',
            'laravel/sefar2021/sefar2021-P04',
            'laravel/sefar2021/sefar2021-P05',
            'laravel/sefar2021/sefar2021-P06',
            'laravel/sefar2021/sefar2021-P07',
            'laravel/laravel2021/laravel2021'     // Curso Laravel 8 desde cero
          ]
        },
        {
          title: 'PWA',
          collapsable: true,
          children: [
            'pwa/pwa2022/pwa2022-P01',    // Curso práctico de Docker y Microservicios (apto para todos)
            'pwa/pwa2022/pwa2022-P02',
            'pwa/pwa2022/pwa2022-P03',
            'pwa/pwa2022/pwa2022-P04',
            'pwa/pwa2022/pwa2022-P05',
            'pwa/pwa2022/pwa2022-P06'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

/*
    sidebar: {
      '/guide/': [
        {
          title: 'Soluciones++',
          collapsable: true,
          children: [
            '',
          ]
        },
        {
          title: 'Laravel',
          collapsable: true,
          children: [
            'sefar2022',    // Proyecto Sefar 2022
            'sefar2021',    // Proyecto App Sefar Universal (Proyecto Sefar 2021)
            'laravel2021'   // Curso Laravel 8 desde cero
          ]
        },
        {
          title: 'Herramientas',
          collapsable: true,
          children: [
            'docker2022',   // Curso práctico de Docker y Microservicios (apto para todos)
            'pwa2022'       // PWA - Aplicaciones Web Progresivas: De cero a experto
          ]
        },
      ],
    }
*/
