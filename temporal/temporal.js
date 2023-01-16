// Función a evaluar
const funcion = (x) => (4 - x**2)**(1/2);    /* Fa función corresponde a una semicircunferencia de radio 2 */
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