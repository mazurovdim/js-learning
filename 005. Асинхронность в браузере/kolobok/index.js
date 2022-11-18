let currentSlide = 0
let sections //= Array.from(document.querySelectorAll('section')) Создаются асинхронно
const nextButton = document.querySelector('.next-slide')
const prevButton = document.querySelector('.prev-slide') 

function showSlide(){
    sections.forEach(section => section.classList.add('hidden'))
    sections[currentSlide].classList.remove('hidden')
}

function showNextSlide(){
    console.log('next')
    if(currentSlide === sections.length - 1) return
    currentSlide++
    showSlide()
}

nextButton.addEventListener('click', showNextSlide)

//TODO Создать динамическое создание секций внутри div tale