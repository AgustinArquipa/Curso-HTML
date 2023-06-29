alert("¡Hola Mundo!");

5 == '5'; //True;
"1" + 2 + 3; //"123"
//Conersion manual de tipos
parseInt("1")+2+3; //ahi esta sumando = 6

console.log("Hola, es la consola");

//Definiendo variables
let x = 10;
let y = 5;
let resultado = x * y;
console.log(resultado);

//Definiendo arrays
let frutas = ["manzanas", "peras", "platanos"];
console.log(frutas);

//Para recorrer arrays uno a uno
for (let i=0; i<frutas.length; i++){
    console.log(frutas[i]);
}

for (let fruta of frutas){
    console.log(fruta);
}
//Con esta manera recorremos el arreglo, y la variable fruta1 trae numeros
for (let fruta1 in frutas){
    console.log(fruta1);
}