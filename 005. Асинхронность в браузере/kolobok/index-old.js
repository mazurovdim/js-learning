
async function createSlide(slideName){ 
    const slide = document.createElement('section') 
    const slideImage = document.createElement('img') 
    const slideText = document.createElement('p') 
    const slidePromiseText = await fetch(`data/texts/${slideName}.txt`).then(data => data.text()) 
 
    slideImage.src = `data/images/${slideName}.jpg`
    slideText.textContent = slidePromiseText 
    slide.appendChild(slideImage) 
    slide.appendChild(slideText)
    slide.classList.add('slide')
    slide.classList.add('faded-card')
    return slide
} 

function funcDelay(ms, callback){
    return new Promise(res => {
        setTimeout(() => res(callback), ms)
    })
}

async function showSlide(){
/*  Promise.all(['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'].map(el => createSlide(el)))
    .then(bls => bls.forEach((bl, index) => {
        setTimeout(() => {document.querySelector('.content-wrapper').appendChild(bl)}, index * 2000)
    }))
    let slidesPromisMass = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'].map(el => createSlide(el))
    for(const slide of slidesPromisMass){
        await funcDelay(2000, slide).then(sl => document.querySelector('.content-wrapper').appendChild(sl))
    }*/
}

showSlide()

export {createSlide}

