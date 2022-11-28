//function expression 
// function anonymous

//parâmetros (parameters)

let total = 0

const sum = function(number1, numeber2) {
    let total = number1+numeber2 // sempre específique a variável para não gerar erro, mesmo que ela possa ser gerada sem o uso de var, let e const
    return total
}

/*sum(2,3) //arguments - argumentos*/

let numb1 = 34
let numb2 = 25

console.log(`o número 1 é ${numb1}`)
console.log(`o número 2 é ${numb2}`)

console.log(`a soma é ${sum(numb1, numb2)}`);

console.log(total)



