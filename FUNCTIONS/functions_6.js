// callback function

function sayMyName(name){
    console.log('antes de executar a funcao callback')

    name()

    console.log('depois de executar a callback')
}


sayMyName(
    () =>{
        console.log('estou em uma callback')
    }
)

//uma callback é uma função que está passando como parâmetro outra função

// o código acima é a mesma coisa que o abaixo, a diferença é que um é uma callback e outro não.

function sayMyName(name){
    console.log('antes de executar a funcao callback')

    function name(){
        console.log('estou em uma callback')
    }
    name()

    console.log('depois de executar a callback')
}


sayMyName()
