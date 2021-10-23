# Taller de Node.js

![Resultado](/images/result.png)

Autor: Eduardo Oviedo Blanco

Para usar este taller efectivamente, clone el código en su ambiente local.
```
git clone https://github.com/edWAR6/Node.js-workshop.git
```
Si desea subir el taller en su repositorio personal.
Cree un repositorio en su perfil, luego:
```
git remote set-url origin https://github.com/<tu usuario>/Node.js-workshop.git
```

> El nombre del repositorio puede cambiar. Siga las instrucciones y guarde sus cambios.

## Propósito

Este taller tiene como propósito llevar al estudiante por los conceptos básicos de un server en Node.js pero sin usar el framework Express.

Estos son los primeros pasos para aprender Node.js.

## Instrucciones

1. Inicie en la terminal ejecutando el siguiente comando y respondiendo a las preguntas.
```bash
npm init
```

> Note el archivo creado y analice las diferentes secciones.

2. Cree un archivo llamado `app.js`.

3. Edite el archivo y agregue la siguiente linea de código para importar la librería encargada del protocolo http.

```javascript
const http = require('http');
```

4. Cree una instancia del server.

```javascript
http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
})
```

5. Una vez creado el server, inmediatamente llame al método `listen` para iniciar el server.

```javascript
http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(3000, function(){
  console.log("server start at port 3000");
});
```

6. Ejecute el server con el siguiente comando e ingrese a la siguiente dirección en el web browser `http://localhost:3000/`.

```bash
node app.js
```

> El web browser debería responder con "Hello World!".

7. Ahora para experimentar con HTML, edite el contenido de la función de la siguiente manera.

```javascript
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World!<h1>');
  res.end();
}).listen(3000, function(){
  console.log("server start at port 3000");
});
```

> Para refrescar los cambios, es necesario detener el server (Ctrl + C) e iniciarlo de nuevo.

> Note como al ingresar a otras rutas (`http://localhost:3000/products`), seguimos obteniendo el mismo resultado.

8. Para corregir esto podemos agregar un enrutamiento básico.

```javascript
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  const url = req.url;
  if(url ==='/'){
    res.write('<h1>Hello World!<h1>');
  }else if(url ==='/products'){
    res.write('<h1>Product list<h1>');
  }else{
    res.write('<h1>404! Page not found<h1>');
  }

  res.end();
}).listen(3000, function(){
  console.log("server start at port 3000");
});
```

> Ahora puede intentar con la ruta `/products` y otras.
