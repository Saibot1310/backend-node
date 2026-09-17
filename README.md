# Servidor del Sistema de Gestión de Ventas - Fase Node.js

## Objetivo
Desarrollar un servidor Node.js para el sistema de gestión de ventas, implementando las funcionalidades necesarias para la gestión de productos, clientes y ventas.

## Stack Tecnológico
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.

Ejecución del servidor:
1. Clonar el repositorio.
2. Instalar las dependencias con `npm install`.
3. Iniciar el servidor con `npm start`.
4. Acceder a la API a través de `http://localhost:3000`.

## Funcionalidades actuales


## Módulo 1: Introducción a Node.js
### Temas
- Que es Node.js
- Runtime
- JavaScript como lenguaje
- Runtime de JavaScript
- Navegador como entorno de ejecución
- Node.js como entorno de ejecución
- Diferencias entre Node.js y el navegador
- Que aporta Node.js
- Que NO es Node.js
- Node.js como plataforma de ejecución
- Casos de uso
- Limitaciones
- Aplicaciones típicas

## Módulo 2: Arquitectura interna de Node.js
### Temas
- Motor V8
- C++ dentro de Node.js
- APIs de Node.js
- libuv
- Sistema operativo
- Relación entre JavaScript y APIs nativas
- Abstracción de operaciones de bajo nivel
- I/O
- Operaciones CPU-bound
- Operaciones I/O-bound

## Módulo 3: Modelo de ejecución y Event Loop
### Temas
- Ejecución sincrónica
- Ejecución asincrónica
- Call stack, Event Loop
- Task queue, Microtask queue
- Promesas
- process.nextTick()
- Timers
- I/O callbacks
- Event loop phases
- Orden de ejecución
- Bloqueo del Event Loop
- Operaciones costosas
- CPU-bound vs I/O-bound
- Consecuencias para el rendimiento

## Módulo 4: Instalacion y entorno de desarrollo
### Temas
- Instalación de Node.js
- Versiones de Node.js
- LTS
- Versiones Current
- Verificación de la instalación
- node
- REPL
- ejecución de archivos
- argumentos básicos
- npm
- estructura básica de un proyecto

## Módulo 5: Módulos en Node.js
### Temas
- Módulo
- import, export
- ES Modules
- CommonJS
- require, module.exports
- Resolución de módulos
- módulos locales, externos y nativos
- encapsulamiento

## Módulo 6: package.json y npm
### Temas
- package.json
- Proyecto Node.js
- npm
- paquetes
- dependencias
- devDependencies
- versiones
- semver
- package-lock.json
- instalación, actualización y eliminación de paquetes
- scripts
- npm run
- npm install
- npm uninstall
- npm update

## Módulo 7: Sistema de archivos
### Temas
- fs
- archivos
- directorios
- lectura y escritura
- creación
- eliminación
- renombrado
- operaciones sincrónicas y asincrónicas
- callbacks
- Promises API
- fs/promises