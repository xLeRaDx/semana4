let nombres  = ["Rosita", "Raúl", "Pedro", "Pamela", "Jenny", "Elba"];
console.log(nombres[1]);
console.log(nombres[4]);
console.log(nombres[2]);

console.log(`Los alumnos son ${nombres[0]} ${nombres[3]} ${nombres[5]}`);

console.log(nombres.length);

nombres.push("Felipe");

console.log(nombres);

console.table(nombres);

for(let i=0; i< nombres.length; i++){
    console.log(nombres[i]);
}