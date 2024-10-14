[`Backend Fundamentals`](../../README.md) > [`Sesión 08`](../Readme.md) > `Ejemplo 2`

# Ejemplo 2: Comunicación entre Microservicios

## Objetivo

Explorar las formas de comunicación entre microservicios, utilizando diferentes protocolos y patrones de comunicación, y entender cómo compartir datos entre servicios independientes.

## Desarrollo

1. **Patrones de comunicación**:
   - **Comunicación síncrona**: APIs RESTful entre microservicios.
   - **Comunicación asíncrona**: Uso de sistemas de mensajería (ej. RabbitMQ, Kafka).

2. **Comunicación con APIs REST**:
   - Un microservicio puede consumir el API de otro para solicitar datos.
   - Implementar una llamada HTTP de un servicio a otro.
   
   **Ejemplo** (Servicio de Productos llamando al Servicio de Usuarios):
   ```javascript
   const axios = require('axios');

   // Llamar a la API del servicio de usuarios
   axios.get('http://localhost:3001/user/123')
     .then(response => {
       console.log('Datos del usuario:', response.data);
     })
     .catch(error => {
       console.error('Error al obtener datos del usuario', error);
     });
   ```

3. **Mensajería entre microservicios**:
   - Implementar la comunicación asíncrona mediante un bus de mensajería.
   - **RabbitMQ/Kafka**: Introducción a la mensajería asíncrona para enviar eventos entre servicios, como actualizaciones de inventario o pedidos.


[`Atrás`](../Reto-01) | [`Siguiente`](../Ejemplo-03/)
