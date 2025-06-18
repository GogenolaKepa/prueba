// Ejercicios sobre If-Else
document.write("<h3>If Else</h3>");

// a - Funcion Math.random()
let random = Math.random();
if (random >= 0.5) {
  alert("Greater than 0.5");
} else {
  alert("Lower than 0.5");
}

// b - Clasificación por edad
let age = 42;
if (age < 2) {
  alert("Bebe");
} else if (age <= 12) {
  alert("Niño");
} else if (age <= 19) {
  alert("Adolescente");
} else if (age <= 30) {
  alert("Joven");
} else if (age <= 60) {
  alert("Adulto");
} else if (age <= 75) {
  alert("Adulto mayor");
} else {
  alert("Anciano");
}
