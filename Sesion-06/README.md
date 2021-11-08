# Sesión 7 - Seguridad

🎯 **Objetivo:**

- Definir la funcionalidad de la API con usuarios.
- Proteger los datos confidenciales.

---


### Validaciones

Cuando se trabaja con información sensible o confidencial es importante que tratemos estos dados con las medidas necesarias para que estén seguros dentro de nuestra aplicación así como en la base de datos en donde se almacenan. Por lo que lo principal es reconocer cuales de los campos representan un dato sensible y decidir cual es la mejor alternativa para tratarlo.

- [`Ejemplo 1: Agregando Validaciones al esquema de Usuario.`](Ejemplo-01/)
- [`Reto 1: Agregando Validaciones al esquema de Usuario.`](Reto-01/)

### Seguridad

Cuando hablamos de contraseñas o números de tarjeta de crédito por ejemplo estos no pueden estar guardados directamente en la base de datos pues es información confidencial de nuestros usuarios y tenemos que garantizar que sólo ellos tengan acceso a esa información y que si ocurriera una violación a la seguridad de nuestro servidor no se revelarían estos datos. Para eso es necesario cifrarlos antes de almacenarlos. 

- [`Ejemplo 2: Autenticación y Cifrado de datos`](Ejemplo-02/)
- [`Reto 2: Autenticación y Cifrado de datos`](Reto-02/)

