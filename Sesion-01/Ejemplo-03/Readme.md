[`Backend Fundamentals`](../../README.md) > [`Sesión 01`](../README.md) > `Ejemplo 3`

# Ejemplo 3: Introducción a NPM (Node Package Manager)

**Objetivo:**

 Aprender a manejar dependencias en Node.js utilizando NPM, y comprender la estructura del archivo `package.json`

--- 
## Desarrollo
### 1. **¿Qué es NPM?**
- **NPM**: Es el gestor de paquetes de Node.js, que permite instalar bibliotecas de terceros, gestionar dependencias y compartir módulos propios.
- **Comandos básicos de NPM**:
  - `npm init`: Inicializa un proyecto con un archivo `package.json`.
  - `npm install`: Instala paquetes y dependencias.
  - `npm install <paquete>`: Instala un paquete específico.
  - `npm uninstall <paquete>`: Desinstala un paquete.

### 2. **Uso de Paquetes de NPM**

#### **Instalar un paquete externo**
1. Instalar el paquete `moment` para manejar fechas:
   ```bash
   npm install moment
   ```

2. Usar `moment` en tu código:
   ```javascript
   const moment = require('moment');

   const ahora = moment().format('MMMM Do YYYY, h:mm:ss a');
   console.log('Fecha y hora actuales:', ahora);
   ```

#### **Instalar paquetes de desarrollo**
- Para instalar paquetes solo para el entorno de desarrollo, se puede usar la opción `--save-dev`:
   ```bash
   npm install nodemon --save-dev
   ```

3. **Uso de `package.json`**:
   - Al instalar paquetes, las dependencias se agregan automáticamente en `package.json`.
   - Puedes ver todas las dependencias del proyecto en el apartado `"dependencies"`.


---


[`Atrás: Sesión 03`](../README.md) | [`Siguiente: Reto-02`](../Reto-02)

