# Cómo subir múltiples archivos en Laravel
+ Repositorio: https://github.com/petrix12/AppFileLaravel.git
+ Curso: https://www.udemy.com/course/como-subir-multiples-archivos-en-laravel

## Diseño MVC básico
1. Crear proyecto: 
    + $ laravel new file --jet
    ::: tip Nota
    Versión: Laravel Framework 8.29.0
    :::
    + $ npm install
    + $ npm run dev
2. Crear modelo File: 
    + $ php artisan make:model File -m
3. Crear controlador: 
    + $ php artisan make:controller FilesController -r
    ::: tip Nota
    Solamente trabajaremos con los métodos index, create y store del controlador File.
    :::
4. Agregar campos name, code_name y user_id a la migración de la tabla files:
    ```php
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nombre del archivo
            $table->text('code_name'); // Nombre del archivo encriptado
            $table->unsignedBigInteger('user_id');   // Relación con los usuarios
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }
    ```
5. Indicamos los campos de asignación masiva en el modelo File:
    ```php
    protected $fillable = [
        'name',
        'code_name',
        'user_id'
    ];
    ```
6. Configurar el archivo de variable de entorno **.env** con una bd.
7. Ejecutar migración: 
    + $ php artisan migrate
8. Adecuamos la vista dashboard a nuestro proyecto.
9. Agregamos la ruta en **routes\web.php**:
    ```php
    Route::post('/upload', [FilesController::class, 'store'])->name('user.files.store');
    ```
10. Programar el método store del controlador File.
11. Crear enlace simbólico de public a storage: 
    + $ php artisan storage:link

## Alertas
+ Documentación sweet-alert: https://github.com/realrashid/sweet-alert
1. Ejecutar: 
    + $ composer require realrashid/sweet-alert
2. Agregar a config\app.php en providers
    ```php
    'providers' => [
        /*
        * Package Service Providers...
        */
        RealRashid\SweetAlert\SweetAlertServiceProvider::class,
        ...
    ],
    ```
3. Agregar a **config\app.php** en aliases
    ```php
    'Alert' => RealRashid\SweetAlert\Facades\Alert::class,
    ```
4. Agregar a la cabecera del controlador File:
    ```php
    use RealRashid\SweetAlert\Facades\Alert;
    ```
5. Insertar en la sección content de **resources\views\layouts\app.blade.php**:
    ```php
    @include('sweetalert::alert', ['cdn' => "https://cdn.jsdelivr.net/npm/sweetalert2@9"])
    ```
    ::: warning Advertencia
    Si falla, reemplazar por: @include('sweetalert::alert')
    :::

## Listar archivos
1. Crear otro menú de navegación en **resources\views\navigation-menu.blade.php**:
    ```php
    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
        <x-jet-nav-link href="{{ route('user.files.index') }}" :active="request()->routeIs('user.files.index')">
            {{ __('Mis archivos') }}
        </x-jet-nav-link>
    </div>
    ```
2. Agregar ruta en **routes\web.php**:
    ```php
    Route::get('/files', [Controller::class, 'index'])->name('user.files.index');
    ```
3. Crear vista para el método **index** del controlador **File** (**resources\views\index.blade.php**).
4. Programar el método **index** del controlador **File**.
5. Seleccionar un modelo de tabla de bootstrap y para el diseño del la vista index.
    + Bootstrap: https://getbootstrap.com
6. Insertar CDN de estilos Bootstrap en resources\views\layouts\app.blade.php
    ```php
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    ```

## Limitar el acceso a los archivos
1. Agregar ruta a **routes\web.php**:
    ```php
    Route::get('/files/{file}', [FilesController::class, 'store'])->name('user.files.show');
    ```
2. Programar el método **show** del controlador **File**.
    ::: warning Advertencia
    OJO: Solventar problema:
    ```
    Forbidden
    You don't have permission to access this resource.
    Apache/2.4.46 (Win64) OpenSSL/1.1.1h PHP/7.4.15 Server at file.test Port 80
    ```
    :::

## Eliminar archivo
1. Agregar ruta a **routes\web.php**:
    ```php
    Route::delete('/delet-file/{file}', [FilesController::class, 'destroy'])->name('user.files.destroy');
    ```
2. Programar el método **destroy** del controlador **File**.

