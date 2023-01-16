# Ejercicios de Programación


## Nivel inicial
+ **Problema 1**: Escribir un programa que calcule el área de un rectángulo.
+ **En JavaScript**:
    ```js
    // Se espera que los valores a introducir se correspondan con números reales
    let base = prompt('Base =');
    let altura = prompt('Altura =');

    let area = base * altura;
    alert(`Area = ${area}`);
    ```
<hr/>

+ **Problema 2**: Diseñe un programa que basado en el Teorema de Pitágoras calcule el valor de la hipotenusa.
+ **En Python**:
    ```py
    # Se espera que los valores a introducir se correspondan con números reales
    a = float(input("Cateto opuesto = " ))
    b = float(input("Cateto adyacente = " ))
    c = (a**2 + b**2)**(1/2)
    print('Hipotenusa = ', c)    
    ```
<hr/>

+ **Problema 3**: Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. Expresar el resultado en metros/segundo.
+ **En JavaScript**
    ```js
    // Datos iniciales
    let distancia = 2;    // km
    let tiempo    = 5;    // minutos

    // Conversión de los datos iniciales
    distancia = distancia * 1000;   // m (1 Km son 1000 m)
    tiempo    = tiempo * 60;        // segundos (1 minuto son 60 segundos)

    // Cálculo de la velocidad
    const velocidad = distancia / tiempo;

    alert(`Velocidad (m/s) = ${velocidad}`);    
    ```
<hr/>

+ **Problema 4**: Escribir un programa que calcule una ecuación de 2º grado.
+ **En Python**:
    ```py
    print('Ecuación de segundo grado: ax^2 + bx + c = 0')

    # Se espera que los valores a introducir se correspondan con números reales
    a = float(input("a = " ))
    b = float(input("b = " ))
    c = float(input("c = " ))

    discriminante = b**2 - 4*a*c
    x1 = (-b + discriminante**(1/2))/(2*a)
    x2 = (-b - discriminante**(1/2))/(2*a)

    print('x1 = ', x1)
    print('x2 = ', x2)    
    ```
<hr/>


## Nivel intermedio
+ **Problema 1**: Escribir un programa, que, basado en la definición de integral, estime el área bajo la curva de una función entre dos intervalos.
+ **En JavaScript**
    ```js
    // Función a evaluar
    const funcion = (x) => (4 - x**2)**(1/2);    /* La función corresponde a una semicircunferencia de radio 2 */
    const areaRectangulo = (base, altura) => base * altura;

    // Datos iniciales
    // Se espera que los valores a introducir se correspondan con números reales y que xf > xi
    const xi = parseFloat(prompt('Intervalo inicial ='));
    const xf = parseFloat(prompt('Intervalo final (debe ser mayor que el intervalo inicial) ='));
    const paso = parseFloat(prompt('Paso (a menor paso, mayor precisión) ='));

    // Cálculo del área
    let x1 = xi;
    let x2 = (x1 + paso) > xf ? xf : x1 + paso;
    let altura = funcion((x1 + x2)/2);
    let area = areaRectangulo(x2 - x1, altura);

    /* console.log(x1, x2, y1, y2, area); */

    while (x2 < xf) {
        x1 = x2;
        x2 = (x2 + paso) > xf ? xf : x1 + paso;
        altura = funcion((x1 + x2)/2);
        area += areaRectangulo(x2 - x1, altura);
        /* console.log(x1, x2, y1, y2, area); */
    }

    alert(`Area = ${area}`);       
    ```
<hr/>

+ **Problema 2**: Escribir un programa, que, basado en la definición de derivada, estime la pendiente en un punto cualquiera de una función.
+ **En Python**:
    ```py    
    ```
<hr/>