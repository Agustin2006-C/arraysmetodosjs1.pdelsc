// 1. Sumar todos los elementos de un array
const numeros = [1, 2, 3, 4, 5];
const sumaTotal = numeros.reduce((acc, num) => acc + num, 0);
document.getElementById("sumaTotal").textContent = `La suma total es: ${sumaTotal}`;

// 2. Multiplicar todos los elementos de un array de enteros
const enteros = [1, 2, 3, 4, 5];
const multiplicacionTotal = enteros.reduce((acc, num) => acc * num, 1);
document.getElementById("multiplicacionTotal").textContent = `La multiplicación total es: ${multiplicacionTotal}`;

// 3. Obtener el total de precios de un array de objetos {precio}
const precios = [
    { precio: 100 },
    { precio: 150 },
    { precio: 200 },
    { precio: 50 }
];
const totalPrecios = precios.reduce((acc, obj) => acc + obj.precio, 0);
document.getElementById("totalPrecios").textContent = `El total de precios es: ${totalPrecios}€`;
