// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
// const numbers = ['1', '2', '3', '4', '5', '6']

//const myArray = [...alphabet, ...numbers]
// const [a, b] = alphabet;
// console.log(a, b)
// const [a, , ...rest] = alphabet
// console.log(rest)


// function sumAndMultiply(a, b) {
//     return [a + b, a * b, ]
// }
// const [sum, multiply, division = 'no division'] = sumAndMultiply(3, 2)
// console.log(sum)
// console.log(multiply)
// console.log(division)


const personOne = {
    name: 'asif',
    age: 25,
    adress: {
        city: 'Dhaka',
        area: 'Nikunja'
    }
}
const personTwo = {
        firstName: 'Mir',
        favoriteFood: 'Pizza',

    }
    // const thirdPerson = {...personOne, ...personTwo }
    // console.log(thirdPerson)
function printUser({ name, age }) {
    console.log('name is: ' +
        name + '\n' + 'age is:' + age)
}
printUser(personOne)