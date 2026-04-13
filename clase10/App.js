let nombre = "Antonella";
let pais = "Argentina";
let edad = 25;
let tieneTrabajo = true;

console.log("Hola, mi nombre es " + nombre + ", soy de " + pais + " y tengo " + edad + " años y mi estado laboral es " + tieneTrabajo);

if (edad >= 18) {
    console.log("Es mayor de edad ")
}
else {
    console.log(
        "Es menor"
    )
}

if (tieneTrabajo) {
    console.log("Tiene trabajo")
}
else {
    console.log("No tiene trabajo")
}

if (edad >= 18 && tieneTrabajo) {
    console.log("Puede inscribirse")
}
else {
    console.log("No puede inscribirse")
}