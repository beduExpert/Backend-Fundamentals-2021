# Sesi贸n 2 - Introducci贸n a Bases de Datos 

# 馃幆  Objetivo:

- Crear una base de datos para el proyecto.
- Poblar la base de datos.

---

## Dise帽ando la base de datos

Para poder construir una base de datos es muy importante que informaci贸n vamos a guardar en ella y de que forma vamos a estructurarla, de lo contrario podr铆a resultar una base de datos con muchos errores que no funcione como esperamos. Es por esta raz贸n que el proceso de dise帽o de bases de datos es de suma importancia. A continuaci贸n veremos algunas herramientas que nos ayudan en el proceso de dise帽o de una base de datos.

- [`Ejemplo 1: Modelo Entidad Relaci贸n y Relacional`](Ejemplo-01/)
- [`Reto 1: Modelo Entidad Relaci贸n y Relacional`](Reto-01/)

## 馃捇 Sistemas gestores de bases de datos

Son programas que funcionan como interfaz entre lxs usuarixs y las bases de datos. Gestionando los datos, el motor de base de datos, y el esquema de la base para facilitar la organizaci贸n y manipulaci贸n de los datos.En otras palabras, es un software mediante el cual nosotrxs como usuarixs podemos acceder a la base de daos y hacer consultas, manipular los datos, modificar el esquema y en general administrar la base de datos.

Para este modulo estaremos utilizando **PostgreSQL** como gestor de base de datos. 


- [`Ejemplo 2: Configuraci贸n de postgreSQL`](Ejemplo-02/)

## Creaci贸n de la base de datos

Ya que tenemos nuestro dise帽o y nuestro servidor de bases de datos, ahora vamos a crearla, es decir vamos a generar la estructura dentro del servidor. Y tambi茅n vamos a comenzar a cargar datos a ella, para que nos demos una idea de la estructura que tendr谩.

- [`Ejemplo 3: Creaci贸n de una base de datos`](Ejemplo-03/)
- [`Reto 2: Creaci贸n y poblado de tablas`](Reto-02/)

<!-- ## Consultas a la base de datos

Ahora que nuestra base de datos ya esta lista y tiene informaci贸n, el paso siguiente es poder acceder a esta informaci贸n. En este ejemplo veremos como podemos consultar los datos que se encuentran almacenados en la base de datos. -->

## Configuraci贸n de bases de datos locales con Docker

Otra forma de trabajar con bases de datos es de forma local, es decir que nuestra computadora sirva como servidor en donde se almacena la base de datos. Esto es 煤til cuando queremos trabajar con una base de datos de prueba o cuando queremos usar un ambiente de desarrollo puramente local. Para definir un servidor para PostgreSQL usaremos Docker en este ejemplo.

- [`Ejemplo 4: PostgreSQL con Docker`](Ejemplo-04/)
<!-- - [`Reto 3: Queries`](Reto-03/) -->

---

## Postwork

[`Postwork`](postwork/Readme.md)



