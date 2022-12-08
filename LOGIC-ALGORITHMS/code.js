/*

    Encontre a solução a o problema:
    
    Pergunte o nome do usuário e escreva a mensagem:
    "Olá, [nome do usuário]"



let nome = prompt("Qual seu nome?")

alert(`Olá, ${nome}!`)*/

/* 
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário


alert("Vamos somar dois números")

let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")
let result = Number(numberOne) + Number(numberTwo)

alert("A soma destes dois números é: " + result)
*/


/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.



let firstNumber = prompt ("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("A soma é " + sum)
alert("A subtração é " + sub)
alert("A multiplicação é " + mult)
alert("A divisão é " + div)
alert("O resto da divisão é " + restDiv)*/

/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota



let nome = prompt("Digite o nome do aluno: ")
let nota1 =  prompt("Digite a primeira nota: ")
let nota2 =  prompt("Digite a segunda nota: ")
let nota3 =  prompt("Digite a terceira nota: ")

nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)

media =  ((nota1 + nota2 + nota3) / 3)

media = media.toFixed(2)

if(media >= 6){
  alert(`Parabéns ${nome}! Você passou de ano, sua media foi de ${media}`)
}else{
  alert(`${nome} infelizmente você precisa melhorar, ficou de recuperação, sua média foi de ${media}`)
};
*/


/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.


let items = [];

for(let item = 0; item < 10; item++){
    let itemName = prompt("Digite o item " + (item + 1))
    items[item] = itemName
}

alert(items)
*/


/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas


let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempts++
}


if(xAttempts != 1){
    alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)

}else{
    alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativa`)
    
}

console.log(randomNumber, xAttempts);
*/


