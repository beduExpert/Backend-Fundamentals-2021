# Sesión 7 - Autenticación y Protección

🎯 **Objetivo:**

 En esta sesión, aprenderás a implementar mecanismos de autenticación y autorización en aplicaciones Node.js/Express. Se cubrirán temas como autenticación basada en **JWT (JSON Web Tokens)**, el uso de **Passport.js**, la protección de endpoints y la configuración de estrategias de seguridad.


---


- **Autenticación**: El proceso de verificar la identidad de un usuario.
  - Ejemplos: Login, tokens JWT, OAuth.
  
- **Autorización**: Proceso que determina qué acciones o recursos puede acceder un usuario autenticado.
  - Ejemplo: Un usuario administrador puede eliminar datos, mientras que un usuario regular no.

- **Métodos de autenticación**:
  - **Sesiones**: Guardar información de autenticación en cookies del navegador.
  - **JWT**: Token que se envía con cada petición HTTP y permite autenticación sin necesidad de estado (stateless).
  - **OAuth**: Usado para autenticarse mediante terceros (Google, Facebook).


---

### Autenticación con JSON Web Tokens (JWT)

- [`Ejemplo 1`](Ejemplo-01/)
- [`Reto 01`](Reto-01)

### Implementación de Passport.js con JWT

- [`Ejemplo 2`](Ejemplo-02/)
- [`Reto 02`](Reto-02)

### Protección de endpoints y autorización basada en roles

- [`Ejemplo 3`](Ejemplo-03/)
- [`Reto 03`](Reto-03)

### Mejores prácticas de seguridad y manejo de errores 

- [`Ejemplo 4`](Ejemplo-04/)


---

## Postwork

[`Postwork`](postwork/Readme.md)