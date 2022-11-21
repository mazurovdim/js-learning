import { Slide } from './modules/slide.js'
import { tale, setSections } from './modules/listeners.js'

customElements.define('kolobok-slide', Slide);
['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth']
    .map(resource => {
        const slide = document.createElement('kolobok-slide')
        slide.setAttribute('resource', resource)
        tale.appendChild(slide)
        slide.classList.add('section')
        slide.classList.add('hidden')
    })

const slidesNodeList = document.querySelectorAll('kolobok-slide')
setSections(slidesNodeList)

let slidesArray = Array.from(slidesNodeList)
slidesArray[0].classList.remove('hidden')

