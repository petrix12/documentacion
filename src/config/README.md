---
sidebar: auto
---

# Documentación Soluciones++
+ [URL del sitio]()
+ [URL del repositorio en GitHub](https://github.com/petrix12/documentacion.git)


## Mis sitios web:
+ **[CV Online](https://petrix12.github.io/cvpetrix2022)**.
+ **[GitHub](https://github.com/petrix12)**.
+ **[Facebook](https://www.facebook.com/solplusplus)**.
+ **[Youtube](https://www.youtube.com/channel/UCgI3CMta_Vc4GHZwbzG3e-Q)**.
+ **[Twitter](https://twitter.com/petrix12)**.
+ **[Linkedin](https://www.linkedin.com/in/pedro-bazo/)**.
+ **[Instagram](https://www.instagram.com/bazopedro)**.
+ **[Blogger Soluciones++](https://solplusplus.blogspot.com)**.
+ **[Herramientas y Soluciones Office](https://toolssolucionesoffice.blogspot.com)**.


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
    + ? What's the name of your project? spp
    + ? What's the description of your project? Documentación General
    + ? What's your email? bazo.pedro@gmail.com
    + ? What's your name? Pedro J. Bazó C.
    + ? What's the repo of your project? https://github.com/petrix12/documentacion.git
+ $ cd docs
+ $ npm install
+ Personalizar en:
    + **./src/index.md**
    + **./src/.vuepress/config.js**
+ Documentar en: **./docs/src/guide**.
::: tip Compilar
+ Compilar para desarrollo: $ npm run dev
+ Compilar para producción: $ npm run build
:::


## Deploy en GitHub Pages
1. Primera vez:
    1. Crear una nueva rama **gh-pages**:
       + $ git checkout -b gh-pages
    2. Crear archivo **vue.config.js** en el directorio raíz del proyecto.
        ```js
        module.exports = {
            publicPath: '/documentacion',
        }
        ```
    3. Compilar el proyecto:
        + $ npm run build
    4. Cortar **src\\.vuepress\dist** y pegar en la raíz del proyecto.
    5. Reemplazar en **dist\index.html** y **dist\404.html**:
        + **href="/** por **href="./**
        + **src="/img** por **src="./img**
    6. Remmplazar en **dist\config\index.html**, **dist\guide\index.html** y **dist\guide\using-vue.html**:
        + **href="/** por **href="../**
        + **src="/img** por **src="../img**
    7. Subir directorio **dist** al GitHub:
        + $ git add dist
        + $ git commit -m "gh-pages commit"
        + $ git subtree push --prefix dist origin gh-pages
    8. Regresar a la rama **main**:
        + $ git checkout main
2. Demás veces:
    1. Fusionar rama **gh-pages** con **main**:
        + $ git checkout gh-pages
        + $ git merge main
    2. Compilar el proyecto:
        + $ npm run build
    3. Cortar **src\\.vuepress\dist** y pegar en la raíz del proyecto.
    4. Reemplazar en **dist\index.html** y **dist\404.html**:
        + **href="/** por **href="./**
        + **src="/img** por **src="./img**
    5. Remmplazar en **dist\config\index.html**, **dist\guide\index.html** y **dist\guide\using-vue.html**:
        + **href="/** por **href="../**
        + **src="/img** por **src="../img**
    6. Subir directorio **dist** al GitHub:
        + $ git add dist
        + $ git commit -m "gh-pages commit"
        + $ git subtree push --prefix dist origin gh-pages
    7. Regresar a la rama **main**:
        + $ git checkout main
::: tip Nota
GitHub publicará la página automáticamente en:
+ https://petrix12.github.io/documentacion
:::


## Utilidades
+ Borrar rama de nombre borrar:
    + $ git branch -D borrar
    + git push origin :borrar
