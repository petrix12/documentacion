# **CURSO**: Automatiza tu negocio con Zapier - De 0 a 100
+ URL: https://www.udemy.com/course/automatiza-tu-negocio-con-zapier-de-0-a-100
+ Instructor: Nicolás Nonjour


## URL's
::: tip Direcciones web
+ [Curso "Automatiza tu negocio con Zapier - De 0 a 100"](https://www.udemy.com/course/automatiza-tu-negocio-con-zapier-de-0-a-100)
+ [Repositorio del curso](https://github.com/petrix12/zapier2022.git)
+ [Documentación](https://docspp.netlify.app/guide/herramientas/zapier2022/zapier2022.html)
:::


## Sección 1: Introducción
### 1. ¿Qué c#@jos entendemos por automatización?
### 2. Eligiendo nuestro plan de forma inteligente
+ **[Zapier](https://zapier.com)**
1. Crear cuenta en Zapier:
    + Ir a la página de **[Zapier](https://zapier.com)**.
    + Clic en **Pricing**.


## Sección 2: Primeros pasos
### 3. Creando nuestro primer zap de 2 pasos
1. Configurar Zapier para que registre los correos de **Gmail** en una hoa de **Google Sheets**:
    + **Parte I**: Trigger
        1. Ingresar a cuenta **[Zapier](https://zapier.com/app/login)**.
        2. Click en **Create Zap**.
        3. Seleccionar **Gmail** en **Trigger**.
        4. Seleccionar **New Email** en **Trigger Event**.
        5. Click en **Continue**.
        6. Escoger cuenta de **Gmail** a conectar.
        7. Click en **Continue**.
        8. En **Label/Mailbox** dejar en blanco y click en **Continue**.
        9. Click en **Test trigger**.
        10. Click en **Continue**.
    + **Parte II**: Acction
        1. Seleccionar **Google Sheets**.
        2. Seleccionar **Create Spreadsheet Row** en **Event**.
        3. Click en **Continue**.
        4. Escoger cuenta de **Gmail** a conectar.
        5. Click en **Continue**.
        6. Seleccionar ubicación de la hoja de cálculo.
        7. Crear una hoja de cálculo **Google Sheets** en la ubicación seleccionada.
            ::: tip Nota
            En la hoja **Hoja 1** escribir en las celdas **A1**, **B1** y **C1** respectivamente **Correo**, **Asunto** y **Contenido**.
            :::
        8. Seleecionar la hoja de cálculo creada en el paso anterior.
        9. Seleccionar hoja del libro.
        10. En cada uno de los campos:
            + Correo: Frond Email
            + Asunto: Subject
            + Contenido: Body Plain
        11. Click en **Continue**.
        12. Click en **Test action**.
        13. Click en **Publish Zap**.

### 4. Función EXPLORE
+ **[Zapier Explore](https://zapier.com/explore)**.

### 5. Agregando pasos extras a nuestro zap
1. Configurar Zapier con un activador y dos acciones:
    + Nombrar Zap: Convertir Post en Facebook a LinkedIn
    ::: tip Nota
    El objetivo de este ejercicio, es que cada vez que se realice una publicación de Facebook, también se publique en LinkedIn.
    :::
    + **Parte I**: Trigger
        1. Ingresar a cuenta **[Zapier](https://zapier.com/app/login)**.
        2. Click en **Create Zap**.
        3. Seleccionar **Facebook Pages** en **Trigger**.
        4. Seleccionar **New Post by You** en **Trigger Event**.
        5. Click en **Continue**.
        6. Escoger cuenta de **Facebook** a conectar.
        7. Click en **Continue**.
        8. Seleccionar Página de Facebook.
        9. Click en **Test trigger**.
        10. Click en **Continue**.
    + **Parte II**: Acction
        1. Seleccionar **LinkedIn**.
        2.  Seleccionar **Create Share Update** en **Event**.
        3.  Click en **Continue**.
        4.  Escoger cuenta de **LinkedIn** a conectar.
        5.  Click en **Continue**.
        6.  En **Set up action**:
            + Comment: Nuevo Post en Facebok: 1. Message
            + Visible To: Anyone
        7.  Click en **Continue**.
        8.  Click en **Test action**.
        9.  Click en **Publish Zap**.
::: tip Nota
Se pueden agregar tantas acciones como sean necesarias.
:::


## Sección 3: Conceptos y características avanzadas
### 6. Programando zaps
1. Programar envío de un correo periodicamente:
    + **Parte I**: Trigger
        1. Ingresar a cuenta **[Zapier](https://zapier.com/app/login)**.
        2. Click en **Create Zap**.
        3. Click en **Schedule**.
        4. Seleccionar **Every Month** en **Event**.
        5. Click en **Continue**.
        6. En **Set up trigger**:
            + **Day of the Month**: 9
            + **Time of Day**: 11am
        7. Click en **Continue**.
        8. Click en **Test trigger**.
        9. Click en **Continue**.
    + **Parte II**: Acction
        1. Seleccionar **Gmail** en **Action**.
        2. Seleccionar **Send Email** en **Event**.
        3. Click en **Continue**.
        4. Seleccionar una cuenta **Gmail**
        5. Click en **Continue**.
        6. Completar los campos solicitados en **Set up action**.
        19. Click en **Continue**.
        20. Click en **Test action**.
        21. Click en **Publish Zap**.

### 7. Delay
### 8. Filtros
### 9. Zaps condicionales
### 10. Zapier apps
+ **[Herramientas de Zapier](https://zapier.com/apps/categories/zapier-tools)**.


## Sección 4: Casos de uso
### 11. Aumentando el porcentaje de ventas en nuestras campañas de leads
### 12. Mejora tus inversiones en cryptos con mejores datos de mercado - NOMICS
+ **[Nomics](https://nomics.com)**

### 13. Mejora tus inversiones en cryptos con mejores datos de mercado - CRYPTOWATCH
+ **[Cryptowatch](https://cryptowat.ch/es-es)**

### 14. Obteniendo datos valiosos de los usuarios de Twitter
+ **[Search Tweets: Standard v1.1](https://developer.twitter.com/en/docs/twitter-api/v1/tweets/search/guides/standard-operators)**

### 15. Enviando eventos offline a Google Analytics
