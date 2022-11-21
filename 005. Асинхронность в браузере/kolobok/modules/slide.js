export class Slide extends HTMLElement{
    connectedCallback(){
        const that = this
        const textParagraph = document.createElement('p')
        const slideImage = document.createElement('img')
        const resource = this.getAttribute('resource')
        
        fetch(`data/texts/${resource}.txt`)
            .then(response => response.text())
            .then(text => textParagraph.textContent = text)
        fetch(`data/images/${resource}.jpg`)
            .then(slideImage.src = `data/images/${resource}.jpg`)

        that.appendChild(slideImage)  
        that.appendChild(textParagraph)
    }
}

