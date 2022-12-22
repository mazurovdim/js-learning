import {Person, Vegetable} from './types'

const grandfather: Person = {nominative: 'Дед'}
const grandmother: Person = {nominative: 'Бабка', accusative: 'Бабку'}
const granddoughter: Person = {nominative: 'Внучка', accusative: 'Внучку'}
const dog: Person = {nominative: 'Жучка', accusative: 'Жучку'}
const cat: Person = {nominative: 'Кошка', accusative: 'Кошку'}
const mouse: Person = {nominative: 'Мышка', accusative: 'Мышку'}
const turnip: Vegetable = {nominative: 'Репка', accusative: 'Репку'}

class RepkaTale {
    #persons: Person[]
    #vegetable: Vegetable

    constructor(vegetable:Vegetable, persons:Person[]){
        this.#persons = persons
        this.#vegetable = vegetable
    }

    title():string {
        return `СКАЗКА "${this.#vegetable.nominative}"\n`
    }

    preface():string[]{
        const [firstPerson] = this.#persons 
        const fpNominative = firstPerson.nominative
        const {nominative, accusative} = this.#vegetable
        return [
            `Посадил ${fpNominative} ${accusative}.`,
            `Выросла ${nominative} большая-пребольшая.`,
            `Пошел ${fpNominative} ${accusative} тянуть: тянет-потянет, вытянуть не может!`
        ]
    }

    tale():void{
        console.log([
            ...this.preface()
        ].join('\n'))
        console.log(this.#persons)
        /*for(let i = 0; i < this.#persons.length - 1; i++){
            console.log(this.scene(this.#persons[i], this.#persons[i+1]))
        }*/
        this.#persons.map((person, personIndex, personMas)=>{
            let nextPerson = personMas[personIndex + 1]
            if(nextPerson) console.log(this.scene(person, nextPerson))
        })
    }

    scene(current: Person, next?: Person):string{
        return `Позвал(а) ${current.nominative} ${next.accusative}`
    }

}

const repka = new RepkaTale(turnip, [grandfather, grandmother, granddoughter, dog, cat, mouse])
repka.tale()