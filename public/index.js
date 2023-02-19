
const template = document.querySelector('#templates')
const basketElement = document.getElementById('basket')
const showcaseDrinks = document.getElementById('drinks')
const showcaseFood = document.getElementById('food')

function cloneBasketItem(id, title, price, amount){
    const liOrig =  template.querySelector('.basket__list-item')
    const liClone = liOrig.cloneNode(true)
    liClone.querySelector('.basket__list-item-title').textContent = title
    liClone.querySelector('.basket__list-item-amount').textContent = `На складе:${amount}`
    liClone.querySelector('.basket__list-item-count').textContent = 1
    liClone.id = id
    liClone.querySelector('.basket__list-item-up').addEventListener('click', (e) => {
        let currentCount = document.getElementById(id).querySelector('.basket__list-item-count').textContent
        if(currentCount < amount){
            +document.getElementById(id).querySelector('.basket__list-item-count').textContent++
        }
    })
    liClone.querySelector('.basket__list-item-down').addEventListener('click', (e) => {
        let currentCount = +document.getElementById(id).querySelector('.basket__list-item-count').textContent
        if(currentCount <= 1){
            document.getElementById(`${id}`).remove()
            basket.delete(id)
        }else{
            +document.getElementById(id).querySelector('.basket__list-item-count').textContent--
        }
    })
        
    basketElement.appendChild(liClone)
}

function cloneShowcaseItem(parent, id, title, price, amount){
    const liOrig =  template.querySelector('.showcase__list-item')
    const liClone = liOrig.cloneNode(true)
    liClone.querySelector('.showcase___list-item-title').textContent =`${title}, ${price} руб.`    
    liClone.querySelector('.showcase___list-item-add').addEventListener('click', (e) => {
        if(!basket.has(id)){
            cloneBasketItem(id, title, price, amount)
            basket.set(id,{title, price, amount})
        }
    })
    parent.appendChild(liClone)
}

async function getShowcase(){
   await loadData()
   food.forEach(({id, title, price, amount}) => {
        cloneShowcaseItem(showcaseFood, id, title, price, amount)
   });
   drinks.forEach(({id, title, price, amount}) => {
    cloneShowcaseItem(showcaseDrinks, id, title, price, amount)
});
}

document.addEventListener('DOMContentLoaded',getShowcase())

//TODO: Функцию cloneShowcaseItem добработать все параметры и из JSON