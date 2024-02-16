//                                Nivel bajo

//1)

let num1 = 5
let num2 = 5

if( num1 > num2 ){
    console.log(num1)
}else{
    console.log(num2)
}


//2)


if( num1 > num2 ){
    console.log(num1)
}else if( num2 > num1 ){
    console.log(num2)
}else{
    console.log("Los numeros son iguales")
}

//3)

if( num1 == num2){
    console.log("Los numeros son iguales")
}else{
    console.log("Los numeros son diferentes")
}

//4) VER EL TEMA STRING PORQUE SI NO PONGO EL 0 SE JODE EL TEMA DE LOS MESES, 
//PORQUE CONSIDERA CARACTER A CARACTER Y POR ENDE
// MAYO (MES 4) ES MAYOR QUE NOVIEMBRE (MES 11)
//EN ESE CASO ESCRIBO 04 Y 11

//VER ENTONCES COMO HACERLO SIN EL 0, SI ES QUE SE PUEDE

let fecha1 = "2018-09-02"
let fecha2 = "2023-05-07"

console.log(Number(fecha1))

if( fecha1 > fecha2 ){
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}`)
}else if( fecha2 > fecha1 ){
    console.log(`La fecha ${fecha2} es mayor que ${fecha1}`)
}else{
    console.log("Las fechas son iguales")
}

//5)

let fecha3 = "2018-10-7"
let fecha4 = "2018-02-17"

if( fecha3 > fecha4 ){
    console.log(`La fecha ${fecha3} es mayor que ${fecha4}`)
}else if( fecha4 > fecha3 ){
    console.log(`La fecha ${fecha4} es mayor que ${fecha3}`)
}else{
    console.log("Las fechas son iguales")
}


//6)

let dato1 = 5
let dato2 = 7
let dato3 = 9


if( dato1 > dato2 && dato1 > dato3 ){
    console.log(`El numero ${dato1} es el mayor`)
}else if( dato2 > dato1 && dato2 > dato3 ){
    console.log(`El numero ${dato2} es el mayor`)
}else{
    console.log(`El numero ${dato3} es el mayor`)
}


//                                Nivel medio


//7)SWITCH

//8)SWITCH

//9)

let persona1 = {
    nombre: "Juan",
    edad: 39,
    altura: 1.19
}

let nombre = "Marta"
let edad = 40 //> Number(persona1.edad)
let altura = 1.90 //> Number(persona1.altura)


if( edad > persona1.edad){
    if( altura > persona1.altura){
        console.log(`${nombre} es mas alta y tiene mayor edad que ${persona1.nombre}.`)
    }else{
        console.log(`${persona1.nombre} es mas alto pero ${nombre} es mayor en edad.`)
    }
}else{
    if( altura > persona1.altura){
        console.log(`${persona1.nombre} tiene menos altura y es mayor que ${nombre}.`)
    }else{
        console.log(`${persona1.nombre} es mayor y mas alto que ${nombre}.`)
    }
}

//Otra forma de resolverlo seria con operadores logicos

if( persona1.edad > edad && persona1.altura > altura){
    console.log(`${persona1.nombre} es mayor y mas alto que ${nombre}.`)
}else if(persona1.edad < edad && persona1.altura > altura){
    console.log(`${persona1.nombre} es mas alto pero ${nombre} es mayor en edad.`)
}else if(persona1.edad > edad && persona1.altura < altura){
    console.log(`${persona1.nombre} tiene menos altura y es mayor que ${nombre}.`)
}else{
    console.log(`${nombre} es mas alta y tiene mayor edad que ${persona1.nombre}.`)
}

//Y al hacerlo como si fuera un objeto seria reemplazar con persona1.nombre, persona1.edad y persona1.altura

//10)

let name = prompt("Ingrese su nombre")
let age = Number(prompt("Ingrese su edad"))
let height = Number(prompt("Ingrese su altura (cm)"))
let vision = Number(prompt("Como ve del 1 al 10 (Donde 10 es el maximo)"))


if( age >= 18 && height >= 150 && ( vision >= 8 && vision <= 10)){
    console.log(`${name} Estas capacitado para conducir`)
}else{
    console.log(`${name} NO estas capacitado para conducir`)
}

//11)

let age2 = Number(prompt("Ingrese su edad"))

if( age2 >= 0 && age2 <= 12){
    console.log("Eres un infante")
}else if( age2 >= 13 && age2 <= 18){
    console.log("Eres un adolescente")
}else if( age2 >= 19 && age2 <= 45){
    console.log("Eres un mayor joven")
}else if( age2 >= 45 && age2 <= 100){
    console.log("Eres un anciano")
}else{
    console.log("En realidad tienes esa edad?")
}

//12)

let numero = Number(prompt("Ingrese un numero del 1 al 3"))

//                                Nivel alto

//13)

let name3 = prompt("Ingrese su nombre de cliente")
let pase = prompt("Ingrese si posee pase VIP o NORMAL")
let entrada = prompt("Indique por SI o por NO si tiene entrada")

const nombreFijo = "Juan Leon"

if( name3 == "juan leon" || pase == "vip"){
    alert("Bienvenido!")
}else if( entrada == "si"){
    let confirmacion = prompt("Desea utilizarla?")
    if( confirmacion == "si"){
        alert("Bienvenido!")
    }else{
        alert("Nos vemos la proxima.")
    }
}else{
    let compra = prompt("Desea comprar una entrada? (por si o por no)")
    if( compra == "si"){
        let precio = Number(prompt("Dinero disponible"))
        if( precio > 1000){
            alert("Venta concretada. Bienvenido!")

        }else{
            alert("Venta denegada.")
        }

    }else{
        alert("Nos vemos las proxima.")
    }
}

//14)

let numeroIncognita = 7

let numeroIngresado1 = Number(prompt("Ingrese el numero que desee"))

if( numeroIncognita == numeroIngresado1){
    alert("Ganaste!, adivinaste el numero")
}else if( numeroIncognita > numeroIngresado1){
    alert("El numero ingresado es menor, vuelve a intentarlo.")

}else{
    alert("El numero ingresado es mayor, vuelve a intentarlo.")
}

if( numeroIngresado1 != numeroIncognita){

    let numeroIngresado2 = Number(prompt("Ingrese el numero que desee"))

    if( numeroIncognita == numeroIngresado2){
        alert("Ganaste!, adivinaste el numero")
    }else if( numeroIncognita > numeroIngresado2){
        alert("El numero ingresado es menor, vuelve a intentarlo.")
    }else{
        alert("El numero ingresado es mayor, vuelve a intentarlo.")
    }

    if (numeroIngresado2 != numeroIncognita) {
        let numeroIngresado3 = Number(prompt("Ingrese el numero que desee"))

        if( numeroIncognita == numeroIngresado3){
            alert("Ganaste!, adivinaste el numero")
        }else if(  numeroIncognita > numeroIngresado3){
            alert("El numero ingresado es menor, has perdido.")
        }else{
            alert("El numero ingresado es mayor, has perdido.")
        }
    
    }



}


    









