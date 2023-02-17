const root = document.getElementById('root')
const test = document.getElementById('test')

let count = 0 

function recursion(div){
    div.childNodes.forEach(el => {
        if (el.nodeName.toLowerCase() !== 'div') return 
        recursion(el)
    })
    if (div === root) return 
    let parent = div.parentNode
    let localCount = 1 
    while(parent !== root){
        parent = parent.parentNode
        localCount++
    }
    if (localCount > count) count = localCount
}

recursion(root)
console.log(count)