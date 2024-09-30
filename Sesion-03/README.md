# Sesión 03 - Mongoose

🎯 **Objetivo:**

- Utilizar un ODM para conectarnos a la base de datos
- Traer información a la aplicación en JavaScrip desde la base de datos.

---

## Secciones:

En esta sesión comenzaremos con el desarrollo de nuestra aplicación de _Backend_, definiendo la conexión con la base de datos que generamos en la sesión anterior. Para esto utilizaremos un ODM para MongoDB llamado **Mongoose**.


## Introducción a Mongoose y Configuración del Entorno

Vamos a comenzar creando la estructura del proyecto y configurando la conexión con la base de datos a partir del ORM **Mongoose**. 

- [`Ejemplo 01`](Ejemplo-01/)


### Definición de Esquemas y Modelos en Mongoose

Una vez que ya se estableció la conexión con la base de datos tenemos que decirle a nuestra aplicación de javaScript de que forma representar los registros de la base de datos, esto se logra definiendo los esquemas y modelos  para cada una de las tablas. 

- [`Ejemplo 02`](Ejemplo-02/)
- [`Reto 01`](Reto-01/)

### Operaciones CRUD con Mongoose

Ya que tenemos una representación de los registros de la base de datos en nuestra aplicación de _backend_ entonces podemos comenzar a consultar la información que tenemos disponible en la base de datos.

- [`Ejemplo 03`](Ejemplo-03/)
- [`Reto 02`](Reto-02/)

### Relaciones entre Documentos y Consultas Avanzadas

- [`Ejemplo 04`](Ejemplo-04/)
- [`Reto 03`](Reto-03/)

---

## Postwork

[`Postwork`](postwork/Readme.md)