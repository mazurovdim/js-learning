export const tale = document.querySelector('#tale')
const nextButton = document.querySelector('.next-slide')
const prevButton = document.querySelector('.prev-slide') 
let currentSlide = 0
let sections = []

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

export function setSections(slides){
    sections = slides
}