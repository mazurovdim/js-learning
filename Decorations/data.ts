import { Person, Gender } from './types';

const repka: Person = {
    nominative: 'репка',
    accusative: 'репку',
    gender: Gender.FEMALE,
}

const dedka: Person = {
    nominative: 'дед',
    accusative: 'деда',
    funnyNominative: 'дедка',
    funnyAccusative: 'дедку',
    gender: Gender.MALE,
}

const babka: Person = {
    nominative: 'бабка',
    accusative: 'бабку',
    gender: Gender.FEMALE,
}

const zhuchka: Person = {
    nominative: 'Жучка',
    accusative: 'Жучку',
    gender: Gender.FEMALE,
}

const vnuchka: Person = {
    nominative: 'внучка',
    accusative: 'внучку',
    gender: Gender.FEMALE,
}

const koshka: Person = {
    nominative: 'кошка',
    accusative: 'кошку',
    gender: Gender.FEMALE,
}

const myshka: Person = {
    nominative: 'мышка',
    accusative: 'мышку',
    gender: Gender.FEMALE,
}

export default [repka, dedka, babka, vnuchka, zhuchka, koshka, myshka]