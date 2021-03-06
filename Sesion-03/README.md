# Sesi贸n 03 - Sequelize

馃幆 **Objetivo:**

- Utilizar un ORM para conectarnos a la base de datos
- Traer informaci贸n a la aplicaci贸n en JavaScrip desde la base de datos.

---

## Secciones:

En esta sesi贸n comenzaremos con el desarrollo de nuestra aplicaci贸n de _Backend_, definiendo la conexi贸n con la base de datos que generamos en la sesi贸n anterior. Para esto utilizaremos un ORM llamado **Sequelize**.

## Consultas a la base de datos

Ahora que nuestra base de datos ya esta lista y tiene informaci贸n, el paso siguiente es poder acceder a esta informaci贸n. En este ejemplo veremos como podemos consultar los datos que se encuentran almacenados en la base de datos.

- [`Ejemplo 1: Queries`](Ejemplo-01/)
- [`Reto 1: Queries`](Reto-01/)


## Configuraci贸n de Sequelize

Vamos a comenzar creando la estructura del proyecto y configurando la conexi贸n con la base de datos a partir del ORM **Sequelize**. 

- [`Ejemplo 02: Configuraci贸n de Sequelize`](Ejemplo-02/)

### Definici贸n de los modelos

Una vez que ya se estableci贸 la conexi贸n con la base de datos tenemos que decirle a nuestra aplicaci贸n de javaScript de que forma representar los registros de la base de datos, esto se logra definiendo los modelos para cada una de las tablas. 

- [`Ejemplo 03: Creando Modelos`](Ejemplo-03/)
- [`Reto 02: Creando Modelos`](Reto-02/)

### Consultas a la base

Ya que tenemos una representaci贸n de los registros de la base de datos en nuestra aplicaci贸n de _backend_ entonces podemos comenzar a consultar la informaci贸n que tenemos disponible en la base de datos.

- [`Ejemplo 04: Trayendo informaci贸n de la Base de Datos`](Ejemplo-04/)
- [`Reto 03: Consultas`](Reto-03/)

---

## Postwork

[`Postwork`](postwork/Readme.md)