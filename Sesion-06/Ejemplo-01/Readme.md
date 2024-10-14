[`Backend Fundamentals`](../../README.md) > [`Sesión 06`](../README.md) > `Ejemplo 1`

# Ejemplo 1: Protección de Datos Sensibles y Cifrado en la Base de Datos

## Objetivo

Implementar técnicas para proteger y cifrar datos sensibles en la base de datos, como contraseñas y otros datos personales.

## Desarrollo

### 1. **Cifrado de Contraseñas**
- **¿Por qué no almacenar contraseñas en texto plano?**
  - Si una base de datos es comprometida, las contraseñas en texto plano pueden ser utilizadas inmediatamente.
  
- **Hashing de contraseñas con `bcrypt.js`**:
  - **`bcrypt`** es una librería que aplica un algoritmo de hashing con un "salt", haciendo que el hash de la contraseña sea único incluso si dos usuarios tienen la misma contraseña.

### **Instalar `bcrypt.js` y crear hash de contraseñas**:
1. Instalar la librería:
   ```bash
   npm install bcryptjs
   ```

2. Hash de la contraseña antes de almacenarla en la base de datos:
   ```javascript
   const bcrypt = require('bcryptjs');

   // Hash de una contraseña
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(req.body.password, salt);
   ```

3. Comparar la contraseña proporcionada por el usuario con la almacenada:
   ```javascript
   const isMatch = await bcrypt.compare(req.body.password, usuario.hashedPassword);
   if (!isMatch) return res.status(400).send('Contraseña incorrecta');
   ```

### 2. **Cifrado de otros datos sensibles**
- En algunas aplicaciones, además de las contraseñas, otros datos como información financiera o médica también deben ser cifrados.
  
- **Cifrado simétrico y asimétrico**:
  - **Simétrico**: Mismo clave para cifrar y descifrar (ejemplo: `crypto` de Node.js).
  - **Asimétrico**: Claves públicas y privadas (ejemplo: RSA).

### **Uso de la librería `crypto` de Node.js**:
```javascript
const crypto = require('crypto');

// Crear una clave aleatoria
const secret = 'miClaveSecreta';
const cipher = crypto.createCipher('aes-256-cbc', secret);

// Cifrar datos
let encrypted = cipher.update('datos sensibles', 'utf8', 'hex');
encrypted += cipher.final('hex');

// Descifrar datos
const decipher = crypto.createDecipher('aes-256-cbc', secret);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Datos cifrados:', encrypted);
console.log('Datos descifrados:', decrypted);
```


[`Atrás`](../README.md) | [`Siguiente`](../Ejemplo-02)
