// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight) // undefined

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
let name, age, stars, isSubscribed

name = 'Naldo'
age = 23
stars = 4.9
isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student1 = { //4.1
    name: 'Naldo',
    age: 23,
    weight: 74.9,
    isSubscribed: true
}

console.log(typeof student) // 4. object

console.log(`O ${student1.name} de idade ${student1.age} pesa ${student1.weight} kg.`) // 4.2

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student1
]

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

let student2 = {
    name: 'Rafa',
    age: 22,
    weight: 84.9,
    isSubscribed: false
}

students[1] = student2

console.log(students)

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/

console.log(a)
    var a = 1