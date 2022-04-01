let edad = +prompt("Cuál es tu edad?");
//if(condicion) {instrucciones}
/**if(edad >= 18){
    console.log("Puedes comprar tu entrada");
} else {
    console.log("No puedes entrar");
}
*/
if(edad >= 40){
    console.log("tres dosis o fuera!");
} else if(edad >=18){
    console.log("Dos dosis o Afuera!");
} else if (edad >= 5) {
    console.log("Es recomendable que tenga al menos dos dosis");
} else {
    console.log("debes ser un bebé, pasa noma");
}