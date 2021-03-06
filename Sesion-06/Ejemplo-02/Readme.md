[`Backend Fundamentals`](../../README.md) > [`Sesión 06`](../README.md) > `Ejemplo 2`

# Ejemplo 2: Seguridad

## Objetivo

- Hacer un manejo de sesiones para los usuarios de nuesta aplicación

## Requerimientos

Contar con el código de la API

## Desarrollo

1. Para crear un nuevo usuario con password y autenticación añadiremos algunos <b>helper methods</b> a nuestro modelo. Estos nos permitirán:

- Crea y valida contraseñas, así como generar el <b>JWT</b>. 

> **JWT** (JSON Web Tokens)
> Recordemos que el JWT es un estándar para la creación de Tokens de autenticación en la web basados en el formato JSON.

- Utilizar el algoritmo pbkdf2 econtrado en la biblioteca crypto de Node. Con el cual generaremos y validaremos hashes. Para guardar de forma segura la contraseña.

- Para todos los **helper methods**, requeriremos algunos módulos. Añade las siguientes líneas en la parte alta de nuestro modelo <b>Usuarios</b>.

    ```jsx
    const crypto = require('crypto');                             
    //Importando módulo crypto, pendiente de instalar.
    const jwt = require('jsonwebtoken');                          
    //Importando módulo jsonwebtoken, pendiente de instalar.
    const secret = require('../config').secret;                   
    // ???? es un misterio que resolveremos en la última sesión
    ```
2. Sera necesario definir los métodos de autenticación justo antes de la definición del modelo Usuario, es decir antes de la última línea.

  - Primero vamos a definir un método que nos permita almacenar la contraseña del usuario en la base de datos, de tal forma que este protegida. Este método cifrará la contraseña usando una función *hash*. 

```jsx 
User.crearPassword = function (password) {
    salt = crypto.randomBytes(16).toString("hex"); // generando una "salt" random para cada usuario
    hash = crypto
    .pbkdf2Sync(password, salt, 10000, 512, "sha512")
    .toString("hex"); // generando un hash utilizando la salt
    return { salt : salt, hash: hash }
}
```

  - Como la contraseña no está almacenada literalmente en la base de datos se define un método que verifica que la contraseña proporcionada en el proceso de inicio de sesión corresponda con la de la base de datos. Para esto cometemos la posible contraseña al mismo proceso de cifrado que la contraseña real antes de ser guardada y si el resultado es el mismo entonces sabemos que se trata de la misma cadena.

```jsx 
User.validarPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
}
```

  - Definimos también un método que genera el **JWT** para el manejo de sesiones con un tiempo de caducidad de 60 días.

```jsx
User.generarJWT = function(user) {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60); // 60 días antes de expirar

  return jwt.sign({
    id: user._id,
    username: user.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
}
```

  - Un método que nos regrese una representación en JSON del usuario ya autenticado.

```jsx
User.toAuthJSON = function(user){
    return {
        username: user.username,
        email: user.email,
        token: User.generarJWT(user)
    };
}
```

3. Instalamos las dependencias necesarias.

```bash
npm install crypto jsonwebtoken passport passport-local express-jwt
```

[`Atrás`](../Ejemplo-01) | [`Siguiente`](../Ejemplo-03)
