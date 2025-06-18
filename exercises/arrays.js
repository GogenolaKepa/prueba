// Ejercicios de Arrays
document.write("<h3>Arrays</h3>");

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// a - Meses 5 y 11
console.log("Mes 5:", meses[4]);
console.log("Mes 11:", meses[10]);

// b - Ordenar alfabéticamente
console.log("Ordenados:", [...meses].sort());

// c - Agregar al principio y final
meses.unshift("Inicio");
meses.push("Fin");
console.log("Agregado inicio y fin:", meses);

// d - Quitar del principio y final
meses.shift();
meses.pop();
console.log("Quitado inicio y fin:", meses);

// e - Invertir orden
console.log("Invertido:", [...meses].reverse());

// f - Unir con guiones
console.log("Unidos con guiones:", meses.join("-"));

// g - Slice de Mayo a Noviembre
let mesesMedios = meses.slice(4, 11);
console.log("Mayo a Noviembre:", mesesMedios);
