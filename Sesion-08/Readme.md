# Sesión 8 - Arquitectura de Microservicios y Documentación

🎯 **Objetivo:**

En esta sesión, los estudiantes aprenderán los conceptos y técnicas fundamentales para diseñar y desarrollar una arquitectura basada en **microservicios** con Node.js y MongoDB. Además, se enfocarán en cómo documentar APIs distribuidas de forma efectiva y explorar métodos de comunicación entre microservicios.

---

1. **Monolito vs. Microservicios**:
   - **Arquitectura monolítica**: Todas las funcionalidades de la aplicación están en un solo código base. Problemas de escalabilidad, mantenimiento y flexibilidad.
   - **Arquitectura de microservicios**: Separación de funcionalidades en servicios independientes que pueden escalar y gestionarse de forma aislada.
   
2. **Ventajas de los microservicios**:
   - Despliegue independiente de servicios.
   - Mayor escalabilidad horizontal.
   - Separación clara de responsabilidades (cada servicio tiene una funcionalidad única).

3. **Componentes clave en un ecosistema de microservicios**:
   - **API Gateway**: Punto central para la gestión de solicitudes entrantes y enrutamiento a los microservicios correspondientes.
   - **Base de datos distribuida**: Diferentes servicios pueden usar bases de datos especializadas (ej: un servicio con MongoDB y otro con PostgreSQL).
   - **Mensajería y comunicación**: Herramientas como RabbitMQ, Kafka, o gRPC para la comunicación entre servicios.

4. **Ejemplos reales de uso de microservicios**:
   - **Netflix, Uber, Amazon**: Ejemplos de empresas que han adoptado la arquitectura de microservicios para escalar sus operaciones.

### Diseño de Microservicios con Node.js y MongoDB

- [`Ejemplo 1`](Ejemplo-01/)
- [`Reto 01: Deploy`](Reto-01/)

###  Comunicación entre Microservicios

- [`Ejemplo 2`](Ejemplo-02/)


###   Documentación de una API

- [`Ejemplo 3`](Ejemplo-03/)

---

## Postwork

[`Postwork`](postwork/Readme.md)
