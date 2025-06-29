// 1. Filtrar los números mayores a 10
const numeros = [5, 12, 7, 18, 3, 20, 9];
const listaNumeros = document.getElementById("numerosFiltrados");

const numerosFiltrados = numeros.filter(numero => numero > 10);
numerosFiltrados.forEach(num => {
    const li = document.createElement("li");
    li.textContent = `Número mayor a 10: ${num}`;
    listaNumeros.appendChild(li);
});

// 2. Filtrar las palabras que tengan más de 5 letras
const palabras = ["perro", "elefante", "gato", "león", "jirafa"];
const listaPalabras = document.getElementById("palabrasFiltradas");

const palabrasFiltradas = palabras.filter(palabra => palabra.length > 5);
palabrasFiltradas.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = `Palabra con más de 5 letras: ${palabra}`;
    listaPalabras.appendChild(li);
});

// 3. Filtrar los usuarios activos
const usuarios = [
    { nombre: "Juan", activo: true },
    { nombre: "María", activo: false },
    { nombre: "Pedro", activo: true },
    { nombre: "Lucía", activo: false }
];
const listaUsuarios = document.getElementById("usuariosActivos");

const usuariosActivos = usuarios.filter(usuario => usuario.activo);
usuariosActivos.forEach(usuario => {
    const li = document.createElement("li");
    li.textContent = `Usuario activo: ${usuario.nombre}`;
    listaUsuarios.appendChild(li);
});
