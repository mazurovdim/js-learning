import { readFileSync } from 'fs'

let data = readFileSync('./data/index.json', 'utf-8')
data = JSON.parse(data)

export function getFood(){
    return data.food 
}

export function getDrinks(){
    return data.drinks   
}