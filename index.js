import express from "express"
import food from './food/index.js'
import drinks from './drinks/index.js'
import dotenv from 'dotenv'

dotenv.config()
const { HTTP_PORT } = process.env

const app  = express() 

app.use(express.static('public'))
app.use('/api/food', food);
app.use('/api/drinks', drinks);


app.listen(HTTP_PORT)

console.log(`server is listening on port:${HTTP_PORT}`)