let inMas = [false, 0, 2, 7, 'ff', 22 , '3', 0]

function moveZerosWithFilter(massive){
    let filteredMassive = massive.filter(el => el !== 0)
    let zerosMassive = massive.filter(el => el === 0)
    return([...filteredMassive,...zerosMassive])
}

function moveZerosWithForEach(array){
    let zeroes = []
    const output = []
    array.forEach(el => {
        if(el === 0) zeroes.push(el)
        else output.push(el)
    })
    return [...output, ...zeroes]
}

console.log(moveZerosWithFilter(inMas))
console.log(moveZerosWithForEach(inMas))