let contenedor = document.getElementById("contenedor")

// creamos una etiqueta desde el JS
let titulo = document.createElement("h1");

// le damos un contenido al texto
titulo.textContent = "Actividad 1 - DOM"

// permite agregar al titulo dentro del contenedor 
contenedor.appendChild(titulo)

let subtitulo = document.createElement("h2")
subtitulo.textContent = "Programación I"
contenedor.appendChild(subtitulo)

// TABLA
let tabla = document.createElement("tabla")

// ENCABEZADO
let header = document.createElement("thead")

// FILA ENCONTRADA 
let filaEncabezado = document.createElement("tr")

// COLUMNAS 
let columna = document.createElement("th")

let th1 = document.createElement("th") // columna 1
th1.textContent = "Titulo";

let th2 = document.createElement("th") // columna 2
th2.textContent = "Año";

filaEncabezado.appendChild(th1); // agregamos columna 1
filaEncabezado.appendChild(th2); // agregamos columna 2
header.appendChild(filaEncabezado);
tabla.appendChild(header);

// CUERPO
let body = document.createElement("tbody");

// 1er fila del cuerpo 
let filaBody1 = document.createElement("tr");

let td1 = document.createElement("td")
td1.textContent = "Harry Potter";


let td2 = document.createElement("td")
td2.textContent = "2001"

filaBody1.appendChild(td1)
filaBody1.appendChild(td2)
body.appendChild(filaBody1)

// 2da fila del cuerpo de tabla
let filaBody2 = document.createElement("tr");

let td3 = document.createElement("td")
td3.textContent = "Robots";

let td4 = document.createElement("td");
td4.textContent = "2005"

filaBody2.appendChild(td3)
filaBody2.appendChild(td4)
body.appendChild(filaBody2)

tabla.appendChild(body)

contenedor.appendChild(tabla)

td1.style.color="blue"
td2.style.color="green"
td3.style.color="brown"
td4.style.color="red"
titulo.style.color="purple"
subtitulo.style.color="pink"

