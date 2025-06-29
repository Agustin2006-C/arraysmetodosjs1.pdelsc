// 1. Invertir un array de letras
const letras = ['a', 'b', 'c', 'd', 'e'];
const listaLetras = document.getElementById("letrasInvertidas");

const letrasInvertidas = letras.reverse(); // Invertir el array de letras
letrasInvertidas.forEach(letra => {
    const li = document.createElement("li");
    li.textContent = `Letra invertida: ${letra}`;
    listaLetras.appendChild(li);
});

// 2. Invertir el orden de un array de números
const numeros = [10, 20, 30, 40, 50];
const listaNumeros = document.getElementById("numerosInvertidos");

const numerosInvertidos = numeros.reverse(); // Invertir el array de números
numerosInvertidos.forEach(num => {
    const li = document.createElement("li");
    li.textContent = `Número invertido: ${num}`;
    listaNumeros.appendChild(li);
});

// 3. Dado un string, convertirlo en array y revertir el texto
const texto = "¡Hola Mundo!";
const listaTexto = document.getElementById("textoInvertido");

const textoInvertido = texto.split('').reverse().join(''); // Convertir en array, invertir y unir
listaTexto.textContent = `Texto invertido: ${textoInvertido}`;
