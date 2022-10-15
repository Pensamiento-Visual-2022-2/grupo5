/*
var nombre = "Victor Robles";
var altura = 189;

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos </h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3>
`;

if(altura >= 190){
    datos.innerHTML += `<h1>Eres una persona ALTA</h1>`;
}else{
    datos.innerHTML += `<h1>Eres una persona BAJITA</h1>`;
}

// primero la variable que lo inicia; condicion; iteración o incrementador
for(var i = 2000; i<=2020; i ++){
    //bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año:"+i;
}


function MuestraMiNombre(nombre, altura){
    var datos = document.getElementById("datos");
    datos.innerHTML = `
        <h1>Soy la caja de datos </h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura}</h3>
    `;

    return datos
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Victos", 13);
}
//FUNCIONES DEBEN SER LLAMADAS

imprimir()

//podemos crear variables con multiples variables

var nombres = ["Victor", "Antonio", "Joaquin"]
datos.innerHTML = nombres[1]

*/

var epoca_pinguinos = [
    {
        pinguino:"Magallanes",
        epoca: [1,2,3,4],
    },
    {
        pinguino:"Humboldt",
        epoca: [1,2,3,4],
    },
    {
        pinguino:"Rey",
        epoca: [1,2,3,4],
    },
    {
        pinguino:"Emperador",
        epoca: [2],
    },
    {
        pinguino:"Macaroni",
        epoca: [1,4],
    },
    {
        pinguino:"Penacho Amarillo",
        epoca: [1,4],
    },
    {
        pinguino:"Papua",
        epoca: [1,4],
    },
    {
        pinguino:"Adelia",
        epoca: [1,2],
    },
    {
        pinguino:"Barbijo",
        epoca: [1,2,3],
    },
];


var regiones_nombre = ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Región Metropolitana", "Libertador General Bernardo OHiggins", "Maule", "Ñuble", "Bio-Bio", "Araucanía", "Los Ríos", "Los Lagos", "Áysen", "Magallanes y de la Antártica Chilena"];
var regiones_json = [
    {
        nombre: "Región de Arica y Parinacota",
        capital: "Arica",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Cuevas de Anzota", "Península del Alacrán"],
        link: ["https://g.page/anzotaarica?share", "https://goo.gl/maps/Q5i8AUqn4A47tWUQ9"]
    },
    {
        nombre: "Región de Tarapacá",
        capital: "Iquique",
        pinguino: ["Humboldt"],
        centro: ["Punta Pichagua"],
        link: ["https://g.page/pisagua-sumergido?share"]
    },
    {
        nombre: "Región de Antofagasta",
        capital: "Antofagasta",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Tocopilla", "Península de Mejillones", "Taltal"],
        link: ["https://goo.gl/maps/6UFVvAz2LfcL2Sw59", "https://goo.gl/maps/ngt4YgVrxzTsJaM87", "https://goo.gl/maps/yMZ8itcrScc2bPneA"]
    },
    {
        nombre: "Región de Atacama",
        capital: "Copiapó",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Isla Chañaral", "Reserva Nacional Pingüino de Humboldt"],
        link: ["https://goo.gl/maps/NakzggFJ2d6s7sco6", "https://goo.gl/maps/V6xoxWFkoDZrohrk6"]
    },
    {
        nombre: "Región de Coquimbo",
        capital: "La Serena",
        pinguino: ["Magallanes", "Humboldt", "Penacho Amarillo"],
        centro: ["Reserva Nacional Pingüino de Humboldt", "Islas Dama", "Isla Choros"],
        link: ["https://goo.gl/maps/V6xoxWFkoDZrohrk6", "https://goo.gl/maps/AKMaAUFHTBGE4JAh9", "https://goo.gl/maps/eoiacqThafMPiaGq6"],
    },
    {
        nombre: "Región de Valparaíso",
        capital: "Valparaíso",
        pinguino: ["Magallanes", "Humboldt", "Rey", "Penacho Amarillo"],
        centro: ["Monumento Natural Isla Cachagua", "Islote Pájaros  Niños", "Algarrobo"],
        link: ["https://goo.gl/maps/VuAajMpRqh61xGmy5", "https://goo.gl/maps/WZi6bNu1nwrQ3Nuz6", "https://goo.gl/maps/eimpuVzSd483w4MDA"],
    },
    {
        nombre: "Región Metropolitana",
        capital: "Santiago",
        pinguino: ["Humboldt"],
        centro: ["Zoológico Metropolitano de Santiago", "Buinzoo"],
        link: ["https://goo.gl/maps/1QoWrnQ6nnpcNdhHA","https://goo.gl/maps/AUjbNK9KQZPEdN6Z9"],
    },
    {
        nombre: "Región del Libertador General Bernardo Ohiggins",
        capital: "Rancagua",
        pinguino: ["Magallanes", "Humboldt", "Rey"],
        centro: ["Isla de Pupuya", "Pichilemu"],
        link: ["https://goo.gl/maps/7BuB1oKebPWrsWnQA", "https://goo.gl/maps/wXF3pva8sZHWhytZ8"],
    },
    {
        nombre: "Región del Maule",
        capital: "Talca",
        pinguino: ["Magallanes", "Humboldt", "Rey"],
        centro: ["Pelluhue", "Curanipe"],
        link: ["https://goo.gl/maps/KZ3LVk3RNuFvkbz28", "https://goo.gl/maps/rMa9ao5awwxpuEcm8"],
    },
    {
        nombre: "Región Ñuble",
        capital: "Chillán",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Pelluhue", "Curanipe"],
        link: ["https://goo.gl/maps/KZ3LVk3RNuFvkbz28", "https://goo.gl/maps/rMa9ao5awwxpuEcm8"],
    },
    {
        nombre: "Región del Bio-Bio",
        capital: "Concepción",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Pelluhue", "Curanipe"],
        link: ["https://goo.gl/maps/KZ3LVk3RNuFvkbz28", "https://goo.gl/maps/rMa9ao5awwxpuEcm8"],
    },
    {
        nombre: "Región de la Araucanía",
        capital: "Temuco",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Pelluhue", "Curanipe"],
        link: ["https://goo.gl/maps/KZ3LVk3RNuFvkbz28", "https://goo.gl/maps/rMa9ao5awwxpuEcm8"],
    },
    {
        nombre: "Región de los Ríos",
        capital: "Valdivia",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Pelluhue", "Curanipe"],
        link: ["https://goo.gl/maps/KZ3LVk3RNuFvkbz28", "https://goo.gl/maps/rMa9ao5awwxpuEcm8"],
    },
    {
        nombre: "Región de los Lagos",
        capital: "Puerto Montt",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Pelluhue", "Curanipe"],
        link: ["https://goo.gl/maps/KZ3LVk3RNuFvkbz28", "https://goo.gl/maps/rMa9ao5awwxpuEcm8"],
    },
    {
        nombre: "Región de Aysén",
        capital: "Coyhaique",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Pelluhue", "Curanipe"],
        link: ["https://goo.gl/maps/KZ3LVk3RNuFvkbz28", "https://goo.gl/maps/rMa9ao5awwxpuEcm8"],
    },
    {
        nombre: "Región de Magallanes y la Antártida Chilena",
        capital: "Punta Arenas",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Pelluhue", "Curanipe"],
        link: ["https://goo.gl/maps/KZ3LVk3RNuFvkbz28", "https://goo.gl/maps/rMa9ao5awwxpuEcm8"],
    },
    
];


