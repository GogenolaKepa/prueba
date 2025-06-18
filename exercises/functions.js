// Ejercicios de Funciones
document.write("<h3>Funciones</h3>");

// a - Función suma
function suma(a, b) {
  return a + b;
}
let resultado = suma(5, 7);
console.log("Resultado de suma:", resultado);

// b - Validación de tipo
function sumaValidada(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros no es un número");
    return NaN;
  }
  return a + b;
}

// c - Validar entero
function validateInteger(num) {
  return Number.isInteger(num);
}

// d - Validar enteros y redondear si es necesario
function sumaEntera(a, b) {
  if (!validateInteger(a)) {
    alert("El primer número no es entero, se redondea");
    a = Math.round(a);
  }
  if (!validateInteger(b)) {
    alert("El segundo número no es entero, se redondea");
    b = Math.round(b);
  }
  return a + b;
}

// e - Validación separada
function roundIfNotInteger(n) {
  if (!validateInteger(n)) {
    alert("Número redondeado: " + n);
    return Math.round(n);
  }
  return n;
}

function sumaConRound(a, b) {
  a = roundIfNotInteger(a);
  b = roundIfNotInteger(b);
  return a + b;
}

console.log("Suma con validaciones:", sumaConRound(4.8, 6.3));
