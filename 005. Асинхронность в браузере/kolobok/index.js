const tale = document.querySelector('#tale')
const nextButton = document.querySelector('.next-slide')
const prevButton = document.querySelector('.prev-slide') 
let currentSlide = 0
let sections = null

Promise.all(['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'].map(createSlide))
        .then(slides => {
            slides.forEach(slide => tale.appendChild(slide))
            slides[0].classList.remove('hidden')
            sections = Array.from(slides)
        })

async function createSlide(slideName){ 
    const slide = document.createElement('section') 

    const slideImage = document.createElement('img') 
    slideImage.src = `data/images/${slideName}.jpg`
    slide.appendChild(slideImage) 

    const slideParagraph = document.createElement('p') 
    const slideResponse = await fetch(`data/texts/${slideName}.txt`)
    if(!slideResponse.ok) throw 'Не удалось загрузить ресурс'
    const slideText = await slideResponse.text()
    slideParagraph.textContent = slideText 
    
    slide.appendChild(slideParagraph)
    slide.classList.add('section')
    slide.classList.add('hidden')
    return slide
} 

function showSlide(){
    sections.forEach(section => section.classList.add('hidden'))
    sections[currentSlide].classList.remove('hidden')
    sections[currentSlide].classList.add('faded-card')
}

function showNextSlide(){
    console.log(sections)
    console.log('next')
    if(currentSlide === sections.length - 1) return
    currentSlide++
    showSlide()
}

function showPrevSlide(){
    console.log(sections)
    console.log('prev')
    if (currentSlide === 0) return
    currentSlide--
    showSlide()
}

nextButton.addEventListener('click', showNextSlide)
prevButton.addEventListener('click', showPrevSlide)
