# Aprende a instalar Laravel 8 en Amazon Web Services
###### https://www.udemy.com/course/aprende-a-instalar-laravel-8-en-amazon-web-services

## Sección 1: Introducción

### Video 01. Crear un proyecto de Laravel
1. Crear un proyecto de Laravel:
    + $ laravel new awsejemplo
1. Instalar Jetstream al proyecto:
    + $ composer require laravel/jetstream
1. Instalar livewire:
    + $ php artisan jetstream:install livewire
1. Crear base de datos **awsejemplo** con phpMyAdmin.
1. Ejecutar migraciones:
    + $ php artisan migrate
1. Ejecutar:
    + $ npm install
    + $ npm run dev

### Video 2. Subir el proyecto a GitHub
1. Ir a https://github.com (Crea una cuenta si aún no la tienes)
1. Crear un nuevo repositorio y nombrarlo **awsejemplo**.
1. Descargar e instalar **Git** en https://git-scm.com.
1. En local ejecutar:
    + $ git init
    + $ git add .
    + $ git commit -m "Primer commit"
    + $ git remote add origin https://github.com/petrix12/awsejemplo.git
    + git branch -M main
    + git push -u origin main

## Sección 2: AWS EC2

### Video 3. Lanzar instancia en EC2
1. Ir a https://aws.amazon.com/es.
1. Ir a **Mi cuenta** > **Consola de administración de AWS** e iniciar sesión.
1. Ir al servicio **EC2** y dar clic en **Instancias New**.
1. Dar clic en el botón de **Lanzar instancia**.
1. Seleccionar:
    + Ubuntu Server 18.04 LTS (HVM), SSD Volume Type - ami-0747bdcabd34c712a (64 bits x86) / ami-08353a25e80beea3e (64 bits Arm)
1. Seleccionar el de tipo t2.micro (Apto para capa gratuita).
    #### Nota: para una aplicación real no debe bajar de t2.medium
1. Dar clic en el botón:
    + Siguiente: Página Configuración de los detalles de la instancia
    #### Nota: dejar todo como está.
1. Dar clic en el botón:    
    + Siguiente: Adición de almacenamiento
    + Establecer **Tamaño (GiB)** en **30**
1. Dar clic en el botón:
    + Siguiente: Agregar etiquetas
    #### Nota: dejar todo como está.
1. Dar clic en el botón:
    + Siguiente: Página Configure Security Group
    Y ajustar parámetros:
    + Dejar regla: **SSH**
    + Añadir regla: **HTTP**
    + Añadir regla: **HTTPS**
    + Para la regla **SSH** establecer **Origen** como **Mi IP**
    + Para las reglas **HTTP** y **HTTPS** establecer **Origen** como **Cualquier lugar**
1. Dar clic en el botón:
    + Revisar y lanzar
    #### Nota: dejar todo como está.
1. Dar clic en el botón:
    + Lanzar
    Y luego:
    + Seleccionar: Crear un nuevo par de claves
    + Nombre del par de claves: awsejemplo
    + Dar clic en el botón: Descargar par de claves
        #### Nota: Guardar en un lugar seguro y evitar que se suba a GitHub.
        #### Para este ejemplo lo guarderé en una carpeta dentro del proyecto: awsejemplo.pem, y editare el archivo **.gitignore** para evitar que se incluya en los repositorios.
        >
            /node_modules
            /public/hot
            /public/storage
            /storage/*.key
            /vendor
            .env
            .env.backup
            .phpunit.result.cache
            docker-compose.override.yml
            Homestead.json
            Homestead.yaml
            npm-debug.log
            yarn-error.log
            /.idea
            /.vscode
            awsejemplo.pem 
    + Dar clic en el botón: **Lanzar instancias**.
1. Dar clic en el botón:
    + Ver instancias

### Video 4. Conectarnos a la instancia vía SSH
1. Para los sistemas operativos Mac o Linux ejecutar:
    + $ chmod 400 awsejemplo.pem
1. Para el sistema operativo Windows:
    + Ubicar el archivo **awsejemplo.pem** en disco, presionar sobre el el botón derecho y dar clic en **Propiedades**.
    + Seleccionar la pestaña de **Seguridad**.
    + Presionar el botón: **Opciones avanzadas**.
    + Presionar el botón: **Deshabilitar herencia**.
    + Dar clic: **Quitar todos los permisos heredados de este objeto**.
    + Copiar el nombre del **Propietario** que está entre los parentisis: DESKTOP-PETRIX\Pedro Bazo
    + Presionar el botón: **Agregar**.
    + Dar clic: **Seleccionar una entidad de seguridad**.
    + En **Escriba el nombre de objeto para seleccionar** escribrie el nombre copiado en los pasos anteriores.
    + Presionar el botón: **Comprobar nombres**.
    + Presionar el botón: **Aceptar**.
    + Verificar que los permisos que tienen que estar habilitados son:
        - Lectura y ejecución
        - Lectura
    + Presionar el botón: **Aceptar**.
    + Presionar el botón: **Aceptar**.
    + Presionar el botón: **Aceptar**.
1. En el navegador ingresar a la instancias presionando abajo de **ID de la instancia** y dar clic en el botón **Conectar**.
1. Ir a **Cliente SSH** y copiar el comando de ejemplo: ssh -i "awsejemplo.pem" ubuntu@ec2-100-25-148-222.compute-1.amazonaws.com
1. En local ejecutar (en la ruta que se encuentre el archivo **awsejemplo.pem**):
    + $ ssh -i "awsejemplo.pem" ubuntu@ec2-100-25-148-222.compute-1.amazonaws.com
1. A la pregunta: Are you sure you want to continue connecting (yes/no/[fingerprint])?
    + Respondemos: yes
    #### Con esta acción hemos ingresado en el servidor de AWS.

### Video 5. Configurar nuestro servidor
1. En la terminal del servidor de AWS:
    + Actualizar servidor:
        - $ sudo apt-get update
        - $ sudo apt-get upgrade
        - Cuando pregunte: Do you want to continue? [Y/n]
            * Responder: y
    + Actualizar nuevamente el servidor:
        - $ sudo apt-get update
    + Configurar entorno para ejecutar Laravel:
        - $ sudo apt-get install software-properties-common
        - $ sudo add-apt-repository ppa:ondrej/php
        - Cuando pregunte: Press [ENTER] to continue or Ctrl-c to cancel adding it.
            * Presionamos ENTER.
        - Actualizar nuevamente el servidor:
            * $ sudo apt-get update
        - Instalar php:
            * $ sudo apt-get install php7.4
            * Cuando pregunte: Do you want to continue? [Y/n]
                * Responder: y
        - Instalar el servidor apache:
            * $ sudo apt-get install apache2
            * $ sudo apt-get install libapache2-mod-php7.4
        #### Nota: para ver la versión de php:
            * $ php -v
        - Para saber los modulos instalados en php:
            * $ php -m
            #### Constrastar contra https://laravel.com/docs/8.x/deployment#server-requirements y verificar cuales son necesarias.
        - Instalar extensiones de php necesarias para Laravel:
            * $ sudo apt-get install php7.4-bcmath
            * $ sudo apt-get install php7.4-mbstring
                * En: Do you want to continue? [Y/n]
                    Responder: y
            * $ sudo apt-get install php7.4-xml
        - Instalar paquetes que necesitaremos más adelante:
            * $ sudo apt-get install unzip
            * $ sudo apt-get install php7.4-zip
                * En: Do you want to continue? [Y/n]
                    Responder: y
            * $ sudo apt-get install php7.4-mysql
            * $ sudo apt-get install php7.4-curl
1. En el navegador:
    + Ir: **Servicios** > **EC2** > **Recursos** > **Instancias**.
    + Seleccionar nuestra instancia en ejecución.
    + Ubicar: Dirección IPv4 pública: 100.24.116.157
        #### Nota: esta es la dirección de nuestro sitio web.
1. En la terminal del servidor de AWS:
    + Reiniciar el servidor apache:
        * $ sudo service apache2 restart
    + Para verificar que no tengamos ningún error:
        * $ sudo service apache2 status
    + Habilitar el modulo rewrite
        * $ sudo a2enmod rewrite
    + Reiniciar el servidor apache:
        * $ sudo service apache2 restart
    + Definir punto de acceso a nuestra aplicación web:
        * Ingresar a la ruta: /var/www/html
            - $ cd /var/www/html
            #### Nota: para ver los archivos contenidos en una ruta:
            - $ ls
        * Editar el archivo index.html:
            - $ sudo nano index.html
            - Cambiar la etiqueta title del head por:
                >
                    <title>Hola</title>
            - Para guardar, presionar:
                + Ctrl + X
                + y
                + ENTER
        * Editar archivo de configuración de punto de acceso:
            - $ sudo nano /etc/apache2/sites-enabled/000-default.conf
            - Cambiar línea:
                * DocumentRoot /var/www/html
                Por:
                * DocumentRoot /var/www/awsejemplo/public
            - Para guardar, presionar:
                + Ctrl + X
                + y
                + ENTER
    + Reiniciar el servidor apache:
        * $ sudo service apache2 restart

### Video 6. Instalar Composer
1. Copiar de la página: https://getcomposer.org/download, el bloque de **Command-line installation**:
    >
        php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
        php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
        php composer-setup.php
        php -r "unlink('composer-setup.php');"
1. En la terminal del servidor de AWS pegar las líneas de comandos que acabamos de copiar y presionar ENTER.
1. Realizar la instalación global de composer:
    + $ sudo mv composer.phar /usr/local/bin/composer
    #### Nota: Este comando se encuentra en https://getcomposer.org/doc/00-intro.md
    #### Para comprobar que tenemos instalado composer, ejecutar:
    + $ composer

### Video 7. Clonar nuestro repositorio de Git
1. Ir a la ruta **/var/www**:
    + $ cd /var/www
1. Clonar el repositorio del proyecto:
    + $ sudo git clone https://github.com/petrix12/awsejemplo.git
1. Ir a la ruta **/var/www/awsejemplo**:
    + $ cd /var/www/awsejemplo
1. Para poder instalar las dependencias de composer, ejecutar:
    + $ sudo chown -R ubuntu:www-data .
1. Ejecutar permisos para la carpeta de laravel:
    + $ chmod -R 755 .
    + $ chmod -R 777 ./storage
1. Instalar composer:
    + $ composer install
1. Crear el archivo **.env** a partir de **.env.example**:
    + $ cp .env.example .env
1. Generar llave del proyecto:
    + $ php artisan key:generate
1. Instalar NodeJs:
    + $ sudo apt install nodejs
        * Do you want to continue? [Y/n]
            Responder: y
1. Para ver la versión de NodeJs:
    + $ nodejs -v
1. Actualizar NodeJs:
    + $ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
1. Ejecutar:
    + $ sudo apt-get install -y nodejs
1. Para ver la versión de npm:
    + $ npm -v
1. Ejecutar:
    + $ npm install
    + $ npm run dev
1. Para editar **.env**:
    + $ nano .env

## Sección 3: AWS RDS

### Video 8. Creación de la base de Datos
1. En la página de AWS buscar el servicio RDS:
    + https://console.aws.amazon.com/rds/home?region=us-east-1
    + Dar clic en el botón: **Crear base de datos**.
    + En **Elegir un método de creación de base de datos**:
        * Seleccionar la opción: **Creación estándar**.
    + En **Opciones del motor**:
        * Seleccionar la opción: **MariaDB**.
        * Seleccionar la versión: **MariaDB 10.5.8**.
    + En **Plantillas**:
        * Seleccionar la opción: **Capa gratuita**.
    + En **Configuración** > **Identificador de instancias de bases de datos**:
        * Escribir: awsejemplo-db
    + En **Configuración** > **Configuración de credenciales** > **Nombre de usuario maestro**:
        * Escribir: awsejemplo_usr
    + En **Configuración** > **Configuración de credenciales** > **Generación automática de contraseña**: Seleccionar.
    + En **Conectividad** > **Acceso público**: Seleccionar **Si**.
    + En **Configuración adicional** > **Opciones de base de datos** > **Nombre de base de datos inicial**:
        * Escribir: awsejemplo_db
    + Presionar botón: **Crear base de datos**.
    + Cuando finalice la creación de la base de datos, presionar el botón: **View credential details**.
        ##### Nota: anotar credenciales en un lugar seguro

### Video 9. Editar los "Security Group"
1. En la página de AWS seleccionar la base de datos **awsejemplo-db**: **Amazon RDS** > **Databases**.
1. Seleccionar **Conectividad y seguridad** > **Seguridad** > **Grupos de seguridad de la VPC** > default (sg-09f6e23a).
1. Seleccionar **Grupos de seguridad** > **ID del grupo de seguridad** > sg-09f6e23a
1. Seleccionar **Reglas de entrada** y presionar botón **Edit inbound rules**.
1. Presionar el botón **Agregar regla** y seleccionar el tipo **MySQL/Aurora** y seleccionar como origen **Mi IP**.
1. Presionar botón **Guardar reglas**.

### Video 10. Conectar con MySQL Workbench
1. Ir a https://www.mysql.com/products/workbench
1. Presionar el botón **Download Now »**.
1. En la siguiente página presionar el botón **Download** y luego en el enlace **No thanks, just start my download**.
1. Instalar **MySQL Workbench**.
1. En **MySQL Workbench**:
    + Seleccionar **Database** > **Manage Connections...**.
    + En el cuadro de diálogo **Manage Server Connections** suministrar la siguiente información:
        * Presionar botón: New
        * Connection Name: awsejemplo
        * Hostname: awsejemplo-db.cgfry9dn7zav.us-east-1.rds.amazonaws.com
            - Es el punto de enlace que aparece en la página de AWS: RDS > Databases > awsejemplo-db
        * Port: 3306
        * Username: awsejemplo_usr
        * Password: ************
    + Presionar botón: **Test Connection** para comprobar el estado de la conección.
    + Presionar botón: **Close**.
    + Seleccionar **Database** > **Connect to Database**.
    + En el cuadro de diálogo **Connect to Database** seleccionamos la conección **awsejemplo** y presionamos el botón **OK**.

### Video 11. Configurar las credenciales en Laravel
1. En la terminal de AWS ir a la ruta **/var/www/awsejemplo**:
    + $ cd /var/www/awsejemplo
1. En la terminal de AWS editar el archivo **.env**:
    + $ nano .env
1. Modificar los siguientes parámetros en el archivo **.env**:
    + DB_HOST=awsejemplo-db.cgfry9dn7zav.us-east-1.rds.amazonaws.com
        #### Nota: este valor se encuentra en la página de AWS en: RDS > Databases > awsejemplo-db
        #### Conectividad y seguridad -> Punto de enlace y puerto -> Punto de enlace
    + DB_DATABASE=awsejemplo_db
    + DB_USERNAME=awsejemplo_usr
    + DB_PASSWORD=*************
1. Para guardar el archivo **.env**:
    + $ Ctrl + X
    + $ y
    + $ ENTER
1. Para verificar que podemos establecer una conexión con la base de datos, ir a la terminal AWS y ejecutar:
    + $ php artisan tinker
    + >>> DB::connection()->getPdo();
    #### Nota: si el resultado de la ejecución es parecida a la que se muestra a continuación es que logramos establecer la conexión:
    >
        => PDO {#3608
            inTransaction: false,
            attributes: {
            CASE: NATURAL,
            ERRMODE: EXCEPTION,
            AUTOCOMMIT: 1,
            PERSISTENT: false,
            DRIVER_NAME: "mysql",
            SERVER_INFO: "Uptime: 13883  Threads: 8  Questions: 27672  Slow queries: 0  Opens: 214  Flush tables: 1  Open tables: 9  Queries per second avg: 1.993",
            ORACLE_NULLS: NATURAL,
            CLIENT_VERSION: "mysqlnd 7.4.21",
            SERVER_VERSION: "5.5.5-10.4.18-MariaDB-log",
            STATEMENT_CLASS: [
                "PDOStatement",
            ],
            EMULATE_PREPARES: 0,
            CONNECTION_STATUS: "awsejemplo-db.cgfry9dn7zav.us-east-1.rds.amazonaws.com via TCP/IP",
            DEFAULT_FETCH_MODE: BOTH,
            },
        }
1. Salir de tinker:
    + >>> Ctrl + C
1. Ejecutar las migraciones en la terminal de AWS:
    + $ php artisan migrate

### Video 12. Fix: Configuración del servidor
1. Ingresar al archivo de configuración de apache en la terminal de AWS:
    + $ sudo nano /etc/apache2/apache2.conf
1. Comentar las siguientes líneas con #:
    >
        # User ${APACHE_RUN_USER}
        # Group ${APACHE_RUN_GROUP}
1. A continuación agregar las líneas:
    >
        User ubuntu
        Group ubuntu
1. Cambiar el siguiente bloque de códgio:
    >
        <Directory /var/www/>
                Options Indexes FollowSymLinks
                AllowOverride None
                Require all granted
        </Directory>
    Por:
    >
        <Directory /var/www/>
                Options Indexes FollowSymLinks
                AllowOverride All 
                Require all granted
        </Directory>
1. Para guardar los cambios:
    + $ Ctrl + X
    + $ y
    + $ ENTER
1. Habilitar modo rewrite:
    + $ sudo a2enmod rewrite
1. Reiniciar el servidor de apache:
    + $ sudo service apache2 restart
1. Para ver el estatus del servidor apache:
    + $ sudo service apache2 status

## Sección 4: Configuración de dominio

### Video 13. Servicio Route 53
1. Crear un dominio con tu servicio de hosting. En mi caso utilizaré GoDaddy:
    + Ingresar al hosting de GoDaddy:
        - https://a2plcpnl0082.prod.iad2.secureserver.net:2083/
    + Ir a **DOMINIOS** > **Dominios**.
    + Presionar el botón: **CREATE NEW DOMAIN**.
    + Introducir un nombre para el dominio:
        - Nombre: prueba.sefar.com
        - No seleccionar raíz en el servidor de GoDaddy.
    + Presionar el botón: **ENVIAR**.
        - Esta operación puede tardar hasta más de 48 horas.
1. En la cuenta de AWS ingresar al servico de **Route 53**.
1. Ir a **Panel de Route 53** > **Administración de DNS** y presionar el botón: **Crear una zona alojada**.
1. En el formaulario **Crear una zona alojada** completar los siguientes campos:
    + Nombre de dominio: prueba.sefar.com
    + Descripción - opcional: Prueba de alojamiento de un proyecto Laravel 8 en AWS
    + Tipo: Zona alojada pública
1. Presionar el botón: **Crear una zona alojada**.
1. Copiar los nameservers proporcionandos por AWS en tu proveedor de servicios:
    + ns-55.awsdns-06.com
    + ns-1889.awsdns-44.co.uk
    + ns-792.awsdns-35.net
    + ns-1087.awsdns-07.org
    #### Nota: no añadir el punto final que aparece an la página al final del nameserver.
    #### Este proceso puede tardar hasta 24 horas en verse reflejado.

### Video 14. Implementar un certificado SSL
1. En la cuenta de AWS ir al servicio de AWS **Certificate Manager**.
1. En **Aprovisionar certificados** presionar el botón **Empezar**.
1. Seleccionar **Solicitar un certificado público** y presionar botón **Solicitar un certificado**.
1. En **Agregar nombres de dominio** agregar los siguientes nombre:
    + prueba.sefar.com
    + www.prueba.sefar.com
    + *.www.prueba.sefar.com
1. Presionar el botón **Siguiente**.
1. En **Seleccionar un método de validación**, seleccionar **Validación de DNS** y presionar el botón **Siguiente**.
1. En **Agregar etiquetas** lo dejamos como está y presionar el botón **Revisar**.
1. En **Revisar** presionar el botón **Confirmar y solicitar**.
1. En Validación para cada uno de los dominios dar clic en **►** y luego el botón **Crear registro en Route 53**.
1. En **Crear registro en Route 53** presionar el botón **Crear**.

### Video 15. Balanceador de carga
1. En la página de AWS ir al servicio **EC2** y **Recursos** seleccionar
 **Balanceadores de carga**.
1. Presionar el botón **Crear balanceador de carga**.
1. En **Seleccionar un tipo de balanceador de carga**, seleccionar **Balanceador de carga clásico** (Este balanceador ya está en desuso) y presionar el botón **Crear**.
1. En **Paso 1: Definir el balanceador de carga** > **Configuración básica** añadir los siguientes registros:
    + HTTP
    + HTTPS (HTTP Seguro)
1. Completar el campo **Nombre del balanceador de carga:** awsejemplo-lb y presionar el botón **Siguiente: Asignar grupos de seguridad**.
1. En **Paso 2: Asignar grupos de seguridad** seleccionar el **ID de grupo de seguridad** que coincide con **EC2** > **Instancias** > **i-01f753a2118350336**, luego **Seguridad** y **Grupos de seguridad**.
1. Presionar botón **Siguiente: Configurar los ajustes de seguridad**.
1. En **Paso 3: Configurar los ajustes de seguridad** > **Seleccionar certificado** > **Tipo de certificado:**, seleccionar **Elegir un certificado de ACM (recomendado)**.
1. Presionar botón **Siguiente: Configurar comprobación de estado**.
1. En **Step 4: Configure Health Check**, establecer el parámetro **Ping Path**: /index.phpn y presionamos en **Next: Add EC2 Instances**.
1. En **Step 5: Add EC2 Instances** seleccionamos la instancia que estamos trabajando y presionamos en **Next: Add Tags**.
1. En **Step 6: Add Tags** lo dejamos como está y presionamos en **Review and Create**.
1. En **Step 7: Review** verificamos los valores y presionamos en **Create**.

### Video 16. Añadir Alias para el balanceador
1. En AWS ir al servicio de **Route 53**, vamos a **Zonas hospedadas** y en **Zonas alojadas** seleccionamos la zona que hemos creado.
1. Ubicados en **Route 53** > **Zonas hospedadas** > **prueba.sefar.com** presionamos en **Crear un registro**.
1. Para los parámetros del nuevo registro:
    + Activamos **Alias**.
    + En **Tipo de registro** seleccionar: **A: dirige el tráfico a una dirección IPv4 y algunos recursos de AWS**.
    + En **Dirigir el tráfico a** seleccionamos: **Alias del Calssic Load Balancer y el de aplicaciones**.
    + En **Elegir la región** seleccionar la región en la que esta montado la instancia.
    + Presionar el botón **Crear registros**.
1. Crear otro registro:
1. Para los parámetros del nuevo registro:
    + Activamos **Alias**.
    + Nombre del registro: **www**.
    + En **Tipo de registro** seleccionar: **A: dirige el tráfico a una dirección IPv4 y algunos recursos de AWS**.
    + En **Dirigir el tráfico a** seleccionamos: **Alias del Calssic Load Balancer y el de aplicaciones**.
    + En **Elegir la región** seleccionar la región en la que esta montado la instancia.
    + El registro debe apuntar a nuestro dominio.
    + Presionar el botón **Crear registros**.
1. Crear nuevamente otro registro, igual al paso anterior pero en nombre del registro colocamos *.

### Video 17. ¡El gran momento!
1. Ingresa a la terminal y escribe:
    + $ sudo nano /etc/apache2/sites-enabled/000-default.conf
1. Al editar el archivo anterior añadir las siguientes reglas:
    + RewriteEngine On
    + RewriteCond %{HTTP:X-Forwarded-Proto} =http
    + RewriteRule .* https://%{HTTP:Host}%{REQUEST_URI} [L,R=permanent]
    ##### Nota: añadir al final del archivo y antes del cierre de </VirtualHost>
1. Salvar el archivo: 
    + $ Ctrl + X
    + $ y
    + $ ENTER
1. Reiniciar el servidor de apache:
    + $ sudo service apache2 restart
