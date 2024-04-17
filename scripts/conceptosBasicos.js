// ASI SE HACEN COMENTARIOS EN JS
// Siempre se cierra con );

console.log("Hola soy JS");
console.log("estoy aprendiendo");

// node JS -> Utilizamos para poder implementar js en nuestro Backend -> son las operaciones basicas que nos permiten el funcionamiento de nuestro sitio web.

// en la carpeta scripts van todos los archivos de js pero destnados a darle dinamismo al sitio web, no se relacionan con la funcionalidad del sitio a nivel del Backend.



//INICIAR CONCEPTOS BASICOS EN JS
// 1. Tipos de Variables
// 2. Manejo del DOM
// 3. cONDICIONALES
// 4. Ciclos

// 1. LAS VARIABLES EN JS (Las variables son       contenedores de Información)

// Hay tres tipos de variables en JS:

// VAR -> Tipo de Variable que ya no se usa: no la vamos a usar (Cambia en el tiempo)(no se usa por que genera error)

// LET: Esta variable es una variable que puede cambiar en el tiempo, 

// CONST : Variable que no puede cambiar en el tiempo



//TIPOS DE DATOS o INFORMACION QUE PODEMOS ALMACENAR

// 1. Numericos (se usan con LET)

let numero =7;

// CADENA DE CARACTERES (Texto = String, asi se conoce en programacion al texto)
// el texto siempre debe estar dentro de ""

let texto = "Hola Mundo"

// BOOLEANOS (es un dato que puede ser verdadero o falso)
let esVerdadero = true; 
let esFalso = False;

// ARREGLOS o ARRAYS ( los arreglos permiten almacenar varios datos al mismo tiempo en una misma variable)
let arregloNombres = ["luisa", "Emmanuel", "Paula"];
let arregloNumeros = [1, 3, 5, 8, 20]; 

// Objetos -> son una representación de elementos de la vida real en nuestro código

// puede tener atributos, -> caracteristicas de ese objeto.
// pude tener metodos -> acciones que pueden hacer el objeto

// [] los corchetes son para declarar acciones
// {} las llaves son para declarar objetos
// () parentesis -> en JS se usan para invocar acciones, es decir, ejecutar acciones, se conoce como Invocar funciones. 


const celular = {
color: "blanco";
modelo: "Galaxy";
tamaño: "350 x 800 " ;
ancho: 350
enviarMensajes: function(){
// entre los corchetes al lado de parentesis, establezco la accion a realizar.
console.log("mensaje enviado");
}
}
 








