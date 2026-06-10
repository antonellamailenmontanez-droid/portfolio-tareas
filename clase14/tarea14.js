let nombres = ["Juan", "Carlos", "Roberta"]
console.log (
    nombres.map ((elemento) => { return "Hola " + elemento})
)

let saludoNombres = nombres.map((nombre) => {
    return "hola " + nombre
})

console.log("Kuaker: ", saludoNombres)



let ropa = ["Pollera larga", "Vestido", "Pollera midi"]

console.log (ropa.map ((unidad) => {return "Categoría Prendas Femeninas " + unidad}))


let numeros2 = [11,8,92,7,23,1,3]

let mayores = numeros2.filter ((num) => {return num > 10 ;});
console.log (mayores) 

let palabras = ["Mar","Hola","Medico","Onomatopeya","Perdicion"]
let palabrasLargas = palabras.filter((palabras) => {return palabras.length > 5;});
console.log (palabrasLargas)

let animales = ["Perro", "Gato", "Elefante", "Sol"]
let animales2 = animales.filter((animales) => {
    return animales.length >= 5;
}); 
console.log (animales2)

let edades = [18, 25, 30, 40]

let nuevasEdades = edades.map((edades2) => {return (edades2) + 1 })
 console.log (nuevasEdades)

 let palabras1 = ["sol", "computadora", "mesa", "programacion", "luz"]

 let palabrasLargas1 = palabras1.filter((palabras2)=> {return palabras2.length > 4; })

 console.log (palabrasLargas1)

 
 
 let numeros3 = [10,20,30]
 let total = numeros3.reduce ((acumulador,numero) => acumulador + numero, 0);
 console.log (total)


 let puntos = [5, 10, 15, 20]
let totalPuntos = puntos.reduce ((acumulador,elementos) => acumulador + elementos, 0) ;
console.log (totalPuntos)


let notas = [10,8,6,10]

let promedio = notas.reduce ((acumulador, nota) => acumulador + nota, 0) / notas.length

console.log (promedio)





//Tarea Clase 14//
//ejercicio 1//
let numeros = [5, 10, 15, 20];

let multiplicacion = numeros.map ((numero) => {return numero * 2})
console.log (multiplicacion)

//ejercicio 2 //
let suma = numeros.map ((numeros) => {return numeros + 5})
console.log (suma)

//ejercicio 3 //

let numeros4 = [3, 12, 7, 20, 1, 18];
let numMayor = numeros4.filter ((nuevo) => {return nuevo > 10}
)
console.log (numMayor)

// ejercicio 4 //

let numeros5 = [2, 4, 6, 8];
let mayor = numeros5.reduce ((acumulador,numerito) => { return numerito > acumulador ? numerito : acumulador ;})
console.log (mayor)
