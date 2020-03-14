//dato un array preesistente fai in modo tramite prompt di aggiungere numeri

let a, b, rest;
var ripeti, numeriAggiunti = [];
while (ripeti !== "n") {
    numeriAggiunti.push(prompt("aggiungi il numero all'array"));
    ripeti = prompt('vuoi continuare a scrivere numeri y/n');
    console.log(numeriAggiunti + " ");
}

function numbers() {
    rest = numeriAggiunti;
    [a, b] = [10, 20];
    console.log([a, b] + "," + rest);
}
numbers()


