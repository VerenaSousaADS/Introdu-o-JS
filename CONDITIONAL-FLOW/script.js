/// IF ... ELSE
/*
let temperature = 36.3
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37


if(highTemperature){
    console.log("Febre alta")
} else if(mediumTemperature){
    console.log("Febre moderada")
}else{
    console.log("Saudável")
}

*/

/*
let expression = ''

switch(expression){// puxa a expressão para o switch
    case 'a': // confere se o valor da expressão é o correto
        console.log('a')
        break // para a execução do switch apenas se verdadeiro
    case 'b':
        console.log('b')
        break
    default: // caso nenhum valor seja correto, realizará a instrução dentro de si
        console.log('default')
        break
}

// Calculadora

function calculate(number1, operator, number2) {

    let result = 0;
    
    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break;
    
        default:
            console.log('não implementado')
            break;
    }

    return result;
}

console.log(calculate(4, '%', 8))
console.log(calculate(4, '*', 8))*/


/*
    Estrutura de repetição 
    // FOR
    // break - para a execução 
    // continue - pula a execução do momento


for (let i = 10; i > 0; i--){
    if(i === 5){
        continue;
    }
    console.log(i)
};*/