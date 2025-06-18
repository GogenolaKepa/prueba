// Ejercicios sobre Strings
document.write("<h3>Strings</h3>");

// a - Convertir en mayúsculas
let texto = "javascript es genial";
console.log(texto.toUpperCase());

// b - Substring de los primeros 5 caracteres
let sub1 = texto.substring(0, 5);
console.log("Primeros 5 caracteres:", sub1);

// c - Últimos 3 caracteres
let sub2 = texto.substring(texto.length - 3);
console.log("Últimos 3 caracteres:", sub2);

// d - Primera letra en mayúscula y el resto en minúscula
let capitalizado = texto.substring(0, 1).toUpperCase() + texto.substring(1).toLowerCase();
console.log("Capitalizado:", capitalizado);

// e - Posición del primer espacio en blanco
let posicionEspacio = texto.indexOf(" ");
console.log("Posición del primer espacio:", posicionEspacio);

// f - Capitalizar ambas palabras
let texto2 = "javascript excelente";
let espacio = texto2.indexOf(" ");
let palabraA = texto2.substring(0, espacio);
let palabraB = texto2.substring(espacio + 1);
let resultadoFinal = palabraA[0].toUpperCase() + palabraA.slice(1).toLowerCase() + " " + palabraB[0].toUpperCase() + palabraB.slice(1).toLowerCase();
console.log("Capitalizado doble:", resultadoFinal);
