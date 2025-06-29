// 1. Crear un nuevo array con cada número multiplicado por 3
const numeros = [1, 2, 3, 4, 5];
const listaNumeros = document.getElementById("numerosMultiplicados");

const numerosMultiplicados = numeros.map(numero => numero * 3);
numerosMultiplicados.forEach(num => {
    const li = document.createElement("li");
    li.textContent = `Número multiplicado por 3: ${num}`;
    listaNumeros.appendChild(li);
});

// 2. Convertir un array de nombres en mayúsculas
const nombres = ["Ana", "Luis", "Carlos", "Marta"];
const listaNombres = document.getElementById("nombresMayusculas");

const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
nombresMayusculas.forEach(nombre => {
    const li = document.createElement("li");
    li.textContent = `Nombre en mayúsculas: ${nombre}`;
    listaNombres.appendChild(li);
});

// 3. A un array de precios, agregarle el 21% de IVA y crear un nuevo array
const precios = [100, 150, 200, 50];
const listaPrecios = document.getElementById("preciosConIVA");

const preciosConIVA = precios.map(precio => precio * 1.21); // 21% de IVA
preciosConIVA.forEach(precio => {
    const li = document.createElement("li");
    li.textContent = `Precio con IVA: ${precio.toFixed(2)}€`;
    listaPrecios.appendChild(li);
});
