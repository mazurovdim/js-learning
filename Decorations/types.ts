export enum Gender {
    MALE,
    FEMALE
}

export interface Person {
    nominative: string
    accusative?: string 

    funnyNominative?: string
    funnyAccusative?: string 

    next?:Person
    previous?:Person
    gender?: Gender
}
