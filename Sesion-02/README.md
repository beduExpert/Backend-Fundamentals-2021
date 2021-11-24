# Sesión 2 - Introducción a Bases de Datos 

# 🎯  Objetivo:

- Crear una base de datos para el proyecto.
- Poblar la base de datos.

---

## Diseñando la base de datos

Para poder construir una base de datos es muy importante que información vamos a guardar en ella y de que forma vamos a estructurarla, de lo contrario podría resultar una base de datos con muchos errores que no funcione como esperamos. Es por esta razón que el proceso de diseño de bases de datos es de suma importancia. A continuación veremos algunas herramientas que nos ayudan en el proceso de diseño de una base de datos.

- [`Ejemplo 1: Modelo Entidad Relación y Relacional`](Ejemplo-01/)
- [`Reto 1: Modelo Entidad Relación y Relacional`](Reto-01/)

## 💻 Sistemas gestores de bases de datos

Son programas que funcionan como interfaz entre lxs usuarixs y las bases de datos. Gestionando los datos, el motor de base de datos, y el esquema de la base para facilitar la organización y manipulación de los datos.En otras palabras, es un software mediante el cual nosotrxs como usuarixs podemos acceder a la base de daos y hacer consultas, manipular los datos, modificar el esquema y en general administrar la base de datos.

Para este modulo estaremos utilizando **PostgreSQL** como gestor de base de datos. 


- [`Ejemplo 2: Configuración de postgreSQL`](Ejemplo-02/)

## Creación de la base de datos

Ya que tenemos nuestro diseño y nuestro servidor de bases de datos, ahora vamos a crearla, es decir vamos a generar la estructura dentro del servidor. Y también vamos a comenzar a cargar datos a ella, para que nos demos una idea de la estructura que tendrá.

- [`Ejemplo 3: Creación de una base de datos`](Ejemplo-03/)
- [`Reto 2: Creación y poblado de tablas`](Reto-02/)

<!-- ## Consultas a la base de datos

Ahora que nuestra base de datos ya esta lista y tiene información, el paso siguiente es poder acceder a esta información. En este ejemplo veremos como podemos consultar los datos que se encuentran almacenados en la base de datos. -->

## Configuración de bases de datos locales con Docker

Otra forma de trabajar con bases de datos es de forma local, es decir que nuestra computadora sirva como servidor en donde se almacena la base de datos. Esto es útil cuando queremos trabajar con una base de datos de prueba o cuando queremos usar un ambiente de desarrollo puramente local. Para definir un servidor para PostgreSQL usaremos Docker en este ejemplo.

- [`Ejemplo 4: PostgreSQL con Docker`](Ejemplo-04/)
<!-- - [`Reto 3: Queries`](Reto-03/) -->

---

## Postwork

[`Postwork`](postwork/Readme.md)



