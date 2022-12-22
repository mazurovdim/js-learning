import {Person, Vegetable} from './types'

const grandfather: Person = {nominative: 'Дед', accusative: 'Дедку'}
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

    tale(){
        const lastEpisode = this.#persons.length - 1
        const personsChain = [
            `Дедка за ${turnip.accusative}`
        ]
        console.log([
            ...this.preface(),
            ...this.#persons.reduce((acc, person, i) => {
                if(i === lastEpisode) return [...acc]
                let nextPerson = this.#persons[i+1]
                personsChain.unshift(`${nextPerson.nominative} за ${person.accusative}`)
                return [...acc,...this.scene(person, nextPerson),...personsChain,this.upshot(i === lastEpisode - 1)]
            },[]),
            
        ].join('\n'))
    }

    scene(current: Person, next?: Person):string[]{
        const episode = [
            `\n`,
            `Позвал(а) ${current.nominative} ${next.accusative}`,
        ]
        return episode
    }

    upshot(lastEpisode: boolean):string{
        if(lastEpisode) return "тянут-потянут, — вытянули репку!"
        return "тянут-потянут, вытянуть не могут!"
    }
}

const repka = new RepkaTale(turnip, [grandfather, grandmother, granddoughter, dog, cat, mouse])
repka.tale()