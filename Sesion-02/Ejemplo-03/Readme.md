[`Backend Fundamentals`](../../README.md) > [`Sesión 02: Introducción a Bases de datos`](../README.md/) > `Ejemplo 3`

# Ejemplo 3: Consultas Avanzadas en MongoDB Compass

**Objetivo:**

- Aprender a realizar consultas más avanzadas usando filtros, operadores, y proyección de campos en MongoDB Compass.


## Desarrollo

- **Operadores de consulta**:
  - `$eq` (igual), `$gt` (mayor que), `$lt` (menor que), `$in` (dentro de una lista), `$and`, `$or` para combinar condiciones.

- **Consultas con expresiones regulares**:
  - Uso de patrones para buscar coincidencias en cadenas de texto.

- **Proyección de campos**:
  - Especificar qué campos mostrar en el resultado de una consulta.

### **Ejemplo en MongoDB Compass**:

1. **Consulta avanzada con `$and`**:
   - Encuentra todos los productos cuyo `precio` sea mayor a 500 y cuyo `stock` sea mayor a 5:
     ```json
     { "$and": [ { "precio": { "$gt": 500 } }, { "stock": { "$gt": 5 } } ] }
     ```

2. **Consulta usando expresiones regulares**:
   - Encuentra productos cuyo `nombre` empiece con la letra "S":
     ```json
     { "nombre": { "$regex": "^S" } }
     ```

3. **Proyección de campos**:
   - Mostrar solo el nombre y precio de los productos:
     ```json
     { }, { "nombre": 1, "precio": 1 }
     ```

[`Atrás: Ejemplo-02`](../Ejemplo-02) | [`Siguiente: Reto-02`](../Reto-02)
