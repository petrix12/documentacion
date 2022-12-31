# Curso práctico de Docker y Microservicios (apto para todos)
+ Instructor: Juan Ramos


## URL's
::: tip Direcciones web
+ [Curso práctico de Docker y Microservicios (apto para todos)](https://www.udemy.com/course/curso-practico-de-docker-y-microservicios-desde-cero).
+ [Repositorio del curso](https://github.com/petrix12/docker2022.git).
:::


## Creación del repositorio en GitHub
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **docker2022**.
    + **Description**: Proyecto para seguir el curso "Curso práctico de Docker y Microservicios (apto para todos)", creado por Juan Ramos.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/docker2022.git
    + $ git push -u origin main


## Utilidades
::: tip Enlaces de interes
+ **[Cómo Desplegar Laravel con Docker en Ubuntu 18.04](https://help.clouding.io/hc/es/articles/360010679999-C%C3%B3mo-Desplegar-Laravel-con-Docker-en-Ubuntu-18-04)**.
:::
::: tip Comando Docker comunes
Para eliminar todos los contenedores:
+ $ docker stop $(docker ps -a -q)
+ $ docker rm $(docker ps -a -q)
Para eliminar todos las imagenes:
+ $ docker rmi $(docker images -q)
Iniciar un contenedor:
+ $ docker run nombre_del_contenedor
Listar contenedores:
+ $ docker ps
Detener un contendor:
+ $ docker stop id_del_contenedor
Eliminar un contenedor:
+ $ docker rm nombre_o_id_del_contenedor
Listar imágenes:
+ $ docker images
Eliminar una imagen:
+ $ docker rmi nombre_de_la_imagen
Descargar una imagen:
+ $ docker pull nombre_de_la_imagen
Ejecutar un comando sobre un contenedor:
+ $ docker exec nombre_o_id_del_contenedor comando_a_ejecutar
:::


## Sección 1: Introducción general
### 1. Importancia: Qué problemas resuelve Docker
### 2. Historia breve: Máquinas virtuales y Docker
### 3. VMs y Containers no son enemigos
### 4. Microservicios: Visión general
### 5. Microservicios: Casos reales


## Sección 2: Iniciando con Docker
### 6. Docker: Containers & Images
### 7. ¿Cómo usar Docker según mi SO?
+ **[Página oficial de VirtualBox](https://www.virtualbox.org)**.
+ **[Página oficial de Ubuntu](https://ubuntu.com)**.
1. Descargar e instalar **[VirtualBox](https://www.virtualbox.org/wiki/Downloads)**.
2. Descargar imagen **[Ubuntu Desktop](https://ubuntu.com/#download)**.
3. Ejecutar **VirtualBox**.
4. Crear máquina virtual haciendo clic en **Nueva**:
    + Nombre: Ubuntu
    + Memoria base: 2048 MB
    + Disco duro virtual: 10 GB
5. Iniciar máquina virtual en **Iniciar**.
    ::: tip Nota
    Como es la primera vez que se inicia esta máquina virtual, se solicitará un disco de inicio, en este caso se facilitará la imagen de Ubuntu descargada anteriormente.
    :::
    ::: warning Advertencia
    Es posible, que dependiendo de la versión del sistema operativo Windows, sea necesario desactivar **Hyper-V**. Para esto, ejecutar en una terminal de windows, como administrador, el siguiente comando:
        + $ bcdedit /set hypervisorlaunchtype off
    <p></p>
    :::
    + Instalar Ubuntu en ingles en la máquina virtual.
    + Seleccionar la instalación mínima.
    + Ingresar datos básicos.
    + Establecer contraseña en **12345678**.
    + Reiniciar Ubuntu luego de la instalación.
::: tip Nota
Luegar por defecto en donde se almacenan las máquinas virtuales en VirtualBox:
+ C:\Users\bazop\VirtualBox VMs
:::

### 8. VM a pantalla completa
### 9. Instalación en Linux
1. Instalar Docker en la máquina virtual:
    + Ir https://docs.docker.com/desktop/install/ubuntu 
    + Descargar Docker
    ```
    + $ sudo apt remove docker-desktop
    + $ sudo apt-get update
    + $ sudo apt-get install ./docker-desktop-<version>-<arch>.deb
    + $ sudo usermod -aG docker pedro
    ```

### 10. Instalación para Windows
+ **[Docker Desktop](https://docs.docker.com/desktop)**.
+ **[Install on Windows](https://docs.docker.com/desktop/install/windows-install)**.
::: tip Nota
Otras alternativas para trabajar con Docker en Windows:
+ Docker Toolboc en Windows
+ Docker Desktop for Windows
:::
1. Descargar e instalar [Docker Desktop for Windows](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)

### 11. Instalación para Mac
+ **[Docker Desktop](https://docs.docker.com/desktop)**.
+ **[Install on Mac](https://docs.docker.com/desktop/install/mac-install)**.
::: tip Nota
Otras alternativas para trabajar con Docker en Windows:
+ Docker Toolboc en Mac
+ Docker Desktop for Mac
:::


## Sección 3: Comandos básicos
### 12. Lista de comandos básicos
::: tip Comandos básicos
+ Docker Run (Iniciar un contenedor):           $ docker run nombre_del_contenedor
+ Docker Ps (Listar contenedores):              $ docker ps
+ Docker Stop (Detener un contendor):           & docker stop id_del_contenedor
+ Docker Rm (Eliminar un contenedor):           $ docker rm nombre_o_id_del_contenedor

+ Docker Images (Listar imágenes):              $ docker images
+ Docker Rmi (Eliminar una imagen):             $ docker rmi nombre_de_la_imagen
+ Docker Pull (Descargar una imagen):           $ docker pull nombre_de_la_imagen

+ Docker Exec (Ejecutar sobre un contenedor):   $ docker exec nombre_o_id_del_contenedor comando_a_ejecutar
:::

### 13. Docker Run, Ps, Rm, Images & Rmi
::: tip Algunos comandos Docker
1. Obtener lista de contenedores en ejecución:
    + $ docker ps
2. Obtener lista de todos los contenedores:
    + $ docker ps -a
3. Iniciar contenedor:
    + $ docker pull nombre_de_la_imagen
4. Ejecutar contenedor:
    + $ docker run nombre_del_contenedor
5. Eliminar un contenedor por su nombre:
    + $ docker rm nombre_del_contenedor
6. Eliminar un contenedor por su id:
    + $ docker rm id_del_contenedor
:::
1. Iniciar un contenedor centos:
    + $ docker pull centos
    ::: tip Nota
    Este comando buscará la imagen de centos localmente, y si no la encuentra, entonces, la descargará de internet.
    :::
2. Ejecutar el contenedor **centos** y que se active durante 30 segundos:
    + $ docker run centos sleep 30
3. Ejecutar el contenedor **centos** y que se active durante 30 segundos sin afectar la terminal:
    + $ docker run -d centos sleep 30
    ::: tip Nota
    Con la instrucción **-d** el contenedor se ejecutará en segundo plano.
    :::
4. Para ver el contendor **centos**:
    + $ docker ps -a
5. Remover contenedor a partir de su ID **1e9eba1485a4**:
    + $ docker rm 1e9eba1485a4
6. Remover contenedor a partir de su name **bold_chandrasekhar**:
    + $ docker rm bold_chandrasekhar
7. Remover la imagen **centos**:
    + $ docker rmi centos
    ::: warning Advertencia
    Antes de eliminar la imagen, es necesario eliminar todos los contenedores que la estan usando.
    :::
::: tip Nota
Para eliminar un contenedor basta con escribir los primeros caracteres de su **id** o **name**, siempre y cuando no coincida con otro.
:::

### 14. Docker Pull, Stop & Exec
1. Descargar contenedor **centos**:
    + $ docker pull centos
2. Ejecutar contenedor con la imagen de **centos** por 500 segundos en segundo plano:
    + $ docker run -d centos sleep 500
3. Para el contenedor que acabamos de iniciar:
    + $ docker stop 9bfd3
    ::: tip Nota
    Bastará solo con escribir los primeros caracteres del id del contenedor, siempre y cuando no coincida con el de otro.
    :::
4. Obtener la versión de **centos**:
    + $ docker exec gracious_chatterjee cat /etc/os-release
    ::: tip Nota
    Para ejecutar este comando, el contenedor deberá estar en ejecución.
    :::

### Cuestionario 1: Prueba 1: Fundamentos de Docker
+ **Pregunta 1:** Hay muchos motivos por los que Docker es bastante popular hoy en día. Selecciona un motivo correcto entre las alternativas siguientes:
    + Los contenedores de Docker comparten el mismo Kernel. Eso los hace más rápido de iniciar, más ligeros y más portables.
+ **Pregunta 2:** ¿Las máquinas virtuales se pueden usar en conjunto con los contenedores de Docker?
    + Si. Es posible tener máquinas virtuales, y contenedores dentro de ellas.
+ **Pregunta 3:** Es correcto respecto a los microservicios:
    + Es un enfoque o estilo arquitectural, que consiste en contar con múltiples proyectos de desarrollo, asociando una funcionalidad específica a cada uno.
+ **Pregunta 4:** Son motivos por los que las grandes empresas tecnológicas suelen adoptar un enfoque basado en microservicios. A excepción de uno:
    + Se requiere de una menor cantidad de desarrolladores de software para operar los microservicios.
+ **Pregunta 5:** ¿Cuál es la diferencia entre contenedores e imágenes?
    + Una imagen es de solo lectura. Un contenedor resulta de la ejecución de una imagen.
+ **Pregunta 6:** Acerca de la instalación de Docker, es correcto decir que:
    + Para usar contenedores Linux necesitamos un host Linux. Hay alternativas para Windows y Mac, a fin de ejeuctar contenedores Linux.
+ **Pregunta 7:** Acerca del comando docker run:
    + Inicia un contenedor a partir de una imagen. De ser necesario hace pull de la imagen.
+ **Pregunta 8:** Acerca del comando docker ps:
    + Lista los contenedores que están ejecutandose. Si se le añade -a los lista todos.
+ **Pregunta 9:** Acerca del comando docker images:
    + Lista las imágenes dispnibles localmente.
+ **Pregunta 10:** Acerca del comando `docker rmi`:
    + Permite eliminar imágenes. Es conveniente que no existan conenedores asociados, o el Docker daemon advertirá de ello.
+ **Pregunta 11:** ¿Qué ocurre si se usa docker stop sobre un contenedor y luego docker exec sobre el mismo?
    + El contenedor se detine, pero docker exec no funciona, ya que el contenedor ya no está ejecutándose.
+ **Pregunta 12:** Acerca de Hyper-V y VirtualBox, es correcto decir que:
    + Hyper-V solo funciona con la familia de sistemas operativos Windows, mientras que VirtualBox es multiplataforma.


## Sección 4: Bash & Docker Images
### 15. Shell Scripting
1. Crear carpeta para script de bash **Scripts**.
2. Crear script **infinite-counter.sh**
    ::: tip Nota
    Una forma de crear el archivo en Linux es:
    + $ nano infinite-counter.sh
    + Ctrl + X para guardar.
    <p></p>
    :::
    ```sh
    #!/bin/bash
    echo "Soluciones++"
    ls -l
    echo "Los anteriores son los archivos en esta carpeta, y sus permisos asociados"
    echo "Contador:"
    i=0
    while :
    do
        echo "i: $i"
        ((i++))
        sleep 1
    done    
    ```
3. Ejecutar script:
    + $ ./infinite-counter.sh
    ::: warning Advertencia
    En caso de requerir un permiso de ejecuación:
    + $ chmod 755 infinite-counter.sh
    Para ver los permisos de los archivos contenidos en una carpeta:
    + $ ls -l
    <p></p>
    :::

### 16. Bash Script con solicitud de entrada
1. Crear script ****:
    ```sh
    #!/bin/bash
    read -p "Type your name?: " name
    echo "Hello $name"    
    ```
2. Ejecutar script:
    + $ ./simple-greeting.sh

### 17. ¿Por qué y cómo construir imágenes?
+ Un **Dockerfile** es un archivo o documento de texto simple que incluye una serie de instrucciones que se necesitan ejecutar de manera consecutiva para cumplir con los procesos necesarios para la creación de una nueva imagen de Docker.

### 18. Construye tu 1ra imagen
::: tip Algunos comando Linux
Ver directorio en donde nos encontramos ubicados:
+ $ pwd
Renombrar una carpeta:
+ $ mv NombreActual NuevoNombre
Crear una carpeta:
+ $ mkdir NombreNuevoDirectorio
Mover un directorio:
+ mv CarpetaAMover CarpetaContenedora
Ir un directorio atrás:
+ $ cd ..
:::
1. Renombra **Scripts** a **InfiniteCounter**.
2. Crear carpeta **SimpleGreeting**.
3. Crear carpeta **Script**.
4. Mover carpetas **InfiniteCounter** y **SimpleGreeting** dentro de **Script**.
5. Mover **Script\InfiniteCounter\simple-greeting.sh** a **Script\SimpleGreeting\simple-greeting.sh**.
6. Crear archivo **Script\InfiniteCounter\Dockerfile**:
    ```
    FROM ubuntu:18.04
    COPY infinite-counter.sh /
    CMD ./infinite-counter.sh    
    ```
7. Ir al directorio de trabajo **InfiniteCounter**:
    + $ cd Script\InfiniteCounter
8. Construir imagen:
    + $ docker build .
9. Ver la imagen recien creada:
    + $ docker images
10. Construir otra imagen, pero con un tag:
    + $ docker build . -t 11639889/infinite-counter
11. Ejecutar un contenedor con la imagen creada anteriormente:
    + $ docker run 84d

### 19. ¿Qué ocurre si olvidé algo en el Dockerfile?
1. Ir al directorio de trabajo **SimpleGreeting**:
    + $ cd Script\SimpleGreeting
2. Crear archivo **Script\SimpleGreeting\Dockerfile**:
    ```
    FROM ubuntu:18.04
    COPY simple-greeting.sh /
    CMD ./simple-greeting.sh
    ```
3. Construir imagen:
    + $ docker build . -t 11639889/simple-greeting:1.0
4. Crear contenedor a partir de la imagen anteror:
    + $ docker run petrix12/simple-greeting:1.0

### 20. Publica tu 1ra imagen
1. Iniciar sesión en **[Docker Hub](https://hub.docker.com)**.
2. Subir imagenes a **Docker Hub**:
    + $ docker push 11639889/infinite-counter
    + $ docker push 11639889/simple-greeting:1.0
    ::: warning Advertencia
    Si la terminal en donde se ejecutó el comando anterior no está logeado a tu cuenta de Docker Hub:
    + $ docker login
    <p></p>
    :::
3. Para personalizar un repositorio, en la página de Docker Hub:
    + Ir al perfil.
    + Seleccionar repositorio.
    + Click en **Manage Repository**,


## Sección 5: Docker Run & Otros
### 21. Detached mode (-d)
1. Ejecutar contenedor de forma simple:
    + $ docker run 11639889/infinite-counter
2. En otra terminal ver el contenedor que se esta ejecutando:
    + $ docker ps
3. Para contenedor:
    + $ docker stop 817
    ::: tip Nota
    Por defecto el contenedor se parará luego de 10 segundos, para modificar este tiempo a 2 segundos:
    + $ docker stop 817 -t 2
    <p></p>
    :::
4. Ejecutar contenedor en **Detached Mode**:
    + $ docker run -d 11639889/infinite-counter
5. Conectar con el contenedor iniciado con **Detached Mode**:
    + $ docker attach d4e

### 22. Interactive & TTY (-it)
1. Ejecutar contenedor, asociando la terminal de nuestro host con la del contenedor:
    + $ docker run -t 11639889/infinite-counter
2. Ejecutar contendor en modo simple:
    + $ docker run 11639889/simple-greeting:1.0
3. Ejecutar contenedor, asociando la terminal de nuestro host con la del contenedor:
    + $ docker run -t 11639889/simple-greeting:1.0
4. Ejecutar contenedor, asociando la terminal de nuestro host con la del contenedor, y manteniendo abierto el flujo de entrada de datos:
    + $ docker run -it 11639889/simple-greeting:1.0
    ::: tip Nota
    La expresión anterior también se podría escribir:
    + $ docker run -i -t 11639889/simple-greeting:1.0
    <p></p>
    :::

### 23. Publish ports (-p)
1. Ejecuatar un contenedor con nginx:
    + $ docker run --name myWebServer1 -d -p 8080:80 nginx
    ::: tip Nota
    Para verificar que nginx se está ejecutando ir a la siguiente url:
    + http://localhost:8080
    <p></p>
    :::
2. Ejecuatar un contenedor con apache:
    + $ docker run --name myWebServer2 -d -p 8081:80 httpd
    ::: tip Nota
    Para verificar que apache se está ejecutando ir a la siguiente url:
    + http://localhost:8081
    <p></p>
    :::

### 24. Docker Exec
1. Para ingresar dentro del contenedor **myWebServer1**:
    + $ docker exec -it myWebServer1 bash 
2. Dentro del contenedor: 
    1. ir a la carpeta **/usr/share/nginx/html**:
        + /# cd /usr/share/nginx/html
    2. Eliminar index.html
        + /# rm index.html
    3. Ejecutar:
        + /# echo "nginx editado" > index.html
    4. Salir del contenedor:
        + /# exit
3. Para ingresar dentro del contenedor **myWebServer2**:
    + $ docker exec -it myWebServer2 bash 
4. Dentro del contenedor: 
    1. Ir a **htdocs**:
        + /# cd htdocs
    2. Eliminar index.html
        + /# rm index.html
    3. Ejecutar:
        + /# echo "apache editado" > index.html
    4. Salir del contenedor:
        + /# exit
5. Detener los contenedores **myWebServer1** y **myWebServer2**:
    + $ docker stop 377 8be

### 25. Clean up (--rm)
1. Eliminar los contenedores **myWebServer1** y **myWebServer2**:
    + $ docker rm 377 8be
2. Ejecutar contenedores que se eliminen cuando se detengan:
    + $ docker run --name myNginx1 --rm -d -p 8080:80 nginx
    + $ docker run --name myNginx2 --rm -d -p 8081:80 nginx
    + $ docker run --name myNginx3 --rm -d -p 8082:80 nginx
3. Detener los contenedores **myNginx1**, **myNginx2** y **myNginx3**:
    + $ docker stop 98a 937 8f8

### 26. Diferencia entre Attach & Exec
+ En el módulo anterior hemos visto que podemos usar **docker attach** para conectarnos a un contenedor que fue iniciado en detached mode.
+ Y en este módulo, en una lección previa, usamos **docker exec** sobre un contenedor de Nginx para ejecutar el comando **bash** y así tener acceso al filesystem del contenedor a través de la terminal.
+ ¿Por qué usamos **docker exec** en vez de **docker attach**, y cuál es la diferencia entre ambos comandos?
+ La diferencia es que **docker exec** permite ejecutar un comando sobre un contenedor que está en ejecución. Éste comando nos **permite iniciar una nueva terminal**. Sin embargo, **no está limitado a ello**, ya que se puede iniciar cualquier proceso nuevo.
+ En cambio **docker attach** nos conecta a un contenedor, con relación a una misma instancia de la terminal, que se inició al ejecutar el contenedor.
+ En el caso de un contenedor de Nginx, el proceso principal muestra en la terminal información acerca de los requests HTTP que recibe el servidor web. Si usamos **docker attach**, estaremos viendo por consola esa información, y no será posible navegar entre los archivos del contenedor. Por eso fue conveniente usar **docker exec**, para iniciar una nueva instancia de la terminal.

### 27. Volume binding (-v) & Inspect
1. Crear archivo **Script\Web\index.html**:
    ```html
    <p>Soluciones++ con Docker</p>
    <a href="about.html">Acerca de</a>    
    ```
2. Crear archivo **Script\Web\about.html**:
    ```html
    <p>Página acerca de ...</p>
    <a href="index.html">Inicio</a>    
    ```
3. Ejecutar contenedor:
    + $ docker run --name my-nginx-server -d -p 8080:80 -v ~/Script/Web:/usr/share/nginx/html nginx
    Para verificar que nginx se está ejecutando ir a la siguiente url:
    + http://localhost:8080
    <p></p>
    :::
4. Detener y remover el contenedor:
    + $ docker stop my-nginx-server
    + $ docker rm my-nginx-server

### 28. Remove all containers
1. Obtener los identificadores de todos los contenedores:
    + $ docker ps -a -q
    O también:
    + $ echo $(docker ps -a -q)
2. Imprimir la ruta absoluta en donde nos encontramos ubicados:
    + $ echo $(pwd)
3. Eliminar todos los contenedores:
    + $ docker rm $(docker ps -a -q)
4. Una forma de ver la ruta de la carpeta **Web** dentro de la carpeta **Script**:
    + $ echo $(pwd)/Web
5. Otra forma de ejecutar contenedor dentro de la carpeta **Script**:
    + $ docker run --name my-nginx-server -d -p 8080:80 -v $(pwd)/Web:/usr/share/nginx/html nginx
    ::: warning Advertencia
    Para obtener la ubicación actual en Windows, se escribe **%cd%**, por lo tanto la ruta anterior se escribe:
    + $ docker run --name my-nginx-server -d -p 8080:80 -v $(%cd%)/Web:/usr/share/nginx/html nginx
    Para obtener la ubicación actual en una terminal de PowerShell, se escribe **PWD**, por lo tanto la ruta anterior se escribe:
    + $ docker run --name my-nginx-server -d -p 8080:80 -v $(PWD)/Web:/usr/share/nginx/html nginx
    <p></p>
    :::

### 29. Environment variables
1. Ejecutar contenedor con la imagen ubuntu interactiva, que se elimine cuando se pare, y con una variable de entorno:
    + $ docker run -it --rm -e VAR1=AAA ubuntu 
2. Imprimir variable de entorno en el contenedor ubuntu:
    + /# echo $VAR1
3. Listar las variables de entorno que existen:
    + /# printenv
4. Salir del contenedor:
    + /# exit
5. Ejecutar:
    + $ docker run -it --rm -e VAR1=AAA -e VAR2=BBB ubuntu
6. Filtrar todas las variable de entorno que comienzan con **VAR**:
    + /# printenv | grep VAR
7. Salir del contenedor:
    + /# exit
8. Crear archivo de variables de entorno **Script\Env\env.list**:
    ```list
    VAR1=AAA
    VAR2=BBB
    USER    
    ```
9. Ejecutar contenedor que tome las variables de entorno de un archivo:
    + $ cd Script\Env
    + $ docker run -it --rm --env-file env.list ubuntu
10. Salir del contenedor:
    + /# exit
11. Ejecutar contenedor con imagen MySQL:
    + $ docker run --rm -e MYSQL_ROOT_PASSWORD=12345678 mysql
    ::: tip Nota
    Con esta acción queda un servidor MySQL levantado con el puerto 3306
    :::
12. Conectarnos al servidor MySQL de manera interactiva:
    + $ docker exec -it 276 bash
    + $ mysql -u root -p
13. Probar BD MySQL ejecutando los siguientes comandos:
    + CREATE DATABASE miDB;
    + USE miDB;
    + exit

### Cuestionario 2: Prueba 2: Comandos de Docker
+ **Pregunta 1:** Acerca de construir una imagen y asignarle un tag:
    + Un tag es opcional pero recomendable.
+ **Pregunta 2:** Acerca del tag latest:
    + Es un tag como cualquier otro. Cuando se usa **docker run** y no se especifica un tag, se busca el tag **latest** correspondiente a la imagen.
+ **Pregunta 3:** Acerca de publicar imágenes:
    + El comando **docker push** permite subir imágenes a un registry, siempre que tengamos los permisos adecuados.
+ **Pregunta 4:** ¿Qué es el detached mode?
    + Consiste en iniciar un contenedor en background, ya que por defecto se inicia en foreground. Entonces en la terminal solo se imprime su ID.
+ **Pregunta 5:** Acerca de usar **-it** junto al comando **docker run**:
    + Permite iniciar un contenedor de forma interactiva, conectando el STDIN y la terminal del host con la del contenedor.
+ **Pregunta 6:** Acerca de la opción **-p** usada sobre **docker run**:
    + Es equivalente a **--publish** y permite exponer un puerto del contenedor sobre un puerto del host.
+ **Pregunta 7:** Acerca del comando **docker exec**:
    + Permite ejeuctar un comando sobre un contenedor que esá en ejecución.
+ **Pregunta 8:** Acerca de la opción **--rm** usada sobre **docker run**:
    + Es útil ya que permite iniciar contenedores, y estos serán eliminados automáticacmente cuando se detengan.
+ **Pregunta 9:** Acerca de los **volúmenes** y el flag **-v** usado sobre **docker run**:
    + Un volumen es muy útil ya que permite persistir cambios realizados por un contenedor, al crear una asociación con el filesystem del host.
+ **Pregunta 10:** Acerca de eliminar contenedores, ¿cuál de las siguientes alternativas **es incorrecta**?
    + El comando **docker rm** elimina también contenedores en ejecución por lo que hay que tener cuidado.
+ **Pregunta 11:** Acerca de las **variables de entorno**, es correcta la siguiente afirmación:
    + Cuando iniciamos un contenedor, podemos definir **environment varables** para personalizar su comportamiento o configurar algún servicio.


## Sección 6: Ejemplo: Imagen de un proyecto web simple
### 30. Dockerfile: Repaso y sugerencias
1. Renombrar **Script** a **DockerExamples**.

### 31. Selección de la imagen base
+ **[Create a two-player game with Python and Vue](https://pusher.com/tutorials/game-python-vue)**.
+ **[Full Stack Python - Flask](https://www.fullstackpython.com/flask.html)**.
1. Ejecutar contenedor:
    + $ docker run -it python:3.8.0-buster
2. En otra terminal nuevo, ejecutar:
    + $ docker ps
3. Ejecutar el contenedor de python de modo interactivo:
    + $ docker exec -it b79 bash
    + /# python
    + />>> exit()

### 32. Docker Commit & History
+ **[Deploying a Python Flask Example Application Using Heroku](https://realpython.com/flask-by-example-part-1-project-setup)**.
1. Continuando con el apartado anterior, ejecutar:
    + /# cd var
    + /# cd opt
    + /# pip install flask
    + /# apt-get update
    + /# apt-get install nano
    + /# nano app.py
        ```py
        from flask import Flask

        app = Flask(__name__)

        @app.route("/")
        def index():
            return "Hello World!"
        if __name__ == '__main__':
            app.run(host='0.0.0.0', port=5000)
        ```
        + Ctrl + X
        + Y
        + ENTER
    + /# python app.py
2. Abrir una terminal nueva y ejecutar:.
    + $ docker stop b79
3. Crear una imagen a partir de un contenedor detenido:
    + $ docker commit b79 my-flask-project
4. Ejecutar la imagen **my-flask-project**:
    + $ docker run -it -p 80:5000 my-flask-project bash
5. Ejecutar:
    + /# cd var
    + /# cd opt
    + /# nano app.py
    + /# python app.py
    ::: tip Nota
    El programa **app.py** debería correr en la url:
    + http://0.0.0.0:5000
    <p></p>
    :::

### 33. Uso de versiones específicas
::: tip Nota
Para ver los paquetes asociados a Python:
+ $ pip list
:::
1. Partiendo del apartado anterior:
    + /# pip uninstall flask
    + Proceed (y/n)?: y
    + pip install flask==2.2.2

### 34. Una vista y una variable backend
1. Partiendo del apartado anterior:
    + /# nano app.py
        ```py{2,6-7}
        from flask import Flask
        from flask import render_template
        app = Flask(__name__)

        @app.route("/")
        def hello():
            return render_template('index.html', name='Flask Project Example')

        if __name__ == '__main__':
            app.run(host='0.0.0.0', port=5000)
        ```
        + Ctrl + X
        + Y
        + ENTER
    + /# nano index.html
        ```html
        <html>
        <body>
            <h1>{{ name }}</h1>
        </body>
        </html>
        ```
        + Ctrl + X
        + Y
        + ENTER
    + /# mkdir templates
    + /# mv index.html templates/index.html
    + /# python app.py
        ::: tip Nota
        El proyecto estará ejecutandose en:
        + http://localhost
        <p></p>
        :::

### 35. Dos variables de entorno
1. En otra terminal, ejecutar:
    + $ docker exec -it ef8 bash
    + /# cd var/opt/templates
    + /# nano index.html
        ```html{1,3-10}
        <!DOCTYPE html>
        <html>
        <head>
            <title>{{ name }}</title>
            <style>
                body {
                    background: {{ bg_color }};
                    color: {{ text_color }};
                }
            </style>
        </head>
        <body>
            <h1>{{ name }}</h1>
        </body>
        </html>
        ```
        + Ctrl + X
        + Y
        + ENTER
    + /# cd ..
    + /# nano app.py
        ```py{1,8-10}
        import os
        from flask import Flask
        from flask import render_template
        app = Flask(__name__)

        @app.route("/")
        def hello():
            bg_color = os.getenv('BG_COLOR', 'black')
            text_color = os.getenv('TEXT_COLOR', 'white')
            return render_template('index.html', name='Flask Project Example', bg_color=bg_color, text_color=text_color)

        if __name__ == '__main__':
            app.run(host='0.0.0.0', port=5000)
        ```
        + Ctrl + X
        + Y
        + ENTER

### 36. Docker Commit vs Dockerfile
### 37. Docker Cp
1. Copiar archivos del contenedor al host:
    + docker cp ef8:/var/opt /c/laragon/www/docker2022/DockerExamples/FlaskProject/code
    ::: tip Nota
    Para copiar archivos del contenedor al host o viceversa, hay que tener en cuenta, que primero va la fuente y luego el destino.
    :::
2. Mover todo el contenido de **DockerExamples\FlaskProject\code\opt** a **DockerExamples\FlaskProject\code** y eliminar la carpeta **opt**.
3. Eliminar todos los contenedores:
    + $ docker rm $(docker ps -a -q)
4. Eliminar imagen **my-flask-project**:
    + $ docker rmi my-flask-project

### 38. Un Dockerfile para el proyecto
1. Crear **DockerExamples\FlaskProject\Dockerfile**:
    ```
    FROM python:3.8-buster
    RUN pip install flask==2.2.2
    COPY code/ /var/opt/

    WORKDIR /var/opt
    CMD python app.py    
    ```
2. Construir imagen:
    + $ docker build -t my-flask-project .
    ::: warning Advertencia
    Para ejecutar el comando anterior, es necesario estar ubicados en el directorio de trabajo **DockerExamples\FlaskProject**.
    :::
3. Ejecutar la imagen creada en el paso anterior:
    + $ docker run -d -p 80:5000 my-flask-project

### 39. Docker Logs
1. Ver el log del contenedor:
    + $ docker logs fffa

### 40. Múltiples contenedores y Conclusiones
1. Ejecutar contenedor usando variables de entorno
    + $ docker run -d -p 8080:5000 -e BG_COLOR=yellow -e TEXT_COLOR=red my-flask-project

## Sección 7: Compartir imágenes
### 41. Docker Tag & Docker Push
1. Cambiar el nombre de la imagen **my-flask-project** por **11639889/my-flask-project**:
    + $ docker images       (Para obtener todas las imagenes y ver el ID de **my-flask-project**: 173a46280c9a)
    + $ docker tag 173a46280c9a 11639889/my-flask-project
2. Subir nuestra imagen a Docker Hub:
    + $ docker push 11639889/my-flask-project
3. Borrar imagenes **11639889/my-flask-project** y **my-flask-project**:
    + $ docker rmi 11639889/my-flask-project my-flask-project
4. Ahora, para ejecutar un contenedor con la imagen subida a nuestro repositorio de Docker Hub:
    + $ docker run -d -p 80:5000 -e BG_COLOR=black -e TEXT_COLOR=yellow 11639889/my-flask-project

### 42. Git y Repositorio del curso
+ **[Curso: Aprende a usar Git](https://series.programacionymas.com/aprende-a-usar-git)**.
+ **[Repositorio GitHub DockerExamples](https://github.com/JCarlosR/DockerExamples)**.

### 43. CMD vs ENTRYPOINT
1. Crear **DockerExamples\UbuntuSleeper\1-cmd\Dockerfile**:
    ```
    FROM ubuntu
    CMD sleep 3    
    ```
2. Crear imagen:
    + $ docker build -t ubuntu-sleeper .
3. Para alterar el comando por defecto, al crear un contenedor basado en la imagen anterior:
    + $ docker run ubuntu-sleeper sleep 10
4. Crear **DockerExamples\UbuntuSleeper\2-entrypoint\Dockerfile**:
    ```
    FROM ubuntu
    ENTRYPOINT ["sleep"]
    ```
5. Crear imagen:
    + $ docker build -t ubuntu-sleeper .
    ::: tip Nota
    Esta acción sobreescribe la imagen anterior.
    :::
6. Iniciar contenedor pasando el parámetro que indica cuanto tiempo deberá dormir:
    + $ docker run ubuntu-sleeper 10
7. Crear **DockerExamples\UbuntuSleeper\3-entrypoint-cmd\Dockerfile**:
    ```
    FROM ubuntu
    ENTRYPOINT ["sleep"]
    CMD ["3"]    
    ```
8. Crear imagen:
    + $ docker build -t ubuntu-sleeper .
9. Iniciar contenedor:
    + $ docker run ubuntu-sleeper
10. Iniciar contenedor cambiando el comando de ejecución por defecto:
    + $ docker run --entrypoint echo ubuntu-sleeper Hola


## Sección 8: Como funciona Docker
### 44. Docker Engine
+ **[Docker overview](https://docs.docker.com/get-started/overview)**.

### 45. Docker Storage
+ **[About storage drivers](https://docs.docker.com/storage/storagedriver)**.
::: tip Nota
Para crear un volumen de nombre **mi_bd**:
+ $ docker volume create mi_bd
Para crear un servidor MySQL y persistir los datos en el volumen **mi_bd**:
+ $ docker run -v mi_bd:/var/lib/mysql mysql
+ Si Docker no encuentra la carpeta **mi_bd**, entonces la creará.
Si queremos crear un volumen en una ubicación partícular:
+ $ docker run -v /data/mysql/my_data:/var/lib/mysql mysql
:::

### 46. Docker Networking
+ **[Networking overview](https://docs.docker.com/network)**.
::: tip Nota
Para listar las Networkings en nuestro hot:
+ $ docker network ls
Para inspeccionar un contenedor:
+ $ docker inspect c7e
+ De manera similar se puede inspeccionar una Networking, pero en lugar del id de un contenedor, se colocará el id de la networking.
Por defecto los contenedores se ejecutan en la network **bridge**, pero para iniciar un contenedor en otra network, por ejemplo la network **host**:
+ $ docker run -dit --network=host ubuntu bash
Para crear nuestra propia network **my-bridge-network**:
+ $ docker network create --driver bridge --subnet 172.18.0.0/16 my-bridge-network
:::

### 47. Docker Registry
+ **[Deploy a registry server](https://docs.docker.com/registry/deploying)**.

### Cuestionario 3: Prueba 3: Cómo funciona Docker
+ **Pregunta 1**: Acerca del **Docker Engine**, es correcto afirmar que:
    + Está compuesto por el Docker Daemon, una REST API y un Docker CLI.
+ **Pregunta 2**: Acerca de los **namespaces** es incorrecto decir que:
    + Los namespaces permiten gestionar las capas de una imagen, que son sol lectura, en contraste con la capa de escritura que tienen los contenedores.
+ **Pregunta 3**: Acerca de los **Control groups**, ¿qué alternativa es incorrecta?
    + Los namespaces y control groups son exactamente lo mismo.
+ **Pregunta 4**: Acerca de las **capas** de imágenes y contenedores:
    + Tenemos capas de imagen que son de solo lectura y una capa de escritura por cada contenedor creado.
+ **Pregunta 5**: Acerca de las capas que constituyen a cada imagen:
    + Cada instrucción presente en un Dockerfile se corresponde con una capa de la imagen que se está construyendo.
+ **Pregunta 6**: ¿En qué consiste la **estrategia CoW**?
    + Permite que una capa acceda a los archivos de otra. De este modo no se necesita copiar archivos entre capas, a menos que se hagan cambios.
+ **Pregunta 7**: Acerca de los **volúmenes**, es incorrecto decir que:
    + Los bind mounts permiten asociar carpetas de un contenedor con otras carpetas al interior de la carpeta + **/var/lib/docker/volumes**, mientras que los **volume mounts** se socian con cualquier otra dirección del fliesystem de nuestro host.
+ **Pregunta 8**: ¿Cuáles de las siguientes son las 3 networks que Docker crea por defecto? Ten en cuenta sus nombres, no los drivers.
    + bridge, host, none
+ **Pregunta 9**: ¿Cuál es la diferencia entre las networks que tienen como name **bridge** y **host**?
    + La network **bridge** permite la comunicación entre los contenedores en su interior, pero si se desea acceder a través del host, es necesario asociar puertos. La network **host** en cambio permite que contenedores y host compartan la misma configuración (los puertos expuestos por contenedores son usados también por el host)
+ **Pregunta 10**: Acerca de **Docker Networking**, ¿cuál de las siguientes alternativas es incorrecta?
    + La network llamada **none** representa que los contenedores en su interior no tienen ninguna restricción. Por tanto se pueden comunicar con cualquier network / contenedor.
+ **Pregunta 11**: ¿Es **Docker Hub** sinónimo de **Docker Registry**?
    + Docker Hub es un Registry público para el almacenamiento de imágenes Docker. Sin embargo, no es el único.
+ **Pregunta 12**: ¿Qué es un Hosted Docker Registry?
    + Es cuando alojamos en un servidor propio un Docker Registry privado, generalmente para uso exclusivo de una compañia u organización.
+ **Pregunta 13**: ¿Qué representa el prefijo **docker.io** cuando descargamos una imagen?
    + Es el hostname usado por Docker Hub. Entonces significa que estamos descargando la imagen desde este Registry público.


## Sección 9: Proyecto Node + MongoDB
### 48. Repaso general
### 49. Construir imagen Node App
+ **[Repositorio demo-node-app](https://github.com/JCarlosR/demo-node-app)**.
1. Clonar repositorio **demo-node-app**:
    + $ git clone https://github.com/JCarlosR/demo-node-app.git
2. Crear imagen:
    + $ cd demo-node-app
    + $ docker build -t my-node-app:1.0 .

### 50. Ejecutar App en un contenedor
1. Ejecutar contenedor:
    + $ docker run -d -p 8082:3000 --rm my-node-app:1.0
2. Parar contenedor ejecutado en el paso anterior.

### 51. Ejecutar Mongo DB en un contenedor
+ **[Docker Hub MongoDB](https://hub.docker.com/_/mongo)**.
1. Crear network **network_mongo**:
    + $ docker network create network_mongo
2. Levantar un contenedor con MongoDB:
    + $ docker run -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --network network_mongo --name mongodb --rm -d mongo

### 52. Ejecutar Mongo Express en un contenedor
+ **[Docker Hub Mongo Express](https://hub.docker.com/_/mongo-express)**.
1. Crear un contenedor de Mongo Express:
    + $ docker run --network network_mongo -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password -e ME_CONFIG_MONGODB_SERVER=mongodb -p 8081:8081 -d mongo-express
    ::: tip Nota
    Mongo Express se estará ejecutando en:
    + http://localhost:8081
    :::
2. Ingresando en **http://localhost:8081** crear:
    + Base de datos **my-db**.
    + El la base de datos **my-db** crear colección: **users**

### 53. Ejecutar todo (múltiples comandos)
1. Ejecutar contenedor:
    + $ docker run -d -p 8082:3000 --network network_mongo --rm my-node-app:1.0
    ::: tip Nota
    El proyecto de Node.js se estará ejecutando en:
    + http://localhost:8082
    :::

### 54. Docker Compose y YAML
1. Pasos a tener en cuenta para programar un Docker Compose:
    ```
    docker build -t my-node-app:1.0 .

    docker network create network_mongo

    docker run 
        -e MONGO_INITDB_ROOT_USERNAME=admin 
        -e MONGO_INITDB_ROOT_PASSWORD=password 
        --network network_mongo 
        --name mongodb 
        mongo

    docker run 
        -e ME_CONFIG_MONGODB_SERVER=mongodb 
        -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin 
        -e ME_CONFIG_MONGODB_ADMINPASSWORD=password 
        -p 8081:8081 
        --network network_mongo 
        -name mongo-express
        mongo-express

    docker run 
        -p 8082:3000 
        --network network_mongo 
        --rm my-node-app:1.0
    ```
2. Modificar **demo-node-app\docker-compose.yaml**:
    ```yaml
    version: '3'
    services:
    my-node-app:
        build: .
        ports:
            - 8082:3000
    mongodb:
        image: mongo
        environment:
            - MONGO_INITDB_ROOT_USERNAME=admin
            - MONGO_INITDB_ROOT_PASSWORD=password
        volumes:
            - mongo-data:/data/db
    mongo-express:
        image: mongo-express
        ports:
            - 8081:8081
        environment:
            - ME_CONFIG_MONGODB_ADMINUSERNAME=admin
            - ME_CONFIG_MONGODB_ADMINPASSWORD=password
            - ME_CONFIG_MONGODB_SERVER=mongodb
    volumes:
        mongo-data:
            driver: local  
    ```

### 55. Ejecutar todo (1 comando Docker Compose)
+ **[Overview](https://docs.docker.com/compose/install)**.
1. Ubicados en **demo-node-app**, ejecutar:
    + $ docker-compose up
    ::: tip Nota
    Este comando buscará un archivo de nombre **docker-compose.yaml**.
    :::
3. Para detener los contenedores ejecutados por Docker Compose:
    + $ docker-compose down
4. Para ver los volumenes en Docker:
    + $ docker volume ls


## Sección 10: Docker Orchestration
### 56. Introducción e Importancia
### 57. Docker Swarm
### 58. Kubernetes
### Cuestionario 4: Prueba 4: Container Orchestration
+ **Pregunta 1**: Acerca de **Kubernetes** y **Docker**. Es cierto que:
    + Están relacionados pero no siempre se usan en conjunto.
+ **Pregunta 2**: ¿Cuál es la principal diferencia entre **Docker Swarm** y **Kubernetes**?
    + Dokcer Swarm ofrece mayor simplicidad y por tanto es más fácil empezar con esta herramienta. Kubernetes presenta más características pero incrementa la complejidad de configuración.
+ **Pregunta 3**: ¿Qué es **K8s**?
    + Kubernetes se puede abreviar como k8s porque entre la k y la s encontramos 8 caracteres.
+ **Pregunta 4**: En **Kubernetes**, ¿qué es un **Pod**?
    + Los nodos de Kubernetes contienen pods. Cada pod puede representar a uno o varios contenedores.
+ **Pregunta 5**: En Kubernetes, se le conoce como "**Node Agent**" y está a cargo de informar al Kubernetes Master sobre el estado de pods y contenedores.
    + Kubelet
+ **Pregunta 6**: Es una herramienta de línea de comandos que nos va a permitir gestionar los clusters de Kubernetes.
    + kubectl


## Sección 11: Proyecto Wordpress
### 59. Docker Compose File
+ **[Docker Hub WordPress](https://hub.docker.com/_/wordpress)**.
+ **[Docker Hub MySQL](https://hub.docker.com/_/mysql)**.
+ **[Docker Hub phpMyAdmin](https://hub.docker.com/_/phpmyadmin)**.
1. Crear **demo-compose-wordpress\docker-compose.yml**:
    ```yml
    version: '3'

    services:
    db:
        image: mysql:8
        volumes:
            - db_data:/var/lib/mysql
        restart: always
        environment:
        MYSQL_ROOT_PASSWORD: password
        MYSQL_DATABASE: wordpress
        MYSQL_USER: admin
        MYSQL_PASSWORD: password
    wp:
        image: wordpress:php7.4
        depends_on:
            - db
        ports:
            - 8080:80
        restart: always
        volumes:
            - ./:/var/www/html
        environment:
        WORDPRESS_DB_HOST: db
        WORDPRESS_DB_USER: admin
        WORDPRESS_DB_PASSWORD: password
        WORDPRESS_DB_NAME: wordpress    
    ```

### 60. Docker Compose Up
1. Modificar **demo-compose-wordpress\docker-compose.yml**:
    ```yml{29-30}
    version: '3'

    services:
    db:
        image: mysql:8
        volumes:
            - db_data:/var/lib/mysql
        restart: always
        environment:
        MYSQL_ROOT_PASSWORD: password
        MYSQL_DATABASE: wordpress
        MYSQL_USER: admin
        MYSQL_PASSWORD: password
    wp:
        image: wordpress:php7.4
        depends_on:
            - db
        ports:
            - 8080:80
        restart: always
        volumes:
            - ./:/var/www/html
        environment:
        WORDPRESS_DB_HOST: db
        WORDPRESS_DB_USER: admin
        WORDPRESS_DB_PASSWORD: password
        WORDPRESS_DB_NAME: wordpress

    volumes:
    db_data:    
    ```

### 61. Agregando un servicio más
+ **[Docker Hub phpMyAdmin](https://hub.docker.com/_/phpmyadmin)**.
1. Modificar **demo-compose-wordpress\docker-compose.yml**:
    ```yml{}
    ```
2. Levantar servicios:
    + $ docker-compose up -d
    ::: tip Nota
    El servidor web (WordPress) deberá correr en:
    + http://localhost:8080
    El servidor de base de datos (MySQL) deberá correr en:
    + http://localhost:8081
    :::
3. Ir a **http://localhost:8080** en instalar WordPress.


## Sección 12: Proyecto Laravel
### 62. Introducción general
+ **[How To Install and Set Up Laravel with Docker Compose on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-set-up-laravel-with-docker-compose-on-ubuntu-22-04)**.
+ **[How To Install and Set Up Laravel with Docker Compose on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-set-up-laravel-with-docker-compose-on-ubuntu-20-04)**.

### 63. Repositorio del proyecto
+ **[Repositorio GitHub travellist-laravel-demo](https://github.com/do-community/travellist-laravel-demo)**.
::: tip Nota
En el archivo **docker-compose.yml** del repositorio podemos ver la estructura y configuración del proyecto:
```yml
version: "3.7"
services:
  app:
    build:
      args:
        user: sammy
        uid: 1000
      context: ./
      dockerfile: Dockerfile
    image: travellist
    container_name: travellist-app
    restart: unless-stopped
    working_dir: /var/www/
    volumes:
      - ./:/var/www
    networks:
      - travellist

  db:
    image: mysql:5.7
    container_name: travellist-db
    restart: unless-stopped
    environment:
      MYSQL_DATABASE: ${DB_DATABASE}
      MYSQL_ROOT_PASSWORD: ${DB_PASSWORD}
      MYSQL_PASSWORD: ${DB_PASSWORD}
      MYSQL_USER: ${DB_USERNAME}
      SERVICE_TAGS: dev
      SERVICE_NAME: mysql
    volumes:
      - ./docker-compose/mysql:/docker-entrypoint-initdb.d
    networks:
      - travellist

  nginx:
    image: nginx:alpine
    container_name: travellist-nginx
    restart: unless-stopped
    ports:
      - "8000:80"
    volumes:
      - ./:/var/www
      - ./docker-compose/nginx:/etc/nginx/conf.d
    networks:
      - travellist

networks:
  travellist:
    driver: bridge
```
:::

### 64. Iniciando todos los servicios
1. Crear proyecto a partir del repositorio **https://github.com/do-community/travellist-laravel-demo**:
    + $ git clone https://github.com/do-community/travellist-laravel-demo
    + $ cd travellist-laravel-demo
    + $ docker-compose up -d
    + $ docker-compose exec app composer install
        ::: tip Nota
        **app** es el nombre del servicio definido en **docker-compose.yml**.
        :::
2. Tomando como referencia **travellist-laravel-demo\\.env.example** crear el archivo de variables **travellist-laravel-demo\\.env**:
    ```env
    APP_NAME=Travellist
    APP_ENV=dev
    APP_KEY=
    APP_DEBUG=true
    APP_URL=http://localhost:8000

    LOG_CHANNEL=stack

    DB_CONNECTION=mysql
    DB_HOST=db
    DB_PORT=3306
    DB_DATABASE=travellist
    DB_USERNAME=travellist_user
    DB_PASSWORD=password

    BROADCAST_DRIVER=log
    CACHE_DRIVER=file
    QUEUE_CONNECTION=sync
    SESSION_DRIVER=cookie
    SESSION_LIFETIME=120

    REDIS_HOST=127.0.0.1
    REDIS_PASSWORD=null
    REDIS_PORT=6379

    MAIL_DRIVER=smtp
    MAIL_HOST=smtp.mailtrap.io
    MAIL_PORT=2525
    MAIL_USERNAME=null
    MAIL_PASSWORD=null
    MAIL_ENCRYPTION=null

    AWS_ACCESS_KEY_ID=
    AWS_SECRET_ACCESS_KEY=
    AWS_DEFAULT_REGION=us-east-1
    AWS_BUCKET=

    PUSHER_APP_ID=
    PUSHER_APP_KEY=
    PUSHER_APP_SECRET=
    PUSHER_APP_CLUSTER=mt1

    MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
    MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
    ```
::: tip Nota
La aplicación se ejecutará en:
+ http://localhost:8000
:::
3. Crear llave:
    + $ docker-compose exec app php artisan key:generate
4. Parar el servicio y reiniciarlo para que tome los valores de las variables de entorno:
    + $ docker-compose down
    + $ docker-compose up -d

## Sección 13: Python Redis PostgreSQL Node .NET
### 65. Introducción general
+ **[Repositorio GitHub example-voting-app](https://github.com/dockersamples/example-voting-app)**.

### 66. Repositorio del proyecto
::: tip Nota
En el archivo **docker-compose.yml** del repositorio podemos ver la estructura y configuración del proyecto:
```yml
# version is now using "compose spec"
# v2 and v3 are now combined!
# docker-compose v1.27+ required

services:
  vote:
    build: ./vote
    # use python rather than gunicorn for local dev
    command: python app.py
    depends_on:
      redis:
        condition: service_healthy
    healthcheck: 
      test: ["CMD", "curl", "-f", "http://localhost"]
      interval: 15s
      timeout: 5s
      retries: 3
      start_period: 10s
    volumes:
     - ./vote:/app
    ports:
      - "5000:80"
    networks:
      - front-tier
      - back-tier

  result:
    build: ./result
    # use nodemon rather than node for local dev
    entrypoint: nodemon server.js
    depends_on:
      db:
        condition: service_healthy 
    volumes:
      - ./result:/app
    ports:
      - "5001:80"
      - "5858:5858"
    networks:
      - front-tier
      - back-tier

  worker:
    build:
      context: ./worker
    depends_on:
      redis:
        condition: service_healthy 
      db:
        condition: service_healthy 
    networks:
      - back-tier

  redis:
    image: redis:alpine
    volumes:
      - "./healthchecks:/healthchecks"
    healthcheck:
      test: /healthchecks/redis.sh
      interval: "5s"
    networks:
      - back-tier

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: "postgres"
      POSTGRES_PASSWORD: "postgres"
    volumes:
      - "db-data:/var/lib/postgresql/data"
      - "./healthchecks:/healthchecks"
    healthcheck:
      test: /healthchecks/postgres.sh
      interval: "5s"
    networks:
      - back-tier

  # this service runs once to seed the database with votes
  # it won't run unless you specify the "seed" profile
  # docker compose --profile seed up -d
  seed:
    build: ./seed-data
    profiles: ["seed"]
    depends_on:
      vote:
        condition: service_healthy 
    networks:
      - front-tier
    restart: "no"

volumes:
  db-data:

networks:
  front-tier:
  back-tier:
```
En **example-voting-app/vote/Dockerfile** del repositorio podemos ver como se construirá la imagen **vote**:
```
# Using official python runtime base image
FROM python:3.9-slim

# add curl for healthcheck
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set the application directory
WORKDIR /app

# Install our requirements.txt
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Copy our code from the current folder to /app inside the container
COPY . .

# Make port 80 available for links and/or publish
EXPOSE 80

# Define our command to be run when launching the container
CMD ["gunicorn", "app:app", "-b", "0.0.0.0:80", "--log-file", "-", "--access-logfile", "-", "--workers", "4", "--keep-alive", "0"]
```
:::

### 67. Ejercicio final y fin del curso
1. Crear proyecto a partir del repositorio **https://github.com/dockersamples/example-voting-app**:
    + $ git clone https://github.com/dockersamples/example-voting-app
    + $ cd example-voting-app
    + $ docker-compose up -d
::: tip Nota
La aplicación se ejecutará en:
+ http://localhost:5000     (Para votar)
+ http://localhost:5001     (Para ver resultados)
:::
