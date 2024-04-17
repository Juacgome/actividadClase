// 1. lo promero es verificar que si este conectado con html.
console.log("Holaaaa soy la actividad de hoy")

// 2. Traer los elementos de html, los que tienen identificador.-> los elementos que me traiga debe esatr una variable que debe ser constante, 

const edadInput = document.getElementById("edadInput");
// document me accede a mi html, el getElement me trae un dcto en particular por su id unico, dentro de los parentesis debo poner el mismo id que puse en mi html.
console.log (edadInput); // aqui no se coloca entre comillas por que no es mensaje de texto, es una variable.

// para guardar cambios al repositorio 1. ctrl + ñ (para abrir la terminal). 2. al lado del + en la flechita hacia abajo busco gitbash. 3. se hacen tres puntos despues. 1. se da git add . (todos esos archivos los toma y los añade al repositorio local) 2. git commit -m "aqui se coloca un mensaje" 