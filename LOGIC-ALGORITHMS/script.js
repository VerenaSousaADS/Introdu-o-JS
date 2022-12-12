/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
  Escreva uma lista contendo a idade dos pacientes
  Escreva uma lista contendo o peso dos pacientes
  Escreva uma lista contendo a altura dos pacientes
*/


const patients = [
    {
        name: "Luis",
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        name: "Alex",
        age: 27,
        weight: 90,
        height: 180,
    },
    {
        name: "Bruna",
        age: 45,
        weight: 70,
        height: 170,
    }
]


let patientsNames = []
let patientsAges = []
let patientsWeights = []
let patientsHeights = []

for (let patient of patients) {
    patientsNames.push(patient.name)
    patientsAges.push(patient.age)
    patientsWeights.push(patient.weight)
    patientsHeights.push(patient.height)
        
}

alert(`O nome dos pacientes são ${patientsNames}, suas respectivas idades são ${patientsAges}, seus respectivos pesos são ${patientsWeights} e suas alturas respectivas são ${patientsHeights}`)