/*

    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

*/

// Coersitivamente ou forçosamente o Javascript transformou o numero 5 em String

console.log('9' + 5)

// Aqui manualmente transformo o 9, que está como String, em Number, dessa forma ele Soma com o Number 5.

console.log(Number('9') + 5);






// Manipulando Arrays

// Criar Array com construtor

let myArray = new Array('a', 'b', 'c')
console.log(myArray)


//Contar elementos de um array
console.log(['a','b','c'].length)


//Transformar uma cadeia de caracteres em elementos de um array

let word = "manipulação"
console.log(Array.from(word))