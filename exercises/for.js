// Ejercicios sobre For
document.write("<h3>For</h3>");

// a - Mostrar 5 palabras con alert
let palabras = ["gato", "perro", "ratón", "conejo", "pájaro"];
for (let i = 0; i < palabras.length; i++) {
  alert(palabras[i]);
}

// b - Capitalizar la primera letra
for (let i = 0; i < palabras.length; i++) {
  let capitalizada = palabras[i][0].toUpperCase() + palabras[i].slice(1);
  alert(capitalizada);
}

// c - Unir palabras en una sola string
let sentence = "";
for (let i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}
alert(sentence.trim());

// d - Llenar array con números 0 a 9
let numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(i);
}
console.log("Array final:", numeros);
