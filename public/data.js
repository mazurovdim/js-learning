const basket = new Map()
let drinks, food

async function loadData(){
    const res = await fetch('index.json')
    const data = await res.json()
    drinks = data.drinks
    food = data.food
}