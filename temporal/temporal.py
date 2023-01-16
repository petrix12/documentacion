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