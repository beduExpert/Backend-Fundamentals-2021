# Sesión 03 - Sequelize

🎯 **Objetivo:**

- Utilizar un ORM para conectarnos a la base de datos
- Traer información a la aplicación en JavaScrip desde la base de datos.

---

## Secciones:

En esta sesión comenzaremos con el desarrollo de nuestra aplicación de _Backend_, definiendo la conexión con la base de datos que generamos en la sesión anterior. Para esto utilizaremos un ORM llamado **Sequelize**.

## Configuración de Sequelize

Vamos a comenzar creando la estructura del proyecto y configurando la conexión con la base de datos a partir del ORM **Sequelize**. 

- [`Ejemplo 01: Configuración de Sequelize`](Ejemplo-01/)

### Definición de los modelos

Una vez que ya se estableció la conexión con la base de datos tenemos que decirle a nuestra aplicación de javaScript de que forma representar los registros de la base de datos, esto se logra definiendo los modelos para cada una de las tablas. 

- [`Ejemplo 02: Creando Modelos`](Ejemplo-02/)
- [`Reto 01: Creando Modelos`](Reto-01/)

### Consultas a la base

Ya que tenemos una representación de los registros de la base de datos en nuestra aplicación de _backend_ entonces podemos comenzar a consultar la información que tenemos disponible en la base de datos.

- [`Ejemplo 03: Trayendo información de la Base de Datos`](Ejemplo-03/)
- [`Reto 02: Consultas`](Reto-02/)