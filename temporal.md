El correo debe salir luego de pagar.


Noibys Isabel Aguilar Hernandez
eu.andres2001+madre@gmail.com
13713





    ```php
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
#### Ejemplo de Herencia:
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
#### Ejemplo de Polimorfismo:
    ```cpp
    ```

