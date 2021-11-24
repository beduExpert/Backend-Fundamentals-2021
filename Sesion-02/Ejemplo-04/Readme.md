[`Backend Fundamentals`](../../README.md) > [`Sesión 02: Introducción a Bases de datos`](../README.md/) > `Ejemplo 4`

# Ejemplo 4: Postgres en Docker

**Objetivo:**

- Levantar un servidor de bases de datos de PostgreSQL usando Docker.

**Requisitos:**

- Docker instalado

## Desarrollo

### ¿Qué es Docker?

Según la documentación oficial, Docker es una  *"plataforma abierta para desarrollar, enviar y ejecutar aplicaciones. Docker le permite separar las aplicaciones de su infraestructura. Con Docker, se puede administrar la infraestructura de la misma manera se administran las aplicaciones "*.

Para comprender completamente Docker, también debemos hablar sobre la diferencia entre Docker y una máquina virtual (VM). En una máquina virtual se puede tener varios sistemas operativos ejecutándose en el mismo hardware, mientras que Docker virtualiza el sistema operativo. Por lo tanto, la gran diferencia entre las máquinas virtuales y los contenedores de Docker es que los primeros pueden tener varios sistemas operativos (invitados) en el mismo hardware, a través de, por ejemplo, VMWare (que se denomina hipervisor). Mientras que cuando se instala Docker, se usa Docker Engine para crear entidades aisladas en el sistema operativo. Estas entidades se denominan contenedores. Por lo tanto, Docker permite automatizar la implementación de aplicaciones en estos contenedores.

En el prework ya instalamos Docker, ahora lo usaremos para definir nuestro servidor de PostgreSQL. 

1. Ejecutamos en la terminal el siguiente comando:

```docker
docker run --name postgres-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Entendamos que hace este comando:

- La última sección del comando toma la imagen de Docker 'postgres' mas reciente desde **Docker Hub**.
- `-d` significa que habilita Docker para ejecutar el contenedor en segundo plano.
- `-p` más los números de puerto significa que asigna el puerto de contenedores 5432 al puerto externo 5432; esto le permite conectarse a él desde el exterior del contenedor.
- `POSTGRES_PASSWORD` establece la contraseña que le da acceso a su base de datos.
- la propiedad `—name` le da a su contenedor un nombre y significa que puede encontrarlo fácilmente.

2. Ahora podemos conectarnos al servidor que acabamos de crear desd *PgAdmin4*. Lo abrimos.

<img src="img/img1.png">

3. Damos click derecho en **Server** y seleccionamos la opción de **create > Server...**

<img src="img/img2.png">

4. Agregamos un nombre al nuevo servidor.

<img src="img/img3.png">

5. En la pestaña de **Connection** y lo llenamos con los siguientes datos

 - Host: localhost
 - Port: 5432
 - User: postgres
 - Password: docker

<img src="img/img4.png">

6. Y podemos ver que estamos conectados a nuestro nuevo servidor. Este servidor funciona de la misma forma que el servidor definido en Heroku con la diferencia de que solo se puede acceder a él desde la computadora en donde se creo.

<img src="img/img5.png">


[`Atrás: Reto-02`](../Reto-02) | [`Siguiente: Reto-03`](../Reto-03)
