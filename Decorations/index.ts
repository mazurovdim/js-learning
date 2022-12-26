import data from "./data"
import { Person, Gender } from "./types"

class Story {

    #data: Person[]
    #last: number = 1
    #vegetable: Person
    #gardner: Person

    constructor(data: Person[]){
        this.#data = data
        const [vegetable, gardner] = data
        this.#vegetable = vegetable
        this.#gardner = gardner
        data.forEach((pers, i, arr) => {
            if(i >= 0) {
                pers.previous = data[i - 1]
                if (i != arr.length - 1) pers.next = data[i + 1]
            }
            if (i === 1) console.log(data[i].next)
        })
    }

    refrain(){
        this.#data
            .slice(0, ++this.#last)
            .reverse()
            .forEach(pers => {
                if (this.#last < this.#data.length) console.log(`${pers.next.nominative} за ${pers.accusative}`)
            })
    }

    tell(){
        this.#data.forEach((pers, i, arr) =>{
            if(i === 0) return console.log(`Посадил ${this.#gardner.nominative} ${this.#vegetable.accusative}. Выросла ${this.#vegetable.nominative} большая-пребольшая.\nПошел ${this.#gardner.nominative} ${this.#vegetable.accusative} рвать: тянет-потянет, вытянуть не может!`)
            const isLast = this.#data.length - 1 
            if(i != isLast){
                console.log(`\nПозвал-а ${pers.nominative} ${pers.next.accusative}`)
                this.refrain() 
                console.log(`тянут-потянут, ${i === isLast - 1? 'вытянули репку!': 'вытянуть не могут'}`)
            }             
        })
    }
}

const story = new Story(data)
story.tell()
