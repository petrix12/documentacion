# Curso Laravel 8 desde cero


## URL's
::: tip Direcciones web
+ [Curso Laravel 8 desde cero](https://www.cursosdesarrolloweb.es/course/curso-laravel-8-desde-cero).
+ [Repositorio del curso](https://github.com/petrix12/Curso-Laravel-8-desde-cero---cursosdesarrolloweb.es.git).
:::


## Instalar Composer en Windows
Descargar y ejecutar instalador.

## Instalar el instalador de Laravel
+ $ composer global require laravel/installer
::: tip Nota
Lo instala con la última versión de Laravel instalada en la PC.
:::

## Crear un nuevo proyecto Laravel via instalador
+ $ laravel new nombre_proyecto

## Crear un nuevo proyecto Laravel via composer
+ $ composer create-project --prefer-dist laravel/laravel nombre_proyecto

## Ejecutar proyecto en servidor local con artisan
+ $ php artisan serve

## ARCHIVOS MODIFICADOS
1. Editar: **routes\web.php**.
2. Crear: **app\Http\Controllers\HolaController.php**.
    ```php
    public function __invoke(string $name){
        return "Hols {$name}";
    }
    ```
3. Eliminar: **app\Http\Controllers\HolaController.php**.
4. Ejecutar:
    + $ php artisan make:controller HolaController
    ::: tip Nota
    Antes comentar **Route::get('/hola2/{name}', HolaController::class);** en **routes\web.php**.
    :::
5. Crear: **resources\views\saludo.blade.php**.
6. Modificar: **.env**.
7. Ejecutar:
    + $ php artisan migrate
    + $ php artisan migrate:rollback
    + $ php artisan migrate
    + $ php artisan schema:dump
    + $ php artisan make:migration create_posts_table
8. Editar: **database\migrations\2021_02_19_193349_create_posts_table.php**.
9. Ejecutar: 
    + $ php artisan migrate
    + $ php artisan make:migration add_user_id_to_posts_table
10. Editar: **database\migrations\2021_02_20_130204_add_user_id_to_posts_table.php**.
11. Ejecutar: 
    + $ php artisan migrate
    + $ composer require doctrine/dbal
    + $ php artisan make:migration update_title_to_posts_table
12. Editar: **database\migrations\2021_02_20_132649_update_title_to_posts_table.php**.
13. Ejecutar:
    + $ php artisan migrate
    + $ php artisan make:model Post
14. Modificar: **database\seeders\DatabaseSeeder.php**.
15. Ejecutar: 
    + $ php artisan db:seed
    + $ php artisan migrate:fresh
    + $ php artisan make:factory PostFactory
16. Modificar: **database\factories\PostFactory.php**.
17. Ejecutar: 
    + $ php artisan db:seed
    + $ php artisan make:seeder PostSeeder
    + $ php artisan migrate:fresh --seed
    + $ php artisan make:model Phone -m
18. Modificar: **database\migrations\2021_02_22_190402_create_phones_table.php**.
19. Ejecutar: 
    + $ php artisan migrate
20. Modificar: **app\Models\Phone.php**.
21. Ejecutar:
    + $ php artisan vendor:publish 
    + y luego seleccionar la opción Provider: Laravel\Tinker\TinkerServiceProvider
22. Ejecutar: 
    + $ php artisan tinker
    ::: tip Nota
    Exit o Ctrl-C para salir y clear para limpiar.
    :::
23. Ejecutar:
    ```
    + >>> use App\Models\User
    + >>> User::all()
    + >>> $user = User::first()
    + >>> $user
    + >>> $user->posts
    + >>> $user = User::with("posts")->find(1)
    + >>> $user->phone
    + >>> use App\Models\Phone
    + >>> $phone = new Phone
    + >>> $phone->user_id = 1
    + >>> $phone->phone_number = "1234567855"
    + >>> $phone->created_at = now()
    + >>> $phone->save()
    + >>> $user = User::with(["phone", "posts"])->find(1)
    + >>> $phone->fill(["phone_number" => "98785456"])->update()
    + >>> Exit
    + $ composer require laravel/breeze --dev
    + $ php artisan breeze:install
    + $ npm install && npm run dev
    ```
24. Ingresar en [Mailtrap](https://mailtrap.io).
25. Configurar .env con las credenciales de Mailtrap.
26. Para obligar al usuario a autenticarse implementar el modelo User a MustVerifyEmail
27. Ejecutar: 
    + $ php artisan migrate:fresh --seed
    + $ php artisan make:controller ContactController
28. Definir método **index** en controlador **app\Http\Controllers\ContactController.php**:
    ```php
    // ...
    class ContactController extends Controller
    {
        public function index(){
            return view('contact.form');
        }
    }    
    ```
29. Definir método **send** en controlador **app\Http\Controllers\ContactController.php**:
    ```php
    <?php

    namespace App\Http\Controllers;

    use App\Mail\SendContactForm;
    use App\Models\User;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Mail;

    class ContactController extends Controller
    {
        public function index(){
            return view('contact.form');
        }

        public function send(Request $request){
            $this->validate($request, [
                "subject" => "required|string|min:5|max:100",
                "message" => "required|string|min:20|max:3000"
            ]);

            // Para ver las variables que envía el formulario
            // dd($request->input());        
            try {
                Mail::to(User::first())->send(
                    new SendContactForm(
                        $request->subject,
                        $request->message
                    )
                );
                return back()
                    ->with("success", "El mensaje se ha enviado correctamente!");
            }catch (\Exception $exception){
                return back()
                    ->with("error", "Ha fallado el envío del mensaje: " . $exception->getMessage());
            }
        }
    }
    ```
30. Modificar middleware de rutas en **routes\web.php**.
31. Editar: **resources\views\layouts\navigation.blade.php**.
32. Crear: **resources\views\contact\form.blade.php**.
33. Ejecutar:
    + $ composer require protonemedia/laravel-form-components
    ::: tip Nota
    + Para instalar paquete de formulario de
    https://github.com/protonemedia/laravel-form-components
    + Para traducir el componente anterior al español:
        + https://github.com/spatie/laravel-translatable
        + $ composer require spatie/laravel-translatable
        + $ composer require laraveles/spanish
        + $ php artisan laraveles:install-lang
    + https://github.com/laravel-lang/lang
    + $ composer require laravel-lang/lang:~7.0
    <p></p>
    :::
34. Ejecutar: 
    + composer require laravel-lang/lang:~7.0
35. Copiar directorio: **vendor\laravel-lang\lang\src\es** y pegarlo en: **resources\lang**.
36. Ejecutar:
    + $ php artisan make:mail SendContactForm
37. Modificar el método **__construct** de la clase **app\Mail\SendContactForm.php**.
38. Agregar las variables públicas: **textSubject** y **textMessage** a **app\Mail\SendContactForm.php**.
    ```php
    class SendContactForm extends Mailable
    {
        use Queueable, SerializesModels;

        /**
        * @var string
        */
        public string $textSubject;

        /**
        * @var string
        */
        public string $textMessage;
        // ...
    }
    ```
39. Modificar el método **build** de la clase **app\Mail\SendContactForm.php**.
40. Crear: **resources\views\emails\contact.blade.php**.
41. Ejecutar:
    + $ php artisan vendor:publish
    + Seleccionar: Tag: laravel-mail
42. Agregar la siguiente ruta al middleware en **routes\web.php**.
43. Crear: **resources\views\components\flash-messages.blade.php**
    ```php
    @if ($message = Session::get("success"))
        <div class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500">
            <span class="text-xl inline-block mr-5 align-middle">
                <i class="fas fa-bell" />
            </span>
            <span class="inline-block align-middle mr-8">
                <b class="capitalize">{{ $message }}</b>
            </span>
        </div>
    @endif

    @if ($message = Session::get("error"))
        <div class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-pink-500">
            <span class="text-xl inline-block mr-5 align-middle">
                <i class="fas fa-bell" />
            </span>
            <span class="inline-block align-middle mr-8">
                <b class="capitalize">{{ $message }}</b>
            </span>
        </div>
    @endif    
    ```
44. Modificar: resources\views\layouts\app.blade.php
    ```php
    <!-- Page Content -->
    <main>
        <x-flash-messages />
        {{ $slot }}
    </main>
    ```