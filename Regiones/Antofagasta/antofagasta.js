var nombre = "Victor Robles";
var altura = 189;
/*
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
*/

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