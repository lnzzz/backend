# Backend nodeJS Productos Garbarino

Esta es la parte de backend del ejercicio de frontend de la entrevista de trabajo en Garbarino.

# General

Se utilizó NodeJS con el framework Express para armar el backend rest que luego será consumido por la aplicación frontend. Los productos fueron persistidos en una base de datos MongoDB llamada "garbarino_products".


# Estructura

La aplicación está estructurada en las siguientes capas:
 ```
  /controllers -> reciben un request y devuelven una respuesta.
  /services -> parsean el request, lo validan y ejecutan los metodos de los models para que traigan los datos de la base.
  /models -> buscan los datos en la base y devuelven un resultado.
  /validators -> valida que el input (en el create) este correctamente formateado a partir de un schema. 
  /utils -> contiene un mongoUtil que se encarga de reciclar la conexion a la base y no abrir una nueva por cada operacion
  ```
  
  Tanto los metodos de los services, models y validators le devuelven una promesa a un controller que se encarga de otorgar el status de la respuesta.
 
# Instalación

 ```
 1. git clone https://github.com/lnzzz/backend.git
 2. ejecutar 'npm install' dentro del directorio en el cual fue clonado el repo.
 3. importar los .json que se encuentran en la carpeta /mongo a una base llamada 'garbarino_products'.
 4. setear la url del mongo y dbName (en caso de querer usar otro nombre) de la base en el config.js
 5. correr la aplicación mediante 'node app.js'
 ```
 
 Si todo salió OK, el servicio debería responder lo siguiente:
 ```
Mongo connection initialized.
App is running on 3001
 ```
 
 En caso de error el servicio devolverá lo siguiente:
  ```
  ERROR: cannot connect to database.
  ```
  
  
  # Rutas
  
  ```
  GET a /list-products -> devuelve un listado de productos.
  GET a /list-products/:productname -> devuelve un producto por nombre.
  POST a /product -> crea un producto nuevo y lo devuelve.
  ```
