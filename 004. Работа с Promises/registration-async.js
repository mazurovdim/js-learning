const { readFile, writeFile } = require('fs').promises
const { getFirstName, getSecondName, getYear, closeReader } = require('./registration')

async function registration(person = {}){
    try{
        if (!person.firstName) person.firstName = await getFirstName()
        if (!person.secondName) person.secondName = await getSecondName()
        if (!person.year) person.year = await getYear()
        closeReader()
        const { firstName, secondName, year } = person
        const output = `Спасибо, ${firstName}, регистрация завершена.\nИмя: ${firstName}\nФамилия: ${secondName}\nГод рождения: ${year}\n`
        const header = await readFile('../header.txt')
        await writeFile('person.txt', header + output)
        console.log(output)
    }
    catch(error){
        if(error.message.includes('no such file or directory')){
            console.log('Правильно укажите заголовочный файл')
        } 
        else registration(person)
        
    }
}

registration()