# Clases C++
+ **Autor**: Pedro Bazó
::: tip Enlaces de interes
  + [Repositorio GitHub](https://github.com/petrix12/cpp2023.git)
  + [Canal de YouTube Programación ATS](https://www.youtube.com/@ProgramacionATS)
  + [Programación en C++ || Programación ATS](https://www.youtube.com/watch?v=dJzLmjSJc2c&list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh)
  + [Compilando C/C++ desde Visual Studio Code | Windows 10](https://platzi.com/tutoriales/1469-algoritmos/2765-compilando-cc-desde-visual-studio-code-windows-10)
  + [Code::Blocks](https://www.codeblocks.org)
:::


## Recursividad
+ **Definición**: Se llama recursividad a un proceso mediante el cual una función se llama a sí misma de forma repetida, hasta que se satisface alguna determinada condición. El proceso se utiliza para computaciones repetidas en las que cada acción se determina mediante un resultado anterior. Se pueden escribir de esta forma muchos problemas iterativos.

+ **Ejemplo**: Factorial y Fibonacci
```cpp
#include<iostream>
#include<conio.h>

using namespace std;

double factorial(int n){
	if (n == 1)
		return 1;
	else
		return n*factorial(n-1);
}

double fibonacci(int i){
	if(i <= 2)
		return 1;
	else
		return fibonacci(i - 1) + fibonacci (i - 2);
}

int main(){
    int n;
    cout<<"Digite un numero: "; cin>>n;
    
	double fact = factorial(n);
    cout<<"El factorial de "<<n<<" es "<<fact<<endl;

	double fib = fibonacci(n);
    cout<<"El valor para la serie de Fibonacci para "<<n<<" terminos es "<<fib<<endl;
    
	getch();
	return 0;
}
```

## Programación Orientada a Objeto en C++
+ **Repositorio**: https://github.com/petrix12/cpp2023/tree/main/bases_poo
### Conceptos Básicos:
1. **Clase**: Es un elemento de la programación orientada a objetos que actúa como una plantilla y va a definir las características y comportamientos de una entidad. La clase va a ser como un molde a partir del cual vamos a poder definir entidades.
2. **Objeto**: Es la instancia de una clase.
3. **Abstracción**: Proceso mental de extracción de las características esenciales de algo, ignorando los detalles superfluos.
4. **Encapsulación**: Proceso por el que se ocultan los detalles del soporte de las características de una abstracción.
5. **Herencia**: La herencia es un mecanismo que permite la definición de una clase a partir de la definición de otra ya existente.
6. **Polimorfismo**: Cualidad que poseen los objetos de responder de forma diferentes ante un mismo mensaje.

+ Ejemplo de un programa en C++ con **Clase, Objeto, Abstracción y Encapsulación**:
```cpp
// POO en C++
// Conceptos basicos: Clase, Objeto, Abstraccion, Encapsulacion
#include<iostream>
#include<stdlib.h>

using namespace std;

class Persona{
    // Atributos
    private:
        int edad;
        string nombre;
    // Metodos
    public:
        Persona(int, string);   // Constructor
        void leer();
        void correr();
};

// Inicializar constructor
Persona::Persona(int _edad, string _nombre){
    edad = _edad;
    nombre = _nombre;
}

// Metodo leer
void Persona::leer(){
    cout << "Soy " << nombre << " y estoy leyendo" << endl;
}

// Metodo correr
void Persona::correr(){
    cout << "Soy " << nombre << " y estoy corriendo" << endl;
}

int main(){
    Persona p1 = Persona(22, "Isabel");
    Persona p2(19, "Mar�a");
    p1.leer();
    p2.leer();
    return 0;
}
```
+ Ejemplo de un programa en C++ con **Herencia**:
```cpp
// POO en C++
// Conceptos basicos: Herencia
#include<iostream>
#include<stdlib.h>

using namespace std;

class Persona{
    // Atributos
    private:
        int edad;
        string nombre;
    // Metodos
    public:
        Persona(int, string);   // Constructor
        void mostrarPersona();
};

class Alumno : public Persona{
    // Atributos
    private:
        string codigoAlumno;
        float notaFinal;
    // Metodoa
    public:
        Alumno(int, string, string, float);   // Constructor
        void mostrarAlumno();
};

// Inicializar constructor Persona
Persona::Persona(int _edad, string _nombre){
    edad = _edad;
    nombre = _nombre;
}

// Inicializar constructor Alumno
Alumno::Alumno(int _edad, string _nombre, string _codigoAlumno, float _notaFinal) : Persona(_edad, _nombre){
    codigoAlumno = _codigoAlumno;
    notaFinal = _notaFinal;
}

// Metodo mostrarPersona
void Persona::mostrarPersona(){
    cout << "Nombre: " << nombre << endl;
    cout << "Edad: " << edad << endl;
}

// Metodo mostrarAlumno
void Alumno::mostrarAlumno(){
    mostrarPersona();
    cout << "Codigo Alumno: " << codigoAlumno << endl;
    cout << "Nota Final: " << notaFinal << endl;
}

int main(){
    Alumno a1 = Alumno(22, "Isabel", "JKHYT", 17.3);
    Alumno a2(19, "Maria", "TYUIO", 18.9);
    a1.mostrarAlumno();
    a2.mostrarAlumno();
    return 0;
}
```
+ Ejemplo de un programa en C++ con **Polimorfismo**:
```cpp
// POO en C++
// Conceptos basicos: Polimorfismo
#include<iostream>
#include<stdlib.h>

using namespace std;

// Clase padre o superclase
class Persona{
	// Atributos
	private:
		int edad;
		string nombre;
	// Metodos
	public:
        Persona(int, string);   // Constructor
		virtual void mostrar();	// Metodo al cual aplicaremos polimorfismo
};

// Clase alumno que hereda de persona
class Alumno : public Persona{
	// Atributos
	private:
		float notaFinal;
	// Metodoa
	public:
		Alumno(int, string, float);   // Constructor
		void mostrar();
};

// Clase profesor que hereda de persona
class Profesor : public Persona{
	// Atributos
	private:
		string materia;
	// Metodoa
	public:
		Profesor(int, string, string);   // Constructor
		void mostrar();
};

// Inicializar constructor Persona
Persona::Persona(int _edad, string _nombre){
	edad = _edad;
	nombre = _nombre;
}

// Inicializar constructor Alumno
Alumno::Alumno(int _edad, string _nombre, float _notaFinal) : Persona(_edad, _nombre){
	notaFinal = _notaFinal;
}

// Inicializar constructor Profesor
Profesor::Profesor(int _edad, string _nombre, string _materia) : Persona(_edad, _nombre){
	materia = _materia;
}

// Metodo mostrar (Padre)
void Persona::mostrar(){
	cout << "Nombre: " << nombre << endl;
	cout << "Edad: " << edad << endl;
}

// Metodo mostrar (Alumno)
void Alumno::mostrar(){
	Persona::mostrar();
	cout << "Nota Final: " << notaFinal << endl;
}

// Metodo mostrar (Profesor)
void Profesor::mostrar(){
	Persona::mostrar();
	cout << "Materia: " << materia << endl;
}

int main(){
	Alumno alumno = Alumno(22, "Isabel", 17.3);
	Profesor profesor = Profesor(19, "Maria", "Programacion");
	alumno.mostrar();
	profesor.mostrar();
    return 0;
}
```

+ Ejemplo de un programa en C++ con **Herencia**:
```cpp
#include<iostream>
#include<conio.h>
using namespace std;

class Vehiculo{
	protected:
	    string color;
	    string marca;
	public:
		Vehiculo();
	    Vehiculo(string color, string marca);
	    const string &getColor() const;
	    const string &getMarca() const;
};

class Coche : public Vehiculo{
	private:
	    int numeroPuertas;
	    int potencia;
	public:
		Coche(int, int);
		Coche(string, string, int, int);
	    void arrancarCoche();
	    int getPotencia() const;
	    int getNumeroPuertas() const;
};

class Moto : public Vehiculo{
	private:
	    int cilindrada;
	    int potencia;
	public:
		Moto(string, string, int, int);
	    void derrapar();
	    int getPotencia() const;
	    int getCilindrada() const;
};

int main(){
	Moto moto1("Azul", "Honda", 500, 125);
	moto1.derrapar();
	
	getch();
	return 0;
}

Vehiculo::Vehiculo(){
}

Vehiculo::Vehiculo(string color, string marca){
    color = color;
    marca = marca;
}

const string &Vehiculo::getColor() const
{
    return color;
}

const string &Vehiculo::getMarca() const
{
    return marca;
}

Coche::Coche(int po, int pu) : Vehiculo(){
    potencia = po;
    numeroPuertas = pu;
}

Coche::Coche(string _color, string _marca, int po, int pu) : Vehiculo(_color, _marca){
    potencia = po;
    numeroPuertas = pu;
}

Moto::Moto(string _color, string _marca, int po, int ci) : Vehiculo(_color, _marca){
    potencia = po;
    cilindrada = ci;
}

void Moto::derrapar(){
    cout << "Soy una moto y estoy derrapando";
}

void Coche::arrancarCoche(){
    cout << "Has arrancado el coche";
}

int Moto::getPotencia() const
{
    return potencia;
}

int Moto::getCilindrada() const
{
    return cilindrada;
}

int Coche::getPotencia() const
{
    return potencia;
}

int Coche::getNumeroPuertas() const
{
    return numeroPuertas;
}
```

### Ejercicio 1:
Crea una clase Fraccion con métodos para sumar, restar, multiplicar y dividir fracciones.
#### Solución:
```cpp
#include<iostream>

using namespace std;

class Fraccion{
	// Atributos
	private:
		int a;
		int b;
		int c;
		int d;
	// Metodos
	public:
		Fraccion(int, int, int, int);
		float sumar();
		float restar();
		float multiplicar();
		float dividir();
};

// Iniciar constructor
Fraccion::Fraccion(int _a, int _b, int _c, int _d){
	a = _a;
	b = _b;
	c = _c;
	d = _d;
}

// Metodo sumar
float Fraccion::sumar(){
	return (float)(a*d + b*c)/(b*d);
}

// Metodo restar
float Fraccion::restar(){
	return (float)(a*d - b*c)/(b*d);
}

// Metodo multiplicar
float Fraccion::multiplicar(){
	return (float)(a*c)/(b*d);
}

// Metodo dividir
float Fraccion::dividir(){
	return (float)(a*d)/(b*c);
}

int main(){
	cout.precision(3);
	Fraccion f(4, 2, 9, 3);
	cout<<"Suma: "<<f.sumar()<<endl;
	cout<<"Resta: "<<f.restar()<<endl;
	cout<<"Multiplicacion: "<<f.multiplicar()<<endl;
	cout<<"Division: "<<f.dividir()<<endl;
	return 0;
}
```

### Ejercicio 2: 
+ Parte 1: Construir una clase llamada triángulo, que tenga los siguientes atributos: base y altura, y el siguiente métodos: área. 
+ Parte 2: Construir una clase llamada rectángulo, que herede de la clase triángulo, y que sobrescriba el métodos área de la clase padre.
#### Solución:
```cpp
#include<iostream>

using namespace std;

// Clase Triangulo
class Triangulo{
	// Atributos
	protected:
		float base;
		float altura;
	// Metodos:
	public:
		Triangulo(float, float);
		float area();
};

// Constructor Triangulo
Triangulo::Triangulo(float _base, float _altura){
	base = _base;
	altura = _altura;
}

// Metodo area Triangulo
float Triangulo::area(){
	return base*altura/2;
}

// Clase Rectangulo
class Rectangulo : public Triangulo {
	// Metodos
	public:
		Rectangulo(float, float);
		float area();
};

// Constructor Rectangulo
Rectangulo::Rectangulo(float _base, float _altura) : Triangulo(_base, _altura){
}

// Metodo area Rectangulo
float Rectangulo::area(){
	return base*altura;
}

int main(){
	Triangulo t(10, 4);
	cout<<"Area del triangulo: "<<t.area()<<endl;
	Rectangulo r(10, 4);
	cout<<"Area del rectangulo: "<<r.area()<<endl;
	return 0;
}
```

### Ejercicio 3:
+ Parte 1: Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad.
    + El titular será obligatorio y la cantidad es opcional. 
    + Crea dos constructores que cumpla lo anterior.
    + Crea sus respectivos métodos getters, setters y el mètodo toString.
    + Tendrá dos métodos especiales:
        + ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
        + retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad actual a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.
+ Parte 2: Crear una nueva clase CuantaJoven que herede de la clase Cuenta. 
    + La clase deberá contener ahora el atributo edad.
    + Crear un constructor considerando el nuevo atributo.
    + Crear los mètodos getters y setters para el nuevo atributo.
    + Aplicar polimorfismo a al mètodo toString para mostrar ahora la edad.
#### Solución:
```cpp
#include<iostream>
#include<conio.h>

using namespace std;

// Clase Cuenta
class Cuenta{
	// Atributos
	protected:
		string titular;
		double cantidad = 0;
	// Metodos
	public:
		Cuenta(string);
		Cuenta(string, double);
		string getTitular();
		void setTitular(string);
		double getCantidad();
		void setCantidad(double);
		void toString();
		void ingresar(double);
		void retirar(double);
};

// Constructor 1 Cuenta
Cuenta::Cuenta(string titular){
	this->titular = titular;
}

// Constructor 2 Cuenta
Cuenta::Cuenta(string titular, double cantidad){
	this->titular = titular;
	this->cantidad = cantidad;
}

// Getter Cuenta
string Cuenta::getTitular(){
	return this->titular;
}

double Cuenta::getCantidad(){
	return this->cantidad;
}

// Setter Cuenta
void Cuenta::setTitular(string titular){
	this->titular = titular;
}

void Cuenta::setCantidad(double cantidad){
	this->cantidad = cantidad;
}

// toString Cuenta
void Cuenta::toString(){
	cout<<"El titular "<<this->titular<<" tiene en su cuenta la cantidad de $ "<<this->cantidad<<endl;
}

// Metodos ingresar y retirar
void Cuenta::ingresar(double ingreso){
	this->cantidad += ingreso;
}

void Cuenta::retirar(double retiro){
	this->cantidad = (retiro <= cantidad) ? this->cantidad - retiro : 0;
}

// Clase CuentaJoven
class CuentaJoven : public Cuenta {
	// Atributos
	private:
		int edad;
	// Metodos
	public:
		CuentaJoven(string, double, int);
		int getEdad();
		void setEdad(int);
		void toString();
};

// Constructor CuentaJoven
CuentaJoven::CuentaJoven(string titular, double cantidad, int edad) : Cuenta(titular, cantidad) {
	this->edad = edad;
}

// Getter CuentaJoven
int CuentaJoven::getEdad(){
	return this->edad;
}

// Setter CuentaJoven
void CuentaJoven::setEdad(int edad){
	this->edad = edad;
}

// toString Cuenta
void CuentaJoven::toString(){
	cout<<"El titular "<<this->titular<<" de edad "<<this->edad<<" tiene en su cuenta la cantidad de $ "<<this->cantidad<<endl;
}

int main(){
	Cuenta c("Pedro");
	cout<<"Titular: "<<c.getTitular()<<endl;
	
	c.setTitular("Carlos");
	cout<<"Titular: "<<c.getTitular()<<endl;
	c.toString();
	
	Cuenta cuenta("Ramon", 1200);
	cout<<"Titular: "<<cuenta.getTitular()<<" Cantidad: "<<cuenta.getCantidad()<<endl;
	cuenta.toString();
	
	cuenta.ingresar(350);
	cuenta.toString();
	
	cuenta.retirar(1000);
	cuenta.toString();
	
	getch();
	return 0;
}
```

## Excepciones en C++
+ **Enlace de interes**: https://www.youtube.com/watch?v=jmgp576_ndo
+ Las excepciones son el medio que ofrecen algunos lenguajes de programación para tratar situaciones anómalas que pueden suceder cuando ejecutamos un programa.
+ Una excepción obliga al código que llama a reconocer una condición de error y controlarla. Las excepciones no controladas detienen la ejecución del programa. Una excepción salta al punto de la pila de llamadas que puede controlar el error.

### Palabras claves
+ **try**: Identifica un bloque de código en el cual se podrían activar excepciones concretas.
+ **catch**: Captura una excepción para tratarla.
+ **throw**: Lanza una excepción cuando aparece un error.

### Ejemplo 1
```cpp
#include<iostream>

using namespace std;

int main(){
	try{
		//int num = 5;
		//int num = -2;
		//int num = 0;
		int num = 1;
		if (num < 0)	// Probocando una excepción tipo string
			throw "Error en el sistema: el valor de num debe ser mayor o igual a cero";
		if (num ==0)	// Probocando una excepción tipo int
			throw 5;
		if (num ==1)	// Probocando una excepción con un tipo distinto a las anteriores
			throw 'a';
		cout<<num<<endl;
	} 
	// captura excepciones del tipo string
	catch(const char* error) {
		cout<<error<<endl;
	}
	// captura excepciones del tipo entero
	catch(int error) {
		cout<<"Error numero: "<<error<<endl;
	}
	// captura excepciones de cualquier tipo
	catch(...) {
		cout<<"Error de otro tipo"<<endl;
	}
	return 0;
}
```

### Ejemplo 2
```cpp
/*
Excepción cuando no se puede asignar mas memoria
*/
#include<iostream>
#include<conio.h>

using namespace std;

int main(){
	try {
		int *p;
		while (true)
			p = new int[1000000];
	}
	//catch(exception & excep) {
	catch(bad_alloc & excep) {
		cout<<"Error: "<<excep.what()<<endl;
	}
	
	getch();
	return 0;
}
```

### Ejemplo 3
```cpp
/*
Lanzar una excepcion desde una funcion
*/
#include<iostream>
#include<stdlib.h>
using namespace std;

int producto(int a, int b);

int main(){
	try {
		//int valor = producto(3, 5);
		int valor = producto(3, -5);
		cout<<valor<<endl;
	}
	catch(const char * error){
		cout<<error<<endl;
	}
	
	system("pause");
	return 0;
}

int producto(int a, int b){
	if(a<0 || b<0)
		throw "Error, numero negativo";
	return a*b;
}
```

### Ejemplo 4
```cpp
/*
Generar nuestra propia excepcion
*/
#include<iostream>
#include<conio.h>
using namespace std;

class MiExcepcion : public exception {
	public:
		const char * what();
};

int main(){
	try{
		int num = -1;
		if(num < 0)
			throw MiExcepcion();
	}
	catch(MiExcepcion &exp){
		cout<<exp.what()<<endl;
	}
	
	getch();
	return 0;
}

const char * MiExcepcion::what(){
	return "Mensaje de error modificado";
}
```

### Ejemplo 5
```cpp
/*
Bloque try catch dentro de otro bloque try catch
*/
#include<iostream>
#include<stdlib.h>
using namespace std;

int main(){
	try{
			try{
				throw 3;
		}
		catch(int errorInterno){
			throw;
		}
	}
	catch(int errorExterno){
		cout<<errorExterno<<endl;
	}
	
	system("pause");
	return 0;
}
```

### Ejemplo 6
```cpp
#include<iostream>
#include<conio.h>
using namespace std;

int main(){
	int a = 4;
	//int b = 2;
	int b = 0;
	int c;
	try{
		if(c == 0)
			throw "No se puede dividir por cero";
		c = a/b;
	}
	catch(const char *error){
		cout<<error<<endl;
		c = 0;
	}
	cout<<"a/b = "<<c<<endl;
	getch();
	return 0;
}
```

+ **Repositorio en GitHub**: https://github.com/petrix12/cpp2023/tree/main/excepciones


36


#include<conio.h>
getch();


#include<stdlib.h>
system("pause");



try catch (e) {
10:30 am


