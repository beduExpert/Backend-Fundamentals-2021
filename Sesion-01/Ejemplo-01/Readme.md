[`Backend Fundamentals`](../../README.md) > [`Sesión 01`](../README.md) > `Ejemplo 1`

# Ejemplo 1:  Introducción a Node.js y Configuración del Entorno

**Objetivo:**

Conocer qué es Node.js, sus beneficios y aprender a instalarlo en el entorno local.

---

## Desarrollo

### 1. **¿Qué es Node.js?**
- **Definición**: Node.js es un entorno de ejecución de JavaScript del lado del servidor construido sobre el motor V8 de Chrome. Permite ejecutar código JavaScript fuera del navegador.
- **Características**:
  - No bloqueante (event-driven).
  - Asíncrono.
  - Ideal para aplicaciones de red, en tiempo real, y con alto rendimiento.

### 2. **¿Por qué usar Node.js?**
- **Ecosistema de NPM**: Gran cantidad de paquetes reutilizables disponibles.
- **Un solo lenguaje (JavaScript)**: Se utiliza el mismo lenguaje tanto en el frontend como en el backend.
- **Escalabilidad**: Maneja muchas conexiones de forma eficiente.

### 3. **Instalación de Node.js**

#### **Paso 1: Descargar e instalar Node.js**
1. Descargar Node.js desde [https://nodejs.org/](https://nodejs.org/). Se recomienda la versión LTS (soporte a largo plazo).
2. Instalar siguiendo los pasos del instalador.
3. Verificar la instalación en la terminal:
   ```bash
   node -v
   npm -v
   ```

#### **Paso 2: Creación de un Proyecto Básico**
1. Crear una carpeta para el proyecto:
   ```bash
   mkdir nodejs-clase
   cd nodejs-clase
   ```

2. Inicializar un proyecto con NPM:
   ```bash
   npm init -y
   ```
   Esto generará un archivo `package.json` con la configuración inicial del proyecto.

#### **Paso 3: Ejecutar un Script de Node.js**
1. Crear un archivo `index.js` y escribir el siguiente código:
   ```javascript
   console.log("Hola, mundo desde Node.js");
   ```

2. Ejecutar el archivo:
   ```bash
   node index.js
   ```


---

[`Atrás: Sesión 03`](../README.md) | [`Siguiente: Ejemplo 02`](../Reto-01)

