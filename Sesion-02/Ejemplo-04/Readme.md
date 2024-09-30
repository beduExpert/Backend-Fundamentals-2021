[`Backend Fundamentals`](../../README.md) > [`Sesión 02: Introducción a Bases de datos`](../README.md/) > `Ejemplo 4`

# Ejemplo 4: Agregaciones

**Objetivo:**

- Realizar operaciones complejas utilizando el framework de agregación.

## Desarrollo

- **Framework de agregación**: MongoDB permite realizar consultas avanzadas que involucran múltiples etapas, como filtrado (`$match`), agrupación (`$group`), proyección (`$project`), y ordenamiento (`$sort`).

### **Ejemplo en MongoDB Compass**:

1. **Contar productos por rango de precio**:
   - Agrega una pipeline de agregación en MongoDB Compass para contar cuántos productos hay en diferentes rangos de precio:
     ```json
     [
       { "$match": { "precio": { "$gt": 300 } } },
       { "$group": { "_id": "$precio", "total": { "$sum": 1 } } },
       { "$sort": { "_id": 1 } }
     ]
     ```

2. **Promediar el precio de los productos**:
   - Pipeline de agregación para calcular el promedio del precio de todos los productos:
     ```json
     [
       { "$group": { "_id": null, "precioPromedio": { "$avg": "$precio" } } }
     ]
     ```


[`Atrás: Reto-02`](../Reto-02) | [`Siguiente: Reto-03`](../Reto-03)
