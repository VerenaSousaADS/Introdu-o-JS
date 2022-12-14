let number  = 1;

/*(function(){
console.log('alo')})()*/

// unário


console.log(++number)

// binário

console.log(number + 1)

// ternário

console.log(true ? 'alo' : 'nada');


/*

    NEW
    
    *left-hand-side expression
    *criar um novo objeto



let name = new String('Verena')
name.surName = "Sousa"
let age = new Number(23)
console.log(name.surName, age);

let date = new Date('2020-12-01')
console.log(date._proto_)

*/

/* delete
const person = {
    name: 'Verena',
    age: 27,
}
delete person.age

console.log(person);
*/

/*
    Operadores Aritméticos

    #Multiplicação *
    console.log(5*5)

    #Divisão / 
    console.log(25/5)

    #Soma +
    console.log(34+67)

    #Subtração - 
    console.log(34-25)

    #Resto da divisão
    let remainder 
    remainder = 11 % 3
    console.log(remainder)

    #Incremento ++
    let increment = 0
    increment++
    console.log(increment)

    #Decremento
    let decrement = 5
    decrement--
    console.log(decrement)

    #Exponencial
    console.log(3 ** 3)

*/

/* Grouping operator

let total = 2 + 3 * 5
console.log(total)

let total2 =  (2 + 3) * 5 
console.log(total2);
*/

/*

// Operadores de comparação 

// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

// == igual a

console.log(two == 1)
console.log(one == "1")


// != diferente de

console.log(one != two)
console.log( one != 1)
console.log(one != "1")

// Comparação de valor e tipo

// === estritamente igual a

console.log(one === "1")
console.log(one === 1)

// !== estritamente diferente de 

console.log(one !== "1")
console.log(one !== 1)
console.log(one !== two);

// > Maior que 

console.log(one > two)

// >= Maior igual a 

console.log(one >=1)
console.log(two >= 1)

// < Menor que
console.log(one < two)

// <= Menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0);


// Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 4

// addition assignment (adição):
x += 2

// subtraction assignment (subtração):
x -= 1

// multiplication assignment (multiplacação):
x *= 2

// division assignment (divisão):
x /= 2

// exponetiation assignment (exponenciação):
x **= 2

// remainder assignment (resto de divisão):
x %= 2

console.log(x)

// Operadores lógicos (logiacal operators)

// 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

let pao = true
let queijo = false

// AND &&

console.log(pao && queijo)

// OR ||

console.log(pao || queijo)

// NOT !
console.log(!queijo)

//Operador condicional (Ternário) 

//Dependendo da condição, nós receberemos valores diferentes

//Condição então valor 1 senão valor 2

//condition ? value1 : value2

//Exemplos
//Café da manhã top
let pao = true
let queijo = true

const niceBreakFast = pao && queijo ? "Café top" : "Café ruim"

console.log(niceBreakFast)

// Maior de 18 pode dirigir

let age = 12

const canDrive = age >= 18 ? "Can Drive" : "Can't drive"

console.log(canDrive)





    FALSY

	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN


console.log( NaN ? 'verdadeiro' : 'falso' )




    TRUTHY

	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {} //nestes casos ele faz a conversão e por isso é apresentado como verdadeiro ou Truthy (confiável)
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity


console.log( 1 ? 'verdadeiro' : 'falso' )


*/