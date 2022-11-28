/*Manipulando String e Números

Transformar String em Número e Número em String

*/

let string = "123"

console.log(Number(string))

let numb = 321

console.log(String(numb))

//Contar quantos caracteres tem uma palavra e quantos digitos tem um número

let word = "Paralelepipedo"

console.log(word.length)
let number = 1234
console.log(String(number).length);


// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number1 = 345.33452255
console.log(number1.toFixed(2).replace(".",","));


// Transforme letras minúculas em maiúsculas. Faça o contrário disso também

let words = "Programar é um barato"
console.log(words.toUpperCase())

console.log(words.toLowerCase());

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram os espaços, coloque _


let phrase1 = "Eu quero ser uma boa programadora!"
let myArray = phrase1.split(" ")
let phrase1WithUnderscore = myArray.join("_")

console.log(phrase1WithUnderscore.toUpperCase())


// Verificar se o texto contém a palavra Amor (Lembre-se o método includes() é case sensitive, ou seja, ele considera as letras maiúsculas e minúsculas)

let phrase2 = "Eu quero viver o Amor"
console.log(phrase2.includes("Amor"));