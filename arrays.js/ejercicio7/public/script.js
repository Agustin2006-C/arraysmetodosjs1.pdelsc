// Array de palabras
const animales = ["gato", "perro", "conejo", "pájaro"];

// Array de números
const numeros = [10, 20, 30, 40, 50, 60, 70];

// Array de ciudades
const ciudades = ["Barcelona", "Madrid", "Valencia", "Sevilla", "Bilbao"];

// Buscar la posición de la palabra "perro" en el array de animales
const indexPerro = animales.indexOf("perro");
document.getElementById("perroIndex").innerText = indexPerro !== -1 ? `La palabra "perro" está en la posición: ${indexPerro}` : '"perro" no se encuentra en el array.';

// Verificar si el número 50 está en el array de números y en qué posición
const index50 = numeros.indexOf(50);
document.getElementById("numero50Index").innerText = index50 !== -1 ? `El número 50 está en la posición: ${index50}` : 'El número 50 no está en el array.';

// Verificar si "Madrid" está en el array de ciudades y mostrar su índice
const indexMadrid = ciudades.indexOf("Madrid");
document.getElementById("madridIndex").innerText = indexMadrid !== -1 ? `La ciudad "Madrid" está en la posición: ${indexMadrid}` : '"Madrid" no se encuentra en el array.';
