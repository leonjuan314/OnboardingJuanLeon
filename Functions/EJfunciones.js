//                                       Nivel Bajo


//1) y 2)

function sumar(){
    console.log(100*20)
}

sumar()

//no entendi si el ejercicio tambien pedia que ademas de crear la funcion, se la asigne a una constante

const smr = sumar
smr()

//3)agregar parametros

function suma(num1, num2){
    console.log(num1 * num2)
}

suma() //devuelve Nan logicamente

//4)pasarle argumentos a la funcion anterior

let numeroA = 100
let numeroB = 20


suma(numeroA, numeroB)

//5)cambiar console.log de la funcion suma por el return

function sum(num1, num2){
    const resultado = num1 * num2
    return resultado
}

console.log(sum(20, 100))

//6)convertir funcion en anonima

const sumAnonima = function(num1, num2){
    const resultado = num1 * num2
    return resultado
}

//7)convertir en funcion flecha

function flecha(a, b){
    const resultado = a * b
    return resultado
}

(a, b) => a * b

//                                       Nivel medio


//8)

function saludar(nombre){
    console.log(`Hola mi nombre es ${nombre}`)
    console.log("Hola mi nombre es " + nombre) //puse dos formas para probar la diferencia sintactica entre ambas, el ejercicio obvio pide una
}

saludar("juan")

//9)

const sumAnonima2 = function(num1, num2){
    const resultado = num1 * num2
    return resultado
}

let numeroPi = 3.1415926535897932384626433832795028841971693993751
let numeroE =  2.7182818284590452353602874713527

sumAnonima2(numeroPi, numeroE)
console.log(sumAnonima2(numeroPi, numeroE))

//10)

function area(base, altura){
    const area = (base * altura) / 2
    return console.log("El area del triangulo es " + area)
}

function perimetro(base, altura){
    let hipotenusa = ((base)**2+(altura)**2)**(1/2)
    const perimetro = base + altura + hipotenusa
    return console.log("El perimetro del triangulo es " + perimetro)
    
}//uno de entrada solo tiene los valores de la base y de la altura, por ende la hipotenusa se calcula a parte y luego se usa para calcular el perimetro sumando las tres.

area(3,5)
perimetro(3,5)

//11) flecha

//12)

function esMayorDeEdad(edad){
    if(edad >= 18 ){
        alert("Eres mayor de edad")
    }else{
        alert("Eres menor de edad")
    }
}

esMayorDeEdad(1)
esMayorDeEdad(18)
esMayorDeEdad(100)

//13) ingreso anual de una persona y retorne el impuesto que debe pagar

function impuesto(ingreso){
    
    if( ingreso <= 10000){
        let monto = ingreso * 0.1
        return alert("El impuesto a pagar es " + monto)
    }else if( 10000 < ingreso && ingreso <= 20000){
        let monto = ingreso * 0.15
        return alert("El impuesto a pagar es " + monto)
    }else{
        let monto = ingreso * 0.2
        return alert("El impuesto a pagar es " + monto)
    }
}
 
impuesto(5000)
impuesto(15000)
impuesto(30000)

//14)switch agaiin

