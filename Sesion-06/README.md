# Sesi贸n 6 - Seguridad

馃幆 **Objetivo:**

- Definir la funcionalidad de la API con usuarios.
- Proteger los datos confidenciales.

---


### Validaciones

Cuando se trabaja con informaci贸n sensible o confidencial es importante que tratemos estos dados con las medidas necesarias para que est茅n seguros dentro de nuestra aplicaci贸n as铆 como en la base de datos en donde se almacenan. Por lo que lo principal es reconocer cuales de los campos representan un dato sensible y decidir cual es la mejor alternativa para tratarlo.

- [`Ejemplo 1: Agregando Validaciones al esquema de Usuario.`](Ejemplo-01/)
- [`Reto 1: Agregando Validaciones al esquema de Usuario.`](Reto-01/)

### Seguridad

Cuando hablamos de contrase帽as o n煤meros de tarjeta de cr茅dito por ejemplo estos no pueden estar guardados directamente en la base de datos pues es informaci贸n confidencial de nuestros usuarios y tenemos que garantizar que s贸lo ellos tengan acceso a esa informaci贸n y que si ocurriera una violaci贸n a la seguridad de nuestro servidor no se revelar铆an estos datos. Para eso es necesario cifrarlos antes de almacenarlos. 

- [`Ejemplo 2: Autenticaci贸n y Cifrado de datos`](Ejemplo-02/)
- [`Reto 2: Autenticaci贸n y Cifrado de datos`](Reto-02/)

---

## Postwork

[`Postwork`](postwork/Readme.md)