// 1. Mostrar todos los nombres con un saludo
const nombres = ["Ana", "Luis", "Carlos", "Marta"];
const listaSaludos = document.getElementById("saludos");

nombres.forEach(nombre => {
    const li = document.createElement("li");
    li.textContent = `¡Hola, ${nombre}!`;
    listaSaludos.appendChild(li);
});

// 2. Imprimir el doble de cada número
const numeros = [5, 10, 15, 20];
const listaDobles = document.getElementById("dobles");

numeros.forEach(numero => {
    const li = document.createElement("li");
    li.textContent = `El doble de ${numero} es ${numero * 2}`;
    listaDobles.appendChild(li);
});

// 3. Mostrar nombre con edad desde array de objetos
const personas = [
    { nombre: "Lucía", edad: 25 },
    { nombre: "Pedro", edad: 30 },
    { nombre: "Sofía", edad: 22 }
];
const listaPersonas = document.getElementById("personas");

personas.forEach(persona => {
    const li = document.createElement("li");
    li.textContent = `${persona.nombre} tiene ${persona.edad} años`;
    listaPersonas.appendChild(li);
});
