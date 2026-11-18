## Mep Programación I - 2026

## Descripción

## Temas Trabajados

- Selectivas / condicionales -> if/else, switch
- Repetitivas -> for, do while, while
- Arreglos -> simples y compuestos, metodos
- D.O.M. 
- P.O.O. -> clases, subclases, obejtos y pilares

## 

- Selectivas / Condicionales: permiten que el programa tome decisiones. Si la condicion es verdadera ejecuta una accion, si no, hace otra

```bash
const esCliente   = true;
const montoPedido = 3000;

if (esCliente) {                         
  if (montoPedido >= 5000) {
    console.log("20% de descuento VIP"); 
  } else if (montoPedido >= 2000) {
    console.log("10% de descuento");     
  } else {
    console.log("Sin descuento por ahora");
  }
} else {
  console.log("Registrate para obtener descuentos");
}
```  

##

- Repetitivas: Un ciclo que ejecuta un bloque repetidamente mientras se cumpla una condición.
```bash
for (let i = 1; i <= 10; i++) {

  console.log(i);
```  

##

- Arreglos: Un arreglo (array) guarda múltiples valores en una sola variable, ordenados por posición.
Cada elemento tiene un índice que empieza en 0. Primer elemento → índice 0, segundo → 1, y así.

```bash
const ejercicio6 = ["manzana", "banana", "naranja", "uva"]
ejercicio6.push("pera")
console.log(ejercicio6)
```

## 

- P.O.O. : La Programación Orientada a Objetos, es un modelo de programación (paradigma), en el que el diseño se organiza a través de clases y objetos.
```bash
class Libro {
    constructor (titulo, autor, anio){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
    }
    resumen () {
        console.log(
            `Titulo: ${this.titulo}, Autor: ${this.autor}`
        )
    }
    

}

const libro1 = new Libro("Guía de como hacer buenos nombres", "Nicolas Guzmán", 2008)
const libro2 = new Libro("Como evitar orenses", "Jeremias Torre", 2009)
const libro3 = new Libro("Jack el orense", "Trujillo ", 1909) 

libro1.resumen()
libro2.resumen()
libro3.resumen()
```

##

- D.O.M. : Representacion estructurada de una pagina web en forma de arbol;
vinculamos HTML (visual), JavaScipt (logica) y CSS (estilos).

- JS:
```bash
let titulo = document.createElement("h1");
titulo.textContent = "¡Hola Mundo!";
titulo.classList.add("titulo");
```
- HTML:
```bash
<h1> ¡Hola Mundo! </h1>
```

- CSS:
```bash
 .titulo 
 {
 color.pink;
 }
```

