//                                     Nivel bajo

//1)

let ingreseNumero = Number(prompt("Ingrese un numero entre 1 y 100:"))

for( i= ingreseNumero; i>0 ;i-- ){
    console.log(i)
}

//2)

let ingreseNumero2 = Number(prompt("Ingrese un numero entre 1 y 10:"))

for(i=1; i <= 10; i = i + 1 ){
    console.log(`${i} x ${ingreseNumero2} = ` + i*ingreseNumero2)
}

//3)

let variable = Number(prompt("Ingrese un numero aleatoriamente"))
let contador = variable

while( 0 != variable){
    variable = Number(prompt("Ingrese nuevamente un numero"))
    contador = contador + variable
}

console.log(contador)

//4) do while


//                                     Nivel medio

//5)

let ingreseNumero3 = Number(prompt("Ingrese numero hasta adivinar:"))
let numeroSecreto = ingreseNumero3


while( numeroSecreto != contador){
    if( numeroSecreto > contador){
        console.log("El numero ingresado es mayor que el secreto")
    }else{
        console.log("El numero ingresado es menor que el secreto")
    }
    numeroSecreto = Number(prompt("Ingrese nuevamente un numero:"))
}

alert(`Adivinaste!, el numero era ${contador}`)

//6)Mostrar todos los divisores de un numero que tenga resto resto 0

let calculo = Number(prompt("Ingrese un numero para mostrar sus divisores:"))

for( i=1; i <= calculo; i++){
    if(calculo % i == 0){
        console.log(`${i}`)

    }
}

//7)no entendi este ejercicio en cuanto a que se referia/ pedia

function sonarCampana(){

}

//8)

const fechaLimite = "1997-08-03"

const fechas = ["1984-10-02", "1990-03-02", "1975-15-07", "2024-21-10", "2001-01-09"]

for( let i=0; i <= fechaLimite.length; i++){
    if( fechas[i] >= fechaLimite){
        console.log(`${fechas[i]}`)
    }
}

//9)

const colores = ["rojo", "verde", "azul", "violeta", "amarillo", "celeste", "naranja", "rosa"]

for (let i = 0; i < colores.length; i++) {
    console.log(colores[i])
} //esta seria la forma que yo haria

//la forma que me piden es con for of

for( const elemeto of colores){
    console.log(elemeto)
}

//10)

function listaColores(colores){
    for( const elemeto of colores){
        console.log(elemeto)
    }    
}

listaColores(colores)

//11)

const numerosVarios = [5, 7, 10, 13, 17]

for( const numero of numerosVarios){
    console.log(`el numero es  ${numero}, y su doble es ` + 2 * numero)
}

//12)

const padre = {nombre: "Raul", apellido: "Perez", edad: 60, integrante: "Padre"}
const madre = {nombre: "Alejandra", apellido: "Claus", edad: 59, integrante: "Madre"}
const hija = {nombre: "Paula", apellido: "Perez", edad: 32, integrante: "hija"}
const hijo = {nombre: "Juan", apellido: "Perez", edad: 27, integrante: "hijo"}

const familia = [padre, madre, hija, hijo]

function family(familia){
    for(const integrante of familia){
        console.log(`Hola soy ${integrante.nombre} ${integrante.apellido} (${integrante.integrante}) y tengo ${integrante.edad} años.`)
    }

}

family(familia)



//                                     Nivel bajo

//13) 

const persona = {nombre: "juan", apellido: "leon", esColombiano: true, edad: 25, estudios: ["primario", "secundario","universitario"]}

for(let i in persona){
    console.log(`${i}`)
}

//14)

for(let i in persona){
    console.log(`${persona[i]}`)
}

//                                     Nivel alto

//15)calcular la suma de pares por un lado y la de impares por el otro (no importa cuantos se ingresen de cada uno, sino la suma de cada grupo de numeros)
let ingreseNumero4 = Number(prompt("Ingrese numero:"))
let contadorInicial = ingreseNumero4

let cuenta1 = 0
let cuenta2 = 0

while( 0 != contadorInicial){
    if( contadorInicial % 2 == 0){
        cuenta1 = cuenta1 + contadorInicial
    }else{
        cuenta2 = cuenta2 + contadorInicial
    }
    
    contadorInicial = Number(prompt("Ingrese nuevamente un numero:"))
}

console.log(`Pares: ${cuenta1}`)
console.log(`Impares: ${cuenta2}`)

//16)

const numbers2 = [9,2,3,4,40,6,1,20,300,1]

console.log(numbers2)

for( let i=0; i< numbers2.length; i++){
    if (numbers2[i] > numbers2[i+1]) {
        numbers2[i+1] = numbers2[i]
    }

} //la idea radica en que no importa al final como termine la lista, solo que si un elemento es mayor a su proximo, este reemplace su lugar.
//Y en caso de repetirse sucecivamente, este llegue hasta el final de la lista, habiendo reemplazado todos los elementos anteriores.
//A consola luego va el ultimo elemento de la lista, que deberia ser el valor mas alto de la lista inicial.


console.log(numbers2)
console.log(numbers2[i=numbers2.length-1])

