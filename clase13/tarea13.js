let colores = ["rojo", "verde", "azul", "amarillo", "morado"]
console.log(colores [0])
console.log(colores [colores.length - 1])


let numeros = [10, 20, 30, 40, 50]
console.log(numeros [1]) 

let nombres = [] 
nombres.push ("Juan", "Maria", "Pedro")
console.log(nombres) 

let comidas = ["Pizza", "Hamburguesa", "Helado"]
comidas.pop()
console.log(comidas) 

let comidas2 = ["Pizza", "Hamburguesa", "Helado"]
comidas2.shift()
console.log(comidas2) 

let productos = ["Remera", "Pantalon", "Zapatos"]
productos.push ("Gorra")
console.log(productos) 


let numeros2 = [10, 20, 30]
let sumatoria = 0 
for (let i = 0; i < numeros2.length; i++) {
    sumatoria = sumatoria + numeros2[i]
}

console.log(sumatoria) 

let productos2 = ["Remera", "Pantalon", "Zapatos"]
let cantidadProductos = 0

for (let i = 0; i < productos2.length; i++) {
    cantidadProductos = cantidadProductos + 1
}
console.log(cantidadProductos) 


let numeros3 = [1,4,7,10]
for (let i = 0; i < numeros3.length; i++) {
    if (numeros3[i] % 2 == 0) {
        console.log(numeros3[i])
    }
}


// TAREA13 //

let productos3 = ["Pollera", "Short", "Camiseta"]
for (let i = productos3.length - 1; i >= 0; i--) {
    console.log (
        productos3[i]
    )
}


let numeros4 = [11,12,13,14,15]

for (let i = numeros4.length; i > 0; i--){
    numeros4.pop ()
}

let numeros5 = [1, 2, 3]
for (let i = 0; i < numeros5.length; i++) { 
console.log (String (numeros5[i]) + String (numeros5[i]))
}