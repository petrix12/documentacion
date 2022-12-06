# Documentación Soluciones++
+ [URL del sitio]()
+ [URL del repositorio en GitHub](https://github.com/petrix12/documentacion.git)


## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **documentacion**.
    + **Description**: Proyecto enfocado en agrupar toda la documentación de todos mis proyectos.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/documentacion.git
    + $ git push -u origin main


## Preparar documentación
+ $ npx create-vuepress-site
    + ? What's the name of your project? Soluciones++
    + ? What's the description of your project? Documentación General
    + ? What's your email? bazo.pedro@gmail.com
    + ? What's your name? Pedro Bazó
    + ? What's the repo of your project? https://github.com/petrix12/documentacion.git
+ $ cd docs
+ $ npm install
+ Personalizar en:
    + **./docs/src/index.md**
    + **./docs/src/.vuepress/config.js**
+ Documentar en: **./docs/src/guide**.
::: tip Compilar
+ Compilar para desarrollo: $ npm run dev
+ Compilar para producción: $ npm run build
:::


