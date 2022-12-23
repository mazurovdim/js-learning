export interface Person {
    nominative: string
    genetive?: string
    accusative?: string 
    next?:Person
}

export interface Parents {
    male: Person
    female: Person
}

export interface Vegetable{
    nominative: string
    accusative: string
}
