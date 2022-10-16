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
        centro: ["Boca Itata", "Playa Cobquecura", "Rinconada"],
        link: ["https://goo.gl/maps/W8PjEE77ZrEinQtR6", "https://goo.gl/maps/Ne3Yis2kiTxqf52M9", "https://goo.gl/maps/3pz262uRX8CsvCPy5"],
    },
    {
        nombre: "Región del Bio-Bio",
        capital: "Concepción",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Playa los Burros", "Playa Blanca", "Playa El Morro"],
        link: ["https://goo.gl/maps/BfQLHCRPjYT1TShG8", "https://goo.gl/maps/uewSythVBUA4fpcK8", "https://goo.gl/maps/5CavVm2sPauyB6dG8"],
    },
    {
        nombre: "Región de la Araucanía",
        capital: "Temuco",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Isla de Maiquillahue", "Desembocadura Rio Toltén"],
        link: ["https://goo.gl/maps/apbgHbB4EQWcXRQ26", "https://goo.gl/maps/x8N1NmEftWD8bEERA"],
    },
    {
        nombre: "Región de los Ríos",
        capital: "Valdivia",
        pinguino: ["Magallanes", "Humboldt"],
        centro: ["Isla de Maiquillahue"],
        link: ["https://goo.gl/maps/apbgHbB4EQWcXRQ26", ],
    },
    {
        nombre: "Región de los Lagos",
        capital: "Puerto Montt",
        pinguino: ["Magallanes", "Humboldt", "Penacho Amarillo"],
        centro: ["Pinguineras de Pucatrihue", "Islotes de Puñihuil", "Playa Santa Bárbara"],
        link: ["https://g.page/Pinguineras?share", "https://goo.gl/maps/YacYcNp6hY15Rs6D6", "https://goo.gl/maps/UvHFn7Rue32qatDn9"],
    },
    {
        nombre: "Región de Aysén",
        capital: "Coyhaique",
        pinguino: ["Magallanes", "Humboldt", "Penacho Amarillo"],
        centro: ["Parque Nacional Isla Magdalena", "Islas Las Huichas", ],
        link: ["https://goo.gl/maps/scXJ4GCf2V8qnHVR9", "https://goo.gl/maps/pdxU8xiHXWU8MCeJ8"],
    },
    {
        nombre: "Región de Magallanes y la Antártida Chilena",
        capital: "Punta Arenas",
        pinguino: ["Magallanes", "Rey", "Emperador", "Macaroni", "Penacho Amarillo", "Papua", "Adelia", "Barbijo"],
        centro: ["Monumento Natural de los pingüinos", "Seno Otway", "Isla Martillo", "Archipiélago Tierra del Fuego", "Bahía Inütil", "Isla del Pingüino"],
        link: ["https://g.page/mnlospinguinos?share", "https://goo.gl/maps/fqUmwQw9uVCY8HkD6", "https://goo.gl/maps/s7B34RjHAJjhytjV9", "https://goo.gl/maps/Rf6fLUWwfxwhwyDHA", "https://goo.gl/maps/aMpmcnqkTUYEitjq6", "https://goo.gl/maps/3G59NfrNtK4W14m18"],
    },
    
];


function cambiar(){
    document.getElementById("holass").classList.add("Pinguinoss");
    document.getElementById("holass1").classList.remove("Pinguinoss");
    document.getElementById("holass2").classList.remove("Pinguinoss");
    document.getElementById("holass3").classList.remove("Pinguinoss");
    document.getElementById("holass4").classList.remove("Pinguinoss");
    document.getElementById("holass5").classList.remove("Pinguinoss");
    document.getElementById("holass6").classList.remove("Pinguinoss");
    document.getElementById("holass0").classList.remove("Pinguinoss");
    document.getElementById("holass-1").classList.remove("Pinguinoss");
    /*AHORA PUNTOS*/
    document.getElementById("barbijo").classList.remove("desaparecer");
    document.getElementById("adelia").classList.remove("desaparecer");
    document.getElementById("emperador").classList.add("desaparecer");
    document.getElementById("humboldt").classList.remove("desaparecer");
    document.getElementById("humboldt1").classList.remove("desaparecer");
    document.getElementById("humboldt2").classList.remove("desaparecer");
    document.getElementById("humboldt3").classList.remove("desaparecer");
    document.getElementById("humboldt4").classList.remove("desaparecer");
    document.getElementById("humboldt5").classList.remove("desaparecer");
    document.getElementById("humboldt6").classList.remove("desaparecer");
    document.getElementById("humboldt7").classList.remove("desaparecer");
    document.getElementById("humboldt8").classList.remove("desaparecer");
    document.getElementById("humboldt9").classList.remove("desaparecer");
    document.getElementById("humboldt10").classList.remove("desaparecer");
    document.getElementById("humboldt11").classList.remove("desaparecer");
    document.getElementById("humboldt12").classList.remove("desaparecer");
    document.getElementById("humboldt13").classList.remove("desaparecer");
    document.getElementById("humboldt14").classList.remove("desaparecer");
    document.getElementById("macaroni").classList.remove("desaparecer");
    document.getElementById("magallanes").classList.remove("desaparecer");
    document.getElementById("magallanes1").classList.remove("desaparecer");
    document.getElementById("magallanes2").classList.remove("desaparecer");
    document.getElementById("magallanes3").classList.remove("desaparecer");
    document.getElementById("magallanes4").classList.remove("desaparecer");
    document.getElementById("magallanes5").classList.remove("desaparecer");
    document.getElementById("magallanes6").classList.remove("desaparecer");
    document.getElementById("magallanes7").classList.remove("desaparecer");
    document.getElementById("magallanes8").classList.remove("desaparecer");
    document.getElementById("magallanes9").classList.remove("desaparecer");
    document.getElementById("magallanes10").classList.remove("desaparecer");
    document.getElementById("magallanes11").classList.remove("desaparecer");
    document.getElementById("magallanes12").classList.remove("desaparecer");
    document.getElementById("magallanes13").classList.remove("desaparecer");
    document.getElementById("magallanes14").classList.remove("desaparecer");
    document.getElementById("magallanes15").classList.remove("desaparecer");
    document.getElementById("magallanes16").classList.remove("desaparecer");
    document.getElementById("magallanes17").classList.remove("desaparecer");
    document.getElementById("papua").classList.remove("desaparecer");
    document.getElementById("penacho").classList.remove("desaparecer");
    document.getElementById("penacho1").classList.remove("desaparecer");
    document.getElementById("penacho2").classList.remove("desaparecer");
    document.getElementById("penacho3").classList.remove("desaparecer");
    document.getElementById("penacho4").classList.remove("desaparecer");
    document.getElementById("rey1").classList.remove("desaparecer");
    document.getElementById("rey2").classList.remove("desaparecer");
    document.getElementById("rey3").classList.remove("desaparecer");
    document.getElementById("rey4").classList.remove("desaparecer");

};

function cambiar2(){
    document.getElementById("holass").classList.remove("Pinguinoss");
    document.getElementById("holass1").classList.add("Pinguinoss");
    document.getElementById("holass2").classList.add("Pinguinoss");
    document.getElementById("holass3").classList.add("Pinguinoss");
    document.getElementById("holass4").classList.remove("Pinguinoss");
    document.getElementById("holass5").classList.remove("Pinguinoss");
    document.getElementById("holass6").classList.remove("Pinguinoss");
    document.getElementById("holass0").classList.remove("Pinguinoss");
    document.getElementById("holass-1").classList.remove("Pinguinoss");
    /*AHORA PUNTOS*/
    document.getElementById("barbijo").classList.remove("desaparecer");
    document.getElementById("adelia").classList.remove("desaparecer");
    document.getElementById("emperador").classList.remove("desaparecer");
    document.getElementById("humboldt").classList.add("desaparecer");
    document.getElementById("humboldt1").classList.add("desaparecer");
    document.getElementById("humboldt2").classList.add("desaparecer");
    document.getElementById("humboldt3").classList.add("desaparecer");
    document.getElementById("humboldt4").classList.add("desaparecer");
    document.getElementById("humboldt5").classList.add("desaparecer");
    document.getElementById("humboldt6").classList.add("desaparecer");
    document.getElementById("humboldt7").classList.add("desaparecer");
    document.getElementById("humboldt8").classList.add("desaparecer");
    document.getElementById("humboldt9").classList.add("desaparecer");
    document.getElementById("humboldt10").classList.add("desaparecer");
    document.getElementById("humboldt11").classList.add("desaparecer");
    document.getElementById("humboldt12").classList.add("desaparecer");
    document.getElementById("humboldt13").classList.add("desaparecer");
    document.getElementById("humboldt14").classList.add("desaparecer");
    document.getElementById("macaroni").classList.remove("desaparecer");
    document.getElementById("magallanes").classList.remove("desaparecer");
    document.getElementById("magallanes1").classList.remove("desaparecer");
    document.getElementById("magallanes2").classList.remove("desaparecer");
    document.getElementById("magallanes3").classList.remove("desaparecer");
    document.getElementById("magallanes4").classList.remove("desaparecer");
    document.getElementById("magallanes5").classList.remove("desaparecer");
    document.getElementById("magallanes6").classList.remove("desaparecer");
    document.getElementById("magallanes7").classList.remove("desaparecer");
    document.getElementById("magallanes8").classList.remove("desaparecer");
    document.getElementById("magallanes9").classList.remove("desaparecer");
    document.getElementById("magallanes10").classList.remove("desaparecer");
    document.getElementById("magallanes11").classList.remove("desaparecer");
    document.getElementById("magallanes12").classList.remove("desaparecer");
    document.getElementById("magallanes13").classList.remove("desaparecer");
    document.getElementById("magallanes14").classList.remove("desaparecer");
    document.getElementById("magallanes15").classList.remove("desaparecer");
    document.getElementById("magallanes16").classList.remove("desaparecer");
    document.getElementById("magallanes17").classList.remove("desaparecer");
    document.getElementById("papua").classList.add("desaparecer");
    document.getElementById("penacho").classList.add("desaparecer");
    document.getElementById("penacho1").classList.add("desaparecer");
    document.getElementById("penacho2").classList.add("desaparecer");
    document.getElementById("penacho3").classList.add("desaparecer");
    document.getElementById("penacho4").classList.add("desaparecer");
    document.getElementById("rey1").classList.remove("desaparecer");
    document.getElementById("rey2").classList.remove("desaparecer");
    document.getElementById("rey3").classList.remove("desaparecer");
    document.getElementById("rey4").classList.remove("desaparecer");

};

function cambiar3(){
    document.getElementById("holass").classList.add("Pinguinoss");
    document.getElementById("holass1").classList.remove("Pinguinoss");
    document.getElementById("holass2").classList.add("Pinguinoss");
    document.getElementById("holass3").classList.add("Pinguinoss");
    document.getElementById("holass4").classList.add("Pinguinoss");
    document.getElementById("holass5").classList.remove("Pinguinoss");
    document.getElementById("holass6").classList.remove("Pinguinoss");
    document.getElementById("holass0").classList.remove("Pinguinoss");
    document.getElementById("holass-1").classList.add("Pinguinoss");
    /*AHORA PUNTOS*/
    document.getElementById("barbijo").classList.remove("desaparecer");
    document.getElementById("adelia").classList.add("desaparecer");
    document.getElementById("emperador").classList.add("desaparecer");
    document.getElementById("humboldt").classList.remove("desaparecer");
    document.getElementById("humboldt1").classList.remove("desaparecer");
    document.getElementById("humboldt2").classList.remove("desaparecer");
    document.getElementById("humboldt3").classList.remove("desaparecer");
    document.getElementById("humboldt4").classList.remove("desaparecer");
    document.getElementById("humboldt5").classList.remove("desaparecer");
    document.getElementById("humboldt6").classList.remove("desaparecer");
    document.getElementById("humboldt7").classList.remove("desaparecer");
    document.getElementById("humboldt8").classList.remove("desaparecer");
    document.getElementById("humboldt9").classList.remove("desaparecer");
    document.getElementById("humboldt10").classList.remove("desaparecer");
    document.getElementById("humboldt11").classList.remove("desaparecer");
    document.getElementById("humboldt12").classList.remove("desaparecer");
    document.getElementById("humboldt13").classList.remove("desaparecer");
    document.getElementById("humboldt14").classList.remove("desaparecer");
    document.getElementById("macaroni").classList.add("desaparecer");
    document.getElementById("magallanes").classList.remove("desaparecer");
    document.getElementById("magallanes1").classList.remove("desaparecer");
    document.getElementById("magallanes2").classList.remove("desaparecer");
    document.getElementById("magallanes3").classList.remove("desaparecer");
    document.getElementById("magallanes4").classList.remove("desaparecer");
    document.getElementById("magallanes5").classList.remove("desaparecer");
    document.getElementById("magallanes6").classList.remove("desaparecer");
    document.getElementById("magallanes7").classList.remove("desaparecer");
    document.getElementById("magallanes8").classList.remove("desaparecer");
    document.getElementById("magallanes9").classList.remove("desaparecer");
    document.getElementById("magallanes10").classList.remove("desaparecer");
    document.getElementById("magallanes11").classList.remove("desaparecer");
    document.getElementById("magallanes12").classList.remove("desaparecer");
    document.getElementById("magallanes13").classList.remove("desaparecer");
    document.getElementById("magallanes14").classList.remove("desaparecer");
    document.getElementById("magallanes15").classList.remove("desaparecer");
    document.getElementById("magallanes16").classList.remove("desaparecer");
    document.getElementById("magallanes17").classList.remove("desaparecer");
    document.getElementById("papua").classList.add("desaparecer");
    document.getElementById("penacho").classList.add("desaparecer");
    document.getElementById("penacho1").classList.add("desaparecer");
    document.getElementById("penacho2").classList.add("desaparecer");
    document.getElementById("penacho3").classList.add("desaparecer");
    document.getElementById("penacho4").classList.add("desaparecer");
    document.getElementById("rey1").classList.remove("desaparecer");
    document.getElementById("rey2").classList.remove("desaparecer");
    document.getElementById("rey3").classList.remove("desaparecer");
    document.getElementById("rey4").classList.remove("desaparecer");

};


function cambiar4(){
    document.getElementById("holass").classList.add("Pinguinoss");
    document.getElementById("holass1").classList.remove("Pinguinoss");
    document.getElementById("holass2").classList.remove("Pinguinoss");
    document.getElementById("holass3").classList.remove("Pinguinoss");
    document.getElementById("holass4").classList.remove("Pinguinoss");
    document.getElementById("holass5").classList.remove("Pinguinoss");
    document.getElementById("holass6").classList.remove("Pinguinoss");
    document.getElementById("holass0").classList.add("Pinguinoss");
    document.getElementById("holass-1").classList.add("Pinguinoss");
    /*AHORA PUNTOS*/
    document.getElementById("barbijo").classList.add("desaparecer");
    document.getElementById("adelia").classList.add("desaparecer");
    document.getElementById("emperador").classList.add("desaparecer");
    document.getElementById("humboldt").classList.remove("desaparecer");
    document.getElementById("humboldt1").classList.remove("desaparecer");
    document.getElementById("humboldt2").classList.remove("desaparecer");
    document.getElementById("humboldt3").classList.remove("desaparecer");
    document.getElementById("humboldt4").classList.remove("desaparecer");
    document.getElementById("humboldt5").classList.remove("desaparecer");
    document.getElementById("humboldt6").classList.remove("desaparecer");
    document.getElementById("humboldt7").classList.remove("desaparecer");
    document.getElementById("humboldt8").classList.remove("desaparecer");
    document.getElementById("humboldt9").classList.remove("desaparecer");
    document.getElementById("humboldt10").classList.remove("desaparecer");
    document.getElementById("humboldt11").classList.remove("desaparecer");
    document.getElementById("humboldt12").classList.remove("desaparecer");
    document.getElementById("humboldt13").classList.remove("desaparecer");
    document.getElementById("humboldt14").classList.remove("desaparecer");
    document.getElementById("macaroni").classList.remove("desaparecer");
    document.getElementById("magallanes").classList.remove("desaparecer");
    document.getElementById("magallanes1").classList.remove("desaparecer");
    document.getElementById("magallanes2").classList.remove("desaparecer");
    document.getElementById("magallanes3").classList.remove("desaparecer");
    document.getElementById("magallanes4").classList.remove("desaparecer");
    document.getElementById("magallanes5").classList.remove("desaparecer");
    document.getElementById("magallanes6").classList.remove("desaparecer");
    document.getElementById("magallanes7").classList.remove("desaparecer");
    document.getElementById("magallanes8").classList.remove("desaparecer");
    document.getElementById("magallanes9").classList.remove("desaparecer");
    document.getElementById("magallanes10").classList.remove("desaparecer");
    document.getElementById("magallanes11").classList.remove("desaparecer");
    document.getElementById("magallanes12").classList.remove("desaparecer");
    document.getElementById("magallanes13").classList.remove("desaparecer");
    document.getElementById("magallanes14").classList.remove("desaparecer");
    document.getElementById("magallanes15").classList.remove("desaparecer");
    document.getElementById("magallanes16").classList.remove("desaparecer");
    document.getElementById("magallanes17").classList.remove("desaparecer");
    document.getElementById("papua").classList.remove("desaparecer");
    document.getElementById("penacho").classList.remove("desaparecer");
    document.getElementById("penacho1").classList.remove("desaparecer");
    document.getElementById("penacho2").classList.remove("desaparecer");
    document.getElementById("penacho3").classList.remove("desaparecer");
    document.getElementById("penacho4").classList.remove("desaparecer");
    document.getElementById("rey1").classList.remove("desaparecer");
    document.getElementById("rey2").classList.remove("desaparecer");
    document.getElementById("rey3").classList.remove("desaparecer");
    document.getElementById("rey4").classList.remove("desaparecer");

};


document.getElementById("prueba").onclick = function (){
    cambiar();
};

document.getElementById("prueba2").onclick = function (){
    cambiar2();
};

document.getElementById("prueba1").onclick = function (){
    cambiar3();
};

document.getElementById("prueba0").onclick = function (){
    cambiar4();
};
