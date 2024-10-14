[`Backend Fundamentals`](../../README.md) > [`Sesión 06`](../README.md) > `Reto 3`

# Reto 3

1. Define un nuevo esquema `Usuario` con los siguientes campos:
   - **nombre**: Debe ser obligatorio y no puede contener números.
   - **email**: Debe ser obligatorio y un formato de correo electrónico válido.
   - **edad**: Debe ser un número mayor a 18.
   - **contraseña**: Debe ser obligatorio y tener al menos 6 caracteres.
   
   Implementa validaciones personalizadas para asegurarte de que se cumplan estos requisitos.

2. Crea un esquema `Pedido` que tenga los siguientes campos:
   - **productos**: Una lista de productos (array), cada uno con un nombre (string), cantidad (número), y precio (número).
   - **fechaEntrega**: Debe ser una fecha futura.
   - **usuarioId**: Un ID de usuario que esté relacionado con el pedido.

3. Implementa validaciones para asegurarte de que:
   - Los productos tengan un precio mayor que 0.
   - La fecha de entrega sea posterior a la fecha actual.

[`Atrás: Ejemplo 01`](../Ejemplo-03) | [`Siguiente: Ejemplo 02`](../Ejemplo-04)
