# pull-me-api

## Despliegue y arranque

Esta aplicación no requiere de un servidor activo al no ser dependiente de funciones de servidor (ni localStorage en cliente), así que se podrá desplegar simplemente descargando el código fuente (o clonando el repositorio git) y abriendo el fichero `sources/index.html` con cualquier navegador web.

Se puede configurar un servidor para servir el `index.html` desde un dominio o IP específica.

## Visualizador de repositorios en github

> **Atención**: la API pública de GitHub permite 60 peticiones a la hora. Una vez superado ese límite se verá un error 503 y será necesario esperar a que el periodo se reinicie.

### Compatibilidad con navegadores

Esta aplicación es compatible con Internet Explorer, Microsoft Edge, Google Chrome, Mozilla Firefox, Opera y Safari, con sus respectivas versiones móviles.

### Repos

Podremos visualizar los repos creados por el usuario @HackerYou, que es un usuario que tiene repos públicos suficientes para mostrar datos. En la pantalla inicial podremos visualizar un listado de repos de su propiedad.

Al hacer click en un repo, se lanzará un popup con la información detallada del mismo.

### Búsqueda

Se incluye un buscador en la zona superior para filtrar los resultados de los repositorios. Basta con empezar a escribir para que empiece a filtrar el grid de elementos.

### Opciones

En la zona superior encontraremos un menú desde el que podremos desplegar las opciones. 

El menú opciones nos permitirá configurar el grid de resultados para mostrar en 2, 3 ó 4 columnas, así como permitir o desactivar la búsqueda de resultados.

### Errores

Se han controlado los siguientes errores:

- **403 Forbidden**: Se ha superado el límite de peticiones por hora a la API pública de GitHub.
- **404 Not Found**: Se controla que la página solicitada o la API consultada no exista.
- **500 Internal Server Error**: Se controla si la API devuelve un error de servidor.

Todos estos errores mostrarán su pantalla correspondiente y se podrán acceder a través del fragmento de URL `#/error/404/Not Found`.