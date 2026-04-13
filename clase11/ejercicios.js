//NÚMEROS DEL 1 AL 100//
for (let i = 1; i <= 100; i++) {
    console.log(i)
}

//MOSTRAR SOLO IMPARES//

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

//Contador//
let contador = 0;

for (let i = 1; i <= 100; i++) {
    contador += i
}
console.log(contador)


//Mostrar multiplos de 3 //}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }

}

//EJERCICIO EXTRA//

let resultado = 0;
let multiplicador = 1; 

for(let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++){
        resultado = resultado + (i * multiplicador);
        multiplicador = multiplicador * 10;
    }
    console.log(resultado)
    resultado = 0
    multiplicador = 1
}






