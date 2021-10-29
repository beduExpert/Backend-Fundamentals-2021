[`Backend Fundamentals`](../../README.md) > [`Sesión 01`](../README.md) > `Ejemplo 3`

# Ejemplo 3: Modelo Vista Controlador

**Objetivo:**

- Entender la arquitectura Modelo Vista Controlador y su utilidad en la etapa de diseño de una aplicación.

**Requerimientos:**

- Navegador web y cuaderno o aplicación para tomar notas.

## Desarrollo

Una de las maneras para bajar nuestras ideas y comenzar a diseñar la arquitectura de nuestra solución de software es por medio del patrón MVC *(Model View Controller)* 

### ¿Qué es MVC?

Es un patrón de diseño que separa las partes de nuestra aplicación en tres elementos.

- **Modelo:** Contiene una representación de los datos que maneja el sistema, su lógica de negocio, y sus mecanismos de persistencia.
- **Vista:**  Compone y presenta la información que se envía al cliente y los mecanismos interacción con éste por medio de una interfaz de usuario.
- **Controlador:** Actúa como un intermediario entre el Modelo y la Vista, gestionando el flujo de información entre ellos y las transformaciones para adaptar los datos a las necesidades de cada uno.

<img src="https://designlopers.com/views/assets/post/Desarrollo_de_aplicaciones_profesionales_en_PHP_y_MVC.png" width="550">

### Flujo MVC

MVC es un estilo de arquitectura que nos sirve para abstraer el funcionamiento de nuestra aplicación y separar las partes referentes al negocio de la lógica. Actualmente existen varios frameworks que han adaptado este estilo a su manera y que nos ayudan a no perder tiempo y comenzar a desarrollar con reglas preestablecidas. Algunos de estos frameworks son:

- SailJS o Express para NodeJS.
- Django si lo tuyo es Python.
- Ruby on Rails para el lenguaje de programación Ruby.
- Laravel si lo tuyo es PHP.

Los cuales nos permiten entregarle al usuario las vistas (documentos HTML, CSS y Javascript) desde el servidor.

MVC también ha sido adaptado para utilizarse en frontend y en Android.

### Modelo: Identificación de modelos

Continuando con BeduShop, podemos identificar cuatro entidades principales:

1. Producto: Se refiere al producto que registran los vendedores y los usuarios pueden comprar.
2. Usuario: hay dos tipos de usuarios de nuestra aplicación, el tipo comprador y el tipo vendedor 
3. Venta: Una venta define el momento en el que un comprador ordena un producto.
3. Reseña: Una valoración escrita por un usuario sobre un producto. 

Estos cuatro elementos serán nuestros modelos. Y en las sesiones siguiente veremos como se representan programativamente y en una base de datos.


-------



[`Atrás`](../Ejemplo-03) | [`Siguiente`](../README.md)

