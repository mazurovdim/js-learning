const beatles = [
    {name: 'John Lennon', age: 40},
    {name: 'Paul McCartney', age: 80},
    {name: 'George Harrison', age: 60},
    {name: 'Ringo Star', age: 78},    
]

function makeStrFromArray(){
    const names = beatles.map((el, i) => `${i+1}: ${el.name}`).join(", ")
    return `Состав участников группы Beatles: ${names}.`
    /*let str = beatles.reduce((str,el,i) => {
        return str + ++i + ': ' + el.name + ', '
    }, 'Состав участников группы Beatles: ')
    return str.substring(0, str.length - 2) */
}

function getAverageAge(){
    return beatles.reduce((sum, el) => {
         return sum + (el.age/beatles.length)        
    }, 0)
}

function getYoungest(){
    return beatles.map(({age}) => age).reduce((sum, el) => Math.min(el, sum), Number.MAX_VALUE)
}

function getOldest(){
    return beatles.reduce((max, el) => {
       return max > el.age ? max : el.age 
    }, 0)
}

function getSumOfAges(){
    return beatles.reduce((sum, el) =>{
        return sum + el.age
    }, 0)
}

function sortByAge(){
    return beatles.sort((a, b) => a.age > b.age ? 1 : -1).map(el => el.name)
}

function getYoungerThan(age){
    const person = beatles.find(el => el.age < age)
    return person ? person.name : "Not found"
}

function getOld(){
    return beatles.filter(el => el.age > 50)
}

function getNames(){
    return beatles.map(el => el.name)
}

// TODO: Найти средний возраст, самого младшего, самого старшего, сумму возрастов с помощью reduce.
// Составить слоган из имен массива с помощью reduce

module.exports = {getNames, getOld, getYoungerThan, sortByAge, getSumOfAges, getOldest, getYoungest, getAverageAge, makeStrFromArray}