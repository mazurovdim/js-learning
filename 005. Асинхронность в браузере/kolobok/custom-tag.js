import { Slide } from './modules/slide.js'
import { tale, setSections } from './modules/listeners.js'

customElements.define('kolobok-slide', Slide);
['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth']
    .forEach(resource => {
        const slide = document.createElement('kolobok-slide')
        slide.setAttribute('resource', resource)
        tale.appendChild(slide)
    })

const slidesNodeList = document.querySelectorAll('kolobok-slide')
setSections(slidesNodeList)

let slidesArray = Array.from(slidesNodeList)
slidesArray[0].classList.remove('hidden')

