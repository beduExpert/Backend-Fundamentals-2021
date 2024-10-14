[`Backend Fundamentals`](../../README.md) > [`Sesión 08`](../Readme.md) > `Ejemplo 3`

# Ejemplo 3: Documentación de una API en una Arquitectura de Microservicios

## Objetivo

Aprender a documentar las APIs de microservicios de manera clara y efectiva utilizando herramientas como **Swagger** o **Postman**.

## Desarrollo

1. **Importancia de la documentación en microservicios**:
   - Facilita la colaboración entre equipos que trabajan en diferentes servicios.
   - Asegura que los consumidores de los microservicios sepan cómo interactuar con cada servicio.

2. **Uso de Swagger para documentar APIs**:
   - **Swagger**: Una herramienta ampliamente utilizada para generar documentación interactiva de APIs REST.
   - Crear un archivo **swagger.json** para describir las rutas de un microservicio.

   **Ejemplo de Swagger**:
   ```yaml
   openapi: 3.0.0
   info:
     title: API de Usuarios
     description: Documentación del servicio de usuarios
     version: 1.0.0
   paths:
     /register:
       post:
         summary: Registrar un nuevo usuario
         requestBody:
           required: true
           content:
             application/json:
               schema:
                 type: object
                 properties:
                   username:
                     type: string
                   password:
                     type: string
         responses:
           '201':
             description: Usuario registrado
   ```

3. **Publicación de la documentación**:
   - Usar **Swagger UI** para proporcionar una interfaz gráfica interactiva que permita a los desarrolladores probar las rutas directamente desde la documentación.

4. **Documentar relaciones y dependencias entre microservicios**:
   - Documentar las interacciones entre diferentes microservicios y cómo un servicio puede depender de otro.


[`Atrás`](../Ejemplo-02/) 