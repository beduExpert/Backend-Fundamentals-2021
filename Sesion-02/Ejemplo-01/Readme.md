[`Backend Fundamentals`](../../README.md) > [`Sesión 02: Introducción a Bases de datos`](../README.md/) > `Ejemplo 1`

# Ejemplo 1: Instalación y Configuración de MongoDB

**Objetivos:**

Aprender a instalar MongoDB localmente, configurar MongoDB Compass, y crear un cluster en MongoDB Atlas para trabajar con bases de datos en la nube.

**Requerimientos**

Un navegador web

# Desarrollo

MongoDB Atlas es el servicio en la nube de MongoDB que te permite crear y gestionar clusters sin necesidad de instalar MongoDB en tu máquina local.

#### **Paso 1: Crear una cuenta en MongoDB Atlas**
1. Visitar [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Hacer clic en "Sign Up" y crear una cuenta.
   - Puedes usar tu cuenta de Google, GitHub o registrarte con tu correo electrónico.
   
3. Una vez registrado, accede a la plataforma.

#### **Paso 2: Crear un Cluster en MongoDB Atlas**

1. **Crear un Cluster**:
   - En el panel de control de MongoDB Atlas, hacer clic en el botón **"Build a Cluster"**.
   - Seleccionar el proveedor de nube que prefieras (AWS, GCP o Azure).
   - Escoger la región más cercana o adecuada.
   - En la opción de **Cluster Tier**, seleccionar la opción gratuita (M0 Free Tier), ideal para aprendizaje.
   - Hacer clic en **"Create Cluster"**.

2. **Configurar la Base de Datos y la Red**:
   - **Crear un usuario**: Atlas pedirá crear un usuario para la base de datos. Elige un nombre de usuario y contraseña. Es importante que guardes esta información para conectarte más tarde.
   - **Permitir acceso desde cualquier IP**: Configura la opción de red permitiendo el acceso desde cualquier IP (`0.0.0.0/0`) o especifica la IP de tu máquina si quieres más seguridad.
   - Espera unos minutos hasta que el cluster esté listo.

#### **Paso 3: Conectar MongoDB Atlas a MongoDB Compass**

1. **Obtener la URI de conexión**:
   - Cuando tu cluster esté listo, hacer clic en el botón **"Connect"** en el panel de control de Atlas.
   - Seleccionar la opción **"Connect using MongoDB Compass"**.
   - Copiar la URI de conexión proporcionada (se verá algo como esto: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase`).
   
2. **Conectar desde MongoDB Compass**:
   - Abrir MongoDB Compass.
   - Pegar la URI de conexión que has copiado.
   - Sustituir `<username>` y `<password>` por los valores del usuario y contraseña que creaste.
   - Hacer clic en **"Connect"** para conectarte al cluster en MongoDB Atlas.



[`Atrás: Sesión 02`](../README.md) | [`Siguiente: Reto 01`](../Reto-01)
