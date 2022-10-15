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
        centro: ["Tocopilla", "Península de Mejillones", "Taltal"],
        link: ["https://goo.gl/maps/6UFVvAz2LfcL2Sw59", "https://goo.gl/maps/ngt4YgVrxzTsJaM87", "https://goo.gl/maps/yMZ8itcrScc2bPneA"]
    },
    {
        nombre: "Región de Coquimbo",
        capital: "La Serena",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Reserva Nacional Pingüino de Humboldt", "Islas Dama"],
        link: ["https://goo.gl/maps/V6xoxWFkoDZrohrk6", "https://goo.gl/maps/AKMaAUFHTBGE4JAh9"],
    },
    
];


