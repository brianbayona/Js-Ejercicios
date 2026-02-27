
//punto 5//
// 1. INPUT: Pedimos los grados Celsius
let celsius = prompt("Ingresa los grados Celsius:");

// 2. PROCESO: Aplicamos la fórmula F = (C * 9/5) + 32
// Usamos paréntesis para que la multiplicación y división se hagan primero
let fahrenheit = (celsius * 9 / 5) + 32;

// 3. SALIDA: Lo mostramos en la consola
console.log(celsius + "°C equivalen a " + fahrenheit + "°F");