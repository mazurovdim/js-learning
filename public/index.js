const basketData = {}

async function getProducts(url, ul){
    const resp = await fetch(url)
    if (!resp.ok) throw 'Не удалось загрузить данные'
    const data = await resp.json()

    data.forEach(element => {
        const liItem = document.createElement('li')
        const liText = document.createElement('p')
        const liButton = document.createElement('a')
        const { title, price, id, amount} = element

        liText.textContent = `${title}, ${price} руб.`
        liButton.textContent = 'Добавить'
        liItem.appendChild(liText)
        liItem.appendChild(liButton)
        liButton.addEventListener('click', function(){
            if(!Object.keys(basketData).includes(String(id))){
                let counterMax = amount
                let idItem = id
                const liItem = document.createElement('li')
                liItem.classList.add('basket__list-item')
                const liText = document.createElement('p')
                const liButton = document.createElement('a')
                const divCountCont = document.createElement('div')
                const countUpButton = document.createElement('button')
                countUpButton.classList.add('basket__up-button')
                const countDownButton = document.createElement('button')
                countDownButton.classList.add('basket__down-button')
                const itemCounter = document.createElement('p')
                itemCounter.classList.add('basket__counter')
                const itemBalance= document.createElement('p')
                
                liText.textContent = `${title}, ${price} руб.`
                liItem.appendChild(liText)
                liItem.appendChild(liButton)
                countUpButton.textContent = '+'
                countDownButton.textContent = '-'
                itemCounter.textContent = 1
                itemBalance.textContent = `На складе: ${amount}`
                divCountCont.appendChild(itemBalance)
                divCountCont.appendChild(countDownButton)
                divCountCont.appendChild(itemCounter)
                divCountCont.appendChild(countUpButton)
                liItem.appendChild(divCountCont)
                liItem.id = `${id}`
                document.querySelector('#basket').appendChild(liItem)
                basketData[id] = title

                countUpButton.addEventListener('click',function(e){
                    let counterNow = +document.getElementById(`${idItem}`).querySelector('div > p.basket__counter').textContent
                    if( counterNow < counterMax){
                        +document.getElementById(`${idItem}`).querySelector('div > p.basket__counter').textContent++
                    }
                })
                countDownButton.addEventListener('click',function(e){
                    let counterNow = +document.getElementById(`${idItem}`).querySelector('div > p.basket__counter').textContent
                    if( counterNow > 1){
                        +document.getElementById(`${idItem}`).querySelector('div > p.basket__counter').textContent--
                    }
                })
            }
        })
        ul.appendChild(liItem)
    });
}

for(const item of ['food','drinks']) getProducts(`${item}`, document.querySelector(`#${item} ul`))




