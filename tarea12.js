//Crear función calcularAreaRectangulo(base, altura) → retornar área//
function calcularAreaRectangulo(base, altura) {
    return base * altura
 }
    console.log(calcularAreaRectangulo(5,3))

//Crear función esMayorDeEdad(edad) → retornar true/false//

function esMayorDeEdad(edad){
    return (edad>=18)
   
}
console.log(esMayorDeEdad(5))

//Usar variable global pais y local ciudad dentro de función → mostrar ambas//
 let pais="Argentina"
 function local (){
    let ciudad = "Córdoba"
    console.log (pais)
    console.log (ciudad)

 }
local()

//Crear una funcion, que repita un texto, la cantidad de veces que se mande por props, ejemplo: repetirTexto("Hola", 3) esto deberia repetirse 3 veces//

function repetiTexto(texto,veces) {
    for (let i = 0; i < veces; i++) {
        console.log(texto)
        
    }
        
    }
    repetiTexto("Me re cuesta entender tooodooo esto ", 5)

    