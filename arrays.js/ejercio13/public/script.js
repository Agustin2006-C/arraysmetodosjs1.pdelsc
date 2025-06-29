// 1. Ordenar un array de números de menor a mayor
const numeros = [12, 3, 5, 9, 20, 8];
const listaNumeros = document.getElementById("numerosOrdenados");

const numerosOrdenados = numeros.sort((a, b) => a - b); // Orden ascendente
numerosOrdenados.forEach(num => {
    const li = document.createElement("li");
    li.textContent = `Número ordenado: ${num}`;
    listaNumeros.appendChild(li);
});

// 2. Ordenar un array de palabras alfabéticamente
const palabras = ["manzana", "pera", "banana", "kiwi", "uva"];
const listaPalabras = document.getElementById("palabrasOrdenadas");

const palabrasOrdenadas = palabras.sort();
palabrasOrdenadas.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = `Palabra ordenada: ${palabra}`;
    listaPalabras.appendChild(li);
});

// 3. Ordenar un array de objetos por edad
const usuarios = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 22 },
    { nombre: "Lucía", edad: 28 }
];
const listaUsuarios = document.getElementById("usuariosOrdenados");

const usuariosOrdenados = usuarios.sort((a, b) => a.edad - b.edad); // Orden por edad
usuariosOrdenados.forEach(usuario => {
    const li = document.createElement("li");
    li.textContent = `${usuario.nombre} tiene ${usuario.edad} años`;
    listaUsuarios.appendChild(li);
});
