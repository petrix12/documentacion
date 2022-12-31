Repositorio: https://github.com/petrix12/AppFileLaravel.git

Cómo subir múltiples archivos en Laravel
https://www.udemy.com/course/como-subir-multiples-archivos-en-laravel

Diseño MVC básico
=================
***. Crear proyecto: $ laravel new file --jet
    Versión: Laravel Framework 8.29.0
***. Ejecutar: $ npm install
***. Ejecutar: $ npm run dev
***. Crear modelo File: $ php artisan make:model File -m
***. Crear controlador: $ php artisan make:controller FilesController -r
***. Solamente trabajaremos con los métodos index, create y store del controlador File.
***. Agregar campos name, code_name y user_id a la migración de la tabla files:
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
***. Indicamos los campos de asignación masiva en el modelo File
    protected $fillable = [
        'name',
        'code_name',
        'user_id'
    ];
***. Configurar el archivo de variable de entorno .env con una bd.
***. Ejecutar migración: $ php artisan migrate
***. Adecuamos la vista dashboard a nuestro proyecto.
    ***
    ***
***. Agregamos la ruta en routes\web.php
    Route::post('/upload', [FilesController::class, 'store'])->name('user.files.store');
***. Programar el método store del controlador File.
    ***
    ***
***. Crear enlace simbólico de public a storage: $ php artisan storage:link

Alertas
=======
URL: https://github.com/realrashid/sweet-alert
***. Ejecutar: $ composer require realrashid/sweet-alert
***. Agregar a config\app.php en providers
    ***
    'providers' => [
        /*
        * Package Service Providers...
        */
        RealRashid\SweetAlert\SweetAlertServiceProvider::class,
        ***
    ],
    ***
***. Agregar a config\app.php en aliases
    'Alert' => RealRashid\SweetAlert\Facades\Alert::class,
***. Agregar a la cabecera del controlador File:
    use RealRashid\SweetAlert\Facades\Alert;
***. Insertar en la sección content de resources\views\layouts\app.blade.php
    @include('sweetalert::alert', ['cdn' => "https://cdn.jsdelivr.net/npm/sweetalert2@9"])
    Nota: si falla, reemplazar por: @include('sweetalert::alert')

Listar archivos
===============
***. Crear otro menú de navegación en resources\views\navigation-menu.blade.php
    ***
    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
        <x-jet-nav-link href="{{ route('user.files.index') }}" :active="request()->routeIs('user.files.index')">
            {{ __('Mis archivos') }}
        </x-jet-nav-link>
    </div>
    ***
***. Agregar ruta en routes\web.php
    Route::get('/files', [Controller::class, 'index'])->name('user.files.index');
***. Crear vista para el método index del controlador File: resources\views\index.blade.php
    ***
    ***
***. Programar el método index del controlador File.
    ***
    ***
***. Seleccionar un modelo de tabla de bootstrap y para el diseño del la vista index.
    URL: https://getbootstrap.com/
***. Insertar CDN de estilos Bootstrap en resources\views\layouts\app.blade.php
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

Limitar el acceso a los archivos
================================
***. Agregar ruta a routes\web.php
    Route::get('/files/{file}', [FilesController::class, 'store'])->name('user.files.show');
***. Programar el método show del controlador File.
    ***
    ***
OJO: Solventar problema:
Forbidden
You don't have permission to access this resource.

Apache/2.4.46 (Win64) OpenSSL/1.1.1h PHP/7.4.15 Server at file.test Port 80

Eliminar archivo
================
***. Agregar ruta a routes\web.php
    Route::delete('/delet-file/{file}', [FilesController::class, 'destroy'])->name('user.files.destroy');
***. Programar el método destroy del controlador File.
    ***
    *** 


