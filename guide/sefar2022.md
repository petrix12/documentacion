# Proyecto Sefar 2022


## <center><strong>Guía para el desarrollador de aplicaciones</strong></center>


## URL's del proyecto
::: tip Páginas
+ Producción: <a href="#" target="_blank">pendiente</a>
+ Prueba en Servicios Hosting: <a href="https://test.corporacioncabv.com" target="_blank">https://test.corporacioncabv.com</a>
+ Prueba en GoDaddy: <a href="#" target="_blank">pendiente</a>
+ Prueb en local: <a href="http://sefar2022.test" target="_blank">http://sefar2022.test</a>
+ Proyecto Jonathan Fetter (Customer portal): <a href="http://3.133.206.22" target="_blank">http://3.133.206.22</a>
+ Proyecto Jonathan Fetter (Admin portal): <a href="http://3.133.206.22/admin" target="_blank">http://3.133.206.22/admin</a>
<p></p>
:::


## Cración de repositorio en GitHub
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **sefar2022**.
    + **Description**: Nuevo portal web para Sefar Universal.
    + **Private**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/sefar2022.git
    + $ git push -u origin main


## Creación proyecto Laravel - Inertia - Voyager
1. Crear proyecto:
    + $ laravel new sefar2022 --jet
    + Seleccionar: [1] inertia
    + Will your application use teams? (yes/no) [no]: no
2. Crear base de datos local **sefar2022** en MySQL (Juego de carácteres: utf8_general_ci)
3. Cambiar Vue.js por React.js:
    + $ npx laravel-jetstream-react@latest install
    ::: tip Documentación
    + **[Laravel Jetstream React CLI](https://github.com/ozziexsh/laravel-jetstream-react/tree/2e6a0a2793e9aa15bf763a6068c828c10d56f7f0)**
    + **[Página oficial de Inertia](https://inertiajs.com)**
    <p></p>
    :::
4. Instalar dependencias de Voyager:
    + $ composer require tcg/voyager
    ::: tip Documentación
    + **[Página oficial de Voyager](https://voyager-docs.devdojo.com)**  
    <p></p>
    :::
5. Verificar variables de entorno en **.env** (local):
    ```env
    APP_NAME="Sefar Universal"
    # ...
    APP_ENV=local
    # ...
    APP_DEBUG=true
    APP_URL=http://sefar2022.test
    # ...
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=sefar2022
    DB_USERNAME=root
    DB_PASSWORD=
    # ...
    ```
6. Instalar Voyager sin registros de prueba:
    + $ php artisan voyager:install
    + Esta acción ejecutará las migraciones  
    ::: warning Advertencia
    En caso de querer instalar Voyager con registros de prueba, ejecutar:
    + $ php artisan voyager:install --with-dummy
    <p></p>
    :::
7. Modificar provider **app\Providers\AppServiceProvider.php**:
    ```php{2,9}
    // ...
    use Illuminate\Support\Facades\Schema;

    class AppServiceProvider extends ServiceProvider
    {
        // ...
        public function boot()
        {
            Schema::defaultStringLength(191);
            // ...
        }
    }
    ```
8. Modificar configuración de base de datos en **config\database.php**:
    ```php{4,5,7}
    // ...
    'mysql' => [
        // ...
        'charset' => 'utf8',
        'collation' => 'utf8_general_ci',
        // ...
        'engine' => 'InnoDB',
        // ...
    ],
    // ...
    ```
9.  Programar seeder **database\seeders\DatabaseSeeder.php**:
    ```php
    // ...
    use Illuminate\Database\Seeder;
    use Illuminate\Support\Str;
    use TCG\Voyager\Models\Role;
    use TCG\Voyager\Models\User;

    class DatabaseSeeder extends Seeder
    {
        // ...
        public function run()
        {
            if (User::count() == 0) {
                $role = Role::where('name', 'admin')->firstOrFail();

                User::create([
                    'name'           => 'Admin',
                    'email'          => 'admin@admin.com',
                    'password'       => bcrypt('password'),
                    'remember_token' => Str::random(60),
                    'role_id'        => $role->id,
                ]);
            }
        }
    }
    ```
10. Ejecutar seeder:
    + $ php artisan db:seed
11. Ejecutar la aplicación:
    + $ npm run dev
12. Para generar el directorio **public\build**, ejecutar:
    + $ npm run bulid
13. Quitar de **.gitignore** la carpeta **/public/build**.
14. Modificar el **Vite manifest** (public\build\manifest.json):
    + Reemplazar **resources/js/app.js** por **resources/js/app.tsx**
    + Reemplazar **.vue** por **.tsx**
    + Reemplazar **-vue_** por **-react_**


## Obtener ID de cliente de Google
1. Ir a la consola de [Google Cloud](https://console.cloud.google.com/projectselector2/apis/dashboard?pli=1&supportedpurview=project)
2. Crear proyecto.
3. Ir a **Pantalla de consentimiento de OAuth** y seleccionar **Externos**.
4. Clic en Crear.
5. Completar formulario:
    + Información de la aplicación:
        + Nombre: Aplicación Sefar
        + Correo: pedro.bazo@sefarvzla.com
        + Logotipo: campo opcional
    + Información de contacto del desarrollador:
        + Correos: pedro.bazo@sefarvzla.com
6. Clic en Guardar y continuar.
7. En la sección de Permisos dar clic en Guardar y continuar.
8. En la sección de Usuarios de prueba dar clic en Guardar y continuar.
9. En la sección de Resumen dar clic en Volver al panel.
10. Ir a **Credenciales** y clic en **CREAR CREDENCIALES** y seleccionar **ID de clientes OAuth**.
11. Completar formulario:
    + Tipo de aplicación: Aplicación web
    + Nombre: Aplicación web Sefar
    + Orígenes autorizados de JavaScript
        + Agrar URI:
            + http://localhost
            + http://localhost:8082
            + http://localhost:8000
            + https://test.corporacioncabv.com
    + Clic en Crear
12. Respaldar credenciales: ID Cliente y Secret ID.
13. Modificar **.env**:
    ```env
    # ...
    GOOBLE_CLIENT_ID=(ID Cliente)
    GOOBLE_SECRET_ID=(Secret ID)
    ```


## Obtener ID de cliente de Facebook
1. Iniciar sesión en la página para [Desarrolladores de Fecebook](https://developers.facebook.com/?locale=es_ES).
2. Ir a **My Apps** y crear una aplicación:
    + Selecciona un tipo de app: Ninguno.
    + Clic en **Siguiente**.
    + Completar formulario:
        + Agrega un nombre para la app: App Sefar
        + Correo electrónico de contacto de la app: pedro.bazo@sefarvzla.com
    + Clic en **Crear app**
3. En **Inicio de sesión con Facebook** dar clic en **Configurar**.
4. Seleccionar **Web**
    + URL del sitio web: http://localhost 
        + **Nota**: Luego cuando se pase a producción cambiar la URL por la correspondiente.
    + Clic en **Continuar**.
    + En **Configurar el SDK de Facebook para JavaScript** clic en **Siguiente**
    + En **Comprobar el estado del inicio de sesión** clic en **Siguiente**
    + En **Agregar el botón "Iniciar sesión con Facebook"** clic en **Siguiente**
5. En el panel izquiero ir a **Configurar** -> **Básica** y completar formulario:
    + Dominios de la app: localhost
        + **Nota**: Luego cuando se pase a producción cambiar por el dominio correspondiente.
        + Pasar **Modo de la app** de **Desarrollo** a **Activo**.
    + Clic en **Guardar cambios**.
    + Obtener el **Identificador de la app**.
6. Modificar **.env**:
    ```env
    # ...
    FACEBOOK_CLIENT_ID=(Identificador de la app)
    ```


## Configuración AWS S3
1. Ingresar en: https://aws.amazon.com/es
2. Ir a **IAM** (Administrar el acceso a los recursos de AWS): https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/home
3. Crear usuario:
    + Clic en **Usuarios** y luego en **Agregar usuarios**.
    + Nombre de usuario: **appsefar**.
    + Tipo de credenciales: **Clave de acceso: acceso mediante programación**.
    + Clic en **Siguiente: Permisos**.
    + Clic en **Asociar directamente las políticas existentes**.
    + Seleccionar el permiso:
        + AmazonS3FullAccess
    + Clic en **Siguiente: Etiquetas**.
    + Clic en **Siguiente: Revisar**.
    + Clic en **Crear un usuario**.
    + Obtener los valores:
        + **ID de clave de acceso**.
        + **Clave de acceso secreta**.
4. Crear Bucket:
    + Ir a **S3** (Almacenamiento escalable en la nube): https://s3.console.aws.amazon.com/s3/get-started?region=us-east-1
    + Clic en **Crear bucket**:
        + Nombre del bucket: **appsefar-bucket-s3**.
        + Región de AWS: **EE. UU. Est (Norte de Virginia) us-east-1**.
        + Clic en **Crear bucket**.
    + Clic en el nuevo bucket: **appsefar-bucket-s3**.
    + Clic en **Permisos**:
        + En **Propiedad de objetos** clic en **Editar**.
        + Seleccionar **ACL habilitados**.
        + En **Habilitar las ACL desactiva la configuración forzada del propietario del bucket en cuanto a la propiedad del objeto** seleccionar **Reconozco que las ACL se restaurarán.**
        + Clic en **Guardar cambios**.
    + Clic en **Permisos**:
        + En **Bloquear acceso público (configuración del bucket)** clic en **Editar**:
            + Deseleccionar **Bloquear todo el acceso público**.
            + Seleccionar: 
                + Bloquear el acceso público a buckets y objetos concedido a través de políticas de bucket y puntos de acceso públicas nuevas
                + Bloquear el acceso público y entre cuentas a buckets y objetos concedido a través de cualquier política de bucket y puntos de acceso pública
        + Clic en **Guardar cambios** y confirmar.
    ::: tip Opcional
    + En caso de querer establecer políticas de almacenamiento:
        + Clic en **Permisos**:
            + En **Política de bucket** clic en **Editar**.
            + Política:
                + Obtener **ARN del bucket**: arn:aws:s3:::appsefar-bucket-s3
                ```json
                {  
                    "Version": "2012-10-17",
                    "Statement": [
                        {
                            "Sid": "Statement1",
                            "Principal": "*",
                            "Effect": "Allow",
                            "Action": [
                                "s3:DeleteObject",
                                "s3:GetObject",
                                "s3:PutObject"
                            ],
                            "Resource": ["arn:aws:s3:::appsefar-bucket-s3/*"]   // ARN del bucket concatenado con "/*"
                        }
                    ]
                }
                ```
    <p></p>
    :::
5. Dar valores a variables de entorno Laravel en **.env** (tanto en producción como en local):
    ```env
    # ...
    FILESYSTEM_DISK=s3
    # ...
    AWS_ACCESS_KEY_ID=[ID de clave de acceso]
    AWS_SECRET_ACCESS_KEY=[Clave de acceso secreta]
    AWS_DEFAULT_REGION=us-east-1
    AWS_BUCKET=[Nombre del bucket]
    # ...
    ```
6. Instalar dependencia para Amazon S3:
    + $ composer require league/flysystem-aws-s3-v3 "^3.0"
    ::: tip Documentación
    + **[Laravel - File Storage](https://laravel.com/docs/9.x/filesystem)**
    <p></p>
    :::
7. Limpiar configuración Laravel:
    + $ php artisan optimize
    + $ php artisan cache:clear


## Personalización de la URL y meta datos del website
1. Reemplazar el favicon de la aplicación por el de el logo de Sefar en **public\favicon.ico**.
2. Agregar logo de Sefar en **public\Logo.png**.
3. Modificar componente principal **resources\js\app.tsx**:
    ```tsx
    // ...
    import "./index.css";
    // ...
    createInertiaApp({
        title: title => `${title} - ${appName} | Tus antepasados te quieren libre`,
        // ...
    });
    // ...
    ```
4. Modificar template principal **resources\views\app.blade.php**:
    ```php
    // ...
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inicio - Personalización URL --}}
        <link rel="icon" href="{{ asset('/favicon.ico') }}">
        <link rel="shortcut icon" type="image/x-icon" href="{{ asset('/favicon.ico') }}">
        <link href="{{ asset('/Logo.png') }}" rel="logo-touch-icon">

        <title>{{ config('app.name', 'Laravel') }} | Tus antepasados te quieren libre</title>

        <meta name="description" content="Abogados y genealogistas expertos en inmigración. Conseguimos tu pasaporte español, portugues e italiano, para que seas libre, trascendiendo fronteras."/>
        <meta name="keywords" content="abogado, migración, inmigración, asesoria, viaje, bufete, genealogía, descendencia, pasaporte, calidad, expertos"/>
        <meta name="author" content="Equipo de Sistema de Sefar Universal" />
        <meta name="robots" content="index"/>

        <meta property="fb:app_id" content="APPID">
        <meta data-react-helmet="true" property="og:url" content="{{ config('app.url', 'https://www.sefaruniversal.com') }}"/>
        <meta data-react-helmet="true" property="og:type" content="website"/>
        <meta data-react-helmet="true" property="og:title" content="Sefar Universal | Tus antepasados te quieren libre."/>
        <meta data-react-helmet="true" property="og:description" content="Abogados y genealogistas expertos en inmigración. Conseguimos tu pasaporte español, portugues e italiano, para que seas libre, trascendiendo fronteras."/>

        <meta data-react-helmet="true" property="og:image" content="https://raw.githubusercontent.com/petrix12/imagenes2022/main/Sefar/SefarLogo.png" />
        <meta data-react-helmet="true" property="twitter:title" content="Sefar Universal | Tus antepasados te quieren libre."/>
        <meta data-react-helmet="true" property="twitter:description" content="Abogados y genealogistas expertos en inmigración. Conseguimos tu pasaporte español, portugues e italiano, para que seas libre, trascendiendo fronteras."/>
        <meta data-react-helmet="true" property="twitter:image:src" content="https://raw.githubusercontent.com/petrix12/imagenes2022/main/Sefar/SefarLogo.png" />
        <meta data-react-helmet="true" property="twitter:image" content="https://raw.githubusercontent.com/petrix12/imagenes2022/main/Sefar/SefarLogo.png" />
        <meta data-react-helmet="true" property="twitter:card" content="summary" />
        <meta data-react-helmet="true" name="robots" content="noindex, nofollow" />
        {{-- Fin - Personalización URL --}}
        // ...
    </head>
    // ...
    ```
5. Crear archivo de estilos **resources\js\Pages\index.css**:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    html {
        overflow: auto !important;
        padding: 0 !important;
        margin: 0 !important;
    }

    body {
        font-family: "Inter", sans-serif !important;
        background: #f3f4f6 !important;
    }
    .react-toast {
        z-index: 99999999 !important;
    }
    ```


## Creación de helper de traducción
2. Crear helper **resources\js\Pages\helpers\translation.tsx**:
    ```tsx
    // ...
    PENDIENTE
    // ...
    ```


## Diseño de la vista de bienvenida
1. Modificar archivo de rutas **routes\web.php**:
    ```php
    // ...
    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'idioma' => config('app.locale', 'es')
        ]);
    });
    // ...
    ```
2. Instalación de dependencias **node package manager**:
    + $ npm install react-hooks-global-state
    + $ npm i react-helmet@^6.1.0
    + $ npm i @headlessui/react@^1.1.0
    + $ npm i validator@^13.6.0
    + $ npm i react-toastify@^7.0.4
    + $ npm i @heroicons/react@^1.0.1
    + $ npm i react-accessible-accordion@3.3.5
3. Crear global state **resources\js\Pages\state\index.tsx**:
    ```tsx
    import { createGlobalState } from 'react-hooks-global-state';

    const { setGlobalState, useGlobalState } = createGlobalState({
        language: localStorage.getItem("lang") || "en"
    });

    export { setGlobalState, useGlobalState };
    ```
4. Diseñar vista **resources\js\Pages\Welcome.tsx**:
    ```php
    import { InertiaLink } from '@inertiajs/inertia-react';
    import React from 'react';
    import useRoute from '@/Hooks/useRoute';
    import useTypedPage from '@/Hooks/useTypedPage';
    import { Head } from '@inertiajs/inertia-react';

    import Helmet from 'react-helmet';
    import Banner from './components/landing/Banner.tsx';
    import Navigation from './components/landing/Navigation';
    import Map from './components/landing/Map';
    import Services from './components/landing/Services';
    import About from './components/landing/About';
    import Shape from './components/landing/Shape';
    import Accesible from './components/landing/Accesible';
    import Faq from './components/landing/Faq';
    import LegalServices from './components/landing/LegalServices';
    import Expert from './components/landing/Expert';
    import Footer from './components/landing/Footer';
    import { t } from './helpers/translation';
    import './css/responsive.css';
    import './components/landing/landing.css';

    interface Props {
        canLogin: boolean;
        canRegister: boolean;
        idioma: string;
    }

    export default function Welcome({
        canLogin,
        canRegister,
        idioma,
    }: Props) {
        const route = useRoute();
        const page = useTypedPage();

        return (
            <div>
                <Head title={t("welcome", idioma)} />
                <Helmet>
                    <body className="bg-body text-dark sefar-landing" />
                </Helmet>
                <div className="img-banner overflow-hidden">
                    <Navigation idioma={idioma}/>
                    <Banner />
                </div>
                <Map />
                <Services />
                <About />
                <Shape />
                <div className="bg-gray">
                    <Accesible />
                    <Faq />
                    <LegalServices />
                </div>
                <Expert />
                <Footer />
            </div>
        );
    }
    ```
5. Crear archivo de estilos **resources\js\Pages\responsive.css**.
    ::: tip Nota
    + Seguir la ruta para ver el código.
    + [Repositorio de GitHub](https://github.com/petrix12/sefar2022).
    <p></p>
    :::
7. Crear archivo de estilos **resources\js\Pages\components\landing\landing.css**.
    ::: tip Nota
    + Seguir la ruta para ver el código.
    + [Repositorio de GitHub](https://github.com/petrix12/sefar2022).
    <p></p>
    :::
8. Crear componente **resources\js\Pages\Components\landing\Navigation.tsx**.
    ::: tip Nota
    + Seguir la ruta para ver el código.
    + [Repositorio de GitHub](https://github.com/petrix12/sefar2022).
    <p></p>
    :::
9.  Crear componente **resources\js\Pages\Components\landing\Banner.tsx**:
    ```tsx
    import { InertiaLink } from '@inertiajs/inertia-react';
    import React, { useState } from 'react';
    import useRoute from '@/Hooks/useRoute';
    import { isEmail } from 'validator';
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import b1 from '../../assests/images/landing/banner01.png';
    import profile1 from '../../assests/images/landing/user-profile.png';
    import profile2 from '../../assests/images/landing/user-profile2.png';
    import profile3 from '../../assests/images/landing/user-profile3.png';
    import profile4 from '../../assests/images/landing/user-profile4.png';
    import { setGlobalState, useGlobalState } from '../../state';
    import { t } from '../../helpers/translation';

    export default function Banner() {
        const [language] = useGlobalState("language");
        const [email] = useGlobalState("email");
        function setEmail(correo: string) {
            setGlobalState("email", correo);
            localStorage.setItem("email", correo);
        }
        const notify = () => toast.error(t('input-email-valido', language));
        const route = useRoute();
        return (
            <div className=" lg:container-full px-5 md:pl-9 md:pr-0 mx-auto">
                <div className="md:flex">
                    <div className="md:flex items-end md:w-3/5 mb-14">
                        <div className="lg:pt-32 pt-16 ">
                            <p className="lg:text-3xl text-dark font-bold mb-2 md:pl-2 sm:text-lg">
                                {t('multiple-services', language)}:
                            </p>
                            <p className="xl:text-7xl lg:text-6xl text-5xl mb-3 md:mb-7 text-primary font-extrabold uppercase">
                                {t('your-nationality', language)}:
                            </p>
                            <p className="text-sm md:text-base text-light mb-5 sm:mb-10 md:mb-20 sm:w-3/5">
                                {t('help-me', language)}.
                            </p>
                            <div className="md:flex align-center mb-6 block">
                                <input
                                    type="email"
                                    name="email"
                                    className="focus:outline-none focus:border-none md:w-1/2 px-5 py-4 input w-full border-none"
                                    placeholder={t('input-email', language)}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <button
                                    onClick={() => {
                                        if (!isEmail(email) || !email){
                                            notify();
                                            return;
                                        }
                                        location.href=route('register');
                                    }}
                                    className="btn-primary htp bg-primary border-primary"
                                >
                                    {t('register', language).toUpperCase()}
                                </button>
                                <ToastContainer />
                            </div>
                            <div className="user-box flex items-center relative md:flex-wrap">
                                <div className="user-list relative flex items-center">
                                    <img src={profile1} alt="" className="absolute left-0 z-30" />
                                    <img src={profile2} alt="" className="absolute left-6  z-20" />
                                    <img src={profile3} alt="" className="absolute left-12 z-10" />
                                    <img src={profile4} alt="" className="absolute left-20 z-0" />
                                </div>
                                <h6 className="text-gray font-bold text-base text-light ml-4 mr-0.5">
                                    20k+ {t('clients', language) + ". "}
                                </h6>
                                <InertiaLink href="#" className="text-dark font-bold text-base underline">
                                    {t('discover', language)}
                                </InertiaLink>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-end w-2/5 md:block mt-14">
                        <div className="img-banner-translate">
                            <img src={b1} alt="" className="img-responsive" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    ```
10. Crear componente **resources\js\Pages\Components\landing\Map.tsx**:
    ```tsx
    import React from "react";
    import { useGlobalState } from '../../state';
    import map from "../../assests/images/landing/map.png";
    import Westernmap from "../../assests/images/landing/western-europe-map.png";
    import profile1 from "../../assests/images/landing/profile1.png";
    import spot1 from "../../assests/images/landing/spot.png";
    import dna from "../../assests/images/landing/dna.png";
    import { t } from '../../helpers/translation';

    export default function Map() {
        const [language] = useGlobalState("language");
        return (
            <div className="lg:container-full mx-auto px-4 sm:px-10 md:px-10 md:my-32 mb-0 overflow-hidden">
                <div className="md:flex md:items-center block relative">
                    <div className="md:flex items-center lg:w-3/5 md:w-2/4 mb-14 relative">
                        <div className="map-img">
                            <img src={map} alt="" className="img-responsive" />
                        </div>
                        <div className="profile profile1">
                            <img src={profile1} alt="" />
                            <ProfilePopup />
                        </div>
                        <div className="profile profile2">
                            <img src={profile1} alt="" />
                            <ProfilePopup />
                        </div>
                        <div className="profile profile3">
                            <img src={profile1} alt="" />
                            <ProfilePopup />
                        </div>
                        <div className="profile profile4">
                            <img src={profile1} alt="" />
                            <ProfilePopup />
                        </div>
                        <div className="profile profile5">
                            <img src={profile1} alt="" />
                            <ProfilePopup />
                        </div>
                        <div className="profile profile6">
                            <img src={profile1} alt="" />
                            <ProfilePopup />
                        </div>
                        <div className="spot spot1">
                            <img src={spot1} alt="" />
                        </div>
                        <div className="spot spot2">
                            <img src={spot1} alt="" />
                        </div>
                        <div className="spot spot3">
                            <img src={spot1} alt="" />
                        </div>
                        <div className="spot spot4">
                            <img src={spot1} alt="" />
                        </div>
                        <div className="spot spot5">
                            <img src={spot1} alt="" />
                        </div>
                    </div>
                    <div className="relative flex justify-end lg:w-2/5 md:w-2/4 mb-14 md:block lg:text-base text-sm w-full">
                        <div className="block-content md:pl-24 pl-0">
                            <h3 className="text-dark font-bold mb-7 lg:text-4xl text-2xl">
                                {t('reason', language)}
                            </h3>
                            <p className="mb-7 sm:mb-16 md:max-w-sm "></p>
                            <button className="btn-primary htp bg-primary border-primary">
                                {t('journey', language).toUpperCase()}
                            </button>
                        </div>
                    </div>
                    <div className="western-map md:flex items-center md:w-3/5 mb-14 lg:w-full">
                        <div className="relative">
                            <div className="map-img western">
                                <img src={Westernmap} alt="" />
                            </div>
                            <div className="wes-profile wprofile1">
                                <img src={profile1} alt="" />
                                <ProfilePopup />
                            </div>
                            <div className="wes-profile wprofile2">
                                <img src={profile1} alt="" />
                                <ProfilePopup />
                            </div>
                            <div className="wes-profile wprofile3">
                                <img src={profile1} alt="" />
                                <ProfilePopup />
                            </div>
                            <div className="wes-profile wprofile4">
                                <img src={profile1} alt="" />
                                <ProfilePopup />
                            </div>
                            <div className="wes-profile wprofile5">
                                <img src={profile1} alt="" />
                                <ProfilePopup />
                            </div>
                            <div className="wes-profile wprofile6">
                                <img src={profile1} alt="" />
                                <ProfilePopup />
                            </div>
                            <div className="wes-profile wprofile7">
                                <img src={profile1} alt="" />
                                <ProfilePopup />
                            </div>
                            <div className="wes-profile wprofile8">
                                <img src={profile1} alt="" />
                                <ProfilePopup />
                            </div>
                            <div className="wes-spot wspot1">
                                <img src={spot1} alt="" />
                            </div>
                            <div className="wes-spot wspot2">
                                <img src={spot1} alt="" />
                            </div>
                            <div className="wes-spot wspot3">
                                <img src={spot1} alt="" />
                            </div>
                            <div className="wes-spot wspot4">
                                <img src={spot1} alt="" />
                            </div>
                            <div className="wes-spot wspot5">
                                <img src={spot1} alt="" />
                            </div>
                            <div className="wes-spot wspot6">
                                <img src={spot1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const ProfilePopup = () => {
        return (
            <div className="profile-popup w-64 text-white ">
                <div className="dna-icon">
                    <img src={dna} alt="dna" />
                </div>
                <div className="profile-popup-box">
                    <h3 className="text-xl font-bold mb-2">
                        Pierre S.<span className="font-normal text-sm pl-2">Brazil</span>
                    </h3>
                    <p className="text-base">
                    I   talian Citizenship obtained Living in Barcelona
                    </p>
                </div>
            </div>
        );
    };
    ```
11. Crear componente **resources\js\Pages\Components\landing\Services.tsx**:
    ```tsx
    import React from "react";
    import useRoute from '@/Hooks/useRoute';
    import { useGlobalState } from '../../state';
    import Profile01 from "../../assests/images/landing/profile01.png";
    import Euro from "../../assests/images/landing/euro.png";
    import { t } from '../../helpers/translation';

    export default function Services() {
        const [language] = useGlobalState("language");
        const route = useRoute();
        return (
            <div className="lg:container-full mx-auto sm:px-10 xl:px-4-3 lg:my-20 xl:my-8-5" id="services">
                <p className="text-2xl lg:heading sm:mb-10 xl:mb-16 md:text-center font-bold lg:mb-16 mb-11 px-4">
                    {t('research', language)}
                </p>
                <div className="lg:pl-14 xl:pl-24 pb-3-7 section shadow-md lg:pb-14 lg:flex px-4 lg:px-0">
                    <div className="bg-light-gray lg:w-33rem pt-14 pb-14 lg:py-20">
                        <div className="text-center">
                            <img
                                src={Profile01}
                                alt=""
                                className="block mx-auto mb-10 xl:mb-16"
                            />
                            <div className="flex items-start justify-center mb-2.5 md:mb-5">
                                <img src={Euro} alt="" className="h4 mt-2 md:mt-0" />
                                <p className="font-bold text-primary h1 landing-3-75">50</p>
                            </div>
                            <p className="h5 font-bold ">{}</p>
                        </div>
                    </div>
                    <div className="px-5 py-10 lg:px-20 xl:pl-32 xl:pr-32">
                        <ul className="list-none unorder-list mt-3-3 mb-9 lg:my-20">
                            <li>{t('comprehensive', language)}</li>
                            <li>{t('copies-all', language)}</li>
                            <li>{t('professional-sumary', language)}</li>
                            <li>{t('family-tree', language)}</li>
                            <li>{t('dna-analysis', language)}</li>
                        </ul>
                        <button className="btn-primary htp bg-primary border-primary" onClick={() => location.href=route('register')}>
                            {t('register', language)}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    ```
12. Crear componente **resources\js\Pages\Components\landing\About.tsx**:
    ```tsx
    import React from "react";
    import { useGlobalState } from '../../state';
    import { t } from '../../helpers/translation';
    import video from '../../assests/about.mp4';

    export default function About() {
        const [language] = useGlobalState("language");
        return (
            <div className="container-full mx-auto sm:px-10 lg:my-20 xl:my-8-5 pb-14 sm:pb-24 relative" id="about">
                <div className="section px-24 py-16 h-full overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0 items-end relative">
                        <div className="mt-24">
                            <h4 className="text-2xl lg:heading md:h4 mb-5 sm:mb-7 font-bold">
                                {t('sefar-universal', language)}
                            </h4>
                            <div className="md:pr-24">
                                <p className="mb-6">{t('empresa', language)}</p>
                                <p className="mb-10 sm:mb-4-5">
                                    {t('operaciones', language)}
                                </p>
                            </div>
                            <button className="btn-primary mx-0 htp bg-primary border-primary">
                                {t('saber-mas', language).toUpperCase()}
                            </button>
                        </div>
                        <div className="flex md:px-0 justify-center xl:justify-end youtube-video">
                            <video autoPlay loop muted controls>
                                <source src={video} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    ```
13. Crear componente **resources\js\Pages\Components\landing\Shape.tsx**:
    ```tsx
    import React from 'react'

    export default function Shape() {
        return (
            <div className="w-full overflow-hidden hidden lg:block">
                <div className="bg-img-top">
                </div>
            </div>
        )
    }
    ```
14. Crear componente **resources\js\Pages\Components\landing\Accesible.tsx**:
    ```tsx
    import React, { useState } from "react";
    import { useGlobalState } from '../../state';
    import useRoute from '@/Hooks/useRoute';
    import {
        Accordion,
        AccordionItem,
        AccordionItemHeading,
        AccordionItemButton,
        AccordionItemPanel,
    } from "react-accessible-accordion";
    import "react-accessible-accordion/dist/fancy-example.css";
    import device01 from "../../assests/images/landing/Device (Pt1).svg";
    import device02 from "../../assests/images/landing/Device (Pt2).svg";
    import { t } from '../../helpers/translation';

    export default function Accesible() {
        const [language] = useGlobalState("language");
        const [changeImage, setChangeImage] = useState(true);
        const route = useRoute();

        return (
            <div className="container-full mx-auto px-24 lg:px-4 xl:pl-28 xl:pr-36 hidden lg:block py-10 accordian-page">
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div>
                            <div className="text-lg sm:text-2xl md:text-3xl lg:heading mb-16 font-bold mt-10">
                                {t("accesible", language)}
                            </div>
                            <Accordion allowZeroExpanded preExpanded={["a"]}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <div
                                                className="text-lg md:h5 mb-5 font-bold flex justify-between active cursor-pointer"
                                                onClick={() => setChangeImage(true)}
                                            >
                                                {t("customer-portal", language)}{" "}
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="">
                                            <p className="text-light max-w-xs lg:max-w-md">
                                                {t("access-profile", language)}
                                            </p>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <div
                                                className="text-lg md:h5 mb-5 font-bold flex justify-between active cursor-pointer"
                                                onClick={() => {
                                                    setChangeImage(false);
                                                }}
                                            >
                                                {t("family-tree", language)}{" "}
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="">
                                            <p className="text-light max-w-xs lg:max-w-md">
                                                {t("text-family-tree", language)}
                                            </p>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                            <button className="btn-primary mt-16 htp bg-primary border-primary" onClick={() => location.href=route('login')}>
                                {" "}
                                {t("sign-up", language)}{" "}
                            </button>
                        </div>
                        <div className="flex items-center justify-center lg:justify-end">
                            <img
                                src={changeImage ? device01 : device02}
                                alt=""
                                className="img-slick"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    ```
15. Crear componente **resources\js\Pages\Components\landing\Faq.tsx**:
    ```tsx
    import React from "react";
    import { InertiaLink } from '@inertiajs/inertia-react';
    import useRoute from '@/Hooks/useRoute';
    import { useGlobalState } from '../../state';
    import qa from "../../assests/images/landing/icon-q&a.svg";
    import { t } from "../../helpers/translation";

    export default function Faq() {
        const [language] = useGlobalState("language");
        const route = useRoute();
        const accordian02 = (value) => {
            const removeActiveClassTab =
                document.querySelectorAll(`[data-accordion-tab]`);
            removeActiveClassTab.forEach((el) => {
                el.classList.remove("active");
            });

            const getAccordianTab = document.querySelector(
                `[data-accordion-tab=${value}]`
            );

            if (getAccordianTab) {
                getAccordianTab.classList.add("active");
            }

            const removeActiveClass = document.querySelectorAll(
                `[data-accordion-content]`
            );

            removeActiveClass.forEach((el) => {
                el.classList.remove("active");
            });

            // add active class on click
            const getAccordian = document.querySelector(
                `[data-accordion-content=${value}]`
            );
            if (getAccordian) {
                getAccordian.classList.add("active");
            }
        };

        return (
            <div className="lg:container-full mx-auto sm:px-4 xl:px-4-3 lg:my-40 py-10 xl:mt-56">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-10 lg:gap-8rem">
                    <div className="flex justify-between flex-col lg:max-w-md sm:px-0 px-4">
                        <div className="mx-auto sm:px-4">
                            <div className="text-2xl md:text-3xl landing-3 lg:heading mb-4 sm:mb-8 font-bold lg:max-w-xs">
                                {t("preguntas", language)}
                            </div>
                            <p>
                                {t("texto-preguntas", language)}
                            </p>
                        </div>
                        <img src={qa} alt="" className="img-qa mt-5 md:mt-0" />
                    </div>
                    <div className="accordion faq lg:px-0 px-4">
                        <div
                            className="text-lg md:h5 cursor-pointer font-bold flex justify-between active hover:text-light focus:text-light px-3 mt-3-7 lg:mt-0"
                            data-accordion-tab="five"
                            onClick={() => accordian02("five")}
                        >
                            {t("implicaciones", language)}
                        </div>
                        <div
                            data-accordion-content="five"
                            className="active text-light lg:max-w-md px-3"
                        >
                            {t("texto-implicaciones", language)}
                        </div>
                        <div className="border-bottom-1"></div>
                        <div
                            className="text-lg md:h5 cursor-pointer font-bold flex justify-between py-6 sm:py-10 hover:text-light focus:text-light px-3"
                            data-accordion-tab="six"
                            onClick={() => accordian02("six")}
                        >
                            {t("servicios", language)}
                        </div>
                        <div
                            data-accordion-content="six"
                            className="text-light lg:max-w-sm px-3"
                        >
                            {t("texto-servicios", language)}
                        </div>
                        <div className="border-bottom-1"></div>
                        <div
                            className="text-lg md:h5 cursor-pointer font-bold flex justify-between py-6 sm:py-10 hover:text-light focus:text-light px-3"
                            data-accordion-tab="seven"
                            onClick={() => accordian02("seven")}
                        >
                            {t("doble-nacionalidad", language)}
                        </div>
                        <div
                            data-accordion-content="seven"
                            className="text-light lg:max-w-md px-3"
                        >
                            {t("texto-doble-nacionalidad", language)}
                        </div>
                        <div className="border-bottom-1"></div>
                        <p className="text-base text-light mt-11 sm:mt-12 md:mt-10 mx-3 font-bold">
                            <span className="text-sm md:text-base">
                                {t("no-search", language)}
                            </span>{" "}
                            <b>
                                <InertiaLink
                                    href="#"
                                    className="text-dark underline"
                                >
                                    {t("vistazo", language)}
                                </InertiaLink>
                            </b>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    ```
16. Crear componente **resources\js\Pages\Components\landing\LegalServices.tsx**:
    ```tsx
    import React from "react";
    import { InertiaLink } from '@inertiajs/inertia-react';
    import useRoute from '@/Hooks/useRoute';
    import { useGlobalState } from '../../state';
    import Legal01 from "../../assests/images/landing/file1.svg";
    import Legal02 from "../../assests/images/landing/file2.svg";
    import Legal03 from "../../assests/images/landing/file3.svg";
    import legalarrow01 from "../../assests/images/landing/legal-arrow01.png";
    import legalarrow02 from "../../assests/images/landing/legal-arrow02.png";
    import { t } from '../../helpers/translation';

    export default function LegalServices() {
        const [language] = useGlobalState("language");
        const route = useRoute();

        return (
            <div className="container-full mt-3-7 px-4 lg:mt-9-3 pb-12 xl:pb-6-5rem">
                <div className="">
                    <div className="text-3xl md:heading lg:px-28 lg:text-center mb-3 md:mb-5 xl:mb-10 lg:mb-6-3 font-bold">
                        {t("ls_legal", language)}
                    </div>
                </div>
                <div className="">
                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-0">
                        <div className="group">
                            <div className="pt-12 pb-3 sm:py-12 px-8 xl:px-10 box-legal duration-200 w-full xl:w-420 xl:h-576">
                                <img
                                    src={Legal01}
                                    alt=""
                                    className="img-responsive mb-10 sm:mb-14"
                                />
                                <div className="text-lg md:text-2xl mb-5 font-bold">
                                    {t("ls_planning", language)}
                                </div>
                                <p className="mb-7	sm:mb-16 md:max-w-xs">
                                    {t("ls_planning_text", language)}
                                </p>
                                <InertiaLink
                                    href="#"
                                    className="group-hover:text-primary font-bold flex items-center xl:justify-end"
                                >
                                    <span className="xl:ml-3 group-hover:opacity-100 xl:opacity-0 duration-200 text-primary">
                                        {t("ls_view", language).toUpperCase()}
                                    </span>
                                    <img
                                        src={legalarrow01}
                                        alt=""
                                        className="h-4 group-hover:opacity-0 duration-200 ml-3"
                                    />
                                    <img
                                        src={legalarrow02}
                                        alt=""
                                        className="h-4 group-hover:opacity-100 opacity-0 duration-200"
                                    />
                                </InertiaLink>
                            </div>
                        </div>
                        <div className="group">
                            <div className="pt-12 pb-3 sm:py-12 px-8 xl:px-10 box-legal duration-200 w-full xl:w-420 xl:h-576">
                                <img
                                    src={Legal02}
                                    alt=""
                                    className="img-responsive mb-10 sm:mb-14"
                                />
                                <div className="text-lg md:text-2xl mb-5 font-bold">
                                    {t("ls_state", language)}
                                </div>
                                <p className="mb-7 sm:mb-16 md:max-w-xs">
                                    {t("ls_state_text", language)}
                                </p>
                                <InertiaLink
                                    href="#"
                                    className="group-hover:text-primary font-bold flex items-center xl:justify-end"
                                >
                                    <span className="xl:ml-3 group-hover:opacity-100 xl:opacity-0 duration-200 text-primary">
                                        {t("ls_view", language).toUpperCase()}
                                    </span>
                                    <img
                                        src={legalarrow01}
                                        alt=""
                                        className="h-4 group-hover:opacity-0 duration-200 ml-3"
                                    />
                                    <img
                                        src={legalarrow02}
                                        alt=""
                                        className="h-4 group-hover:opacity-100 opacity-0 duration-200"
                                    />
                                </InertiaLink>
                            </div>
                        </div>
                        <div className="group">
                            <div className="pt-12 pb-3 sm:py-12 px-8 xl:px-10 box-legal duration-200 w-full xl:w-420 xl:h-576">
                                <img
                                    src={Legal03}
                                    alt=""
                                    className="img-responsive mb-10 sm:mb-14"
                                />
                                <div className="text-lg md:text-2xl mb-5 font-bold">
                                    {t("ls_insurance", language)}
                                </div>
                                <p className="mb-7 sm:mb-16 md:max-w-xs">
                                    {t("ls_insurance_text", language)}
                                </p>
                                <InertiaLink
                                    href="#"
                                    className="group-hover:text-primary font-bold flex items-center xl:justify-end"
                                >
                                    <span className="xl:ml-3 group-hover:opacity-100 xl:opacity-0 duration-200 text-primary">
                                        {t("ls_view", language).toUpperCase()}
                                    </span>
                                    <img
                                        src={legalarrow01}
                                        alt=""
                                        className="h-4 group-hover:opacity-0 duration-200 ml-3"
                                    />
                                    <img
                                        src={legalarrow02}
                                        alt=""
                                        className="h-4 group-hover:opacity-100 opacity-0 duration-200"
                                    />
                                </InertiaLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    ```
17. Crear componente **resources\js\Pages\components\landing\Expert.tsx**:
    ```tsx
    import React from "react";
    import expert01 from "../../assests/images/landing/expert01.png";
    import expert02 from "../../assests/images/landing/expert02.png";
    import expert03 from "../../assests/images/landing/expert03.png";
    import expert04 from "../../assests/images/landing/expert04.png";
    import { useGlobalState } from '../../state';
    import { t } from '../../helpers/translation';

    export default function Expert() {
        const [language] = useGlobalState("language");
        return (
            <div className="container-full mx-auto lg:mt-36 md:mb-32 mt-3-7">
                <div className="grid lg:grid-cols-2 gap-5 lg:gap-20">
                    <div className="ml-4 xl:ml-9-3rem">
                        <div className="bg-gray pl-7 py-6 pr-3 flex items-end max-w-xs w-64 sm:w-80 h-36 justify-between">
                            <div className="sm:pr-3.5">
                                <p className="font-bold mb-3">
                                    Dr. Crisanto Antonio Bello Vetencourt
                                </p>
                                <p className="text-xs sm:text-sm">{t('ex_president', language)}</p>
                                <p className="text-xs sm:text-sm">{t('ex_based_sevilla', language)}</p>
                            </div>
                            <img src={expert01} alt="" className="w-14 sm:img-responsive" />
                        </div>
                    </div>
                    <div className="justify-end flex mr-4 xl:mr-28">
                        <div className="bg-gray pl-7 py-6 pr-3 flex max-w-xs w-64 sm:w-80 h-32 justify-between">
                            <div className="sm:pr-3.5 flex items-center">
                                <div className="">
                                    <p className="font-bold mb-3">José Daniel González</p>
                                    <p className="text-xs sm:text-sm">{t('ex_vice_president', language)}</p>
                                    <p className="text-xs sm:text-sm">{t('ex_based_sevilla', language)}</p>
                                </div>
                            </div>
                            <div className="flex items-end">
                                <img src={expert02} alt="" className="w-14 sm:img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <div className="text-xxl px-4 md:max-w-lg lg:max-w-2xl xl:max-w-3xl text-center mx-auto font-bold  xl:leading-20">
                        {t('ex_nosostros', language)}{" "}
                        <span className="text-orange text-dark px-2 pb-2">
                            {t('ex_expertos', language)}{" "}
                        </span>{" "}
                        {t('ex_quien', language)}{" "}
                        <span className="text-blue text-dark px-2 pb-2">
                            {t('ex_amigo', language)}
                        </span>{" "}
                        {t('ex_clientes', language)}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-5 lg:gap-20 mx-auto">
                    <div className="ml-4 lg:ml-20 xl:ml-12-5rem mt-12 xl:mt-16">
                        <div className="bg-gray pl-7 py-6 pr-3 flex items-center sm:items-end max-w-xs w-64 sm:w-80 h-36 justify-between">
                            <div className="pr-2 sm:pr-3.5">
                                <p className="font-bold  mb-3">Abel Aranda</p>
                                <p className="text-xs sm:text-sm">
                                    {t('ex_inmigration', language)}
                                </p>
                            </div>
                            <div className="flex items-end h-full sm:inline-block">
                                <img src={expert03} alt="" className="w-20 sm:img-responsive" />
                            </div>
                        </div>
                    </div>
                    <div className="justify-end flex mr-4 lg:mr-20 xl:mr-10-5rem">
                        <div className="bg-gray pl-7 py-6 pr-3 flex items-end max-w-xs w-64 sm:w-80 h-32 justify-between xl:mt-12">
                            <div className="sm:pr-3.5">
                                <p className="font-bold  mb-3">Mariantonia Palacios</p>
                                <p className="text-xs sm:text-sm pr-10 sm:pr-0">
                                    {t('ex_communication', language)}
                                </p>
                            </div>
                            <img src={expert04} alt="" className="w-14 sm:img-responsive" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:mb-0 sm:px-4 my-12 lg:px-0">
                    <button className="btn-primary uppercase mx-4 htp bg-primary border-primary">
                        {t('ex_boton', language)}
                    </button>
                </div>
            </div>
        );
    }
    ```
18. Crear componente **resources\js\Pages\components\landing\Footer.tsx**:
    ```tsx
    import React from "react";
    import { useGlobalState } from '../../state';
    import logo from "../../assests/images/landing/Logo.png";
    import fb from "../../assests/images/landing/icon-faceboook.svg";
    import insta from "../../assests/images/landing/icon-instagram.svg";
    import twt from "../../assests/images/landing/icon-twitter.svg";
    import yt from "../../assests/images/landing/icon-youtube.svg";
    import { t } from '../../helpers/translation';

    export default function Footer() {
        const [language] = useGlobalState("language");
        return (
            <div className="container-full mx-auto px-4 xl:px-4-3 pb-12 md:pb-20">
                <div className="border-top-1 pb-8 sm:pb-12"></div>
                <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-10 text-light">
                    <div>
                        <img
                            src={logo}
                            className="w-24 sm:w-28 object-contain mb-8 md:mb-0"
                            alt="logo"
                        />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-5">
                        <div>
                            <p className="font-bold text-dark">{t('fo_phone', language)}</p>
                            <p className="my-5">
                            <span className="font-bold">US:</span>{" "}
                            <span className="underline">
                                <a rel="noreferrer" target="_blank" href="tel:+16032621727">
                                    +1 6032621727
                                </a>
                            </span>
                            </p>
                            <p>
                                <span className="font-bold">ES:</span>{" "}
                                <span className="underline">
                                    <a rel="noreferrer" target="_blank" href="tel:+34911980993">
                                        +34 911980993
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className="mb-5 mt-10 md:mt-11">
                                <span className="font-bold">VE:</span>{" "}
                                <span className="underline">
                                    <a rel="noreferrer" target="_blank" href="tel:+582127201170">
                                        +58 2127201170
                                    </a>
                                </span>
                            </p>
                            <p>
                                <span className="font-bold">CO:</span>{" "}
                                <span className="underline">
                                    <a target="_blank" rel="noreferrer" href="tel:+570353195843">
                                        +57 0353195843
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className="font-bold text-dark mt-12 md:mt-0">
                                {t('fo_email', language)}
                            </p>
                            <p className="mt-5 sm:mt-4">
                                <a className="text-light" href="mailto:info@sefaruniversal.com">
                                    info@sefaruniversal.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:flex justify-between items-center text-light mt-12 md:mt-24">
                    <p className="text-sm mb-3 sm:mb-0 hidden md:block">
                        {t('fo_copyright', language)}
                    </p>
                    <nav className="list-none flex items-center md:mr-18">
                        <li className="mr-2.5">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={fb} alt="" />
                            </a>
                        </li>
                        <li className="mr-2.5">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.instagram.com/"
                            >
                                <img src={insta} alt="" />
                            </a>
                        </li>
                        <li className="mr-2.5">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/?lang=en"
                            >
                                <img src={twt} alt="" />
                            </a>
                        </li>
                        <li className="mr-2.5">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/login"
                            >
                                <img src={yt} alt="" />
                            </a>
                        </li>
                    </nav>
                    <p className="mt-3-3 md:hidden">{t('fo_copyright', language)}</p>
                </div>
            </div>
        );
    }
    ```


## Diseño de la vista de registro
::: tip Referencias
+ [Autenticación de google en React | Google Oauth2](https://www.youtube.com/watch?v=n31zT7DAsaM)
+ [NPM React Google Login](https://www.npmjs.com/package/react-google-login)
+ [NPM React Facebook Login](https://www.npmjs.com/package/react-facebook-login)
+ [Documentación google-autentication-react](https://github.com/spartacus20/google-autentication-react)
+ [Autenticación de Facebook en React JS](https://www.youtube.com/watch?v=rioCHOtitzk)
:::
1. Instalar dependencias:
    + $ npm i react-phone-number-input@^3.1.25
    + $ npm i --save-dev @types/react-phone-number-input
    + $ npm install gapi-script
        + **Nota**: Para conectarse con las API's de Google.
    + $ npm install react-google-login --force
    + $ npm install react-facebook-login --force
    + $ npm i --save-dev @types/react-facebook-login --force
        + **Nota**: Para compatibilizar con TypeScript
2. Modificar el archivo de configuración **config\services.php**:
    ```php
    //...
    return [
        // ...
        'google_client_id' => env('GOOBLE_CLIENT_ID'),
        'facebook_client_id' => env('FACEBOOK_CLIENT_ID')
    ];
    ```
3. Modificar el provider **app\Providers\AppServiceProvider.php**:
    ```php
    // ...
    class AppServiceProvider extends ServiceProvider
    {
        // ...
        use Inertia\Inertia;
        // ...
        public function register()
        {
            Inertia::share('google_client_id', config('services.google_client_id'));
            Inertia::share('facebook_client_id', config('services.facebook_client_id'));
        }
        // ...
    }
    ```
4. Modificar estilos **resources\css\app.css**:
    ```css
    /* ... */
    .buttonSocialNetwork {
        padding-left: 42px!important;
        padding-right: 42px!important;
        font-size: 14px!important;
        font-weight: bold!important;
        font-family: 'Roboto', sans-serif!important;
        font-weight: normal!important;
        white-space: nowrap!important;
        border-radius: 5px!important;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px!important;
        width: 290px!important;
        height: 40px!important;
        color: #262D47!important;
    }
    ```
5. Modificar **resources\js\Pages\Auth\Register.tsx**:
    ```tsx
    ≡
    ≡
    ```
6. Çrear archivo de estilos **resources\js\Pages\components\auth\register\CustomerRegister.css**:
    + **Nota**: seguir la ruta para ver el código.
7. Crear componente **resources\js\Pages\components\auth\register\CustomerRegister.tsx**:
    ```tsx
    ≡
    ≡
    ```
8.  Crear componente **resources\js\Pages\components\auth\register\StepWizzard.tsx**:
    ```tsx
    ≡
    ≡
    ```
9.  Crear componente **resources\js\Pages\components\auth\register\LogoutPopup.tsx**:
    ```tsx
    ≡
    ≡
    ```
10. mmmm




rfc












    ```php
    ≡
    ≡
    ```


## Elaboración de la documentación del proyecto
::: tip Documentación
+ [Video explicativo de YouTube](https://www.youtube.com/watch?v=o334x1W_RDY).
+ [Página oficial de VuePress](https://vuepress.vuejs.org).
<p></p>
:::

1. Instalar VuePress:
    + Crear ruta **00soportes\documentacion**.
    + $ cd 00soportes\documentacion
    + $ npm init
        + **00soportes\documentacion\package.json**:
        ```json
        {
            "name": "documentacion",
            "version": "1.0.0",
            "description": "Documentación para la página principal de Sefar",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "author": "Pedro Bazó",
            "license": "ISC"
        }
        ```
    + $ npm install -D vuepress
2. Crear **00soportes\documentacion\\.gitignore**:
    ```gitignore
    /node_modules
    ```
3. Añadir script en **00soportes\documentacion\package.json**:
    ```json{4,5}
    //...
    "scripts": {
        //...
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs"
    },
    //...
    ```
4. Crear archivo de documentación **00soportes\documentacion\docs\README.md**:
    ```md
    ---
    home: true
    heroImage: /img/logo.png
    heroText: App Sefar Universal
    tagline: Documentación
    actionText: Comenzar →
    actionLink: /tutorial/
    footer: MIT Licensed | Copyright © 2022-Sefar Universal
    ---
    ```
    + Colocar logo de la empresa en **00soportes\documentacion\docs\.vuepress\public\img\logo.png**
    ::: tip Documentación
    + [VuePress - Markdown Extensions](https://vuepress.vuejs.org/guide/markdown.html#custom-containers)
    + [VuePress - Default Theme Config](https://vuepress.vuejs.org/theme/default-theme-config.html)
    <p></p>
    :::
5. Crear guía de desarrollo de la aplicación **00soportes\documentacion\docs\dev\README.md**.
    ::: tip Nota
    + Seguir la ruta para ver el código.
    + [Repositorio de GitHub](https://github.com/petrix12/sefar2022).
    <p></p>
    :::
    ::: tip Documentación
    + [Programming Historian - Introducción a Markdown](https://programminghistorian.org/es/lecciones/introduccion-a-markdown)
    + [VuePress - Markdown Extensions](https://vuepress.vuejs.org/guide/markdown.html#custom-containers)
    + [VuePress - Default Theme Config](https://vuepress.vuejs.org/theme/default-theme-config.html)
    :::
6. Crear guía para uso de la aplicación **00soportes\documentacion\docs\tutorial\README.md**.
    <p></p>
    ::: tip Nota
    + Seguir la ruta para ver el código.
    + [Repositorio de GitHub](https://github.com/petrix12/sefar2022).
    <p></p>
    :::
7. Crear archivo de configuración **00soportes\documentacion\docs\\.vuepress\config.js**:
    ```js
    module.exports = {
        title: 'Documentación App Sefar',
        description: 'Documentación sobre el desarrollo y uso de la aplicación web App Sefar',
        themeConfig: {
            nav: [
                { text: 'Inicio', link: '/' },
                { text: 'Desarrollo', link: '/dev/' },
                { text: 'Sefar', link: 'https://www.sefaruniversal.com' }
            ],
            sidebar: {
                '/dev/': [
                    ''
                ],
                '/tutorial/': [
                    ''
                ]
            }
        }
    }
    ```
8. Crear componente **00soportes\documentacion\docs\\.vuepress\components\Presentacion.vue**:
    ```vue
    <template>
        <div>
            <p align="center">
                <a href="https://github.com/petrix12" target="_blank">
                    <img src="https://raw.githubusercontent.com/petrix12/imagenes2022/main/Sefar/logo-transparente.png" height="80" alt="Soluciones++ Logo">
                </a>
            </p>
            <h2 align="center"><strong>Nuevo Portal Sefar Universal</strong></h2>
            <p align="center">Proyecto desarrollado en Laravel 9</p>
            <p align="center">
                <a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" height="60" alt="Laravel Logo"></a>
            </p>
            <p align="center">
                <a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
                <a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
                <a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
                <a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
            </p>
            <hr/>
            <p align="center"><strong>Tecnologías y servicios involucrados</strong></p>
            <p align="center">
                <a
                    v-for="(tecnologia, item) in tecnologias" :key="item"
                    :href="`${tecnologia.url}`" target="_blank"
                    style="margin: 3px"
                >
                    <img :src="`${tecnologia.img}`"  :alt="`${tecnologia.tecno}`" height="40">
                </a>
            </p>
        </div>
    </template>

    <script>
        export default {
            data() {
                return {
                    tecnologias: [
                        {url: 'https://laravel.com', img: 'https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/laravel.png', tecno: 'Laravel' },
                        {url: 'https://jetstream.laravel.com', img: 'https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/jetstream.png', tecno: 'Jetstream' },
                        {url: 'https://voyager.devdojo.com', img: 'https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/voyager.png', tecno: 'Voyager' },
                        {url: 'https://reactjs.org', img: 'https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/reactjs.png', tecno: 'React.js' },
                        {url: 'https://inertiajs.com', img: 'https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/inertia.png', tecno: 'Inertia' },
                        {url: 'https://www.mysql.com', img: 'https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/mysql.png', tecno: 'MySQL' },
                        {url: 'https://aws.amazon.com', img: 'https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/aws.png', tecno: 'AWS' },
                        {url: 'https://git-scm.com', img: 'https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/git.png', tecno: 'Git' },
                        {url: 'https://github.com', img: 'https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/github.png', tecno: 'GitHub' },
                        {url: 'https://servicioshosting.com', img: 'https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/servicioshosting.png', tecno: 'Servicios Hosting' },
                        {url: 'https://laragon.org', img: 'https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/laragon.png', tecno: 'Laragon' },
                        {url: 'https://vuejs.org', img: 'https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/vuejs.png', tecno: 'Vue.js' },
                        {url: 'https://vuepress.vuejs.org', img: 'https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/vuepress.png', tecno: 'VuePress' }
                    ]
                }
            }
        }
    </script>
    ```
9. Levantar servidor de documentación en desarrollo:
    + $ cd 00soportes\documentacion
    + $ npm run docs:dev
10. Compilar para hacer deploy:
    + $ cd 00soportes\documentacion
    + $ npm run docs:build
    ::: tip Nota
    La carpeta **00soportes\documentacion\docs\\.vuepress\dist** es la que se deberá subir a un hosting para ver el sitio.
    :::
    ::: tip Alternativa
    Otra forma de crear proyecto de doumentación más directa:
    + $ npx create-vuepress-site
    + $ cd docs
    + $ npm install
    <p></p>
    :::
11. Preparar la documentación para subirla al hosting:
    + Copiar el contenido de **00soportes\documentacion\docs\\.vuepress\dist** en **public\docs**.
    + Crear ruta para la documentación en **routes\web.php**:
    ```php
    // ...
    Route::get('/docs', function () {
        return redirect('/docs');
    })->name('documentacion');
    // ...
    ```
    + Reemplazar en **public\docs\index.html**:
        + **href="/** por **href="./**
        + **src="/img** por **src="./img**
    + Reemplazar en **public\docs\404.html**:
        + **href="/** por **href="./**
    + Reemplazar en **C:\laragon\www\sefar2022\public\docs\dev\index.html** y **public\docs\tutorial\index.html**:
        + **href="/** por **href="../**


## Modificar idiomas
+ Para agregar, quitar o actualizar idioma solamente modificar los siguientes archivos:
    + resources\js\Pages\helpers\translation.tsx
    + resources\js\Pages\components\landing\Navigation.tsx
    + resources\js\Pages\components\auth\register\CustomerRegister.tsx


## Utilidades
### Comando Laravel
+ Para borrar todas las tablas de la base de datos:
    + $ php artisan db:wipe
+ Para limpiar cache y configuración de Laravel:
    + $ php artisan optimize
    + $ php artisan cache:clear
    + $ php artisan config:clear
### Comandos Git para crear rama y luego hacer merge en la principal
1. Realizar commit antes de empezar:
    + $ git add .
    + $ git commit -am "Estado del repositorio actual"
    + $ git push -u origin master
2. Crear rama y cambiar a ella:
    + $ git checkout -b nombre-rama
3. Confirmar los cambios en la nueva rama:
    + $ git add .
    + $ git commit -am "Confirmando los cambios"
4. Volver a la rama principal y unir los cambios:
    + $ git checkout master
    + $ git rebase nombre-rama
### Forzar git pull
+ $ git fetch --all
+ $ git reset --hard origin/main
### Windows
+ Forzar el borrado de carpetas:
    + $ RD /S /Q "ruta"


## Convertir la aplicación en PWA (Aplicación Web Progresiva)
1. Crear archivo de configuración del **Service Worker** en (public\sw.js):
    ```js
    const CACHE_ELEMENTS = [
        // Incluir todas las rutas que usa la aplicación, incluyendo los CDN's
        "./",
        "./register",
        "./login",
        "./forgot-password",
        "./docs",
        "./docs/tutorial",
        "./docs/dev",
        "https://www.sefaruniversal.com",
        "https://raw.githubusercontent.com/petrix12/imagenes2022/main/Sefar/SefarLogo.png",
        "https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"
    ]

    const CACHE_NAME = "v1_cache_app_sefar"

    self.addEventListener("install", (e) => {
        e.waitUntil(
            caches.open(CACHE_NAME)
                .then(cache => {
                    cache.addAll(CACHE_ELEMENTS)
                        .then(() => {
                            self.skipWaiting()
                        }).catch(console.log)
                })
        )
    })

    self.addEventListener("activate", (e) => {
        const cacheWhiteList = [CACHE_NAME]

        e.waitUntil(
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        return (
                            cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName)
                        )
                    })
                )
            }).then(() => self.clients.claim())
        )
    })

    self.addEventListener("fetch", (e) => {
        e.respondWith(
            caches.match(e.request).then((res) => {
                if(res){
                    return res
                }
                return fetch(e.request)
            })
        )
    })
    ```
    ::: tip
    **Nota**: para establecer las propiedades de incon ir a [PWABuilder](https://www.pwabuilder.com/imageGenerator) e introducir como a imagen base la de **public\Logo.png**. En la página establecer:
        + Padding: 0
        + Background Color: Tranparent
        + Clic en **Generate** y descomprimir el zip generado en la raíz de **public**.
        + Luego eliminar los siguientes archivos:
            + public\AppImages.zip
            + public\icons.json
    Otra opción para generar las imagenes de la aplicación es ir a: https://www.npmjs.com/package/pwa-asset-generator
    :::
2. Crear archivo de registro del SW (public\register.js):
    ```js
    if(navigator.serviceWorker) {
        navigator.serviceWorker.register("./sw.js")
    }
    ```
3. Crear archivo de manifiesto **public\manifest.json**:
    ```json
    {
        "name": "Aplicación Sefar Universal",
        "short_name": "App Sefar",
        "description": "Abogados y genealogistas expertos en inmigración. Conseguimos tu pasaporte español, portugues e italiano, para que seas libre, trascendiendo fronteras.",
        "background_color": "#333333",
        "theme_color": "#333333",
        "start_url": "./",
        "scope": "./",
        "lang": "es-ES",
        "display": "standalone",
        "orientation": "portrait",
        "icons": [
            {
                "src": "windows11/SmallTile.scale-100.png",
                "sizes": "71x71"
            },
            {
                "src": "windows11/SmallTile.scale-125.png",
                "sizes": "89x89"
            },
            // ...
        ]
    }
    ```
    ::: warning Advertencia
    Ver el código completo enla ruta indicada.
    :::
4. Registrar el SW (Service Worker) en **resources\views\app.blade.php**:
    ```php
    <!-- ... -->
    <head>
        <!-- ... -->
        <!-- Meta tags PWA -->
        <meta name="theme-color" content="#333333">
        <meta name="MobileOptimized" content="width">
        <meta name="HandheldFriendly" content="true">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

        <!-- Iconos PWA -->
        <link rel="shortcut icon" href="{{ asset("./Logo.png") }}" type="image/png">
        <link rel="apple-touch-icon" href="{{ asset("./Logo.png") }}" type="image/png">
        <link rel="apple-touch-startup-image" href="{{ asset("./Logo.png") }}" type="image/png">

        <!-- Manifest PWA -->
        <link rel="manifest" href="{{ asset("./manifest.json") }}">

        <title>{{ config('app.name', 'Laravel') }} | Tus antepasados te quieren libre</title>    
        <!-- ... -->
        <script src={{ asset("./register.js") }}></script>
    </head>
    <!-- ... -->
    ```
    ::: tip
    + **Nota**: en caso de no contar con un icono para la aplicación se puede seleccionar uno en [IconFinder](https://www.iconfinder.com). Se recomienda seleccionar un icono: **Free** y **For commercial use**.
    <p></p>
    :::
::: tip Convertir la aplicación en PWA con Vite.js
+ Siguiendo la siguiente documentación se puede convertir también nuestra aplicación en PWA con Vite.js: https://vite-pwa-org.netlify.app
+ También podemos guiarnos con este curso: https://www.udemy.com/course/react-desde-cero-pwa/learn/lecture/30230462#overview
+ En resumen:
    + npm i vite-plugin-pwa -D
    + Modificar **vite.config.ts**.
:::


## Deploy en cPanel corporacioncabv
::: tip Documentación
**[Clonado y deploy desde repositorio remoto privado](https://docs.hostsuar.com/guias/hosting/entorno/git-deploy-clonado-desde-repositorio-remoto-privado-github)**
:::
1. Subir proyecto a GitHub:
    + $ git add .
    + $ git commit -am "Creación proyecto Laravel - Jetstream - Voyager"
    + $ git push
2. Ingresar al **cPanel corporacioncabv**.
3. Crear sub dominio para pruebas:
    + Ir **Domains / Domains**.
    + Clic en **Create A New Domain**.
        + Domain: test.corporacioncabv.com
        + Document Root (File System Location): public_html/test.corporacioncabv.com/public
    + Borrar en hosting: public_html/test.corporacioncabv.com
        + **Nota**: esta acción es necesario para luego poder clonar el repositorio.
4. Generar acceso SSH:
    + Ir **Security / SSH Access**.
    + Clic en **Manage SSH Keys**.
    + Clic en **Generate a New Key**:
        + Key Name (This value defaults to “id_rsa”.): id_rsa
        + Ingresar password, dejar el resto como esta y presionar **Generate Key**.
5. Obtener **Public Key**:
    + Ir **Security / Access SSH**.
    + Clic en **Manage SSH Keys**.
    + En **Public Keys** presionar en **Manage**.
    + Clic en **Authorize**.
    + Clic en **Go back**.
    + En **Public Keys** presionar en **View/Download**.
    + Copiar en un lugar seguro el valor de **Public SSH Key “id_rsa” Open Key**.
6. Dar permiso desde GitHub:
    + Ir a **GitHub / Settings / SSH and GPG keys** (https://github.com/settings/keys).
    + Clic en **New SSH key**:
        + Title: key-corporacioncabv
        + Key: el valor obtenido en **Public SSH Key “id_rsa” Open Key** del paso anterior.
        + Clic en **Add SSH key**.
7. Clonar repositorio:
    + Ir **Advanced / Terminal**:
        + Verificar que todo esta correcto:
            + $ ssh -T git@github.com
                ::: warning Advertencia
                + Respuesta esperada: Hi petrix12! You've successfully authenticated, but GitHub does not provide shell access.
                + En caso de **Permission denied (publickey)** revisar procedimiento anterior.
                <p></p>
                :::
        + $ git clone git@github.com:petrix12/sefar2022.git ~/public_html/test.corporacioncabv.com
8. Crear base de datos **corporac_sefar2022** en **Database / MySQL® Database**.
9. Crear usuario **corporac_sefar2022** para la base de datos (otorgarle todos los permisos).
10. Crear archivo de variables de entorno **00soportes\credenciales\\.env**:
    ```env
    APP_NAME="Sefar Universal"
    APP_ENV=production
    APP_KEY=base64:NIjvSdjj0MQRvdsNPrv3v6lOnhY8+ajRuQH5czB8ss0=
    APP_DEBUG=false
    APP_URL=http://test.corporacioncabv.com
    # ...
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=corporac_sefar2022
    DB_USERNAME=corporac_sefar2022
    DB_PASSWORD=********
    # ...
    ```
    ::: danger Importante
    Por seguridad, este archivo debe ser ignorado por Git.
    <p></p>
    :::
11. Subir manualmente el archivo **00soportes\credenciales\\.env** a la raíz del proyecto en el hosting.
12. Instalar dependencias y crear tablas en base de datos:
    + Ir **Advanced / Terminal**:
    + $ cd public_html/test.corporacioncabv.com
    + $ composer install
    + $ php artisan voyager:install
    + $ php artisan db:seed
    + $ php artisan key:generate
13. Instalar dependencias de npm (**ejecutar solo en caso de problemas**):
    + Ir **Advanced / Terminal**:
    + $ wget https://raw.githubusercontent.com/wnpower/NodeJS-Install/master/linux_install_nodejs.sh -O linux_install_nodejs.sh && bash linux_install_nodejs.sh
    + $ cd public_html/test.corporacioncabv.com
    + $ npm install
14. Cambiar credenciales de administrador:
    + Ingresar en **https://test.corporacioncabv.com/admin** con las credenciales:
        + Email: admin@admin.com
        + Password: password
        + Cambiar credenciales
::: tip Nota
**Para aplicar cambios en el repositorio**:
+ En local:
    + Agregar rutas nuevas y actualizar versión en **public\sw.js**:
        ```js
        const CACHE_ELEMENTS = [
            // Incluir todas las rutas que usa la aplicación, incluyendo los CDN's
            "./",
            // ...
        ]

        const CACHE_NAME = "vX_cache_app_sefar"
        // ...
        ```
    + Actualizar la documentación:
        + $ cd 00soportes\documentacion
        + $ npm run docs:build
        + Copiar el contenido de **00soportes\documentacion\docs\\.vuepress\dist** en **public\docs**.
        + Reemplazar en **public\docs\index.html**:
            + **href="/** por **href="./**
            + **src="/img** por **src="./img**
        + Reemplazar en **public\docs\404.html**:
            + **href="/** por **href="./**
        + Reemplazar en **C:\laragon\www\sefar2022\public\docs\dev\index.html** y **public\docs\tutorial\index.html**:
            + **href="/** por **href="../**
    + $ npm run build
    + $ git add .
    + $ git commit -am "Cambios"
    + $ git push
+ Ir **Advanced / Terminal**:
+ $ cd public_html/test.corporacioncabv.com
+ $ git pull
+ Si es necesario, ejecutar:
    + $ composer update
    + $ php artisan migrate
    + $ php artisan db:seed
<p></p>
:::


## Para escribir código
    ```php
    ≡
    ≡
    ```

