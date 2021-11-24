# Sesión 03 - Sequelize

🎯 **Objetivo:**

- Utilizar un ORM para conectarnos a la base de datos
- Traer información a la aplicación en JavaScrip desde la base de datos.

---

## Secciones:

En esta sesión comenzaremos con el desarrollo de nuestra aplicación de _Backend_, definiendo la conexión con la base de datos que generamos en la sesión anterior. Para esto utilizaremos un ORM llamado **Sequelize**.

## Consultas a la base de datos

Ahora que nuestra base de datos ya esta lista y tiene información, el paso siguiente es poder acceder a esta información. En este ejemplo veremos como podemos consultar los datos que se encuentran almacenados en la base de datos.

- [`Ejemplo 1: Queries`](Ejemplo-01/)
- [`Reto 1: Queries`](Reto-01/)


## Configuración de Sequelize

Vamos a comenzar creando la estructura del proyecto y configurando la conexión con la base de datos a partir del ORM **Sequelize**. 

- [`Ejemplo 02: Configuración de Sequelize`](Ejemplo-02/)

### Definición de los modelos

Una vez que ya se estableció la conexión con la base de datos tenemos que decirle a nuestra aplicación de javaScript de que forma representar los registros de la base de datos, esto se logra definiendo los modelos para cada una de las tablas. 

- [`Ejemplo 03: Creando Modelos`](Ejemplo-03/)
- [`Reto 02: Creando Modelos`](Reto-02/)

### Consultas a la base

Ya que tenemos una representación de los registros de la base de datos en nuestra aplicación de _backend_ entonces podemos comenzar a consultar la información que tenemos disponible en la base de datos.

- [`Ejemplo 04: Trayendo información de la Base de Datos`](Ejemplo-04/)
- [`Reto 03: Consultas`](Reto-03/)