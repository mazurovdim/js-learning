import {Person, Vegetable} from './types'

const grandfather: Person = {nominative: 'Дед', accusative: 'Дедку'}
const grandmother: Person = {nominative: 'Бабка', accusative: 'Бабку'}
const granddoughter: Person = {nominative: 'Внучка', accusative: 'Внучку'}
const dog: Person = {nominative: 'Жучка', accusative: 'Жучку'}
const cat: Person = {nominative: 'Кошка', accusative: 'Кошку'}
const mouse: Person = {nominative: 'Мышка', accusative: 'Мышку'}
const turnip: Person = {nominative: 'Репка', accusative: 'Репку'}

class RepkaTale {

    #persons: Person[]
    #vegetable: Person
    #stack: Person[] = []
    #firstPerson: Person
    #lastPerson: Person

    constructor(vegetable:Person, persons:Person[]){
        this.#persons = persons
        this.#firstPerson = persons[0]
        this.#lastPerson = persons[-1]
        vegetable.next = this.#firstPerson
        this.#vegetable = vegetable
        this.#stack.push(vegetable)
        this.#persons.forEach((person, i) => {
            if(i === this.#persons.length - 1) return
            person.next = this.#persons[i + 1]
        })
        
        
    }

    title():string {
        return `СКАЗКА "${this.#vegetable.nominative}"\n`
    }

    preface():string[]{
        const fpNominative = this.#firstPerson.nominative
        const {nominative, accusative} = this.#vegetable
        return [
            `Посадил ${fpNominative} ${accusative}.`,
            `Выросла ${nominative} большая-пребольшая.`,
            `Пошел ${fpNominative} ${accusative} тянуть.`,
            ...this.queue(this.#firstPerson)
        ]
    }

    queue(person: Person):string[]{
        const participans = [...this.#stack] // Делаем купию стека
        participans.reverse() // Переворачиваем наизнанку 
        const result = participans.map(pers => { // Превращаем в строки
            const { next } = pers
            return `${next.nominative} за ${pers.accusative}`
        })
        this.#stack.push(person)
        if(person.next != this.#lastPerson) return this.queue(person.next)
        return result
    }

    tale(){
        console.log(this.preface().join('\n'))
        
        /*const lastEpisode = this.#persons.length - 1
        const personsChain = [
            `${this.#persons[0].nominative} за ${turnip.accusative}`
        ]
        console.log([
            ...this.preface(),
            ...this.#persons.reduce((acc, person, i) => {
                if(i === lastEpisode) return [...acc]
                let nextPerson = this.#persons[i+1]
                personsChain.unshift(`${nextPerson.nominative} за ${person.accusative}`)
                return [...acc,...this.scene(person, nextPerson),...personsChain,this.upshot(i === lastEpisode - 1)]
            },[]),
        ].join('\n'))*/
    }

    scene(person: Person):string[]{
        const episode = [
            `Позвал(а) ${person.nominative} ${person.next.accusative}`,
        ]
        return episode
    }

    upshot(lastEpisode: boolean):string{
    return `тянут-потянут, — ${lastEpisode? "вытянули репку!" : "вытянуть не могут!"}`
    }
}

const repka = new RepkaTale(turnip, [grandfather, grandmother, granddoughter, dog, cat, mouse])
repka.tale()