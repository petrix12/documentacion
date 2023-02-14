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
          title: 'AWS',
          collapsable: true,
          children: [
            'aws/aws2023/aws2023-P01.md',           // Curso básico de AWS para desarrolladores web
            'aws/laravel-aws2021/laravel-aws2021'   // Laravel 8 en Amazon Web Services
          ]
        },
        {
          title: 'C/C++',
          collapsable: true,
          children: [
            'c_cpp/clases_cpp/clases_cpp2023',           // Clases de C++
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
          title: 'Herramientas',
          collapsable: true,
          children: [
            'herramientas/zapier2022/zapier2022'    // Curso se Zapier 2022
          ]
        },
        {
          title: 'Laravel',
          collapsable: true,
          children: [
            'laravel/sefar2022/sefar2022-P01',      // Proeycto Sefar 2022
            'laravel/sefar2022/sefar2022-P02',
            'laravel/sefar2022/sefar2022-P03',
            'laravel/sefar2021/sefar2021-P01',      // Proeycto Sefar 2021
            'laravel/sefar2021/sefar2021-P02',
            'laravel/sefar2021/sefar2021-P03',
            'laravel/sefar2021/sefar2021-P04',
            'laravel/sefar2021/sefar2021-P05',
            'laravel/sefar2021/sefar2021-P06',
            'laravel/sefar2021/sefar2021-P07',
            'laravel/file2021/file2021',            // Subir archivos a la red con Laravel y almacenar sus datos en MySQL
            'laravel/multifile2021/multifile2021',  // Subir múltiples archivos en Laravel
            'laravel/laravel2021/laravel2021'       // Curso Laravel 8 desde cero
          ]
        },
        {
          title: 'Lógica',
          collapsable: true,
          children: [
            'logica/numeros2022/numeros2022-P01',           // Ejercicios de lógica matemática
            'logica/programacion2023/programacion2023-P01'      // Ejercicios de programación
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