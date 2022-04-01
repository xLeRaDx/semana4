/**
for(let cont=0; cont <=10; cont=cont + 1){
    console.log(`el contador es ${cont}`);
}
*/
/** 
for(let cont=0; cont <=10; cont++){
    console.log(`el contador es ${cont}`); 
}
*/
let precioPs5 = 3000;

let ahorro = 0;

let propina= 0;

for(ahorro = 5; ahorro <=3000; ahorro= ahorro + propina) {
    propina = Number(prompt("Ingrese la propina"));
    console.log("propina", propina);
    console.log("AHORRO", ahorro);
}
 console.log("ESTOY DESPUÉS DEL FOR");