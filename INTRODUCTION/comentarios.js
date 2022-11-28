// console.log("Bem vindos ao starter")


/*Cadeia de caracteres

"" aspas duplas
'' aspas simples
`` template literals



console.log(`A soma de duas unidades é 
${1+1}`)

console.log('Isso é um texto')*/

/*
Number 

*Números

13 // inteiros
12.3 // reais
NaN // Not a Number
Infinity // infinito


console.log(12 * "a") //NaN

console.log(13 + (-15)) // real

console.log(Infinity) // Infinity ou infinito (Praticamente não utilizado)


*/


/*
Boolean

    * somente 2 valores

        true // verdadeiro
        false // falso

*/

/*

*Object

    - Objeto
    - Propriedades / Atributos
    - Funcionalidades / Métodos


{propriedades: "valor"}


console.log({
    name:"Verena",
    idade: 26,
    andar: function(){
        console.log('andar')
    }
})

*/


/*
*Array (Vetores)

    - Uma Lista
    - Agrupamento de dados

    ["Verena", 26]


    console.log(["Frango", "Banana", "Melão"])
*/

/*

Váriaveis

var clima = "Quente"
clima = "Frio"

console.log(clima)

//ou

// let clima = "Quente"
// clima = "Frio"

// console.log(clima)


const clima = "Quente"

//clima = "frio"// Errado uma variavel do tipo const é constante, ou seja, não muda

console.log(clima) 

*/



/*

## TIPOS DINÂMICOS

O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja, ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.


let clima = true
clima = ""

console.log(typeof clima) // typeof serve pra saber qual o tipo da variável

*/


/*
##Scope

* Escopo determina a visibilidade de alguma no JS

// var é global e, também local

// hoisting

// a variavel var x vem pra linha 6, ou seja, é como se ela se declarasse nessa linha, e deixa x = 0 na linha 10;

console.log('> existe x antes do bloco?', x)

{
    var x = 0
}

console.log('> existe x antes do bloco?', x)



*/

/*

//const e let são locais e só funcionam no escopo onde foram criadas

{
    let y = 0 // a variavel precisa ser declarada antes de ser usada
    console.log('> existe y? ', y)
    
}



/*
console.log('> existe y depois do bloco? ', y) // a variavel não funciona fora do escopo local

// let = 1 // não dá certo com const

// {
//     y = 0 
//     console.log('> existe y? ', y)
    
// }


// console.log('> existe y depois do bloco? ', y)


const y = 1 // São variáveis distintas

{
    const y = 0 
    console.log('> existe y? ', y)
    
}


console.log('> existe y depois do bloco? ', y)

*/


/*

DECLARATION (DECLARAÇÃO) AND ASSIGNMENT VAR (ATRIBUIÇÃO DE VARIÁVEL)

//Variáveis e tipos de dados

//declaração or declaration

var name

//assignment or atribuição de valores

name = "Verena"

//console.log(typeof name)

// agrupamento de declarações

let age, isHuman

age = 26
isHuman = true


//multiplos argumentos na funçao

//console.log(name, age, isHuman)

//escrita de texto + varáveis


//concatenando valores

//console.log('A ' + name + ' tem' + age + ' anos.')

//interpolando valores com template literals or template strings

//console.log(`A ${name} tem ${age} anos`)


*/



/* Object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true

}

// console.log(person.name)

console.log(`${person.name} tem ${person.age} anos`)

*/