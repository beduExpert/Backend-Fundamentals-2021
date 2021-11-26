`Backend Fundamentals` > `S07 - Mongoose` 
	
### Reto 1

Es momento de probar los endpoints recien creados en el API, así que ejecuta el servidor y realiza las siguientes tareas.

1. Utilizando insomnia, prueba el endpoint que te permitirá <b>crear una cuenta de usuario en bedushop</b> ( es decir, en el endpoint `POST [/v1/usuarios](http://localhost:3000/v1/usuarios)` ), guarda el <b>JWT</b> que te devuelve la petición.

 - Puedes utilizar el siguiente ejemplo <b>json</b> como base para hacer tu petición:

```json
{
	"id": 100,
 	"username":"jaeem006",
 	"nombre":"Javier",
 	"apellido":"Enriquez",
 	"email":"jem@gmail.com",
 	"password":"hola",
 	"telefono":"3312333",
 	"direccion":"direccion",
 	"tarjeta":"6666555544443333",
 	"tipo":"Vendedor"
 } 
```  

- No olvides guardar el <b>JWT</b>:

 ![img/JWT.png](img/img1.png)

2. Ahora prueba el endpoint para obtener la información del usuario recien creado. Utiliza el endpoint `GET http://localhost:4001/v1/usuarios`. 

- <b>Nota:</b>
	
	Debido a que en la configuración de <b>routes/usuarios.js</b>, indicamos que es necesaria autorización para el endpoint <b>GET-obtener usuarios</b>, debemos agregar los headers de autenticación. Es decir el JWT del usuario que solicitará la petición, de tal forma que el usuario solo podrá ver sus propios datos. Para lograr esto, selecciona el tipo de Auth <b>Bearer</b>. 

- Seleccionando Tipo de Auth:

 ![img/SeleccionandoAuth.png](img/SeleccionandoAuth.png)

- Insertando JWT:

 ![img/IngresandoBearerToken.png](img/IngresandoBearerToken.png)
 
 - Resultado de búsqueda:
 
  ![img/UsuarioEncontrado.png](img/img2.png)

3. Al igual que lo hiciste en los puntos anteriores, prueba el endpoint que te permitirá modificar los datos de un usuario. Intenta cambiar el nombre y password del usuario creado en los puntos anteriores.
 
[](img/img3.png)

4. ahora elimina el usuario con el método `DELETE`.

[](img/img4.png)

5. Ahora pregúntate: ¿en qué caso necesitaríamos conocer información sobre otro usuario?
6. Si el usuario no tiene la propiedad `tipo` cuando es creado en una petición POST, ¿podemos hacer algo para asignarle un tipo?

![image](https://user-images.githubusercontent.com/13757596/87738478-21ddc480-c7a3-11ea-9c9b-cf88868563ec.png)

[`Atrás: Ejemplo 01`](../Ejemplo-01) | [`Siguiente: Ejemplo 02`](../Ejemplo-02)
