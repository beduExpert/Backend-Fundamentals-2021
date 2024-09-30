[`Backend Fundamentals`](../../README.md) > [`Sesión 02: Introducción a Bases de datos`](../README.md/) > `Ejemplo 2`

# Ejemplo 2: Introducción a MongoDB y MongoDB Compass

**Objetivo**

- Familiarizarse con los conceptos básicos de MongoDB y MongoDB Compass, y aprender a realizar operaciones CRUD básicas.

---

## Desarrollo

- **¿Qué es MongoDB?**
  - Introducción a las bases de datos NoSQL: MongoDB es una base de datos NoSQL orientada a documentos que almacena datos en formato BSON (Binary JSON), a diferencia de las bases de datos SQL que utilizan tablas y registros.
  - **Diferencias entre MongoDB y bases de datos SQL**: MongoDB es más flexible en términos de esquema; no necesitas definir la estructura de los datos por adelantado.
  
- **Instalación de MongoDB y MongoDB Compass**:
  - Explicación rápida de cómo instalar MongoDB y MongoDB Compass.
  - Una vez instalado, abrir MongoDB Compass.

- **Interfaz de MongoDB Compass**:
  - **Conexión a MongoDB**:
    - En MongoDB Compass, hacer clic en "Connect" e ingresar la URI de conexión, que usualmente será `mongodb://localhost:27017` en caso de tener una instalación local.
    - Hacer clic en "Connect" para establecer la conexión.
  - **Navegación por la interfaz**:
    - Explicación de las secciones principales de MongoDB Compass: Bases de datos, Colecciones, Índices, y Agregaciones.

### **CRUD básico en MongoDB Compass**:

#### **Crear (Insertar) documentos**:
1. Dentro de MongoDB Compass, crear una nueva base de datos llamada `tienda` y una colección llamada `productos`.
   - Hacer clic en "Create Database" y darle un nombre a la base de datos y a la primera colección (productos).
   
2. Insertar documentos en la colección `productos`.
   - Dentro de la colección `productos`, hacer clic en "Insert Document" y agregar los siguientes documentos:
     ```json
     { "nombre": "Laptop", "precio": 1000, "stock": 10 }
     ```
     ```json
     { "nombre": "Smartphone", "precio": 600, "stock": 20 }
     ```
     ```json
     { "nombre": "Tablet", "precio": 400, "stock": 15 }
     ```

#### **Leer (Consultar) documentos**:
1. Consultar todos los documentos de la colección `productos`:
   - Hacer clic en "Find" y dejar la consulta en blanco para ver todos los documentos.
   
2. Realizar consultas con filtros:
   - Consulta para obtener todos los productos cuyo precio es mayor a 500:
     ```json
     { "precio": { "$gt": 500 } }
     ```
     Ingresar esto en el campo de consulta dentro de MongoDB Compass.

#### **Actualizar documentos**:
1. Actualizar el stock de la `Laptop`:
   - Encontrar el documento de la `Laptop` y hacer clic en "Update".
   - Cambiar el valor del campo `stock` a 8:
     ```json
     { "$set": { "stock": 8 } }
     ```
   
#### **Eliminar documentos**:
1. Eliminar un documento:
   - Seleccionar el `Smartphone` y hacer clic en "Delete".

-------

[`Atrás: Reto 01`](../Reto-01) | [`Siguiente: Ejemplo-03`](../Ejemplo-03)
