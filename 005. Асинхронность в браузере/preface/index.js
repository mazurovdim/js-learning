
async function createSlide(slideName){ 
    const slide = document.createElement('div') 
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

Promise.all(['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'].map(el => createSlide(el)))
    .then(bls => bls.forEach(bl => {
        document.querySelector('.content-wrapper').appendChild(bl)
    }))


