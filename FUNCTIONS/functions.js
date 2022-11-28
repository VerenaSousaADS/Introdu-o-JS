/*

    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword

*/


function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " andando"
    }
}

const verena = new Person("Verena")
const mayk = new Person("Mayk")

console.log(verena.walk())
console.log(mayk.walk())


