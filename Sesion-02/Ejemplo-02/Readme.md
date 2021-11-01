[`Backend Fundamentals`](../../README.md) > [`Sesión 02: Introducción a Bases de datos`](../README.md/) > `Ejemplo 2`

# Ejemplo 2: Configuración de PostgreSQL

**Objetivo**

- Configurar un servidor de Bases de datos utilizando Heroku
- Conectarnos al servidor usando pgAdmin4

**Requisitos**

- PgAdmin instalado y funcionando 
- Un Navegador web 

---

## Desarrollo

Ahora que ya tenemos el diseño de nuestra base de datos, vamos a convertirla en una base de datos real. Pero para eso necesitamos primero elegir el Sistema Gestor de Base de Datos que usaremos, para este modulo optamos por utilizar PostgreSQL, que es uno de los principales SGBD relacionales que se utilizan en la actualidad.

Pero el gestor no es suficiente, también es necesario un lugar en donde almacenar nuestra base de datos, para esto utilizaremos un servidor de bases de datos el cual hostearemos en Heroku, utilizando un add-on llamado **Herroku Postgres**. 

En este ejemplo veremos el proceso de configuración del servidor y como conectarnos a él usando el cliente **pgAdmin4**

1. Entramos a la consola de Heroku en el navegador con la siguiente [liga](https://www.heroku.com).

<img src="img/img1.png" width="500">

2. Creamos una cuenta o iniciamos sesión.

<img src="img/img2.png" width="500">

3. Vamos a crear una nueva aplicación, el nombre será **bedushop** todo en minúsculas y seleccionamos Estados Unidos como país

<img src="img/img3.png" width="500">

4. Una vez creada la aplicación vamos a tener acceso a la consola de configuración en donde podremos agregar **Heroku Postgres** para definir nuestro servidor de bases de datos. Abrimos la pestaña **Resources**

<img src="img/img4.png" width="500">

5. En los recursos de la aplicación podemos agregar servicios (add-ons) que nos ayudan en diferentes tareas de la configuración o el manejo de una aplicación, en este caso el que nos interesa es un servicio de hosteo de bases de datos. Para agregar un nuevo add-on damos click en el botón **find more add-ons**.

<img src="img/img5.png" width="500">

6. Esto nos abrirá una nueva página en donde podemos encontrar todos los add-ons disponibles. 

<img src="img/img6.png" width="500">

7. En la barra de búsqueda escribimos **Heroku Postgres**. Y seleccionamos el add-on con ese nombre.

<img src="img/img7.png" width="500">

8. Esto nos abre una página con la descripción y funcionamiento del add-on. Damos click en **Install Heroku Postgres**

<img src="img/img8.png" width="500">

9. Para poder instalarlo hay que seleccionar un plan y una aplicación sobre la cual instalarlo, para el plan seleccionamos el gratuito y lo agregamos a la app **bedushop** que acabamos de crear.

<img src="img/img9.png" width="500">

10. Ahora damos click en el botón de confirmación que dice **Submit Order Form**

<img src="img/img10.png" width="500">

11. Vemos que en la consola de nuestra aplicación ya se agrego el add-on

<img src="img/img11.png" width="500">

Esto ya creo el servidor para nuestra base de datos, ahora vamos a conectarnos a él usando **pgAdmin4**. Damos click sobre el nombre del add-on

12. Esto abrió una nueva página en donde se define la configuración del servidor. Vamos a la pestaña **Settings**

<img src="img/img12.png" width="500">

13. Dentro de Settings daremos click en la opción que dice **View Credentials**.

<img src="img/img13.png" width="500">

14. Las credenciales son los datos con los que nos conectaremos al servidor para poder crear la base de datos.

<img src="img/img14.png" width="500">

15. Ahora abriremos **pgAdmin**

<img src="img/img15.png" width="500">

16. Damos click derecho sobre **Servers** y después **Create > Server**.

<img src="img/img16.png" width="500">

17. Esto abre una nueva ventana en donde colocaremos las credenciales de conexión de nuestro servidor. En nombre escribimos bedushop

<img src="img/img17.png" width="500">

18. Después vamos a la pestaña de **Connection** y agregaremos las credenciales de Heroku 

 -  En Host name/ adress colocamos el Host de Heroku
 -  En Port colocamos el Port de Heroku
 -  En Maintenance Database colocamos la Database de Heroku
 -  En Username colocamos el User de Heroku
 -  En Password colocamos la Password de Heroku
 - Y activamos la opción de **Save Password**

 <img src="img/img18.png" width="500">

 19. Por último vamos a la pestaña Advanced y en **DB restriction** agregamos el nombre de la Database de Heroku. Y damos click en **Save**

 <img src="img/img19.png" width="500">

 20. De esta forma ya estamos conectados a nuestro servidor en el que crearemos la base de datos.

 <img src="img/img20.png" width="500">
-------

[`Atrás: Reto 01`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-02/Reto-01) | [`Siguiente: Reto-02`](../Reto-02)
