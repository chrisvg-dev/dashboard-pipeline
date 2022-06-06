# Dashboard

Este proyecto está realizado con el objetivo de consumir el servicio de data-pipeline. El cual debe cubrir con ciertos requisitos para ser ejecutado.

## Requisitos
1. Tener instalado NodeJS
2. Tener instalado Angular CLI
3. Editor de código para modificar la URL del servicio

## Estructura de esta aplicación
1. Ventana data permite al usuario recolectar la información siempre y cuando se tenga conexión con el backend que proporciona el servicio.
2. Ventana "En acción" de manejo de datos, permite hacer las operaciones solicitadas en la prueba técnica.

## Cómo hacer funcionar la aplicación?
1. Descargar el proyecto
2. Abrirlo en un editor de código
3. Modificar el archivo src/environments/environment.ts y en el apartado de URL agregar agregar la URL devuelva por el proyecto data-pipeline al ejecutar el comando **minikube service springboot-datapipeline-svc**.
4. Abrirlo desde una terminal
5. Escribir el comando npm install.
6. Lanzar el proyecto con el comando ng serve
