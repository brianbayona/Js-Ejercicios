/* C. Actividades de apropiación del conocimiento. */
/** 3. Promedio de tres notas
• Solicita tres calificaciones.
• Calcula y muestra el promedio. */
/**
 * Declaramos las variables
 */
let nota1, nota2, nota3, promedio;

/**
 * Datos de ingreso
 */
nota1 = parseFloat(prompt("Ingrese la primera nota:"));
nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

/**
 * Operaciones
 */
promedio = (nota1 + nota2 + nota3) / 3;

/**
 * Datos de salida
 */
console.log("El promedio es: " + promedio);