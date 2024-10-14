# Sesión 6 - Seguridad en el Backend

🎯 **Objetivo:**

Aprender a implementar buenas prácticas de seguridad en una aplicación Node.js/Express, enfocándose en la protección de datos, cifrado, validaciones, protección contra ataques comunes, y protección de endpoints.

---


**¿Por qué es importante la seguridad en el backend?**
  - Las aplicaciones backend manejan datos sensibles como contraseñas, datos personales y transacciones financieras.
  - Los ataques en el backend pueden comprometer la seguridad de los usuarios y la integridad del sistema.
  
**Áreas críticas de seguridad**:
  - **Protección de datos**: Evitar la exposición de información sensible.
  - **Validación de entradas**: Prevenir que usuarios maliciosos envíen datos peligrosos.
  - **Cifrado de datos**: Asegurar que los datos almacenados y transmitidos no sean accesibles en texto plano.
  - **Protección contra ataques**: Como inyección de código, cross-site scripting (XSS), cross-site request forgery (CSRF), y ataques de fuerza bruta.
  - **Autenticación y autorización**: Controlar quién accede a qué datos.


### Protección de Datos Sensibles y Cifrado en la Base de Datos

Cuando se trabaja con información sensible o confidencial es importante que tratemos estos dados con las medidas necesarias para que estén seguros dentro de nuestra aplicación así como en la base de datos en donde se almacenan. Por lo que lo principal es reconocer cuales de los campos representan un dato sensible y decidir cual es la mejor alternativa para tratarlo.

- [`Ejemplo 1`](Ejemplo-01/)
- [`Reto 1`](Reto-01/)

### Validación de Entradas y Sanitización de Datos

- [`Ejemplo 2`](Ejemplo-02/)
- [`Reto 2`](Reto-02/)


### Validación de Datos con MongoDB y Mongoose

- [`Ejemplo 3`](Ejemplo-03/)
- [`Reto 3`](Reto-03/)

### Protección Contra Ataques Comunes (XSS, CSRF, SQL Injection)

- [`Ejemplo 4`](Ejemplo-04/)

---

## Postwork

[`Postwork`](postwork/Readme.md)