// Array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array de películas
const peliculas = ["Inception", "Interstellar", "The Dark Knight", "Dunkirk", "Tenet"];

// Obtener los primeros 3 elementos del array de números
const primerosTres = numeros.slice(0, 3); // Slice toma los elementos desde el índice 0 hasta el 3 (sin incluir el 3)
document.getElementById("numeroArray").innerText = `Primeros 3 números: ${primerosTres}`;

// Obtener una copia parcial del array de películas desde la posición 2 hasta la 4
const copiaPeliculas = peliculas.slice(2, 5); // Desde el índice 2 hasta el 5 (sin incluir el 5)
document.getElementById("peliculasArray").innerText = `Películas del índice 2 al 4: ${copiaPeliculas.join(", ")}`;

// Obtener los últimos 3 elementos del array de números
const ultimosTres = numeros.slice(-3); // Slice con índice negativo para obtener los últimos 3
document.getElementById("ultimosElementosArray").innerText = `Últimos 3 números: ${ultimosTres}`;
